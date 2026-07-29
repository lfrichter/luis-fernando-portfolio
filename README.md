# 🚀 Luis Fernando Richter — Portfolio & Architecture Showcase

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React 19](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-TDD_Passed-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/Playwright-E2E_Covered-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![i18next](https://img.shields.io/badge/i18n-PT--BR_%7C_EN--US-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

A high-performance, responsive, and bilingual (PT-BR / EN-US) single-page portfolio application engineered to showcase 15+ years of software development experience, high-throughput distributed systems, AI-native architectures, and production SaaS applications.

Designed specifically with an executive-level briefing focus for CTOs, VPs of Engineering, and Technical Recruiters.

---

## 🌟 Highlights & Key Features

- 🌐 **Bilingual Engine (i18n)**: Seamless single-click switching between English (EN-US) and Portuguese (PT-BR) with automatic browser language detection (`i18next`).
- ⚡ **Code-Splitting & Dynamic Import**: Architectural detail specifications for projects are dynamically lazily loaded to minimize initial JavaScript bundle size.
- 🎨 **Modern Design System**: Native dark/light mode engine powered by Tailwind CSS v4 and accessible Shadcn/ui component primitives (`Card`, `Badge`, `Button`, `Dialog`).
- 🎯 **Executive Project Tiering**: Projects organized into 3 distinct impact tiers:
  - **Tier 1**: Production AI, Cloud Architectures & SaaS (Hero Showcase Cards).
  - **Tier 2**: Performance Engineering & System Integrations (High-Throughput Systems).
  - **Tier 3**: PoCs, Benchmarks & Technical Challenges (Local Profiling & Benchmarks).
- 📈 **Quantified Impact Metrics**: Career history highlighting key achievements (e.g., `-40% API latency`, `+30% retention`, `30x faster query performance`).
- 🔍 **Real-Time Search & Filtering**: Multi-criteria search and filter chips across projects, tech stack, and 15+ years of career experience.

---

## 🛠️ Technology Stack

| Technology | Role & Purpose |
| :--- | :--- |
| **React 19** | Modern UI framework utilizing concurrent rendering primitives. |
| **TypeScript** | Strict static typing across data layers, hooks, and components. |
| **Vite 6** | High-speed build tool and development server with instant HMR. |
| **Tailwind CSS v4** | Utility-first CSS framework with dynamic CSS variables and HSL design tokens. |
| **Shadcn/ui** | Accessible, unstyled component primitives for buttons, badges, cards, and modal dialogs. |
| **i18next & react-i18next** | Internationalization framework with JSON locale datasets and custom hooks integration. |
| **Lucide React** | Consistent, light-weight SVG vector iconography. |
| **Vitest & React Testing Library** | Unit testing, hook testing, and TDD component assertion runner. |
| **Playwright** | End-to-End browser testing verifying UI flows, modals, and language switching. |

---

## 🧪 Test-Driven Development (TDD) & Quality Assurance

This repository strictly adheres to **Test-Driven Development (TDD)** and **Red-Green-Refactor** engineering workflows. Every user interaction, filter hook, language toggle, and modal lifecycle is covered by automated testing.

```
[ Red: Write Failing Test ] ➔ [ Green: Implement Minimal Code ] ➔ [ Refactor & Verify ]
```

### Testing Strategy

1. **Unit & Component Tests (Vitest + `@testing-library/react`)**:
   - **Coverage**: 13 test suites / 28 unit tests passed.
   - Verifies state initialization, category filtering, search input debounce, modal dialog mounting, dark mode toggling, and bilingual translation key fallbacks.
2. **End-to-End Integration Tests (Playwright)**:
   - Verifies full browser workflow in headless Chrome/Firefox/WebKit: tab switching (`TabsNav`), modal interactions (`ProjectModal`), live language toggling (`LanguageToggle`), and project search inputs.

### Test Execution Commands

```bash
# Run unit tests via Vitest
npm test

# Run Vitest in watch mode for active TDD development
npx vitest

# Run Playwright E2E browser tests
npm run test:e2e

# Run complete verification pipeline (Build + Unit Tests)
npm run build && npm test
```

---

## 📐 Architecture Decision Records (ADRs)

All major technical decisions, design choices, data modeling strategies, and refactoring steps are formally documented in accordance with Architecture Decision Record standards.

📖 **Full Architectural Log**: Read the complete [`docs/DECISIONS.md`](docs/DECISIONS.md) document.

### Summary of ADRs

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

---

## 📂 Project Structure

```
luis-fernando-portfolio/
├── docs/
│   └── DECISIONS.md              # Architectural Decision Records (ADR-001 to ADR-008)
├── e2e/
│   └── portfolio.spec.ts         # Playwright E2E browser integration spec
├── public/                       # Static public assets (favicon, manifest)
├── src/
│   ├── assets/                   # Profile avatar and media assets
│   ├── components/               # React UI components
│   │   ├── ui/                   # Shadcn base primitives (Badge, Button, Card, Separator)
│   │   ├── __tests__/            # Vitest unit test suites for UI components
│   │   ├── EducationCerts.tsx    # Academic education & verified credentials tab
│   │   ├── Experience.tsx        # 15+ Yrs career timeline & quantified metrics
│   │   ├── Hero.tsx              # Hero profile header section
│   │   ├── LanguageToggle.tsx    # PT / EN locale switcher button
│   │   ├── Navbar.tsx            # Sticky main navigation header
│   │   ├── ProjectModal.tsx      # Lazy-loaded CTO briefing dialog
│   │   ├── Projects.tsx          # Tiered projects showcase section
│   │   ├── Skills.tsx            # Technical competencies & AI tools section
│   │   └── TabsNav.tsx           # Responsive tab navigation bar
│   ├── data/                     # Data schemas & local fallback sets
│   ├── hooks/                    # Custom React state & data fetch hooks
│   │   ├── useCategorizedProjects.ts
│   │   ├── useEducationAndCerts.ts
│   │   ├── useExperience.ts
│   │   ├── useProfile.ts
│   │   └── useProjectDetail.ts
│   ├── i18n/                     # i18next initialization & configuration
│   ├── locales/                  # Bilingual translation datasets
│   │   ├── en/                   # English (EN-US) JSON files
│   │   └── pt/                   # Portuguese (PT-BR) JSON files
│   ├── types/                    # TypeScript interfaces & data models
│   ├── App.tsx                   # Main layout container
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global CSS variables & Tailwind v4 theme setup
├── package.json
├── playwright.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started & Local Development

### Prerequisites

- **Node.js**: v18.x or v20.x+
- **npm**: v9.x or v10.x+

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

Distributed under the **MIT License**. See `LICENSE` for more information.

Developed with ❤️ by **Luis Fernando Richter** — Senior Software Engineer & Tech Lead.
