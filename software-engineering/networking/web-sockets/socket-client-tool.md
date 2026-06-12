---
title: Socket Client Tool
description: Browser tools for testing WebSocket and Socket.IO endpoints.
---

# Socket Client Tool

Browser-based utilities for manually connecting to **WebSocket** and **Socket.IO** servers during development.

## Source

- [Socket.IO Client Tool](https://amritb.github.io/socketio-client-tool) — connect, emit, and listen to Socket.IO events
- [PieSocket WebSocket Tester](https://www.piesocket.com/websocket-tester) — raw WebSocket client in the browser

## Socket.IO Client Tool

- Enter server URL and optional path/query
- Emit named events with JSON payloads
- Watch inbound events in a live log
- Useful for verifying namespaces, rooms, and auth middleware

## PieSocket WebSocket Tester

- Plain WebSocket connect/send without Socket.IO framing
- Good for STOMP, custom protocols, or pre-Socket.IO handshake debugging

## Tips

- Test both `ws://` (local) and `wss://` (TLS) endpoints
- Mirror production headers (`Authorization`, cookies) when auth is header-based
- Pair with [Testing Socket.IO with Postman](./testing-socketio-with-postman.md) for collection-based regression

## Related

- [Web Sockets](./README.md)
