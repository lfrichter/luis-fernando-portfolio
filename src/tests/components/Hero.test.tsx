import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '@/components/Hero';

describe('Hero Component', () => {
  it('renders name, title, bio, avatar image, and contact links correctly from profile data', () => {
    render(<Hero />);

    expect(screen.getByText('Luis Fernando Richter')).toBeInTheDocument();
    expect(
      screen.getByText(/Senior Software Developer \| Tech Lead \| Solutions Architect/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText('Luis Fernando Richter')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /e-mail/i })).toBeInTheDocument();
  });

  it('renders key metrics and AI highlighted badges', () => {
    render(<Hero />);

    expect(screen.getByText(/AI Engineering Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorocaba/i)).toBeInTheDocument();
    expect(screen.getByText('+25')).toBeInTheDocument();
    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('-40%')).toBeInTheDocument();
  });
});

