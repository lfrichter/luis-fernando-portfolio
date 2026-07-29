import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '../Navbar';

describe('Navbar Component', () => {
  it('renders brand logo and title', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    );

    expect(screen.getByText('Luis Fernando Richter')).toBeInTheDocument();
  });
});
