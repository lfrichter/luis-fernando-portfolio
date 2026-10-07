import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TabsNav, type TabType } from '@/components/TabsNav';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { EducationCerts } from '@/components/EducationCerts';
import { Posts } from '@/components/Posts';
import { Footer } from '@/components/Footer';

interface PortfolioPageProps {
  onNavigateHome?: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Header */}
      <Navbar onNavigateHome={onNavigateHome} />

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
        {activeTab === 'posts' && <Posts />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
