---
title: "Nginx Proxy Block"
description: "Notes on Nginx Proxy Block."
---

# Nginx Proxy Block

Minimal **nginx** `server` block that reverse-proxies HTTP traffic to a local backend.

## Source

- [Gist: nginx-proxy-block.conf](https://gist.github.com/DevinNorgarb/39fa5bffed7b2d613fae23154843d4e9#file-nginx-proxy-block-conf)

## Configuration

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name your-domain.com;

    access_log /var/log/nginx/reverse-access.log;
    error_log /var/log/nginx/reverse-error.log;

    location / {
        proxy_pass http://127.0.0.1:8000;
    }
}
```

Replace `your-domain.com` and `127.0.0.1:8000` with your hostname and upstream. For production, add TLS (`listen 443 ssl`), `proxy_set_header Host $host`, and WebSocket headers if needed.

## Related

- [Scripts](./README.md)
