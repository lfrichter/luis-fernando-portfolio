import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TabsNav } from '@/components/TabsNav';

describe('TabsNav Component', () => {
  it('renders all main navigation tabs', () => {
    render(<TabsNav activeTab="projects" onTabChange={vi.fn()} />);

    expect(screen.getByText('Projetos & Destaques')).toBeInTheDocument();
    expect(screen.getByText('Experiência (15+ Anos)')).toBeInTheDocument();
    expect(screen.getByText('Skills & IA')).toBeInTheDocument();
    expect(screen.getByText('Formação & Certificados')).toBeInTheDocument();
  });

  it('triggers onTabChange when a tab button is clicked', () => {
    const handleTabChange = vi.fn();
    render(<TabsNav activeTab="projects" onTabChange={handleTabChange} />);

    const expTab = screen.getByText('Experiência (15+ Anos)');
    fireEvent.click(expTab);

    expect(handleTabChange).toHaveBeenCalledWith('experience');
  });
});
