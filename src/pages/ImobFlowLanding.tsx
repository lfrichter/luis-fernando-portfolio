import React, { useEffect } from 'react';
import { IMOBFLOW_CONFIG } from '@/config/imobflow';
import { ImobFlowNavbar } from '@/components/imobflow/ImobFlowNavbar';
import { ImobFlowHero } from '@/components/imobflow/ImobFlowHero';
import { ImobFlowPainPoints } from '@/components/imobflow/ImobFlowPainPoints';
import { ImobFlowHowItWorks } from '@/components/imobflow/ImobFlowHowItWorks';
import { ImobFlowFeatures } from '@/components/imobflow/ImobFlowFeatures';
import { ImobFlowVisualProof } from '@/components/imobflow/ImobFlowVisualProof';
import { ImobFlowTechDiff } from '@/components/imobflow/ImobFlowTechDiff';
import { ImobFlowNoFriction } from '@/components/imobflow/ImobFlowNoFriction';
import { ImobFlowCTA } from '@/components/imobflow/ImobFlowCTA';
import { ImobFlowFooter } from '@/components/imobflow/ImobFlowFooter';

interface ImobFlowLandingProps {
  onNavigateHome?: () => void;
}

export const ImobFlowLanding: React.FC<ImobFlowLandingProps> = ({ onNavigateHome }) => {
  // Update document title and meta for SEO
  useEffect(() => {
    const originalTitle = document.title;
    document.title = IMOBFLOW_CONFIG.meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (metaDesc) {
      metaDesc.setAttribute('content', IMOBFLOW_CONFIG.meta.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', IMOBFLOW_CONFIG.meta.description);
      document.head.appendChild(metaDesc);
    }

    // Scroll to top on load
    window.scrollTo(0, 0);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* 1. Header / Navbar */}
      <ImobFlowNavbar onBackToPortfolio={onNavigateHome} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero */}
        <ImobFlowHero />

        {/* 3. A Dor (Gargalos) */}
        <ImobFlowPainPoints />

        {/* 4. Como Funciona */}
        <ImobFlowHowItWorks />

        {/* 5. Capacidades / Features */}
        <ImobFlowFeatures />

        {/* 6. Prova Visual (WhatsApp Fiel) */}
        <ImobFlowVisualProof />

        {/* 7. Diferencial Técnico & Regras Determinísticas */}
        <ImobFlowTechDiff />

        {/* 8. Simplicidade Operacional (Sem trocar ferramentas) */}
        <ImobFlowNoFriction />

        {/* 9. CTA Final */}
        <ImobFlowCTA />
      </main>

      {/* 10. Footer */}
      <ImobFlowFooter onBackToPortfolio={onNavigateHome} />
    </div>
  );
};

export default ImobFlowLanding;
