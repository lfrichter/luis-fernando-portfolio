import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from '@/components/Projects';

describe('Projects Component', () => {
  it('renders project summary cards divided into Tiers', () => {
    render(<Projects />);

    expect(screen.getByText('Ask Richter')).toBeInTheDocument();
    expect(screen.getByText('SmartShorts & SmartShorts UI')).toBeInTheDocument();
    expect(screen.getByText('Canaoaves & Admin Canaoaves')).toBeInTheDocument();
    expect(screen.getByText('EuPizza / Robô de Atendimento por Voz')).toBeInTheDocument();
  });

  it('filters projects when category button is clicked', () => {
    render(<Projects />);

    const aiFilterBtn = screen.getByRole('button', { name: /^AI\/LLM$/i });
    fireEvent.click(aiFilterBtn);

    expect(screen.getByText('Ask Richter')).toBeInTheDocument();
    expect(screen.getByText('EuPizza / Robô de Atendimento por Voz')).toBeInTheDocument();
    // Non-AI project like Canaoaves should not be in filtered list
    expect(screen.queryByText('Canaoaves & Admin Canaoaves')).not.toBeInTheDocument();
  });

  it('displays empty state fallback when search query yields no results', () => {
    render(<Projects />);

    const searchInput = screen.getByPlaceholderText(/buscar por nome ou tecnologia/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistenttechnology123' } });

    expect(
      screen.getByText(/nenhum projeto encontrado/i)
    ).toBeInTheDocument();
  });

  it('opens project detail modal when detail button is clicked', () => {
    render(<Projects />);

    const detailButtons = screen.getAllByRole('button', { name: /ver especificações de arquitetura/i });
    expect(detailButtons.length).toBeGreaterThan(0);

    fireEvent.click(detailButtons[0]);

    // Modal dialog should appear in the document
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders pre-2015 legacy projects section with FTD projects', () => {
    render(<Projects />);

    expect(screen.getByText(/sistemas corporativos & projetos legado/i)).toBeInTheDocument();
    expect(screen.getByText('FTD — Gestão de Acessos para Conteúdo Educacional')).toBeInTheDocument();
    expect(screen.getByText('FTD — Gerenciador Iconográfico (DAM Corporativo)')).toBeInTheDocument();
    expect(screen.getByText('FTD — Controle de Produção Editorial')).toBeInTheDocument();
  });

  it('filters projects by era tab buttons', () => {
    render(<Projects />);

    // Click on 2016-2020 Era button
    const scalingEraBtn = screen.getByRole('button', { name: /saas, cloud & apis de escala/i });
    fireEvent.click(scalingEraBtn);

    // 2016-2020 projects should be visible
    expect(screen.getByText(/Índicos/i)).toBeInTheDocument();
    expect(screen.getByText(/ASO/i)).toBeInTheDocument();
    expect(screen.getByText(/Startup Center/i)).toBeInTheDocument();

    // Modern (2021+) projects should not be visible
    expect(screen.queryByText('Ask Richter')).not.toBeInTheDocument();
    expect(screen.queryByText('EuPizza / Robô de Atendimento por Voz')).not.toBeInTheDocument();

    // Legacy section should not be visible in scaling era
    expect(screen.queryByText('FTD — Gestão de Acessos para Conteúdo Educacional')).not.toBeInTheDocument();

    // Click on Legacy (< 2015) Era button
    const legacyEraBtn = screen.getByRole('button', { name: /sistemas corporativos legado/i });
    fireEvent.click(legacyEraBtn);

    // Only FTD projects visible
    expect(screen.getByText('FTD — Gestão de Acessos para Conteúdo Educacional')).toBeInTheDocument();
    expect(screen.queryByText(/Índicos/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Ask Richter')).not.toBeInTheDocument();
  });
});
