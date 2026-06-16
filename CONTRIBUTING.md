# Contributing to Documentation

This repository contains personal documentation originally organized like GitBook; the published site is built with **VitePress** (see [README.md](README.md) and [`.github/DOCUMENTATION-STYLE-GUIDE.md`](.github/DOCUMENTATION-STYLE-GUIDE.md)). Here is how to add or edit content.

## Structure

- **SUMMARY.md** – Defines the navigation structure. All pages must be listed here to appear in the table of contents.
- **Sections** – Top-level folders (e.g. `software-engineering/`, `obd2/`, `gis/`) each contain related documentation.
- **README.md** – Section and subsection overviews. Use these as landing pages.
- **Operations runbooks** – Backup and ops notes go under `snippets-and-scripts/operations/` (not a top-level `readme/` folder).

## Adding a New Page

1. Create a new `.md` file in the appropriate section using **kebab-case** (e.g. `my-new-guide.md`).
2. Add frontmatter at the top:
   ```yaml
   ---
   title: My New Guide
   description: Optional one-line summary
   ---
   ```

3. Use a single H1 for the page title.
4. Add the page to `SUMMARY.md` under the correct section. You do **not** need to run generation locally for publish — CI runs `npm run docs:prep` (section indexes, topic links, sidebar) before every build. Use `npm run docs:dev` when you want a local preview with the same pipeline.

## Editing SUMMARY.md

Entries follow this format:

```markdown
* [Display Name](path/to/file.md)
  * [Child Page](path/to/child.md)
```

- Use the exact file path relative to the repository root.
- The display name in brackets is what appears in the navigation.
- Indentation (spaces) defines the hierarchy.

## Assets

New images and downloads use **topic-local** paths per [.github/ASSET-CONVENTION.md](.github/ASSET-CONVENTION.md). Do not add files under `.gitbook/assets/`. Run `npm run docs:audit-assets` to list unreferenced legacy blobs before quarantine.

## Cross-topic linking

Some subjects appear in more than one sidebar tree (for example **Drones** under Pen Testing and as a top-level section). Cross-links are driven by [scripts/topic-clusters.json](scripts/topic-clusters.json).

1. Add or edit a cluster in `topic-clusters.json` with:
   - `hubs` — section `README.md` landing pages for each nav lens
   - `related` — other pages readers should discover from those hubs
   - `pageOverrides` — optional per-page `seeAlso` pairs (curated article-level links)
2. CI applies cross-links on every build via `docs:gen-topic-links` (part of `docs:prep`). Locally, `npm run docs:dev` runs the same step before preview.
3. To opt in a page to cluster footer links, add frontmatter `topics: [cluster-id]` (generates `## Related topics`).
4. To keep hand-written links only, set `topicLinks: manual` in frontmatter.

Do not hand-edit generated `## Related sections`, `## See also`, or `## Related topics` blocks — CI regenerates them on each build.

Optional: run `npm run docs:check-generated` locally to verify committed generated files match source (same check as a full `docs:prep` + `git diff`).

## Style Guide

See [.github/DOCUMENTATION-STYLE-GUIDE.md](.github/DOCUMENTATION-STYLE-GUIDE.md) for:

- Frontmatter conventions
- Heading structure
- File naming
- Link formatting
