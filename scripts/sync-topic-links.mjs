#!/usr/bin/env node
/**
 * Inject cross-tree topic links from scripts/topic-clusters.json.
 * Run from repo root: npm run docs:gen-topic-links
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadTopicClusters, syncTopicLinks } from "./lib/topic-links.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CLUSTERS = path.join(ROOT, "scripts", "topic-clusters.json");

function main() {
  const dryRun = process.argv.includes("--dry-run");
  const raw = fs.readFileSync(CLUSTERS, "utf8");
  const clusters = loadTopicClusters(raw);
  const changes = syncTopicLinks(ROOT, clusters, { dryRun });

  console.error(
    `${dryRun ? "[dry-run] " : ""}Updated ${changes.length} files with topic links`,
  );
  for (const change of changes) {
    console.error(`  ${change.action}\t${change.file}\t(${change.reason})`);
  }
}

main();
