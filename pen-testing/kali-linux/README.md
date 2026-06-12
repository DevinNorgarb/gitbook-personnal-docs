---
title: Kali Linux
description: Kali on Raspberry Pi — secure drop box, remote unlock, VPN access.
---

# Kali Linux

Notes and guides for running **Kali Linux** on embedded hardware (especially Raspberry Pi) as a portable security testing platform.

## Source

- [Secure Kali Pi (2022)](https://www.kali.org/blog/secure-kali-raspberry-pi/) — Kali.org Raspberry Pi series
- [Kali ARM images](https://www.kali.org/get-kali/#kali-arm)

## Topics in this section

The blog series covers building a **full-disk-encrypted** Pi drop box and remotely unlocking/connecting when it is not on your LAN:

- WiFi as client on known networks (pre-configured)
- WiFi access point mode for physical proximity access
- Ethernet with static or DHCP settings
- **OpenVPN** (or similar) back to a server you control to avoid port-forwarding on remote networks

## In this section

- [Kali Linux Blog](./kali-linux-blog.md) — imported walkthrough from the Secure Kali Pi follow-on posts

## Getting started

1. Flash a [Kali ARM image](https://www.kali.org/docs/arm/) for your Pi model
2. Follow [Secure Kali Pi](https://www.kali.org/blog/secure-kali-raspberry-pi/) for LUKS setup
3. Use the blog child page for wireless/VPN drop-box connectivity patterns

## Related

- [Pen Testing](../README.md)
- [Raspberry Pi](../../microcontrollers-and-socs/raspberry-pi/README.md)
