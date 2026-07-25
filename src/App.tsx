import React from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Footer } from '@/components/Footer'
import profileData from '@/data/profile.json'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased selection:bg-blue-500/20">
        <Navbar />

        <main className="flex-grow space-y-8">
          <Hero data={profileData.personal} />
          <Experience items={profileData.experience} />
          <Skills categories={profileData.skillCategories} />
          <Projects items={profileData.projects} />
        </main>

        <Footer data={profileData.personal} />
      </div>
    </ThemeProvider>
  )
}

export default App
