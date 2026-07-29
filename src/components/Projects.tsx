import React, { useState } from 'react';
import { useProjects } from '@/hooks/useProjects';
import { ProjectModal } from '@/components/ProjectModal';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { Search, ExternalLink, Layers, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const {
    projects,
    selectedCategory,
    setSelectedCategory,
    categories,
    searchQuery,
    setSearchQuery,
  } = useProjects();

  const [activeModalDetailKey, setActiveModalDetailKey] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" /> Projetos de Destaque
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Projetos reais, SaaS e PoCs com foco em Inteligência Artificial, Arquitetura e Full Stack.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar projeto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="text-xs rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Empty State Fallback */}
      {projects.length === 0 && (
        <div className="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border">
          <Layers className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
          <h3 className="text-lg font-semibold text-foreground">Nenhum projeto encontrado</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            Não encontramos resultados para os filtros selecionados. Tente buscar por outro termo ou selecione 'All'.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4"
          >
            Limpar Filtros
          </Button>
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col justify-between hover:shadow-lg transition-shadow border-border/80 bg-card">
            <CardHeader>
              <div className="flex items-center justify-between gap-2 mb-2">
                <Badge variant={project.featured ? 'default' : 'secondary'} className="text-[11px] px-2.5 py-0.5">
                  {project.category}
                </Badge>
                {project.featured && (
                  <span className="text-[11px] font-medium text-amber-500 flex items-center gap-1">
                    ★ Destaque
                  </span>
                )}
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                {project.title}
              </CardTitle>
              <CardDescription className="text-xs font-medium text-primary/80">
                {project.subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.summary}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-[11px] bg-muted/40 font-normal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-4 border-t border-border/40 flex items-center justify-between gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={() => setActiveModalDetailKey(project.detailKey)}
                className="text-xs gap-1.5"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Ver Detalhes Arquiteturais</span>
              </Button>

              <div className="flex items-center gap-1">
                {project.githubUrl && (
                  <Button variant="ghost" size="icon" asChild title="Ver no GitHub" className="w-8 h-8">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="ghost" size="icon" asChild title="Acessar URL em Produção" className="w-8 h-8">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                    </a>
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Lazy Loaded Project Detail Modal */}
      <ProjectModal
        detailKey={activeModalDetailKey}
        isOpen={Boolean(activeModalDetailKey)}
        onClose={() => setActiveModalDetailKey(null)}
      />
    </section>
  );
};
