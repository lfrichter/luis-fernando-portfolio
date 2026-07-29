import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '../Hero';

describe('Hero Component', () => {
  it('renders name, title, bio, and contact links correctly from profile data', () => {
    render(<Hero />);

    expect(screen.getByText('Luis Fernando Richter')).toBeInTheDocument();
    expect(
      screen.getByText(/Senior Software Developer \| Tech Lead \| Solutions Architect/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/15\+/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /e-mail/i })).toBeInTheDocument();
  });

  it('renders key metrics and AI highlighted badges', () => {
    render(<Hero />);

    expect(screen.getByText(/Engenheiro Assistido por IA|AI-Assisted Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Sorocaba/i)).toBeInTheDocument();
  });
});
