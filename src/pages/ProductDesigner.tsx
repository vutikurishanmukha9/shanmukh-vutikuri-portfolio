import React, { useEffect } from 'react';
import { DesignNavigation } from '@/components/design/DesignNavigation';
import { ProductHero } from '@/components/design/ProductHero';
import { DesignProcessTimeline } from '@/components/design/DesignProcessTimeline';
import { ProjectsGrid } from '@/components/design/ProjectsGrid';
import { RedesignShowcase } from '@/components/design/RedesignShowcase';
import { CraftLab } from '@/components/design/CraftLab';
import { DesignPhilosophy } from '@/components/design/DesignPhilosophy';
import { ToolingGrid } from '@/components/design/ToolingGrid';
import { DesignSystemStash } from '@/components/design/DesignSystemStash';
import { DesignFooter } from '@/components/design/DesignFooter';

const ProductDesigner: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Vutikuri Shanmukha — Product & Interaction Designer';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#f7f8f8] selection:bg-white/20 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Subtle Hairline Grid Matrix (Linear & Raycast Aesthetic) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '3.5rem 3.5rem'
        }}
      />

      {/* Floating Header Dock */}
      <DesignNavigation />

      {/* Main Page Flow with Cohesive Editorial Spacing */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
        <ProductHero />
        <DesignProcessTimeline />
        <ProjectsGrid />
        <RedesignShowcase />
        <CraftLab />
        <DesignPhilosophy />
        <ToolingGrid />
        <DesignSystemStash />
      </main>

      {/* Luxury Dark Mode Footer with Cursive Signature Signoff */}
      <div className="relative z-10 mt-6 sm:mt-8">
        <DesignFooter />
      </div>
    </div>
  );
};

export default ProductDesigner;
