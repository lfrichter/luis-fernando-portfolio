import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-lg tracking-tight hover:text-primary transition-colors"
        >
          <div className="p-1.5 rounded-lg bg-primary text-primary-foreground">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-extrabold">Luis Fernando Richter</span>
          <span className="hidden md:inline-block text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
            v2026.1
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
