import React, { useEffect } from 'react';
import { DesignNavigation } from '@/components/design/DesignNavigation';
import { ProductHero } from '@/components/design/ProductHero';
import { ProjectsGrid } from '@/components/design/ProjectsGrid';
import { CraftLab } from '@/components/design/CraftLab';
import { DesignPhilosophy } from '@/components/design/DesignPhilosophy';
import { ToolingGrid } from '@/components/design/ToolingGrid';
import { DesignFooter } from '@/components/design/DesignFooter';

const ProductDesigner: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Vutikuri Shanmukha — Product & Interaction Designer';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07080a] text-white selection:bg-primary/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Geodesic Specular Noise Texture & Subtle Ambient Radial Glow */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12) 0%, transparent 60%),
                            radial-gradient(circle at 80% 60%, rgba(245, 158, 11, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.04) 0%, transparent 50%)`
        }}
      />

      {/* Subtle Hairline Grid Matrix */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Floating Header Dock */}
      <DesignNavigation />

      {/* Main Page Flow with Tight Proportional Spacing */}
      <main className="relative z-10 space-y-0">
        <ProductHero />
        <ProjectsGrid />
        <CraftLab />
        <DesignPhilosophy />
        <ToolingGrid />
      </main>

      {/* Dedicated Luxury Dark Mode Footer with Cursive Signature Signoff */}
      <div className="relative z-10 mt-3 sm:mt-4">
        <DesignFooter />
      </div>
    </div>
  );
};

export default ProductDesigner;
