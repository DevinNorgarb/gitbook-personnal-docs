# Overview

Personal notes and references on software, hardware, robotics, GIS, and related topics. The site is built with [VitePress](https://vitepress.dev/); the sidebar is generated from **[SUMMARY.md](SUMMARY.md)** (`npm run docs:gen-sidebar`).

## Browse by topic

- **Snippets & Scripts** – Install scripts, backups, Magento, resize guides
- **Software Engineering** – WebAssembly, automation, Android, PHP, AWS, frontend, containers, networking, Kubernetes, tooling
- **OBD2** – Vehicle diagnostics, CAN bus, car hacking, simulators
- **3D Printing** – Gallery, problems, guides
- **Robotics** – SITL, ROS, ArduSub, PixHawk, MAVLink
- **MicroControllers & SoCs** – Raspberry Pi, Arduino, ESP32
- **Self-Hosting** – Sentry, hardware
- **GIS** – Geocoding, Tile38, Deck.gl, Mapbox, Pelias
- **Web Archiving** – Awesome list
- **IP Cameras** – RTSP, ONVIF protocols
- **Web Scraping** – Monkey-DL, scrapers
- **Pen Testing** – Drones, automotive, decompilers, Kali
- **Random** – Torrents, ADHD, Chromecast, Ubuntu tips
- **Maritime AIS** – Raspberry Pi AIS research
- **Drones** – DashWare, DJI docs
- **Software Defined Radio** – Open RAN, RTL-SDR
- **Resources** – PDFs, OAuth2, pilots license
- **MISC** – AI, tutorials

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to add or edit pages.

## Style Guide

See [.github/DOCUMENTATION-STYLE-GUIDE.md](.github/DOCUMENTATION-STYLE-GUIDE.md) for documentation conventions.

## Published site (VitePress on GitHub Pages)

- **Prerequisites**: [Node.js](https://nodejs.org/) 20+ and `npm ci`.
- **Local preview**: `npm run docs:dev` (runs `README.md` → `index.md` sync, regenerates the sidebar from `SUMMARY.md`, then starts VitePress). Open the printed URL (default port **5173**), served at the root path **`/`**.
- **Production build**: `npm run docs:build` writes to [`.vitepress/dist/`](.vitepress/dist/) (gitignored).
- **GitHub Pages**: pushes to `main` or `master` run [`.github/workflows/vitepress.yml`](.github/workflows/vitepress.yml), which deploys **`.vitepress/dist`** to the **`gh-pages`** branch. In **Settings → Pages**, use branch **`gh-pages`** at **`/`**. The primary site URL is [https://docs.f1y.ing/](https://docs.f1y.ing/) (if no custom domain is configured, use the repository path URL for the Pages host).

**Audit reports**: `npm run docs:audit` writes `docs-audit-report.json` and `docs-audit-report.md` (gitignored); CI uploads them as a workflow artifact.

GitBook-only constructs in markdown were converted for portable rendering; see [`scripts/convert_gitbook_tags.py`](scripts/convert_gitbook_tags.py) if you need similar conversions for new imports.
