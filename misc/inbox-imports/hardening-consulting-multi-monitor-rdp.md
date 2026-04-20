---
title: Multi-monitor Support in RDP
description: Imported note from Hardening Consulting
---

# Multi-monitor Support in RDP

## Source
- Type: webpage
- Origin: https://www.hardening-consulting.com/en/posts/20170302-multi-monitor-rdp.html
- Author: Hardening Consulting (author byline not explicitly listed on the page)
- Imported: 2026-04-20

## Content
This note captures a technical write-up about implementing multi-monitor support in RDP, with lessons learned from integrating FreeRDP-based components and testing interoperability with Microsoft's `mstsc`.

### Testing setup used by the author
- Baseline validation with two physical screens and `xfreerdp /v:myserver /multimon /f`.
- For virtualized Windows client testing, QEMU/KVM with SPICE and multiple QXL video cards was used.
- `remote-viewer spice://127.0.0.1:5902` was preferred over virt-manager display because it exposes one window per monitor.

### Protocol-level behavior observed
- Client monitor layout is sent early during connection (GCC / MCS connect request), including monitor coordinates and dimensions.
- Server can respond with a Server Monitor Layout PDU; in practice this appears required for `mstsc` multi-monitor behavior.
- The write-up notes that `mstsc` behavior may diverge from strict spec expectations, especially around monitor coordinate origins.

### Backend and client implementation notes
- Existing backend assumptions of a single monitor required significant refactoring.
- X11 and Qt backends were already suitable for multi-monitor workflows once API interactions were corrected.
- Practical fixes included:
  - handling monitor sets with negative coordinates;
  - renegotiating dimensions correctly;
  - adjusting window placement/fullscreen logic.

### egfx-specific complexity
- Issues appeared when egfx was used, even when planar/RemoteFX modes looked correct.
- The author compared behavior with official Windows server behavior and observed:
  - use of `RDPGFX_RESET_GRAPHICS_PDU` for resizing and monitor layout reset;
  - per-monitor `RDPGFX_CREATE_SURFACE_PDU` usage instead of one large surface.
- Rendering logic was reworked to split damage per monitor and rebase coordinates per surface.
- Additional complexity came from monitor-count limiting and shadowing sessions.

### Final implementation trade-off
- H264 was disabled in the multi-monitor path due to per-surface codec context complexity.
- Main lesson: proprietary interoperability introduces hidden complexity and schedule risk.

## Key Takeaways
- Multi-monitor RDP support is strongly shaped by real client behavior, not only protocol specs.
- `mstsc` interoperability can require optional PDUs in practice and tolerate coordinate edge cases.
- egfx multi-monitor support often needs per-monitor surface and repaint pipelines.
- Plan extra implementation and testing buffer for proprietary-client compatibility work.
