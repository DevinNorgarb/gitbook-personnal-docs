---
title: "HotSpotOS"
description: "Notes on HotSpotOS."
---

# HotSpotOS

A Raspberry Pi distribution that starts a WiFi hotspot when it cannot join an existing network, and bridges Ethernet to WiFi clients when wired internet is available.

## Source

- [guysoft/HotSpotOS](https://github.com/guysoft/HotSpotOS)
- [Download image](http://unofficialpi.org/Distros/HotSpotOS)
- [pi-imager community builds](https://github.com/guysoft/pi-imager/releases)

## How it works

Based on [CustomPiOS](https://github.com/guysoft/CustomPiOS) and auto-hotspot scripts (derived from [roboberry’s approach](http://www.raspberryconnect.com/network/item/330-raspberry-pi-auto-wifi-hotspot-switch-internet)).

1. Flash the image like any Raspberry Pi OS image
2. Optionally set WiFi in `hotspotos-wpa-supplicant.txt` on the boot partition
3. Boot — if WiFi joins, behaves like normal Pi OS; otherwise AP **`hotspot`** / password **`raspberry`**
4. Ethernet connected → bridges WAN to the hotspot
5. SSH: `hotspot.lan` (Bonjour) or router-assigned IP; user `pi` / password `raspberry` (change with `passwd`)

Default hotspot IP: **192.168.50.1**. Hostnames use `.lan`.

## Features

- Headless WiFi config via `hotspotos-wpa-supplicant.txt`
- IPv6 with prefix delegation
- Pi 3 / 3B+ / Zero W supported (see repo for current hardware notes)

## Related

- [Raspberry Pi Hotspot](./README.md)
- [Kupiki Hotspot Script](./kupiki-hotspot-script.md)
