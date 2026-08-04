import { GithubIcon } from '@/components/icons/SocialIcons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProjectDetail } from '@/hooks/useProjectDetail';
import { AlertTriangle, BarChart3, CheckCircle2, Cpu, ExternalLink, Loader2, Network, ShieldAlert, ShieldCheck, Wrench, X } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  detailKey: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  detailKey,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const { detail, isLoading, error } = useProjectDetail(isOpen ? detailKey : null);

  if (!isOpen || !detailKey) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/95 dark:bg-zinc-950/95 backdrop-blur border-b border-slate-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-primary text-primary-foreground font-bold">
                {t('modal.headerBadge')}
              </Badge>
              <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                Tier {detail?.tier || 1} Architecture
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1.5 tracking-tight">
              {detail?.title || '...'}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label={t('modal.close')}
            className="rounded-full text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500 dark:text-zinc-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
              <p className="text-sm font-medium">{t('modal.loading')}</p>
            </div>
          )}

          {error && (
            <Card className="border-destructive/40 bg-destructive/10 text-destructive p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{t('modal.errorTitle')}</h3>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              </div>
            </Card>
          )}

          {detail && !isLoading && !error && (
            <>
              {/* Subtitle & Category */}
              <div className="flex flex-wrap items-center gap-3 pb-2 border-b border-slate-200 dark:border-zinc-800">
                <Badge variant="secondary" className="text-xs px-3 py-1 font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200">
                  {detail.category}
                </Badge>
                <span className="text-sm text-primary font-bold">
                  {detail.subtitle}
                </span>
              </div>

              {/* 1. Visão Geral */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" /> {t('modal.overviewTitle')}
                </h3>
                <p className="text-slate-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                  {detail.overview}
                </p>
              </div>

              {/* 2. Tech Stack */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> {t('modal.stackTitle')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 text-xs px-3 py-1 font-medium border-slate-300 dark:border-zinc-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 3. Desafios & Soluções (Destaque Principal) */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" /> {t('modal.challengesTitle')}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {detail.challengesAndSolutions.map((cs, idx) => (
                    <Card key={idx} className="bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 hover:border-amber-500/50 transition-colors">
                      <CardContent className="p-5 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>Challenge #{idx + 1}</span>
                        </div>
                        <p className="text-sm font-bold text-slate-900 dark:text-zinc-100 leading-snug">
                          {cs.challenge}
                        </p>
                        <div className="pt-2 border-t border-slate-200 dark:border-zinc-800">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Applied Solution</span>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                            {cs.solution}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* 4. Diagrama de Arquitetura */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> {t('modal.archTitle')}
                </h3>
                <Card className="bg-slate-900 dark:bg-zinc-950 border border-slate-800 dark:border-zinc-800 text-slate-100 dark:text-zinc-100 p-6 font-mono text-xs overflow-x-auto shadow-md">
                  <div className="text-slate-300 dark:text-zinc-300 mb-3 text-[11px] font-sans flex items-center justify-between font-medium">
                    <span className="font-bold text-slate-100 dark:text-zinc-100">Microservices & Data Pipeline Topology</span>
                    <Badge variant="outline" className="text-[10px] border-slate-700 dark:border-zinc-700 text-slate-200 dark:text-zinc-300 bg-slate-800/80 dark:bg-zinc-900">
                      Validated Architecture
                    </Badge>
                  </div>
                  <pre className="text-emerald-400 dark:text-emerald-400 leading-relaxed overflow-x-auto font-semibold">
                    {detail.architectureDiagramMermaid || `+-------------------------------------------------------------+
|              Client Requests / Frontend Layer               |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|     API Gateway / Routing Proxy & Auth Token Verification   |
+-------------------------------------------------------------+
               /                              \\
              v                                v
+---------------------------+    +----------------------------+
|    AI Services & Queues   |    |  PostgreSQL Persistence    |
| (FAISS, LiveKit, Horizon) |    |  (Supabase RLS & Caches)   |
+---------------------------+    +----------------------------+`}
                  </pre>
                </Card>
              </div>

              {/* 5. Papel & Responsabilidades */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  👨‍💻 {t('modal.roleTitle')}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 italic mb-3">
                  {detail.roleDescription}
                </p>
                <ul className="space-y-2">
                  {detail.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Impacto & Métricas */}
              {detail.metrics && detail.metrics.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-400" /> {t('modal.metricsTitle')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {detail.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3.5 py-1.5 text-xs font-semibold bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* 7. Segurança & OWASP Top 10 */}
              {detail.owaspMitigations && detail.owaspMitigations.length > 0 && (
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" /> {t('modal.owaspTitle')}
                  </h3>
                  <Card className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 p-4 rounded-xl">
                    <div className="space-y-3">
                      {detail.owaspMitigations.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2.5 pb-2.5 border-b border-blue-100 dark:border-blue-900/40 last:border-0 last:pb-0">
                          <Badge variant="default" className="w-fit text-[10px] uppercase font-mono font-bold bg-blue-600 dark:bg-blue-500 text-white shrink-0 px-2 py-0.5">
                            {item.code}
                          </Badge>
                          <div>
                            <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-blue-100">
                              {item.title}
                            </p>
                            <p className="text-xs text-slate-600 dark:text-zinc-300 mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {/* Links Footer */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-zinc-800">
                {detail.githubUrl && (
                  <Button variant="outline" size="sm" asChild className="border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800">
                    <a
                      href={detail.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{t('modal.viewGithub')}</span>
                    </a>
                  </Button>
                )}
                {detail.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a
                      href={detail.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('modal.viewLive')}</span>
                    </a>
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
