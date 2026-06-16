import assert from "node:assert/strict";
import { test } from "node:test";
import {
  applyHubTopicLinks,
  applySeeAlsoLinks,
  buildTopicLinkSection,
  hubRelatedLinks,
  loadTopicClusters,
  stripTopicBlock,
} from "./lib/topic-links.mjs";

const DRONES_CLUSTER = {
  title: "Drones",
  hubs: [
    { file: "pen-testing/drones/README.md", label: "Security & firmware hacking" },
    { file: "drones/README.md", label: "SDK, tooling & reference imports" },
  ],
  related: [
    {
      file: "microcontrollers-and-socs/esp32/esp-dronebridge.md",
      label: "ESP32 DroneBridge firmware",
    },
  ],
  pageOverrides: {
    "pen-testing/drones/dji-firmware-tools-github-repo.md": {
      seeAlso: [{ file: "drones/dji-firmware-tools.md", label: "Full upstream import" }],
    },
  },
};

test("loadTopicClusters parses registry object", () => {
  const clusters = loadTopicClusters(JSON.stringify({ drones: DRONES_CLUSTER }));
  assert.equal(clusters.drones.title, "Drones");
});

test("stripTopicBlock removes bounded list section", () => {
  const body = `# Title

## Related sections

- [A](./a.md)

## In this section

- [B](./b.md)
`;
  const next = stripTopicBlock(body, "## Related sections");
  assert.doesNotMatch(next, /Related sections/);
  assert.match(next, /In this section/);
});

test("hubRelatedLinks excludes current hub and includes siblings", () => {
  const links = hubRelatedLinks({
    hubFile: "pen-testing/drones/README.md",
    cluster: DRONES_CLUSTER,
  });
  assert.equal(links.length, 2);
  assert.equal(links[0].file, "drones/README.md");
  assert.equal(links[1].file, "microcontrollers-and-socs/esp32/esp-dronebridge.md");
});

test("applyHubTopicLinks injects Related sections without duplicating", () => {
  const content = `---
title: Drones
---

# Drones

## In this section

- [Video Guide](./video-guide.md)
`;
  const next = applyHubTopicLinks({
    filePath: "pen-testing/drones/README.md",
    content,
    cluster: DRONES_CLUSTER,
    hubFile: "pen-testing/drones/README.md",
  });

  assert.match(next, /## Related sections/);
  assert.match(next, /\[SDK, tooling & reference imports\]\(\.\.\/\.\.\/drones\/README\.md\)/);
  assert.match(next, /## In this section/);
  assert.match(next, /\[Video Guide\]/);
});

test("applySeeAlsoLinks replaces legacy Related heading", () => {
  const content = `# Page

## Related

- [old](./old.md)
`;
  const next = applySeeAlsoLinks({
    filePath: "pen-testing/drones/dji-firmware-tools-github-repo.md",
    content,
    seeAlso: [{ file: "drones/dji-firmware-tools.md", label: "Full upstream import" }],
  });

  assert.match(next, /## See also/);
  assert.doesNotMatch(next, /## Related\n/);
  assert.match(next, /\[Full upstream import\]\(\.\.\/\.\.\/drones\/dji-firmware-tools\.md\)/);
});

test("applyHubTopicLinks is idempotent", () => {
  const content = `---
title: Drones
---

# Drones

Notes here.
`;
  const once = applyHubTopicLinks({
    filePath: "pen-testing/drones/README.md",
    content,
    cluster: DRONES_CLUSTER,
    hubFile: "pen-testing/drones/README.md",
  });
  const twice = applyHubTopicLinks({
    filePath: "pen-testing/drones/README.md",
    content: once,
    cluster: DRONES_CLUSTER,
    hubFile: "pen-testing/drones/README.md",
  });
  assert.equal(once, twice);
});

test("buildTopicLinkSection uses relative paths", () => {
  const section = buildTopicLinkSection({
    heading: "## See also",
    links: [{ file: "drones/dji-firmware-tools.md", label: "Full import" }],
    fromFile: "pen-testing/drones/dji-firmware-tools-github-repo.md",
  });
  assert.match(section, /\[Full import\]\(\.\.\/\.\.\/drones\/dji-firmware-tools\.md\)/);
});
