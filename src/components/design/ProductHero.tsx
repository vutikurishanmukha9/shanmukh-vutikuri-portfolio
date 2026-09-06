import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Terminal, Activity, Box } from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import { DesignWorkstationCanvas } from './DesignWorkstationCanvas';

export const ProductHero: React.FC = () => {
  const { playClick } = useSound();
  const [isExecutiveMode, setIsExecutiveMode] = useState(false);

  const scrollToSection = (id: string) => {
    playClick(800, 0.03, 'sine');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleExecutiveMode = () => {
    playClick(isExecutiveMode ? 650 : 900, 0.03, 'triangle');
    setIsExecutiveMode(!isExecutiveMode);
  };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 sm:pt-20 pb-6 select-none overflow-hidden">
      
      {/* Background Technical Hairline Matrix Grid (Linear & Raycast Aesthetic) */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '3rem 3rem'
        }}
      />

      {/* ========================================================================= */}
      {/* HERO STAGE: LEFT TYPOGRAPHY & BIO  vs  RIGHT INTERACTIVE WORKSTATION */}
      {/* ========================================================================= */}
      <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        
        {/* Left Column: Headline, Pill, Discipline Strip & Bio (7 Columns) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Top Control Strip: Disciplinary Pill Badge + 60s Executive Dossier Switcher */}
          <div className="flex flex-wrap items-center gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111218] border border-white/10 text-[10.5px] font-mono tracking-widest text-white/90 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              <span>STAFF PRODUCT DESIGNER</span>
            </motion.div>

            {/* Fast-Track 60s Recruiter / Executive Dossier Switcher (No AI slop icons) */}
            <button
              type="button"
              onClick={toggleExecutiveMode}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer border ${
                isExecutiveMode
                  ? 'bg-white text-black border-white font-semibold shadow-sm'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white border-white/10'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>{isExecutiveMode ? 'Executive Dossier [Active]' : '60s Executive Dossier'}</span>
            </button>
          </div>

          {/* Main Giant Headline: Crisp Negative-Tracking Typography (Linear & Apple Style) */}
          {/* Main Giant Headline: 3 Distinct Typographies for the 3 Lines */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 sm:space-y-1.5 text-left"
          >
            {/* Line 1: Modern Swiss Grotesk Sans (Plus Jakarta Sans) */}
            <span 
              className="block font-jakarta text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium tracking-tight text-white/80 leading-[1.15]"
              style={{ fontFamily: "'Plus Jakarta Sans', var(--font-primary), sans-serif" }}
            >
              Designing digital
            </span>

            {/* Line 2: Editorial Luxury Italic Serif (Instrument Serif) */}
            <span 
              className="block font-instrument italic text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal text-white tracking-normal leading-[1.08] my-0.5"
              style={{ fontFamily: "'Instrument Serif', var(--font-display), Georgia, serif" }}
            >
              products with clean systems
            </span>

            {/* Line 3: Architectural Geometric Display Grotesk (Space Grotesk) */}
            <span 
              className="block font-grotesk text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-[-0.035em] text-[#f7f8f8] leading-[1.15]"
              style={{ fontFamily: "'Space Grotesk', var(--font-primary), sans-serif" }}
            >
              thoughtful details <span className="text-white/40 font-normal">&amp;</span> craft.
            </span>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed font-sans"
          >
            Building clean user interfaces, reliable design systems, and fast, smooth interactions for real-world products.
          </motion.p>

          {/* Executive Mode Drawer (When Toggled) */}
          <AnimatePresence>
            {isExecutiveMode && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1015] border border-white/15 space-y-3 shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase font-semibold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-white" />
                      QUICK SUMMARY // 3 CORE STRENGTHS
                    </span>
                    <span className="text-[10px] font-mono text-white/40">AVAILABLE FOR Q3 2026 ROLES</span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-white font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>7 Shipped Apps</span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed font-sans">
                        Full-lifecycle products across AI tools, privacy scanners, and interactive 3D web.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-white font-medium">
                        <Layers className="w-3.5 h-3.5 text-white/80" />
                        <span>Design Systems</span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed font-sans">
                        Figma Variables tied directly to React and TypeScript tokens with 100% consistency.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-white font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                        <span>Production Code</span>
                      </div>
                      <p className="text-[11px] text-white/60 leading-relaxed font-sans">
                        Shipped in React & TypeScript with fast performance, smooth motion, and zero layout shifts.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Horizontal Discipline Telemetry Strip (Linear Monospaced Badges) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/60"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="text-white font-medium">PRODUCT DESIGN</span>
            </div>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors">DESIGN SYSTEMS</span>
            <span className="text-white/20">/</span>
            <span className="hover:text-white transition-colors">INTERACTION DESIGN</span>
            <span className="text-white/20">/</span>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium font-mono tabular-nums">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>106 OPEN COMPONENTS</span>
            </div>
          </motion.div>

          {/* Bio Row & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-3"
          >
            {/* Avatar Profile with Precision Hairline Ring */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-0.5 bg-white/10 shrink-0">
                <div className="w-full h-full rounded-full bg-[#0d0e12] overflow-hidden flex items-center justify-center text-white font-mono text-xs sm:text-sm font-semibold border border-white/10">
                  SV
                </div>
              </div>
              
              <div>
                <span className="text-xs font-jakarta text-white font-semibold tracking-tight block">Vutikuri Shanmukha</span>
                <span className="text-[11px] text-white/50 font-mono block">Product &amp; Interaction Designer</span>
              </div>
            </div>

            {/* Action Buttons: View Projects + Browse 106 Components */}
            <div className="sm:ml-auto flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('works')}
                className="w-full sm:w-auto group inline-flex items-center justify-between sm:justify-center gap-3 px-5 py-2.5 rounded-full bg-white text-black hover:bg-white/90 font-mono text-xs tracking-wider transition-all duration-200 active:scale-95 cursor-pointer shadow-lg font-semibold"
              >
                <span>View Projects</span>
                <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center transition-all duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3 text-black" />
                </div>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('design-stash')}
                className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 font-mono text-xs tracking-wider transition-all duration-200 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(52,211,153,0.15)] font-semibold"
              >
                <Box className="w-3.5 h-3.5 text-emerald-400" />
                <span>Browse 106 Components</span>
              </button>
            </div>

          </motion.div>

        </div>

        {/* Right Column: Live Interactive Design Workstation (Replaces Fake 3D SVG Vectors) */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[380px] lg:min-h-[440px]">
          <DesignWorkstationCanvas onNavigateToWorks={() => scrollToSection('works')} />
        </div>

      </div>

    </section>
  );
};
