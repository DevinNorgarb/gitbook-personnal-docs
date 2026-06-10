import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import {
  countFlagViolations,
  extractMdLinksAndImages,
  resolveLocal,
  wordCount,
} from "./lib/audit-markdown.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixture = fs.readFileSync(
  path.join(__dirname, "fixtures/audit-sample.md"),
  "utf8",
);

test("wordCount ignores frontmatter and code fences", () => {
  assert.ok(wordCount(fixture) >= 3);
  assert.ok(wordCount("```\nfoo bar baz qux\n```") < 4);
});

test("extractMdLinksAndImages finds images and links outside fences", () => {
  const { images, links } = extractMdLinksAndImages(fixture);
  assert.deepEqual(images, ["./missing.png", "https://example.com/x.png"]);
  assert.deepEqual(links, ["./also-missing.md", "#section"]);
});

test("resolveLocal resolves relative paths and skips external URLs", () => {
  const from = "scripts/fixtures/audit-sample.md";
  assert.equal(resolveLocal(from, "./missing.png"), "scripts/fixtures/missing.png");
  assert.equal(resolveLocal(from, "https://x.test/a"), null);
  assert.equal(resolveLocal(from, "#section"), null);
});

test("countFlagViolations aggregates --fail-on targets", () => {
  const records = [
    { flags: ["broken_images", "thin_content"] },
    { flags: ["broken_images"] },
    { flags: [] },
  ];
  assert.deepEqual(countFlagViolations(records, ["broken_images"]), {
    broken_images: 2,
  });
  assert.deepEqual(countFlagViolations(records, ["not_in_summary"]), {
    not_in_summary: 0,
  });
});
