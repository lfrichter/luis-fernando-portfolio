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
    {
      id: 'projects',
      label: t('nav.projects'),
      icon: <Layers className="w-4 h-4 text-amber-500 shrink-0" />,
    },
    {
      id: 'experience',
      label: t('nav.experience'),
      icon: <Briefcase className="w-4 h-4 text-emerald-500 shrink-0" />,
    },
    {
      id: 'skills',
      label: t('nav.skills'),
      icon: <Wrench className="w-4 h-4 text-indigo-500 shrink-0" />,
    },
    {
      id: 'education',
      label: t('nav.education'),
      icon: <GraduationCap className="w-4 h-4 text-purple-500 shrink-0" />,
    },
  ];

  return (
    <nav className="sticky top-16 z-40 bg-background/90 backdrop-blur-md py-3 border-b border-border/80 shadow-xs">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Pill-shaped Bar Container */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-muted/60 dark:bg-muted/40 border border-border/80 shadow-inner scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <Button
                key={tab.id}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={`gap-2.5 rounded-xl px-4 md:px-5 py-2.5 text-xs md:text-sm font-bold shrink-0 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground shadow-md shadow-primary/30 scale-[1.03] border border-primary-foreground/30'
                    : 'bg-background/80 hover:bg-background border-border/70 text-foreground hover:text-primary hover:border-primary/50 hover:scale-[1.01] shadow-xs'
                }`}
              >
                {tab.icon}
                <span className="tracking-tight">{tab.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
