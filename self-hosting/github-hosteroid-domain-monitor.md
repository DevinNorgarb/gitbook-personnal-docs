---
title: "Domain Monitor (Hosteroid)"
description: "Imported notes on a self-hosted PHP domain expiration monitoring tool with RDAP/WHOIS lookup and multi-channel alerts."
---

# Domain Monitor (Hosteroid)

## Source

- Type: webpage
- Origin: https://github.com/Hosteroid/domain-monitor
- Imported: 2026-07-09
- Images: 2 saved under `./assets/github-hosteroid-domain-monitor/`
- License: MIT

## Content

![Domain Monitor logo](./assets/github-hosteroid-domain-monitor/01-logo.svg)

[Domain Monitor](https://github.com/Hosteroid/domain-monitor) is a self-hosted PHP MVC application for tracking domain expiration dates, RDAP/WHOIS registrar data, and SSL certificate validity. It sends alerts through multiple channels and is aimed at developers, hosting providers, and IT admins who want full control without third-party SaaS.

Created and maintained by [Hosteroid](https://www.hosteroid.uk). ~250+ GitHub stars at import time.

### Core capabilities

| Area | Details |
| --- | --- |
| Domain tracking | Add, edit, bulk import, and monitor unlimited domains |
| Lookup | RDAP and WHOIS with auto-refresh; built-in TLD registry for 1,400+ TLDs (IANA import) |
| Alerts | Email, Telegram, Discord, Slack, Mattermost, Pushover, and custom webhooks |
| Scheduling | Cron-based checks; configurable thresholds (e.g. 60, 30, 21, 14, 7, 5, 3, 2, 1 days before expiry) |
| UI | Dashboard, notification logs, in-app notification center, session management with geolocation |
| Security | Database-backed sessions, prepared statements, one-time install credentials, remote session termination |

### Requirements

- PHP 8.1+
- MySQL 5.7+ or MariaDB 10.3+
- Composer
- Apache or Nginx with `mod_rewrite` / equivalent routing to `public/`
- Cron for automated domain checks
- SMTP optional (for email alerts)

### Quick start (bare metal)

```bash
git clone https://github.com/Hosteroid/domain-monitor.git
cd domain-monitor
composer install
cp env.example.txt .env
# Edit .env — DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD
```

Create the database:

```sql
CREATE DATABASE domain_monitor CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Run the web installer at your vhost or via PHP built-in server:

```bash
php -S localhost:8000 -t public
```

The installer creates tables, generates `APP_ENCRYPTION_KEY`, and shows admin credentials **once** — save them immediately.

After login, import TLD registry data from **TLD Registry → Import TLDs**, or:

```bash
php cron/import_tld_registry.php
```

Point the web server document root at `public/`, not the repo root.

### Docker deployment

The repo includes `domain-monitor-docker/` with Compose, MariaDB, phpMyAdmin, and a `bootstrap.sh` that clones the app, runs Composer, and starts the stack.

```bash
cd domain-monitor-docker
cp env.docker.example .env.docker
# Edit .env.docker with real passwords
chmod +x bootstrap.sh
./bootstrap.sh
```

Services after bootstrap:

- App: http://localhost:8080
- phpMyAdmin: http://localhost:8081 (server: `domain-monitor-mariadb`)

### Cron

Copy the auto-detected command from **Settings → System**:

```cron
0 9 * * * /usr/bin/php /your/actual/path/cron/check_domains.php
```

Test notification channels in the UI before relying on cron.

### Notification channels

| Channel | Setup summary |
| --- | --- |
| Email | **Settings → Email** — SMTP host, port, TLS, credentials |
| Telegram | Bot via [@BotFather](https://t.me/BotFather); chat ID via [@userinfobot](https://t.me/userinfobot) |
| Discord / Slack | Incoming webhook URL in notification group settings |
| Webhook | JSON POST to any HTTPS endpoint (n8n, Zapier, custom API) |

Example webhook payload on domain expiry alert:

```json
{
  "event": "domain_expiration_alert",
  "message": "⚠️ WARNING: Domain 'example.com' expires in 7 days (January 30, 2026)!",
  "data": {
    "domain": "example.com",
    "domain_id": 123,
    "days_left": 7,
    "expiration_date": "2026-01-30",
    "registrar": "Example Registrar"
  },
  "sent_at": "2025-10-17T12:34:56Z"
}
```

### Project layout

```
domain-monitor/
├── app/           # Controllers, Models, Services, Views
├── core/          # MVC framework, Auth, session handling
├── cron/          # check_domains.php, import_tld_registry.php
├── database/      # migrations
├── public/        # web root (index.php, assets)
├── routes/
└── domain-monitor-docker/   # optional Docker stack
```

### Troubleshooting

- **WHOIS fails** — verify outbound network; some TLDs unsupported
- **No notifications** — check `logs/cron.log`, test SMTP in Settings, verify channel config
- **DB errors** — confirm `.env` credentials and that MySQL is running
- **Cron not firing** — run `php cron/check_domains.php` manually; verify path from Settings

### Links

- Repository: https://github.com/Hosteroid/domain-monitor
- Issues / feature requests: https://github.com/Hosteroid/domain-monitor/issues
- Wiki: https://github.com/Hosteroid/domain-monitor/wiki
- Discussions: https://github.com/Hosteroid/domain-monitor/discussions

## Key Takeaways

- Self-hosted alternative to commercial domain-expiry SaaS; MIT licensed PHP 8.1 app with web installer
- Supports RDAP/WHOIS for 1,400+ TLDs plus SSL monitoring and flexible multi-channel alerting
- Docker path (`domain-monitor-docker/`) is the fastest way to try it locally on port 8080
- Cron + notification groups are required for production alerting; credentials shown only once at install
