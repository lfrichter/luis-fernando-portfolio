import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Search, Filter, Calendar, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Atendimento pelo WhatsApp',
      tag: 'Canal Nativo',
      description:
        'A IA conduz a conversa com naturalidade, compreendendo perguntas abertas, dúvidas sobre bairros e momentos de decisão.',
      bullets: [
        'Respostas contextuais e humanizadas',
        'Compreensão profunda da intenção do cliente',
        'Atendimento imediato no canal que o cliente já usa',
      ],
    },
    {
      icon: Search,
      title: 'Busca Inteligente de Imóveis',
      tag: 'Recomendação Contextual',
      description:
        'Localiza rapidamente as melhores opções do catálogo com base nas preferências, faixa de preço e localização desejada.',
      bullets: [
        'Cruzamento instantâneo com o catálogo de imóveis',
        'Sugestões alinhadas ao momento do lead',
        'Apresentação clara dos diferenciais do imóvel',
      ],
    },
    {
      icon: Filter,
      title: 'Qualificação Estruturada',
      tag: 'Inteligência Comercial',
      description:
        'Organiza e extrai os dados essenciais da conversa para que a equipe comercial receba a oportunidade pronta para negociação.',
      bullets: [
        'Mapeamento de orçamento e forma de pagamento',
        'Definição de número de dormitórios e localização',
        'Identificação de urgência e prazo de compra',
      ],
    },
    {
      icon: Calendar,
      title: 'Validação Inteligente de Disponibilidade',
      tag: 'Regras de Negócio',
      description:
        'Checagem automática de regras operacionais de dias e horários permitidos para visitas, eliminando conflitos de agenda.',
      bullets: [
        'Respeito aos horários e diretrizes da imobiliária',
        'Validação determinística de janelas de visitação',
        'Pré-agendamento seguro e sem sobreposição',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/20 border-b border-border/40">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 text-primary border-primary/30 bg-primary/5 font-medium">
            Capacidades do Produto
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Recursos projetados para gerar reuniões e visitas qualificadas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Funcionalidades focadas no resultado do negócio: mais velocidade, qualificação e proteção às regras da operação.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border/60 bg-card hover:border-primary/40 transition-all duration-200"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="secondary" className="text-[11px] font-normal">
                      {feature.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="border-t border-border/40 pt-4 space-y-2">
                    {feature.bullets.map((bullet, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
