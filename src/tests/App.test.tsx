import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '@/App';

describe('Main App Integration', () => {
  it('renders the portfolio page with all main sections and tab navigation', () => {
    render(<App />);

    // Brand and Hero
    expect(screen.getAllByText(/luis fernando richter/i)[0]).toBeInTheDocument();

    // Default Tab (Projects)
    expect(screen.getByText(/Portfólio de Engenharia & Projetos/i)).toBeInTheDocument();

    // Navigation and Footer
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();

    // Tab Switching
    const expTabBtn = screen.getByRole('button', { name: /Experiência \(15\+ Anos\)/i });
    fireEvent.click(expTabBtn);
    expect(screen.getByText(/Experiência Profissional \(15\+ Anos\)/i)).toBeInTheDocument();
  });
});
