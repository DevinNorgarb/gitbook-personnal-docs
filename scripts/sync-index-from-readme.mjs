#!/usr/bin/env node
/** Copy README.md → index.md so `/` matches GitHub’s canonical home file. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readme = path.join(root, "README.md");
const index = path.join(root, "index.md");
fs.copyFileSync(readme, index);
console.error("Synced README.md → index.md");
