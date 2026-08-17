import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Posts, formatPostDate } from '@/components/Posts';
import { getPrimaryPlatformInfo } from '@/hooks/usePosts';
import App from '@/App';

describe('Posts Section & Hooks', () => {
  it('correctly prioritizes primary platform according to rules: DevTo > CodeLegion > LinkedIn > GitHub', () => {
    // Has all three -> DevTo
    expect(
      getPrimaryPlatformInfo({
        devto: 'https://dev.to/example',
        codelegion: 'https://coderlegion.com/example',
        linkedin: 'https://linkedin.com/example',
      }).primaryPlatform
    ).toBe('devto');

    // Has CodeLegion & LinkedIn (no DevTo) -> CodeLegion
    expect(
      getPrimaryPlatformInfo({
        codelegion: 'https://coderlegion.com/example',
        linkedin: 'https://linkedin.com/example',
      }).primaryPlatform
    ).toBe('codelegion');

    // Has LinkedIn only -> LinkedIn
    expect(
      getPrimaryPlatformInfo({
        linkedin: 'https://linkedin.com/example',
      }).primaryPlatform
    ).toBe('linkedin');
  });

  it('formats recent dates (< 4 months) as stamped full dates and older dates (> 4 months) as relative time with full date tooltips', () => {
    const refDate = new Date('2026-08-17T00:00:00');

    // 1 day ago (< 4 months)
    const recent = formatPostDate('2026-08-16', 'pt', refDate);
    expect(recent.isRelative).toBe(false);
    expect(recent.display).toMatch(/16 de ago|16\/08/i);

    // 10 months ago (> 4 months)
    const older10m = formatPostDate('2025-10-17', 'pt', refDate);
    expect(older10m.isRelative).toBe(true);
    expect(older10m.display).toBe('há 10 meses');
    expect(older10m.fullDate).toMatch(/17 de out/i);

    // 1 year ago (> 4 months) in English
    const older1yEn = formatPostDate('2025-08-01', 'en', refDate);
    expect(older1yEn.isRelative).toBe(true);
    expect(older1yEn.display).toBe('1 year ago');
  });

  it('renders the Posts component with search filter and platform filtering', () => {
    render(<Posts />);

    // Header title
    expect(screen.getByText(/Posts & Artigos Técnicos/i)).toBeInTheDocument();

    // Check presence of Cat Guardian post
    expect(screen.getByText(/Project Cat Guardian/i)).toBeInTheDocument();

    // Check search input filtering
    const searchInput = screen.getByPlaceholderText(/Buscar post por título, tecnologia ou resumo.../i);
    fireEvent.change(searchInput, { target: { value: 'Laravel' } });

    expect(screen.getByText(/Construindo uma API Robusta com Laravel/i)).toBeInTheDocument();
    expect(screen.queryByText(/Project Cat Guardian/i)).not.toBeInTheDocument();
  });

  it('navigates to Posts tab in App integration', () => {
    render(<App />);

    const postsTabBtn = screen.getByRole('button', { name: /Posts & Artigos/i });
    fireEvent.click(postsTabBtn);

    expect(screen.getByText(/Posts & Artigos Técnicos/i)).toBeInTheDocument();
  });
});
