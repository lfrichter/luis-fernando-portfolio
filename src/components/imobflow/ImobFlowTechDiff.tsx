import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export const ImobFlowTechDiff: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20 border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 text-primary border-primary/30 bg-primary/5 font-medium">
            Segurança & Confiabilidade
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            A IA interpreta a conversa.<br className="hidden sm:inline" />
            As regras determinísticas protegem a operação.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Diferente de chatbots genéricos que podem alucinar informações ou prometer o que não devem, a ImobFlow separa a interpretação linguística das regras rígidas do seu negócio.
          </p>
        </div>

        {/* Technical Architecture Comparison / Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Box 1: Como Outros Chatbots Fazem (Risco) */}
          <Card className="border-border/60 bg-card/60 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30" />
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <ShieldAlert className="w-5 h-5 text-destructive/80" />
                <span className="text-xs font-semibold uppercase tracking-wider">Chatbots Genéricos</span>
              </div>
              <CardTitle className="text-lg font-bold text-foreground">
                Autoridade Irrestrita ao Modelo
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-3 flex-1 flex flex-col justify-between">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Deixam a IA decidir datas, confirmar visitas em horários proibidos e inventar condições sem validação rígida de backend.
              </p>
              <div className="p-3.5 rounded-lg bg-destructive/5 border border-destructive/20 text-xs text-destructive/90 space-y-1.5">
                <div className="font-semibold flex items-center gap-1.5">
                  <span>⚠️ Riscos Operacionais:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-muted-foreground">
                  <li>Agendamento em feriados ou fora de expediente</li>
                  <li>Promessas de valores ou imóveis inexistentes</li>
                  <li>Falta de isolamento e rastreabilidade</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Box 2: Como a ImobFlow Opera (Proteção Determinística) */}
          <Card className="border-primary/40 bg-card relative overflow-hidden shadow-md flex flex-col">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <CardHeader className="p-6 pb-3">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Padrão ImobFlow</span>
              </div>
              <CardTitle className="text-lg font-bold text-foreground">
                Grounding & Regras Determinísticas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-2 space-y-3 flex-1 flex flex-col justify-between">
              <p className="text-xs text-muted-foreground leading-relaxed">
                A IA atua exclusivamente na compreensão da linguagem. Nenhuma ação no mundo real acontece sem aprovação da camada determinística.
              </p>
              <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/20 text-xs text-foreground space-y-1.5">
                <div className="font-semibold text-primary flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Proteções Ativas:</span>
                </div>
                <ul className="space-y-1.5 text-[11px] text-muted-foreground">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Validação rígida de horários e dias permitidos</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Idempotência (evita disparos ou mensagens duplicadas)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Isolamento total de dados e regras por imobiliária</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Pipeline Block */}
        <div className="mt-10 p-5 rounded-xl bg-card border border-border/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-mono font-bold text-primary">
                1
              </div>
              <div>
                <span className="font-semibold text-foreground block">WhatsApp Lead</span>
                <span className="text-[11px] text-muted-foreground">Mensagem recebida</span>
              </div>
            </div>

            <span className="text-muted-foreground font-mono">→</span>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-mono font-bold text-primary">
                2
              </div>
              <div>
                <span className="font-semibold text-foreground block">IA de Linguagem</span>
                <span className="text-[11px] text-muted-foreground">Extrai intenção & perfil</span>
              </div>
            </div>

            <span className="text-muted-foreground font-mono">→</span>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-primary">
                3
              </div>
              <div>
                <span className="font-semibold text-primary block">Regras Determinísticas</span>
                <span className="text-[11px] text-muted-foreground">Valida disponibilidade</span>
              </div>
            </div>

            <span className="text-muted-foreground font-mono">→</span>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center font-mono font-bold text-emerald-600 dark:text-emerald-400">
                ✓
              </div>
              <div>
                <span className="font-semibold text-foreground block">Ação Segura</span>
                <span className="text-[11px] text-muted-foreground">Agendamento protegido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
