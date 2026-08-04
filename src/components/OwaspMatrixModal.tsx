import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShieldCheck, X, ExternalLink, Lock, Key, AlertOctagon, Terminal, ShieldAlert, Cpu, Database, Eye } from 'lucide-react';
import type { IOwaspCategory } from '@/types';

interface OwaspMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (detailKey: string) => void;
}

export const OwaspMatrixModal: React.FC<OwaspMatrixModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const { t, i18n } = useTranslation();
  const isPt = (i18n.language || 'en').startsWith('pt');

  if (!isOpen) return null;

  const owaspData: (IOwaspCategory & { icon: React.ReactNode })[] = [
    {
      code: 'A01:2021',
      title: 'Broken Access Control',
      icon: <Lock className="w-4 h-4 text-rose-500 shrink-0" />,
      projects: [
        {
          name: 'Canaoaves Admin',
          detailKey: 'canaoaves',
          mitigation: isPt
            ? 'Bypass seguro de RLS isolado exclusivamente em Next.js Server Actions (SERVICE_ROLE_KEY nunca exposta no client).'
            : 'Safe RLS bypass strictly isolated within Next.js Server Actions (SERVICE_ROLE_KEY never exposed to client).',
        },
        {
          name: 'EuPizza SaaS',
          detailKey: 'eupizza',
          mitigation: isPt
            ? 'Isolamento de dados SaaS multi-tenant garantido via Row Level Security (RLS) no Supabase.'
            : 'Multi-tenant SaaS data isolation enforced via Supabase Row Level Security (RLS).',
        },
        {
          name: 'Favorite Products API',
          detailKey: 'favorite_products',
          mitigation: isPt
            ? 'Mitigação de IDOR via validação estrita de propriedade em Form Requests e testes automatizados com HTTP 403.'
            : 'IDOR mitigation via strict resource ownership validation in Form Requests and automated HTTP 403 test coverage.',
        },
        {
          name: 'OnePush & Índicos',
          detailKey: 'onepush',
          mitigation: isPt
            ? 'Controles estritos de privilégios na funcionalidade de impersonation e middlewares dinâmicos de subdomínio.'
            : 'Strict privilege controls on user impersonation features and dynamic subdomain middlewares.',
        },
        {
          name: 'Turno (TurnoverBnB)',
          detailKey: 'toot',
          mitigation: isPt
            ? 'Correção de vulnerabilidades pós-pentest e fortalecimento do gerenciamento de sessões simultâneas.'
            : 'Post-pentest security fixes and hardening of concurrent session management.',
        },
      ],
    },
    {
      code: 'A02:2021',
      title: 'Cryptographic Failures',
      icon: <Key className="w-4 h-4 text-amber-500 shrink-0" />,
      projects: [
        {
          name: 'EuPizza / LiveKit',
          detailKey: 'eupizza',
          mitigation: isPt
            ? 'Validação de integridade via tokens JWT e verificação de assinatura HMAC (X-Signature) nas integrações.'
            : 'Integrity validation using JWT tokens and HMAC signature verification (X-Signature) on Webhooks.',
        },
        {
          name: 'FAISS Semantic Cache',
          detailKey: 'semantic_cache',
          mitigation: isPt
            ? 'Geração de embeddings (Ollama) e busca vetorial (FAISS) 100% locais, eliminando envio de dados para APIs terceiras.'
            : '100% local embeddings (Ollama) and vector search (FAISS), eliminating sensitive data transmission to external APIs.',
        },
      ],
    },
    {
      code: 'A03:2021',
      title: 'Injection',
      icon: <Terminal className="w-4 h-4 text-emerald-500 shrink-0" />,
      projects: [
        {
          name: 'SmartShorts UI',
          detailKey: 'smart_shorts',
          mitigation: isPt
            ? 'Eliminação de XSS migrando a retenção de JWTs do localStorage para cookies httpOnly gerenciados por Route Handlers.'
            : 'XSS mitigation by migrating JWT tokens from browser localStorage to server-managed httpOnly cookies.',
        },
        {
          name: 'Canaoaves',
          detailKey: 'canaoaves',
          mitigation: isPt
            ? 'Sanitização rigorosa e validação de payload tipado no client e server com Zod e React Hook Form.'
            : 'Client and server-side typed payload sanitization and validation using Zod & React Hook Form.',
        },
      ],
    },
    {
      code: 'A04:2021',
      title: 'Insecure Design',
      icon: <AlertOctagon className="w-4 h-4 text-purple-500 shrink-0" />,
      projects: [
        {
          name: 'EuPizza / Voice AI',
          detailKey: 'eupizza',
          mitigation: isPt
            ? 'Flood protection e rate limiting na infraestrutura SIP de telefonia para prevenir ataques de negação de serviço (DoS).'
            : 'SIP telephony flood protection and rate limiting implementation to prevent Denial of Service (DoS) attacks.',
        },
        {
          name: 'Framework v2.0 Master',
          detailKey: 'sdlc_ia',
          mitigation: isPt
            ? 'Execução de agentes de IA sob arquitetura Zero-Trust em ambientes isolados (Git Worktrees) e mecanismos Jidoka/Andon.'
            : 'Zero-Trust AI agent execution inside isolated Git Worktrees with automated Jidoka/Andon safety limits.',
        },
      ],
    },
    {
      code: 'A05:2021',
      title: 'Security Misconfiguration',
      icon: <ShieldAlert className="w-4 h-4 text-blue-500 shrink-0" />,
      projects: [
        {
          name: 'Favorite Products API',
          detailKey: 'favorite_products',
          mitigation: isPt
            ? 'Tratamento de exceções customizadas por handler global devolvendo o status semântico 503 sem vazar stack traces.'
            : 'Global exception handler returning semantic HTTP 503 responses without exposing internal stack traces.',
        },
      ],
    },
    {
      code: 'A06:2021',
      title: 'Vulnerable & Outdated Components',
      icon: <Cpu className="w-4 h-4 text-indigo-500 shrink-0" />,
      projects: [
        {
          name: 'SmartShorts API',
          detailKey: 'smart_shorts',
          mitigation: isPt
            ? 'Gerenciamento de dependências Java centralizado com BOM (Bill of Materials) do Spring Cloud.'
            : 'Centralized Java backend dependency management using Spring Cloud BOM (Bill of Materials).',
        },
      ],
    },
    {
      code: 'A07:2021',
      title: 'Identification & Auth Failures',
      icon: <Key className="w-4 h-4 text-teal-500 shrink-0" />,
      projects: [
        {
          name: 'SmartShorts & Spring Security',
          detailKey: 'smart_shorts',
          mitigation: isPt
            ? 'Proteção RBAC via Spring Security e proxy de autenticação Next.js com cookies seguros.'
            : 'Spring Security RBAC enforcement alongside Next.js authentication proxy with secure cookies.',
        },
        {
          name: 'Favorite Products API',
          detailKey: 'favorite_products',
          mitigation: isPt
            ? 'Proteção de endpoints RESTful com autenticação baseada em tokens via Laravel Sanctum.'
            : 'RESTful API endpoints secured via lightweight token-based authentication (Laravel Sanctum).',
        },
        {
          name: 'OnePush SaaS',
          detailKey: 'onepush',
          mitigation: isPt
            ? 'Autenticação JWT segura via tymondesigns/jwt-auth para rotas transacionais.'
            : 'Secure JWT authentication via tymondesigns/jwt-auth for transaction routes.',
        },
      ],
    },
    {
      code: 'A08:2021',
      title: 'Software & Data Integrity Failures',
      icon: <Database className="w-4 h-4 text-cyan-500 shrink-0" />,
      projects: [
        {
          name: 'Shosales Review',
          detailKey: 'shosales',
          mitigation: isPt
            ? 'Bateria de testes E2E automatizados como pipeline gatekeeper para prevenir regressões e falhas de integridade.'
            : 'Automated E2E testing battery acting as a pipeline gatekeeper to prevent regressions.',
        },
      ],
    },
    {
      code: 'A09:2021',
      title: 'Security Logging & Monitoring Failures',
      icon: <Eye className="w-4 h-4 text-rose-400 shrink-0" />,
      projects: [
        {
          name: 'Canaoaves',
          detailKey: 'canaoaves',
          mitigation: isPt
            ? 'Captura global em tempo de execução via ErrorBoundary e persistência de stack trace na tabela client_errors.'
            : 'Global runtime exception capture via ErrorBoundary and persistence in client_errors database table.',
        },
        {
          name: 'OnePush',
          detailKey: 'onepush',
          mitigation: isPt
            ? 'Trilha de auditoria imutável para ações administrativas com a biblioteca spatie/activitylog.'
            : 'Immutable audit trail tracking administrative actions using spatie/activitylog package.',
        },
        {
          name: 'Turno (TurnoverBnB)',
          detailKey: 'toot',
          mitigation: isPt
            ? 'Observabilidade de erros e telemetria em tempo real com Bugsnag.'
            : 'Real-time error tracking and telemetry via Bugsnag.',
        },
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-b border-slate-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-blue-600 dark:bg-blue-500 text-white font-bold">
                {t('owaspModal.badge')}
              </Badge>
              <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                OWASP Top 10 (2021) Standard
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1.5 tracking-tight flex items-center gap-2.5">
              <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              <span>{t('owaspModal.title')}</span>
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label={t('owaspModal.close')}
            className="rounded-full text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 flex-1">
          <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            {t('owaspModal.subtitle')}
          </p>

          {/* Matrix Cards List */}
          <div className="space-y-4">
            {owaspData.map((cat) => (
              <div
                key={cat.code}
                className="border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-zinc-900/40 hover:border-blue-500/40 transition-colors"
              >
                {/* Category Bar */}
                <div className="p-3.5 bg-slate-100/80 dark:bg-zinc-900/90 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {cat.icon}
                    <Badge variant="outline" className="font-mono font-bold text-xs bg-white dark:bg-zinc-950 border-slate-300 dark:border-zinc-700">
                      {cat.code}
                    </Badge>
                    <span className="font-bold text-sm text-slate-900 dark:text-zinc-100">
                      {cat.title}
                    </span>
                  </div>
                </div>

                {/* Mitigations List */}
                <div className="p-4 space-y-3">
                  {cat.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="flex flex-col md:flex-row md:items-start gap-2.5 pb-2.5 border-b border-slate-200/60 dark:border-zinc-800/60 last:border-0 last:pb-0">
                      <div className="md:w-52 shrink-0">
                        {proj.detailKey && onSelectProject ? (
                          <button
                            onClick={() => {
                              onClose();
                              onSelectProject(proj.detailKey!);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer group text-left"
                          >
                            <span>{proj.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                          </button>
                        ) : (
                          <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                            {proj.name}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed flex-1">
                        {proj.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
