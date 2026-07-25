import React from 'react'
import type { PersonalInfo } from '@/types/profile'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Mail, ArrowUpRight, Sparkles } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons'

interface HeroProps {
  data: PersonalInfo
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-indigo-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center">
            <Badge variant="outline" className="px-3.5 py-1.5 rounded-full border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-medium gap-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {data.status}
            </Badge>
          </div>

          {/* Headline & Roles */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
              {data.name}
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              {data.title}
            </p>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {data.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild className="rounded-full shadow-md gap-2 bg-blue-600 hover:bg-blue-700 text-white">
              <a href={`mailto:${data.email}`}>
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full gap-2">
              <a href={data.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <GithubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full gap-2">
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
