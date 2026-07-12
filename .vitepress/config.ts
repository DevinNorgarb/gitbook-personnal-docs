import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import sidebar from "./sidebar.generated.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const navHidden = JSON.parse(
  fs.readFileSync(path.join(root, "nav.hidden.json"), "utf8"),
);

const UMAMI_HOST = "https://umami.f1y.ing";
const UMAMI_WEBSITE_ID = "10532e65-850b-4b41-8e8f-2b8a5e583612";

export default withMermaid(
  defineConfig({
    title: "Devin Norgarb",
    titleTemplate: ":title · Notes",
    description:
      "Public knowledge base — software engineering, embedded systems, robotics, GIS, and project notes.",
    // Custom domain serves docs at the root.
    base: "/",
    head: [
      [
        "script",
        {
          defer: true,
          src: `${UMAMI_HOST}/script.js`,
          "data-website-id": UMAMI_WEBSITE_ID,
        },
      ],
      [
        "script",
        {
          defer: true,
          src: `${UMAMI_HOST}/recorder.js`,
          "data-website-id": UMAMI_WEBSITE_ID,
          "data-sample-rate": "1",
          "data-mask-level": "moderate",
          "data-max-duration": "300000",
        },
      ],
    ],
    vite: {
      // Legacy GitBook import store — see .github/ASSET-CONVENTION.md (prefer topic-local assets/)
      assetsInclude: [
        /\.gitbook\/assets\//,
        "**/*.PNG",
        "**/*.JPG",
        "**/*.JPEG",
        "**/*.GIF",
        "**/*.WEBP",
      ],
    },
    srcExclude: [
      "README.md",
      "SUMMARY.md",
      "DOCUMENTATION-REFACTORING-REPORT.md",
      "ARCHITECTURE-REVIEW.md",
      "docs-audit-report.md",
      "CONTRIBUTING.md",
      ".cursor/**",
      ".github/**",
      "scripts/fixtures/**",
      "book/**",
      "node_modules/**",
      "package-lock.json",
      "pnpm-lock.yaml",
      "yarn.lock",
      ...navHidden,
    ],
    ignoreDeadLinks: true,
    cleanUrls: false,
    themeConfig: {
      search: {
        provider: "local",
      },
      nav: [
        { text: "Home", link: "/" },
        {
          text: "Snippets",
          link: "/snippets-and-scripts/install-scripts/README",
        },
        {
          text: "Software",
          link: "/software-engineering/webassembly/README",
        },
        { text: "Robotics", link: "/robotics/communication-protocols/README" },
      ],
      sidebar,
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/DevinNorgarb/gitbook-personnal-docs",
        },
      ],
      footer: {
        message: "Curated technical notes — open source on GitHub",
        copyright: "Devin Norgarb",
      },
    },
  }),
);
