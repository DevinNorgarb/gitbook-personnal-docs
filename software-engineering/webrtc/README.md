---
title: WebRTC
description: Real-time voice/video — open-source stacks, testing, STUN/TURN setup.
---

# WebRTC

**WebRTC** enables peer-to-peer audio, video, and data channels in browsers and native apps without proprietary plugins.

## What WebRTC provides

- Capture from camera/mic (`getUserMedia`)
- Encrypted transports (DTLS-SRTP)
- NAT traversal via **ICE** with **STUN/TURN** servers
- Data channels for arbitrary binary/text messages

## In this section

| Page | Focus |
|------|--------|
| [Open-source WebRTC Projects](./opensource-webrtc-projects.md) | Kurento, Janus, mediasoup, etc. |
| [Testing WebRTC](./testing-webrtc.md) | Debug connectivity and media paths |
| [Setting up STUN and TURN servers](./setting-up-stun-and-turn-servers.md) | Relay for restrictive NATs |

## Architecture tip

```
Browser A ←→ STUN (discover reflexive addr)
         ↘ TURN (relay when P2P fails) ↙
Browser B
```

Most production apps need a **signaling server** (WebSocket/HTTP) to exchange SDP offers/answers and ICE candidates — WebRTC does not define signaling.

## Related

- [Web Sockets](../networking/web-sockets/README.md)
- [Software Engineering](../README.md)
