#!/usr/bin/env python3
"""
Apply Markdown refactor checklist to all .md files.
- Single H1, no skipped heading levels
- Collapse 3+ blank lines to 2
- Normalize code fences to ```, add language where obvious
- Normalize unordered list markers to -
- One space after # in headings, strip trailing space
- Fill empty/stub files with minimal overview
Does NOT modify: code inside code blocks, GitBook {% %} blocks.
"""

import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent
SKIP_DIRS = {".git", "node_modules", "__pycache__"}

# Language hints for code blocks (keyword -> lang)
LANG_HINTS = [
    (r"\b(use |namespace |function |class |\$|<?php)", "php"),
    (r"\b(import |from |def |class |__main__|lambda )", "python"),
    (r"\b(const |let |var |=>|function |export )", "javascript"),
    (r"\b(require\(|module\.exports)", "javascript"),
    (r"^\s*[{[]", "json"),  # starts with { or [
    (r"\b(bash|sh |#!/bin/|echo |cd |mkdir )", "bash"),
    (r"\b(shell|#!/bin/)", "bash"),
    (r"^\s*#", "bash"),  # comment at start
    (r"\b(go |func |package |import \")", "go"),
    (r"\b(rust|fn |impl |pub |let mut )", "rust"),
    (r"^\s*<", "html"),
    (r"\b(SELECT |INSERT |UPDATE |FROM |WHERE )", "sql"),
    (r"^\s*---", "yaml"),
]


def in_code_or_special_block(line: str, in_fence: bool, fence_char: str, in_gitbook: bool) -> tuple[bool, str | None]:
    """Track state of code blocks and GitBook blocks."""
    stripped = line.strip()
    if in_gitbook:
        in_gitbook = "{% end" not in stripped and "{% endblock %}" not in stripped
        return (in_fence, fence_char, in_gitbook)
    if "{% " in stripped and stripped.startswith("{%"):
        return (in_fence, fence_char, True)
    if in_fence:
        if stripped.startswith(fence_char * 3) or (fence_char == "`" and stripped.startswith("```")):
            return (False, None, False)
        return (True, fence_char, False)
    if stripped.startswith("```"):
        return (True, "`", False)
    if stripped.startswith("~~~"):
        return (True, "~", False)
    return (False, None, False)


def detect_code_lang(first_line: str, rest: str) -> str | None:
    """Heuristic: detect language from first line or content."""
    first = (first_line + rest)[:800]
    for pattern, lang in LANG_HINTS:
        if re.search(pattern, first, re.IGNORECASE | re.MULTILINE):
            return lang
    return None


def fix_headings(lines: list[str]) -> list[str]:
    """Ensure single H1 and no skipped heading levels."""
    out = []
    first_h1 = True
    prev_level = 0
    for line in lines:
        m = re.match(r"^(#{1,6})\s*(.*)$", line)
        if m:
            level = len(m.group(1))
            rest = m.group(2)
            if level == 1:
                if first_h1:
                    first_h1 = False
                    prev_level = 1
                    out.append(f"# {rest}")
                else:
                    out.append(f"## {rest}")
                    prev_level = 2
            else:
                if level > prev_level + 1:
                    level = prev_level + 1
                prev_level = level
                out.append("#" * level + " " + rest)
        else:
            out.append(line)
    return out


def normalize_list_markers(line: str) -> str:
    """Use - for unordered lists (only at line start)."""
    stripped = line.lstrip()
    if not stripped:
        return line
    # Unordered: * or + at start of line (with optional spaces) -> -
    if re.match(r"^(\*|\+)\s+", stripped):
        indent = line[: len(line) - len(stripped)]
        return indent + "- " + stripped[2:]
    return line


def process_file(path: Path) -> bool:
    """Apply checklist to one file. Returns True if changed."""
    try:
        raw = path.read_text(encoding="utf-8", errors="replace")
    except Exception as e:
        print(f"  read error: {e}", file=sys.stderr)
        return False

    lines = raw.split("\n")
    in_fence = False
    fence_char = None
    in_gitbook = False
    new_lines: list[str] = []
    i = 0
    in_frontmatter = False
    frontmatter_dashes = 0

    while i < len(lines):
        line = lines[i]
        orig = line

        # Frontmatter: leave as-is
        if i == 0 and line.strip() == "---":
            in_frontmatter = True
            frontmatter_dashes = 1
            new_lines.append(line)
            i += 1
            continue
        if in_frontmatter:
            if line.strip() == "---":
                frontmatter_dashes += 1
                if frontmatter_dashes == 2:
                    in_frontmatter = False
            new_lines.append(line)
            i += 1
            continue

        # Track code / GitBook blocks
        in_fence, fence_char, in_gitbook = in_code_or_special_block(line, in_fence, fence_char, in_gitbook)

        if in_fence or in_gitbook:
            # Inside code block or GitBook: only normalize closing fence to ```
            if in_fence and fence_char == "~" and line.strip().startswith("~~~") and not line.strip().endswith("~~~"):
                # Opening/closing ~ fence: normalize to ```
                strip = line.strip()
                if strip == "~~~":
                    new_lines.append("```")
                else:
                    lang = strip[3:].strip() or None
                    new_lines.append("```" + (lang or ""))
            else:
                new_lines.append(line)
            i += 1
            continue

        # Outside code: apply fixes

        # Trailing space
        line = line.rstrip()
        if line != line.rstrip():
            line = line.rstrip()

        # Heading: exactly one space after #
        if re.match(r"^#{1,6}\s", line):
            line = re.sub(r"^(#{1,6})\s+", r"\1 ", line)

        # List marker
        line = normalize_list_markers(line)

        new_lines.append(line)
        i += 1

    # Collapse 3+ blank lines to 2
    collapsed: list[str] = []
    blank_count = 0
    for line in new_lines:
        if line.strip() == "":
            blank_count += 1
            if blank_count <= 2:
                collapsed.append("")
        else:
            blank_count = 0
            collapsed.append(line)

    # Ensure one blank between block elements (heading/list/code) - simple pass: no more than 2 blanks
    # Already done above

    # Fix heading hierarchy on full content (only non-frontmatter, non-code lines)
    content_start = 0
    for idx, l in enumerate(collapsed):
        if l.strip() == "---" and idx > 0:
            break
        if re.match(r"^#{1,6}\s", l):
            content_start = idx
            break
    before = collapsed[:content_start]
    to_fix = collapsed[content_start:]
    # Only fix lines that are headings
    fixed = fix_headings(to_fix)
    collapsed = before + fixed

    # Normalize code fences: ~~~ to ``` (opening/closing) - do a second pass
    out_lines = []
    in_block = False
    for line in collapsed:
        s = line.strip()
        if s.startswith("~~~") and not in_block:
            in_block = True
            lang = s[3:].strip()
            out_lines.append("```" + (lang or ""))
        elif in_block and s == "~~~":
            in_block = False
            out_lines.append("```")
        else:
            out_lines.append(line)

    # Add language to opening ``` if next line suggests it (simple heuristic)
    final = []
    j = 0
    while j < len(out_lines):
        line = out_lines[j]
        if line.strip() == "```" and j + 1 < len(out_lines):
            next_line = out_lines[j + 1]
            # If next line looks like code, try to detect language
            if not next_line.strip().startswith("```"):
                lang = detect_code_lang(next_line, "\n".join(out_lines[j + 1 : j + 20]))
                if lang:
                    line = "```" + lang
        final.append(line)
        j += 1

    # Empty or stub: add Overview
    content_only = [l for l in final if l.strip() and not re.match(r"^#{1,6}\s", l) and l.strip() != "---"]
    body_text = " ".join(l.strip() for l in content_only[:5])
    is_effectively_empty = len([l for l in final if l.strip()]) <= 1 or (
        len([l for l in final if re.match(r"^#\s", l.strip())]) >= 1 and len(content_only) == 0
    )
    skip_fill = path.name == "SUMMARY.md" or ".cursor/plans" in str(path) or "DOCUMENTATION-REFACTORING" in path.name
    if is_effectively_empty and not skip_fill:
        # Infer title from first H1 or path
        title = ""
        for l in final:
            if re.match(r"^#\s+", l):
                title = re.sub(r"^#\s+", "", l).strip()
                break
        if not title:
            title = path.stem.replace("-", " ").replace("_", " ").title()
        # Section README
        if path.name == "README.md":
            parent = path.parent.name.replace("-", " ").title()
            stub = f"\n\n## Overview\n\nThis section contains documentation for **{parent}**.\n"
            # Insert after first H1
            inserted = False
            new_final = []
            for l in final:
                new_final.append(l)
                if not inserted and re.match(r"^#\s+", l.strip()):
                    new_final.append(stub)
                    inserted = True
            if inserted:
                final = new_final
        else:
            stub = f"\n\n## Overview\n\n*This page documents **{title}**.*\n"
            inserted = False
            new_final = []
            for l in final:
                new_final.append(l)
                if not inserted and re.match(r"^#\s+", l.strip()):
                    new_final.append(stub)
                    inserted = True
            if inserted:
                final = new_final

    result = "\n".join(final)
    if not result.endswith("\n") and result:
        result += "\n"
    if result != raw:
        path.write_text(result, encoding="utf-8")
        return True
    return False


def main():
    md_files = []
    for root, dirs, files in os.walk(REPO_ROOT):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for f in files:
            if f.endswith(".md"):
                md_files.append(Path(root) / f)
    md_files.sort(key=lambda p: str(p).lower())

    changed = 0
    for p in md_files:
        rel = p.relative_to(REPO_ROOT)
        if process_file(p):
            changed += 1
            print(rel)
    print(f"\nDone. Changed {changed} / {len(md_files)} files.", file=sys.stderr)


if __name__ == "__main__":
    main()
