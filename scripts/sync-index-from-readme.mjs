#!/usr/bin/env node
/**
 * index.md is the VitePress home page (layout: home) and is maintained separately
 * from README.md (GitHub repo overview). This script only warns if someone
 * accidentally reintroduces a blind README → index copy.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const index = path.join(root, "index.md");

if (!fs.existsSync(index)) {
  console.error(
    "index.md is missing — restore the VitePress home page (layout: home).",
  );
  process.exit(1);
}

const indexBody = fs.readFileSync(index, "utf8");
if (!/^---[\s\S]*?layout:\s*home/m.test(indexBody)) {
  console.error(
    "index.md must use `layout: home` for the public landing page. See README.md for repo docs.",
  );
  process.exit(1);
}

console.error("index.md home layout OK (not synced from README.md)");
