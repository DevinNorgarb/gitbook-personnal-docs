#!/usr/bin/env node
/**
 * Run docs:prep and fail if generated artifacts drift from git.
 * Used in CI to ensure committed outputs match SUMMARY.md and topic-clusters.json.
 * Run from repo root: npm run docs:check-generated
 */
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function main() {
  execSync("npm run docs:prep", { cwd: ROOT, stdio: "inherit" });

  const status = execSync("git status --porcelain", { cwd: ROOT, encoding: "utf8" }).trim();
  if (!status) {
    console.error("Generated docs are in sync with source (SUMMARY.md, topic-clusters.json).");
    return;
  }

  console.error(
    "Generated docs drift: run `npm run docs:prep` and commit the changes, or update source only and let CI regenerate.\n\n" +
      "Changed files:\n" +
      status
        .split("\n")
        .map((line) => `  ${line}`)
        .join("\n"),
  );
  process.exit(1);
}

main();
