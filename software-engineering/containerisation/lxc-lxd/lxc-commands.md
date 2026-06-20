---
title: "LXC commands"
description: "Notes on LXC commands."
---

# LXC commands

Quick LXC/LXD command reference. For broader context see [LXC/LXD overview](../../containerisation/lxc-lxd/README.md).

## Remove a proxy device from a container

Removes a **device** (here a port forward named `myportname80`) from an instance:

```bash
lxc config device remove lxd-dashboard myportname80
```

- `lxd-dashboard` — container/instance name
- `myportname80` — device name as shown in `lxc config device list <instance>`

### Related commands

```bash
# List devices attached to an instance
lxc config device list lxd-dashboard

# Show full instance config (devices, limits, profiles)
lxc config show lxd-dashboard

# Add a proxy device (example: host 8080 → container 80)
lxc config device add lxd-dashboard myportname80 proxy \
  listen=tcp:0.0.0.0:8080 connect=tcp:127.0.0.1:80
```

Use `lxc config device remove` when retiring a port forward or cleaning up after a dashboard install.
