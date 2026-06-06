# Asset convention

## Preferred: topic-local assets

Store images, PDFs, and downloads next to the pages that reference them:

```
<section>/<topic>/assets/<source-slug>/<nn>-<descriptive-name>.<ext>
```

Examples in this repo:

- `microcontrollers-and-socs/assets/github-bobbo117-mq135-air-quality-sensor/01-mq135-board-photo.png`
- `microcontrollers-and-socs/esp32/assets/esp32-rf-antenna-pcb-layout-20260526/espressif-esp32c3-hw-guidelines/esp32c3-pcb-rf-layout.png`

Rules:

- Use **lowercase extensions** (`.png`, `.jpg`, `.webp`, `.pdf`).
- Prefix files with a **two-digit order** when sequence matters in the article.
- Slug the **source** (upstream URL, repo, or ingest batch id), not a random hash.
- Reference with **relative paths** from the markdown file.

## Legacy: `.gitbook/assets/`

GitBook import blobs (~1 GB) remain for older pages. Do **not** add new assets here.

VitePress needs `assetsInclude` workarounds in [`.vitepress/config.ts`](../.vitepress/config.ts) for extensionless and mixed-case legacy files. Shrink this store by migrating references when you touch a page.

## Quarantine

Files with **no markdown references** are quarantine candidates. Run:

```bash
npm run docs:audit-assets
```

Review output before removing anything; deletions must go through git so history preserves recoverability.

## Non-asset files

Do not store source code, Makefiles, or vendored READMEs under asset directories. Move tooling to `scripts/archive/` and prose to normal markdown pages.
