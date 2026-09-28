# Portfolio - Dados Publicados e Mapeamento de Fontes

> **Documento de Mapeamento e Consolidação do Portfólio**
> Este documento consolida todos os dados atualmente publicados na aplicação web do portfólio (`luis-fernando-portfolio`) e estabelece o mapeamento direto e bidirecional com as notas fontes no vault do Obsidian.

---

## 1. Mapeamento de Projetos por Categoria

A aplicação organiza 30 projetos através de uma navegação por Horizontes/Eras de Carreira (*AI & Nuvem Nativa 2021–Presente*, *SaaS, Cloud & APIs de Escala 2016–2020*, e *Sistemas Corporativos Legado < 2015*), divididos em Tiers de impacto técnico para CTOs, líderes de engenharia e recrutadores.

### 🌟 Projetos Principais (SaaS, Full Stack & Engenharia de Produção)

| ID do Projeto | Nome na Aplicação | Resumo / Stack Principal | Nota Fonte no Obsidian |
| :--- | :--- | :--- | :--- |
| `eupizza` | **EuPizza / Robô de Atendimento por Voz** | Agente de voz com IA Multi-Tenant (LiveKit, WebRTC, Deepgram STT, OpenAI GPT-4o-mini, ElevenLabs, Supabase, Python FastAPI/Flask) | `B-Areas/Particular/Curriculo/Projects/Project - EuPizza - Atendimento por Voz - BRNow.md`<br>`B-Areas/Particular/Curriculo/PoCs/PoC - Robo de Atendimento por Voz.md` |
| `smart-shorts` | **SmartShorts & SmartShorts UI** | SaaS de criação automatizada de vídeos (Next.js App Router, React 19, TypeScript, Java / Spring Boot, Tailwind CSS) | `B-Areas/Particular/Curriculo/Projects/Project - SmartShorts - Backend.md`<br>`B-Areas/Particular/Curriculo/Projects/Project - SmartShorts - Frontend.md` |
| `ask-richter` | **Ask Richter** | CV interativo com RAG 100% Serverless, busca híbrida vetorial/léxica (Next.js 15, React 19, Supabase, TSVectorStore, Gemini, Ollama) | `B-Areas/Particular/Curriculo/Projects/Project - AskRichter Chatbot.md` |
| `canaoaves` | **Canaoaves & Admin Canaoaves** | Plataforma colaborativa de observação de aves, monolito modular Vertical Slice (React, Vite, TypeScript, Supabase PostgreSQL, RLS) | `B-Areas/Particular/Curriculo/Projects/Project - Canaoaves.md`<br>`B-Areas/Particular/Curriculo/Projects/Project - Canaoaves Admin.md` |
| `spider-hub` | **Spider — Hub de Integração de E-commerce** | Hub centralizador de pedidos multi-marketplace e ERP Bling (PHP, Laravel, Redis, Horizon, MongoDB, AWS S3) | `B-Areas/Particular/Curriculo/Projects/Project - Spider - Integration Engineer.md`<br>`B-Areas/Particular/Curriculo/Experiencia/Experiência - Plugae.md` |
| `toot` | **Toot & Toot Intelligence Platform** | Análise geoespacial com 200k+ pontos (React Superfetch 30x) e filas assíncronas 500x mais rápidas (Laravel Horizon, Redis, Power BI) | `B-Areas/Particular/Curriculo/Projects/Project - Toot Desafio de Viagens longas.md`<br>`B-Areas/Particular/Curriculo/Projects/Project - Toot Geodata Otimização.md` |
| `shosales` | **Shosales Website Revamp & Testing** | Otimização de performance de páginas em 10x e paralelização de testes E2E (Laravel Dusk, Selenium, Vue.js, DeployHQ) | `B-Areas/Particular/Curriculo/Projects/Project - Shosales Review - Otimização de Performance 10x e Testes E2E.md` |
| `onepush` | **OnePush Notification Platform** | Plataforma modular orientada a eventos para Web Push Notifications (Laravel, Event-Driven, OneSignal, Pagar.me, MySQL) | `B-Areas/Particular/Curriculo/Projects/Project - OnePush.md`<br>`B-Areas/Particular/Curriculo/Experiencia/OnePush Analise Consolidado v1.md` |
| `video-factory-automated` | **Fábrica de Vídeos Automatizada (Video Factory)** | Pipeline autônomo de geração de mídia end-to-end e microserviço Flask (Python 3.11, SQLite, ElevenLabs, Coqui TTS, Replicate SDXL, Whisper, FFmpeg) | `B-Areas/Particular/Curriculo/Projects/Project - Video Factory Automated.md` |

---

### 🚀 Side Projects

| ID do Projeto | Nome na Aplicação | Resumo / Stack Principal | Nota Fonte no Obsidian |
| :--- | :--- | :--- | :--- |
| `sdlc-ia` | **AI Engineering Framework V2.1 Master** | Constituição universal de engenharia agêntica desacoplada em camada de Adapters (Claw Code Rust, Ollama, Git Worktrees), Spec-as-Code | `B-Areas/Particular/Curriculo/SideProjects/Project - Framework Engenharia IA.md` |
| `favorite-products-api` | **Favorite Products API** | Microsserviço RESTful de alta performance projetado com Clean Architecture e princípios SOLID (Node.js, TypeScript, Jest, Docker) | `B-Areas/Particular/Curriculo/SideProjects/Project - Favourite Products.md` |
| `learning-intelligence` | **Learning Intelligence Platform 2.0** | Orquestrador local CLI para transcrição Whisper, análise de keyframes FFmpeg/OCR e síntese Ollama deepseek-r1 (Python, SQLite FTS5, pgvector) | `B-Areas/Particular/Curriculo/SideProjects/Project - Learning Intelligence.md` |
| `my-bookmarks` | **My Bookmarks** | Pipeline de dados de favoritos, Modelo Canônico, classificação por IA local Ollama e motor RAG (TypeScript, Node.js, Zod, Cheerio, Vitest) | `B-Areas/Particular/Curriculo/SideProjects/Project - My Bookmarks.md` |
| `twin-quest` | **Twin Quest Engine** | Experimento de arquitetura de estado reativo e regras de jogo (TypeScript, Vue.js, Pinia) | `B-Areas/Particular/Curriculo/SideProjects/Project - Twin Quest.md` |
| `ecommerce-k6` | **E-Commerce Performance Benchmark** | Suíte de testes de estresse, profiling de gargalos e simulação de alto tráfego (k6, JMeter, Performance Profiling) | `B-Areas/Particular/Curriculo/SideProjects/Project - E-Commerce Performance Engineering End-to-End Observability.md` |

---

### 🧪 PoCs (Provas de Conceito)

| ID do Projeto | Nome na Aplicação | Resumo / Stack Principal | Nota Fonte no Obsidian |
| :--- | :--- | :--- | :--- |
| `semantic-cache` | **Cache Semântico FAISS para LLMs** | Cache semântico vetorial 100% local em memória com altíssima velocidade (Python, Ollama Embeddings, FAISS, NumPy) | `B-Areas/Particular/Curriculo/PoCs/PoC - Cache Semântico de Alta Performance.md` |
| `pyspark-jobs` | **Análise de Jobs com PySpark** | Micro-pipeline de ETL distribuído para consolidação de jobs de vídeo e roteiros (Python, PySpark, SQLite, Jupyter Notebook, Pandas) | `B-Areas/Particular/Curriculo/PoCs/PoC - Data Analisys using Spark and Jupyter.md` |

---

### 🏆 Challenges & Hackathons

| ID do Projeto | Nome na Aplicação | Resumo / Stack Principal | Nota Fonte no Obsidian |
| :--- | :--- | :--- | :--- |
| `cat-guardian` | **Cat Guardian — Passaporte Felino** | Plataforma Open Source com perfil IA (Gemini 2.0 Flash), QR Code e Blind Contact Relay com Resend API (React 19, Vite 6, Supabase RLS) | `B-Areas/Particular/Curriculo/Challenges/Challenge - Cat Guardian.md` |
| `postmark-email-task` | **Gerenciador Conversacional por E-mail** | Postmark Inbound Webhooks transformando e-mails em tarefas via hashtags `#prioridade`, `#concluir` (Laravel, Livewire, Pest, Postmark API) | `B-Areas/Particular/Curriculo/Challenges/Challenge - E-mail Task Manager Conversacional 📥 Postmark.md` |

---

### ⚡ Projetos de Escala, Nuvem & SaaS (2016 – 2020)

| ID do Projeto | Nome na Aplicação | Ano | Resumo / Stack Principal | Nota Fonte no Obsidian |
| :--- | :--- | :--- | :--- | :--- |
| `aso-saude` | **ASO — Reconstrução e Modernização de Sistema de Gestão de Saúde** | 2016 | Reconstrução de HealthTech legado para PHP OOP robusto e migração para AWS (RDS Multi-AZ, EC2, S3, Apache) | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - ASO - Reconstrução e Modernização de Sistema de Gestão de Saúde.md` |
| `indicos-saas` | **Índicos — Plataforma SaaS Multi-tenant de Marketing de Indicação** | 2017 | 1ª plataforma multi-tenant em Laravel com isolamento por subdomínios dinâmicos e árvores de hierarquia | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Índicos SaaS Multi-tenant para Marketing de Indicação.md` |
| `startup-center` | **Startup Center — Ecossistema de Ferramentas para Apoio a Startups** | 2017 | Plataforma de videoconferência WebRTC TokBox/OpenTok, websockets em tempo real Pusher, PayPal e IBM Bluemix -> AWS | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Startup Center - Ecossistema de Ferramentas para Apoio a Startups.md` |
| `sisporta` | **Sisporta — Sincronização Inteligente de Dados** | 2018 | Pipeline ETL resiliente em Python, reconciliação Delete-by-Absence e CI/CD Bitbucket (SQL Server -> MySQL) | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Sisporta - Sincronização Inteligente de Dados.md` |
| `simulados-medicos` | **Simulados Médicos — Plataforma para Exames de Especialidade Médica** | 2018 | EdTech médica em Portugal com gateways de pagamento EuPago.pt, Docker e avaliação psicométrica | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Simulados Médicos - Plataforma para Exames de Especialidade Médica.md` |
| `fanoty` | **Fanoty — Modernização de Backend e API de Esportes** | 2019 | Backend Laravel para aplicativo iOS, integração OPTA Sports Data API e pipelines automatizados com GitHub Actions | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Fanoty - Modernização de Backend e API de Esportes.md` |
| `grappl` | **Grappl — Modernização de API e Entrega Rápida de Funcionalidades** | 2019 | Otimização de queries e índices para latência < 400ms na Wrestling API, Ad Server CMS e busca dinâmica | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Grappl - Modernização de API e Entrega Rápida de Funcionalidades.md` |
| `huktup` | **Huktup — Plataforma de Engajamento e Relacionamento Digital** | 2020 | API RESTful com documentação OpenAPI/Swagger, dashboard em Vue.js + Chart.js, autenticação Firebase e SMS Twilio | `B-Areas/Particular/Curriculo/Projects/2016-2020/Project - Huktup.md` |

---

### 🏛️ Projetos Corporativos Legado (Anteriores a 2015)

| ID do Projeto | Nome na Aplicação | Ano | Resumo / Stack Principal | Nota Fonte no Obsidian |
| :--- | :--- | :--- | :--- | :--- |
| `ftd-gestao-acessos` | **FTD — Gestão de Acessos para Conteúdo Educacional** | 2006 | Plataforma distribuída multi-filiais & desacoplamento de ERP Progress (ColdFusion, Java Servlets, SQL Server, ODBC, ETL) | `B-Areas/Particular/Curriculo/Projects/2006-2015/Project - FTD - Gestão de Acessos para Conteúdo Educacional.md` |
| `ftd-gerenciador-iconografico` | **FTD — Gerenciador Iconográfico (DAM Corporativo)** | 2008 | Banco de imagens corporativo DAM & motor de busca multidimensional (ColdFusion, Java Servlets, CBD, SQL Server, IIS) | `B-Areas/Particular/Curriculo/Projects/2006-2015/Project - FTD - Gerenciador Iconográfico.md` |
| `ftd-controle-producao` | **FTD — Controle de Produção Editorial** | 2010 | Workflow management corporativo & cronometragem de ciclo de livros (ColdFusion, Java Servlets, CBD, SQL Server, IIS) | `B-Areas/Particular/Curriculo/Projects/2006-2015/Project - FTD - Controle de Produção Editorial.md` |

---

## 2. Dados de Cada Seção Publicada

### 💼 Seção: Experiência Profissional

**Notas Fontes no Obsidian:**
- `B-Areas/Particular/Curriculo/Experience-Consolidated.md`
- `B-Areas/Particular/Curriculo/CV-Consolidated.md`
- `B-Areas/Particular/Curriculo/Profile/Experiência LinkedIn.md`
- `B-Areas/Particular/Curriculo/Experiencia/Experiência - Plugae.md`
- `B-Areas/Particular/Curriculo/Experiencia/OnePush Analise Consolidado v1.md`

#### Posições Publicadas (9 Posições):
1. **Turno (anteriormente TurnoverBnB)** (Nov 2022 – Mar 2025)
   - *Cargo:* Engenheiro de Software Líder (Lead Software Engineer) — Honolulu, Havaí, EUA (Remoto)
   - *Destaques:* Liderança técnica nos domínios de Contas, Propriedades e Checklists; iniciativa "Mid-Stay Projects" com +30% de retenção; -40% no tempo de resposta de endpoints; correção de vulnerabilidades em pentests; refatoração de +100 testes de CI/CD (Jenkins).
   - *Stack:* Laravel, Vue.js, React Native, New Relic, Bugsnag, Jenkins, Docker, GitHub Copilot, MySQL.

2. **Full Comms / Keaze** (Abr 2021 – Nov 2022)
   - *Cargo:* Head de Desenvolvimento Full-Stack (Technical Lead) — Manchester, Reino Unido (Remoto)
   - *Destaques:* Desenvolvimento de CMS e APIs com Lumen; módulo de Pós-Venda Kpro AfterSales; testes E2E com Laravel Dusk e Selenium; otimização de performance de páginas em até 10x no Shosales; migrações contínuas de versões PHP/Laravel.
   - *Stack:* Laravel, Lumen, Vue.js, Vuetify, TypeScript, Laravel Dusk, Vercel, DeployHQ, Laravel Forge.

3. **Evoke Mobile** (Mar 2019 – Abr 2021)
   - *Cargo:* Head de Desenvolvimento de Software — Liverpool, Reino Unido (Remoto)
   - *Destaques:* Dashboards em React para 200k+ pontos geoespaciais (ganho de 30x na renderização com Superfetch); filas assíncronas com Laravel Horizon (processamento 500x mais rápido); integração com Firebase, Google Geocoding, Overpass API e feeds OPTA.
   - *Stack:* Laravel, React.js, Laravel Horizon, Redis, Google Geocoding, Firebase, GitHub Actions.

4. **Alfasoft** (Abr 2018 – Nov 2018)
   - *Cargo:* Engenheiro de Desenvolvimento de Software — Lisboa, Portugal (Híbrido)
   - *Destaques:* Arquitetura para importação diária de grandes volumes de dados via filas; aplicações web Laravel e temas WordPress; integração financeira NinjaTrader em C#; integração legado Sisporta com Bitbucket Pipelines.
   - *Stack:* PHP, Laravel, Python, WordPress, C#, Bitbucket Pipelines, Targetprocess.

5. **Plugae** (Nov 2017 – Fev 2018)
   - *Cargo:* Desenvolvedor Sênior de Software — Barueri, SP, Brasil
   - *Destaques:* Arquitetura do Spider (Hub de Integração de E-commerce) interligando Mercado Livre, B2W, Via Varejo, Skyhub ao ERP Bling; captura de pedidos Magento com persistência no MongoDB; mitigação de overselling com filas Redis.
   - *Stack:* Laravel, Redis, MongoDB, Bling ERP Webhooks, AWS S3, Docker.

6. **Pilha Digital** (Fev 2017 – Set 2017)
   - *Cargo:* Desenvolvedor de Software — Sorocaba, SP, Brasil
   - *Destaques:* Plataforma orientada a eventos para envio automatizado de Web Push Notifications; integração com OneSignal e Pagar.me.
   - *Stack:* Laravel, Event-Driven Architecture, OneSignal, Pagar.me.

7. **ASO** (Jan 2016 – Jan 2017)
   - *Cargo:* Desenvolvedor Full Stack — Sorocaba, SP, Brasil
   - *Destaques:* Plataforma em PHP OOP para gestão hospitalar, clínicas e prontuários eletrônicos.
   - *Stack:* PHP OOP, MySQL, JavaScript, Hospital Management Systems.

8. **Promoedu.com** (Set 2015 – Mar 2016)
   - *Cargo:* Coach de Liderança e Desenvolvimento — Sorocaba, SP, Brasil
   - *Destaques:* Treinamentos de liderança, feedback contínuo, segurança psicológica e avaliação de desempenho.
   - *Stack:* Liderança, Executive Coaching, Gestão de Pessoas.

9. **Editora FTD S/A** (Jan 1998 – Nov 2011)
   - *Cargo:* Web Designer & Desenvolvedor Web — São Paulo, SP, Brasil
   - *Destaques:* Portal corporativo, plataforma de e-commerce e intranet com Coldfusion/Java, ASP, SQL Server e Jira.
   - *Stack:* Coldfusion, ASP, Java Servlets, SQL Server, Atlassian Jira, IIS.

---

### ⚡ Seção: Skills & IA

**Notas Fontes no Obsidian:**
- `B-Areas/Particular/Curriculo/Profile/CV ptBR.md`
- `B-Areas/Particular/Curriculo/Profile/CV en.md`
- `B-Areas/Particular/Curriculo/Profile/CoderLegion Profile.md`
- `B-Areas/Particular/Curriculo/CV-Consolidated.md`
- `B-Areas/Particular/Curriculo/OWASP Top 10 - Matriz de Cobertura e Mitigações nos Projetos.md`

#### Categorias de Competências:
1. **AI-Assisted Development & AI Engineering**
   - *Destaques:* Cursor IDE & AI Workflows, GitHub Copilot & Trae & Gemini, RAG Architecture (FAISS, LangChain.js), Voice AI Agents (LiveKit, WebRTC, Deepgram, ElevenLabs).
   - *Demais:* Ollama & Local Vector Cache, Prompt Engineering & System Personas.
2. **Backend Architecture & Microservices**
   - *Destaques:* PHP 8.x & Laravel Framework, Node.js & Express / NestJS, Python (FastAPI, Flask, PySpark).
   - *Demais:* Java & Spring Boot, RESTful APIs & Event-Driven Architecture, Laravel Horizon & Redis Queues.
3. **Frontend Engineering & Modern Web**
   - *Destaques:* React 19 & Next.js App Router, TypeScript & ESNext, Tailwind CSS & Shadcn UI.
   - *Demais:* Vue.js & Pinia / Vuetify, State Management & Custom Hooks, Vite & Bundling.
4. **Database & Storage Systems**
   - *Destaques:* PostgreSQL & Supabase RLS.
   - *Demais:* MySQL & Query Tuning, MongoDB & Schema Normalization, Redis Caching & Distributed Locks, FAISS Vector Database.
5. **DevOps, Cloud & Infrastructure**
   - *Destaques:* Docker & Docker Swarm, AWS (S3, EC2, CloudFront, Lambda, CodeDeploy).
   - *Demais:* GitHub Actions & Jenkins CI/CD, Vercel & DeployHQ, Linux Server Administration.
6. **Engineering Practices & Quality Assurance**
   - *Destaques:* OWASP Top 10 & AppSec Hardening, Clean Architecture & SOLID Principles, Domain-Driven Design (DDD), TDD & Vitest / React Testing Library.
   - *Demais:* Laravel Dusk & Selenium E2E Automation, Agile & Scrum Methodologies (CSM).

---

### 🎓 Seção: Formação Acadêmica & Certificações

**Notas Fontes no Obsidian:**
- `B-Areas/Particular/Curriculo/Profile/Education.md`
- `B-Areas/Particular/Curriculo/Profile/Licenses & certifications.md`

#### Formação Acadêmica:
1. **UNIBTA Centro Universitário** (2007 – 2008)
   - *Grau:* Pós-Graduação Lato Sensu (Especialização) em Engenharia de Software com foco em Projeto de Componentes e Sistemas Distribuídos.
   - *TCC:* "Uma Abordagem de Processo de Negócio Utilizando BPMN" (BPM, BPMN, análise As-Is / To-Be, SOA e BPMS).
2. **Universidade Anhembi Morumbi** (2000 – 2002)
   - *Grau:* Graduação / Superior de Tecnologia em Gestão em E-Commerce e Negócios Digitais.
   - *Foco:* Estratégia digital, logística de e-commerce, CRM, Data Warehouse e segurança online.

#### Certificações Publicadas:
- **Outlier:** Hypno Methodology for Advanced Evaluation & Robustness Testing of AI Models (Jun 2025)
- **Full Cycle:** SOLID Express (Set 2023)
- **Full Cycle:** Introduction to OpenTelemetry (Dez 2022)
- **Full Cycle:** Advanced Patterns and Techniques with Git and GitHub (Fev 2022)
- **Full Cycle:** Domain Driven Design - DDD (Nov 2021)
- **School of Net:** AWS - S3 and CloudFront (Nov 2022)
- **School of Net:** AWS Code Deploy (Nov 2022)
- **School of Net:** AWS EC2 (Nov 2022)
- **School of Net:** AWS Lambda (Nov 2022)
- **Alura:** Docker - Criando contêineres sem dor de cabeça (Fev 2018)
- **Scrum Alliance:** Certified ScrumMaster - CSM (Ago 2011)
- **SBCoaching / BCI:** Leader Coach & Personal Professional Coach (Ago 2012)

---

### 📝 Seção: Posts & Artigos

**Notas Fontes no Obsidian:**
- `B-Areas/Particular/Carreira-Actions/Posts`

#### 13 Artigos Publicados:
1. **Project Cat Guardian: Monitor de IA para Pets** (Ago 2026) — Dev.to, CoderLegion, LinkedIn
2. **Construindo uma API Robusta com Laravel, Clean Architecture e Princípios SOLID** (Out 2025) — Dev.to, CoderLegion, LinkedIn
3. **Desenvolvimento em Altíssima Velocidade com Bun e Hono** (Ago 2025) — Dev.to, LinkedIn
4. **Boilerplate Web3 React dApp** (Ago 2025) — LinkedIn
5. **Minha fábrica automatizada de vídeos no YouTube de ponta a ponta** (Jul 2025) — Dev.to, CoderLegion, LinkedIn
6. **A Essência do Desenvolvimento: Desvendando Complexidades para Criar Aplicações de Alto Nível** (Jul 2025) — Dev.to, CoderLegion, LinkedIn
7. **Quantas grandes ideias ou tarefas urgentes morrem pela falta de priorização?** (Jul 2025) — LinkedIn
8. **Criei uma ferramenta para testes de Agentes de IA** (Jul 2025) — Dev.to, CoderLegion, LinkedIn
9. **Nunca Saia da Sua Caixa de Entrada 📥 Um Gerenciador de Tarefas via Respostas de E-mail** (Jul 2025) — Dev.to, LinkedIn
10. **Itaú Unibanco destaca alto impacto de Inteligência Artificial** (Jun 2025) — LinkedIn
11. **Podemos garantir que uma IA está realmente raciocinando?** (Jun 2025) — LinkedIn
12. **Economize na conta de LLMs com esta solução de FinOps** (Jun 2025) — LinkedIn
13. **Desafio Twin Quest para LVTPP Stack** (Mai 2025) — LinkedIn, GitHub

---

## 3. Resumo da Estrutura de Arquivos no Repositório

```
src/locales/pt/
├── profile.json                 # Bio, contatos, destaques gerais
├── projects_summary.json        # 19 projetos com categorias, tech stacks e tier
├── projects_details/            # 19 arquivos detalhados (arquitetura, desafios, OWASP, etc.)
├── experience.json              # 9 posições profissionais detalhadas
├── education_and_certs.json     # 2 formações acadêmicas + 12 certificações
├── posts.json                   # 13 artigos com links de publicação
└── ui.json                      # Textos de interface e traduções
```
