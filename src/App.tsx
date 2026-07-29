import React, { useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TabsNav, type TabType } from '@/components/TabsNav';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { EducationCerts } from '@/components/EducationCerts';
import { Footer } from '@/components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        {/* Header */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Main Tab Navigation Bar */}
        <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content Panels */}
        <main className="flex-1">
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'education' && <EducationCerts />}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
