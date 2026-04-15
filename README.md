# Personal Documentation

A GitBook-style knowledge base covering software engineering, hardware, robotics, GIS, and more.

## Navigation

Use **[SUMMARY.md](SUMMARY.md)** as the table of contents. It defines the full structure of the documentation.

## Sections

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

GitBook-only constructs in markdown were converted for portable rendering; see [`scripts/convert_gitbook_tags.py`](scripts/convert_gitbook_tags.py) if you need to apply similar conversions to new imports.
