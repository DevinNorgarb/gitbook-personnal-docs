---
title: "Composer"
description: "Notes on Composer."
---

# Composer

**Composer** is PHP’s dependency manager — declares libraries per project and installs them into `vendor/`.

## Source

- [getcomposer.org](https://getcomposer.org/)
- [Introduction](https://getcomposer.org/doc/00-intro.md)

## Install (global binary)

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
```

Verify: `composer --version`

## Notes

- Requires PHP 7.2.5+ (Composer 2.2 LTS supports older PHP)
- Local install: run the installer in your project and use `php composer.phar`
- On macOS, create `/usr/local/bin` if missing: `mkdir -p /usr/local/bin`

## Related

- [Install scripts](./README.md)
