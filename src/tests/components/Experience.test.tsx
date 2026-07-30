import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Experience } from '@/components/Experience';

describe('Experience Component', () => {
  it('renders experience items from JSON data', () => {
    render(<Experience />);

    expect(
      screen.getByText('Turno (anteriormente TurnoverBnB)')
    ).toBeInTheDocument();
    expect(screen.getByText('Full Comms / Keaze')).toBeInTheDocument();
    expect(screen.getByText('Evoke Mobile')).toBeInTheDocument();
    expect(screen.getByText('Alfasoft')).toBeInTheDocument();
    expect(screen.getByText('Plugae')).toBeInTheDocument();
  });

  it('filters experiences by search query', () => {
    render(<Experience />);

    const searchInput = screen.getByPlaceholderText(/buscar experiência, empresa ou tecnologia/i);
    fireEvent.change(searchInput, { target: { value: 'Turno' } });

    expect(
      screen.getByText('Turno (anteriormente TurnoverBnB)')
    ).toBeInTheDocument();
    expect(screen.queryByText('Evoke Mobile')).not.toBeInTheDocument();
  });

  it('displays empty state fallback when search query yields no matches', () => {
    render(<Experience />);

    const searchInput = screen.getByPlaceholderText(/buscar experiência, empresa ou tecnologia/i);
    fireEvent.change(searchInput, { target: { value: 'XYZNonExistentCompany' } });

    expect(
      screen.getByText(/nenhuma experiência encontrada/i)
    ).toBeInTheDocument();
  });
});
