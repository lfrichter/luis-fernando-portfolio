import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCheck, Building, Calendar } from 'lucide-react';

export const ImobFlowVisualProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 text-primary border-primary/30 bg-primary/5 font-medium">
            Experiência Real
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Veja a ImobFlow em ação no WhatsApp
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Simulação baseada em fluxo real homologado do sistema.
          </p>
        </div>

        {/* WhatsApp Phone Mockup Container */}
        <div className="max-w-xl mx-auto">
          <Card className="overflow-hidden border-2 border-border/80 shadow-xl rounded-2xl bg-card">
            {/* WhatsApp Header Bar */}
            <div className="bg-[#075E54] dark:bg-[#128C7E]/90 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  IF
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight text-white">ImobFlow Assistant</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Atendimento Imobiliário
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-black/20 text-white text-[10px] border-0 font-normal">
                Verificado
              </Badge>
            </div>

            {/* WhatsApp Conversation Body */}
            <div className="p-4 sm:p-6 space-y-4 bg-muted/40 dark:bg-zinc-950/60 min-h-[460px] text-xs sm:text-sm font-sans">
              {/* Message 1: Lead */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#DCF8C6] dark:bg-[#005C4B] text-zinc-900 dark:text-zinc-100 p-3.5 rounded-2xl rounded-tr-none shadow-xs">
                  <p className="leading-relaxed">
                    Olá! Vi o anúncio de vocês. Estou procurando um apartamento no <strong>Campolim</strong>, com <strong>2 dormitórios</strong> e orçamento até <strong>R$ 500 mil</strong>.
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    <span>14:02</span>
                    <CheckCheck className="w-3 h-3 text-sky-500" />
                  </div>
                </div>
              </div>

              {/* Message 2: ImobFlow (Instant response & Matching) */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-card text-foreground p-3.5 rounded-2xl rounded-tl-none border border-border/50 shadow-xs space-y-2">
                  <p className="leading-relaxed">
                    Olá! Que excelente escolha. O Parque Campolim é uma das regiões mais valorizadas e com melhor infraestrutura.
                  </p>
                  <div className="p-2.5 rounded-lg bg-muted/60 border border-border/60 text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-foreground text-xs mb-1">
                      <Building className="w-3.5 h-3.5 text-primary" />
                      <span>Reserva Campolim</span>
                    </div>
                    <p className="text-muted-foreground text-[11px] leading-normal">
                      Apartamento com 2 dormitórios (1 suíte), varanda gourmet, 1 vaga coberta e lazer completo. A partir de R$ 480.000.
                    </p>
                  </div>
                  <p className="leading-relaxed">
                    Você prefere realizar visitas durante a semana ou aos sábados?
                  </p>
                  <div className="flex items-center justify-end mt-1 text-[10px] text-muted-foreground">
                    <span>14:02</span>
                  </div>
                </div>
              </div>

              {/* Message 3: Lead */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#DCF8C6] dark:bg-[#005C4B] text-zinc-900 dark:text-zinc-100 p-3.5 rounded-2xl rounded-tr-none shadow-xs">
                  <p className="leading-relaxed">
                    Prefiro aos sábados pela manhã!
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    <span>14:03</span>
                    <CheckCheck className="w-3 h-3 text-sky-500" />
                  </div>
                </div>
              </div>

              {/* Message 4: ImobFlow (Availability rule + Scheduling) */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-card text-foreground p-3.5 rounded-2xl rounded-tl-none border border-border/50 shadow-xs space-y-2">
                  <p className="leading-relaxed">
                    Perfeito! Aos sábados realizamos visitas entre <strong>09:00 e 12:00</strong>. Podemos agendar para o próximo sábado às <strong>10:00</strong> no Reserva Campolim?
                  </p>
                  <div className="flex items-center justify-end mt-1 text-[10px] text-muted-foreground">
                    <span>14:03</span>
                  </div>
                </div>
              </div>

              {/* Message 5: Lead */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#DCF8C6] dark:bg-[#005C4B] text-zinc-900 dark:text-zinc-100 p-3.5 rounded-2xl rounded-tr-none shadow-xs">
                  <p className="leading-relaxed">
                    Combinado, 10h está ótimo.
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">
                    <span>14:04</span>
                    <CheckCheck className="w-3 h-3 text-sky-500" />
                  </div>
                </div>
              </div>

              {/* Message 6: ImobFlow Confirmation */}
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-card text-foreground p-3.5 rounded-2xl rounded-tl-none border border-border/50 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Visita Pré-agendada</span>
                  </div>
                  <p className="leading-relaxed text-xs">
                    Confirmado para o próximo sábado às 10:00 no Reserva Campolim. Nossa equipe especialista já tem todos os detalhes para o atendimento!
                  </p>
                  <div className="flex items-center justify-end mt-1 text-[10px] text-muted-foreground">
                    <span>14:04</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-footer Note */}
            <div className="p-3 bg-muted/80 border-t border-border/60 text-center">
              <span className="text-[11px] text-muted-foreground font-mono">
                Fluxo comprovado em ambiente de homologação e regras operacionais.
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
