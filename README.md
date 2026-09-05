<div align="center">

# SLIIT FOSS NPM Catalogue - Working Copy

**A local copy of the SLIIT FOSS JavaScript package catalogue used for study and contribution work.**

<img src="https://img.shields.io/badge/Upstream_project_working_copy-4F86FF?style=flat-square&labelColor=0B1224" alt="Upstream project working copy" /> <img src="https://img.shields.io/badge/Public_repository-4F86FF?style=flat-square&labelColor=0B1224" alt="Public repository" />

[Portfolio](https://kavindudamsith.tech/) &nbsp;|&nbsp; [LinkedIn](https://www.linkedin.com/in/kavindu-damsith-86696722a/) &nbsp;|&nbsp; [Email](mailto:kavindudamsith65@gmail.com)

</div>

---

## Overview

This repository mirrors the structure of the SLIIT FOSS npm-catalogue rather than representing a personal package collection. It is a pnpm and Turborepo monorepo containing reusable Node.js packages, tests, release automation, and plugin integrations.

## My contribution

Credit for the catalogue and its package ecosystem belongs to the SLIIT FOSS community and its contributors. This repository is retained as a working copy for study or contribution-related development.

## What it does

| Area | Details |
| --- | --- |
| **Package catalogue** | Utilities cover versioning, shell execution, clustering, Firebase, functional helpers, logging, and more. |
| **Monorepo tooling** | pnpm workspaces and Turborepo coordinate builds, tests, linting, and releases. |
| **Quality controls** | Jest, ESLint, Prettier, Husky, and commitlint are configured at the root. |
| **Automation** | GitHub Actions handle linting, prereleases, releases, and shared actions. |

## Repository map

| Path | Purpose |
| --- | --- |
| `packages/` | Individual npm packages with source, tests, types, and package documentation. |
| `plugins/` | Plugin integrations included by the catalogue. |
| `scripts/` | Repository maintenance and release helpers. |
| `.github/workflows/` | Continuous integration and release automation. |

## Technology

- **JavaScript**
- **Node.js**
- **pnpm**
- **Turborepo**
- **Jest**
- **GitHub Actions**

## Local setup

```bash
pnpm install
pnpm test
pnpm build
pnpm lint
# Run one package test suite
pnpm --filter <package> test
```

## Status

Upstream project working copy.

## Links

- [SLIIT FOSS npm-catalogue](https://github.com/sliit-foss/npm-catalogue)

---

Questions about this repository? [Email me](mailto:kavindudamsith65@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/kavindu-damsith-86696722a/).
