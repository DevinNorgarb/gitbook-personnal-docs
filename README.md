# Personal documentation

Public knowledge base at **[devinn.org](https://devinn.org)** — notes on software engineering, embedded systems, robotics, GIS, and related topics.

## Site vs repository

| File | Purpose |
|------|---------|
| [`index.md`](index.md)
| `README.md` | This file — GitHub repo overview and contributor setup |

Do not sync `README.md` over `index.md`; they serve different audiences.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add or edit pages.

## Style guide

See [.github/DOCUMENTATION-STYLE-GUIDE.md](.github/DOCUMENTATION-STYLE-GUIDE.md) for documentation conventions.

## Local development

- **Prerequisites**: [Node.js](https://nodejs.org/) 20+ and `npm ci`.
- **Local preview**: `npm run docs:dev` — runs `docs:prep` then starts VitePress (default port **5173**).
- **Production build**: `npm run docs:prep && npm run docs:build` locally, or rely on CI (prep then build). Output: [`.vitepress/dist/`](.vitepress/dist/) (gitignored).

## Publishing (GitHub Pages)

Pushes to `main` or `master` run [`.github/workflows/vitepress.yml`](.github/workflows/vitepress.yml), which deploys **`.vitepress/dist`** to the **`gh-pages`** branch. Primary URL: [https://docs.f1y.ing/](https://docs.f1y.ing/).

**Audit reports**: `npm run docs:audit` writes `docs-audit-report.json` and `docs-audit-report.md` (gitignored). Configure thresholds in [`audit.config.json`](audit.config.json).

GitBook-only constructs in markdown were converted for portable rendering; see [`scripts/archive/`](scripts/archive/) for archived migration tooling.
