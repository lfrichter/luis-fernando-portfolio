# Architecture and Engineering Decisions Log (DECISIONS.md)

This document records key architectural, technological, and engineering decisions made during the development of **luis-fernando-portfolio**.

---

## ADR-001: Initial Infrastructure and Remote Repository Setup

- **Date:** 2026-07-25
- **Status:** Accepted
- **Context:** Need a modern, responsive interactive portfolio web application initialized with remote repository tracking.
- **Decision:**
  - Scaffolding tool: Vite with `react-ts` template.
  - Remote repository: Created private GitHub repository `lfrichter/luis-fernando-portfolio`.
  - Configured git author/committer with GitHub's privacy-protected noreply email format (`6990165+lfrichter@users.noreply.github.com`).
- **Consequences:** Provides a clean TypeScript, Vite, React foundation with immediate remote tracking.

---

## ADR-002: Design System & Styling Architecture (Tailwind CSS + Shadcn/ui)

- **Date:** 2026-07-25
- **Status:** Accepted
- **Context:** Design requirements specify modern, minimalist UX, native dark mode support, visual superiority over standard GitHub READMEs, and specific Shadcn base components (`button`, `card`, `badge`, `separator`).
- **Decision:**
  - Integrated Tailwind CSS v4 with `@tailwindcss/postcss` and Autoprefixer.
  - Defined design tokens in `src/index.css` using HSL variables supporting light/dark theme classes.
  - Configured `@/*` path mapping in `tsconfig.app.json` and `vite.config.ts`.
  - Built reusable Shadcn base components (`Button`, `Card`, `Badge`, `Separator`) under `@/components/ui`.
- **Consequences:** Offers modular, accessible component primitives and consistent dark-mode styling across the portfolio.

---

## ADR-003: Testing Stack & TDD Methodology (Vitest + Playwright)

- **Date:** 2026-07-25
- **Status:** Accepted
- **Context:** The project adheres strictly to SPARC+DD & TDD (Red-Green-Refactor) development workflows and requires automated verification.
- **Decision:**
  - Component & Unit testing: Vitest + `@testing-library/react` + `jsdom`.
  - E2E Testing: `@playwright/test` for browser interaction testing.
  - Excluded `e2e/**` from Vitest test runner to decouple component unit test suites from E2E integration specs.
  - Configured `npm run build && npm test && npm run test:e2e` pipeline.
- **Consequences:** 100% test coverage across 8 Vitest test suites (13 unit tests) and Playwright E2E browser tests.

---

## ADR-004: Decoupled Data Model Architecture (`src/data/profile.json`)

- **Date:** 2026-07-25
- **Status:** Accepted
- **Context:** Portfolio content must be decoupled from UI rendering logic so user professional details can be updated without modifying React components.
- **Decision:**
  - Created strongly typed interfaces in `src/types/profile.ts`.
  - Created structured JSON dataset at `src/data/profile.json` detailing roles (Senior Software Developer, Tech Lead, Solutions Architect), achievements, architectural highlights, and categorized skills.
- **Consequences:** Easy content maintainability and clear separation of concerns.

---
