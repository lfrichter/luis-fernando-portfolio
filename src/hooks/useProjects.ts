import { useState, useMemo } from 'react';
import projectsSummaryData from '@/data/projects_summary.json';
import type { IProjectSummary } from '@/types';

export function useProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const projects = projectsSummaryData as IProjectSummary[];

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

  return {
    projects: filteredProjects,
    allProjectsCount: projects.length,
    selectedCategory,
    setSelectedCategory,
    categories,
    searchQuery,
    setSearchQuery,
  };
}
