import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from '../Projects';

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
});
