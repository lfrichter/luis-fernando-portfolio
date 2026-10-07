import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import logoImg from '@/assets/Brasao-bg-trans.png';

import { ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome }) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Logo with Isotype */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight hover:text-primary transition-colors group"
        >
          <img
            src={logoImg}
            alt="Richter Logo"
            className="h-8 w-8 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-extrabold text-foreground">Luis Fernando Richter</span>
          <span className="hidden md:inline-block text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
            v2026.1
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/"
            onClick={handleLogoClick}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-md hover:bg-muted/50"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Início</span>
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
