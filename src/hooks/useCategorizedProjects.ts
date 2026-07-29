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

  const tier1Projects = useMemo(
    () => filteredProjects.filter((p) => p.tier === 1),
    [filteredProjects]
  );

  const tier2Projects = useMemo(
    () => filteredProjects.filter((p) => p.tier === 2),
    [filteredProjects]
  );

  const tier3Projects = useMemo(
    () => filteredProjects.filter((p) => p.tier === 3),
    [filteredProjects]
  );

  return {
    allProjects: filteredProjects,
    totalProjectsCount: projects.length,
    tier1Projects,
    tier2Projects,
    tier3Projects,
    selectedCategory,
    setSelectedCategory,
    categories,
    searchQuery,
    setSearchQuery,
  };
}
