import React from 'react'
import { SkillCategory } from '@/types/profile'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cpu, Layout, Server, ShieldCheck } from 'lucide-react'

interface SkillsProps {
  categories: SkillCategory[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  'Architecture & Systems': <Cpu className="h-5 w-5 text-indigo-500" />,
  'Frontend Engineering': <Layout className="h-5 w-5 text-cyan-500" />,
  'Backend & Cloud': <Server className="h-5 w-5 text-emerald-500" />,
  'Quality & DevOps': <ShieldCheck className="h-5 w-5 text-amber-500" />,
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto px-4 space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 border-b pb-4">
          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Cpu className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Skills & Architectural Domains
            </h2>
            <p className="text-sm text-muted-foreground">
              Core technologies, design patterns, and engineering capabilities.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="glass-panel border hover:border-indigo-500/30 transition-all duration-200">
              <CardHeader className="pb-3 flex flex-row items-center gap-3 space-y-0">
                <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800/80">
                  {categoryIcons[category.name] || <Cpu className="h-5 w-5 text-blue-500" />}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1 text-xs font-medium bg-background hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors border-zinc-200 dark:border-zinc-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
