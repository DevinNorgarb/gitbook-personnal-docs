---
title: "Testing WebRTC"
description: "Notes on Testing WebRTC."
---

# Testing WebRTC

Interactive sample for testing **trickle ICE** — how WebRTC gathers network candidates through STUN/TURN servers.

## Source

- [WebRTC samples — Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)

## What it does

The page creates a `RTCPeerConnection` with configurable ICE servers, starts candidate gathering for a single audio stream, and prints each candidate as it arrives. A completion indicator shows when gathering finishes.

### Permissions note

If `getUserMedia` permission is not persisted for the origin, Chrome may only gather candidates from a **single interface**. Grant microphone/camera permission (or use the page’s permission button) to gather from multiple interfaces. See the [RTCWEB IP address handling](https://datatracker.ietf.org/doc/html/draft-ietf-rtcweb-ip-handling) recommendations.

## How to interpret results

| Candidate `type` | Meaning |
|------------------|---------|
| `srflx` | STUN reflexive candidate — STUN server works |
| `relay` | TURN relay candidate — TURN server works |

Add STUN/TURN URIs with optional username/password. Use the **IceTransports** constraint (`all` vs `relay`) to control which candidates are surfaced.

When testing a single TURN/UDP server, the page can detect **wrong TURN credentials** during authentication.

## Typical workflow

1. Add your STUN and/or TURN server URIs.
2. Optionally set TURN username and password.
3. Click **Gather candidates**.
4. Review the table: time, type, foundation, protocol, address, port, priority, URL, relay protocol.
5. `onicecandidateerror` messages are not always fatal (e.g. IPv6 DNS lookup failure while IPv4 relay candidates still work).

[Open the live sample →](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)
