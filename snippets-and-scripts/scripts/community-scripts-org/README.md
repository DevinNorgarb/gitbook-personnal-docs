---
title: "Proxmox VE Helper Scripts (community-scripts.org)"
description: "Notes on Proxmox VE Helper Scripts (community-scripts.org)."
---

# Proxmox VE Helper Scripts (community-scripts.org)

![Proxmox VE Helper Scripts logo](./assets/community-scripts-logo.png)

## Source

- Type: webpage
- Origin: https://community-scripts.org/
- Upstream repo: https://github.com/community-scripts/ProxmoxVE
- Imported: 2026-06-11
- Images: logo saved locally under `./assets/`

## Content

[community-scripts.org](https://community-scripts.org/) is the browseable catalog for **Proxmox VE Helper Scripts** — community-maintained automation that creates LXCs, VMs, and host add-ons from the Proxmox shell. The project builds on [@tteck](https://github.com/tteck)'s original helper-script work.

Rough scale (from the site homepage): **598 scripts**, **26 categories**, millions of installs.

### Requirements

| Component | Details |
|-----------|---------|
| Proxmox VE | 8.4, 9.0, 9.1, or 9.2 |
| Host | Proxmox VE (Debian-based) |
| Access | Root shell on the Proxmox node |
| Network | Internet during install |

### How to use

1. Open [community-scripts.org](https://community-scripts.org/) and search for a service.
2. Copy the **one-line install command** from the script page (or use the paths below).
3. Paste into the **Proxmox node shell** (not inside an existing LXC unless the script says so).
4. Choose **Default** (sensible CPU/RAM/disk) or **Advanced** (full control).
5. After install, many LXCs expose an **update/settings helper** when you open the container shell from Proxmox.

### Install command pattern

Replace `PATH/TO/script.sh` with a path from the tables below (`ct/`, `vm/`, `tools/pve/`, or `tools/addon/`):

```bash
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/PATH/TO/script.sh)"
```

Alternative using `curl`:

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/PATH/TO/script.sh)"
```

> **Tip:** Prefer copying the exact command from the script's page on community-scripts.org when available — paths and flags can change.

---

## Curated examples

Hand-picked scripts that cover common homelab needs. Full catalog: [community-scripts.org/categories](https://community-scripts.org/categories).

### Reverse proxy & DNS

| Service | Type | Script path | Notes |
|---------|------|-------------|-------|
| **Nginx Proxy Manager** | LXC | `ct/nginxproxymanager.sh` | Web UI for reverse proxies, TLS, hostnames — often what people mean by “proxy manager” on Proxmox |
| AdGuard Home | LXC | `ct/adguard.sh` | Network-wide DNS filtering / ad blocking |
| Pi-hole | LXC | `ct/pihole.sh` | DNS sinkhole |
| Traefik | LXC | `ct/traefik.sh` | Dynamic reverse proxy / ingress |

**Nginx Proxy Manager** example:

```bash
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/nginxproxymanager.sh)"
```

### Proxmox host & LXC maintenance

Run these on the **Proxmox host** (not inside a service LXC).

| Tool | Script path | Notes |
|------|-------------|-------|
| Post-PVE install | `tools/pve/post-pve-install.sh` | Recommended after fresh PVE install — repos, updates, common tweaks |
| Update all LXCs | `tools/pve/update-lxcs.sh` | Batch-update containers created by helper scripts |
| Host backup | `tools/pve/host-backup.sh` | Backup helper for the node |
| LXC execute | `tools/pve/execute.sh` | Run a command across selected LXCs |
| All templates | `tools/addon/all-templates.sh` | Create base LXC OS templates (Debian, Ubuntu, Alpine, …) |
| Webmin | `tools/addon/webmin.sh` | Browser-based server admin |

**Post-PVE install** (good first step on a new node):

```bash
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/tools/pve/post-pve-install.sh)"
```

### Base OS & containers

| Service | Type | Script path | Notes |
|---------|------|-------------|-------|
| Docker (in LXC) | LXC | `ct/docker.sh` | Docker engine inside an unprivileged LXC |
| Debian template LXC | LXC | `ct/debian.sh` | Minimal Debian container |
| Ubuntu template LXC | LXC | `ct/ubuntu.sh` | Minimal Ubuntu container |

### Home automation & smart home

| Service | Type | Script path | Notes |
|---------|------|-------------|-------|
| Home Assistant OS | VM | `vm/haos-vm.sh` | Official HAOS qcow2 VM image |
| Home Assistant (container) | LXC | `ct/homeassistant.sh` | HA Core in LXC (not full HAOS) |

### Media, photos & NVR

| Service | Type | Script path | Notes |
|---------|------|-------------|-------|
| Immich | LXC | `ct/immich.sh` | Self-hosted photos/video |
| Jellyfin | LXC | `ct/jellyfin.sh` | Media server |
| Frigate | LXC | `ct/frigate.sh` | AI NVR for IP cameras |

### Monitoring, automation & AI

| Service | Type | Script path | Notes |
|---------|------|-------------|-------|
| Uptime Kuma | LXC | `ct/uptimekuma.sh` | Status / uptime monitoring |
| Grafana | LXC | `ct/grafana.sh` | Dashboards & visualization |
| n8n | LXC | `ct/n8n.sh` | Workflow automation |
| Ollama | LXC | `ct/ollama.sh` | Local LLM inference |

### Security & passwords

| Service | Type | Script path | Notes |
|---------|------|-------------|-------|
| Vaultwarden | LXC | `ct/vaultwarden.sh` | Bitwarden-compatible password vault |

### Docker / PaaS add-ons (on host)

| Tool | Script path | Notes |
|------|-------------|-------|
| Dockge | `tools/addon/dockge.sh` | Compose stack manager |
| Coolify | `tools/addon/coolify.sh` | Self-hosted PaaS |
| Komodo | `tools/addon/komodo.sh` | Build/deploy Docker workloads |

---

## Default vs advanced mode

- **Default** — Uses script-defined CPU, RAM, and disk defaults; minimal prompts. Most installs finish in a few minutes.
- **Advanced** — Exposes storage pool, network bridge, resource sizing, and app-specific options before creation.

## After install

Many application scripts install a **post-install menu** inside the LXC (updates, settings, logs). Open the container console from the Proxmox UI and follow the on-screen helper.

## Related docs in this repo

- [Install ProxMox on a Raspberry Pi](../../../microcontrollers-and-socs/raspberry-pi/install-proxmox-on-a-raspberry-pi/README.md) — Pi-focused Proxmox installs (PXVirt / Pimox / guides)
- [Resize Proxmox root storage](../../resize-proxmox-root-storage.md)

## Key Takeaways

- **community-scripts.org** is the catalog; **github.com/community-scripts/ProxmoxVE** is the source of truth for script paths.
- One command from the Proxmox **host shell** creates an LXC or VM — no manual template hunting.
- **Nginx Proxy Manager** (`ct/nginxproxymanager.sh`) is the go-to reverse-proxy UI; pair with **post-pve-install** on new nodes.
- Use **Default** for quick homelab wins; **Advanced** when you care about bridge, storage, or sizing.
- Browse [categories](https://community-scripts.org/categories) for the full list — new scripts ship frequently (RSS: `https://community-scripts.org/api/rss`).
