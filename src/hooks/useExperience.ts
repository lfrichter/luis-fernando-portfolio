import { useState, useMemo } from 'react';
import experienceData from '@/data/experience.json';
import type { IExperience } from '@/types';

export function useExperience() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const experiences = experienceData as IExperience[];

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    experiences.forEach((exp) => exp.skills.forEach((skill) => set.add(skill)));
    return ['All', ...Array.from(set).sort()];
  }, [experiences]);

  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      const matchesTech =
        selectedTech === 'All' || exp.skills.includes(selectedTech);
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        exp.role.toLowerCase().includes(query) ||
        exp.company.toLowerCase().includes(query) ||
        exp.location.toLowerCase().includes(query) ||
        exp.skills.some((s) => s.toLowerCase().includes(query)) ||
        exp.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesTech && matchesQuery;
    });
  }, [experiences, selectedTech, searchQuery]);

  return {
    experiences: filteredExperiences,
    totalCount: experiences.length,
    searchQuery,
    setSearchQuery,
    selectedTech,
    setSelectedTech,
    allTechs,
  };
}
