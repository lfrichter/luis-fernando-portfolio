import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Experience } from '@/components/Experience'
import profileData from '@/data/profile.json'

describe('Experience Component', () => {
  it('renders section title and work experiences', () => {
    render(<Experience items={profileData.experience} />)

    expect(screen.getByText(/professional experience/i)).toBeInTheDocument()
    
    profileData.experience.forEach((item) => {
      expect(screen.getByText(item.company)).toBeInTheDocument()
      expect(screen.getByText(item.role)).toBeInTheDocument()
    })
  })

  it('renders achievements and tech stack tags', () => {
    render(<Experience items={profileData.experience} />)

    const firstExp = profileData.experience[0]
    expect(screen.getByText(firstExp.achievements[0])).toBeInTheDocument()
    expect(screen.getAllByText(firstExp.techStack[0])[0]).toBeInTheDocument()
  })
})
