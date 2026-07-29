import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LanguageToggle } from '../LanguageToggle';
import '@/i18n/config';

describe('LanguageToggle Component', () => {
  it('renders language toggle button displaying current language state', () => {
    render(<LanguageToggle />);

    const toggleBtn = screen.getByRole('button', { name: /toggle language/i });
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn.textContent).toMatch(/PT|EN/);
  });

  it('switches language when clicked', () => {
    render(<LanguageToggle />);

    const toggleBtn = screen.getByRole('button', { name: /toggle language/i });
    const initialText = toggleBtn.textContent;

    fireEvent.click(toggleBtn);
    expect(toggleBtn.textContent).not.toBe(initialText);
  });
});
