import React from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20 py-8 mt-16">
      <div className="container max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 font-medium">
          <Terminal className="w-4 h-4 text-primary" />
          <span>© {currentYear} Luis Fernando Richter. {t('footer.rights')}</span>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span>{t('footer.builtWith')}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>
      </div>
    </footer>
  );
};
