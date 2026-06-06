# Architecture Deepening Opportunities — gitbook-personnal-docs

**Date:** 2026-06-06
**Scope:** Repository architecture review (improve-codebase-architecture skill)

## Context

This repo is a **documentation knowledge base** (~500 markdown pages) with a thin **VitePress publishing pipeline** in `scripts/`. There is no `CONTEXT.md` or ADRs yet — domain boundaries live in `SUMMARY.md` section headers and top-level folders (Software Engineering, OBD2, Robotics, GIS, etc.).

Executable logic is concentrated in modules wired through `package.json`:

| npm script | Module |
|------------|--------|
| `docs:gen-index` | `scripts/sync-index-from-readme.mjs` |
| `docs:gen-sidebar` | `scripts/summary-to-vitepress-sidebar.mjs` |
| `docs:prep` | index + sidebar generation |
| `docs:dev` / `docs:build` | VitePress via `.vitepress/config.ts` |
| `docs:audit` | `scripts/docs-audit.mjs` |

Additional tooling (archived, not wired to npm): `scripts/archive/convert_gitbook_tags.py`, `scripts/archive/refactor_md.py`.

The deepest friction is not missing abstractions in application code — it is **duplicate content, inconsistent asset layout, legacy migration debris, and untested doc tooling** sitting on top of a large heterogeneous knowledge graph.

---

## 1. Doc publishing pipeline

**Files:** `scripts/summary-to-vitepress-sidebar.mjs`, `scripts/docs-audit.mjs`, `scripts/convert_gitbook_tags.py`, `refactor_md.py`, `.vitepress/config.ts`, `.vitepress/sidebar.generated.mjs`

**Problem:** Three separate modules each re-implement SUMMARY parsing, markdown walking, and frontmatter stripping. `refactor_md.py` (~310 lines) sits at repo root, unwired to `package.json` or CI, and overlaps with `convert_gitbook_tags.py` on fence normalization and heading cleanup. The sidebar generator encodes VitePress routing rules (`README` → `/path/README`, root → `/`) that are duplicated only in comments — coupled to `cleanUrls: false` in config. The 2250-line `sidebar.generated.mjs` is a committed artifact that can drift from `SUMMARY.md`.

**Solution:** Consolidate into a single **Publishing** module family: shared markdown/SUMMARY parsing utilities, one migration/archive path for tag conversion, and explicit generation of sidebar output (or CI enforcement that it matches). Delete or relocate `refactor_md.py`.

**Benefits:**

- **Locality** for navigation rules and markdown transforms — fix a README-link bug once, not in three files.
- **Leverage** for callers: one `docs:prep` seam exercises the whole publish path.
- Tests can target the shared parser interface with SUMMARY fixtures instead of regex archaeology across three scripts.

**Status:** Not started

---

## 2. Canonical runbook pattern (operational procedures)

**Files:**

- `snippets-and-scripts/scripts/run-docker-commands-without-needing-sudo.md`
- `snippets-and-scripts/scripts/run-docker-without-needing-sudo.md` (orphan duplicate)
- `snippets-and-scripts/install-scripts/install-docker-and-docker-compose/docker-without-root-privileges.md`
- `software-engineering/containerisation/docker/run-docker-without-sudo.md`

**Problem:** The same procedure — running Docker without sudo — exists in four places with near-identical content. Only one is in `SUMMARY.md`; `run-docker-without-needing-sudo.md` appears to be an orphan twin. Knowledge about *when* to use which variant is spread across callers (readers), not behind one interface.

**Solution:** One canonical **Runbook** page per procedure. Short variants become links or callout sections pointing to it. Delete orphan duplicates.

**Benefits:**

- **Locality** — update the `usermod`/`docker` group steps once.
- **Leverage** — every install guide and snippet page inherits the same truth.
- Tests (or audit rules) can assert "at most one canonical page per procedure ID" instead of manual dedup hunts.

**Status:** Complete — PR [#24](https://github.com/DevinNorgarb/gitbook-personnal-docs/pull/24)

**Done:**

- Canonical runbook: `snippets-and-scripts/install-scripts/install-docker-and-docker-compose/docker-without-root-privileges.md`
- Variant pages (`run-docker-commands-without-needing-sudo.md`, `run-docker-without-sudo.md`) are short stubs linking to canonical
- Orphan duplicate `run-docker-without-needing-sudo.md` removed via git
- `docker-on-kali-linux.md` links to canonical instead of inlining steps

---

## 3. Asset store strategy

**Files:** `.gitbook/assets/` (~1 GB), `microcontrollers-and-socs/assets/`, `microcontrollers-and-socs/esp32/assets/`, `.vitepress/config.ts` (`assetsInclude` workaround)

**Problem:** `.gitbook/assets/` is a junk drawer: images, PDFs, extensionless HTML exports (`code`, `workflow`), vendored READMEs, EDA files, and unreferenced C source (`sensor_data_for_vehicle_interior.c`). VitePress config must special-case its shape (`assetsInclude` for mixed-case and extensionless files). Newer content (ESP32 RF layout, MQ135 sensor) uses a cleaner per-topic `assets/<source-slug>/` pattern — two strategies coexist with no documented rule.

**Solution:** Define an **Asset** convention: topic-local `assets/` with typed filenames; migrate high-traffic references off `.gitbook/assets/`; quarantine or delete unreferenced blobs. Collapse `assetsInclude` workarounds as the legacy store shrinks.

**Benefits:**

- **Locality** for "where does this image live?" — one rule, not three directory strategies.
- **Leverage** for the publishing module: asset resolution becomes predictable, so link/image audit in `docs-audit.mjs` can be stricter.
- Fewer VitePress config exceptions.

**Status:** Complete — PR [#32](https://github.com/DevinNorgarb/gitbook-personnal-docs/pull/32)

**Done:**

- Documented topic-local asset convention in `.github/ASSET-CONVENTION.md`
- Added `npm run docs:audit-assets` to list unreferenced `.gitbook/assets/` blobs
- Quarantined unreferenced `sensor_data_for_vehicle_interior.c` to `scripts/archive/` via git
- Added exemplar `microcontrollers-and-socs/assets/README.md`

---

## 4. Navigation seam (SUMMARY ↔ sidebar ↔ routes)

**Files:** `SUMMARY.md`, `scripts/summary-to-vitepress-sidebar.mjs`, `.vitepress/sidebar.generated.mjs`, `.vitepress/config.ts`

**Problem:** `SUMMARY.md` is the sole source of truth for structure, but the generated sidebar is a second artifact committed to git. The generator's `mdToLink()` function bakes in VitePress-specific routing invariants that aren't validated — a SUMMARY edit can produce a sidebar entry that 404s under `cleanUrls: false`. No test fixtures cover nested lists, `##` section breaks, or README deduplication.

**Solution:** Deepen the **Navigation** module: either generate sidebar only at build time (drop committed artifact), or add a `docs:check-sidebar` that fails CI on drift. Extract routing rules into a tested, documented interface shared with `docs-audit.mjs` orphan detection.

**Benefits:**

- **Locality** for "why does this link 404?" — one module owns SUMMARY → URL mapping.
- **Leverage** for contributors: edit `SUMMARY.md`, run one command, trust the output.
- Regression tests on the interface catch nested-list edge cases before deploy.

**Status:** Not started

---

## 5. Operations docs topology (`readme/` vs `snippets-and-scripts/`)

**Files:** `readme/` (backups, Influx scripts), `snippets-and-scripts/scripts/`, `snippets-and-scripts/install-scripts/`, `SUMMARY.md` "Start" section

**Problem:** Operational content is split across `readme/` (home-section backups, disk usage) and `snippets-and-scripts/` (install runbooks, one-liners) with overlapping purpose but different folder conventions. The `readme/` vs `README.md` naming collision is a recurring footgun (section landing pages vs home operational docs).

**Solution:** Unify under one **Operations** subtree in the Start section — either fold `readme/` into `snippets-and-scripts/` or vice versa, with a clear rule: `README.md` = section landing, `readme/` prefix = deprecated/relocated.

**Benefits:**

- **Locality** for "where do I put a new backup script?"
- **Leverage** for navigation: one place to search.
- Audit hotspots for structural mismatches shrink.

**Status:** Complete — PR [#30](https://github.com/DevinNorgarb/gitbook-personnal-docs/pull/30)

**Done:**

- Relocated `readme/` pages into `snippets-and-scripts/operations/` and `snippets-and-scripts/scripts/influx/`
- Added Operations landing page; updated `SUMMARY.md` and CONTRIBUTING convention
- Removed empty `readme/` tree (paths preserved in git history)

---

## 6. Legacy migration debris

**Files:** `book/` (gitignored, ~1.7 GB mdBook output on disk), `refactor_md.py`, `scripts/convert_gitbook_tags.py`, `.gitbook/assets/Makefile`, broken fences in `snippets-and-scripts/scripts/README.md`

**Problem:** VitePress migration is source-complete but disk- and content-incomplete. Local `book/` still contains mdBook HTML (generated output, not custom tools). `refactor_md.py` is a manual footgun. GitBook fence pollution (`` ```php `` on shell blocks) and broken code fences remain across install scripts.

**Solution:** Purge local `book/`, archive or delete unwired migration tools, run a one-shot **Migration cleanup** pass (fence normalization via the consolidated publishing module, broken-fence repair). Mark `convert_gitbook_tags.py` as archived once satisfied.

**Benefits:**

- **Locality** for "is this file still relevant?" — no orphan scripts at repo root.
- **Leverage** for tooling: syntax highlighting and any future fence-aware audit work correctly.
- Removes ~1.7 GB of misleading local state.

**Status:** Complete — PR [#26](https://github.com/DevinNorgarb/gitbook-personnal-docs/pull/26)

**Done:**

- Archived `refactor_md.py` and `convert_gitbook_tags.py` under `scripts/archive/` with README
- Removed orphan `.gitbook/assets/Makefile` via git
- Fixed broken code fences in `snippets-and-scripts/scripts/README.md`
- Normalized `` ```php `` → `` ```console `` in `snippets-and-scripts/` install/runbook pages
- Documented that gitignored `book/` is safe to delete locally

---

## 7. Section topology mismatches

**Files:** `android-dev/` (4 pages at repo root), `software-engineering/android-app-development/` (canonical section), `misc/tutorials/.../install-k3s/` (mixed-topic junk drawer), `android-dev/copy-apk-file-usiung-adb.md` (typo orphan)

**Problem:** `android-dev/` lives at repo root while `SUMMARY.md` nests it under Software Engineering — flagged as a hotspot in `docs-audit.mjs` but not fixed. The K3s tutorial path contains unrelated topics (AI, GIS, Lando, Arduino) under one folder. Typo-duplicates have no inbound links.

**Solution:** Fold `android-dev/` into `software-engineering/android-app-development/`, split the K3s junk drawer into topic folders, delete typo orphans. Optionally encode allowed path ↔ section mappings in audit config instead of hard-coded `HOTSPOTS`.

**Benefits:**

- **Locality** for domain concepts — Android content lives where the section says it lives.
- **Leverage** for AI navigation and human browsing: folder path predicts SUMMARY section.
- Audit becomes config-driven rather than a growing inline array.

**Status:** Complete — PR [#25](https://github.com/DevinNorgarb/gitbook-personnal-docs/pull/25)

**Done:**

- Moved `android-dev/` pages into `software-engineering/android-app-development/`; removed typo orphan via git
- Relocated off-topic pages out of `install-k3s/` into GIS, Laravel, Cloudflare Tunnels, Arduino, AI, and misc tutorials
- Updated `SUMMARY.md` and cross-links; removed resolved `docs-audit.mjs` hotspots

---

## 8. Doc audit as a gate (not just a report)

**Files:** `scripts/docs-audit.mjs`, `.github/workflows/vitepress.yml`, `docs-audit-report.{json,md}`

**Problem:** Audit runs in CI and uploads reports, but doesn't fail the build. Thresholds (`THIN_WORDS = 60`) and structural rules (`HOTSPOTS` array) are hard-coded. No golden-file tests for link/image parsing.

**Solution:** Deepen the **Audit** module interface: `--fail-on` flags for thin content, orphans, broken local images; external `audit.config.json` for hotspots and thresholds. Add fixture tests for the markdown parser.

**Benefits:**

- **Locality** for quality rules — change a threshold in config, not in implementation.
- **Leverage** for CI: the same interface that generates reports can gate merges.
- Tests survive refactors because they target the audit interface, not internal regex details.

**Status:** Not started

---

## Skipped for now

| Item | Reason |
|------|--------|
| Extract markdown code blocks into runnable `bin/` scripts | Repo value is copy-paste runbooks, not a CLI library. Converting fences is hygiene, not architecture. |
| `sync-index-from-readme.mjs` | Fails the deletion test (pure pass-through). Not worth deepening unless folded into a richer `docs:prep` orchestrator. |

---

## Module complexity summary

| Module | Interface complexity | Implementation complexity | Verdict |
|--------|---------------------|---------------------------|---------|
| `sync-index-from-readme.mjs` | 1 npm script | 1 `copyFileSync` | Pass-through |
| `summary-to-vitepress-sidebar.mjs` | 1 npm script | ~125 lines parsing logic | Real module — needs tests |
| `docs-audit.mjs` | 1 npm script | ~255 lines | Real module — needs tests + config extraction |
| `convert_gitbook_tags.py` | CLI, no npm hook | ~230 lines regex | Migration tool — archive or test |
| `refactor_md.py` | none (unwired) | ~310 lines | Dead weight / risk |
| `snippets-and-scripts/*` | markdown pages | prose + code blocks | Docs, not software modules |
| `.gitbook/assets/Makefile` | `make html` | 3 lines | Broken orphan |

---

## Domain map (from SUMMARY.md)

| Section | Domain focus |
|---------|--------------|
| Start | Home, backups, install scripts, operational snippets |
| Software Engineering | WASM, automation, Android, ML, PHP/Laravel, containers, K8s, networking, Linux, Grafana |
| OBD2 | Vehicle diagnostics, CAN bus, car hacking, simulators, OVMS, Traccar |
| Robotics | SITL, ROS, ArduSub, PixHawk, MAVLink, sensors, firmware |
| MicroControllers & SoCs | Raspberry Pi, Arduino, ESP32, nRF24, GPS shields |
| Self-Hosting | Sentry, hardware |
| GIS | Geocoding, Tile38, Deck.gl, Mapbox, Pelias, spatial stack |
| Pen Testing | Drones, automotive, decompilers, Kali, captive portals |
| Drones | DashWare, DJI Android SDK docs |
| Software Defined Radio | Open RAN, RTL-SDR |

Cross-cutting concepts: **GitBook → VitePress migration**, **self-hosted infra**, **vehicle/robotics embedded systems**, **GIS/spatial data**.

---

## Next steps

Pick one or more candidates (e.g. "1 + 4" for the full publishing/navigation seam) to walk the design tree: constraints, dependencies, what sits behind the seam, and what tests survive. New domain terms crystallized during that conversation should be added to `CONTEXT.md`.
