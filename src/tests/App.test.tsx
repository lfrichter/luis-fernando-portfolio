import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import App from '@/App';

describe('Main App Integration & Routing', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the Richter Gateway on root / and navigates to portfolio on click', () => {
    render(<App />);

    // Default Entry Page
    expect(screen.getByRole('heading', { level: 1, name: /O que você deseja conhecer\?/i })).toBeInTheDocument();
    expect(screen.getByText(/Explorar ImobFlow/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Portfólio Completo/i)).toBeInTheDocument();

    // Navigate to Portfolio
    const portfolioBtn = screen.getByText(/Ver Portfólio Completo/i);
    fireEvent.click(portfolioBtn);

    // Should now render Portfolio tabs
    expect(screen.getByText(/Portfólio de Engenharia & Projetos/i)).toBeInTheDocument();

    // Tab Switching inside portfolio
    const expTabBtn = screen.getByRole('button', { name: /Experiência \(15\+ Anos\)/i });
    fireEvent.click(expTabBtn);
    expect(screen.getByText(/Experiência Profissional \(15\+ Anos\)/i)).toBeInTheDocument();
  });

  it('renders the portfolio page directly when accessed via /portfolio', () => {
    window.history.pushState({}, '', '/portfolio');
    render(<App />);

    expect(screen.getByText(/Portfólio de Engenharia & Projetos/i)).toBeInTheDocument();
  });

  it('renders ImobFlow landing page directly when accessed via /imobflow', () => {
    window.history.pushState({}, '', '/imobflow');
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /Seu próximo atendimento começa antes do corretor/i })
    ).toBeInTheDocument();
  });
});
