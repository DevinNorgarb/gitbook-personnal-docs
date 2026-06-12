---
title: BeEF
description: Browser Exploitation Framework — client-side penetration testing.
---

# BeEF

**BeEF** (Browser Exploitation Framework) is a penetration testing tool focused on the web browser as the attack surface.

## Source

- [BeEF Installation wiki](https://github.com/beefproject/beef/wiki/Installation)
- [beefproject/beef](https://github.com/beefproject/beef)

## What it does

Unlike server-side frameworks, BeEF hooks one or more browsers and uses them as beachheads for directed command modules and further attacks from within the browser context.

## Requirements

- macOS 10.5+ or modern Linux (Windows not supported)
- Ruby 3.0+
- SQLite 3.x
- Node.js 10+
- Gems from [Gemfile](https://github.com/beefproject/beef/blob/master/Gemfile)
- macOS: `brew install selenium-server-standalone`

## Quick start

```bash
./install
./beef
```

Read the [Configuration wiki](https://github.com/beefproject/beef/wiki/Configuration) before exposing BeEF on a network.

## Documentation

- [User Guide](https://github.com/beefproject/beef/wiki)
- [FAQ](https://github.com/beefproject/beef/wiki/FAQ)
