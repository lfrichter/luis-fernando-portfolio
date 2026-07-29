import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProjectDetail } from '@/hooks/useProjectDetail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { X, ExternalLink, AlertTriangle, Loader2, CheckCircle2, Cpu, Wrench, ShieldAlert, Network, BarChart3 } from 'lucide-react';

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
        className="relative w-full max-w-4xl max-h-[92vh] bg-background border border-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background/95 backdrop-blur border-b border-border/80">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 bg-primary">
                {t('modal.headerBadge')}
              </Badge>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Tier {detail?.tier || 1} Architecture
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1">
              {detail?.title || '...'}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label={t('modal.close')}
            className="rounded-full hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8 flex-1">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
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
              <div className="flex flex-wrap items-center gap-3 pb-2 border-b border-border/40">
                <Badge variant="secondary" className="text-xs px-3 py-1 font-semibold">
                  {detail.category}
                </Badge>
                <span className="text-sm text-primary font-medium">
                  {detail.subtitle}
                </span>
              </div>

              {/* 1. Visão Geral */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary" /> {t('modal.overviewTitle')}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {detail.overview}
                </p>
              </div>

              {/* 2. Tech Stack */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-indigo-500" /> {t('modal.stackTitle')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-muted/60 text-xs px-3 py-1 font-medium border-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 3. Desafios & Soluções (Destaque Principal) */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-amber-500" /> {t('modal.challengesTitle')}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {detail.challengesAndSolutions.map((cs, idx) => (
                    <Card key={idx} className="bg-muted/30 border border-muted hover:border-amber-500/40 transition-colors">
                      <CardContent className="p-5 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                          <AlertTriangle className="w-4 h-4 shrink-0" />
                          <span>Challenge #{idx + 1}</span>
                        </div>
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          {cs.challenge}
                        </p>
                        <div className="pt-2 border-t border-border/50">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">
                            <CheckCircle2 className="w-4 h-4 shrink-0" />
                            <span>Applied Solution</span>
                          </div>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <Network className="w-5 h-5 text-emerald-500" /> {t('modal.archTitle')}
                </h3>
                <Card className="bg-zinc-950 border border-zinc-800 text-zinc-100 p-6 font-mono text-xs overflow-x-auto">
                  <div className="text-zinc-400 mb-3 text-[11px] font-sans flex items-center justify-between">
                    <span>Microservices & Data Pipeline Topology</span>
                    <Badge variant="outline" className="text-[10px] border-zinc-700 text-zinc-300">
                      Validated Architecture
                    </Badge>
                  </div>
                  <pre className="text-emerald-400 leading-relaxed overflow-x-auto">
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
                <h3 className="text-lg font-bold text-foreground mb-3">
                  👨‍💻 {t('modal.roleTitle')}
                </h3>
                <p className="text-sm text-muted-foreground italic mb-3">
                  {detail.roleDescription}
                </p>
                <ul className="space-y-2">
                  {detail.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Impacto & Métricas */}
              {detail.metrics && detail.metrics.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-500" /> {t('modal.metricsTitle')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {detail.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3.5 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Links Footer */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                {detail.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
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
