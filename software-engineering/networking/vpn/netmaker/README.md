---
title: NetMaker
description: WireGuard automation — mesh VPNs, remote access, and multi-cloud networking.
---

# NetMaker

**Netmaker** automates **WireGuard** networks from homelab to enterprise — mesh VPNs, site-to-site links, remote access gateways, and Kubernetes overlays.

## Source

- [gravitl/netmaker](https://github.com/gravitl/netmaker)
- [docs.netmaker.io](https://docs.netmaker.io/)
- [8 use cases for Kubernetes over VPN](https://itnext.io/8-use-cases-for-kubernetes-over-vpn-unlocking-multicloud-flexibility-3958dab2219f)

## Features

| Area | Capabilities |
|------|----------------|
| **Networks** | WireGuard mesh, site-to-site, remote access gateways |
| **Management** | Admin UI, OAuth, private DNS, ACLs |
| **Clients** | Linux, Docker, Mac, Windows agents (`netclient`) |

## Quick self-host install

1. Ubuntu 24.04 VM with static public IP
2. Open ports **443**, **51821** TCP/UDP
3. Wildcard DNS `*.netmaker.example.com` → VM IP (recommended)
4. Run:

```bash
sudo wget -qO /root/nm-quick.sh https://raw.githubusercontent.com/gravitl/netmaker/master/scripts/nm-quick.sh
sudo chmod +x /root/nm-quick.sh && sudo /root/nm-quick.sh
```

Managed option: [account.netmaker.io](https://account.netmaker.io)

## Common use cases

- Cross-cloud **k3s** clusters (see [Install K3s](../../../misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/README.md))
- Homelab remote access without exposing services publicly
- Multi-site private networking with kernel WireGuard performance

## In this section

- [Installation](./installation.md) — opinionated quick-start guide

## Related

- [VPN](../README.md)
