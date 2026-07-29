import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Briefcase, Code2, GraduationCap } from 'lucide-react';

export type TabType = 'projects' | 'experience' | 'skills' | 'education';

interface TabsNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabsNav: React.FC<TabsNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'projects' as TabType,
      label: 'Projetos & Destaques',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      id: 'experience' as TabType,
      label: 'Experiência (15+ Anos)',
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      id: 'skills' as TabType,
      label: 'Skills & IA',
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      id: 'education' as TabType,
      label: 'Formação & Certificados',
      icon: <GraduationCap className="w-4 h-4" />,
    },
  ];

  return (
    <div className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto px-4 max-w-5xl flex items-center justify-center sm:justify-start gap-2 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'default' : 'ghost'}
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={`gap-2 text-xs md:text-sm font-semibold rounded-lg shrink-0 transition-all ${
              activeTab === tab.id
                ? 'shadow-md bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
