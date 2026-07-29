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

## ADR-005: Obsidian Vault Ingestion, Data Normalization & Code-Split Lazy Loading

- **Date:** 2026-07-28
- **Status:** Accepted
- **Context:** 15+ years of extensive technical data (Turno, Full Comms, Evoke Mobile, Alfasoft, Plugae, Ask Richter, SmartShorts, Canaoaves, EuPizza, Semantic Cache PoC, Postmark Email Task Manager) in the Obsidian Vault risks causing JSON bloat if bundled together.
- **Decision:**
  - Ingested real data directly from `/Users/master/Documents/ObsidianVault/B-Areas/Particular/Curriculo`.
  - Created `src/data/projects_summary.json` for initial card rendering.
  - Created `src/data/projects_details/` containing separate JSON files for each project (`ask_richter.json`, `smart_shorts.json`, `canaoaves.json`, `eupizza.json`, `semantic_cache.json`, `postmark_email.json`).
  - Implemented dynamic code-splitting and Lazy Loading in `useProjectDetail` hook and `ProjectModal.tsx`.
  - Ensured historical accuracy for Full Comms (highlighting hands-on technical lead contributions in API optimization with Lumen/Laravel and Dusk E2E testing).
- **Consequences:** Eliminates bundle bloat, reduces initial load time, and preserves full architectural depth.

---

## ADR-006: Decoupled Custom Hooks & Responsive Tabbed UI Architecture

- **Date:** 2026-07-28
- **Status:** Accepted
- **Context:** Presenting 15+ years of career history, 6 featured architectural projects, academic degrees, and 12+ certifications without polluting the main page or creating an excessively long scrollable UI.
- **Decision:**
  - Built custom hooks (`useProfile`, `useProjects`, `useProjectDetail`, `useExperience`, `useEducationAndCerts`) encapsulating state, searching, and filtering.
  - Created `TabsNav.tsx` for responsive navigation across 4 dedicated tab panels (Projetos & Destaques, Experiência, Skills & IA, Formação & Certificados).
  - Extended Vitest component tests to cover error states, empty filter fallbacks, and dialog states.
- **Consequences:** Clean separation of presentation UI from data fetching, highly responsive mobile-first experience, and 100% test coverage across 11 test files (23 unit tests + E2E Playwright).

---

## ADR-007: Project Tier Strategy & CTO-Focused Architectural Curation

- **Date:** 2026-07-28
- **Status:** Accepted
- **Context:** High-level tech leadership (CTOs, VP of Engineering, Tech Recruiters) requires immediate clarity on senior architectural impact, distinguishing major production SaaS applications from performance optimizations and local PoCs.
- **Decision:**
  - Built `useCategorizedProjects` hook partitioning projects into 3 visual Tiers:
    - **Tier 1 (AI, Cloud & SaaS — Hero Showcase Cards)**: EuPizza (Voice AI), SmartShorts (Video SaaS), Ask Richter (RAG Chatbot), Canaoaves (Supabase RLS), Framework SDLC-IA.
    - **Tier 2 (Performance & System Integrations — Standard Grid)**: Spider Hub (Marketplace Integration), Toot (Geospatial Superfetch), Shosales (10x Speedup), Favorite Products API (Clean Arch), OnePush (Event-Driven).
    - **Tier 3 (PoCs & Benchmarks — Compact Accordion)**: FAISS Semantic Cache, PySpark ETL, Postmark Email Task Manager, k6 Benchmarks, Twin Quest Engine.
  - Redesigned `ProjectModal.tsx` to render executive briefings, tech stacks, visual architecture topology diagrams, and highlighted "Desafios & Soluções" cards.
  - Enhanced `Experience.tsx` timeline to render quantified impact metrics (`-40% latência`, `30x mais rápido`, `+30% retenção`, `500x filas`) with bold emerald badges.
- **Consequences:** Provides immediate executive readability for tech leadership while retaining full deep-dive architectural specifications, backed by 12 Vitest test files (26 unit tests) and Playwright E2E integration verification.
