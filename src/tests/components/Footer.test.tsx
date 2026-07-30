import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/Footer';

describe('Footer Component', () => {
  it('renders author name and copyright info', () => {
    render(<Footer />);

    const authorElements = screen.getAllByText(/Luis Fernando Richter/i);
    expect(authorElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument();
  });
});
