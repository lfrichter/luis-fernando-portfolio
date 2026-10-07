import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IMOBFLOW_CONFIG } from '@/config/imobflow';
import { MessageSquare, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ImobFlowCTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-14 rounded-3xl bg-card border-2 border-primary/20 shadow-xl space-y-6">
          <Badge
            variant="secondary"
            className="px-3.5 py-1 text-xs font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20"
          >
            Demonstração & Contato
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Pronto para acelerar o atendimento da sua imobiliária?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fale conosco e veja como a ImobFlow pode se integrar ao fluxo comercial da sua imobiliária.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <span>Falar pelo WhatsApp</span>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto text-base font-medium px-6 py-6 rounded-xl hover:bg-muted/60 transition-all"
            >
              <a
                href={`mailto:${IMOBFLOW_CONFIG.contact.email}?subject=Demonstração%20ImobFlow`}
                className="flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar E-mail</span>
              </a>
            </Button>
          </div>

          <div className="pt-6 border-t border-border/50 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Arquitetura desenvolvida por Richter Tecnologia
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Regras Determinísticas Protegidas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
