---
title: "ONVIF"
description: "Notes on ONVIF."
---

# ONVIF

**ONVIF** (Open Network Video Interface Forum) defines SOAP/HTTP APIs so IP cameras, NVRs, and VMS software interoperate across vendors.

## Source

- [ONVIF Profile S Specification v1.2 (PDF)](https://www.onvif.org/wp-content/uploads/2018/08/ONVIF_Profile_-S_Specification_v1-2.pdf)
- Local copy: [ONVIF_Profile_-S_Specification_v1-2.pdf](../../.gitbook/assets/ONVIF_Profile_-S_Specification_v1-2.pdf)
- [onvif.org](https://www.onvif.org/)

## Profile S (streaming)

Covers live video streaming, PTZ control, and event handling for surveillance devices:

| Area | Capabilities |
|------|----------------|
| **Discovery** | WS-Discovery on the LAN |
| **Media** | RTSP stream URIs, profiles, codecs |
| **PTZ** | Pan/tilt/zoom, presets |
| **Events** | Motion, tamper, digital inputs |

## Integration tips

- Discover devices with `onvif-cli` or libraries (`python-onvif-zeep`, `node-onvif`)
- RTSP URL often obtained via `GetStreamUri` — credentials required
- Verify firmware profile support; not all “ONVIF” badges implement full Profile S

## Related

- [IP Camera Protocols](./README.md)
- [IP Cameras](../README.md)
