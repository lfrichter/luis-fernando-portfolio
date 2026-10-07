import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IMOBFLOW_CONFIG } from '@/config/imobflow';
import { MessageSquare, ArrowDown, ShieldCheck, Zap, Sparkles, Building2 } from 'lucide-react';

export const ImobFlowHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Product Badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <Badge
            variant="secondary"
            className="px-3.5 py-1 text-xs sm:text-sm font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20 shadow-xs"
          >
            {IMOBFLOW_CONFIG.badge}
          </Badge>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] max-w-4xl mx-auto">
          {IMOBFLOW_CONFIG.tagline}
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {IMOBFLOW_CONFIG.description}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02]"
          >
            <a
              href={IMOBFLOW_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Agendar Demonstração</span>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto text-base font-medium px-6 py-6 rounded-xl hover:bg-muted/60 transition-all"
          >
            <a href="#como-funciona" className="flex items-center justify-center gap-2">
              <span>Como Funciona</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Trust Signals (Comprovados / Realistas) */}
        <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/40">
            <Zap className="w-5 h-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">Sem Espera</span>
              <span className="text-[11px] text-muted-foreground">Resposta imediata</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/40">
            <Building2 className="w-5 h-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">Catálogo Real</span>
              <span className="text-[11px] text-muted-foreground">Busca compatível</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/40">
            <Sparkles className="w-5 h-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">Qualificação</span>
              <span className="text-[11px] text-muted-foreground">Orçamento e perfil</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-card/50 border border-border/40">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">Determinístico</span>
              <span className="text-[11px] text-muted-foreground">Regras protegidas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
