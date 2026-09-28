import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import projectsSummaryPt from '@/locales/pt/projects_summary.json';
import projectsSummaryEn from '@/locales/en/projects_summary.json';
import type { IProjectSummary } from '@/types';

export function useCategorizedProjects() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects = (lang === 'pt' ? projectsSummaryPt : projectsSummaryEn) as IProjectSummary[];

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  const isLegacyProject = (p: IProjectSummary) =>
    typeof p.year === 'number' && p.year < 2015;

  const modernProjects = useMemo(
    () => filteredProjects.filter((p) => !isLegacyProject(p)),
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
        .filter(isLegacyProject)
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
    selectedCategory,
    setSelectedCategory,
    categories,
    searchQuery,
    setSearchQuery,
  };
}
