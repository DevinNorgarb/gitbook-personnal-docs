---
layout: landing
title: Scripts
description: "\"\\\"Get docker image sizes sorted by size; This page is a navigation entry in the **Scripts** section. The canonical runbook covers group setup, permission fixes, systemd boot configu\\\"\""
---

# Scripts

**Split a file in half**

1. Save the script to a file, say `split_csv.sh`:

   ```bash
   #!/bin/bash
   split -l $(( $(wc -l < "$1") / 2 + 1)) "$1" "${2:-part_}"
   ```

2. Make the script executable:

   ```bash
   chmod +x split_csv.sh
   ```

3. Run the script with your CSV file and an optional prefix:

   ```bash
   ./split_csv.sh test.csv myprefix_
   ```

This will split `test.csv` into two parts with filenames starting with `myprefix_`.

***

**Resize LXD btrfs loop file in one line**

```bash
grow_lxd_btrfs_file() { STORAGE_POOL="$1" ; NEW_SIZE="$2" ; STORAGE_POOL_SOURCE="$(lxc storage get "$STORAGE_POOL" source)" ; sudo truncate -s "$NEW_SIZE" "$STORAGE_POOL_SOURCE" ; STORAGE_POOL_LOOP_DEVICE="$(losetup -j "$STORAGE_POOL_SOURCE" | awk -F': ' '{print $1}' | head -1)" ; sudo losetup -c "$STORAGE_POOL_LOOP_DEVICE" ; LXD_PID=$(pgrep lxd | head -1) ; NS_MOUNT_POINT=$(sudo nsenter -t "$LXD_PID" -m -- findmnt -no target "$STORAGE_POOL_LOOP_DEVICE") ; sudo btrfs filesystem resize max "/proc/$LXD_PID/root/$NS_MOUNT_POINT" ; lxd sql global "UPDATE storage_pools_config SET value = '$NEW_SIZE' WHERE key = 'size' AND storage_pool_id IN (SELECT id FROM storage_pools WHERE name = '$STORAGE_POOL')" ; }
```

```bash
grow_lxd_btrfs_file pritunl-storage-pool 50GB
```

`lxc storage list`

***

## Kill process running on port

`lsof -t -i tcp:1234 | xargs kill`

### Run a speedtest from the CLI

```bash
watch "curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -"
```

***

#### Top Files Sizes

```bash
du -a / | sort -n -r | head -n 20
```

***

#### Top Memory Usage

```bash
ps aux --sort=-%mem | head
```

## In this section

- [Influx](./influx/README.md) — Imported notes from Ben Tasker on polling Kasa/Tapo plugs into InfluxDB via Docker
- [Docker Image Sizes](./docker-image-sizes.md) — Get docker image sizes sorted by size
- [Run docker commands without needing sudo](./run-docker-commands-without-needing-sudo.md) — This page is a navigation entry in the **Scripts** section. The canonical runbook covers group setup, permission fixes, systemd boot configu
- [Nginx Proxy Block](./nginx-proxy-block.md)
