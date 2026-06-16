/**
 * Cross-tree topic links from scripts/topic-clusters.json.
 */
import fs from "node:fs";
import path from "node:path";
import {
  formatFrontmatter,
  relativeMdLink,
  splitFrontmatter,
} from "./section-index.mjs";

export const RELATED_SECTIONS_HEADING = "## Related sections";
export const SEE_ALSO_HEADING = "## See also";
export const RELATED_TOPICS_HEADING = "## Related topics";

const STRIP_HEADINGS = [
  RELATED_SECTIONS_HEADING,
  SEE_ALSO_HEADING,
  "## Related",
  RELATED_TOPICS_HEADING,
];

/** @param {string} body @param {string} heading */
export function stripTopicBlock(body, heading) {
  const lines = body.split(/\r?\n/);
  /** @type {string[]} */
  const out = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i] === heading) {
      i++;
      while (
        i < lines.length &&
        (lines[i].trim() === "" || lines[i].trim().startsWith("- "))
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
export function stripAllTopicBlocks(body) {
  let next = body;
  for (const heading of STRIP_HEADINGS) {
    next = stripTopicBlock(next, heading);
  }
  return next;
}

/** @param {unknown} raw */
export function loadTopicClusters(raw) {
  const data = JSON.parse(raw);
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new Error("topic-clusters.json must be an object");
  }
  return data;
}

/**
 * @param {string | { file: string, label?: string }} entry
 * @param {Map<string, string>} labelByFile
 */
export function normalizeLinkEntry(entry, labelByFile) {
  if (typeof entry === "string") {
    const file = entry.replace(/\\/g, "/");
    return { file, label: labelByFile.get(file) ?? null };
  }
  const file = entry.file.replace(/\\/g, "/");
  return { file, label: entry.label ?? labelByFile.get(file) ?? null };
}

/**
 * @param {object} cluster
 * @returns {Map<string, string>}
 */
export function buildLabelMap(cluster) {
  /** @type {Map<string, string>} */
  const map = new Map();
  for (const hub of cluster.hubs ?? []) {
    map.set(hub.file.replace(/\\/g, "/"), hub.label);
  }
  for (const item of cluster.related ?? []) {
    map.set(item.file.replace(/\\/g, "/"), item.label);
  }
  return map;
}

/**
 * @param {object} opts
 * @param {string} opts.heading
 * @param {{ file: string, label: string | null }[]} opts.links
 * @param {string} opts.fromFile
 */
export function buildTopicLinkSection({ heading, links, fromFile }) {
  const lines = [heading, ""];
  for (const link of links) {
    const href = relativeMdLink(fromFile, link.file);
    const text = link.label ?? path.basename(link.file, ".md");
    lines.push(`- [${text}](${href})`);
  }
  lines.push("");
  return lines.join("\n").trimEnd();
}

/**
 * @param {object} opts
 * @param {string} opts.hubFile
 * @param {object} cluster
 */
export function hubRelatedLinks({ hubFile, cluster }) {
  const normalizedHub = hubFile.replace(/\\/g, "/");
  /** @type {{ file: string, label: string | null }[]} */
  const links = [];

  for (const hub of cluster.hubs ?? []) {
    const file = hub.file.replace(/\\/g, "/");
    if (file === normalizedHub) continue;
    links.push({ file, label: hub.label });
  }

  for (const item of cluster.related ?? []) {
    links.push({
      file: item.file.replace(/\\/g, "/"),
      label: item.label ?? null,
    });
  }

  return links;
}

/**
 * @param {object} opts
 * @param {string} opts.filePath
 * @param {object} cluster
 */
export function clusterTopicLinksForPage({ filePath, cluster }) {
  const labelMap = buildLabelMap(cluster);
  /** @type {{ file: string, label: string | null }[]} */
  const links = [];

  for (const hub of cluster.hubs ?? []) {
    const file = hub.file.replace(/\\/g, "/");
    if (file === filePath.replace(/\\/g, "/")) continue;
    links.push({ file, label: hub.label });
  }

  for (const item of cluster.related ?? []) {
    links.push({
      file: item.file.replace(/\\/g, "/"),
      label: item.label ?? null,
    });
  }

  return links;
}

/** @param {Record<string, string>} data */
export function parseTopicsFrontmatter(data) {
  const raw = data.topics;
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map(String);
  const trimmed = String(raw).trim();
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return parsed.map(String);
    } catch {
      return [];
    }
  }
  return [String(raw)];
}

/** @param {Record<string, string>} data */
export function isManualTopicLinks(data) {
  const v = data.topicLinks ?? data.topiclinks;
  return String(v).toLowerCase() === "manual";
}

/**
 * @param {object} opts
 * @param {string} opts.filePath
 * @param {string} opts.content
 * @param {object} cluster
 * @param {string} opts.hubFile
 */
export function applyHubTopicLinks({ filePath, content, cluster, hubFile }) {
  const { data, body } = splitFrontmatter(content);
  if (isManualTopicLinks(data)) {
    return content;
  }

  const links = hubRelatedLinks({ hubFile, cluster });
  if (!links.length) return content;

  let stripped = stripTopicBlock(body, RELATED_SECTIONS_HEADING);
  const section = buildTopicLinkSection({
    heading: RELATED_SECTIONS_HEADING,
    links,
    fromFile: filePath,
  });

  const nextBody = `${stripped.trimEnd()}\n\n${section}\n`;
  return formatFrontmatter(data) + nextBody;
}

/**
 * @param {object} opts
 * @param {string} opts.filePath
 * @param {string} opts.content
 * @param {{ file: string, label: string | null }[]} opts.seeAlso
 */
export function applySeeAlsoLinks({ filePath, content, seeAlso }) {
  const { data, body } = splitFrontmatter(content);
  if (isManualTopicLinks(data)) {
    return content;
  }
  if (!seeAlso.length) return content;

  let stripped = stripAllTopicBlocks(body);
  // Restore non-see-also blocks by re-splitting - stripAllTopicBlocks removed Related sections too.
  // For page overrides we only manage See also / Related, not Related sections.
  stripped = stripTopicBlock(stripped, RELATED_SECTIONS_HEADING);
  stripped = stripTopicBlock(stripped, RELATED_TOPICS_HEADING);

  const section = buildTopicLinkSection({
    heading: SEE_ALSO_HEADING,
    links: seeAlso,
    fromFile: filePath,
  });

  const nextBody = `${stripped.trimEnd()}\n\n${section}\n`;
  return formatFrontmatter(data) + nextBody;
}

/**
 * @param {object} opts
 * @param {string} opts.filePath
 * @param {string} opts.content
 * @param {{ file: string, label: string | null }[]} opts.links
 */
export function applyRelatedTopicsLinks({ filePath, content, links }) {
  const { data, body } = splitFrontmatter(content);
  if (isManualTopicLinks(data)) {
    return content;
  }
  if (!links.length) return content;

  let stripped = stripTopicBlock(body, RELATED_TOPICS_HEADING);
  const section = buildTopicLinkSection({
    heading: RELATED_TOPICS_HEADING,
    links,
    fromFile: filePath,
  });

  const nextBody = `${stripped.trimEnd()}\n\n${section}\n`;
  return formatFrontmatter(data) + nextBody;
}

/**
 * @param {string} root
 * @param {Record<string, object>} clusters
 * @param {{ dryRun?: boolean }} [options]
 */
export function syncTopicLinks(root, clusters, { dryRun = false } = {}) {
  /** @type {{ file: string, action: string, reason: string }[]} */
  const changes = [];

  for (const [clusterId, cluster] of Object.entries(clusters)) {
    const labelMap = buildLabelMap(cluster);

    for (const hub of cluster.hubs ?? []) {
      const filePath = hub.file.replace(/\\/g, "/");
      const abs = path.join(root, filePath);
      if (!fs.existsSync(abs)) continue;

      const content = fs.readFileSync(abs, "utf8");
      const next = applyHubTopicLinks({
        filePath,
        content,
        cluster,
        hubFile: filePath,
      });

      if (next !== content) {
        changes.push({ file: filePath, action: "update", reason: `hub:${clusterId}` });
        if (!dryRun) fs.writeFileSync(abs, next, "utf8");
      }
    }

    for (const [pageFile, override] of Object.entries(cluster.pageOverrides ?? {})) {
      const filePath = pageFile.replace(/\\/g, "/");
      const abs = path.join(root, filePath);
      if (!fs.existsSync(abs)) continue;

      const seeAlso = (override.seeAlso ?? [])
        .map((entry) => normalizeLinkEntry(entry, labelMap))
        .filter((link) => fs.existsSync(path.join(root, link.file)));

      const content = fs.readFileSync(abs, "utf8");
      const next = applySeeAlsoLinks({ filePath, content, seeAlso });

      if (next !== content) {
        changes.push({ file: filePath, action: "update", reason: `seeAlso:${clusterId}` });
        if (!dryRun) fs.writeFileSync(abs, next, "utf8");
      }
    }
  }

  /** @type {Map<string, { file: string, label: string | null }[]>} */
  const topicsByFile = new Map();

  const mdFiles = walkMarkdownFiles(root);
  for (const rel of mdFiles) {
    const abs = path.join(root, rel);
    const content = fs.readFileSync(abs, "utf8");
    const { data } = splitFrontmatter(content);
    const topicIds = parseTopicsFrontmatter(data);
    if (!topicIds.length || isManualTopicLinks(data)) continue;

    /** @type {{ file: string, label: string | null }[]} */
    const links = [];
    for (const topicId of topicIds) {
      const cluster = clusters[topicId];
      if (!cluster) continue;
      links.push(...clusterTopicLinksForPage({ filePath: rel, cluster }));
    }

    if (links.length) {
      topicsByFile.set(rel, links);
    }
  }

  for (const [filePath, links] of topicsByFile) {
    const abs = path.join(root, filePath);
    const content = fs.readFileSync(abs, "utf8");
    const next = applyRelatedTopicsLinks({ filePath, content, links });

    if (next !== content) {
      changes.push({ file: filePath, action: "update", reason: "topics-frontmatter" });
      if (!dryRun) fs.writeFileSync(abs, next, "utf8");
    }
  }

  return changes;
}

/** @param {string} dir @param {string} [prefix] */
function walkMarkdownFiles(dir, prefix = "") {
  /** @type {string[]} */
  const out = [];
  if (!fs.existsSync(dir)) return out;

  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".") && name !== ".vitepress") continue;
    const rel = prefix ? `${prefix}/${name}` : name;
    const abs = path.join(dir, name);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      if (rel === "node_modules" || rel === "book" || rel === "scripts/fixtures") {
        continue;
      }
      out.push(...walkMarkdownFiles(abs, rel));
      continue;
    }
    if (name.endsWith(".md")) {
      out.push(rel.replace(/\\/g, "/"));
    }
  }
  return out;
}
