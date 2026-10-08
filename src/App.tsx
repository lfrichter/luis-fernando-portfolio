import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { RichterGateway } from '@/pages/RichterGateway';
import { NiceMoveLanding } from '@/pages/NiceMoveLanding';
import { PortfolioPage } from '@/pages/PortfolioPage';

export type AppRoute = 'entry' | 'nicemove' | 'portfolio' | 'imobflow';

const parseCurrentRoute = (): AppRoute => {
  if (typeof window === 'undefined') return 'entry';
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const hash = window.location.hash.toLowerCase();

  if (
    path === '/nicemove' || hash === '#nicemove' || path.startsWith('/nicemove') ||
    path === '/imobflow' || hash === '#imobflow' || path.startsWith('/imobflow')
  ) {
    return 'nicemove';
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
    const targetRoute = route === 'imobflow' ? 'nicemove' : route;
    const targetPath = targetRoute === 'entry' ? '/' : `/${targetRoute}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setCurrentRoute(targetRoute);
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      {currentRoute === 'entry' && (
        <RichterGateway
          onNavigateToNiceMove={() => navigateTo('nicemove')}
          onNavigateToImobFlow={() => navigateTo('nicemove')}
          onNavigateToPortfolio={() => navigateTo('portfolio')}
        />
      )}

      {(currentRoute === 'nicemove' || currentRoute === 'imobflow') && (
        <NiceMoveLanding onNavigateHome={() => navigateTo('entry')} />
      )}

      {currentRoute === 'portfolio' && (
        <PortfolioPage onNavigateHome={() => navigateTo('entry')} />
      )}
    </ThemeProvider>
  );
};

export default App;
