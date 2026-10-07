import React from 'react';
import brasaoImg from '@/assets/Brasao-bg-trans.png';
import logoImobFlow from '@/assets/imobflow/Logo-ImobFlow.png';
import logoRichter from '@/assets/Logo-Richter.png';

interface ImobFlowFooterProps {
  onBackToPortfolio?: () => void;
}

export const ImobFlowFooter: React.FC<ImobFlowFooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20 py-10">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        {/* Left: Product & Company Logos */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <img
            src={logoImobFlow}
            alt="ImobFlow Logo"
            className="h-12 sm:h-16 w-auto object-contain"
          />
          <div className="hidden sm:block w-px h-8 bg-border" />
          <div className="flex items-center gap-2.5">
            <img
              src={logoRichter || brasaoImg}
              alt="Richter Logo"
              className="h-8 w-auto object-contain opacity-85"
            />
            <span className="font-medium text-foreground">
              Richter Tecnologia e Desenvolvimento
            </span>
          </div>
        </div>

        {/* Right: Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span>© {currentYear} ImobFlow. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};

export default ImobFlowFooter;
