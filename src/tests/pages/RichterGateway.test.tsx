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
    const handlePortfolio = vi.fn();

    renderWithTheme(
      <RichterGateway
        onNavigateToPortfolio={handlePortfolio}
      />
    );

    // Editorial headline
    expect(
      screen.getByRole('heading', { level: 1, name: /O que você deseja conhecer\?/i })
    ).toBeInTheDocument();

    // Gateway 1: NiceMove (External Link)
    expect(screen.getByText(/Acelerador de Vendas Imobiliárias/i)).toBeInTheDocument();
    const niceMoveLink = screen.getByRole('link', { name: /Explorar NiceMove/i });
    expect(niceMoveLink).toHaveAttribute('href', 'https://nicemove.com.br');
    expect(niceMoveLink).toHaveAttribute('target', '_blank');
    expect(niceMoveLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Gateway 2: Luis Fernando Richter
    expect(screen.getByText(/Tech Lead & AI Solution Architect/i)).toBeInTheDocument();
    expect(screen.getByText(/Ver Portfólio Completo/i)).toBeInTheDocument();

    const portfolioBtn = screen.getByText(/Ver Portfólio Completo/i);
    fireEvent.click(portfolioBtn);
    expect(handlePortfolio).toHaveBeenCalledTimes(1);
  });

  it('renders language toggle and switches content to English when clicked', async () => {
    const handlePortfolio = vi.fn();

    renderWithTheme(
      <RichterGateway
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
    expect(screen.getByText(/Explore NiceMove/i)).toBeInTheDocument();
    expect(screen.getByText(/View Full Portfolio/i)).toBeInTheDocument();
  });
});
