# 🚀 Richter — Technology, Software Engineering & AI Solutions

[![TypeScript](https://img.shields.io/badge/TypeScript-6.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-16_Suites_Passed-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-4_E2E_Covered-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![i18next](https://img.shields.io/badge/i18n-PT--BR_%7C_EN--US-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

A high-performance, responsive, and decoupled web platform engineered by **Luis Fernando Richter** to showcase 15+ years of software architecture, distributed microservices, AI-native engineering, and production SaaS products.

---

## 🏛️ Architecture Overview: Three-Tier Entry Gateway

The platform operates on a clean, decoupled three-tier routing architecture:

```text
                                / (Richter Gateway)
                                        │
                    ┌───────────────────┴───────────────────┐
                    │                                       │
                /imobflow                              /portfolio
                    │                                       │
         [ ImobFlow Product Landing ]             [ Full Career Portfolio ]
          • AI Sales Engine for Real Estate        • 15+ Years Tech Leadership
          • WhatsApp Conversational AI             • 30+ Architectural Projects
          • Deterministic Rule Engine              • Bilingual i18n (PT/EN)
          • Semantic Property Matching             • Interactive Mermaid Topology
```

1. **`/` (Richter Product Gateway)**: Minimalist, editorial entry page directing visitors to either the flagship AI product (**ImobFlow**) or the comprehensive technical portfolio (**Luis Fernando Richter**).
2. **`/imobflow` (ImobFlow Landing Page)**: Static, standalone product landing page presenting the AI Sales Engine for real estate, strictly adhering to **Product Truth** (no unverified SLAs or fake dashboards).
3. **`/portfolio` (Full Career Portfolio)**: Detailed CTO/VP-level briefing covering 15+ years of software engineering, project tiers, career eras, academic credentials, and tech posts.

---

## 🌟 Highlights & Key Features

- ⚡ **Flagship AI SaaS Showcase (ImobFlow)**: Complete presentation of the conversational AI for WhatsApp, structured lead qualification, real property matching (Reserva Campolim), and deterministic operational guardrails.
- 🌐 **Bilingual Engine (i18n)**: Seamless single-click switching between English (EN-US) and Portuguese (PT-BR) with automatic browser language detection (`i18next`).
- 🎯 **CTO-Focused Project Tiering**: Projects organized into 3 distinct impact tiers:
  - **Tier 1**: Production AI, Cloud Architectures & SaaS (Hero Showcase Cards).
  - **Tier 2**: Performance Engineering & High-Throughput System Integrations.
  - **Tier 3**: PoCs, Benchmarks & Technical Challenges (Local Profiling & Benchmarks).
- ⏳ **Career Era Horizons**: Filter projects by career evolution:
  - **Modern**: AI & Cloud Native (2021 – Present)
  - **Scaling**: SaaS, Cloud & High-Scale APIs (2016 – 2020)
  - **Legacy**: Enterprise Legacy Systems (< 2015, Editora FTD S/A)
- 📊 **Visual Topology Diagrams**: Interactive architecture diagrams rendered dynamically via `mermaid`.
- 🛡️ **OWASP Top 10 Mitigation Matrix**: Interactive security-by-design compliance matrix across portfolio projects.
- 🎨 **Modern Design System**: Native dark/light mode engine powered by Tailwind CSS v4 and accessible Shadcn/ui component primitives (`Card`, `Badge`, `Button`, `Separator`).

---

## 🛠️ Technology Stack

| Technology | Role & Purpose |
| :--- | :--- |
| **React 19** (`19.2.7`) | Modern UI framework utilizing concurrent rendering primitives. |
| **TypeScript** (`~6.0.2`) | Strict static typing across data layers, hooks, and components. |
| **Vite 8** (`8.1.1`) | Ultra-fast build tool and development server with instant HMR. |
| **Tailwind CSS v4** (`4.3.3`) | Utility-first CSS framework with dynamic CSS variables and HSL design tokens. |
| **Shadcn/ui & Radix UI** | Accessible, unstyled component primitives (`Slot`, `Button`, `Card`, `Badge`). |
| **i18next & react-i18next** | Bilingual internationalization framework with dynamic JSON locale datasets. |
| **Mermaid** (`11.16.1`) | Dynamic client-side rendering of architecture topology diagrams. |
| **Lucide React** (`1.27.0`) | Consistent, lightweight vector iconography. |
| **Oxlint** (`1.71.0`) | High-performance Rust-based static code linter. |
| **Vitest** (`4.1.10`) | Unit testing, hook testing, and TDD component assertion runner. |
| **Playwright** (`1.62.0`) | End-to-End browser testing verifying routes, navigation, and modals. |

---

## 🧪 Test-Driven Development (TDD) & Quality Assurance

This repository strictly adheres to **Test-Driven Development (TDD)** and **Red-Green-Refactor** engineering workflows.

```text
[ Red: Write Failing Test ] ➔ [ Green: Implement Minimal Code ] ➔ [ Refactor & Verify ]
```

### Testing Breakdown

1. **Unit & Component Tests (Vitest + React Testing Library)**:
   - **Coverage**: 16 test suites / 44 unit tests passed (100% pass rate).
   - Verifies route parsing, Gateway selection, ImobFlow anti-claims verification, project categorization hooks, dark mode toggling, and bilingual translation key fallbacks.
2. **End-to-End Integration Tests (Playwright)**:
   - **Coverage**: 4 browser specs passing in headless Chrome/Firefox/WebKit.
   - Verifies the full user journey: Gateway routing (`/` ➔ `/portfolio`, `/` ➔ `/imobflow`), tab switching, modal interactions, and language switching.

### Test Execution Commands

```bash
# Run all unit test suites via Vitest
npm test

# Run Vitest in watch mode for active TDD development
npm run test:watch

# Run Playwright E2E browser tests
npm run test:e2e

# Run linter
npm run lint

# Run complete verification pipeline (Lint + Unit Tests + E2E Tests + Production Build)
npm run lint && npm test && npm run test:e2e && npm run build
```

---

## 📐 Architecture Decision Records (ADRs)

All major technical decisions, design choices, data modeling strategies, and refactoring steps are formally documented in [`docs/DECISIONS.md`](docs/DECISIONS.md).

| ADR | Title | Status | Summary |
| :--- | :--- | :--- | :--- |
| **[ADR-001](docs/DECISIONS.md#adr-001-initial-infrastructure-and-remote-repository-setup)** | Initial Infrastructure & Remote Repository Setup | Accepted | Scaffolding with Vite + React + TypeScript and privacy-protected GitHub configuration. |
| **[ADR-002](docs/DECISIONS.md#adr-002-design-system--styling-architecture-tailwind-css--shadcnui)** | Design System & Styling Architecture | Accepted | Integration of Tailwind CSS v4, HSL design tokens, dark mode, and Shadcn/ui component primitives. |
| **[ADR-003](docs/DECISIONS.md#adr-003-testing-stack--tdd-methodology-vitest--playwright)** | Testing Stack & TDD Methodology | Accepted | Vitest + React Testing Library for unit specs and Playwright for E2E integration specs. |
| **[ADR-004](docs/DECISIONS.md#adr-004-decoupled-data-model-architecture-srcdataprofilejson)** | Decoupled Data Model Architecture | Accepted | Separation of presentation UI components from career datasets (`profile.json`, `projects_summary.json`). |
| **[ADR-005](docs/DECISIONS.md#adr-005-obsidian-vault-ingestion-data-normalization--code-split-lazy-loading)** | Obsidian Vault Ingestion & Lazy Loading | Accepted | Normalization of 15+ years of career notes from Obsidian Vault into lazy-loaded project JSON bundles. |
| **[ADR-006](docs/DECISIONS.md#adr-006-decoupled-custom-hooks--responsive-tabbed-ui-architecture)** | Custom Hooks & Responsive Tabbed UI | Accepted | Creation of dedicated hooks (`useProjects`, `useExperience`, `useEducationAndCerts`) and `TabsNav.tsx`. |
| **[ADR-007](docs/DECISIONS.md#adr-007-project-tier-strategy--cto-focused-architectural-curation)** | CTO-Focused Project Tier Strategy | Accepted | Visual grouping into Tier 1 (AI Showcase), Tier 2 (High-Throughput), and Tier 3 (PoCs & Benchmarks). |
| **[ADR-008](docs/DECISIONS.md#adr-008-i18n-internationalization-architecture-bilingual-pt-br--en-us)** | Bilingual i18n Architecture | Accepted | Integration of `react-i18next` with structured locale directories (`src/locales/pt`, `src/locales/en`). |
| **[ADR-009](docs/DECISIONS.md#adr-009-dedicated-legacy-projects-section--pre-2015-temporal-isolation)** | Legacy Projects Temporal Isolation | Accepted | Partitioning of pre-2015 enterprise architectures (Editora FTD S/A) into dedicated collapsable section. |
| **[ADR-010](docs/DECISIONS.md#adr-010-career-era-filtering-architecture-timeline-horizons-modern-scaling-legacy)** | Career Era Filtering Architecture | Accepted | Timeline horizons filtering (`modern`, `scaling`, `legacy`, `all`) with dynamic counts. |
| **[ADR-011](docs/DECISIONS.md#adr-011-three-tier-gateway-routing--imobflow-product-landing-page-architecture)** | Three-Tier Gateway & ImobFlow Product Landing | Accepted | Zero-dependency client routing (`/`, `/imobflow`, `/portfolio`) & modular ImobFlow landing adhering to Product Truth. |

---

## 📂 Project Structure

```text
luis-fernando-portfolio/
├── docs/
│   ├── DECISIONS.md              # Architectural Decision Records (ADR-001 to ADR-011)
│   └── Portfolio-Dados...md      # Source data mapping documentation
├── e2e/
│   ├── imobflow.spec.ts          # Playwright E2E spec for /imobflow route
│   └── portfolio.spec.ts         # Playwright E2E spec for Gateway & Portfolio
├── public/                       # Static public assets (favicons, icons)
├── src/
│   ├── assets/                   # Media assets, brand logos (ImobFlow, Richter)
│   ├── components/               # Portfolio UI components
│   │   ├── imobflow/             # ImobFlow modular landing components
│   │   │   ├── ImobFlowCTA.tsx
│   │   │   ├── ImobFlowFeatures.tsx
│   │   │   ├── ImobFlowFooter.tsx
│   │   │   ├── ImobFlowHero.tsx
│   │   │   ├── ImobFlowHowItWorks.tsx
│   │   │   ├── ImobFlowNavbar.tsx
│   │   │   ├── ImobFlowNoFriction.tsx
│   │   │   ├── ImobFlowPainPoints.tsx
│   │   │   ├── ImobFlowTechDiff.tsx
│   │   │   └── ImobFlowVisualProof.tsx
│   │   ├── ui/                   # Shadcn base primitives (Badge, Button, Card, Separator)
│   │   ├── EducationCerts.tsx    # Academic education & certifications tab
│   │   ├── Experience.tsx        # 15+ Yrs career timeline & quantified metrics
│   │   ├── Footer.tsx            # Corporate portfolio footer
│   │   ├── Hero.tsx              # Executive profile header section
│   │   ├── LanguageToggle.tsx    # PT / EN locale switcher button
│   │   ├── MermaidViewer.tsx     # Dynamic topology renderer
│   │   ├── Navbar.tsx            # Navigation header with Início link
│   │   ├── OwaspMatrixModal.tsx  # OWASP Top 10 compliance modal
│   │   ├── Posts.tsx             # Technical articles & blog publications tab
│   │   ├── ProjectModal.tsx      # Lazy-loaded CTO briefing dialog
│   │   ├── Projects.tsx          # Tiered projects showcase section
│   │   ├── Skills.tsx            # Technical competencies & AI tools section
│   │   ├── TabsNav.tsx           # Responsive tab navigation bar
│   │   └── ThemeToggle.tsx       # Dark / Light mode toggle
│   ├── config/                   # Configuration constants & verified contact channels
│   │   └── imobflow.ts
│   ├── context/                  # Theme context & provider
│   ├── data/                     # Data schemas & local fallback sets
│   ├── hooks/                    # Custom React state & data fetch hooks
│   ├── i18n/                     # i18next configuration
│   ├── locales/                  # Bilingual translation datasets (pt / en)
│   ├── pages/                    # Core view pages
│   │   ├── ImobFlowLanding.tsx   # /imobflow landing page
│   │   ├── PortfolioPage.tsx     # /portfolio full portfolio page
│   │   └── RichterGateway.tsx    # / root entry gateway page
│   ├── styles/                   # CSS stylesheets & Tailwind v4 token definitions
│   ├── tests/                    # Vitest unit test suites
│   ├── types/                    # TypeScript interfaces & data models
│   ├── App.tsx                   # Main layout container & lightweight client router
│   └── main.tsx                  # Application entry point
├── package.json
├── playwright.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started & Local Development

### Prerequisites

- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lfrichter/luis-fernando-portfolio.git
   cd luis-fernando-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📜 License

Distributed under the **MIT License**.

Engineered by **Luis Fernando Richter** — Senior Software Engineer, Tech Lead & AI Solution Architect.
