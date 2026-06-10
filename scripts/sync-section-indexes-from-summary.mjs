#!/usr/bin/env node
/**
 * Enrich thin section READMEs with child links from SUMMARY.md.
 * Run from repo root: npm run docs:gen-section-indexes
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { syncSectionIndexes } from "./lib/section-index.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SUMMARY = path.join(ROOT, "SUMMARY.md");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const force = process.argv.includes("--force");
  const summaryRaw = fs.readFileSync(SUMMARY, "utf8");
  const changes = syncSectionIndexes(ROOT, summaryRaw, { dryRun, force });

  const replaced = changes.filter((c) => c.action === "replace").length;
  const appended = changes.filter((c) => c.action === "append").length;

  console.error(
    `${dryRun ? "[dry-run] " : ""}Updated ${changes.length} section indexes (${replaced} replaced, ${appended} appended)`,
  );
  for (const change of changes) {
    console.error(`  ${change.action}\t${change.file}\t(${change.reason})`);
  }
}

main();
