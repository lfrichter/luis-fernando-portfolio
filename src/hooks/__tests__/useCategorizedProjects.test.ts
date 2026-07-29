import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCategorizedProjects } from '../useCategorizedProjects';

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
    // Verify Semantic Cache is in Tier 3
    expect(result.current.tier3Projects.some((p) => p.id === 'semantic-cache')).toBe(true);
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
});
