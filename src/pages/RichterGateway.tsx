import avatarImg from '@/assets/AvatarCircle.png';
import brasaoImg from '@/assets/Brasao-bg-trans.png';
import logoNiceMove from '@/assets/NiceMove/LogoNiceMoveRetangle.png';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowRight, Bot, Building2, Cpu, Sparkles } from 'lucide-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface RichterGatewayProps {
  onNavigateToPortfolio: () => void;
}

export const RichterGateway: React.FC<RichterGatewayProps> = ({
  onNavigateToPortfolio,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = 'Richter | Software, AI & Product Engineering';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between font-sans selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Header / Brand Bar */}
      <header className="w-full py-6 px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={brasaoImg}
            alt="Brasão Richter"
            className="h-8 w-auto object-contain opacity-90"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-foreground uppercase">
              Richter
            </span>
            <span className="text-[10px] text-muted-foreground font-mono">
              {t('gateway.brandSubtitle', 'Tecnologia & Inovação')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      {/* Main Gateway Selection Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 md:py-12 max-w-5xl mx-auto w-full">
        {/* Editorial Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <Badge
            variant="outline"
            className="mb-4 text-xs font-semibold px-3 py-1 border-primary/30 text-primary bg-primary/5"
          >
            {t('gateway.badge', 'Software, AI & Product Engineering')}
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            {t('gateway.title', 'O que você deseja conhecer?')}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            {t('gateway.subtitle', 'Escolha uma das portas abaixo para explorar o produto ou o histórico de engenharia.')}
          </p>
        </div>

        {/* 2 Main Legitimate Gateways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
          {/* Gateway 1: NiceMove (Product / SaaS) */}
          <a
            href="https://nicemove.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group block text-left outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
          >
            <Card className="h-full border border-border/80 bg-card/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:border-primary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group-hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/30 group-hover:bg-primary transition-colors" />

              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="secondary" className="text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {t('gateway.nicemove.badge', t('gateway.imobflow.badge', 'Produto SaaS & IA'))}
                  </Badge>
                  <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Product Logo & Title to the right */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={logoNiceMove}
                    alt="Logo NiceMove"
                    className="h-14 sm:h-16 w-auto object-contain shrink-0"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-mono font-medium text-muted-foreground block leading-snug">
                      {t('gateway.nicemove.subtitle', t('gateway.imobflow.subtitle', 'Acelerador de Vendas Imobiliárias'))}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('gateway.nicemove.description', t('gateway.imobflow.description', 'Atendimento inteligente no WhatsApp em segundos. Qualificação de leads, busca semântica de imóveis e agendamento protegido por regras determinísticas.'))}
                </p>
              </div>

              {/* Action Button Link */}
              <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-primary font-semibold text-sm group-hover:text-primary">
                <span>{t('gateway.nicemove.cta', t('gateway.imobflow.cta', 'Explorar NiceMove'))}</span>
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </a>

          {/* Gateway 2: Luís Fernando Richter (Engineering & Architecture) */}
          <a
            href="/portfolio"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToPortfolio();
            }}
            className="group block text-left outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
          >
            <Card className="h-full border border-border/80 bg-card/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl hover:border-primary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group-hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-border group-hover:bg-primary transition-colors" />

              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="outline" className="text-xs font-semibold text-foreground border-border">
                    <Cpu className="w-3 h-3 mr-1 text-primary" />
                    {t('gateway.portfolio.badge', 'Engenharia & Arquitetura')}
                  </Badge>
                  <div className="w-9 h-9 rounded-lg bg-muted text-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>

                {/* Person Name & Title */}
                <div className="flex items-center gap-3.5 mb-4">
                  <img
                    src={avatarImg}
                    alt="Luis Fernando Richter"
                    className="w-11 h-11 rounded-full object-cover border border-border/80 shrink-0"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-foreground leading-tight">
                      Luis Fernando Richter
                    </h2>
                    <span className="text-xs font-mono text-muted-foreground block">
                      {t('gateway.portfolio.role', 'Tech Lead & AI Solution Architect')}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('gateway.portfolio.description', '15+ anos de experiência construindo sistemas distribuídos, plataformas de alta vazão, arquiteturas limpas e soluções nativas em Inteligência Artificial.')}
                </p>
              </div>

              {/* Action Button Link */}
              <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-foreground font-semibold text-sm group-hover:text-primary transition-colors">
                <span>{t('gateway.portfolio.cta', 'Ver Portfólio Completo')}</span>
                <div className="w-8 h-8 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </a>
        </div>
      </main>

      {/* Clean Bottom Footer */}
      <footer className="w-full py-6 px-6 text-center text-xs text-muted-foreground border-t border-border/40">
        <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} {t('gateway.footer.rights', 'Richter Tecnologia e Desenvolvimento')}</span>
          <span className="text-[11px] font-mono">{t('gateway.footer.location', 'Sorocaba, SP • Brasil')}</span>
        </div>
      </footer>
    </div>
  );
};

export default RichterGateway;
