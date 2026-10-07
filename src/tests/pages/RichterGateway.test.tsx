import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ThemeProvider } from '@/context/ThemeContext';
import { RichterGateway } from '@/pages/RichterGateway';
import i18n from '@/i18n/config';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('RichterGateway Page', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt');
  });

  it('renders the editorial title, subtitle, and both main gateways', () => {
    const handleImobFlow = vi.fn();
    const handlePortfolio = vi.fn();

    renderWithTheme(
      <RichterGateway
        onNavigateToImobFlow={handleImobFlow}
        onNavigateToPortfolio={handlePortfolio}
      />
    );

    // Editorial headline
    expect(
      screen.getByRole('heading', { level: 1, name: /O que você deseja conhecer\?/i })
    ).toBeInTheDocument();

    // Gateway 1: ImobFlow
    expect(screen.getByText(/Acelerador de Vendas Imobiliárias/i)).toBeInTheDocument();
    expect(screen.getByText(/Explorar ImobFlow/i)).toBeInTheDocument();

    // Gateway 2: Luis Fernando Richter
    expect(screen.getByText(/Tech Lead & AI Solution Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Portfólio Completo/i)).toBeInTheDocument();

    // Test Navigation Clicks
    const imobFlowBtn = screen.getByText(/Explorar ImobFlow/i);
    fireEvent.click(imobFlowBtn);
    expect(handleImobFlow).toHaveBeenCalledTimes(1);

    const portfolioBtn = screen.getByText(/Ver Portfólio Completo/i);
    fireEvent.click(portfolioBtn);
    expect(handlePortfolio).toHaveBeenCalledTimes(1);
  });

  it('renders language toggle and switches content to English when clicked', async () => {
    const handleImobFlow = vi.fn();
    const handlePortfolio = vi.fn();

    renderWithTheme(
      <RichterGateway
        onNavigateToImobFlow={handleImobFlow}
        onNavigateToPortfolio={handlePortfolio}
      />
    );

    const langBtn = screen.getByRole('button', { name: /toggle language/i });
    expect(langBtn).toBeInTheDocument();

    // Click to toggle to English
    fireEvent.click(langBtn);

    expect(
      await screen.findByRole('heading', { level: 1, name: /What would you like to explore\?/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/Explore ImobFlow/i)).toBeInTheDocument();
    expect(screen.getByText(/View Full Portfolio/i)).toBeInTheDocument();
  });
});
