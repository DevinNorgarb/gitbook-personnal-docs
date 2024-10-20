# Configure Cloudflare Tunnel in docker-compose.yml

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

```
version: '3'
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    command: tunnel --no-autoupdate run --token your_token_from_cloudflare

```
