import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '@/App'

describe('Main App Integration', () => {
  it('renders the portfolio page with all main sections and theme provider', () => {
    render(<App />)

    // Brand and Hero
    expect(screen.getAllByText(/luis fernando richter/i)[0]).toBeInTheDocument()
    
    // Main Section Headers
    expect(screen.getByText(/professional experience/i)).toBeInTheDocument()
    expect(screen.getByText(/skills & architectural domains/i)).toBeInTheDocument()
    expect(screen.getByText(/featured engineering projects/i)).toBeInTheDocument()

    // Navigation and Footer
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument()
  })
})
