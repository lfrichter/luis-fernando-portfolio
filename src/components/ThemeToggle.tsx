import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full shadow-sm hover:scale-105 transition-transform duration-150"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-amber-400 transition-all duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="h-4 w-4 text-slate-700 transition-all duration-300 rotate-0 scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
