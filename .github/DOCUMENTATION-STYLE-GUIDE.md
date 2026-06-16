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

## Assets

- **New content**: Store images and PDFs under `<section>/assets/<source-slug>/` with lowercase extensions. See [ASSET-CONVENTION.md](ASSET-CONVENTION.md).
- **Legacy imports**: `.gitbook/assets/` is read-only for new work; migrate references when editing a page.

## File Naming

- Use **kebab-case** for all file and folder names (e.g. `laravel-upgrade-from-webpack-to-vite.md`).
- Avoid generic names such as `page-N`, `page-1`, or `chuang-jian-*-1`.
- Choose descriptive names that reflect the content.

## Links

- Prefer **relative paths** for internal links.
- Avoid GitBook import IDs (e.g. `/broken/pages/...`).
- When linking to other sections, use paths relative to the current file.

### Cross-topic sections (generated)

`npm run docs:gen-topic-links` injects bounded blocks from [scripts/topic-clusters.json](../scripts/topic-clusters.json). Do not edit these sections by hand.

| Heading | Where | Purpose |
| --- | --- | --- |
| `## Related sections` | Hub `README.md` files listed in a cluster | Links to sibling hubs and related pages in other nav trees |
| `## See also` | Pages in `pageOverrides` | Curated cross-links between specific articles |
| `## Related topics` | Pages with `topics: [cluster-id]` frontmatter | Footer links to cluster hubs and related pages |

Set `topicLinks: manual` in frontmatter to skip automatic injection on a page.

## GitBook-Specific Syntax

This repository was imported from GitBook. For **VitePress / GitHub Pages**, use portable markdown instead of GitBook tags:

- **File / PDF downloads**: `[filename](relative-or-asset-path)` (see [`scripts/archive/`](../scripts/archive/) for historical conversions).
- **Callouts**: use blockquotes with a bold label (for example `> **Note**`).
- **Embeds**: use a normal markdown link or angle-bracket URL `<https://...>`.

## Publishing (VitePress)

- Install Node.js 20+, then `npm ci`, `npm run docs:dev` (preview; runs `docs:prep` first) or `npm run docs:build` (static output in `.vitepress/dist/`).
- Navigation is defined in [SUMMARY.md](../SUMMARY.md). **CI** runs `docs:prep` before every deploy (section indexes, topic links, [`.vitepress/sidebar.generated.mjs`](../.vitepress/sidebar.generated.mjs)). Edit `SUMMARY.md` or [scripts/topic-clusters.json](../scripts/topic-clusters.json) — no local generation required for publish.
- GitHub Actions ([`.github/workflows/vitepress.yml`](../.github/workflows/vitepress.yml)) builds and publishes to the `gh-pages` branch on pushes to `main`/`master`.
- Site `base` is set in [`.vitepress/config.ts`](../.vitepress/config.ts) (`/` for the custom domain). The public URL is [https://docs.f1y.ing/](https://docs.f1y.ing/).
