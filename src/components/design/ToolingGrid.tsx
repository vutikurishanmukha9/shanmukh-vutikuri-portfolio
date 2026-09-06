import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Figma, Code, Palette, Box, Sliders, ShieldCheck } from 'lucide-react';

const TOOLS = [
  { 
    name: 'Figma Variables & Auto-Layout', 
    category: 'Design Systems & Component Sets', 
    level: 'Advanced Figma Systems', 
    icon: Figma 
  },
  { 
    name: 'Design Tokens & Style Dictionary', 
    category: 'Design Tokens & Color Scales', 
    level: 'Production Ready', 
    icon: Layers 
  },
  { 
    name: 'React 19 & Radix Primitives', 
    category: 'Accessible Web Components', 
    level: 'Frontend Engineering', 
    icon: Code 
  },
  { 
    name: 'Framer Motion & Spring Physics', 
    category: 'Smooth Animations & Transitions', 
    level: 'Fluid 60fps Motion', 
    icon: Sliders 
  },
  { 
    name: 'Spline & 3D Spatial Canvas', 
    category: '3D Web & Interactive Graphics', 
    level: 'Interactive 3D', 
    icon: Box 
  },
  { 
    name: 'WCAG 2.2 AAA Accessibility', 
    category: 'Screen Readers & Keyboard Navigation', 
    level: 'Universal Accessibility', 
    icon: ShieldCheck 
  },
];

export const ToolingGrid: React.FC = () => {
  return (
    <section id="tools" className="relative scroll-mt-24 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3 sm:mb-4 border-b border-white/5 pb-3">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-primary uppercase">
            <Palette className="w-3.5 h-3.5" />
            <span>TOOLS &amp; TECHNOLOGIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.035em] text-[#f7f8f8] font-jakarta">
            Production <span className="font-instrument italic font-normal tracking-normal text-white/95">Tooling</span> &amp; Tech Stack
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed font-sans">
          The design software, coding frameworks, and accessibility standards I use every day.
        </p>
      </div>

      {/* Grid of Tooling Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {TOOLS.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="p-4 sm:p-5 rounded-xl bg-[#0d0e12] border border-white/5 hover:border-white/20 transition-[border-color,background-color] duration-300 flex items-start justify-between gap-3 group"
            >
              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-semibold text-white group-hover:text-primary transition-colors font-jakarta tracking-tight">
                  {tool.name}
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed font-sans">{tool.category}</p>
                <span className="text-[9.5px] font-mono text-emerald-400 block pt-1">
                  {tool.level}
                </span>
              </div>

              <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 group-hover:text-white transition-colors shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
