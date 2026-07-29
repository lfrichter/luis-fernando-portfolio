import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skills } from '../Skills';

describe('Skills Component', () => {
  it('renders skill categories and highlighted competencies', () => {
    render(<Skills />);

    expect(screen.getByText(/AI-Assisted Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend & Linguagens/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend & Frameworks/i)).toBeInTheDocument();
    expect(screen.getByText(/DevOps, Cloud & Infra/i)).toBeInTheDocument();
    expect(screen.getByText(/Bancos de Dados & Caches/i)).toBeInTheDocument();
  });
});
