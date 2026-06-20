---
title: "magnetico"
description: "Notes on magnetico."
---

# magnetico

**magnetico** crawls the BitTorrent **DHT** (Distributed Hash Table) without trackers or torrent files, building a local database of info hashes and metadata.

## Source

- [DevinNorgarb/magnetico](https://github.com/DevinNorgarb/magnetico) (fork)
- Upstream: [boramalper/magnetico](https://github.com/boramalper/magnetico) · [magnetico.org](https://magnetico.org/)

## How it works

1. Join the mainline DHT as a node
2. Discover info hashes from `announce_peer` / `get_peers` traffic
3. Fetch metadata via **BEP 9** (ut_metadata) when peers are available
4. Store names, file lists, and sizes in SQLite for search

## Components

| Binary | Role |
|--------|------|
| `magneticod` | Crawler daemon |
| `magneticow` | Web UI for searching the index |

## Quick start

```bash
# Build (Go)
go install github.com/boramalper/magnetico@latest

magneticod   # runs crawler
magneticow   # web interface (default :8080)
```

See the README for Docker, systemd, and resource tuning (crawling is network- and disk-intensive).

## Use cases

- Research on DHT topology and metadata availability
- Private search index (not a replacement for public indexers)
- Understanding how magnets propagate without central trackers

## Related

- [Torrents and DHT Network](./README.md)
