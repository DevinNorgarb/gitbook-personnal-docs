---
description: Get docker image sizes sorted by size
---

# Docker Image Sizes

```
docker image ls --format "{{.Repository}}:{{.Tag}} {{.Size}}" | awk '{if ($2~/GB/) print substr($2, 1, length($2)-2) * 1000 "MB - " $1 ; else print $2 " - " $1 }' | sed '/^0/d' | sort -n
```
