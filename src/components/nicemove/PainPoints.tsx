import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MessageSquareDashed, TrendingDown } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: Clock,
      title: 'Lead Esperando',
      description:
        'O cliente demonstra interesse em um imóvel, mas a resposta demora. No mercado imobiliário, a agilidade no primeiro contato é determinante.',
      impact: 'Tempo de espera elevado',
    },
    {
      icon: MessageSquareDashed,
      title: 'Contexto Perdido',
      description:
        'Orçamento, bairros de interesse e tipologia ficam espalhados ao longo de mensagens soltas, dificultando o trabalho do corretor.',
      impact: 'Informações desestruturadas',
    },
    {
      icon: TrendingDown,
      title: 'Oportunidade Perdida',
      description:
        'Quando o contato humano finalmente acontece horas depois, o cliente já perdeu o momento de compra ou foi atendido por outra imobiliária.',
      impact: 'Perda de timing comercial',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20 border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-3 text-destructive border-destructive/30 bg-destructive/5 font-medium">
            Gargalos Operacionais
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Onde as imobiliárias perdem negócios todos os dias
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            A lentidão e a falta de contexto no primeiro atendimento reduzem a conversão antes mesmo do corretor entrar em ação.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden border-border/60 bg-card hover:border-destructive/30 transition-all duration-200"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-destructive/40" />
                <CardHeader className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </CardDescription>
                  <div className="pt-4 mt-auto">
                    <span className="inline-block text-xs font-medium text-destructive/80 bg-destructive/5 px-2.5 py-1 rounded border border-destructive/10">
                      {item.impact}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
