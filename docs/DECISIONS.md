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

---

## ADR-008: i18n Internationalization Architecture (Bilingual PT-BR / EN-US)

- **Date:** 2026-07-28
- **Status:** Accepted
- **Context:** The portfolio must support bilingual presentation (Portuguese and English) for global recruiters and tech leadership, adhering to industry standards without duplicating React UI components.
- **Decision:**
  - Integrated `i18next`, `react-i18next`, and `i18next-browser-languagedetector` with auto-detection and fallback.
  - Reorganized all data JSONs into locale subdirectories (`src/locales/pt/` and `src/locales/en/`), translating all professional history, achievements, projects, education, and UI strings into English.
  - Adapted custom hooks (`useProfile`, `useExperience`, `useCategorizedProjects`, `useProjectDetail`, `useEducationAndCerts`) to listen to `i18n.language` and dynamically serve the active locale data.
  - Created `LanguageToggle.tsx` component in `Navbar.tsx` for seamless single-click language switching without page reloads.
  - Extended Vitest unit test suite (`LanguageToggle.test.tsx`) and Playwright E2E spec (`portfolio.spec.ts`) verifying live language switching.
- **Consequences:** Provides instant bilingual switching across all sections and modals, preserving 100% component reusability, modular locale datasets, and full test suite coverage (13 Vitest test files, 28 unit tests + E2E Playwright).

---

## ADR-009: Dedicated Legacy Projects Section & Pre-2015 Temporal Isolation

- **Date:** 2026-09-28
- **Status:** Accepted
- **Context:** Enterprise projects engineered prior to 2015 (Editora FTD S/A: Gestão de Acessos multi-filiais, Gerenciador Iconográfico DAM, Controle de Produção Editorial) represent important historical software architecture (ColdFusion, Java Servlets, Component-Based Development, ERP Progress decoupling via MS SQL Server). However, they must not dilute modern AI/Cloud showcases (Tiers 1, 2, and 3).
- **Decision:**
  - Introduced strict temporal partitioning in `useCategorizedProjects` hook isolating any project with `year < 2015` exclusively into `legacyProjects`.
  - Built a dedicated, collapsable legacy showcase section in `Projects.tsx` with distinctive corporate branding, year badges (`2006`, `2008`, `2010`), and deep-dive technical modals with interactive Mermaid diagrams.
  - Sourced and validated all 3 notes directly from Obsidian Vault (`B-Areas/Particular/Curriculo/Projects/2006-2015/`), maintaining bidirectional parity with `.sync_manifest.json` and Continuous Content Delivery (CCD).
- **Consequences:** Preserves clean executive focus on modern cloud/AI stacks while giving recruiters and tech leadership transparent visibility into 15+ years of foundational enterprise engineering, covered by 14 Vitest test suites (35 unit tests) and Playwright E2E integration verification.

---

## ADR-010: Career Era Filtering Architecture (Timeline Horizons: Modern, Scaling, Legacy)

- **Date:** 2026-09-28
- **Status:** Accepted
- **Context:** Ingesting 8 historical projects from 2016 to 2020 (ASO [2016], Índicos SaaS [2017], Startup Center [2017], Sisporta [2018], Simulados Médicos [2018], Fanoty [2019], Grappl [2019], Huktup [2020]) brought the portfolio to 30 projects. Without temporal categorization, visitors and tech leadership could experience cognitive overload distinguishing modern AI/Cloud Native architectures from previous high-scale API/SaaS cycles.
- **Decision:**
  - Implemented Career Era / Timeline Horizon filtering (Option 1) in `useCategorizedProjects.ts`:
    - `all`: Full consolidated view (30 projects).
    - `modern`: AI & Cloud Native (2021 – Present).
    - `scaling`: SaaS, Cloud & High-Scale APIs (2016 – 2020).
    - `legacy`: Enterprise Legacy Systems (< 2015).
  - Integrated interactive era tab pills with live project counts (`eraCounts`) into `src/components/Projects.tsx`.
  - Added full bilingual support in `src/locales/pt/ui.json` and `src/locales/en/ui.json`.
  - Ingested all 8 Obsidian notes (`B-Areas/Particular/Curriculo/Projects/2016-2020/`), generated detailed bilingual architecture specifications with Mermaid diagrams (`projects_details/`), and registered dynamic code-split lazy loading in `useProjectDetail.ts`.
  - Reconciled state in `.sync_manifest.json` and updated mapping documentation (`Portfolio-Dados-Publicados-e-Mapeamento.md`).
- **Consequences:** Provides effortless career progression filtering for CTOs and hiring managers, eliminates UI crowding, maintains 100% test coverage (14 Vitest suites, 38 unit tests + 2 Playwright E2E specs), and verifies full bilingual integrity.

---

## ADR-011: Three-Tier Gateway Routing & ImobFlow Product Landing Page Architecture

- **Date:** 2026-10-07
- **Status:** Accepted
- **Context:** The platform needed to showcase both Luis Fernando Richter's 15+ years career portfolio and the flagship B2B SaaS product **ImobFlow** (AI Sales Engine for Real Estate). The architecture needed clean separation without adding heavy dependencies like `react-router-dom` or `framer-motion`, while strictly respecting **Product Truth** (no unverified SLAs, fake metrics, fake CRMs, or fake dashboards).
- **Decision:**
  - Implemented a lightweight, zero-dependency client routing architecture in `App.tsx` utilizing `window.history.pushState` with `popstate` and `hashchange` events supporting three entry points:
    - `/`: Minimalist, editorial Richter Gateway (`RichterGateway.tsx`) with two dedicated entry doors.
    - `/imobflow`: Dedicated, modular B2B product landing page (`ImobFlowLanding.tsx`).
    - `/portfolio`: Full career portfolio view (`PortfolioPage.tsx`).
  - Built modular landing components under `@/components/imobflow/` (`Hero`, `PainPoints`, `HowItWorks`, `Features`, `VisualProof`, `TechDiff`, `NoFriction`, `CTA`, `Footer`, `Navbar`).
  - Maintained strict Product Truth: documented deterministic business rule guardrails, Reserva Campolim real property matching demo, and zero fake operational claims.
  - Implemented uniform `Início` link in Navbars and direct WhatsApp/Email contact channels in `src/config/imobflow.ts`.
- **Consequences:** Clean decoupling of product marketing from technical career biography, zero bundle bloat, and verified by 16 Vitest test suites (44 unit tests) and 4 Playwright E2E browser tests.

