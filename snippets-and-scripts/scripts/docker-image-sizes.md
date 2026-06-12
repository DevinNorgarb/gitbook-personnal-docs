---
title: Docker Image Sizes
description: Get docker image sizes sorted by size
---

# Docker Image Sizes

## Source
- Source URL not captured in original stub.

## Summary

- Covers key material related to **Docker Image Sizes**.
- Use this page as a launch point before drilling into implementation details.

## Install / Run

```bash
docker image ls --format "{{.Repository}}:{{.Tag}} {{.Size}}" | awk '{if ($2~/GB/) print substr($2, 1, length($2)-2) * 1000 "MB - " $1 ; else print $2 " - " $1 }' | sed '/^0/d' | sort -n
```

## Related pages

- [Readme](./README.md)
- [Community Scripts Org](./community-scripts-org/README.md)
- [Influx](./influx/README.md)
- [Nginx Proxy Block](./nginx-proxy-block.md)
- [Run Docker Commands Without Needing Sudo](./run-docker-commands-without-needing-sudo.md)
