---
title: pimox/pimox7
description: Proxmox VE 7 port for Raspberry Pi — cluster Pis with x86 nodes.
---

# pimox/pimox7

**Pimox** ports Proxmox VE 7 to the Raspberry Pi so you can run a Proxmox cluster on Pis alone or mix Pi and x86 hardware.

## Source

- [pimox/pimox7](https://github.com/pimox/pimox7)

## Requirements

- Raspberry Pi 4
- Ethernet internet connection (WiFi-only install not supported)

## Quick install (Raspberry Pi OS 64-bit)

1. Flash [Raspberry Pi OS arm64](https://downloads.raspberrypi.org/raspios_arm64/)
2. `sudo -s`
3. `curl https://raw.githubusercontent.com/pimox/pimox7/master/RPiOS64-IA-Install.sh > RPiOS64-IA-Install.sh`
4. `chmod +x RPiOS64-IA-Install.sh && ./RPiOS64-IA-Install.sh`
5. Follow prompts (reboots; network may reset)

## Manual install (summary)

**Prechecks:** Debian Bullseye **64-bit**; static IPv4 in `/etc/network/interfaces` (no DHCP); no IPv6 in interfaces; hostname set in `/etc/hostname` and `/etc/hosts`; kernel headers installed.

```bash
echo "deb https://raw.githubusercontent.com/pimox/pimox7/master/ dev/" > /etc/apt/sources.list.d/pimox.list
curl https://raw.githubusercontent.com/pimox/pimox7/master/KEY.gpg | apt-key add -
apt update
apt install proxmox-ve   # use local console — network drops during install
```

## Notes

- Packages are prebuilt debs; upstream Proxmox sources: [git.proxmox.com](https://git.proxmox.com)
- Patched rebuild sources: [github.com/pimox](https://github.com/pimox)
- Use GitHub Issues for install problems

## Related

- [Install Proxmox on a Raspberry Pi](./README.md)
