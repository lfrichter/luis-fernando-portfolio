# ImobFlow Landing Page — Discovery Report (M1)

**Data:** 2026-10-07  
**Status:** M1 Concluído — Aguardando Gate 1  
**Documento de Origem:** `/Users/master/Documents/ObsidianVault/A-Projetos/AI-Sales-Engine/LandingPage/A01.f - Landing Page - Prompt.md`  

---

## 1. Stack Atual

| Tecnologia / Camada | Versão / Biblioteca | Utilização & Notas |
| :--- | :--- | :--- |
| **Framework Base** | React 19.2.7 + ReactDOM 19.2.7 | Estrutura declarativa de componentes e hooks modernos |
| **Build & Bundler** | Vite 8.1.1 (`@vitejs/plugin-react` 6.0.3) | Build estático rápido, code-splitting e hot module replacement |
| **Linguagem & Tipagem** | TypeScript ~6.0.2 (`tsc -b`) | Strict mode com path alias `@/*` configurado para `./src` |
| **Estilização & Engine** | Tailwind CSS v4.3.3 + `@tailwindcss/postcss` 4.3.3 | Configuração via CSS tokens em `@layer base` e `tailwind.config.js` |
| **Primitivas de UI** | Radix UI (`@radix-ui/react-slot` 1.3.3) | Composição de componentes polimórficos (`asChild`) |
| **Utilitários de CSS** | `clsx` 2.1.1, `tailwind-merge` 3.6.0, `cva` 0.7.1 | Concatenação condicional e variantes tipadas de componentes |
| **Ícones** | `lucide-react` 1.27.0 + SVG customizados | Conjunto completo de ícones modernos e leves |
| **Diagramas Visuais** | `mermaid` 11.16.1 (`MermaidViewer.tsx`) | Renderização de topologias e sequências determinísticas |
| **Internacionalização** | `i18next` 26.3.6, `react-i18next` 17.0.11 | Suporte a dicionários dinâmicos de idiomas |
| **Otimização de Imagens** | Importação estática via Vite (`@/assets/...`) | Primitivas nativas HTML `<img>` com lazy loading e aspect-ratio |
| **Qualidade & Testes** | Oxlint 1.71.0, Vitest 4.1.10, Playwright 1.62.0 | 14 test suites unitárias e specs E2E automatizadas |
| **Estratégia de Build** | `npm run build` (`tsc -b && vite build`) | Geração 100% estática na pasta `dist/` para deploy desacoplado |

---

## 2. Routing

- **Arquitetura Atual:** Single Page Application (SPA) cliente com controle de visualização no `src/App.tsx`.
- **Estratégia para a Rota `/imobflow`:**
  - O projeto não possui (e não necessita de) bibliotecas pesadas de roteamento como Next.js ou React Router DOM.
  - A rota `/imobflow` será tratada de forma limpa e declarativa através de detecção de rota no cliente (`window.location.pathname` e listeners de navegação/history) em `src/App.tsx` ou em um seletor de visualização raiz.
  - Quando a rota for `/imobflow`, a aplicação renderiza a página dedicada `src/pages/ImobFlowLanding.tsx` (desacoplada dos componentes da home do portfólio), mantendo o `ThemeProvider` global para alternância Light/Dark.
  - Para builds estáticos, a página é 100% estática e compatível com fallback SPA padrão.

---

## 3. Design System

- **Paleta de Cores (Tokens HSL em `src/styles/index.css` & `tailwind.config.js`):**
  - **Primary:** `hsl(221.2 83.2% 53.3%)` (Light) / `hsl(217.2 91.2% 59.8%)` (Dark) — Azul vibrante de alta conversão.
  - **Background:** `hsl(220 20% 97%)` (Light) / `hsl(224 71.4% 4.1%)` (Dark) — Fundo neutro e sóbrio.
  - **Foreground:** `hsl(224 71.4% 4.1%)` (Light) / `hsl(210 40% 98%)` (Dark) — Alto contraste e legibilidade.
  - **Card / Surface:** `hsl(0 0% 100%)` (Light) / `hsl(224 71.4% 6%)` (Dark) — Superfícies elevadas com bordas sutis.
  - **Muted / Secondary:** `hsl(220 14.3% 95.9%)` (Light) / `hsl(217.2 32.6% 17.5%)` (Dark).
  - **Border:** `hsl(220 13% 91%)` (Light) / `hsl(217.2 32.6% 17.5%)` (Dark).
- **Tipografia:** Tipografia do sistema moderna (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`) com pesos `font-normal`, `font-semibold`, `font-bold` e `font-extrabold`. `font-mono` para badges técnicos e códigos.
- **Espaçamentos e Radius:** `--radius: 0.75rem` (`rounded-xl` para cartões, `rounded-md` para botões/badges).
- **Efeitos e Elevação:**
  - Classe `.glass-panel` para cabeçalhos fixos e cartões flutuantes (`backdrop-filter: blur(12px)` com bordas translúcidas).
  - Sombras suaves: `shadow-sm`, `shadow-md`, transições suaves `transition-all duration-200`.
- **Breakpoints:** `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), `2xl` (1400px), container centralizado com max-width responsivo.

---

## 4. Componentes Reutilizáveis

- **`Button` (`@/components/ui/button.tsx`):**
  - Suporte a variantes: `default`, `secondary`, `outline`, `destructive`, `ghost`, `link`.
  - Tamanhos: `default`, `sm`, `lg`, `icon`. Suporte a `asChild` para links semânticos.
- **`Card` Family (`@/components/ui/card.tsx`):**
  - `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
- **`Badge` (`@/components/ui/badge.tsx`):**
  - Variantes: `default`, `secondary`, `destructive`, `outline`.
- **`Separator` (`@/components/ui/separator.tsx`):**
  - Linhas divisórias horizontais/verticais estilizadas.
- **`ThemeToggle` & `ThemeProvider` (`@/components/ThemeToggle.tsx`, `@/context/ThemeContext.tsx`):**
  - Suporte completo a alternância de tema Dark/Light.
- **`LanguageToggle` (`@/components/LanguageToggle.tsx`):**
  - Suporte a alternância de idioma quando aplicável.
- **`MermaidViewer` (`@/components/MermaidViewer.tsx`):**
  - Renderizador SVG de fluxogramas e topologias determinísticas.

---

## 5. Assets Disponíveis

- **Logo do Produto (ImobFlow):**
  - Localização no Obsidian Vault: `/Users/master/Documents/ObsidianVault/A-Projetos/AI-Sales-Engine/Marca/Logo/Logo-ImobFlow.png` (PNG 310 KB, fundo transparente, alta definição).
  - Destino para o projeto: `src/assets/imobflow/logo-imobflow.png`.
- **Logo Corporativa Richter:**
  - Localização no Obsidian Vault: `/Users/master/Documents/ObsidianVault/A-Projetos/SideProjects/My-Portfolio/Logo-Richter.png` (PNG 163 KB).
  - Destino para o projeto: `src/assets/logo-richter.png` (ou uso do `Brasao-bg-trans.png` existente).
- **Ícones do Ecossistema:**
  - Lucide React (`MessageSquare`, `Bot`, `Zap`, `ShieldCheck`, `Calendar`, `Building2`, `Search`, `Sparkles`, `Clock`, `ArrowRight`, `CheckCircle2`, `Layers`, `Lock`, etc.).
- **Evidências Reais de Produto (Product Truth):**
  - Transcrições reais de atendimento no WhatsApp (Lead solicitando imóvel de 2 dormitórios no Campolim, IA respondendo com busca semântica do Reserva Campolim e qualificando orçamento e intenção).

---

## 6. Product Truth Comprovada (O que a ImobFlow JÁ FAZ)

| Capacidade | Comportamento Comprovado no Repositório / Homologação | Como Deve Aparecer na Landing Page |
| :--- | :--- | :--- |
| **Atendimento Conversacional WhatsApp** | IA conduz conversa inicial no WhatsApp em linguagem natural acolhedora e precisa. | "Atendimento pelo WhatsApp — Respostas em segundos, entendendo a necessidade real do lead." |
| **Qualificação Estruturada de Lead** | Extração de critérios-chave da conversa (faixa de preço, bairro/localização, tipologia, finalidade). | "Qualificação Inteligente — Estruturação de perfil e preferências durante o diálogo." |
| **Busca Inteligente de Imóveis** | Encontra opções compatíveis no catálogo a partir do perfil e contexto da conversa (ex: Reserva Campolim). | "Busca Inteligente de Imóveis — Cruzamento contextual do catálogo com os desejos do lead." |
| **Validação de Disponibilidade** | Valida regras de negócio de horários e dias permitidos para visitas de forma determinística. | "Validação Inteligente de Disponibilidade — Respeita regras operacionais e horários de visitação." |
| **Segurança & Regras Determinísticas** | A IA interpreta a linguagem, mas a execução de agendamentos e transições é travada por regras determinísticas e idempotência (grounding absoluto). | Destaque Técnico: **"A IA interpreta a conversa. As regras determinísticas protegem a operação."** |
| **Sem Fricção Operacional** | Não exige que a equipe aprenda uma nova ferramenta ou mude seu fluxo de trabalho atual. | "A ImobFlow atua antes do corretor, sem exigir uma nova ferramenta para a sua equipe." |

---

## 7. Funcionalidades que NÃO Devem Ser Divulgadas (Anti-Claims)

1. ❌ **Métricas e SLAs Não Comprovados:** Proibido utilizar `< 5s`, `100% de resposta`, `SLA garantido` ou dados estatísticos fictícios. Utilizar: **"⚡ Atendimento em segundos"**.
2. ❌ **Dossiê do Corretor / Despacho Automático:** Não apresentar entrega de dossiê via WhatsApp/Slack/notificação push individual como funcionalidade finalizada, pois o adapter de notificação pertence à evolução arquitetural futura.
3. ❌ **Integrações Externas Inexistentes:** Proibido citar integração direta com Google Calendar, Microsoft Outlook, Zapier ou CRMs de terceiros.
4. ❌ **Dashboards & Telas Administrativas Fictícias:** Proibido renderizar gráficos de analytics em tempo real, painéis de monitoramento fictícios ou telas de login de corretores.
5. ❌ **Distribuição Automática de Leads (Round-Robin / Broker Assignment):** Proibido afirmar que corretores são automaticamente designados ou escalados por algoritmo.
6. ❌ **Canais de Contato Inventados:** Não criar telefones, e-mails ou formulários falsos no CTA. Utilizar os canais de contato reais já existentes ou torná-los claramente configuráveis.

---

## 8. Sugestão de Composição Visual (Estrutura da Landing Page `/imobflow`)

A Landing Page será estruturada em seções modulares e visualmente imersivas, utilizando o Design System do projeto:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ 1. HEADER                                                              │
│    Logo ImobFlow + Badge "By Richter" + ThemeToggle + CTA Header       │
├────────────────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION                                                        │
│    Badge: ⚡ Atendimento em segundos                                    │
│    Headline: "Seu próximo atendimento começa antes do corretor."        │
│    Subheadline: "A ImobFlow atende seus leads pelo WhatsApp em...       │
│    CTA: "Agendar Demonstração" / "Conhecer a Solução"                  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. A DOR DO MERCADO (3 CARDS)                                          │
│    • Lead Esperando (Demora no primeiro contato)                       │
│    • Contexto Perdido (Informações espalhadas em conversas)            │
│    • Oportunidade Perdida (Perda de timing comercial)                  │
├────────────────────────────────────────────────────────────────────────┤
│ 4. COMO FUNCIONA (FLUXO VISUAL EM ETAPAS)                              │
│    WhatsApp ➔ Entendimento ➔ Qualificação ➔ Imóveis ➔ Próximo Passo    │
├────────────────────────────────────────────────────────────────────────┤
│ 5. PRINCIPAIS CAPACIDADES (FEATURES BASEADAS EM PRODUCT TRUTH)         │
│    • Atendimento pelo WhatsApp                                         │
│    • Busca Inteligente de Imóveis (Reserva Campolim)                   │
│    • Qualificação Estruturada de Perfil                                │
│    • Validação Inteligente de Disponibilidade                          │
├────────────────────────────────────────────────────────────────────────┤
│ 6. PROVA VISUAL (MOCKUP FIEL BASEADO EM TRANSCRIÇÕES REAIS)            │
│    Mockup interativo de conversa WhatsApp com qualificação e entrega   │
│    de imóvel real sem elementos fictícios                              │
├────────────────────────────────────────────────────────────────────────┤
│ 7. DIFERENCIAL TÉCNICO & SEGURANÇA DETERMINÍSTICA                      │
│    "A IA interpreta a conversa. As regras determinísticas protegem     │
│     a operação." + Diagrama visual de proteção e grounding             │
├────────────────────────────────────────────────────────────────────────┤
│ 8. OPERAÇÃO SEM ATRITO                                                 │
│    "Trabalha antes do corretor, sem exigir nova ferramenta para a sua  │
│     equipe."                                                           │
├────────────────────────────────────────────────────────────────────────┤
│ 9. CTA FINAL & FOOTER                                                  │
│    Chamada comercial para contato/demonstração + Branding Richter      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Dependências Necessárias

- **NENHUMA dependência nova necessária.**
- Todas as necessidades de UI, tipografia, ícones, responsividade, temas e diagramas são 100% atendidas pelas bibliotecas já instaladas no projeto (`react`, `typescript`, `tailwindcss`, `lucide-react`, `cva`, `clsx`, `tailwind-merge`, `mermaid`).

---

## 10. Riscos e Dúvidas

1. **Destino do CTA de Demonstração:**
   - *Decisão sugerida:* Apontar o botão para o canal de contato profissional já consolidado no portfólio (ex: link direto do WhatsApp/LinkedIn do Luis Fernando Richter ou modal de contato existente), permitindo alteração fácil via constante de configuração.
2. **Suporte a Idiomas na Landing:**
   - A Landing Page do produto ImobFlow é focada no mercado imobiliário brasileiro (PT-BR). Podemos estruturar os textos primários em português, mantendo a compatibilidade caso chaves i18n sejam adicionadas.
3. **Desacoplamento Absoluto:**
   - A página será 100% estática e não fará requisições de rede para APIs do ImobFlow em runtime, garantindo disponibilidade contínua mesmo em ambientes locais ou offline.

---

### 🛑 Gate 1 — Ponto de Parada

> **M1 CONCLUÍDO COM SUCESSO.**  
> Nenhuma linha de código da Landing Page foi criada ou alterada. Nenhuma dependência foi instalada.  
> **Aguardando aprovação humana explícita para prosseguir para o M2.**
