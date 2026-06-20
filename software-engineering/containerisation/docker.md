---
title: "Docker"
description: "Notes on Docker."
---

# Docker

**Docker** packages applications and dependencies into **containers** — portable, isolated environments that run consistently from laptop to production.

## Source

- [Docker documentation](https://docs.docker.com/)
- [What is Docker?](https://docs.docker.com/get-started/overview/)

## Why Docker

| Benefit | Detail |
|---------|--------|
| **Consistency** | Same image in dev, CI, and prod |
| **Isolation** | Processes share the host kernel, not a full VM |
| **Speed** | Lightweight starts vs hypervisor VMs |
| **Ecosystem** | Dockerfile, Compose, Hub registries |

## Core concepts

- **Image** — read-only template (layers from Dockerfile instructions)
- **Container** — running instance of an image
- **Registry** — image storage (Docker Hub or private)
- **Compose** — multi-container apps via `docker-compose.yml`

## Quick example

```bash
docker run -it --rm ubuntu /bin/bash
```

## In this section

- [Run docker without sudo](./docker/run-docker-without-sudo.md)
- [MultiArch Builds](./docker/multiarch-builds.md)

## Related

- [Containerisation](./README.md)
- [Kubernetes](../kubernetes/README.md)
