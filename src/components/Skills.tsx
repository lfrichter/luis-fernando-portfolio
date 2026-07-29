import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Server, Layout, Cloud, Database, ShieldCheck } from 'lucide-react';

interface SkillCategoryItem {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; highlight?: boolean }[];
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategoryItem[] = [
    {
      title: 'AI-Assisted Development & AI Engineering',
      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
      skills: [
        { name: 'GitHub Copilot', highlight: true },
        { name: 'Cursor IDE', highlight: true },
        { name: 'Trae & Gemini Code Assist', highlight: true },
        { name: 'Arquitetura RAG', highlight: true },
        { name: 'FAISS Vector Search', highlight: true },
        { name: 'Ollama (Local Embeddings)' },
        { name: 'LiveKit Voice AI' },
        { name: 'LangChain.js' },
        { name: 'OpenAI & Hugging Face APIs' },
        { name: 'Prompt Engineering & Robustness' },
      ],
    },
    {
      title: 'Backend & Linguagens',
      icon: <Server className="w-5 h-5 text-blue-500" />,
      skills: [
        { name: 'Laravel (Dusk, Horizon)', highlight: true },
        { name: 'PHP 8.x & Lumen', highlight: true },
        { name: 'TypeScript & Node.js', highlight: true },
        { name: 'Python & FastAPI/Flask', highlight: true },
        { name: 'Java & Spring Boot' },
        { name: 'C# / NinjaTrader' },
        { name: 'Coldfusion & ASP' },
        { name: 'GraphQL & RESTful APIs' },
        { name: 'Arquitetura Orientada a Eventos' },
      ],
    },
    {
      title: 'Frontend & Frameworks',
      icon: <Layout className="w-5 h-5 text-emerald-500" />,
      skills: [
        { name: 'React & React Native', highlight: true },
        { name: 'Next.js App Router', highlight: true },
        { name: 'Vue.js & Vuetify' },
        { name: 'Tailwind CSS & Shadcn/ui', highlight: true },
        { name: 'Livewire' },
        { name: 'Vite & Webpack' },
        { name: 'HTML5, CSS3, Flexbox' },
      ],
    },
    {
      title: 'DevOps, Cloud & Infraestrutura',
      icon: <Cloud className="w-5 h-5 text-amber-500" />,
      skills: [
        { name: 'Docker & Docker Compose', highlight: true },
        { name: 'Kubernetes (Pods, Deployments)', highlight: true },
        { name: 'AWS (S3, CloudFront, EC2, Lambda, CodeDeploy)', highlight: true },
        { name: 'CI/CD (GitHub Actions, Jenkins, Bitbucket Pipelines)' },
        { name: 'Vercel, Render & DeployHQ' },
        { name: 'SonarQube & Qualidade de Código' },
        { name: 'OpenTelemetry & Observabilidade' },
        { name: 'Terraform (IaC)' },
      ],
    },
    {
      title: 'Bancos de Dados & Caches',
      icon: <Database className="w-5 h-5 text-cyan-500" />,
      skills: [
        { name: 'PostgreSQL & Supabase (RLS, Views)', highlight: true },
        { name: 'MySQL & Query Tuning', highlight: true },
        { name: 'Redis (Queues & Caches)', highlight: true },
        { name: 'MongoDB' },
        { name: 'SQLite' },
        { name: 'SQL Server & PL/SQL' },
      ],
    },
    {
      title: 'Práticas de Engenharia & Qualidade',
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
      skills: [
        { name: 'TDD (Vitest, Jest, Pytest, Pest)', highlight: true },
        { name: 'Playwright & Selenium (Dusk)', highlight: true },
        { name: 'Clean Architecture & SOLID', highlight: true },
        { name: 'Domain Driven Design (DDD)', highlight: true },
        { name: 'Metodologias Ágeis (Scrum CSM)' },
        { name: 'Git Flow & Code Reviews' },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" /> Habilidades Técnicas & Competências
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Visão consolidada de stacks, linguagens, ferramentas de IA assistida e práticas de engenharia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <Card key={cat.title} className="border-border/80 bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold text-foreground flex items-center gap-2.5">
                {cat.icon}
                <span>{cat.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={skill.highlight ? 'default' : 'secondary'}
                    className={`text-xs px-2.5 py-1 ${
                      skill.highlight
                        ? 'bg-primary/90 hover:bg-primary text-primary-foreground font-medium'
                        : 'bg-muted text-muted-foreground font-normal'
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
