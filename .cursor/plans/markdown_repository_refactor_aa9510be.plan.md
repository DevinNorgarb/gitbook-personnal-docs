---
name: Markdown Repository Refactor
overview: "A sequential, file-by-file plan to standardize and improve every Markdown file in the repository: fix heading hierarchy, spacing, code fences, list formatting, relative links where resolvable, and fill empty or stub pages—without deleting content, renaming files, or changing code inside code blocks."
todos: []
isProject: false
---

# Markdown Repository Refactor Plan

## Scope and constraints

- **Scope**: All `**/*.md` files in the repository (~486 files from glob).
- **Existing context**: [DOCUMENTATION-REFACTORING-REPORT.md](DOCUMENTATION-REFACTORING-REPORT.md) and [.cursor/plans/documentation_refactoring_plan_5e095b8e.plan.md](.cursor/plans/documentation_refactoring_plan_5e095b8e.plan.md) describe structural issues (SUMMARY refs, broken links, path renames). This plan is **format- and content-completeness only**; no file renames, moves, or SUMMARY edits.
- **Style reference**: [.github/DOCUMENTATION-STYLE-GUIDE.md](.github/DOCUMENTATION-STYLE-GUIDE.md) (headings, frontmatter, links). Align per-file fixes with it where applicable.

**Non-negotiable (from your prompt):**

- Do not delete or remove meaningful content.
-
- Preserve all valid relative links; do not alter code inside code blocks.
- Keep original file names and locations.
- Only improve formatting, structure, and completeness.

---

## File inventory and processing order

1. **Discovery**: Enumerate all `.md` files (e.g. via `find . -name '*.md'` or equivalent), excluding none (including `.cursor/plans/*.md`, `.gitbook/assets/*.md`, and root-level docs).
2. **Order**: Process in a **deterministic order** to avoid drift and allow resumability:
  - Option A: **Lexicographic by path** (e.g. `CONTRIBUTING.md`, `README.md`, then `3d-printing/...`, etc.).
  - Option B: **SUMMARY-driven then remainder** — process files in the order they appear in [SUMMARY.md](SUMMARY.md) (resolving each path), then process any `.md` not referenced in SUMMARY in lexicographic order.

Recommendation: **Option A** for simplicity and so that SUMMARY changes are not required. If you prefer to prioritize “visible” docs first, use Option B.

1. **One file per iteration**: Apply the checklist below to one file, write changes to disk, then advance to the next. No batching of edits across files unless a single logical unit (e.g. a folder of READMEs) is explicitly chosen.

---

## Required fixes per file (checklist)

For **each** `.md` file, apply the following in order:


| #   | Fix                   | Notes                                                                                                                                                                                       |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Heading hierarchy** | Single H1 at top (page title). Then H2 → H3 → H4 with no skipped levels (e.g. no H2 → H4). If there are multiple H1s, demote extras to H2 or merge.                                         |
| 2   | **Blank lines**       | Collapse 3+ consecutive blank lines to at most 2 (e.g. one blank between sections). Ensure exactly one blank line above and below headings and between block elements (lists, code blocks). |
| 3   | **Code fences**       | Use exactly triple backticks (                                                                                                                                                              |


```). If the file uses

`

````` or `

``` ` (with spaces), normalize to

```. Do not change the code **inside** the block. |
| 4 | **Language identifiers** | Add a language tag on the opening fence where obvious (e.g. `php`, `bash`, `json`, `javascript`). If language is unknown, leave as `

``` ` with no tag. |
| 5 | **Relative links** | Fix only links that point to other `.md` or assets **and** where the correct path is resolvable within the repo (e.g. wrong path to an existing file). Do not guess targets for `/broken/pages/...` or missing files; leave them as-is or add a brief comment if desired. |
| 6 | **List style** | Use `-` for unordered lists. Normalize `*` or `+` to `-` for consistency. Keep ordered lists as `1.` (or consistent style). |
| 7 | **Spacing** | One space after `#` in headings. Consistent spacing around lists (blank line before/after). No trailing spaces on lines. |
| 8 | **Readability** | Fix obvious typo-level issues (e.g. double spaces, missing space after `.)`). Do not rewrite sentences or change meaning. |
| 9 | **Empty or stub content** | If the file is effectively empty (e.g. only a title and blank lines, or a single short line), add a minimal section that matches the file’s purpose (e.g. section README → 1–2 sentence overview; placeholder like “*This section documents …*” or a short “Overview” with one paragraph). Use path, parent README, and SUMMARY label to infer purpose. |

**Out of scope for this refactor:**

- GitBook-specific blocks (`{% file %}`, `{% hint %}`, `{% embed %}`, etc.): **leave as-is** (preserve content).
- Changing code or commands inside fenced code blocks.
- Renaming or moving files; fixing SUMMARY.md; path consolidation; fixing links to non-existent targets.

---

## Edge cases and decisions

- **Frontmatter**: If the file has no frontmatter, adding `title` (and optional `description`) is **optional** for this pass; the existing plan phases it separately. Prefer not to add frontmatter in this refactor unless the file is being filled from empty (then a minimal `title` is reasonable).
- **Empty files**: Examples observed: [software-engineering/networking/web-sockets/README.md](software-engineering/networking/web-sockets/README.md) (only “# Web Sockets”), [robotics/ardusub-overview.md](robotics/ardusub-overview.md) (only “# ArduSub”). For these, add 1–2 sentences or an “Overview” subsection describing the topic based on path and title.
- **Broken internal links**: Per [DOCUMENTATION-REFACTORING-REPORT.md](DOCUMENTATION-REFACTORING-REPORT.md), many links use `/broken/pages/...` or wrong paths. Only fix when the correct target path exists in the repo (e.g. update `README (1).md` to `software-engineering/tooling/README.md` **only if** that file exists and is the intended target). Do not invent or rename targets.
- **Very long files**: Apply the same checklist; no need to split or merge files in this refactor.
- **Tables**: Leave table structure and content unchanged; only fix surrounding spacing/blank lines if needed.

---

## Execution flow

```mermaid
flowchart LR
  A[Get next .md path] --> B[Read file]
  B --> C[Apply checklist 1-9]
  C --> D[Write file]
  D --> E[More files?]
  E -->|Yes| A
  E -->|No| F[Done]
```

1. List all `.md` paths in chosen order (e.g. lexicographic).
2. For each path: read file → apply checklist (1–9) → write back.
3. Continue until every `.md` in the list is processed.
4. Do not stop early except for explicit user instruction.

---

## Verification (optional)

- After a sample of files (e.g. one per top-level directory), spot-check: heading levels, no multiple H1s, code fences and list style.
- Optionally run a markdown linter (e.g. `markdownlint`) on a subset to catch remaining spacing/format issues; fix only what aligns with the checklist above.

---

## Summary


| Item         | Detail                                                                                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Files**    | All `**/*.md` (~486)                                                                                                                   |
| **Order**    | Lexicographic by path (or SUMMARY then remainder)                                                                                      |
| **Per file** | Heading hierarchy, blank lines, code fences + language, relative links (resolvable only), list style, spacing, readability, fill stubs |
| **Preserve** | All content, code in blocks, GitBook blocks, file names and locations                                                                  |
| **No**       | File renames, SUMMARY edits, link fixes to non-existent targets                                                                        |


This plan is ready for implementation; execution should process files one by one and apply edits directly to each file.