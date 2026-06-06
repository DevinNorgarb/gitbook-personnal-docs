#!/usr/bin/env node
/**
 * List .gitbook/assets files with no inbound markdown references.
 * Run from repo root: npm run docs:audit-assets
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const LEGACY = path.join(ROOT, ".gitbook", "assets");
const OUT = path.join(ROOT, "docs-asset-audit-report.md");

const SKIP_DIRS = new Set(["node_modules", ".git", "book", ".cursor", ".vitepress"]);

function* walkFiles(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkFiles(full);
    else yield full;
  }
}

function* walkMarkdown(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkMarkdown(full);
    else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) yield full;
  }
}

function main() {
  if (!fs.existsSync(LEGACY)) {
    console.error("No .gitbook/assets directory found.");
    return;
  }

  const corpus = [...walkMarkdown(ROOT)]
    .filter((f) => !f.includes(`${path.sep}.github${path.sep}`))
    .map((f) => fs.readFileSync(f, "utf8"))
    .join("\n");

  const legacyFiles = [...walkFiles(LEGACY)];
  const unreferenced = [];
  const referenced = [];

  for (const abs of legacyFiles) {
    const rel = path.relative(ROOT, abs).replace(/\\/g, "/");
    const base = path.basename(abs);
    const relFromAssets = path.relative(LEGACY, abs).replace(/\\/g, "/");

    const hit =
      corpus.includes(rel) ||
      corpus.includes(relFromAssets) ||
      corpus.includes(base) ||
      corpus.includes(encodeURI(rel)) ||
      corpus.includes(encodeURI(relFromAssets));

    if (hit) referenced.push(rel);
    else unreferenced.push(rel);
  }

  const lines = [
    "# Legacy asset reference audit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `- Legacy files scanned: **${legacyFiles.length}**`,
    `- Referenced from markdown: **${referenced.length}**`,
    `- Unreferenced (quarantine candidates): **${unreferenced.length}**`,
    "",
    "See [.github/ASSET-CONVENTION.md](.github/ASSET-CONVENTION.md).",
    "",
    "## Unreferenced files (first 100)",
    "",
    ...unreferenced.slice(0, 100).map((p) => `- \`${p}\``),
  ];
  if (unreferenced.length > 100) {
    lines.push("", `_…and ${unreferenced.length - 100} more_`);
  }

  fs.writeFileSync(OUT, lines.join("\n") + "\n");
  console.error("Wrote", path.relative(ROOT, OUT));
  console.error(
    `Referenced: ${referenced.length} | Unreferenced: ${unreferenced.length}`,
  );
}

main();
