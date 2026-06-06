#!/usr/bin/env node
/**
 * Fail if `.vitepress/sidebar.generated.mjs` drifts from SUMMARY.md.
 * Run from repo root: npm run docs:check-sidebar
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
  const expected = formatSidebarModule(parseSummaryToSidebarGroups(raw));

  if (!fs.existsSync(OUT)) {
    console.error(`Missing ${path.relative(ROOT, OUT)}. Run: npm run docs:gen-sidebar`);
    process.exit(1);
  }

  const actual = fs.readFileSync(OUT, "utf8");
  if (actual === expected) {
    console.error("Sidebar is in sync with SUMMARY.md");
    return;
  }

  console.error(
    "Sidebar drift: .vitepress/sidebar.generated.mjs does not match SUMMARY.md.\n" +
      "Run: npm run docs:gen-sidebar\n" +
      "Then commit the updated sidebar file.",
  );
  process.exit(1);
}

main();
