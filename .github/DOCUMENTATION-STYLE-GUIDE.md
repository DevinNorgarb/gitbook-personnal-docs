# Documentation Style Guide

This guide defines standards for documentation in this repository.

## Frontmatter

Use YAML frontmatter at the top of each markdown file:

```yaml
---
title: Page Title
description: Optional one-line summary (for tooltips/search)
---
```php

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

This repository was imported from GitBook. For **mdBook / GitHub Pages**, use portable markdown instead of GitBook tags:

- **File / PDF downloads**: `[filename](relative-or-asset-path)` (see [`scripts/convert_gitbook_tags.py`](../scripts/convert_gitbook_tags.py) for historical conversions).
- **Callouts**: use blockquotes with a bold label (for example `> **Note**`).
- **Embeds**: use a normal markdown link or angle-bracket URL `<https://...>`.

## Publishing (mdBook)

- Install [mdBook](https://github.com/rust-lang/mdBook), then from the repository root run `mdbook build` (output in `book/`) or `mdbook serve` for local preview.
- Navigation and chapter order are defined in [SUMMARY.md](../SUMMARY.md); add new pages there when you add documentation.
- GitHub Actions builds the book and publishes the `book/` directory to the `gh-pages` branch when you push to `main` or `master`.
- After the first deploy, enable **GitHub Pages** from the `gh-pages` branch (or follow your repository’s Pages settings). The site URL is typically `https://<user>.github.io/<repo>/`; [book.toml](../book.toml) sets `site-url` for that path.
