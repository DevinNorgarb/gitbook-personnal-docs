#!/usr/bin/env python3
"""
Convert GitBook-specific markdown tags to portable markdown for mdBook / GitHub Pages.
Run from repo root: python3 scripts/convert_gitbook_tags.py
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
SKIP_PARTS = frozenset({".cursor", "book", ".git"})


def walk_markdown() -> list[Path]:
    out: list[Path] = []
    for p in ROOT.rglob("*.md"):
        rel = p.relative_to(ROOT)
        if any(part in SKIP_PARTS for part in rel.parts):
            continue
        if rel.parts[0].startswith(".") and rel.parts[0] not in (".github",):
            continue
        out.append(p)
    return out


def link_target(rel_src: str) -> str:
    rel_src = rel_src.strip()
    if any(c in rel_src for c in " ()"):
        return f"(<{rel_src}>)"
    return f"({rel_src})"


def decode_gitbook_image_url(url: str) -> str | None:
    if "~gitbook/image" not in url and "gitbook/image" not in url:
        return None
    key = "url="
    idx = url.find(key)
    if idx == -1:
        return None
    start = idx + len(key)
    end = len(url)
    for sep in ("\\&", "&width", "&dpr", "&quality", "&sign", "&sv", ")", " "):
        pos = url.find(sep, start)
        if pos != -1 and pos < end:
            end = pos
    try:
        return unquote(url[start:end])
    except Exception:
        return None


def replace_gitbook_proxy_images(text: str) -> str:
    pattern = re.compile(
        r"https?://[^\s)]+?~gitbook/image\?[^\s)]+(?:\\&[^\s)]+)*",
        re.IGNORECASE,
    )

    def repl(m: re.Match[str]) -> str:
        raw = m.group(0)
        decoded = decode_gitbook_image_url(raw)
        return decoded if decoded else raw

    return pattern.sub(repl, text)


def _embed_link(url: str, caption: str) -> str:
    cap = caption.strip().replace("&#x20;", " ")
    cap = re.sub(r"\s+", " ", cap)
    if cap and cap not in ("=", r"\=", "\\="):
        return f"[{cap}]({url})"
    return f"<{url}>"


def repair_half_converted_embeds(text: str) -> str:
    """Fix `<url>` + caption + `{% endembed %}` left by an earlier one-line embed pass."""
    return re.sub(
        r"<(https?://[^>\s]+)>\s*(.*?)\s*\{%\s*endembed\s*%\}",
        lambda m: _embed_link(m.group(1), m.group(2)),
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )


def convert_content(text: str) -> str:
    # GitBook proxy images -> underlying image URL
    text = replace_gitbook_proxy_images(text)

    text = repair_half_converted_embeds(text)

    # {% embed url="..." %} ... {% endembed %} (caption between tags)
    text = re.sub(
        r"\{%\s*embed\s+url=[\"']([^\"']+)[\"']\s*%\}\s*(.*?)\s*\{%\s*endembed\s*%\}",
        lambda m: _embed_link(m.group(1).strip(), m.group(2)),
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )

    # One-line {% embed url="..." %}
    text = re.sub(
        r"\{%\s*embed\s+url=[\"']([^\"']+)[\"']\s*%\}",
        lambda m: f"<{m.group(1)}>",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(r"\n?\{%\s*endembed\s*%\}\s*", "\n", text, flags=re.IGNORECASE)

    # {% file src="..." %}
    def file_repl(m: re.Match[str]) -> str:
        raw_path = m.group(1).strip()
        name = Path(raw_path).name
        return f"[{name}]{link_target(raw_path)}"

    text = re.sub(
        r"\{%\s*file\s+src=(['\"])(.*?)\1\s*%\}",
        file_repl,
        text,
        flags=re.IGNORECASE | re.DOTALL,
    )

    # {% hint style="info" %} ... {% endhint %}
    def hint_repl(m: re.Match[str]) -> str:
        style = (m.group(1) or "info").lower()
        body = m.group(2).strip()
        label = {
            "info": "Note",
            "warning": "Warning",
            "danger": "Danger",
            "success": "Tip",
        }.get(style, style.title())
        lines = body.splitlines()
        quoted = "\n".join(f"> {ln}" if ln.strip() else ">" for ln in lines)
        return f"> **{label}**\n>\n{quoted}\n"

    text = re.sub(
        r"\{%\s*hint\s+style=[\"']([^\"']+)[\"']\s*%\}\s*(.*?)\s*\{%\s*endhint\s*%\}",
        hint_repl,
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )

    def bare_hint_repl(m: re.Match[str]) -> str:
        body = m.group(1).strip()
        lines = body.splitlines()
        quoted = "\n".join(f"> {ln}" if ln.strip() else ">" for ln in lines)
        return f"> **Note**\n>\n{quoted}\n"

    text = re.sub(
        r"\{%\s*hint\s*%\}\s*(.*?)\s*\{%\s*endhint\s*%\}",
        bare_hint_repl,
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )

    # {% code title="..." %} ... {% endcode %} (optional extra attributes on opening tag)
    def code_repl2(m: re.Match[str]) -> str:
        title = (m.group(1) or "").strip() or "Code"
        body = m.group(2).strip()
        body = re.sub(r"```(json|php)\s*\n", "```\n", body)
        return f"**{title}**\n\n{body}\n\n"

    text = re.sub(
        r"\{%\s*code\s+title=[\"']([^\"']*)[\"'][^%]*%\}\s*(.*?)\s*\{%\s*endcode\s*%\}",
        code_repl2,
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )

    text = re.sub(
        r"\{%\s*@github-files/github-code-block\s+url=[\"']([^\"']+)[\"']\s*%\}",
        r"[View on GitHub](\1)",
        text,
        flags=re.IGNORECASE,
    )

    text = re.sub(
        r"\{%\s*content-ref\s+url=[\"']([^\"']+)[\"']\s*%\}\s*(.*?)\s*\{%\s*endcontent-ref\s*%\}",
        lambda m: m.group(2).strip(),
        text,
        flags=re.DOTALL | re.IGNORECASE,
    )

    # Broken code fences before GitBook {% endstep %}
    text = re.sub(r"```json\s*\n(\s*\{%\s*endstep)", r"```\n\1", text)
    text = re.sub(r"```php\s*\n(\s*\{%\s*endstep)", r"```\n\1", text)

    # {% stepper %} / {% step %} / {% endstep %} / {% endstepper %}
    text = re.sub(r"\{%\s*stepper\s*%\}\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\{%\s*endstepper\s*%\}\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\{%\s*step\s*%\}\s*", "", text, flags=re.IGNORECASE)
    text = re.sub(r"\{%\s*endstep\s*%\}\s*", "\n\n", text, flags=re.IGNORECASE)

    return text


def fix_broken_gitbook_page_links(text: str) -> str:
    # [label](/broken/pages/id) -> label (plain text, keep readable TOC)
    text = re.sub(r"\[([^\]]+)\]\(/broken/pages/[a-zA-Z0-9]+\)", r"\1", text)
    return text


def fix_car_hacker_broken_reference(text: str) -> str:
    text = re.sub(
        r"\[([^\]]+)\]\(\.\./\.\./iot/obdii/broken-reference/\)",
        r"**\1**",
        text,
    )
    return text


def main() -> int:
    changed = 0
    for path in walk_markdown():
        raw = path.read_text(encoding="utf-8")
        new = convert_content(raw)
        new = fix_broken_gitbook_page_links(new)
        new = fix_car_hacker_broken_reference(new)
        if new != raw:
            path.write_text(new, encoding="utf-8", newline="\n")
            changed += 1
            print(path.relative_to(ROOT))
    print(f"Updated {changed} files.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
