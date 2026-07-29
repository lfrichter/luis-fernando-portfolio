import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Wrench, Sparkles, Cpu, Server, Code2, Database, Cloud } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      category: 'AI-Assisted Development & AI Engineering',
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      skills: [
        { name: 'Cursor IDE & AI Workflows', highlight: true },
        { name: 'GitHub Copilot & Trae & Gemini', highlight: true },
        { name: 'RAG Architecture (FAISS, LangChain.js)', highlight: true },
        { name: 'Voice AI Agents (LiveKit, WebRTC, Deepgram, ElevenLabs)', highlight: true },
        { name: 'Ollama & Local Vector Cache', highlight: false },
        { name: 'Prompt Engineering & System Personas', highlight: false },
      ],
    },
    {
      category: 'Backend Architecture & Microservices',
      icon: <Server className="w-5 h-5 text-indigo-500" />,
      skills: [
        { name: 'PHP 8.x & Laravel Framework', highlight: true },
        { name: 'Node.js & Express / NestJS', highlight: true },
        { name: 'Java & Spring Boot', highlight: false },
        { name: 'Python (FastAPI, Flask, PySpark)', highlight: true },
        { name: 'RESTful APIs & Event-Driven Architecture', highlight: false },
        { name: 'Laravel Horizon & Redis Queues', highlight: false },
      ],
    },
    {
      category: 'Frontend Engineering & Modern Web',
      icon: <Code2 className="w-5 h-5 text-primary" />,
      skills: [
        { name: 'React 19 & Next.js App Router', highlight: true },
        { name: 'TypeScript & ESNext', highlight: true },
        { name: 'Tailwind CSS & Shadcn UI', highlight: true },
        { name: 'Vue.js & Pinia / Vuetify', highlight: false },
        { name: 'State Management & Custom Hooks', highlight: false },
        { name: 'Vite & Module Federation / Bundling', highlight: false },
      ],
    },
    {
      category: 'Database & Storage Systems',
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: 'PostgreSQL & Supabase RLS', highlight: true },
        { name: 'MySQL & Query Tuning', highlight: false },
        { name: 'MongoDB & Schema Normalization', highlight: false },
        { name: 'Redis Caching & Distributed Locks', highlight: false },
        { name: 'FAISS Vector Database', highlight: false },
      ],
    },
    {
      category: 'DevOps, Cloud & Infrastructure',
      icon: <Cloud className="w-5 h-5 text-purple-500" />,
      skills: [
        { name: 'Docker & Docker Swarm', highlight: true },
        { name: 'AWS (S3, EC2, CloudFront, Lambda, CodeDeploy)', highlight: true },
        { name: 'GitHub Actions & Jenkins CI/CD', highlight: false },
        { name: 'Vercel & DeployHQ', highlight: false },
        { name: 'Linux Server Administration', highlight: false },
      ],
    },
    {
      category: 'Engineering Practices & Quality Assurance',
      icon: <Cpu className="w-5 h-5 text-rose-500" />,
      skills: [
        { name: 'Clean Architecture & SOLID Principles', highlight: true },
        { name: 'Domain-Driven Design (DDD)', highlight: true },
        { name: 'TDD & Vitest / React Testing Library', highlight: true },
        { name: 'Laravel Dusk & Selenium E2E Automation', highlight: false },
        { name: 'Agile & Scrum Methodologies (CSM)', highlight: false },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Title */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
            {t('skills.badge')}
          </Badge>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-primary" /> {t('skills.title')}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {t('skills.subtitle')}
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => (
          <Card key={idx} className="border-border/70 bg-card hover:border-primary/40 transition-colors shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2.5">
                {cat.icon}
                <span>{cat.category}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={skill.highlight ? 'default' : 'outline'}
                    className={`text-xs px-3 py-1 font-medium ${
                      skill.highlight
                        ? 'bg-primary/90 hover:bg-primary text-primary-foreground shadow-xs'
                        : 'bg-muted/30 border-border/80'
                    }`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
