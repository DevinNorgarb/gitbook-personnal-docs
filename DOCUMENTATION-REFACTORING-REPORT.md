# Documentation Refactoring Report

**Project:** gitbook-personnal-docs  
**Date:** March 2, 2025  
**Scope:** Full documentation audit and refactoring plan

---

## 1. Project Overview

| Metric | Value |
|--------|-------|
| **Total markdown files** | ~493 |
| **Documentation format** | GitBook (SUMMARY.md-driven) |
| **Config** | `.gitbook/` (assets, includes) |
| **Asset storage** | `.gitbook/assets/` |

### Top-level structure

- **Snippets & Scripts** – install scripts, backup, Magento, resize guides
- **Software Engineering** – WebAssembly, automation, Android, ML, Shopify, PHP, AWS, frontend, containers, networking, Kubernetes, etc.
- **OBD2** – vehicle diagnostics, CAN bus, car hacking, simulators
- **3D Printing** – gallery, problems
- **Robotics** – SITL, ROS, ArduSub, PixHawk, MAVLink
- **MicroControllers & SoCs** – nRF24, Arduino, Raspberry Pi, ESP32
- **Self-Hosting** – Sentry, hardware
- **GIS** – geocoding, Tile38, Deck.gl, Mapbox, Pelias
- **Web Archiving** – awesome list
- **IP Cameras** – RTSP, ONVIF
- **Web Scraping** – Monkey-DL, scrapers
- **Pen Testing** – drones, automotive, decompilers, Kali, captive portals
- **Random** – torrents, ADHD, Chromecast
- **Maritime AIS** – Raspberry Pi AIS research
- **Drones** – DashWare, DJI docs
- **Software Defined Radio** – Open RAN, RTL-SDR
- **Resources** – PDFs, pilots license, OAuth2, etc.
- **MISC** – AI, tutorials

---

## 2. Findings

### 2.1 Critical: Broken links

**~35+ files** contain broken internal links:

| Pattern | Count | Example files |
|--------|-------|---------------|
| `/broken/pages/...` (GitBook import IDs) | 200+ | `drones/dji-docs-android/*`, `pen-testing/kali-linux/kali-linux-blog.md`, `robotics/*` |
| `../../iot/obdii/broken-reference/` | 142 in one file | `obd2/car-hacking/the-car-hackers-handbook.md` |

**Root cause:** Content imported from external GitBooks; internal links use old page IDs or non-existent paths.

**Most affected areas:**
- `drones/dji-docs-android/` – DJI SDK docs
- `pen-testing/kali-linux/kali-linux-blog.md`
- `obd2/car-hacking/the-car-hackers-handbook.md`
- `robotics/` – ArduSub, MAVLink, building guides
- `obd2/vehicle-tracking/open-vehicles-documentation.md`

---

### 2.2 Critical: Wrong SUMMARY references

`SUMMARY.md` uses root-level `README (1).md`, `README (2).md`, etc., which point to the wrong content:

| SUMMARY label | Points to | Actual content |
|---------------|-----------|----------------|
| **Tooling** | `README (1).md` | "snippets / scripts" |
| **Install Certbot** | `README (2).md` | "WebRTC" |
| **WebRTC** | `README (1) (2).md` | "Tooling" |
| **Ubuntu: Set Keyboard Backlight** | `README (1) (1).md` | Correct |

**Fix:** Replace with proper section files:
- Tooling → `software-engineering/tooling/README.md` (or new `tooling-overview.md`)
- Install Certbot → `software-engineering/install-certbot/README.md` (create) or `certbot-instructions.md`
- WebRTC → `software-engineering/webrtc/README.md` (create)

---

### 2.3 Typos

| Location | Current | Should be |
|---------|---------|-----------|
| `SUMMARY.md` + folder | `webassemby` | `webassembly` |
| `software-engineering/php/laravel/` | `interia-guide.md` | `inertia-guide.md` |

---

### 2.4 Structural issues

#### Orphaned / duplicate content

- **`copy-of-gis/`** – Duplicate of `gis/` with partial overlap; not in SUMMARY. Remove or merge.
- **`software-engineering/readme-1/`** – Odd name; contains testing, bootable drives. Consider renaming to `software-engineering/tooling-extras/` or merging into `tooling/`.

#### Misplaced content

- **IP Cameras** – Content lives under `ip-cameras/awesome-web-archiving/` (RTSP, ONVIF). Folder name suggests web archiving. Consider `ip-cameras/protocols/` or similar.
- **K3s tutorial** – `misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/` contains unrelated content (AI, GIS, Lando, Mapbox, Arduino, Google Sheets). Reorganize or rename.

#### Generic page names

- `robotics/page-7.md` → ArduSub (rename to `ardusub.md` or similar)
- `robotics/page-6/` → MAVLink content (merge or rename)
- `gis/deck.gl/page-3.md`
- `software-engineering/networking/web-sockets/page-2.md`
- `random/adhd-and-programming/page-4.md`

#### Path inconsistency

- Laravel Vite guide: `software-engineering/frontend/javascript/` vs parent `software-engineering/programming/frontend/`. One path is inconsistent.

---

### 2.5 GitBook-specific syntax

**`{% file src="..." %}`** – Used in ~25+ files for PDF/file embeds. GitBook-only; may not render elsewhere.

**Affected:** `resources-documents-pdfs-etc/`, `pen-testing/decompilers/android/smali.md`, etc.

**Recommendation:** If migrating away from GitBook, convert to standard markdown links or asset references.

---

### 2.6 Image references

- Many images use `![](../.gitbook/assets/...)` or `![](<../.gitbook/assets/...>)`.
- Some use external URLs (`https://1365695328-files.gitbook.io/...`).
- `.gitbook/assets/` contains non-image files (HTML, workflows, etc.) – likely scraped content.

---

### 2.7 Duplicate / near-duplicate files

- `drones/dji-docs-android/creating-a-panorama-application.md` vs `creating-a-panorama-application-1.md`
- `creating-a-camera-application.md` vs `creating-a-camera-application-1.md`
- `creating-a-mapview-and-waypoint-application.md` vs `creating-a-mapview-and-waypoint-applicatio.md` (truncated name)
- Chinese-named duplicates: `chuang-jian-*.md` vs `chuang-jian-*-1.md`

---

## 3. Prioritized Refactoring Plan

### P0 – Immediate (quick wins)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | Fix `webassemby` → `webassembly` in SUMMARY + rename folder | 5 min | High |
| 2 | Fix `interia-guide` → `inertia-guide` (file + SUMMARY) | 2 min | Medium |
| 3 | Fix Tooling/Certbot/WebRTC SUMMARY references – point to correct files | 15 min | High |
| 4 | Create `software-engineering/webrtc/README.md` and `software-engineering/install-certbot/README.md` stubs if missing | 5 min | Medium |

### P1 – Short term (1–2 days)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 5 | Remove or merge `copy-of-gis/` | 30 min | Medium |
| 6 | Rename `software-engineering/readme-1/` to something meaningful | 30 min | Low |
| 7 | Fix IP Cameras folder: `awesome-web-archiving` → `protocols` (or equivalent) | 15 min | Medium |
| 8 | Rename generic pages (`page-7` → `ardusub`, etc.) and update SUMMARY | 1 hr | Medium |
| 9 | Consolidate duplicate DJI docs (keep one, redirect or remove) | 1 hr | Medium |

### P2 – Medium term (1–2 weeks)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 10 | Fix broken links in high-traffic areas (robotics, OBD2, pen-testing) | 4–8 hrs | High |
| 11 | Reorganize K3s tutorial – extract unrelated content to proper sections | 2 hrs | Medium |
| 12 | Audit and fix `../../iot/obdii/broken-reference/` in Car Hacker's Handbook (replace with anchors or remove) | 2 hrs | Medium |
| 13 | Standardize `software-engineering/frontend` vs `programming/frontend` paths | 1 hr | Low |

### P3 – Longer term

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 14 | Full broken-link pass across all 35+ files | 8+ hrs | High |
| 15 | Migrate `{% file %}` to standard markdown if moving off GitBook | 4 hrs | Medium |
| 16 | Clean `.gitbook/assets/` – remove non-image files, verify image references | 2 hrs | Low |
| 17 | Add README.md to major sections missing overviews | 2 hrs | Medium |

---

## 4. Immediate Actions (Quick Wins)

These can be done in under 30 minutes:

1. **Rename folder:** `software-engineering/webassemby` → `software-engineering/webassembly`
2. **Update SUMMARY.md:** Replace `webassemby` with `webassembly` (3 occurrences)
3. **Rename file:** `interia-guide.md` → `inertia-guide.md` and update SUMMARY
4. **Fix SUMMARY section refs:**
   - Line 106: `[Tooling](<README (1).md>)` → `[Tooling](software-engineering/tooling/README.md)` (create if needed)
   - Line 119: `[Install Certbot](<README (2).md>)` → `[Install Certbot](software-engineering/install-certbot/README.md)`
   - Line 208: `[WebRTC](<README (1) (2).md>)` → `[WebRTC](software-engineering/webrtc/README.md)`
   - Line 447: `[Ubuntu: Set Keyboard Backlight](<README (1) (1).md>)` → move to `random/ubuntu-keyboard-backlight.md` and update SUMMARY
5. **Create stub READMEs** where missing (webrtc, install-certbot)

---

## 5. Files Requiring Manual Review

- **Broken link hotspots:** `obd2/car-hacking/the-car-hackers-handbook.md` (142 refs), `robotics/*`, `drones/dji-docs-android/*`
- **Imported content:** DJI docs, Kali blog, Car Hacker's Handbook – consider whether to fix links or replace with canonical source links
- **Duplicate DJI docs:** Decide keep/remove for `*-1.md` variants

---

## 6. Summary

| Category | Count |
|----------|-------|
| Broken link files | ~35 |
| Broken link instances | 300+ |
| Typos | 2 |
| Wrong SUMMARY refs | 4 |
| Orphaned/duplicate folders | 2 |
| Generic page names | 5+ |
| Duplicate DJI docs | 4+ pairs |

**Recommended starting point:** Execute P0 items first, then P1 items 5–7. Address broken links (P2 #10) for the most-used sections before a full pass.
