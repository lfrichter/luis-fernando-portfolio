import React, { useEffect } from 'react';
import { NICEMOVE_CONFIG } from '@/config/nicemove';
import { Navbar } from '@/components/nicemove/Navbar';
import { Hero } from '@/components/nicemove/Hero';
import { PainPoints } from '@/components/nicemove/PainPoints';
import { HowItWorks } from '@/components/nicemove/HowItWorks';
import { Features } from '@/components/nicemove/Features';
import { VisualProof } from '@/components/nicemove/VisualProof';
import { TechDiff } from '@/components/nicemove/TechDiff';
import { NoFriction } from '@/components/nicemove/NoFriction';
import { CTA } from '@/components/nicemove/CTA';
import { Footer } from '@/components/nicemove/Footer';

interface NiceMoveLandingProps {
  onNavigateHome?: () => void;
}

export const NiceMoveLanding: React.FC<NiceMoveLandingProps> = ({ onNavigateHome }) => {
  // Update document title and meta for SEO
  useEffect(() => {
    const originalTitle = document.title;
    document.title = NICEMOVE_CONFIG.meta.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    if (metaDesc) {
      metaDesc.setAttribute('content', NICEMOVE_CONFIG.meta.description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', NICEMOVE_CONFIG.meta.description);
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
      <Navbar onBackToPortfolio={onNavigateHome} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. A Dor (Gargalos) */}
        <PainPoints />

        {/* 4. Como Funciona */}
        <HowItWorks />

        {/* 5. Capacidades / Features */}
        <Features />

        {/* 6. Prova Visual (WhatsApp Fiel) */}
        <VisualProof />

        {/* 7. Diferencial Técnico & Regras Determinísticas */}
        <TechDiff />

        {/* 8. Simplicidade Operacional (Sem trocar ferramentas) */}
        <NoFriction />

        {/* 9. CTA Final */}
        <CTA />
      </main>

      {/* 10. Footer */}
      <Footer onBackToPortfolio={onNavigateHome} />
    </div>
  );
};

// Backward-compatible alias
export const ImobFlowLanding = NiceMoveLanding;
export default NiceMoveLanding;
