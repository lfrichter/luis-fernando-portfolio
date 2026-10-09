import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { RichterGateway } from '@/pages/RichterGateway';
import { PortfolioPage } from '@/pages/PortfolioPage';

export type AppRoute = 'entry' | 'portfolio';

const parseCurrentRoute = (): AppRoute => {
  if (typeof window === 'undefined') return 'entry';
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/nicemove' || hash === '#nicemove' || path.startsWith('/nicemove') ||
    path === '/imobflow' || hash === '#imobflow' || path.startsWith('/imobflow')
  ) {
    window.location.replace('https://nicemove.com.br');
    return 'entry';
  }
  if (path === '/portfolio' || hash === '#portfolio' || path.startsWith('/portfolio')) {
    return 'portfolio';
  }
  return 'entry';
};

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(parseCurrentRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(parseCurrentRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = useCallback((route: AppRoute) => {
    const targetPath = route === 'entry' ? '/' : `/${route}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      {currentRoute === 'entry' && (
        <RichterGateway
          onNavigateToPortfolio={() => navigateTo('portfolio')}
        />
      )}

      {currentRoute === 'portfolio' && (
        <PortfolioPage onNavigateHome={() => navigateTo('entry')} />
      )}
    </ThemeProvider>
  );
};

export default App;
