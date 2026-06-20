---
title: "Dell PowerEdge 2950"
description: "Notes on Dell PowerEdge 2950."
---

# Dell PowerEdge 2950

The **Dell PowerEdge 2950** is a 2U rack-mount server (Intel Xeon era, DDR2 FB-DIMM, SAS/SATA bays) common in early homelabs before low-power Pi clusters and NUCs.

## Source

- [YouTube: louder than a Boeing 747](https://youtu.be/IK0yWkXBRRY) — fan noise meme video for this generation of gear

## Specs (typical)

| Item | Notes |
|------|--------|
| Form factor | 2U rack |
| CPUs | Dual-socket Intel Xeon (5400/5300 series common) |
| RAM | DDR2 FB-DIMMs, ECC |
| Storage | SAS/SATA backplane, PERC RAID optional |
| Power | Dual PSU, **high draw + high noise** |

## Homelab notes

- Expect **very loud** fans at idle unless you flash custom IPMI fan curves or under-volt
- Power efficiency is poor vs modern used enterprise (e.g. Gen12+ Dell) or ARM boards
- Fine for learning iDRAC, RAID, and bare-metal hypervisors if you have a garage/closet and cheap power

## Related

- [Self-hosting hardware](../README.md)
