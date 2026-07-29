import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const currentLang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-1.5 text-xs font-semibold rounded-full border-border bg-background hover:bg-accent hover:text-accent-foreground px-3 py-1 shadow-sm transition-all"
      aria-label="Toggle language"
      title={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
    >
      <Globe className="w-3.5 h-3.5 text-primary" />
      <span className="uppercase tracking-wider font-bold">
        {currentLang === 'pt' ? 'PT 🇧🇷' : 'EN 🇺🇸'}
      </span>
    </Button>
  );
};
