import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import projectsSummaryPt from '@/locales/pt/projects_summary.json';
import projectsSummaryEn from '@/locales/en/projects_summary.json';
import type { IProjectSummary } from '@/types';

export type ProjectEra = 'all' | 'modern' | 'scaling' | 'legacy';

export const isPre2015 = (p: IProjectSummary) =>
  typeof p.year === 'number' && p.year < 2015;

export const is2016To2020 = (p: IProjectSummary) =>
  typeof p.year === 'number' && p.year >= 2016 && p.year <= 2020;

export const is2021Plus = (p: IProjectSummary) =>
  !p.year || p.year >= 2021;

export function useCategorizedProjects() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';
  const [selectedEra, setSelectedEra] = useState<ProjectEra>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects = (lang === 'pt' ? projectsSummaryPt : projectsSummaryEn) as IProjectSummary[];

  const eraCounts = useMemo(() => {
    return {
      all: projects.length,
      modern: projects.filter(is2021Plus).length,
      scaling: projects.filter(is2016To2020).length,
      legacy: projects.filter(isPre2015).length,
    };
  }, [projects]);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Era Filter
      if (selectedEra === 'modern' && !is2021Plus(project)) return false;
      if (selectedEra === 'scaling' && !is2016To2020(project)) return false;
      if (selectedEra === 'legacy' && !isPre2015(project)) return false;

      // Category Filter
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedEra, selectedCategory, searchQuery]);

  const modernProjects = useMemo(
    () => filteredProjects.filter((p) => !isPre2015(p)),
    [filteredProjects]
  );

  const tier1Projects = useMemo(
    () => modernProjects.filter((p) => p.tier === 1),
    [modernProjects]
  );

  const tier2Projects = useMemo(
    () => modernProjects.filter((p) => p.tier === 2),
    [modernProjects]
  );

  const tier3Projects = useMemo(
    () => modernProjects.filter((p) => p.tier === 3),
    [modernProjects]
  );

  const legacyProjects = useMemo(
    () =>
      filteredProjects
        .filter(isPre2015)
        .sort((a, b) => (b.year || 0) - (a.year || 0)),
    [filteredProjects]
  );

  return {
    allProjects: filteredProjects,
    totalProjectsCount: projects.length,
    tier1Projects,
    tier2Projects,
    tier3Projects,
    legacyProjects,
    selectedEra,
    setSelectedEra,
    eraCounts,
    selectedCategory,
    setSelectedCategory,
    categories,
    searchQuery,
    setSearchQuery,
  };
}
