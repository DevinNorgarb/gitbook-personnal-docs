# Overview

Personal notes and references on software, hardware, robotics, GIS, and related topics. The site is built with [mdBook](https://github.com/rust-lang/mdBook); the sidebar follows **[SUMMARY.md](SUMMARY.md)**.

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

## Published site (mdBook on GitHub Pages)

The book is built with [mdBook](https://github.com/rust-lang/mdBook) from this repository (see [`book.toml`](book.toml) and [`SUMMARY.md`](SUMMARY.md)).

- **Local preview**: install mdBook, then run `mdbook serve` from the repository root and open the URL it prints (usually `http://127.0.0.1:3000/gitbook-personnal-docs/`).
- **Static build**: `mdbook build` writes HTML to the `book/` directory (ignored by git).
- **GitHub Pages**: pushing to `main` or `master` runs [`.github/workflows/mdbook.yml`](.github/workflows/mdbook.yml), which deploys the built site to the `gh-pages` branch. In the repository **Settings → Pages**, set the source to that branch (folder `/`). The public URL is typically [https://devinnorgarb.github.io/gitbook-personnal-docs/](https://devinnorgarb.github.io/gitbook-personnal-docs/) (adjust the owner name if your fork uses a different GitHub username).

**If Settings → Pages shows no “Visit site” link or the page is blank:** (1) Open the **full project URL** above — not `https://<user>.github.io/` alone; mdBook is built with `site-url = /gitbook-personnal-docs/` in [`book.toml`](book.toml), so CSS and navigation load only under that path. (2) In **Actions**, confirm the latest **mdBook** workflow on `main`/`master` completed successfully (a failed `mdbook build` never updates `gh-pages`). (3) Under **Code**, switch the branch to **`gh-pages`** and confirm you see `index.html` at the root; if the branch is missing or empty, push a fix to `main` and wait for the workflow to finish, then refresh Pages after a minute or two.

GitBook-only constructs in markdown were converted for portable rendering; see [`scripts/convert_gitbook_tags.py`](scripts/convert_gitbook_tags.py) if you need to apply similar conversions to new imports.
