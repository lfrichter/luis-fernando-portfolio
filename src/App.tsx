import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TabsNav, type TabType } from '@/components/TabsNav';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { EducationCerts } from '@/components/EducationCerts';
import { Posts } from '@/components/Posts';
import { Footer } from '@/components/Footer';
import { ImobFlowLanding } from '@/pages/ImobFlowLanding';

const getInitialRoute = (): 'home' | 'imobflow' => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return path.startsWith('/imobflow') || hash === '#imobflow' ? 'imobflow' : 'home';
};

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const [currentRoute, setCurrentRoute] = useState<'home' | 'imobflow'>(getInitialRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getInitialRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToHome = () => {
    if (window.location.pathname !== '/' || window.location.hash) {
      window.history.pushState({}, '', '/');
    }
    setCurrentRoute('home');
  };

  return (
    <ThemeProvider>
      {currentRoute === 'imobflow' ? (
        <ImobFlowLanding onNavigateHome={navigateToHome} />
      ) : (
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
            {activeTab === 'posts' && <Posts />}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
