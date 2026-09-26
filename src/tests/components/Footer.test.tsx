import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/Footer';

describe('Footer Component', () => {
  it('renders author name, corporate signature, and copyright info', () => {
    render(<Footer />);

    expect(screen.getByText(/Richter Tecnologia e Desenvolvimento/i)).toBeInTheDocument();
    expect(screen.getByAltText('Richter Tecnologia e Desenvolvimento')).toBeInTheDocument();
    const authorElements = screen.getAllByText(/Luis Fernando Richter/i);
    expect(authorElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument();
  });
});
