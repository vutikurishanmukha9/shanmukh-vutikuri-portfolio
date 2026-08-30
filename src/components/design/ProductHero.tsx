import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import { ThreeDGlassStack } from './ThreeDGlassStack';

export const ProductHero: React.FC = () => {
  const { playClick } = useSound();

  const scrollToSection = (id: string) => {
    playClick(800, 0.03, 'sine');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20 sm:pt-28 pb-4 select-none overflow-hidden">
      
      {/* Background Technical Hairline Matrix Grid with warm amber tint */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(to right, #d97706 1px, transparent 1px), linear-gradient(to bottom, #d97706 1px, transparent 1px)',
          backgroundSize: '2.5rem 2.5rem'
        }}
      />

      {/* Ambient Copper Radial Glow Behind 3D Stage */}
      <div className="pointer-events-none absolute top-12 right-4 w-[500px] h-[500px] bg-gradient-to-br from-amber-600/20 via-amber-900/10 to-transparent blur-3xl rounded-full opacity-80 z-0" />

      {/* ========================================================================= */}
      {/* HERO STAGE: LEFT TYPOGRAPHY & BIO  vs  RIGHT 3D FLOATING GLASS CARDS */}
      {/* ========================================================================= */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Column: Headline, Pill, Discipline Strip & Bio (7 Columns) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
          
          {/* Top Pill Badge: • PRODUCT DESIGNER */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111218]/90 border border-amber-500/30 text-[10.5px] font-mono tracking-widest text-white/90 uppercase shadow-[0_0_15px_rgba(245,158,11,0.08)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.9)]" />
            <span>PRODUCT DESIGNER</span>
          </motion.div>

          {/* Main Giant Headline: 3-Tier Distinct Typography per Line */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-[28px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] sm:leading-[1.06]"
          >
            <span className="font-sans font-bold text-white block">
              Designing digital
            </span>
            <span className="font-['Kaushan_Script',cursive] font-normal text-amber-300 text-2xl sm:text-4xl md:text-5xl lg:text-6xl block tracking-normal drop-shadow-[0_2px_20px_rgba(252,211,77,0.35)] my-0.5 sm:my-1">
              products that
            </span>
            <span className="font-serif italic font-normal text-amber-500/95 drop-shadow-[0_2px_24px_rgba(245,158,11,0.4)] block">
              perform & inspire.
            </span>
          </motion.h1>

          {/* Horizontal Discipline Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3.5 gap-y-1.5 pt-1 text-[9.5px] sm:text-[10.5px] font-mono tracking-wider uppercase text-white/60"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
              <span className="text-white/90 font-medium">PRODUCT DESIGN</span>
            </div>
            <span className="text-white/20">|</span>
            <span className="hover:text-white transition-colors">UI/UX DESIGN</span>
            <span className="text-white/20">|</span>
            <span className="hover:text-white transition-colors">DESIGN SYSTEMS</span>
            <span className="text-white/20">|</span>
            <span className="hover:text-white transition-colors">INTERACTION DESIGN</span>
          </motion.div>

          {/* Bio Row & CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-3"
          >
            {/* Avatar Profile */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-gradient-to-b from-amber-500/70 via-amber-600/30 to-transparent shadow-[0_0_14px_rgba(245,158,11,0.25)] shrink-0">
                <div className="w-full h-full rounded-full bg-[#101117] overflow-hidden flex items-center justify-center text-amber-400 font-mono text-xs sm:text-sm font-bold border border-white/10">
                  SV
                </div>
              </div>
              
              <p className="text-xs sm:text-[13px] text-white/70 max-w-xs leading-relaxed font-sans">
                Product Designer crafting intuitive, impactful, and scalable digital experiences.
              </p>
            </div>

            {/* EXPLORE MY WORK CTA Button */}
            <div className="sm:ml-auto w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('works')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3 sm:py-2.5 rounded-full bg-[#111218]/90 hover:bg-[#181922] border border-amber-500/30 hover:border-amber-500/60 text-white font-mono text-xs tracking-wider uppercase transition-[background-color,border-color,transform] active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(245,158,11,0.12)] group"
              >
                <span>EXPLORE MY WORK</span>
                <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-amber-500 group-hover:text-black flex items-center justify-center transition-[background-color,color]">
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </div>

          </motion.div>

        </div>

        {/* Right Column: 3D Isometric Floating Glass Cards & Orbital Process (5 Columns) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px] lg:min-h-[400px]">
          <ThreeDGlassStack onClick={() => scrollToSection('craft-lab')} />
        </div>

      </div>

    </section>
  );
};
