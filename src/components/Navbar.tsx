import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Terminal } from 'lucide-react'

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="container max-w-4xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white">
            <Terminal className="h-4 w-4" />
          </div>
          <span>Luis Fernando</span>
        </a>

        {/* Navigation Links & Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden sm:flex items-center gap-4 text-sm font-medium text-muted-foreground">
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
