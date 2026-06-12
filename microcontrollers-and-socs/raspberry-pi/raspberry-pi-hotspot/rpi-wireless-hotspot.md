---
title: RPI Wireless Hotspot
description: Turn a Pi into a WPA WiFi hotspot sharing its Ethernet connection.
---

# RPI Wireless Hotspot

Configures a Raspberry Pi (built-in or USB WiFi) as a WPA-encrypted hotspot that shares an Ethernet WAN — useful in hotels, dorms, or when you do not want a separate router.

## Source

- [harryallerston/RPI-Wireless-Hotspot](https://github.com/harryallerston/RPI-Wireless-Hotspot)

## Features

- Hotspot starts on boot
- WPA encryption (default SSID `RaspberryPiFi`, key `0123456789A` — change during install)
- Pi keeps normal LAN behavior on Ethernet
- Optional custom DNS (including unblock-us presets)
- Chromecast-friendly DNS interception when using unblock-us

## Requirements

- Raspberry Pi B series or Pi 3+
- WiFi adapter with **nl80211** / hostapd support (most modern adapters)
- Active Ethernet uplink

## Install

```bash
git clone https://github.com/harryallerston/RPI-Wireless-Hotspot.git
cd RPI-Wireless-Hotspot
sudo ./install
```

Follow prompts for DNS and Chromecast options. Existing configs are backed up with `.old` suffix.

## Configuration notes

- WiFi channel: `/etc/hostapd/hostapd.conf`
- Tested on fresh Raspbian; existing installs may need manual merge

## Related

- [Raspberry Pi Hotspot](./README.md)
