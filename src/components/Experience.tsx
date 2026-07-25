import React from 'react'
import { ExperienceItem } from '@/types/profile'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

interface ExperienceProps {
  items: ExperienceItem[]
}

export const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto px-4 space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Professional Experience
            </h2>
            <p className="text-sm text-muted-foreground">
              Career milestones, technical leadership, and system achievements.
            </p>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 pl-6 space-y-8">
          {items.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-6 h-4 w-4 rounded-full border-2 border-blue-500 bg-background group-hover:scale-125 transition-transform duration-200" />

              <Card className="glass-panel border hover:border-blue-500/40 transition-colors shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {item.role}
                      </CardTitle>
                      <span className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {item.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Impact & Achievements
                    </span>
                    <ul className="space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2.5 py-0.5 font-medium bg-zinc-100 dark:bg-zinc-800/80 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
