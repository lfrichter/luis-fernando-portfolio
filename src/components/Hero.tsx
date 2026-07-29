import React from 'react';
import { useProfile } from '@/hooks/useProfile';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { Mail, MapPin, Sparkles, Code2, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const profile = useProfile();

  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-4 h-4" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'mail':
        return <Mail className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 border-b border-border/40 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar / Initials Badge */}
          <div className="shrink-0">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-primary via-indigo-500 to-purple-600 p-1 shadow-xl flex items-center justify-center">
              <div className="w-full h-full bg-background rounded-[14px] flex flex-col items-center justify-center text-foreground font-black text-3xl md:text-4xl tracking-tighter">
                <span>LFR</span>
                <span className="text-[10px] font-normal text-muted-foreground tracking-normal uppercase mt-1">
                  15+ Anos Exp
                </span>
              </div>
            </div>
          </div>

          {/* Profile Text Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <Badge variant="default" className="gap-1 px-3 py-1 bg-primary text-primary-foreground font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> AI-Assisted Engineer
              </Badge>
              <Badge variant="outline" className="gap-1 border-muted-foreground/30 text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> {profile.location}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              {profile.name}
            </h1>

            <h2 className="text-lg md:text-xl font-medium text-primary/90">
              {profile.title}
            </h2>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl">
              {profile.bio}
            </p>

            {/* Featured Skills Badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
              {profile.featuredSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs px-2.5 py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Action Contact Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-4">
              {profile.contacts.map((contact) => (
                <Button key={contact.label} variant="outline" size="sm" asChild className="gap-2">
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.label}
                  >
                    {getIcon(contact.icon)}
                    <span>{contact.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Bar */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-border/50">
          <div className="p-4 rounded-lg bg-card border border-border/60 shadow-sm flex items-start space-x-3">
            <Cpu className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">Liderança Técnica & Escala</h3>
              <p className="text-xs text-muted-foreground mt-1">
                +30% de retenção e -40% na latência de APIs em sistemas distribuídos de alto impacto.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border/60 shadow-sm flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">Engenharia Nativa em IA</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Desenvolvimento com RAG, FAISS, LiveKit Voice AI, Ollama e workflows assistidos por IA.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border/60 shadow-sm flex items-start space-x-3">
            <Code2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">Arquitetura & Clean Code</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Pós-Graduação UNIBTA em Sistemas Distribuídos e certificações Full Cycle (SOLID, DDD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
