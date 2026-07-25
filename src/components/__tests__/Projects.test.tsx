import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from '@/components/Projects'
import profileData from '@/data/profile.json'

describe('Projects Component', () => {
  it('renders section header and project list', () => {
    render(<Projects items={profileData.projects} />)

    expect(screen.getByText(/featured engineering projects/i)).toBeInTheDocument()

    profileData.projects.forEach((proj) => {
      expect(screen.getByText(proj.title)).toBeInTheDocument()
      expect(screen.getByText(proj.description)).toBeInTheDocument()
    })
  })

  it('renders architecture highlights and repo links', () => {
    render(<Projects items={profileData.projects} />)

    const firstProj = profileData.projects[0]
    expect(screen.getByText(firstProj.architectureHighlights[0])).toBeInTheDocument()
    
    if (firstProj.githubUrl) {
      const repoLinks = screen.getAllByRole('link', { name: /view repository/i })
      expect(repoLinks[0]).toHaveAttribute('href', firstProj.githubUrl)
    }
  })
})
