# Documentation Style Guide

This guide defines standards for documentation in this repository.

## Frontmatter

Use YAML frontmatter at the top of each markdown file:

```yaml
---
title: Page Title
description: Optional one-line summary (for tooltips/search)
---
```

- **Section READMEs** (landing pages): Add `layout: landing` where appropriate.
- **Content pages**: Add `title` matching the H1; add `description` for external links or credits where useful.

## Headings

- **Single H1**: Each page has exactly one H1 (the page title).
- **No skipped levels**: Use H2 → H3 → H4 in order; do not jump from H2 to H4.
- **Consistency**: The H1 should match the `title` in frontmatter and reflect the page purpose.

## File Naming

- Use **kebab-case** for all file and folder names (e.g. `laravel-upgrade-from-webpack-to-vite.md`).
- Avoid generic names such as `page-N`, `page-1`, or `chuang-jian-*-1`.
- Choose descriptive names that reflect the content.

## Links

- Prefer **relative paths** for internal links.
- Avoid GitBook import IDs (e.g. `/broken/pages/...`).
- When linking to other sections, use paths relative to the current file.

## GitBook-Specific Syntax

This repository uses GitBook. The following syntax is supported:

- `{% file src="..." %}` – File/PDF embeds
- `{% hint %}`, `{% stepper %}`, `{% embed %}` – GitBook blocks

If migrating away from GitBook, convert these to standard markdown links or asset references.
