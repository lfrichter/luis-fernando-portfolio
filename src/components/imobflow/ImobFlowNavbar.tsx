import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IMOBFLOW_CONFIG } from '@/config/imobflow';
import logoImobFlow from '@/assets/imobflow/Logo-ImobFlow.png';
import { ArrowLeft, MessageSquare } from 'lucide-react';

interface ImobFlowNavbarProps {
  onBackToPortfolio?: () => void;
}

export const ImobFlowNavbar: React.FC<ImobFlowNavbarProps> = ({ onBackToPortfolio }) => {
  const handleBack = (e: React.MouseEvent) => {
    if (onBackToPortfolio) {
      e.preventDefault();
      onBackToPortfolio();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md transition-colors duration-200">
      <div className="container max-w-6xl mx-auto flex h-20 sm:h-24 items-center justify-between px-3 sm:px-6">
        {/* Brand Logo & Origin Badge - Enlarged & Zero Restriction */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="/imobflow" className="flex items-center p-0 m-0 group">
            <img
              src={logoImobFlow}
              alt="Logo ImobFlow"
              className="h-12 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>
          <Badge
            variant="outline"
            className="hidden md:inline-flex text-[11px] font-normal border-primary/30 text-muted-foreground"
          >
            by Richter Tecnologia
          </Badge>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back to Gateway */}
          <a
            href="/"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-md hover:bg-muted/50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Início</span>
          </a>

          <ThemeToggle />

          <Button
            size="sm"
            asChild
            className="hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
          >
            <a
              href={IMOBFLOW_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Demonstração</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default ImobFlowNavbar;
