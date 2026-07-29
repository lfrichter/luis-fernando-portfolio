import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Briefcase, Layers, Wrench, GraduationCap } from 'lucide-react';

export type TabType = 'projects' | 'experience' | 'skills' | 'education';

interface TabsNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabsNav: React.FC<TabsNavProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'projects', label: t('nav.projects'), icon: <Layers className="w-4 h-4" /> },
    { id: 'experience', label: t('nav.experience'), icon: <Briefcase className="w-4 h-4" /> },
    { id: 'skills', label: t('nav.skills'), icon: <Wrench className="w-4 h-4" /> },
    { id: 'education', label: t('nav.education'), icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Button
                key={tab.id}
                variant={isActive ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={`gap-2 rounded-lg text-xs md:text-sm font-semibold shrink-0 transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
