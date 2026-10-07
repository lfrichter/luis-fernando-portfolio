import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';

describe('Navbar Component', () => {
  it('renders brand logo, corporate isotype, and title', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );

    expect(screen.getByText('Luis Fernando Richter')).toBeInTheDocument();
    expect(screen.getByAltText('Richter Logo')).toBeInTheDocument();
    expect(screen.getByText('Início')).toBeInTheDocument();
  });
});
