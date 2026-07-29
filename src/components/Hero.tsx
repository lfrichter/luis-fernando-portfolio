import React from 'react';
import { useTranslation } from 'react-i18next';
import { useProfile } from '@/hooks/useProfile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { Mail, MapPin, Sparkles, Award, ShieldCheck, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const profile = useProfile();

  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-border/40 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar Badge / Logo Initial */}
          <div className="shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-primary via-indigo-500 to-purple-600 p-1 shadow-xl flex items-center justify-center">
              <div className="w-full h-full bg-background rounded-[14px] flex flex-col items-center justify-center text-foreground font-black text-3xl md:text-4xl tracking-tighter">
                <span>LFR</span>
                <span className="text-[10px] font-normal text-muted-foreground tracking-normal uppercase mt-1">
                  {t('hero.expBadge')}
                </span>
              </div>
            </div>
          </div>

          {/* Main Info */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Badge variant="default" className="gap-1 px-3 py-1 bg-primary text-primary-foreground font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                {t('hero.aiBadge')}
              </Badge>
              <Badge variant="secondary" className="gap-1 px-3 py-1">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location}
              </Badge>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                {profile.name}
              </h1>
              <p className="text-base md:text-lg font-semibold text-primary/90 mt-1">
                {profile.title}
              </p>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
              {profile.bio}
            </p>

            {/* Quick Contact & Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              {profile.contacts.map((contact) => {
                let iconElement = <Mail className="w-4 h-4" />;
                if (contact.icon === 'github') iconElement = <GithubIcon className="w-4 h-4" />;
                if (contact.icon === 'linkedin') iconElement = <LinkedinIcon className="w-4 h-4" />;

                return (
                  <Button key={contact.label} variant="outline" size="sm" asChild className="gap-2">
                    <a href={contact.url} target="_blank" rel="noopener noreferrer">
                      {iconElement}
                      <span>{contact.label}</span>
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlight Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/50">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 shadow-sm">
            <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground text-sm">{t('hero.techLeadership')}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('hero.techLeadershipSub')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 shadow-sm">
            <Cpu className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground text-sm">{t('hero.aiNative')}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('hero.aiNativeSub')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground text-sm">{t('hero.archClean')}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('hero.archCleanSub')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
