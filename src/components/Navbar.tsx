import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageToggle } from '@/components/LanguageToggle';
import avatarImg from '@/assets/AvatarCircle.png';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Logo with Mini Avatar */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight hover:text-primary transition-colors"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-purple-600 p-0.5 shadow-sm shrink-0">
            <img
              src={avatarImg}
              alt="Luis Fernando Richter Avatar"
              className="w-full h-full object-cover rounded-full bg-background"
            />
          </div>
          <span className="font-extrabold text-foreground">Luis Fernando Richter</span>
          <span className="hidden md:inline-block text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
            v2026.1
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
