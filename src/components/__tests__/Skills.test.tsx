import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skills } from '../Skills';

describe('Skills Component', () => {
  it('renders skill categories and highlighted competencies', () => {
    render(<Skills />);

    expect(screen.getByText(/AI-Assisted Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Architecture & Microservices/i)).toBeInTheDocument();
    expect(screen.getByText(/Frontend Engineering & Modern Web/i)).toBeInTheDocument();
    expect(screen.getByText(/DevOps, Cloud & Infrastructure/i)).toBeInTheDocument();
    expect(screen.getByText(/Database & Storage Systems/i)).toBeInTheDocument();
  });
});
