import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectModal } from '../ProjectModal';

describe('ProjectModal Component', () => {
  it('does not render dialog when isOpen is false or detailKey is null', () => {
    render(
      <ProjectModal
        detailKey={null}
        isOpen={false}
        onClose={vi.fn()}
      />
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders loading state when detail is loading', () => {
    render(
      <ProjectModal
        detailKey="ask_richter"
        isOpen={true}
        onClose={vi.fn()}
      />
    );
    // Modal opens and dialog is in DOM
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('renders project detail correctly when loaded', async () => {
    render(
      <ProjectModal
        detailKey="ask_richter"
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('Ask Richter')).toBeInTheDocument();
    });

    expect(screen.getByText(/Visão Geral & Arquitetura/i)).toBeInTheDocument();
    expect(screen.getByText(/Desafios & Soluções/i)).toBeInTheDocument();
  });

  it('renders error state cleanly when project detail fails or key is invalid', async () => {
    render(
      <ProjectModal
        detailKey="invalid_project_key"
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    await waitFor(() => {
      expect(
        screen.getByText(/não encontrados/i)
      ).toBeInTheDocument();
    });
  });
});
