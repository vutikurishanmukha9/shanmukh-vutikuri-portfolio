import React from 'react';
import { motion } from 'framer-motion';

interface ThreeDGlassStackProps {
  onClick?: () => void;
}

export const ThreeDGlassStack: React.FC<ThreeDGlassStackProps> = ({ onClick }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[320px] sm:min-h-[380px] md:min-h-[440px] select-none overflow-visible">
      
      {/* ========================================================================= */}
      {/* ORBITAL CONSTELLATION RINGS & LABELED PROCESS NODES */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        
        {/* Inner Dashed Orbital Ellipse */}
        <div 
          className="absolute w-[280px] h-[220px] sm:w-[360px] sm:h-[280px] lg:w-[440px] lg:h-[340px] rounded-[100%] border border-amber-500/20 border-dashed"
          style={{ transform: 'rotate(-20deg)' }}
        />

        {/* Outer Solid Orbital Ellipse */}
        <div 
          className="absolute w-[340px] h-[270px] sm:w-[460px] sm:h-[360px] lg:w-[560px] lg:h-[430px] rounded-[100%] border border-amber-500/10"
          style={{ transform: 'rotate(-20deg)' }}
        />

        {/* Node 1: • RESEARCH (Top) */}
        <div className="absolute top-2 left-1/3 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0d0e14]/90 border border-amber-500/30 text-[8.5px] sm:text-[10px] font-mono tracking-widest text-white/80 uppercase shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]" />
          <span>RESEARCH</span>
        </div>

        {/* Node 2: • STRATEGY (Top Right) */}
        <div className="absolute top-8 sm:top-14 right-1 sm:right-2 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0d0e14]/90 border border-amber-500/30 text-[8.5px] sm:text-[10px] font-mono tracking-widest text-white/80 uppercase shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]" />
          <span>STRATEGY</span>
        </div>

        {/* Node 3: • DESIGN (Center Left) */}
        <div className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0d0e14]/90 border border-amber-500/30 text-[8.5px] sm:text-[10px] font-mono tracking-widest text-white/80 uppercase shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]" />
          <span>DESIGN</span>
        </div>

        {/* Node 4: • IMPACT (Bottom Right) */}
        <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-6 flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0d0e14]/90 border border-amber-500/30 text-[8.5px] sm:text-[10px] font-mono tracking-widest text-white/80 uppercase shadow-[0_0_12px_rgba(245,158,11,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,1)]" />
          <span>IMPACT</span>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3D ISOMETRIC STEPPED GLASS STACK (SVG VECTOR + AMBIENT COPPER SPECULAR) */}
      {/* ========================================================================= */}
      <motion.div 
        role="button"
        tabIndex={0}
        aria-label="3D Interactive Layered Glass Design Specimen"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-[460/420] flex items-center justify-center cursor-pointer group"
      >
        {/* Ambient Floor Glow Spill */}
        <div className="absolute -bottom-4 sm:-bottom-6 right-4 sm:right-8 w-48 sm:w-72 h-20 sm:h-28 bg-gradient-to-r from-amber-600/40 via-amber-500/50 to-transparent blur-3xl rounded-full pointer-events-none" />

        <svg
          viewBox="0 0 460 420"
          className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ambient Copper Bevel Gradient */}
            <linearGradient id="copperBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.4" />
            </linearGradient>

            {/* Glowing Intense Bottom Edge */}
            <linearGradient id="intenseCopper" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#f59e0b" stopOpacity="1" />
              <stop offset="70%" stopColor="#fbbf24" stopOpacity="1" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8" />
            </linearGradient>

            {/* Smoked Dark Glass Gradient (Front Panel 1) */}
            <linearGradient id="glassPanel1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2a2d3a" stopOpacity="0.75" />
              <stop offset="40%" stopColor="#14161f" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0a0b10" stopOpacity="0.95" />
            </linearGradient>

            {/* Glass Panel 2 */}
            <linearGradient id="glassPanel2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e202a" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#101118" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#08090d" stopOpacity="0.95" />
            </linearGradient>

            {/* Glass Panel 3 */}
            <linearGradient id="glassPanel3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1c24" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#07080c" stopOpacity="0.92" />
            </linearGradient>

            {/* Glass Panel 4 (Back Base) */}
            <linearGradient id="glassPanel4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#231f24" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06070a" stopOpacity="0.95" />
            </linearGradient>

            {/* Diagonal Specular Light Glare */}
            <linearGradient id="specularGlare" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Filter for Copper Glow Blur */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ========================================================================= */}
          {/* PANEL 4: BACK/TOP-MOST SLAB (OFFSET RIGHT-TOP) */}
          {/* ========================================================================= */}
          <g transform="translate(180, 50)">
            <polygon
              points="10,0 200,45 150,180 -40,135"
              fill="url(#glassPanel4)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
            {/* Copper Bevel Rim */}
            <line
              x1="-40"
              y1="135"
              x2="150"
              y2="180"
              stroke="url(#copperBevel)"
              strokeWidth="2"
              filter="url(#neonGlow)"
            />
          </g>

          {/* ========================================================================= */}
          {/* PANEL 3: MIDDLE-BACK SLAB */}
          {/* ========================================================================= */}
          <g transform="translate(140, 95)">
            <polygon
              points="10,0 200,45 150,180 -40,135"
              fill="url(#glassPanel3)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1.2"
            />
            <line
              x1="-40"
              y1="135"
              x2="150"
              y2="180"
              stroke="url(#copperBevel)"
              strokeWidth="2.5"
              filter="url(#neonGlow)"
            />
          </g>

          {/* ========================================================================= */}
          {/* PANEL 2: MIDDLE-FRONT SLAB */}
          {/* ========================================================================= */}
          <g transform="translate(95, 145)">
            <polygon
              points="10,0 200,45 150,180 -40,135"
              fill="url(#glassPanel2)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1.2"
            />
            {/* Top Light Glare */}
            <polygon
              points="10,0 200,45 180,70 10,25"
              fill="url(#specularGlare)"
            />
            {/* Copper Bevel Rim */}
            <line
              x1="-40"
              y1="135"
              x2="150"
              y2="180"
              stroke="url(#copperBevel)"
              strokeWidth="3"
              filter="url(#neonGlow)"
            />
          </g>

          {/* ========================================================================= */}
          {/* PANEL 1: FRONT-MOST HERO SLAB (MAIN TRANSLUCENT GLASS + BRIGHT RIM) */}
          {/* ========================================================================= */}
          <g transform="translate(45, 195)">
            {/* Glass Body */}
            <polygon
              points="10,0 200,45 150,180 -40,135"
              fill="url(#glassPanel1)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.5"
            />
            
            {/* Specular Diagonal Sheen Reflection */}
            <polygon
              points="10,0 120,25 30,150 -40,135"
              fill="url(#specularGlare)"
            />

            {/* Hairline Top Edge Highlight */}
            <line
              x1="10"
              y1="0"
              x2="200"
              y2="45"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1.5"
            />

            {/* Glowing Intense Copper Bottom Rim */}
            <line
              x1="-40"
              y1="135"
              x2="150"
              y2="180"
              stroke="url(#intenseCopper)"
              strokeWidth="4.5"
              strokeLinecap="round"
              filter="url(#neonGlow)"
            />

            {/* Right Edge Copper Reflection */}
            <line
              x1="150"
              y1="180"
              x2="200"
              y2="45"
              stroke="url(#copperBevel)"
              strokeWidth="2"
              opacity="0.8"
            />
          </g>
        </svg>

      </motion.div>

    </div>
  );
};
