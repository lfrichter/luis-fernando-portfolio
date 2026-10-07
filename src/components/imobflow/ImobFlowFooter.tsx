import React from 'react';
import logoImobFlow from '@/assets/imobflow/Logo-ImobFlow.png';
import logoRichter from '@/assets/Logo-Richter.png';
import brasaoImg from '@/assets/Brasao-bg-trans.png';
import { ArrowUpRight } from 'lucide-react';

interface ImobFlowFooterProps {
  onBackToPortfolio?: () => void;
}

export const ImobFlowFooter: React.FC<ImobFlowFooterProps> = ({ onBackToPortfolio }) => {
  const currentYear = new Date().getFullYear();

  const handleBack = (e: React.MouseEvent) => {
    if (onBackToPortfolio) {
      e.preventDefault();
      onBackToPortfolio();
    }
  };

  return (
    <footer className="border-t border-border bg-muted/20 py-12">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-xs text-muted-foreground">
        {/* Left: Product & Company Logos */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src={logoImobFlow}
            alt="ImobFlow Logo"
            className="h-8 w-auto object-contain"
          />
          <div className="hidden sm:block w-px h-6 bg-border" />
          <div className="flex items-center gap-2">
            <img
              src={logoRichter || brasaoImg}
              alt="Richter Logo"
              className="h-7 w-auto object-contain opacity-80"
            />
            <span className="font-medium text-foreground">
              Richter Tecnologia e Desenvolvimento
            </span>
          </div>
        </div>

        {/* Right: Copyright & Portfolio Link */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span>© {currentYear} ImobFlow. Todos os direitos reservados.</span>
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            <span>Portfólio Luis Fernando Richter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
