import React from 'react'
import { PersonalInfo } from '@/types/profile'
import { Separator } from '@/components/ui/separator'
import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

interface FooterProps {
  data: PersonalInfo
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t bg-zinc-50/50 dark:bg-zinc-950/50 py-12 text-sm text-muted-foreground">
      <div className="container max-w-4xl mx-auto px-4 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-foreground">{data.name}</p>
            <p className="text-xs">{data.title}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
              <span>{data.email}</span>
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} {data.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Vite, TypeScript & Tailwind CSS <Heart className="h-3 w-3 text-red-500 fill-red-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  )
}
