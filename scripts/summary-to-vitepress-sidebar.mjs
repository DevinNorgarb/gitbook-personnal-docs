#!/usr/bin/env node
/**
 * Parse GitBook SUMMARY.md → VitePress default-theme sidebar.
 * Run from repo root: npm run docs:gen-sidebar
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  formatSidebarModule,
  parseSummaryToSidebarGroups,
} from "./lib/navigation.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SUMMARY = path.join(ROOT, "SUMMARY.md");
const OUT = path.join(ROOT, ".vitepress", "sidebar.generated.mjs");

function main() {
  const raw = fs.readFileSync(SUMMARY, "utf8");
  const groups = parseSummaryToSidebarGroups(raw);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, formatSidebarModule(groups), "utf8");
  console.error("Wrote", path.relative(ROOT, OUT), "groups:", groups.length);
}

main();
