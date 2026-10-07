import React from 'react';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, BrainCircuit, UserCheck, Home, CalendarCheck, ArrowRight } from 'lucide-react';

export const ImobFlowHowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'O lead entra em contato pelo canal de preferência buscando informações sobre imóveis.',
    },
    {
      step: '02',
      icon: BrainCircuit,
      title: 'Entendimento',
      description: 'A IA interpreta a linguagem natural, o tom e a intenção de compra ou locação do cliente.',
    },
    {
      step: '03',
      icon: UserCheck,
      title: 'Qualificação',
      description: 'Estruturação fluida de dados fundamentais: orçamento, localização desejada e tipologia.',
    },
    {
      step: '04',
      icon: Home,
      title: 'Imóveis Compatíveis',
      description: 'Cruzamento contextual com o catálogo para apresentar opções que realmente fazem sentido.',
    },
    {
      step: '05',
      icon: CalendarCheck,
      title: 'Próximo Passo',
      description: 'Condução orientada para validação de horários de visitação e continuidade do atendimento.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 text-primary border-primary/30 bg-primary/5 font-medium">
            Jornada do Atendimento
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Como a ImobFlow conduz cada conversa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Um fluxo linear e objetivo, da primeira mensagem do cliente até a preparação para o corretor.
          </p>
        </div>

        {/* Steps Grid / Process Flow */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col p-5 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-primary/80 bg-primary/10 px-2 py-0.5 rounded">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border items-center justify-center text-muted-foreground">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
