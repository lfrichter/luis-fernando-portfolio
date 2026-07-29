import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCategorizedProjects } from '@/hooks/useCategorizedProjects';
import { ProjectModal } from '@/components/ProjectModal';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GithubIcon } from '@/components/icons/SocialIcons';
import { Search, ExternalLink, Layers, Sparkles, Cpu, Wrench, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const {
    allProjects,
    tier1Projects,
    tier2Projects,
    tier3Projects,
    selectedCategory,
    setSelectedCategory,
    categories,
    searchQuery,
    setSearchQuery,
  } = useCategorizedProjects();

  const [activeModalDetailKey, setActiveModalDetailKey] = useState<string | null>(null);
  const [isTier3Open, setIsTier3Open] = useState<boolean>(true);

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5">
              {t('projects.curationBadge')}
            </Badge>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-1 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" /> {t('projects.title')}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder={t('projects.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
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
      {allProjects.length === 0 && (
        <div className="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border">
          <Layers className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
          <h3 className="text-lg font-semibold text-foreground">{t('projects.emptyTitle')}</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            {t('projects.emptySub')}
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
            {t('projects.clearFilters')}
          </Button>
        </div>
      )}

      {/* 🏆 TIER 1: AI, Cloud Architecture & SaaS (Primary Hero Cards) */}
      {tier1Projects.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 border-b border-border/60 pb-3">
            <Cpu className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold text-foreground">
              🏆 {t('projects.tier1Title')}
            </h3>
            <Badge variant="secondary" className="text-[10px]">
              {t('projects.tier1Badge')} ({tier1Projects.length})
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tier1Projects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col justify-between border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl bg-card"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Badge variant="default" className="text-[11px] font-bold px-2.5 py-0.5 bg-primary">
                      {project.category}
                    </Badge>
                    <span className="text-[11px] font-semibold text-amber-500 flex items-center gap-1">
                      ★ Tier 1 Showcase
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-semibold text-primary/90">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[11px] bg-muted/60 font-medium">
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
                    className="text-xs font-semibold gap-1.5 shadow-sm"
                  >
                    <Layers className="w-4 h-4" />
                    <span>{t('projects.viewArchBtn')}</span>
                  </Button>

                  <div className="flex items-center gap-1">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild title="GitHub" className="w-8 h-8">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild title="Live" className="w-8 h-8">
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
        </div>
      )}

      {/* ⚙️ TIER 2: Performance Engineering & System Integrations (Standard Grid) */}
      {tier2Projects.length > 0 && (
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2.5 border-b border-border/60 pb-3">
            <Wrench className="w-5 h-5 text-indigo-500" />
            <h3 className="text-xl font-bold text-foreground">
              ⚙️ {t('projects.tier2Title')}
            </h3>
            <Badge variant="secondary" className="text-[10px]">
              {t('projects.tier2Badge')} ({tier2Projects.length})
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tier2Projects.map((project) => (
              <Card key={project.id} className="flex flex-col justify-between border-border/80 hover:border-primary/50 transition-colors bg-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <Badge variant="secondary" className="text-[11px]">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs font-medium text-primary/80">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px] bg-muted/40 font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveModalDetailKey(project.detailKey)}
                    className="text-xs gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t('projects.viewTechBtn')}</span>
                  </Button>

                  <div className="flex items-center gap-1">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild title="GitHub" className="w-8 h-8">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <GithubIcon className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild title="Live" className="w-8 h-8">
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
        </div>
      )}

      {/* 🧪 TIER 3: PoCs & Desafios Técnicos (Compact Accordion List) */}
      {tier3Projects.length > 0 && (
        <div className="space-y-4 pt-4 border-t border-border/60">
          <button
            onClick={() => setIsTier3Open(!isTier3Open)}
            className="w-full flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors border border-border/60 text-left"
          >
            <div className="flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-emerald-500" />
              <div>
                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                  🧪 {t('projects.tier3Title')} ({tier3Projects.length})
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t('projects.tier3Subtitle')}
                </p>
              </div>
            </div>
            {isTier3Open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {isTier3Open && (
            <div className="grid grid-cols-1 gap-3 pt-2">
              {tier3Projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-card border border-border/70 hover:border-primary/40 transition-colors gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-foreground">
                        {project.title}
                      </h4>
                      <Badge variant="outline" className="text-[10px]">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground max-w-2xl">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] text-primary/90 font-mono bg-primary/10 px-1.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setActiveModalDetailKey(project.detailKey)}
                    className="text-xs shrink-0 gap-1.5 self-start sm:self-center"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t('projects.viewPocBtn')}</span>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lazy Loaded Project Detail Modal */}
      <ProjectModal
        detailKey={activeModalDetailKey}
        isOpen={Boolean(activeModalDetailKey)}
        onClose={() => setActiveModalDetailKey(null)}
      />
    </section>
  );
};
