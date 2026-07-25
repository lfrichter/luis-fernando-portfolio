import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from '@/components/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'

describe('Navbar Component', () => {
  it('renders brand title and navigation links', () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
    )

    expect(screen.getByText(/luis fernando/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skills/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
  })
})
