import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Skills } from '@/components/Skills'
import profileData from '@/data/profile.json'

describe('Skills Component', () => {
  it('renders section header and all skill categories', () => {
    render(<Skills categories={profileData.skillCategories} />)

    expect(screen.getByText(/skills & architectural domains/i)).toBeInTheDocument()

    profileData.skillCategories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument()
    })
  })

  it('renders individual skill badges', () => {
    render(<Skills categories={profileData.skillCategories} />)

    const firstCategory = profileData.skillCategories[0]
    expect(screen.getByText(firstCategory.skills[0])).toBeInTheDocument()
  })
})
