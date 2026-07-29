import React from 'react';
import { useExperience } from '@/hooks/useExperience';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Calendar, Search, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const {
    experiences,
    totalCount,
    searchQuery,
    setSearchQuery,
    selectedTech,
    setSelectedTech,
    allTechs,
  } = useExperience();

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Title & Filter Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" /> Trajetória Profissional (15+ Anos)
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Exibindo {experiences.length} de {totalCount} experiências (EUA, Reino Unido, Portugal e Brasil).
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar experiência, empresa ou tecnologia..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
          />
        </div>
      </div>

      {/* Filter by Technology Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8">
        <span className="text-xs font-semibold text-muted-foreground mr-2">Filtrar Tech:</span>
        {allTechs.slice(0, 10).map((tech) => (
          <Button
            key={tech}
            variant={selectedTech === tech ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedTech(tech)}
            className="text-[11px] h-7 px-2.5 rounded-full"
          >
            {tech}
          </Button>
        ))}
      </div>

      {/* Empty State Fallback */}
      {experiences.length === 0 && (
        <div className="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border">
          <Building2 className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
          <h3 className="text-lg font-semibold text-foreground">Nenhuma experiência encontrada</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
            Não encontramos resultados para os termos buscados. Tente reiniciar a pesquisa.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedTech('All');
            }}
            className="mt-4"
          >
            Limpar Filtros
          </Button>
        </div>
      )}

      {/* Timeline List */}
      <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-8 pl-6 md:pl-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform" />

            <Card className="border-border/70 bg-card hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-primary flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="secondary" className="gap-1 text-xs">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {exp.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    {exp.description}
                  </p>
                )}

                {/* Key Achievements Bullet points */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-[11px] bg-muted/40 font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
