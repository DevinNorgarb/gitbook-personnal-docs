---
title: Capacitor
description: Ionic Capacitor — ship web apps as native iOS/Android with a JS bridge.
---

# Capacitor

**Capacitor** is Ionic’s cross-platform native runtime: wrap your web app (React, Vue, Angular, etc.) in a native shell and call device APIs via plugins.

## Source

- [Capacitor documentation](https://capacitorjs.com/docs)
- [Getting started](https://capacitorjs.com/docs/getting-started)
- [ionic-team/capacitor](https://github.com/ionic-team/capacitor)

## Requirements

- `package.json` and a built web assets directory (`dist`, `www`, `build`, …)
- `index.html` with a `<head>` tag (required for plugin injection)

## Add to an existing web app

```bash
npm i @capacitor/core
npm i -D @capacitor/cli
npx cap init
npm i @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios
npm run build
npx cap sync
```

Open native projects with `npx cap open android` / `npx cap open ios`.

## vs Cordova

Capacitor is the modern Ionic stack — first-class TypeScript, maintained native tooling, and a simpler plugin model. See [Cordova](./cordova.md) for legacy hybrid apps.

## Related

- [Android App Development](./README.md)
