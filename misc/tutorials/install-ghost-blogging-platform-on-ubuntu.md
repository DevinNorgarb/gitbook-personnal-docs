---
title: Install Ghost blogging platform on Ubuntu
description: Ghost CMS on Ubuntu 18.04 with Nginx, MySQL, Node.js, and Ghost-CLI.
---

# Install Ghost blogging platform on Ubuntu

Guide to deploying **Ghost** (open-source blogging CMS) on Ubuntu with Nginx reverse proxy, MySQL, and Let’s Encrypt TLS via Ghost-CLI.

## Source

- [Linode: How to Install Ghost CMS on Ubuntu 18.04 LTS](https://www.linode.com/docs/guides/how-to-install-ghost-on-ubuntu-18-04/) (published Feb 2020)

## Stack

| Component | Role |
|-----------|------|
| **Ghost** | Node.js CMS with Markdown editor |
| **Ghost-CLI** | Install, update, nginx/systemd/SSL setup |
| **Nginx** | Reverse proxy |
| **MySQL** | Database |
| **Node.js LTS** | Ghost runtime |
| **Let’s Encrypt** | TLS (via Ghost-CLI prompts) |

## Prerequisites

- Non-root sudo user (example: `ghostexample`)
- Valid domain with DNS pointing at the server
- `sudo apt update && sudo apt upgrade`
- `sudo apt install build-essential`

## Install flow (summary)

1. **Nginx:** `sudo apt install nginx`
2. **MySQL:** `sudo apt install mysql-server`, set root password in `mysql`
3. **Node.js:** NodeSource LTS setup + `sudo apt install nodejs`
4. **Ghost-CLI:** `sudo npm install -g ghost-cli@latest`
5. **App directory:** `sudo mkdir -p /var/www/ghost`, chown to deploy user, `cd /var/www/ghost`
6. **Install:** `ghost install` — answer URL, DB, nginx, SSL, systemd prompts
7. **Finish setup:** browse `https://your-domain.com/ghost` and create admin account

## Maintenance

```bash
ghost ls
ghost update
ghost doctor
```

Replace `example.com` in the Linode guide with your domain. Newer Ubuntu versions may need adjusted Node LTS lines — cross-check [Ghost docs](https://ghost.org/docs/).
