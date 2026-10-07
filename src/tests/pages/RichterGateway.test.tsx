import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider } from '@/context/ThemeContext';
import { RichterGateway } from '@/pages/RichterGateway';

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

describe('RichterGateway Page', () => {
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
    expect(screen.getByText(/AI Sales Engine para Imobiliárias/i)).toBeInTheDocument();
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
});
