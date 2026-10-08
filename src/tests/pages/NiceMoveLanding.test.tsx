import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { ThemeProvider } from '@/context/ThemeContext';
import { NiceMoveLanding } from '@/pages/NiceMoveLanding';
import { NICEMOVE_CONFIG } from '@/config/nicemove';
import App from '@/App';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('ImobFlowLanding Page', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/imobflow');
    window.scrollTo = vi.fn();
  });

  afterEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders all core landing sections strictly following product truth', () => {
    renderWithTheme(<NiceMoveLanding />);

    // Hero headline and badge
    expect(
      screen.getByRole('heading', { level: 1, name: /Seu próximo atendimento começa antes do corretor/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/⚡ Atendimento em segundos/i)).toBeInTheDocument();

    // Subheadline
    expect(screen.getByText(new RegExp(NICEMOVE_CONFIG.description, 'i'))).toBeInTheDocument();

    // Pain points
    expect(screen.getByText(/Lead Esperando/i)).toBeInTheDocument();
    expect(screen.getByText(/Contexto Perdido/i)).toBeInTheDocument();
    expect(screen.getByText(/Oportunidade Perdida/i)).toBeInTheDocument();

    // How it works steps
    expect(screen.getByText(/Como a NiceMove conduz cada conversa/i)).toBeInTheDocument();
    expect(screen.getAllByText(/WhatsApp/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Entendimento/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Qualificação/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Imóveis Compatíveis/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Próximo Passo/i).length).toBeGreaterThan(0);

    // Features
    expect(screen.getByText(/Busca Inteligente de Imóveis/i)).toBeInTheDocument();
    expect(screen.getByText(/Validação Inteligente de Disponibilidade/i)).toBeInTheDocument();

    // Visual proof (WhatsApp conversation with Reserva Campolim)
    expect(screen.getAllByText(/Reserva Campolim/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/NiceMove Assistant/i)).toBeInTheDocument();

    // Technical difference & deterministic rules
    expect(
      screen.getByText(/A IA interpreta a conversa\./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/As regras determinísticas protegem a operação\./i)
    ).toBeInTheDocument();

    // Operational simplicity
    expect(
      screen.getByText(/A NiceMove trabalha antes do corretor,/i)
    ).toBeInTheDocument();

    // CTAs and Contact
    expect(screen.getAllByText(/Agendar Demonstração/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Falar pelo WhatsApp/i)).toBeInTheDocument();
  });

  it('respects Product Truth anti-claims (no unverified SLAs or fake dashboards)', () => {
    const { container } = renderWithTheme(<NiceMoveLanding />);
    const textContent = container.textContent || '';

    // Prohibited marketing claims
    expect(textContent).not.toMatch(/< 5s/i);
    expect(textContent).not.toMatch(/100% dos leads/i);
    expect(textContent).not.toMatch(/SLA garantido/i);
    expect(textContent).not.toMatch(/Google Calendar/i);
    expect(textContent).not.toMatch(/Outlook/i);
    expect(textContent).not.toMatch(/Slack/i);
  });

  it('renders Landing when URL path is /nicemove or /imobflow', () => {
    window.history.pushState({}, '', '/nicemove');
    render(<App />);

    expect(
      screen.getByRole('heading', { level: 1, name: /Seu próximo atendimento começa antes do corretor/i })
    ).toBeInTheDocument();
  });
});
