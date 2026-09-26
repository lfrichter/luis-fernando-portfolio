import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import logoImg from '@/assets/Brasao-bg-trans.png';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20 py-10 mt-16">
      <div className="container max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Richter Tecnologia e Desenvolvimento"
            className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-foreground tracking-tight">
              © {currentYear} Richter Tecnologia e Desenvolvimento
            </span>
            <span className="text-[11px] text-muted-foreground">
              Luis Fernando Richter • {t('footer.rights')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 font-mono text-[11px]">
          <span>{t('footer.builtWith')}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 shrink-0" />
        </div>
      </div>
    </footer>
  );
};
