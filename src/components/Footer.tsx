import React from 'react';
import { useProfile } from '@/hooks/useProfile';
import { Separator } from '@/components/ui/separator';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';
import { Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const profile = useProfile();
  const currentYear = new Date().getFullYear();

  const githubContact = profile.contacts.find((c) => c.label.toLowerCase() === 'github');
  const linkedinContact = profile.contacts.find((c) => c.label.toLowerCase() === 'linkedin');

  return (
    <footer className="mt-16 border-t border-border bg-card py-12 text-sm text-muted-foreground">
      <div className="container max-w-5xl mx-auto px-4 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">{profile.name}</p>
            <p className="text-xs">{profile.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
              <span>{profile.email}</span>
            </a>
            {githubContact && (
              <a
                href={githubContact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {linkedinContact && (
              <a
                href={linkedinContact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} {profile.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Construído com React 19, Vite, TypeScript, Tailwind CSS & Shadcn UI{' '}
            <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
