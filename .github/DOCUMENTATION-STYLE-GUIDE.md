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

This repository was imported from GitBook. For **VitePress / GitHub Pages**, use portable markdown instead of GitBook tags:

- **File / PDF downloads**: `[filename](relative-or-asset-path)` (see [`scripts/convert_gitbook_tags.py`](../scripts/convert_gitbook_tags.py) for historical conversions).
- **Callouts**: use blockquotes with a bold label (for example `> **Note**`).
- **Embeds**: use a normal markdown link or angle-bracket URL `<https://...>`.

## Publishing (VitePress)

- Install Node.js 20+, then `npm ci`, `npm run docs:dev` (preview) or `npm run docs:build` (static output in `.vitepress/dist/`).
- Navigation is defined in [SUMMARY.md](../SUMMARY.md); run `npm run docs:gen-sidebar` (or `docs:prep`) to regenerate [`.vitepress/sidebar.generated.mjs`](../.vitepress/sidebar.generated.mjs) after editing `SUMMARY.md`.
- GitHub Actions ([`.github/workflows/vitepress.yml`](../.github/workflows/vitepress.yml)) builds and publishes to the `gh-pages` branch on pushes to `main`/`master`.
- Site `base` is set in [`.vitepress/config.ts`](../.vitepress/config.ts) (`/gitbook-personnal-docs/`). The public URL is typically `https://<user>.github.io/<repo>/`.
