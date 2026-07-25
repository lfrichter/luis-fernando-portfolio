import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '@/components/Hero'
import profileData from '@/data/profile.json'

describe('Hero Component', () => {
  it('renders personal name, title, and bio', () => {
    render(<Hero data={profileData.personal} />)

    expect(screen.getByText(profileData.personal.name)).toBeInTheDocument()
    expect(screen.getByText(profileData.personal.title)).toBeInTheDocument()
    expect(screen.getByText(profileData.personal.bio)).toBeInTheDocument()
  })

  it('renders status badge and social/contact buttons', () => {
    render(<Hero data={profileData.personal} />)

    expect(screen.getByText(profileData.personal.status)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', profileData.personal.github)
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', profileData.personal.linkedin)
  })
})
