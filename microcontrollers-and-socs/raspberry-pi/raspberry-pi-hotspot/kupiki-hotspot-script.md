---
title: "Kupiki Hotspot Script"
description: "Notes on Kupiki Hotspot Script."
---

# Kupiki Hotspot Script

One-shot installer that turns a Raspberry Pi into a captive-portal WiFi hotspot with RADIUS authentication and daloRadius management UI.

## Source

- [pihomeserver/Kupiki-Hotspot-Script](https://github.com/pihomeserver/Kupiki-Hotspot-Script)
- [Parameter wiki](https://github.com/pihomeserver/Kupiki-Hotspot-Script/wiki)
- [Original blog tutorial](http://www.pihomeserver.fr/2015/08/05/raspberry-pi-coovachilli-et-freeradius-pour-un-hotspot-wifi-avec-portail-captif/) (archived)

## What you get

- Onboard WiFi as hotspot
- **CoovaChilli** captive portal (Nginx-served, HTML/JS customizable)
- Optional user registration (config-gated)
- **FreeRADIUS** auth (user/password; optional MAC auth)
- **daloRadius** admin UI at `http://<pi_ip>/daloradius`

Designed with French public WiFi logging requirements in mind (see repo for legal/compliance notes).

## Requirements

- Raspberry Pi 3 or 3B+ (Pi 4 not verified at doc time)
- Ethernet uplink, 4 GB+ SD card, Raspbian-like OS 9+

## Install

```bash
git clone https://github.com/pihomeserver/Kupiki-Hotspot-Script.git
# Edit script header for your network settings (see wiki)
sudo chmod +x pihotspot.sh && sudo ./pihotspot.sh
tail -f /var/log/pihotspot.log
```

> Do not open daloRadius through the hotspot SSID — use Ethernet/LAN.

## Updates (v2.0.0+)

```bash
sudo /etc/kupiki/kupiki_updater.sh
```

## Related

- [HotSpotOS](./hotspotos.md)
- [RPI Wireless Hotspot](./rpi-wireless-hotspot.md)
