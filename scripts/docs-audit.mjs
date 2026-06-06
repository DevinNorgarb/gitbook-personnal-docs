#!/usr/bin/env node
/**
 * Documentation audit: thin pages, broken local images/links, SUMMARY orphans, nav hints.
 * Run from repo root: npm run docs:audit
 * Gate CI: npm run docs:audit -- --fail-on broken_images,broken_local_links
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  countFlagViolations,
  extractMdLinksAndImages,
  resolveLocal,
  wordCount,
} from "./lib/audit-markdown.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONFIG_PATH = path.join(ROOT, "audit.config.json");
const OUT_JSON = path.join(ROOT, "docs-audit-report.json");
const OUT_MD = path.join(ROOT, "docs-audit-report.md");

const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  "book",
  ".cursor",
  ".vitepress",
  ".gitbook",
]);

function loadConfig() {
  const raw = fs.readFileSync(CONFIG_PATH, "utf8");
  return JSON.parse(raw);
}

function parseArgs(argv) {
  /** @type {string[]} */
  const failOn = [];
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--fail-on" && argv[i + 1]) {
      failOn.push(
        ...argv[i + 1]
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      );
      i++;
    }
  }
  return { failOn };
}

function* walkMarkdown(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkMarkdown(full);
    else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) yield full;
  }
}

function parseSummaryPaths() {
  const raw = fs.readFileSync(path.join(ROOT, "SUMMARY.md"), "utf8");
  const paths = new Set();
  const re = /\]\(([^)]+\.md)\)/gi;
  let m;
  while ((m = re.exec(raw)) !== null) {
    paths.add(m[1].replace(/\\/g, "/").trim());
  }
  return paths;
}

function parseSummaryNavContext() {
  const raw = fs.readFileSync(path.join(ROOT, "SUMMARY.md"), "utf8");
  const lines = raw.split(/\r?\n/);
  let section = "Overview";
  /** @type {Map<string, string>} */
  const fileToSection = new Map();
  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      section = line.replace(/^##\s+/, "").trim();
      continue;
    }
    const match = line.match(/\]\(([^)]+\.md)\)/i);
    if (match) {
      fileToSection.set(match[1].replace(/\\/g, "/").trim(), section);
    }
  }
  return fileToSection;
}

function shouldSkipFile(rel, config) {
  if (config.skipAuditFiles?.includes(rel)) return true;
  for (const prefix of config.skipAuditPrefixes ?? []) {
    if (rel.startsWith(prefix)) return true;
  }
  return false;
}

function matchHotspots(rel, config) {
  const hints = [];
  for (const h of config.hotspots ?? []) {
    if (rel.includes(h.pathIncludes)) {
      hints.push({ id: h.id, note: h.note });
    }
  }
  return hints;
}

export function runAudit(config) {
  const summaryPaths = parseSummaryPaths();
  const navContext = parseSummaryNavContext();
  const allMd = [...walkMarkdown(ROOT)];
  const summaryRelSet = new Set([...summaryPaths]);
  const thinWords = config.thinWords ?? 60;

  /** @type {any[]} */
  const records = [];

  for (const abs of allMd) {
    const rel = path.relative(ROOT, abs).replace(/\\/g, "/");
    if (shouldSkipFile(rel, config)) continue;

    const raw = fs.readFileSync(abs, "utf8");
    const wc = wordCount(raw);
    const { images, links } = extractMdLinksAndImages(raw);

    const brokenImages = [];
    for (const u of images) {
      const resolved = resolveLocal(rel, u);
      if (!resolved) continue;
      const absResolved = path.join(ROOT, resolved);
      if (!fs.existsSync(absResolved)) brokenImages.push(u);
    }

    const brokenLinks = [];
    for (const u of links) {
      const resolved = resolveLocal(rel, u);
      if (!resolved) continue;
      const absResolved = path.join(ROOT, resolved);
      if (!fs.existsSync(absResolved)) brokenLinks.push(u);
    }

    const inSummary = summaryRelSet.has(rel);
    const declaredSection = navContext.get(rel) ?? null;

    const flags = [];
    if (wc < thinWords) flags.push("thin_content");
    if (brokenImages.length) flags.push("broken_images");
    if (brokenLinks.length) flags.push("broken_local_links");
    if (!inSummary && !rel.startsWith(".cursor/")) flags.push("not_in_summary");

    const parentHints = matchHotspots(rel, config);
    if (
      declaredSection &&
      rel.startsWith("gis/") &&
      /Robotics|OBD2|Pen Testing/i.test(declaredSection)
    ) {
      parentHints.push({
        id: "path_vs_section",
        note: `File under gis/ but SUMMARY section is "${declaredSection}"`,
      });
    }

    records.push({
      path: rel,
      wordCount: wc,
      inSummary,
      declaredSection,
      flags,
      brokenImages,
      brokenLinks,
      parentHints,
    });
  }

  return { records, thinWords };
}

function writeReports(records, thinWords) {
  const flagged = records.filter(
    (r) => r.flags.length || r.parentHints.length || r.brokenImages.length,
  );

  fs.writeFileSync(
    OUT_JSON,
    JSON.stringify({ generated: new Date().toISOString(), records }, null, 2),
  );

  const mdLines = [
    "# Documentation audit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `- Total markdown files scanned: **${records.length}**`,
    `- Files with flags or parent hints: **${flagged.length}**`,
    `- Thin content threshold: **${thinWords}** words (body minus code fences)`,
    "",
    "## Summary counts",
    "",
  ];
  const counts = {};
  for (const r of records) {
    for (const f of r.flags) counts[f] = (counts[f] || 0) + 1;
  }
  for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    mdLines.push(`- **${k}**: ${v}`);
  }
  mdLines.push("", "## Flagged files (first 200)", "");
  for (const r of flagged.slice(0, 200)) {
    mdLines.push(`### \`${r.path}\``);
    mdLines.push(
      `- Words: ${r.wordCount} | SUMMARY: ${r.inSummary ? "yes" : "no"} | Section: ${r.declaredSection ?? "—"}`,
    );
    if (r.flags.length) mdLines.push(`- Flags: ${r.flags.join(", ")}`);
    if (r.brokenImages.length)
      mdLines.push(
        `- Broken images: ${r.brokenImages.slice(0, 5).join("; ")}${r.brokenImages.length > 5 ? " …" : ""}`,
      );
    if (r.brokenLinks.length)
      mdLines.push(
        `- Broken local links: ${r.brokenLinks.slice(0, 5).join("; ")}${r.brokenLinks.length > 5 ? " …" : ""}`,
      );
    if (r.parentHints.length)
      mdLines.push(
        `- Parent / structure: ${r.parentHints.map((h) => h.id).join(", ")}`,
      );
    mdLines.push("");
  }
  if (flagged.length > 200)
    mdLines.push(`_…and ${flagged.length - 200} more; see docs-audit-report.json_`, "");

  fs.writeFileSync(OUT_MD, mdLines.join("\n"));
  console.error("Wrote", path.relative(ROOT, OUT_JSON), "and", path.relative(ROOT, OUT_MD));
}

function main() {
  const config = loadConfig();
  const { failOn: cliFailOn } = parseArgs(process.argv);
  const failOn = cliFailOn.length ? cliFailOn : (config.ciFailOn ?? []);
  const { records, thinWords } = runAudit(config);
  writeReports(records, thinWords);

  if (failOn.length) {
    const violations = countFlagViolations(records, failOn);
    const total = Object.values(violations).reduce((a, b) => a + b, 0);
    if (total > 0) {
      console.error("Audit gate failed (--fail-on):", violations);
      process.exit(1);
    }
    console.error("Audit gate passed (--fail-on):", failOn.join(", "));
  }
}

main();
