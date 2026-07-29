import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import experiencePt from '@/locales/pt/experience.json';
import experienceEn from '@/locales/en/experience.json';
import type { IExperience } from '@/types';

export function useExperience() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').startsWith('pt') ? 'pt' : 'en';
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const experiences = (lang === 'pt' ? experiencePt : experienceEn) as IExperience[];

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
