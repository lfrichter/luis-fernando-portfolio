import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export const ImobFlowNoFriction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-b from-card to-muted/30 border border-border/80 p-8 sm:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 font-medium">
              Simplicidade Operacional
            </Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              A ImobFlow trabalha antes do corretor,<br className="hidden sm:inline" /> sem exigir uma nova ferramenta para sua equipe.
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto pt-2">
              Sua equipe não precisa trocar de rotina, decorar novos painéis complexos ou perder tempo com cadastros manuais. O sistema atua na triagem inicial e entrega a oportunidade já aquecida.
            </p>
          </div>

          {/* 3 Simplicity Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-5 rounded-xl bg-card border border-border/60 flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Sem Nova Ferramenta para o Corretor</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Nenhum software pesado para instalar nem novos sistemas complexos para a equipe aprender.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border/60 flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Foco em Fechamento</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Seu corretor entra na conversa quando o lead já tem imóvel selecionado, orçamento alinhado e interesse real.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-card border border-border/60 flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Velocidade sem Ruído</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Atendimento que resolve as dúvidas iniciais na hora, sem deixar o cliente sem resposta no WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
