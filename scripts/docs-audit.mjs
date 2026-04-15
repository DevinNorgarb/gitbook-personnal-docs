#!/usr/bin/env node
/**
 * Documentation audit: thin pages, broken local images/links, SUMMARY orphans, nav hints.
 * Run from repo root: node scripts/docs-audit.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
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
const THIN_WORDS = 60;

function* walkMarkdown(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* walkMarkdown(full);
    else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) yield full;
  }
}

function stripFrontmatter(s) {
  if (s.startsWith("---\n") || s.startsWith("---\r\n")) {
    const end = s.indexOf("\n---", 4);
    if (end !== -1) return s.slice(end + 4).trimStart();
  }
  return s;
}

function stripCodeFences(s) {
  return s.replace(/```[\s\S]*?```/g, " ");
}

function wordCount(s) {
  const t = stripCodeFences(stripFrontmatter(s))
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`\[\]()]/g, " ");
  return t.split(/\s+/).filter(Boolean).length;
}

function parseSummaryPaths() {
  const summaryPath = path.join(ROOT, "SUMMARY.md");
  const raw = fs.readFileSync(summaryPath, "utf8");
  const paths = new Set();
  const re = /\]\(([^)]+\.md)\)/gi;
  let m;
  while ((m = re.exec(raw)) !== null) {
    paths.add(m[1].replace(/\\/g, "/").trim());
  }
  return paths;
}

/** Map rel path -> nearest ## section title in SUMMARY */
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
      const p = match[1].replace(/\\/g, "/").trim();
      fileToSection.set(p, section);
    }
  }
  return fileToSection;
}

function extractMdLinksAndImages(content) {
  const images = [];
  const links = [];
  // ![alt](url) or ![](<url with spaces>)
  const imgRe = /!\[[^\]]*]\(\s*<?([^>)]+)>?\s*\)/g;
  let m;
  while ((m = imgRe.exec(content)) !== null) images.push(m[1].trim());

  const linkRe = /(?<!!)\[[^\]]*]\(\s*<?([^>)]+)>?\s*\)/g;
  while ((m = linkRe.exec(content)) !== null) links.push(m[1].trim());

  const hrefRe = /<img[^>]+src=["']([^"']+)["']/gi;
  while ((m = hrefRe.exec(content)) !== null) images.push(m[1].trim());

  return { images, links };
}

function resolveLocal(fromFile, url) {
  if (!url || /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//"))
    return null;
  if (url.startsWith("#")) return null;
  const clean = url.split("#")[0].split("?")[0];
  if (!clean) return null;
  const base = path.dirname(fromFile);
  return path.normalize(path.join(base, clean));
}

const HOTSPOTS = [
  {
    id: "k3s-tutorial-mix",
    test: (rel) =>
      rel.includes(
        "misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/",
      ),
    note: "Known mixed-topic folder per DOCUMENTATION-REFACTORING-REPORT",
  },
  {
    id: "ip-cameras-path",
    test: (rel) => rel.includes("ip-cameras/awesome-web-archiving"),
    note: "IP camera content under awesome-web-archiving path",
  },
  {
    id: "android-dev-top-level",
    test: (rel) => rel.startsWith("android-dev/"),
    note: "android-dev/ at repo root while SUMMARY nests under Software Engineering",
  },
];

function main() {
  const summaryPaths = parseSummaryPaths();
  const navContext = parseSummaryNavContext();
  const allMd = [...walkMarkdown(ROOT)];
  const summaryRelSet = new Set([...summaryPaths]);

  /** @type {any[]} */
  const records = [];

  for (const abs of allMd) {
    const rel = path.relative(ROOT, abs).replace(/\\/g, "/");
    if (rel.startsWith(".github/")) continue;
    if (rel === "SUMMARY.md" || rel === "CONTRIBUTING.md") continue;
    if (rel === "DOCUMENTATION-REFACTORING-REPORT.md") continue;
    if (rel === "docs-audit-report.md") continue;
    if (rel === "index.md") continue;

    const raw = fs.readFileSync(abs, "utf8");
    const wc = wordCount(raw);
    const { images, links } = extractMdLinksAndImages(raw);

    const brokenImages = [];
    for (const u of images) {
      const resolved = resolveLocal(abs, u);
      if (!resolved) continue;
      if (!fs.existsSync(resolved)) brokenImages.push(u);
    }

    const brokenLinks = [];
    for (const u of links) {
      const resolved = resolveLocal(abs, u);
      if (!resolved) continue;
      if (!fs.existsSync(resolved)) brokenLinks.push(u);
    }

    const inSummary = summaryRelSet.has(rel);
    const declaredSection = navContext.get(rel) ?? null;

    const flags = [];
    if (wc < THIN_WORDS) flags.push("thin_content");
    if (brokenImages.length) flags.push("broken_images");
    if (brokenLinks.length) flags.push("broken_local_links");
    if (!inSummary && !rel.startsWith(".cursor/")) flags.push("not_in_summary");

    const parentHints = [];
    for (const h of HOTSPOTS) {
      if (h.test(rel)) parentHints.push({ id: h.id, note: h.note });
    }

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

  const flagged = records.filter(
    (r) => r.flags.length || r.parentHints.length || r.brokenImages.length,
  );

  fs.writeFileSync(OUT_JSON, JSON.stringify({ generated: new Date().toISOString(), records }, null, 2));
  const mdLines = [
    "# Documentation audit",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `- Total markdown files scanned: **${records.length}**`,
    `- Files with flags or parent hints: **${flagged.length}**`,
    `- Thin content threshold: **${THIN_WORDS}** words (body minus code fences)`,
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
      mdLines.push(`- Broken images: ${r.brokenImages.slice(0, 5).join("; ")}${r.brokenImages.length > 5 ? " …" : ""}`);
    if (r.brokenLinks.length)
      mdLines.push(`- Broken local links: ${r.brokenLinks.slice(0, 5).join("; ")}${r.brokenLinks.length > 5 ? " …" : ""}`);
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

main();
