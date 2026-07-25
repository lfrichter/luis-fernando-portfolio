import React from 'react'
import { ProjectItem } from '@/types/profile'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FolderGit2, ArrowUpRight, Layers } from 'lucide-react'
import { GithubIcon } from '@/components/icons/SocialIcons'

interface ProjectsProps {
  items: ProjectItem[]
}

export const Projects: React.FC<ProjectsProps> = ({ items }) => {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto px-4 space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <FolderGit2 className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-sm text-muted-foreground">
              Selected architectural designs, open source tools, and system prototypes.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((proj) => (
            <Card key={proj.id} className="glass-panel border flex flex-col justify-between hover:border-purple-500/40 transition-all duration-200 shadow-sm">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-foreground">
                    {proj.title}
                  </CardTitle>
                  {proj.featured && (
                    <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 text-[10px]">
                      Featured
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {proj.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow">
                {/* Architecture Highlights */}
                <div className="space-y-2 bg-zinc-50 dark:bg-zinc-900/60 p-3 rounded-lg border border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-purple-500" />
                    Architectural Highlights
                  </span>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {proj.architectureHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-purple-500 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px] font-medium border-zinc-200 dark:border-zinc-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                {proj.githubUrl && (
                  <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs">
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Repository">
                      <GithubIcon className="h-3.5 w-3.5" />
                      View Repository
                      <ArrowUpRight className="h-3 w-3 opacity-70 ml-auto" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
