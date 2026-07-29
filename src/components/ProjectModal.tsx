import React from 'react';
import { useProjectDetail } from '@/hooks/useProjectDetail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { X, ExternalLink, AlertTriangle, Loader2, CheckCircle2 } from 'lucide-react';

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
  const { detail, isLoading, error } = useProjectDetail(isOpen ? detailKey : null);

  if (!isOpen || !detailKey) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-xl shadow-2xl overflow-y-auto flex flex-col my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background/95 backdrop-blur border-b border-border">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Detalhes Arquiteturais & Eng.
            </span>
            <h2 className="text-2xl font-bold text-foreground mt-1">
              {detail?.title || 'Carregando Projeto...'}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Fechar modal"
            className="rounded-full hover:bg-muted"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 flex-1">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Loader2 className="w-8 h-8 animate-spin mb-3 text-primary" />
              <p>Carregando documentação detalhada da arquitetura...</p>
            </div>
          )}

          {error && (
            <Card className="border-destructive/40 bg-destructive/10 text-destructive p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Erro ao carregar detalhes</h3>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              </div>
            </Card>
          )}

          {detail && !isLoading && !error && (
            <>
              {/* Subtitle & Category */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default" className="text-xs px-3 py-1">
                  {detail.category}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium">
                  {detail.subtitle}
                </span>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span>🎯 Visão Geral & Arquitetura</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {detail.overview}
                </p>
              </div>

              {/* Role & Responsibilities */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span>👨‍💻 Meu Papel & Responsabilidades</span>
                </h3>
                <p className="text-sm text-muted-foreground mb-3 italic">
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

              {/* Challenges & Solutions */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span>⚡ Desafios & Soluções</span>
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {detail.challengesAndSolutions.map((cs, idx) => (
                    <Card key={idx} className="bg-muted/30 border-muted">
                      <CardContent className="p-4 space-y-2">
                        <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                          Desafio
                        </div>
                        <p className="text-sm font-medium text-foreground">{cs.challenge}</p>
                        <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wider pt-2">
                          Solução Implementada
                        </div>
                        <p className="text-sm text-muted-foreground">{cs.solution}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Metrics if available */}
              {detail.metrics && detail.metrics.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span>📊 Impacto & Métricas</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {detail.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary" className="px-3 py-1 text-xs">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  🛠️ Pilha de Tecnologias (Tech Stack)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-muted/50 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

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
                      <span>Ver Código no GitHub</span>
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
                      <span>Acessar Projeto em Produção</span>
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
