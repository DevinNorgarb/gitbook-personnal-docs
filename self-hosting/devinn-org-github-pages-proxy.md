---
title: "devinn.org → GitHub Pages proxy"
description: "Serve VitePress docs on devinn.org and docs.f1y.ing using Nginx Proxy Manager."
---

# devinn.org → GitHub Pages proxy

## Architecture

| Domain | DNS | Serves |
| --- | --- | --- |
| `docs.f1y.ing` | CNAME → `devinnorgarb.github.io` | GitHub Pages (`gh-pages` branch) |
| `devinn.org` | A → VPS (Nginx Proxy Manager) | Reverse proxy to `docs.f1y.ing` |

GitHub Pages supports **one** custom domain per site. Keep `docs.f1y.ing` as the GitHub CNAME. Point `devinn.org` at the VPS and **proxy** — do not 301 redirect.

Example OBD article:

- https://docs.f1y.ing/obd2/guides/esp32-obd-live-web-dashboard.html
- https://devinn.org/obd2/guides/esp32-obd-live-web-dashboard.html

## Why you see GitHub’s 404

GitHub’s *“There isn’t a GitHub Pages site here”* page means the request reached GitHub with the **wrong `Host` header**.

| `Host` sent to GitHub | Result |
| --- | --- |
| `docs.f1y.ing` | 200 — site loads |
| `devinn.org` | 404 — site not found |

Nginx Proxy Manager always injects `proxy_set_header Host $host;` **after** the Advanced-tab custom config, so pasting `proxy_set_header Host docs.f1y.ing;` in the UI **does not work**. GitHub still sees `devinn.org`.

## Nginx Proxy Manager setup

### 1. Proxy Host (UI)

**Hosts → Proxy Hosts → Add Proxy Host**

| Field | Value |
| --- | --- |
| Domain Names | `devinn.org`, `www.devinn.org` |
| Scheme | `https` |
| Forward Hostname / IP | `docs.f1y.ing` |
| Forward Port | `443` |
| Block Common Exploits | on |
| **Cache Assets** | **off** (critical — see below) |
| Websockets Support | off |

**SSL** tab: Let’s Encrypt cert, Force SSL on.

Do **not** use a Redirect Host. Delete any existing redirect for `devinn.org`.

### Why styling breaks when Cache Assets is on

NPM’s **Cache Assets** option injects a regex `location` for `*.css`, `*.js`, images, and fonts. That block uses `include conf.d/include/proxy.conf`, which sends `Host: devinn.org` to GitHub. HTML may load (your fixed `location /`), but stylesheets and scripts 404 — unstyled pages.

**Fix:** turn **Cache Assets off** for this proxy host.

### 2. Fix the Host header (required)

After saving in the UI, edit the generated proxy host config inside the NPM container.

```bash
# Find the config file (replace with your NPM data path)
grep -l "devinn.org" /data/nginx/proxy_host/*.conf
```

Open that file and find the `location /` block. Change:

```nginx
proxy_set_header Host $host;
```

to:

```nginx
proxy_set_header Host docs.f1y.ing;
proxy_ssl_server_name on;
```

If the block uses `include conf.d/include/proxy.conf;`, replace the whole `location /` block with:

```nginx
location / {
    include conf.d/include/assets.conf;
    include conf.d/include/block-exploits.conf;
    include conf.d/include/letsencrypt-acme-challenge.conf;

    proxy_pass https://docs.f1y.ing;
    proxy_set_header Host docs.f1y.ing;
    proxy_ssl_server_name on;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Reload nginx inside the container:

```bash
nginx -t && nginx -s reload
```

**Note:** NPM may overwrite manual edits if you re-save the host in the UI. Re-apply the `Host` change after UI edits, or keep a copy of the fixed `location` block.

### 3. Verify

```bash
curl -sI https://devinn.org/obd2/guides/esp32-obd-live-web-dashboard.html | head -5
# Expect: HTTP/2 200 (not 404, not 301)

curl -sI https://docs.f1y.ing/obd2/guides/esp32-obd-live-web-dashboard.html | head -5
# Expect: HTTP/2 200
```

## Related

- [Nginx Proxy Block](../snippets-and-scripts/scripts/nginx-proxy-block.md)
- [Publishing (GitHub Pages)](../README.md#publishing-github-pages)
