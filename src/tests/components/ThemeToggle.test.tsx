import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from '@/context/ThemeContext'
import { ThemeToggle } from '@/components/ThemeToggle'

describe('ThemeToggle Component', () => {
  it('renders theme toggle button with accessible label', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const toggleBtn = screen.getByRole('button', { name: /toggle theme/i })
    expect(toggleBtn).toBeInTheDocument()
  })

  it('toggles dark mode class on document element when clicked', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )

    const toggleBtn = screen.getByRole('button', { name: /toggle theme/i })
    const isInitiallyDark = document.documentElement.classList.contains('dark')

    fireEvent.click(toggleBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(!isInitiallyDark)
  })
})
