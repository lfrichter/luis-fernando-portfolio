export interface PersonalInfo {
  name: string
  title: string
  roles: string[]
  bio: string
  location: string
  status: string
  email: string
  github: string
  linkedin: string
}

export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  techStack: string[]
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  architectureHighlights: string[]
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
}

export interface ProfileData {
  personal: PersonalInfo
  experience: ExperienceItem[]
  skillCategories: SkillCategory[]
  projects: ProjectItem[]
  education: EducationItem[]
}
