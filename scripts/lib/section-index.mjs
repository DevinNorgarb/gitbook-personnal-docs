/**
 * Build section index pages from SUMMARY.md child links.
 */
import fs from "node:fs";
import path from "node:path";
import { wordCount } from "./audit-markdown.mjs";

export const STUB_OVERVIEW_RE =
  /This section contains documentation for \*\*[^*]+\*\*/;
export const INDEX_SECTION_RE =
  /^## (In this section|Pages|Topics|Contents)\s*$/m;

/** @param {string} body */
export function stripIndexSection(body) {
  const lines = body.split(/\r?\n/);
  /** @type {string[]} */
  const out = [];
  let i = 0;
  while (i < lines.length) {
    if (/^## (In this section|Pages|Topics|Contents)\s*$/.test(lines[i])) {
      i++;
      while (
        i < lines.length &&
        (lines[i].trim() === "" || lines[i].startsWith("- "))
      ) {
        i++;
      }
      continue;
    }
    out.push(lines[i]);
    i++;
  }
  return out.join("\n").trimEnd();
}

/** @param {string} body */
export function stripTrailingLinkBullets(body) {
  const lines = body.split(/\r?\n/);
  let end = lines.length;
  while (end > 0 && lines[end - 1].trim() === "") end--;
  let start = end;
  while (start > 0 && lines[start - 1].trim().startsWith("- [")) start--;
  if (start < end) {
    return [...lines.slice(0, start), ...lines.slice(end)].join("\n").trimEnd();
  }
  return body;
}

const SKIP_INDEX_FILES = new Set([
  "SUMMARY.md",
  "CONTRIBUTING.md",
  "index.md",
]);

/** @param {string} filePath */
function isProtectedIndexFile(filePath) {
  const normalized = filePath.replace(/\\/g, "/");
  if (SKIP_INDEX_FILES.has(path.basename(normalized))) return true;
  return normalized === "README.md";
}

/** @param {string} raw */
export function parseSummaryChildren(raw) {
  const lines = raw.split(/\r?\n/);
  /** @type {{ text: string, file: string, level: number }[]} */
  const stack = [];
  /** @type {Map<string, { text: string, children: { text: string, file: string }[] }>} */
  const nodes = new Map();

  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      stack.length = 0;
      continue;
    }

    const m = line.trim().match(/^-\s*\[([^\]]*)\]\(([^)]+)\)/);
    if (!m) continue;

    const level = Math.floor((line.match(/^(\s*)/)?.[1]?.length ?? 0) / 2);
    const item = { text: m[1].trim(), file: m[2].trim().replace(/\\/g, "/"), level };

    if (!nodes.has(item.file)) {
      nodes.set(item.file, { text: item.text, children: [] });
    } else {
      nodes.get(item.file).text = item.text;
    }

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length > 0) {
      const parent = stack[stack.length - 1].file;
      if (!nodes.has(parent)) {
        nodes.set(parent, { text: stack[stack.length - 1].text, children: [] });
      }
      nodes.get(parent).children.push({ text: item.text, file: item.file });
    }

    stack.push(item);
  }

  return nodes;
}

/** @param {string} fromFile @param {string} toFile */
export function relativeMdLink(fromFile, toFile) {
  const fromDir = path.dirname(fromFile.replace(/\\/g, "/"));
  let rel = path.relative(fromDir, toFile.replace(/\\/g, "/")).replace(/\\/g, "/");
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel;
}

/** @param {string} content */
export function splitFrontmatter(content) {
  if (content.startsWith("---\n") || content.startsWith("---\r\n")) {
    const end = content.indexOf("\n---", 4);
    if (end !== -1) {
      const block = content.slice(4, end);
      /** @type {Record<string, string>} */
      const data = {};
      for (const line of block.split(/\r?\n/)) {
        const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
        if (!m) continue;
        let value = m[2].trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          try {
            value = JSON.parse(value);
          } catch {
            value = value.slice(1, -1);
          }
        }
        data[m[1]] = value;
      }
      return { data, body: content.slice(end + 4).replace(/^\s*/, "") };
    }
  }
  return { data: {}, body: content };
}

/** @param {string} value */
export function yamlScalar(value) {
  if (
    /[:[\]{}#&*!|>'"%@`]/.test(value) ||
    value.includes("\n") ||
    value.startsWith(" ") ||
    value.endsWith(" ")
  ) {
    return JSON.stringify(value);
  }
  return value;
}

/** @param {Record<string, string>} data */
export function formatFrontmatter(data) {
  const keys = Object.keys(data);
  if (!keys.length) return "";
  const lines = keys.map((k) => `${k}: ${yamlScalar(data[k])}`);
  return `---\n${lines.join("\n")}\n---\n\n`;
}

/** @param {string} content */
export function extractTitle(content) {
  const { body } = splitFrontmatter(content);
  const m = body.match(/^#\s+(.+)$/m);
  return m?.[1]?.trim() ?? null;
}

/** @param {string} line */
function isLowQualityBlurbLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return true;
  if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) return true;
  if (trimmed.startsWith(">")) return true;
  if (/^https?:\/\//.test(trimmed) || /^<https?:\/\//.test(trimmed)) return true;
  if (/^\[[^\]]+]\(https?:\/\//.test(trimmed)) return true;
  if (/<\/?[a-z][^>]*>/i.test(trimmed)) return true;
  if (/<[^>]*$/.test(trimmed)) return true;
  if (/<br\s*\/?>/i.test(trimmed)) return true;
  return false;
}

/** @param {string} content */
export function extractBlurb(content) {
  const { data, body } = splitFrontmatter(content);
  if (data.description && !STUB_OVERVIEW_RE.test(data.description)) {
    return data.description;
  }

  /** @type {string[]} */
  const paragraph = [];
  let inFence = false;

  for (const line of body.split(/\r?\n/)) {
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence || line.startsWith("#")) continue;
    const trimmed = line.trim();
    if (!trimmed) {
      if (paragraph.length) break;
      continue;
    }
    if (isLowQualityBlurbLine(trimmed)) continue;
    paragraph.push(trimmed);
    if (paragraph.join(" ").length > 140) break;
  }

  const text = paragraph.join(" ").replace(/\s+/g, " ").trim();
  if (!text || STUB_OVERVIEW_RE.test(text)) return null;
  return sanitizeBlurb(text.slice(0, 140));
}

/** @param {string | null | undefined} text */
export function sanitizeBlurb(text) {
  if (!text) return null;
  const trimmed = text.trim();
  if (!trimmed || STUB_OVERVIEW_RE.test(trimmed)) return null;
  if (/^>\-?$/.test(trimmed)) return null;
  if (/<[^>]*$/.test(trimmed)) return null;
  const stripped = trimmed.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (!stripped || stripped.length < 8) return null;
  return stripped.slice(0, 140);
}

/** @param {string} content @param {{ text: string, file: string }[]} children @param {string} fromFile */
export function hasChildLinks(content, children, fromFile) {
  if (INDEX_SECTION_RE.test(content)) return true;
  return children.some((child) => {
    const href = relativeMdLink(fromFile, child.file);
    return content.includes(`](${href})`);
  });
}

/**
 * @param {object} opts
 * @param {string} opts.filePath
 * @param {string} opts.content
 * @param {{ text: string, file: string }[]} opts.children
 * @param {(file: string) => string | null} [opts.readChild]
 */
export function planSectionIndexUpdate({ filePath, content, children, readChild }) {
  if (isProtectedIndexFile(filePath)) {
    return { action: "skip", reason: "protected-file" };
  }
  if (!children.length) {
    return { action: "skip", reason: "no-children" };
  }

  const wc = wordCount(content);
  const isStub = STUB_OVERVIEW_RE.test(content);
  const linked = hasChildLinks(content, children, filePath);

  if (isStub) {
    return { action: "replace", reason: "stub-overview" };
  }

  if (!linked) {
    return {
      action: "append",
      reason: wc < 60 ? "thin-content" : "missing-child-links",
    };
  }

  return { action: "skip", reason: "unchanged" };
}

/**
 * @param {object} opts
 * @param {{ text: string, file: string, blurb?: string | null }[]} opts.children
 * @param {string} opts.fromFile
 */
export function buildLinksSection({ children, fromFile }) {
  const lines = ["## In this section", ""];
  for (const child of children) {
    const href = relativeMdLink(fromFile, child.file);
    const blurb = sanitizeBlurb(child.blurb);
    lines.push(
      blurb
        ? `- [${child.text}](${href}) — ${blurb}`
        : `- [${child.text}](${href})`,
    );
  }
  lines.push("");
  return lines.join("\n").trimEnd();
}

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {string | null} [opts.intro]
 * @param {{ text: string, file: string, blurb?: string | null }[]} opts.children
 * @param {string} opts.fromFile
 */
export function buildIndexSection({ title, intro, children, fromFile }) {
  const lead = intro?.trim() || `Notes and links for **${title}**.`;
  return `${lead}\n\n${buildLinksSection({ children, fromFile })}`.trimEnd();
}

/**
 * @param {object} opts
 * @param {string} opts.filePath
 * @param {string} opts.content
 * @param {{ text: string, file: string }[]} opts.children
 * @param {"replace" | "append"} opts.action
 * @param {(file: string) => string | null} [opts.readChild]
 */
export function applySectionIndexUpdate({
  filePath,
  content,
  children,
  action,
  readChild = () => null,
}) {
  const { data, body } = splitFrontmatter(content);
  const title = extractTitle(content) ?? data.title ?? path.basename(path.dirname(filePath));
  if (!data.title) data.title = title;

  const childEntries = children.map((child) => ({
    ...child,
    blurb: (() => {
      const childContent = readChild(child.file);
      return childContent ? extractBlurb(childContent) : null;
    })(),
  }));

  const linksSection = buildLinksSection({
    children: childEntries,
    fromFile: filePath,
  });

  let nextBody;
  if (action === "replace") {
    nextBody = `# ${title}\n\n${buildIndexSection({
      title,
      intro: `Notes and links for **${title}**.`,
      children: childEntries,
      fromFile: filePath,
    })}\n`;
  } else {
    let withoutIndex = stripIndexSection(body);
    withoutIndex = stripTrailingLinkBullets(withoutIndex);
    const withoutStub = withoutIndex.replace(
      /## Overview\s*\n+This section contains documentation for[^\n]+\n*/g,
      "",
    );
    const h1 = withoutStub.match(/^#\s+[^\n]+/)?.[0] ?? `# ${title}`;
    const remainder = withoutStub.replace(/^#\s+[^\n]+\n?/, "").trim();
    nextBody = `${h1}\n\n${remainder ? `${remainder}\n\n` : ""}${linksSection}\n`;
  }

  if (!data.description || STUB_OVERVIEW_RE.test(data.description)) {
    const blurbs = childEntries
      .map((c) => c.blurb)
      .filter((b) => b && !STUB_OVERVIEW_RE.test(b));
    data.description =
      blurbs.slice(0, 2).join("; ") ||
      `${title} — ${children.map((c) => c.text).slice(0, 3).join(", ")}`;
  }

  return formatFrontmatter(data) + nextBody;
}

/** @param {string} root @param {string} summaryRaw */
export function syncSectionIndexes(root, summaryRaw, { dryRun = false, force = false } = {}) {
  const nodes = parseSummaryChildren(summaryRaw);
  /** @type {{ file: string, action: string, reason: string }[]} */
  const changes = [];

  for (const [filePath, node] of nodes) {
    if (!node.children.length) continue;
    if (!filePath.endsWith(".md")) continue;

    const abs = path.join(root, filePath);
    if (!fs.existsSync(abs)) continue;

    const content = fs.readFileSync(abs, "utf8");
    let plan = planSectionIndexUpdate({
      filePath,
      content,
      children: node.children,
      readChild: (childFile) => {
        const childAbs = path.join(root, childFile);
        return fs.existsSync(childAbs) ? fs.readFileSync(childAbs, "utf8") : null;
      },
    });

    if (force && plan.action === "skip" && hasChildLinks(content, node.children, filePath)) {
      plan = { action: "append", reason: "force-refresh" };
    }

    if (plan.action === "skip") continue;

    const next = applySectionIndexUpdate({
      filePath,
      content,
      children: node.children,
      action: plan.action,
      readChild: (childFile) => {
        const childAbs = path.join(root, childFile);
        return fs.existsSync(childAbs) ? fs.readFileSync(childAbs, "utf8") : null;
      },
    });

    if (next === content) continue;

    changes.push({ file: filePath, action: plan.action, reason: plan.reason });
    if (!dryRun) fs.writeFileSync(abs, next, "utf8");
  }

  return changes;
}
