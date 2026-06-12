---
title: Testing
description: Frontend test infrastructure — Cypress dashboards and sorry-cypress.
---

# Testing

Notes on **frontend test orchestration** and self-hosted Cypress result dashboards.

## In this section

- [Frontend](./frontend/README.md) — sorry-cypress and Cypress reporting

## sorry-cypress (highlight)

**sorry-cypress** is an open-source drop-in replacement for the Cypress Dashboard — store screenshots, videos, and run history on your own infra.

## Source

- [sorry-cypress docs](https://docs.sorry-cypress.dev/)
- [sorry-cypress/sorry-cypress](https://github.com/sorry-cypress/sorry-cypress)

## Typical stack

| Component | Role |
|-----------|------|
| **Director** | Receives Cypress run uploads |
| **API** | GraphQL/REST for queries |
| **Dashboard** | Web UI to browse specs and failures |
| **S3 / MinIO** | Artifact storage |

Point Cypress at your director URL via `CYPRESS_API_URL` and project record key.

## Related

- [Automation](../automation/README.md) — Cypress browser E2E
- [Tooling Extras](./../README.md)
