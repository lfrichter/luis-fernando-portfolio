import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCategorizedProjects } from '@/hooks/useCategorizedProjects';

describe('useCategorizedProjects Custom Hook', () => {
  it('correctly partitions projects into Tier 1, Tier 2, and Tier 3', () => {
    const { result } = renderHook(() => useCategorizedProjects());

    expect(result.current.tier1Projects.length).toBeGreaterThan(0);
    expect(result.current.tier2Projects.length).toBeGreaterThan(0);
    expect(result.current.tier3Projects.length).toBeGreaterThan(0);

    // Verify EuPizza is in Tier 1
    expect(result.current.tier1Projects.some((p) => p.id === 'eupizza')).toBe(true);
    // Verify Spider Hub is in Tier 2
    expect(result.current.tier2Projects.some((p) => p.id === 'spider-hub')).toBe(true);
    // Verify Semantic Cache, Learning Intelligence, and My Bookmarks are in Tier 3
    expect(result.current.tier3Projects.some((p) => p.id === 'semantic-cache')).toBe(true);
    expect(result.current.tier3Projects.some((p) => p.id === 'learning-intelligence')).toBe(true);
    expect(result.current.tier3Projects.some((p) => p.id === 'my-bookmarks')).toBe(true);
  });

  it('filters projects across all tiers by search query', () => {
    const { result } = renderHook(() => useCategorizedProjects());

    act(() => {
      result.current.setSearchQuery('LiveKit');
    });

    expect(result.current.tier1Projects.some((p) => p.id === 'eupizza')).toBe(true);
    expect(result.current.tier2Projects.length).toBe(0);
    expect(result.current.tier3Projects.length).toBe(0);
  });

  it('filters projects across all tiers by selected category', () => {
    const { result } = renderHook(() => useCategorizedProjects());

    act(() => {
      result.current.setSelectedCategory('AI/LLM');
    });

    expect(result.current.tier1Projects.every((p) => p.category === 'AI/LLM')).toBe(true);
    expect(result.current.tier2Projects.every((p) => p.category === 'AI/LLM')).toBe(true);
  });

  it('correctly isolates pre-2015 legacy projects into legacyProjects without polluting modern tiers', () => {
    const { result } = renderHook(() => useCategorizedProjects());

    // Legacy projects must exist and only contain projects before 2015
    expect(result.current.legacyProjects.length).toBe(3);
    expect(result.current.legacyProjects.every((p) => typeof p.year === 'number' && p.year < 2015)).toBe(true);

    // Verify the 3 FTD projects
    expect(result.current.legacyProjects.some((p) => p.id === 'ftd-gestao-acessos')).toBe(true);
    expect(result.current.legacyProjects.some((p) => p.id === 'ftd-gerenciador-iconografico')).toBe(true);
    expect(result.current.legacyProjects.some((p) => p.id === 'ftd-controle-producao')).toBe(true);

    // None of the modern tiers should contain any pre-2015 projects
    const allModern = [
      ...result.current.tier1Projects,
      ...result.current.tier2Projects,
      ...result.current.tier3Projects,
    ];
    expect(allModern.some((p) => typeof p.year === 'number' && p.year < 2015)).toBe(false);
  });

  it('filters legacy projects by search query (e.g. ColdFusion)', () => {
    const { result } = renderHook(() => useCategorizedProjects());

    act(() => {
      result.current.setSearchQuery('ColdFusion');
    });

    expect(result.current.legacyProjects.length).toBe(3);
    expect(result.current.tier1Projects.length).toBe(0);
  });
});
