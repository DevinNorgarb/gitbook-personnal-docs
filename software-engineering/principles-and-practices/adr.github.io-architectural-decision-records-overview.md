---
title: "Architectural Decision Records (ADR) — adr.github.io overview"
description: "Notes on Architectural Decision Records (ADR) — adr.github.io overview."
---

# Architectural Decision Records (ADR) — adr.github.io overview

## Source

- Type: webpage
- Origin: https://adr.github.io/
- Imported: 2026-05-24
- Images: The page body is textual (definitions, lists, external links only). No inline diagrams or screenshots appeared in HTML and there was no `og:image`; nothing substantive to embed beyond optional site chrome, so none were bundled into `assets/`.

## Content

### Motivation and definitions

An [Architectural Decision (AD)](https://en.wikipedia.org/wiki/Architectural_decision) is a justified design choice that addresses a functional or non-functional requirement that is architecturally significant. An [Architecturally Significant Requirement (ASR)](https://en.wikipedia.org/wiki/Architecturally_significant_requirements) is a requirement that has a measurable effect on the architecture and quality of a software and/or hardware system. An Architectural Decision Record (ADR) captures a single AD and its rationale. In short, an ADR surfaces the reasons for a chosen architectural decision, along with trade-offs and consequences.

The collection of ADRs maintained in a project is its decision log. This sits within Architectural Knowledge Management (AKM), though ADR practice can extend to design and other decisions (“any decision record”).

The aim of the [GitHub `adr` organization](https://github.com/adr) is to:

1. Motivate the need for capturing decisions and establish a shared vocabulary.
2. Strengthen ADR tooling in support of agile and iterative/incremental engineering.
3. Point to public knowledge related to AKM and ADRs.

### ADRs in the media

- *(German)* Slides *[Architekturentscheidungen sichtbar und nachvollziehbar gestalten](https://adr.github.io/assets/2026-03-10%20-%20ADR%2C%20MADR%2C%20eADR%20-%20JavaLand%202026.pdf)* at [JavaLand 2026](https://www.javaland.eu/), 2026-03-10.
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record) features ADRs and links this site (2024-11-10).
- [Love Unrequited: The Story of Architecture, Agile, and How Architecture Decision Records Brought Them Together](https://ieeexplore.ieee.org/document/9801811), Michael Keeling, *IEEE Software* Vol. 39 Issue 4 (2022) ([PDF stamp](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9801811)).
- [Design Practice Reference](https://leanpub.com/dpr) (LeanPub) positions capturing architectural decisions as essential.
- Chapter 3 of [“Patterns for API Design…”](https://api-patterns.org/book/) discusses recurring API design decisions with options and criteria ([related blog post](https://medium.com/nerd-for-tech/api-patterns-website-redesigned-and-sample-book-chapter-available-df9daf4b5e15)).
- *(German)* [Gut dokumentiert: Architecture Decision Records](https://www.heise.de/hintergrund/Gut-dokumentiert-Architecture-Decision-Records-4664988.html) by [@obfischer](https://github.com/obfischer), heise online.

### Background information

Organization work aligns with *[Sustainable Architectural Decisions](https://www.infoq.com/articles/sustainable-architectural-design-decisions)* (Zdun et al.), including the Y-statement format from that piece.

Further pointers mentioned on the site:

- *[Architectural Decision Guidance Across Projects …](https://www.ost.ch/fileadmin/dateiliste/3_forschung_dienstleistung/institute/ifs/cloud-application-lab/admentor-wicsa2015ubmissionv11nc.pdf)* (WICSA 2015) — comparison of seven templates.
- [Architectural Decisions — The Making Of](https://www.ozimmer.ch/practices/2020/04/27/ArchitectureDecisionMaking.html) — history since the late 1990s, examples, rationale guidance.
- [Documenting Architecture Decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions.html) — Michael Nygard (2011), cited as popularizing the idea.
- [Architectural Decision Records (ADR)](https://openpracticelibrary.com/practice/architectural-decision-records-adr/) in the Open Practice Library.
- AWS: [Architectural decision records](https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/welcome.html).
- Video: [Architecture Decision Records in Action](https://www.youtube.com/watch?v=41NVge3_cYo) (Michael Keeling, Joe Runde).
- Series: [ADRs and Architecture Stories](https://www.developertoarchitect.com/lessons/lesson168.html) (Mark Richards).
- [Architectural Knowledge Management (AKM)](https://www.ost.ch/en/research-and-consulting-services/computer-science/ifs-institute-for-software-new/cloud-application-lab/architectural-knowledge-management-akm) landing page.

### Related sections on the same site

- [ADR practices](https://adr.github.io/ad-practices/)
- [ADR templates](https://adr.github.io/adr-templates/)
- [Decision capturing tools](https://adr.github.io/adr-tooling/)

## Key takeaways

- **ADR**: one structured record per significant decision, with rationale and consequences; collectively they form the project decision log under the broader umbrella of Architectural Knowledge Management.
- **`adr` on GitHub** exists to evangelize terminology, tooling, and links to authoritative reading (Nygard, Zdun et al., industry guides, practitioner media).
- The homepage is primarily a curated index — deep structure lives in sub-pages (practices, templates, tooling).
