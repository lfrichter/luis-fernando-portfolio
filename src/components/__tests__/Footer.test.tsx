import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '@/components/Footer'
import profileData from '@/data/profile.json'

describe('Footer Component', () => {
  it('renders copyright and email link', () => {
    render(<Footer data={profileData.personal} />)

    expect(screen.getAllByText(/luis fernando richter/i)[0]).toBeInTheDocument()
    expect(screen.getByText(profileData.personal.email)).toBeInTheDocument()
  })
})
