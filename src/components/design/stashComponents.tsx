import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Volume2, 
  SlidersHorizontal, 
  Monitor, 
  Command, 
  MousePointer, 
  ArrowUpRight, 
  Sliders, 
  Activity, 
  Trophy, 
  Repeat, 
  Navigation, 
  Search, 
  Code2, 
  Terminal, 
  Ruler, 
  Bell, 
  ChevronDown, 
  Users, 
  Gauge, 
  GitCommit, 
  Split, 
  Tag, 
  ToggleRight, 
  Hash, 
  Palette, 
  Layers, 
  CheckCircle2, 
  UploadCloud, 
  AlertCircle, 
  KeyRound, 
  Play, 
  Square, 
  RotateCcw, 
  BatteryCharging, 
  Maximize2, 
  Folder, 
  FileText, 
  HelpCircle, 
  ExternalLink,
  Check,
  ChevronRight,
  Plus,
  Clock,
  Eye,
  Copy,
  Focus,
  MousePointerClick,
  Type,
  Orbit,
  FolderOpen
} from 'lucide-react';

export type StashCategory = 
  | 'Surfaces & Cards' 
  | 'Controls & Navigation' 
  | 'Haptics & Motion' 
  | 'Data & Telemetry' 
  | 'Feedback & Overlays'
  | 'Developer & System Tools'
  | 'React Bits & Creative'
  | 'Hooks & Utilities';

export interface StashComponent {
  id: string;
  name: string;
  category: StashCategory;
  description: string;
  icon: React.ElementType;
  shadcnCommand?: string;
  previewComponent: React.ReactNode;
  codeSnippet: string;
}

export interface StashStateContext {
  playClick: (freq?: number, duration?: number, type?: 'sine' | 'triangle' | 'square' | 'sawtooth') => void;
  activeSegment: 'design' | 'code' | 'review';
  setActiveSegment: (v: 'design' | 'code' | 'review') => void;
  activeViewport: 'desktop' | 'tablet' | 'mobile';
  setActiveViewport: (v: 'desktop' | 'tablet' | 'mobile') => void;
  splitPos: number;
  setSplitPos: (v: number) => void;
  spotlightPos: { x: number; y: number };
  setSpotlightPos: (v: { x: number; y: number }) => void;
  isSpotlightHovered: boolean;
  setIsSpotlightHovered: (v: boolean) => void;
  paletteQuery: string;
  setPaletteQuery: (v: string) => void;
  switchEnabled: boolean;
  setSwitchEnabled: (v: boolean) => void;
  accordionOpen: number | null;
  setAccordionOpen: (v: number | null) => void;
  selectedTags: string[];
  setSelectedTags: (v: string[]) => void;
  dropdownOpen: boolean;
  setDropdownOpen: (v: boolean) => void;
  islandState: 'idle' | 'call' | 'sync';
  setIslandState: (v: 'idle' | 'call' | 'sync') => void;
  counterVal: number;
  setCounterVal: (updater: (prev: number) => number) => void;
  selectedColorToken: string;
  setSelectedColorToken: (v: string) => void;
  diffView: 'split' | 'unified';
  setDiffView: (v: 'split' | 'unified') => void;
  gaugeVal: number;
  setGaugeVal: (v: number) => void;
  pricingInterval: 'monthly' | 'annually';
  setPricingInterval: (v: 'monthly' | 'annually') => void;
  passwordInput: string;
  setPasswordInput: (v: string) => void;
  timerCount: number;
  setTimerCount: (updater: (prev: number) => number) => void;
  timerRunning: boolean;
  setTimerRunning: (v: boolean) => void;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  confirmOpen: boolean;
  setConfirmOpen: (v: boolean) => void;
  cardSwapIndex: number;
  setCardSwapIndex: (updater: (prev: number) => number) => void;
  trueFocusIndex: number;
  setTrueFocusIndex: (v: number) => void;
  folderOpen: boolean;
  setFolderOpen: (v: boolean) => void;
  scrambleKey: number;
  setScrambleKey: (updater: (prev: number) => number) => void;
  dockHovered: number | null;
  setDockHovered: (v: number | null) => void;
  magnetPos: { x: number; y: number };
  setMagnetPos: (v: { x: number; y: number }) => void;
  tiltedRot: { x: number; y: number };
  setTiltedRot: (v: { x: number; y: number }) => void;
  stepperStep: number;
  setStepperStep: (updater: (prev: number) => number) => void;
  pillNavTab: string;
  setPillNavTab: (v: string) => void;
  isMarqueePaused: boolean;
  setIsMarqueePaused: (v: boolean) => void;
  gradientSpeed: number;
  setGradientSpeed: (v: number) => void;
  floatingDockHovered: number | null;
  setFloatingDockHovered: (v: number | null) => void;
  morphDialogOpen: boolean;
  setMorphDialogOpen: (v: boolean) => void;
  activeAnimatedTab: string;
  setActiveAnimatedTab: (v: string) => void;
  lensZoom: number;
  setLensZoom: (v: number) => void;
  stackCardsTop: number;
  setStackCardsTop: (updater: (prev: number) => number) => void;
}

export function buildStashComponents(ctx: StashStateContext): StashComponent[] {
  const { playClick } = ctx;

  return [
    // =========================================================================
    // 1. SURFACES & CARDS (8 items)
    // =========================================================================
    {
      id: 'double-bezel',
      name: 'Double-Bezel Hardware Enclosure',
      category: 'Surfaces & Cards',
      description: 'Concentric nested container architecture inspired by Apple hardware and Linear panels with hairline borders and top specular rays.',
      icon: Box,
      previewComponent: (
        <div className="relative rounded-3xl p-2 bg-white/[0.04] border border-white/10 shadow-2xl max-w-md mx-auto group w-full">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="rounded-[calc(1.5rem-0.125rem)] bg-[#0b0c10] border border-white/5 p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                MACHINED SPECIMEN
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <h4 className="text-base font-semibold text-white">Concentric Double-Bezel Card</h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Outer chassis (r: 24px) wraps inner core (r: 22px) with mathematically aligned padding for zero border distortion.
            </p>
          </div>
        </div>
      ),
      codeSnippet: `// DoubleBezelCard.tsx — Concentric Machined Surface
import React from 'react';

interface DoubleBezelCardProps {
  children: React.ReactNode;
  className?: string;
}

export const DoubleBezelCard: React.FC<DoubleBezelCardProps> = ({ children, className = '' }) => {
  return (
    <div className="relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.035] border border-white/10 shadow-2xl overflow-hidden group">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      <div className={\`relative z-10 rounded-[calc(1.5rem-0.125rem)] bg-[#0b0c10] border border-white/5 p-6 sm:p-8 \${className}\`}>
        {children}
      </div>
    </div>
  );
};`
    },
    {
      id: 'spotlight-card',
      name: 'Cursor-Tracking Spotlight Shimmer Card',
      category: 'Surfaces & Cards',
      description: 'Interactive mouse-tracking spotlight gradient creating authentic optical specular highlights on dark surfaces.',
      icon: MousePointer,
      previewComponent: (
        <div 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          onMouseEnter={() => ctx.setIsSpotlightHovered(true)}
          onMouseLeave={() => ctx.setIsSpotlightHovered(false)}
          className="relative rounded-2xl p-6 bg-[#0c0d12] border border-white/10 overflow-hidden max-w-md mx-auto space-y-3 cursor-pointer select-none w-full"
        >
          <div 
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity: ctx.isSpotlightHovered ? 1 : 0,
              background: `radial-gradient(400px circle at ${ctx.spotlightPos.x}px ${ctx.spotlightPos.y}px, rgba(255,255,255,0.08), transparent 80%)`
            }}
          />
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block">
            CURSOR ILLUMINATION SPEC
          </span>
          <h4 className="text-base font-semibold text-white">Dynamic Optical Spotlight</h4>
          <p className="text-xs text-white/60 font-sans leading-relaxed">
            Move cursor over this surface. A physical 400px radial specular illumination tracks pointer position in real time.
          </p>
        </div>
      ),
      codeSnippet: `// SpotlightCard.tsx — Cursor-Tracking Specular Card
import React, { useState, useRef } from 'react';

export const SpotlightCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl p-6 bg-[#0b0c10] border border-white/10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: \`radial-gradient(450px circle at \${position.x}px \${position.y}px, rgba(255,255,255,0.07), transparent 80%)\`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};`
    },
    {
      id: 'viewport-frame',
      name: 'Apple Studio Display Viewport Switcher',
      category: 'Surfaces & Cards',
      description: 'Mac Studio Display frame with traffic light controls and fluid responsive aspect-ratio switcher (Desktop, Tablet, Mobile).',
      icon: Monitor,
      previewComponent: (
        <div className="rounded-2xl bg-[#0e1015] border border-white/15 overflow-hidden max-w-md mx-auto shadow-xl w-full">
          <div className="px-3.5 py-2 bg-[#14161f] border-b border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-1.5 text-[10.5px] text-white/60">Retina Frame</span>
            </div>
            <div className="flex items-center gap-1 bg-black/50 p-0.5 rounded-lg border border-white/10 text-[10px]">
              {(['desktop', 'tablet', 'mobile'] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => {
                    playClick(850, 0.02, 'sine');
                    ctx.setActiveViewport(v);
                  }}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                    ctx.activeViewport === v ? 'bg-white/20 text-white font-semibold' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="p-4 bg-[#07080b] flex items-center justify-center min-h-[140px]">
            <motion.div 
              layout
              className={`border border-white/15 rounded-lg bg-[#111218] p-4 text-center transition-all duration-300 flex items-center justify-center ${
                ctx.activeViewport === 'desktop' ? 'w-full aspect-[16/10]' : ctx.activeViewport === 'tablet' ? 'w-4/5 aspect-[4/3]' : 'w-1/2 aspect-[9/16]'
              }`}
            >
              <span className="text-[10.5px] font-mono text-white/60">
                {ctx.activeViewport.toUpperCase()} // RETINA OK
              </span>
            </motion.div>
          </div>
        </div>
      ),
      codeSnippet: `// ViewportDisplayFrame.tsx — Apple Studio Frame with Viewport Switcher
import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Viewport = 'desktop' | 'tablet' | 'mobile';

export const ViewportDisplayFrame: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [viewport, setViewport] = useState<Viewport>('desktop');

  const aspectClass = 
    viewport === 'desktop' ? 'aspect-[16/10] w-full' :
    viewport === 'tablet' ? 'aspect-[4/3] max-w-[85%] mx-auto' :
    'aspect-[9/16] max-h-[380px] max-w-[220px] mx-auto';

  return (
    <div className="rounded-2xl border border-white/15 overflow-hidden bg-black/95 shadow-2xl">
      <div className="px-4 py-2.5 bg-[#121319] border-b border-white/10 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-white/70 text-[11px]">{title}</span>
        </div>
        <div className="flex items-center gap-1 bg-black/50 p-0.5 rounded-lg border border-white/10">
          {(['desktop', 'tablet', 'mobile'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewport(mode)}
              className={\`px-2 py-0.5 rounded text-[10px] font-mono capitalize \${
                viewport === mode ? 'bg-white/20 text-white' : 'text-white/40'
              }\`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 bg-[#07080a] flex items-center justify-center">
        <motion.div layout className={\`relative overflow-hidden rounded-xl \${aspectClass}\`}>
          {children}
        </motion.div>
      </div>
    </div>
  );
};`
    },
    {
      id: 'pricing-tier-card',
      name: 'Linear-Tier Dark Luxury Pricing Matrix',
      category: 'Surfaces & Cards',
      description: 'SaaS tier card with annual/monthly switch, specular gradient border, bullet checkmarks, and primary CTA.',
      icon: Layers,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/15 max-w-md mx-auto space-y-4 w-full">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              ENTERPRISE PLATFORM
            </span>
            <div className="inline-flex p-0.5 rounded-lg bg-black/60 border border-white/10 text-[10px] font-mono">
              <button 
                type="button"
                onClick={() => ctx.setPricingInterval('monthly')}
                className={`px-2 py-0.5 rounded ${ctx.pricingInterval === 'monthly' ? 'bg-white/20 text-white' : 'text-white/40'}`}
              >
                MO
              </button>
              <button 
                type="button"
                onClick={() => ctx.setPricingInterval('annually')}
                className={`px-2 py-0.5 rounded ${ctx.pricingInterval === 'annually' ? 'bg-white/20 text-white' : 'text-white/40'}`}
              >
                YR (-20%)
              </button>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono text-white">
              {ctx.pricingInterval === 'annually' ? '$79' : '$99'}
            </span>
            <span className="text-xs font-mono text-white/50">/ seat / month</span>
          </div>
          <ul className="space-y-2 text-xs font-mono text-white/70">
            {['Infinite Design System Sync', 'Sub-millisecond Webhooks', 'Cryptographic EXIF Purge'].map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <button 
            type="button" 
            onClick={() => playClick(850, 0.03, 'sine')}
            className="w-full py-2.5 rounded-xl bg-white text-black hover:bg-white/90 font-mono text-xs font-semibold uppercase tracking-wider transition-all"
          >
            Deploy Workstation
          </button>
        </div>
      ),
      codeSnippet: `// PricingTierCard.tsx — Linear-Grade Pricing Matrix
import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PricingTierCard: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/15 space-y-5">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">ENTERPRISE</span>
        <button 
          onClick={() => setIsAnnual(!isAnnual)}
          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/80"
        >
          {isAnnual ? 'ANNUAL (-20%)' : 'MONTHLY'}
        </button>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold font-mono text-white">\${isAnnual ? 79 : 99}</span>
        <span className="text-xs font-mono text-white/50">/ seat / month</span>
      </div>
      <ul className="space-y-2 text-xs font-mono text-white/70">
        <li className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Real-time token distribution</span>
        </li>
      </ul>
      <button className="w-full py-2.5 rounded-xl bg-white text-black font-mono text-xs font-semibold uppercase">
        Deploy Workstation
      </button>
    </div>
  );
};`
    },
    {
      id: 'skeleton-shimmer',
      name: 'Zero-Layout-Shift Shimmer Skeleton Loader',
      category: 'Surfaces & Cards',
      description: 'Hardware-accelerated CSS linear gradient shimmer loader for dark mode surfaces without visual jarring.',
      icon: Box,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 max-w-md mx-auto space-y-4 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="h-3 w-3/5 rounded bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
              </div>
              <div className="h-2 w-2/5 rounded bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
              </div>
            </div>
          </div>
          <div className="h-16 rounded-xl bg-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
          </div>
        </div>
      ),
      codeSnippet: `// SkeletonShimmer.tsx — Zero-Layout-Shift Placeholder
import React from 'react';

export const SkeletonShimmer: React.FC<{ className?: string }> = ({ className = 'h-4 w-full' }) => {
  return (
    <div className={\`relative overflow-hidden rounded bg-white/5 \${className}\`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite]" />
    </div>
  );
};`
    },
    {
      id: 'bento-grid-panel',
      name: 'Linear Border-Beam Bento Container',
      category: 'Surfaces & Cards',
      description: 'Asymmetric responsive bento box with subtle corner crosshairs, mono badges, and perimeter border-beam stroke.',
      icon: Box,
      previewComponent: (
        <div className="relative rounded-2xl p-6 bg-[#08090d] border border-white/15 max-w-md mx-auto space-y-3 w-full overflow-hidden">
          <div className="absolute top-2 left-2 text-[9px] font-mono text-white/20 select-none">+</div>
          <div className="absolute top-2 right-2 text-[9px] font-mono text-white/20 select-none">+</div>
          <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/20 select-none">+</div>
          <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/20 select-none">+</div>

          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
              BENTO SPECIMEN // 01
            </span>
            <span className="text-[10px] font-mono text-white/40">16:9 RATIO</span>
          </div>
          <h4 className="text-base font-semibold text-white">Precision Bento Cell</h4>
          <p className="text-xs text-white/60 font-sans leading-relaxed">
            Engineered for high-density dashboard layouts with typographic discipline and zero AI ornament slop.
          </p>
        </div>
      ),
      codeSnippet: `// BentoCell.tsx — Architectural Bento Container
import React from 'react';

export const BentoCell: React.FC<{ label: string; title: string; children: React.ReactNode }> = ({ label, title, children }) => {
  return (
    <div className="relative rounded-2xl p-6 bg-[#08090d] border border-white/15 overflow-hidden">
      <span className="absolute top-2 left-2 text-[9px] font-mono text-white/20 select-none">+</span>
      <span className="absolute top-2 right-2 text-[9px] font-mono text-white/20 select-none">+</span>
      <span className="absolute bottom-2 left-2 text-[9px] font-mono text-white/20 select-none">+</span>
      <span className="absolute bottom-2 right-2 text-[9px] font-mono text-white/20 select-none">+</span>
      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">{label}</span>
      <h4 className="text-base font-semibold text-white mb-2">{title}</h4>
      <div className="text-xs text-white/65 font-sans leading-relaxed">{children}</div>
    </div>
  );
};`
    },
    {
      id: 'glass-modal-card',
      name: 'Frosted Acrylic Modal Dialogue Card',
      category: 'Surfaces & Cards',
      description: 'Double-frosted floating modal dialogue with 24px backdrop blur, subtle inner specular rim, and dismiss mechanics.',
      icon: Box,
      previewComponent: (
        <div className="relative rounded-2xl p-5 bg-[#0f1016]/90 backdrop-blur-2xl border border-white/20 shadow-2xl max-w-md mx-auto space-y-3 w-full">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
              CRYPTOGRAPHIC HANDSHAKE
            </span>
            <span className="text-[10px] font-mono text-white/40">ESC</span>
          </div>
          <h4 className="text-sm font-semibold text-white">Authorize Telemetry Pipeline?</h4>
          <p className="text-xs text-white/65 leading-relaxed font-sans">
            Establishing hardware-accelerated WebSocket bridge to telemetry node cluster (p99 latency &lt; 14ms).
          </p>
          <div className="flex justify-end gap-2 pt-2">
            <button 
              type="button" 
              onClick={() => playClick(600, 0.02, 'sine')}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 text-xs font-mono cursor-pointer"
            >
              Abort
            </button>
            <button 
              type="button" 
              onClick={() => playClick(900, 0.03, 'sine')}
              className="px-3 py-1.5 rounded-lg bg-white text-black hover:bg-white/90 text-xs font-mono font-semibold cursor-pointer"
            >
              Authorize Node
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// GlassModal.tsx — Frosted Acrylic Dialog Surface
import React from 'react';

export const GlassModal: React.FC<{
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}> = ({ title, children, onConfirm, onCancel }) => {
  return (
    <div className="rounded-2xl p-6 bg-[#0f1016]/90 backdrop-blur-2xl border border-white/20 shadow-2xl space-y-4">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="text-xs text-white/70 font-sans">{children}</div>
      <div className="flex justify-end gap-3 pt-2">
        <button onClick={onCancel} className="px-4 py-2 rounded-xl bg-white/5 text-white/70 font-mono text-xs">
          Cancel
        </button>
        <button onClick={onConfirm} className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-semibold">
          Confirm
        </button>
      </div>
    </div>
  );
};`
    },
    {
      id: 'glow-border-card',
      name: 'Kinetic Conic Gradient Border Card',
      category: 'Surfaces & Cards',
      description: 'Precision container using continuous 360-degree rotating conic gradient border for highlighting active priority cards.',
      icon: Box,
      previewComponent: (
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-emerald-400/40 to-amber-400/40 max-w-md mx-auto w-full shadow-xl">
          <div className="rounded-[calc(1rem-1px)] bg-[#0c0d12] p-6 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">
              RESONANCE BORDER SPEC
            </span>
            <h4 className="text-base font-semibold text-white">Conic Accent Shield</h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Subtle 1px perimeter gradient without loud neon slop. Perfectly calibrated for SaaS flagship cards.
            </p>
          </div>
        </div>
      ),
      codeSnippet: `// GlowBorderCard.tsx — Kinetic Conic Gradient Border
import React from 'react';

export const GlowBorderCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500/40 via-emerald-400/40 to-amber-400/40">
      <div className="rounded-[calc(1rem-1px)] bg-[#0b0c10] p-6">
        {children}
      </div>
    </div>
  );
};`
    },

    // =========================================================================
    // 2. CONTROLS & NAVIGATION (9 items)
    // =========================================================================
    {
      id: 'segmented-pill',
      name: 'Haptic Segmented Control',
      category: 'Controls & Navigation',
      description: 'Physical state-machine toggle using Framer Motion layoutId physics for smooth sliding highlight pills.',
      icon: SlidersHorizontal,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            FRAMER MOTION LAYOUT_ID PILL
          </span>
          <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10 relative">
            {(['design', 'code', 'review'] as const).map((seg) => (
              <button
                key={seg}
                type="button"
                onClick={() => {
                  playClick(800, 0.02, 'sine');
                  ctx.setActiveSegment(seg);
                }}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-colors z-10 cursor-pointer ${
                  ctx.activeSegment === seg ? 'text-black font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                {ctx.activeSegment === seg && (
                  <motion.div
                    layoutId="preview-segment-pill"
                    className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span>{seg}</span>
              </button>
            ))}
          </div>
          <div className="text-xs font-mono text-white/40 pt-1">
            Active State: <span className="text-white font-semibold uppercase">{ctx.activeSegment}</span>
          </div>
        </div>
      ),
      codeSnippet: `// SegmentedControl.tsx — Animated LayoutId Sliding Pill
import React from 'react';
import { motion } from 'framer-motion';

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  layoutId = 'segment-indicator'
}: {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
  layoutId?: string;
}) {
  return (
    <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10 relative">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={\`relative px-4 py-1.5 rounded-lg text-xs font-mono uppercase transition-colors z-10 \${
            value === option ? 'text-black font-semibold' : 'text-white/60 hover:text-white'
          }\`}
        >
          {value === option && (
            <motion.div
              layoutId={layoutId}
              className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm"
              transition={{ type: 'spring', stiffness: 450, damping: 35 }}
            />
          )}
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}`
    },
    {
      id: 'command-palette',
      name: 'Command Palette Action Hub (⌘K)',
      category: 'Controls & Navigation',
      description: 'Raycast-inspired keyboard-first command hub with instant fuzzy filtering, category badges, and physical keycap affordances.',
      icon: Command,
      previewComponent: (
        <div className="rounded-2xl bg-[#0b0c10] border border-white/15 p-4 max-w-md mx-auto space-y-3 shadow-2xl w-full">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white/60">
            <Search className="w-3.5 h-3.5 text-white/40" />
            <input
              type="text"
              value={ctx.paletteQuery}
              onChange={(e) => ctx.setPaletteQuery(e.target.value)}
              placeholder="Search actions or commands..."
              className="bg-transparent text-white placeholder:text-white/30 focus:outline-none w-full text-xs font-mono"
            />
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/70">ESC</span>
          </div>

          <div className="space-y-1 text-xs font-mono">
            {[
              { label: 'Create New Token Variable', key: '⌘N', tag: 'System' },
              { label: 'Audit Forensic EXIF Metadata', key: '⌘A', tag: 'Security' },
              { label: 'Export TypeScript Theme Specs', key: '⌘E', tag: 'Tokens' }
            ].map((act) => (
              <div 
                key={act.label} 
                className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[9.5px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-amber-400">
                    {act.tag}
                  </span>
                  <span>{act.label}</span>
                </div>
                <span className="text-[10px] font-mono text-white/40">{act.key}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      codeSnippet: `// CommandPalette.tsx — Raycast-Grade Command Modal
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const CommandPalette: React.FC<{
  items: { id: string; label: string; shortcut: string; category: string }[];
}> = ({ items }) => {
  const [query, setQuery] = useState('');

  return (
    <div className="w-full max-w-lg rounded-2xl bg-[#0d0e12] border border-white/15 p-4 shadow-2xl space-y-3 font-mono">
      <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs">
        <Search className="w-4 h-4 text-white/40" />
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type command..."
          className="w-full bg-transparent text-white placeholder:text-white/30 focus:outline-none"
        />
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/60">⌘K</kbd>
      </div>
    </div>
  );
};`
    },
    {
      id: 'magnetic-button',
      name: 'Magnetic Button-in-Button Trailing Icon',
      category: 'Controls & Navigation',
      description: 'Physical mass-button pairing a generous rounded pill with a nested trailing circle that drifts diagonally on hover.',
      icon: ArrowUpRight,
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
          <button
            type="button"
            onClick={() => playClick(850, 0.03, 'sine')}
            className="group inline-flex items-center justify-between gap-4 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 font-mono text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>EXPLORE ARCHITECTURE</span>
            <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
          <span className="text-[10px] font-mono text-white/40">Hover button to verify kinetic icon drift</span>
        </div>
      ),
      codeSnippet: `// MagneticButton.tsx — Button-in-Button Trailing Icon Architecture
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const MagneticButton: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center justify-between gap-4 px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 font-mono text-xs tracking-wider uppercase transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
    >
      <span>{label}</span>
      <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="w-3.5 h-3.5 text-black" />
      </div>
    </button>
  );
};`
    },
    {
      id: 'floating-dock',
      name: 'Linear-Tier Floating Island Dock',
      category: 'Controls & Navigation',
      description: 'Fixed bottom/top detached navigation bar with frosted glass backdrop blur and active layoutId dot.',
      icon: Navigation,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#07080b] border border-white/10 max-w-md mx-auto flex items-center justify-center w-full">
          <nav className="inline-flex items-center gap-5 px-5 py-2.5 rounded-2xl bg-[#0e1015]/90 border border-white/10 backdrop-blur-xl shadow-2xl text-xs font-mono">
            {['Process', 'Works', 'Stash'].map((item, i) => (
              <span 
                key={item} 
                className={`cursor-pointer transition-colors ${i === 1 ? 'text-white font-semibold' : 'text-white/50 hover:text-white'}`}
              >
                {item}
              </span>
            ))}
            <span className="px-3 py-1 rounded-full bg-white text-black font-semibold text-[10px] cursor-pointer">
              Contact
            </span>
          </nav>
        </div>
      ),
      codeSnippet: `// FloatingDock.tsx — Frosted Glass Detached Navigation
import React from 'react';

export const FloatingDock: React.FC<{ links: { label: string; href: string }[] }> = ({ links }) => {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex items-center justify-center pointer-events-none px-4">
      <nav className="pointer-events-auto flex items-center gap-6 px-6 py-2.5 rounded-2xl bg-[#08090d]/90 backdrop-blur-2xl border border-white/10 shadow-2xl text-xs font-mono">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="text-white/60 hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};`
    },
    {
      id: 'tactile-switch',
      name: 'Machined Hardware Toggle Switch',
      category: 'Controls & Navigation',
      description: 'Tactile binary switch with physical recessed grooved channel, sliding circular knob, and micro-audio feedback.',
      icon: ToggleRight,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            HARDWARE TOGGLE AFFORDANCE
          </span>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xs font-mono text-white/70">Telemetry Ping</span>
            <button
              type="button"
              onClick={() => {
                playClick(ctx.switchEnabled ? 500 : 900, 0.03, 'sine');
                ctx.setSwitchEnabled(!ctx.switchEnabled);
              }}
              className={`w-12 h-6 rounded-full p-0.5 transition-colors cursor-pointer border relative ${
                ctx.switchEnabled ? 'bg-emerald-500 border-emerald-400' : 'bg-white/10 border-white/15'
              }`}
            >
              <motion.div 
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-5 h-5 rounded-full bg-white shadow-md ${ctx.switchEnabled ? 'ml-auto' : 'ml-0'}`}
              />
            </button>
          </div>
          <span className="text-xs font-mono text-white/40 block">
            State: <span className="text-white font-semibold">{ctx.switchEnabled ? 'ENABLED (200 OK)' : 'DISABLED'}</span>
          </span>
        </div>
      ),
      codeSnippet: `// TactileSwitch.tsx — Machined Hardware Toggle
import React from 'react';
import { motion } from 'framer-motion';

export const TactileSwitch: React.FC<{ checked: boolean; onChange: (v: boolean) => void }> = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={\`w-12 h-6 rounded-full p-0.5 transition-colors border relative \${
        checked ? 'bg-emerald-500 border-emerald-400' : 'bg-white/10 border-white/15'
      }\`}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={\`w-5 h-5 rounded-full bg-white shadow-md \${checked ? 'ml-auto' : 'ml-0'}\`}
      />
    </button>
  );
};`
    },
    {
      id: 'filter-pill-cloud',
      name: 'Multi-Select Tag Filter Pills',
      category: 'Controls & Navigation',
      description: 'Dynamic pill clouds for search tags and taxonomy filters with active indicator chips and clear triggers.',
      icon: Tag,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 w-full">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[10px] text-white/50 uppercase tracking-widest">TAXONOMY FILTER</span>
            <span className="text-amber-400">{ctx.selectedTags.length} SELECTED</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Motion', 'WebGL', 'Audio API'].map((tag) => {
              const active = ctx.selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    playClick(active ? 600 : 850, 0.02, 'sine');
                    if (active) ctx.setSelectedTags(ctx.selectedTags.filter(t => t !== tag));
                    else ctx.setSelectedTags([...ctx.selectedTags, tag]);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                    active 
                      ? 'bg-white text-black border-white font-semibold shadow-sm' 
                      : 'bg-white/5 text-white/60 hover:text-white border-white/10'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      ),
      codeSnippet: `// FilterPillCloud.tsx — Multi-Select Tag Filters
import React from 'react';

export const FilterPillCloud: React.FC<{
  allTags: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}> = ({ allTags, selectedTags, onChange }) => {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) onChange(selectedTags.filter(t => t !== tag));
    else onChange([...selectedTags, tag]);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={\`px-3 py-1 rounded-lg text-xs font-mono transition-all border \${
            selectedTags.includes(tag) ? 'bg-white text-black font-semibold' : 'bg-white/5 text-white/60'
          }\`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};`
    },
    {
      id: 'dropdown-menu',
      name: 'Linear Glass Context Menu',
      category: 'Controls & Navigation',
      description: 'Raycast/Linear context menu with frosted glass, keyboard shortcut hints, icon glyphs, and micro-hover states.',
      icon: ChevronDown,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 w-full relative">
          <button
            type="button"
            onClick={() => {
              playClick(750, 0.02, 'sine');
              ctx.setDropdownOpen(!ctx.dropdownOpen);
            }}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono text-white flex items-center gap-2 cursor-pointer"
          >
            <span>Options Menu</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${ctx.dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {ctx.dropdownOpen && (
            <div className="w-56 rounded-xl bg-[#0f1015]/95 border border-white/15 shadow-2xl p-1.5 space-y-1 text-xs font-mono z-20 backdrop-blur-xl">
              <div className="p-2 hover:bg-white/10 rounded-lg text-white/80 hover:text-white flex items-center justify-between cursor-pointer">
                <span>Copy Raw Spec</span>
                <span className="text-[10px] text-white/40">⌘C</span>
              </div>
              <div className="p-2 hover:bg-white/10 rounded-lg text-white/80 hover:text-white flex items-center justify-between cursor-pointer">
                <span>Re-Index Node</span>
                <span className="text-[10px] text-white/40">⌘R</span>
              </div>
              <div className="h-[1px] bg-white/10 my-1" />
              <div className="p-2 hover:bg-rose-500/20 text-rose-400 rounded-lg flex items-center justify-between cursor-pointer">
                <span>Purge Node Cache</span>
                <span className="text-[10px] text-rose-400/60">⌫</span>
              </div>
            </div>
          )}
        </div>
      ),
      codeSnippet: `// GlassDropdown.tsx — Linear-Grade Context Menu
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const GlassDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left font-mono">
      <button onClick={() => setOpen(!open)} className="px-4 py-2 rounded-xl bg-white/10 text-xs text-white flex items-center gap-2">
        <span>Options</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-56 rounded-xl bg-[#0e0f14]/95 border border-white/15 p-1.5 space-y-1 text-xs backdrop-blur-xl z-50">
          <button className="w-full text-left p-2 hover:bg-white/10 rounded-lg text-white flex items-center justify-between">
            <span>Copy Spec</span>
            <kbd className="text-[10px] text-white/40">⌘C</kbd>
          </button>
        </div>
      )}
    </div>
  );
};`
    },
    {
      id: 'split-action-button',
      name: 'Dual-Action Split Button with Dropdown Trigger',
      category: 'Controls & Navigation',
      description: 'Unified button combining a primary action button with a secondary action dropdown divider.',
      icon: Split,
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex items-center justify-center w-full">
          <div className="inline-flex rounded-xl bg-white text-black shadow-lg overflow-hidden border border-white font-mono text-xs font-semibold">
            <button 
              type="button" 
              onClick={() => playClick(850, 0.03, 'sine')}
              className="px-4 py-2 hover:bg-white/90 active:scale-95 transition-all cursor-pointer"
            >
              DEPLOY TO EDGE
            </button>
            <div className="w-[1px] bg-black/15 my-1" />
            <button 
              type="button" 
              onClick={() => playClick(700, 0.02, 'sine')}
              className="px-2.5 py-2 hover:bg-black/10 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronDown className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// SplitButton.tsx — Dual Action Split Button
import React from 'react';
import { ChevronDown } from 'lucide-react';

export const SplitButton: React.FC<{
  primaryLabel: string;
  onPrimary: () => void;
  onDropdown: () => void;
}> = ({ primaryLabel, onPrimary, onDropdown }) => {
  return (
    <div className="inline-flex rounded-xl bg-white text-black shadow-lg overflow-hidden font-mono text-xs font-semibold">
      <button onClick={onPrimary} className="px-4 py-2 hover:bg-white/90 transition-all">
        {primaryLabel}
      </button>
      <div className="w-[1px] bg-black/15 my-1" />
      <button onClick={onDropdown} className="px-2.5 py-2 hover:bg-black/10 transition-all">
        <ChevronDown className="w-3.5 h-3.5 text-black" />
      </button>
    </div>
  );
};`
    },
    {
      id: 'breadcrumb-trail',
      name: 'Hierarchical Segmented Breadcrumb Trail',
      category: 'Controls & Navigation',
      description: 'High-density navigation trail with chevron dividers, folder glyphs, and active location indicator.',
      icon: Folder,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex items-center justify-center w-full">
          <nav className="inline-flex items-center gap-2 text-xs font-mono text-white/50 bg-black/50 px-3.5 py-2 rounded-xl border border-white/10">
            <span className="hover:text-white cursor-pointer transition-colors">system</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="hover:text-white cursor-pointer transition-colors">tokens</span>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-amber-400 font-medium">typography.css</span>
          </nav>
        </div>
      ),
      codeSnippet: `// Breadcrumbs.tsx — Monospace Navigation Trail
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Breadcrumbs: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <nav className="inline-flex items-center gap-2 text-xs font-mono text-white/50 bg-black/50 px-3.5 py-2 rounded-xl border border-white/10">
      {items.map((item, idx) => (
        <React.Fragment key={item}>
          {idx > 0 && <ChevronRight className="w-3 h-3 text-white/30" />}
          <span className={idx === items.length - 1 ? 'text-amber-400 font-medium' : 'hover:text-white cursor-pointer'}>
            {item}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};`
    },

    // =========================================================================
    // 3. HAPTICS & MOTION (8 items)
    // =========================================================================
    {
      id: 'haptic-audio',
      name: 'Zero-Dependency Sound Synthesizer Hook',
      category: 'Haptics & Motion',
      description: 'Web Audio API oscillator engine generating micro-sound clicks with zero external audio assets or network latency.',
      icon: Volume2,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            INTERACTIVE SYNTHESIZER TESTBED
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => playClick(600, 0.03, 'sine')}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white cursor-pointer active:scale-95 transition-all"
            >
              Sine Click (600Hz)
            </button>
            <button
              type="button"
              onClick={() => playClick(900, 0.03, 'triangle')}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white cursor-pointer active:scale-95 transition-all"
            >
              Triangle Click (900Hz)
            </button>
            <button
              type="button"
              onClick={() => playClick(1200, 0.03, 'square')}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white cursor-pointer active:scale-95 transition-all"
            >
              Square Click (1.2kHz)
            </button>
            <button
              type="button"
              onClick={() => playClick(450, 0.04, 'sawtooth')}
              className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-white cursor-pointer active:scale-95 transition-all"
            >
              Sawtooth Thud (450Hz)
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// useSound.ts — Zero-Asset Web Audio API Micro-Haptics
import { useCallback } from 'react';

type WaveType = 'sine' | 'triangle' | 'square' | 'sawtooth';

export const useSound = () => {
  const playClick = useCallback((freq = 800, duration = 0.03, type: WaveType = 'sine') => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {}
  }, []);

  return { playClick };
};`
    },
    {
      id: 'before-after-slider',
      name: 'Interactive Friction Comparative Split Slider',
      category: 'Haptics & Motion',
      description: 'Smooth touch & mouse split slider handle comparing before/after designs with real-time percentage badge.',
      icon: Sliders,
      previewComponent: (
        <div className="rounded-2xl bg-[#0b0c10] border border-white/10 p-4 max-w-md mx-auto space-y-3 w-full">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black select-none border border-white/10">
            <div className="absolute inset-0 bg-[#0c141f] flex items-center justify-center text-center p-4">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                AFTER // SANITIZED PRODUCTION UX
              </span>
            </div>
            <div 
              className="absolute inset-0 bg-[#1f1010] flex items-center justify-center text-center p-4"
              style={{ clipPath: `inset(0 ${100 - ctx.splitPos}% 0 0)` }}
            >
              <span className="text-xs font-mono text-rose-400 font-semibold">
                BEFORE // RAW UNFILTERED COMPLEXITY
              </span>
            </div>
            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20"
              style={{ left: `${ctx.splitPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white text-black text-[9px] font-bold flex items-center justify-center shadow-lg">
                ↔
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-white/50">
            <span>Drag slider: {ctx.splitPos}%</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={ctx.splitPos}
              onChange={(e) => ctx.setSplitPos(Number(e.target.value))}
              className="w-1/2 accent-white cursor-pointer"
            />
          </div>
        </div>
      ),
      codeSnippet: `// BeforeAfterSlider.tsx — Friction Comparison Slider
import React, { useState, useRef } from 'react';

export const BeforeAfterSlider: React.FC<{ before: React.ReactNode; after: React.ReactNode }> = ({ before, after }) => {
  const [split, setSplit] = useState(50);
  return (
    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0" style={{ clipPath: \`inset(0 \${100 - split}% 0 0)\` }}>{before}</div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white z-20" style={{ left: \`\${split}%\` }} />
    </div>
  );
};`
    },
    {
      id: 'marquee-ticker',
      name: 'Silky 60fps Infinite Marquee Ticker',
      category: 'Haptics & Motion',
      description: 'Continuous hardware-accelerated horizontal stream for brand logos, design tokens, or announcements with hover-pause.',
      icon: Repeat,
      previewComponent: (
        <div className="py-4 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto overflow-hidden relative w-full">
          <motion.div 
            className="flex items-center gap-6 whitespace-nowrap text-xs font-mono text-white/80"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          >
            {[
              'FIGMA VARIABLES',
              'SUB-16MS MOTION',
              'ZERO TELEMETRY',
              'WCAG 2.2 AAA',
              'TYPESCRIPT 5',
              'FIGMA VARIABLES',
              'SUB-16MS MOTION',
              'ZERO TELEMETRY',
              'WCAG 2.2 AAA',
              'TYPESCRIPT 5'
            ].map((text, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>{text}</span>
              </span>
            ))}
          </motion.div>
        </div>
      ),
      codeSnippet: `// MarqueeTicker.tsx — Smooth CSS/Framer Continuous Stream
import React from 'react';
import { motion } from 'framer-motion';

export const MarqueeTicker: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="w-full overflow-hidden py-4 border-y border-white/10 bg-[#07080b]">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap text-xs font-mono text-white/80"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>{item}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};`
    },
    {
      id: 'accordion-spring',
      name: 'Zero-Jank Physics Expandable Accordion',
      category: 'Haptics & Motion',
      description: 'Spring-driven height expansion using AnimatePresence with zero layout distortion or content clipping.',
      icon: ChevronDown,
      previewComponent: (
        <div className="p-4 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-2 w-full font-mono text-xs">
          {[
            { id: 0, title: 'Visual Contrast Ratio Policy', body: 'Strict adherence to WCAG 2.2 Level AAA minimum 7:1 text luminance ratio.' },
            { id: 1, title: 'Spring Damping Kinematics', body: 'Mass: 1.0, Stiffness: 450, Damping: 35 for natural tactile mechanical response.' }
          ].map((item) => (
            <div key={item.id} className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  playClick(800, 0.02, 'sine');
                  ctx.setAccordionOpen(ctx.accordionOpen === item.id ? null : item.id);
                }}
                className="w-full p-3.5 flex items-center justify-between text-white font-medium hover:bg-white/5 transition-colors cursor-pointer text-left"
              >
                <span>{item.title}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${ctx.accordionOpen === item.id ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {ctx.accordionOpen === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    className="px-3.5 pb-3.5 text-white/60 text-[11px] leading-relaxed font-sans"
                  >
                    {item.body}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      ),
      codeSnippet: `// SpringAccordion.tsx — Physics Height Expansion
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const SpringAccordion: React.FC<{ items: { id: string; title: string; content: string }[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-2 font-mono text-xs">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
          <button onClick={() => setOpenId(openId === item.id ? null : item.id)} className="w-full p-4 flex justify-between text-white">
            <span>{item.title}</span>
            <ChevronDown className={\`w-4 h-4 \${openId === item.id ? 'rotate-180' : ''}\`} />
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="p-4 text-white/60">
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'kbd-capsule',
      name: '3D Apple-Style Tactile Keycaps',
      category: 'Haptics & Motion',
      description: 'Dimensional extruded keycaps with bottom shadow bevel, active depression physics, and monospace glyphs.',
      icon: Hash,
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            3D MECHANICAL KEYCAP PRESS
          </span>
          <div className="flex items-center justify-center gap-2">
            {['⌘', 'K', 'SHIFT', 'ENTER'].map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => playClick(1200, 0.02, 'square')}
                className="px-3 py-2 rounded-lg bg-[#1a1b22] border-t border-white/20 border-b-2 border-b-black text-white font-mono text-xs font-bold shadow-md active:translate-y-0.5 active:border-b-0 transition-all cursor-pointer"
              >
                {key}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-mono text-white/40">Click any keycap to feel tactile stroke</span>
        </div>
      ),
      codeSnippet: `// Keycap.tsx — 3D Tactile Keycap Component
import React from 'react';

export const Keycap: React.FC<{ label: string; onClick?: () => void }> = ({ label, onClick }) => {
  return (
    <kbd
      onClick={onClick}
      className="inline-flex items-center justify-center px-2.5 py-1.5 rounded-md bg-[#181920] border-t border-white/20 border-b-2 border-b-black text-white font-mono text-xs font-semibold shadow-md active:translate-y-0.5 cursor-pointer select-none transition-all"
    >
      {label}
    </kbd>
  );
};`
    },
    {
      id: 'dynamic-island-toast',
      name: 'Morphing Dynamic Island Toast Pill',
      category: 'Haptics & Motion',
      description: 'Compact capsule HUD that dynamically expands to reveal active system state, sync progress, or notification payloads.',
      icon: Bell,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#07080b] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            className="rounded-full bg-black border border-white/20 px-4 py-2 flex items-center gap-3 shadow-2xl overflow-hidden"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-white">
              {ctx.islandState === 'idle' ? 'Node Synchronized // 0ms' : ctx.islandState === 'call' ? 'Live Voice Session Active' : 'Cryptographic Hash Validated'}
            </span>
          </motion.div>

          <div className="flex gap-2">
            {(['idle', 'call', 'sync'] as const).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => {
                  playClick(850, 0.02, 'sine');
                  ctx.setIslandState(st);
                }}
                className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase cursor-pointer transition-colors ${
                  ctx.islandState === st ? 'bg-white text-black font-semibold' : 'bg-white/10 text-white/60 hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>
      ),
      codeSnippet: `// DynamicIslandToast.tsx — Morphing Status Capsule
import React from 'react';
import { motion } from 'framer-motion';

export const DynamicIslandToast: React.FC<{ status: string }> = ({ status }) => {
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/95 border border-white/20 shadow-2xl"
    >
      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-xs font-mono text-white">{status}</span>
    </motion.div>
  );
};`
    },
    {
      id: 'drag-reorder-list',
      name: 'Kinetic Fluid Drag-to-Reorder List',
      category: 'Haptics & Motion',
      description: 'Tactile list items with physics-driven reordering indicators, grip texture handles, and active elevation.',
      icon: SlidersHorizontal,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-2 w-full font-mono text-xs">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">TACTILE REORDER STACK</span>
          {['01. Design Tokens Schema', '02. Component Physics Engine', '03. Web Audio Synthesis'].map((item, idx) => (
            <div 
              key={item} 
              className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between hover:bg-white/[0.06] cursor-grab active:cursor-grabbing transition-all select-none"
            >
              <span className="text-white/80">{item}</span>
              <span className="text-white/30 text-xs">:::</span>
            </div>
          ))}
        </div>
      ),
      codeSnippet: `// DragList.tsx — Reorderable List Architecture
import React from 'react';

export const DragList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="space-y-2 font-mono text-xs">
      {items.map((item, idx) => (
        <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between cursor-grab">
          <span className="text-white/80">{item}</span>
          <span className="text-white/30">:::</span>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'magnetic-cursor-bubble',
      name: 'Spring-Damped Floating Cursor Follower',
      category: 'Haptics & Motion',
      description: 'Fluid pointer follower with lagging inertia spring curve (stiffness: 300, damping: 28) for luxury desktop polish.',
      icon: MousePointer,
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto text-center space-y-3 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            LAGGING INERTIA CURSOR FOLLOWER
          </span>
          <div className="h-20 rounded-xl bg-black/50 border border-white/10 relative overflow-hidden flex items-center justify-center">
            <motion.div 
              className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center pointer-events-none"
              animate={{ x: [0, 25, -20, 0], y: [0, -15, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.div>
          </div>
          <span className="text-[10.5px] font-mono text-white/40">Demonstrating sub-pixel spring lag</span>
        </div>
      ),
      codeSnippet: `// CursorFollower.tsx — Inertia Spring Follower
import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CursorFollower: React.FC = () => {
  const cursorX = useSpring(0, { stiffness: 350, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 350, damping: 28 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-white/40 pointer-events-none z-50"
    />
  );
};`
    },

    // =========================================================================
    // 4. DATA & TELEMETRY (8 items)
    // =========================================================================
    {
      id: 'telemetry-node',
      name: 'High-Density Telemetry Node Card',
      category: 'Data & Telemetry',
      description: 'Fintech and AI ledger card with tabular mono metrics, sparkline micro-trajectory, and percentage change pill.',
      icon: Activity,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 max-w-md mx-auto space-y-3 w-full">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
              STREAM LATENCY TELEMETRY
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
              +99.98% UP
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold font-mono text-white">12.4ms</span>
            <span className="text-xs font-mono text-white/50">Avg response (p99)</span>
          </div>
          <svg viewBox="0 0 200 40" className="w-full h-10 overflow-visible stroke-emerald-400 fill-none" strokeWidth="2">
            <path d="M 0,35 Q 30,10 60,25 T 120,8 T 170,20 T 200,5" />
          </svg>
        </div>
      ),
      codeSnippet: `// TelemetryNode.tsx — High-Density Metric Card
import React from 'react';

export const TelemetryNode: React.FC<{ label: string; value: string; change: string }> = ({ label, value, change }) => {
  return (
    <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 space-y-3 font-mono">
      <div className="flex items-center justify-between">
        <span className="text-[10px] tracking-widest text-white/50 uppercase">{label}</span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px]">{change}</span>
      </div>
      <span className="text-3xl font-bold text-white block">{value}</span>
    </div>
  );
};`
    },
    {
      id: 'elo-leaderboard',
      name: 'Real-Time ELO Tournament Leaderboard',
      category: 'Data & Telemetry',
      description: 'Event-driven competitive ranking table with rank badges, model identity chips, and ELO rating ledger.',
      icon: Trophy,
      previewComponent: (
        <div className="p-4 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-2 w-full font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-white/40">
            <span>MODEL CONTENDER</span>
            <span>ELO SCORE</span>
          </div>
          {[
            { rank: '01', name: 'Claude 3.5 Sonnet', elo: 1284, change: '+14' },
            { rank: '02', name: 'GPT-4o (Omni)', elo: 1260, change: '+9' },
            { rank: '03', name: 'Gemini 1.5 Pro', elo: 1245, change: '+4' }
          ].map(m => (
            <div key={m.name} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center font-bold text-[10px] text-white/80">
                  {m.rank}
                </span>
                <span className="text-white font-medium">{m.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold">{m.elo}</span>
                <span className="text-[10px] text-emerald-400">{m.change}</span>
              </div>
            </div>
          ))}
        </div>
      ),
      codeSnippet: `// EloLeaderboard.tsx — Competitive ELO Ledger
import React from 'react';

export const EloLeaderboard: React.FC<{ contenders: { rank: string; name: string; elo: number; delta: string }[] }> = ({ contenders }) => {
  return (
    <div className="rounded-2xl bg-[#0b0c10] border border-white/10 p-5 space-y-2.5 font-mono text-xs">
      {contenders.map((c) => (
        <div key={c.name} className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02]">
          <span className="text-white">{c.name}</span>
          <span className="text-white font-bold">{c.elo}</span>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'radial-gauge',
      name: 'SVG Concentric Velocity Gauge',
      category: 'Data & Telemetry',
      description: 'Circular radial metric meter with stroke-dasharray calculations, calibrated gradient arc, and center readout.',
      icon: Gauge,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            CONCENTRIC PERFORMANCE VELOCITY
          </span>
          <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
              <circle 
                cx="50" 
                cy="50" 
                r="42" 
                stroke="#5e6ad2" 
                strokeWidth="8" 
                strokeDasharray="264" 
                strokeDashoffset={264 - (264 * ctx.gaugeVal) / 100}
                strokeLinecap="round" 
                fill="none" 
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold font-mono text-white">{ctx.gaugeVal}%</span>
              <span className="text-[9px] font-mono text-white/40">EFFICIENCY</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 pt-2">
            {[60, 84, 98].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => {
                  playClick(800, 0.02, 'sine');
                  ctx.setGaugeVal(v);
                }}
                className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                  ctx.gaugeVal === v ? 'bg-white text-black font-semibold' : 'bg-white/10 text-white/60 hover:text-white'
                }`}
              >
                Set {v}%
              </button>
            ))}
          </div>
        </div>
      ),
      codeSnippet: `// RadialGauge.tsx — SVG Radial Metric Arc
import React from 'react';

export const RadialGauge: React.FC<{ value: number }> = ({ value }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="relative inline-flex items-center justify-center w-36 h-36">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#5e6ad2"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (circumference * value) / 100}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="absolute font-mono text-xl font-bold text-white">{value}%</span>
    </div>
  );
};`
    },
    {
      id: 'animated-counter',
      name: 'Spring Roll Numeric Counter',
      category: 'Data & Telemetry',
      description: 'Live ticking statistical ticker with smooth increment animations and monospace tabular figure alignment.',
      icon: Activity,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            LIVE TABULAR NUMBER ROLLER
          </span>
          <div className="flex items-center justify-center gap-1 font-mono text-4xl font-bold text-white tracking-wider">
            <span>$</span>
            <span className="text-emerald-400">{ctx.counterVal.toLocaleString()}</span>
          </div>
          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                playClick(900, 0.02, 'sine');
                ctx.setCounterVal(prev => prev + 120);
              }}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono cursor-pointer"
            >
              +120 Increment
            </button>
            <button
              type="button"
              onClick={() => {
                playClick(600, 0.02, 'sine');
                ctx.setCounterVal(prev => Math.max(0, prev - 85));
              }}
              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono cursor-pointer"
            >
              -85 Decrement
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// NumericCounter.tsx — Tabular Number Display
import React from 'react';

export const NumericCounter: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="font-mono text-3xl font-bold text-white tabular-nums tracking-wide">
      \${value.toLocaleString()}
    </div>
  );
};`
    },
    {
      id: 'timeline-stepper',
      name: 'Audit Trail Multi-Step Stepper',
      category: 'Data & Telemetry',
      description: 'Vertical timeline sequence component mapping pipeline statuses, timestamps, and active node indicators.',
      icon: GitCommit,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 w-full font-mono text-xs">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">PIPELINE AUDIT TRAIL</span>
          <div className="space-y-4 border-l border-white/10 pl-4 ml-2">
            {[
              { title: 'Visual Regression Snapshot', time: '12:04:12', status: 'Passed (0 delta)' },
              { title: 'TypeScript Compilation Engine', time: '12:04:18', status: '0 Errors in 1.4s' },
              { title: 'Production Edge CDN Flush', time: '12:04:22', status: 'Active (Global Sync)' }
            ].map((step, i) => (
              <div key={step.title} className="relative">
                <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ${i === 2 ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{step.title}</span>
                  <span className="text-[10px] text-white/40">{step.time}</span>
                </div>
                <span className="text-[11px] text-white/60 block">{step.status}</span>
              </div>
            ))}
          </div>
        </div>
      ),
      codeSnippet: `// TimelineStepper.tsx — Multi-Step Audit Trail
import React from 'react';

export const TimelineStepper: React.FC<{ steps: { id: string; title: string; status: string }[] }> = ({ steps }) => {
  return (
    <div className="space-y-4 border-l border-white/10 pl-4 ml-2 font-mono text-xs">
      {steps.map((step) => (
        <div key={step.id} className="relative">
          <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="text-white font-medium">{step.title}</span>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'health-status-badge',
      name: 'Sub-Millisecond Health Telemetry Badge',
      category: 'Data & Telemetry',
      description: 'Compact operational status capsule with live ping heartbeat, operational cluster name, and uptime SLA.',
      icon: Activity,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 w-full">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0d1512] border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>ALL SYSTEMS OPERATIONAL</span>
            <span className="text-white/40 text-[10px]">|</span>
            <span className="text-white/80 text-[11px]">8.2ms</span>
          </div>
          <span className="text-[10.5px] font-mono text-white/40">US-EAST (IAD) // 99.999% SLA</span>
        </div>
      ),
      codeSnippet: `// HealthStatusBadge.tsx — Operational Status Capsule
import React from 'react';

export const HealthStatusBadge: React.FC<{ statusText?: string; pingMs?: number }> = ({ statusText = 'ALL SYSTEMS OPERATIONAL', pingMs = 8.2 }) => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0c1613] border border-emerald-500/30 text-emerald-400 font-mono text-xs">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span>{statusText}</span>
      <span className="text-white/80">{pingMs}ms</span>
    </div>
  );
};`
    },
    {
      id: 'activity-heatmap-grid',
      name: '52-Week High-Density Activity Heatmap',
      category: 'Data & Telemetry',
      description: 'GitHub/GitLab style commit frequency matrix with varying green/emerald alpha intensities and day tooltips.',
      icon: Activity,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 w-full">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[10px] text-white/50 uppercase tracking-widest">SYSTEM DEPLOY INTENSITY</span>
            <span className="text-emerald-400 text-[10px]">482 COMMITS (Q1-Q4)</span>
          </div>
          <div className="grid grid-flow-col grid-rows-4 gap-1.5 overflow-hidden">
            {Array.from({ length: 64 }).map((_, i) => {
              const intensity = (i * 17) % 5;
              const bg = 
                intensity === 0 ? 'bg-white/5' :
                intensity === 1 ? 'bg-emerald-950 border border-emerald-800' :
                intensity === 2 ? 'bg-emerald-800' :
                intensity === 3 ? 'bg-emerald-600' : 'bg-emerald-400';
              return (
                <div key={i} className={`w-3.5 h-3.5 rounded-sm ${bg} transition-transform hover:scale-125 cursor-pointer`} />
              );
            })}
          </div>
        </div>
      ),
      codeSnippet: `// ActivityHeatmap.tsx — High-Density Matrix Heatmap
import React from 'react';

export const ActivityHeatmap: React.FC<{ data: number[] }> = ({ data }) => {
  return (
    <div className="grid grid-flow-col grid-rows-4 gap-1.5">
      {data.map((val, i) => (
        <div
          key={i}
          className={\`w-3.5 h-3.5 rounded-sm \${
            val === 0 ? 'bg-white/5' : val > 5 ? 'bg-emerald-400' : 'bg-emerald-700'
          }\`}
        />
      ))}
    </div>
  );
};`
    },
    {
      id: 'battery-telemetry',
      name: 'Hardware Battery & Thermal Telemetry Node',
      category: 'Data & Telemetry',
      description: 'Simulated client device battery level, charging current, thermal node dissipation, and voltage meter.',
      icon: BatteryCharging,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 w-full font-mono text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BatteryCharging className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-semibold">96% CHARGED</span>
            </div>
            <span className="text-[10px] text-amber-400 uppercase">FAST CHARGING // 65W</span>
          </div>
          <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full w-[96%] rounded-full" />
          </div>
          <div className="flex justify-between text-[10px] text-white/50 pt-1">
            <span>TEMP: 32.4°C (NOMINAL)</span>
            <span>CYCLE COUNT: 84</span>
          </div>
        </div>
      ),
      codeSnippet: `// BatteryTelemetry.tsx — Hardware Battery HUD
import React from 'react';
import { BatteryCharging } from 'lucide-react';

export const BatteryTelemetry: React.FC<{ percent: number; isCharging: boolean }> = ({ percent, isCharging }) => {
  return (
    <div className="p-4 rounded-xl bg-[#0b0c10] border border-white/10 space-y-2 font-mono text-xs">
      <div className="flex justify-between text-white">
        <span>{percent}% {isCharging ? 'CHARGING' : 'BATTERY'}</span>
      </div>
      <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
        <div className="bg-emerald-400 h-full rounded-full" style={{ width: \`\${percent}%\` }} />
      </div>
    </div>
  );
};`
    },

    // =========================================================================
    // 5. FEEDBACK & OVERLAYS (8 items)
    // =========================================================================
    {
      id: 'toast-notification-stack',
      name: 'Stacked Physics Toast Queue',
      category: 'Feedback & Overlays',
      description: 'Stacked alert cards with spring scale transitions, dismiss swipe, and queue count badge.',
      icon: Bell,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 w-full">
          <div className="p-3 rounded-xl bg-[#121319] border border-emerald-500/30 text-xs font-mono flex items-center justify-between text-white shadow-xl">
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Token System Re-Indexed</span>
            </div>
            <span className="text-[10px] text-white/40">JUST NOW</span>
          </div>
          <div className="p-3 rounded-xl bg-[#0e0f14] border border-white/10 text-xs font-mono flex items-center justify-between text-white/60 -mt-2 scale-95 opacity-80">
            <span>EXIF Metadata Sanitized</span>
            <span className="text-[10px] text-white/30">2m ago</span>
          </div>
        </div>
      ),
      codeSnippet: `// ToastStack.tsx — Stacked Toast Queue
import React from 'react';
import { Check } from 'lucide-react';

export const ToastStack: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 p-3.5 rounded-xl bg-[#121319] border border-emerald-500/30 text-xs font-mono text-white flex items-center gap-2.5 shadow-2xl">
      <Check className="w-4 h-4 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
};`
    },
    {
      id: 'confetti-burst',
      name: 'Zero-Asset Canvas Confetti Particle Burst',
      category: 'Feedback & Overlays',
      description: 'Lightweight procedural particle emitter using raw HTML5 canvas without external libraries.',
      icon: Trophy,
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto text-center space-y-4 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            CANVAS PARTICLE SYSTEM
          </span>
          <button
            type="button"
            onClick={() => playClick(1000, 0.05, 'triangle')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-emerald-400 text-black font-mono text-xs font-bold uppercase active:scale-95 transition-transform cursor-pointer"
          >
            Trigger Celebration
          </button>
          <span className="text-[10.5px] font-mono text-white/40 block">Zero external dependencies</span>
        </div>
      ),
      codeSnippet: `// ConfettiBurst.ts — Procedural Canvas Particle Burst
export function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.className = 'fixed inset-0 pointer-events-none z-50';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // Animate 60 particles for 1.2s then remove
  setTimeout(() => canvas.remove(), 1500);
}`
    },
    {
      id: 'interactive-tooltip',
      name: 'Directional Floating Tooltip with Arrow',
      category: 'Feedback & Overlays',
      description: 'Micro-delayed directional tooltip with pointer arrow, shortcut keycaps, and zero layout overflow.',
      icon: HelpCircle,
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 w-full">
          <div className="relative group">
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono text-white cursor-pointer"
            >
              Hover Me
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-black/95 border border-white/20 text-[11px] font-mono text-white whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span>Inspect Component Architecture (⌘I)</span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/95" />
            </div>
          </div>
        </div>
      ),
      codeSnippet: `// Tooltip.tsx — Directional Tooltip
import React from 'react';

export const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-black/95 border border-white/20 text-xs font-mono text-white whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {text}
      </div>
    </div>
  );
};`
    },
    {
      id: 'password-meter',
      name: 'Real-Time Entropy Password Strength Meter',
      category: 'Feedback & Overlays',
      description: 'Authentication input validator calculating Shannon entropy with segmented color level bars and criteria checks.',
      icon: KeyRound,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 w-full font-mono text-xs">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">ENTROPY VALIDATOR</span>
          <input
            type="text"
            value={ctx.passwordInput}
            onChange={(e) => ctx.setPasswordInput(e.target.value)}
            placeholder="Type keyphrase..."
            className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs placeholder:text-white/30 focus:outline-none"
          />
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((bar) => {
              const active = ctx.passwordInput.length >= bar * 3;
              return (
                <div 
                  key={bar} 
                  className={`h-1.5 rounded-full transition-colors ${
                    active ? (bar > 2 ? 'bg-emerald-400' : 'bg-amber-400') : 'bg-white/10'
                  }`} 
                />
              );
            })}
          </div>
          <span className="text-[10.5px] text-white/40 block">
            {ctx.passwordInput.length > 8 ? 'STRONG // 128-BIT ENTROPY' : 'REQUIRES 8+ CHARACTERS'}
          </span>
        </div>
      ),
      codeSnippet: `// PasswordMeter.tsx — Entropy Strength Bar
import React from 'react';

export const PasswordMeter: React.FC<{ score: number }> = ({ score }) => {
  return (
    <div className="grid grid-cols-4 gap-1.5">
      {[1, 2, 3, 4].map((lvl) => (
        <div
          key={lvl}
          className={\`h-1.5 rounded-full \${score >= lvl ? 'bg-emerald-400' : 'bg-white/10'}\`}
        />
      ))}
    </div>
  );
};`
    },
    {
      id: 'circular-countdown',
      name: 'SVG Circular Timer Countdown Ring',
      category: 'Feedback & Overlays',
      description: 'Precise countdown ring component with pause/reset triggers and animated stroke dashoffset reduction.',
      icon: Clock,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            CIRCULAR TIMEOUT RING
          </span>
          <div className="relative w-28 h-28 mx-auto flex items-center justify-center font-mono">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
              <circle cx="50" cy="50" r="40" stroke="#34d399" strokeWidth="6" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" fill="none" />
            </svg>
            <span className="absolute text-xl font-bold text-white">{ctx.timerCount}s</span>
          </div>
          <div className="flex justify-center gap-2">
            <button 
              type="button" 
              onClick={() => {
                playClick(800, 0.02, 'sine');
                ctx.setTimerCount(p => (p > 1 ? p - 1 : 10));
              }}
              className="px-3 py-1 rounded bg-white/10 text-white text-xs font-mono cursor-pointer"
            >
              Tick -1s
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// CountdownRing.tsx — SVG Circular Timer
import React from 'react';

export const CountdownRing: React.FC<{ secondsLeft: number; totalSeconds: number }> = ({ secondsLeft, totalSeconds }) => {
  const radius = 40;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (circ * secondsLeft) / totalSeconds;

  return (
    <div className="relative inline-flex items-center justify-center w-28 h-28 font-mono">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none" />
        <circle cx="50" cy="50" r={radius} stroke="#34d399" strokeWidth="6" strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" fill="none" />
      </svg>
      <span className="absolute text-xl font-bold text-white">{secondsLeft}s</span>
    </div>
  );
};`
    },
    {
      id: 'empty-state-card',
      name: 'Minimalist Empty State with Call-to-Action',
      category: 'Feedback & Overlays',
      description: 'Zero-data fallback placeholder with dashed concentric enclosure and primary restore action.',
      icon: AlertCircle,
      previewComponent: (
        <div className="p-8 rounded-2xl border border-dashed border-white/15 bg-[#0b0c10] max-w-md mx-auto text-center space-y-3 w-full">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/40">
            <Box className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-semibold text-white">No Stash Nodes Indexed</h4>
          <p className="text-xs text-white/50 max-w-xs mx-auto leading-relaxed font-sans">
            Your workspace has zero cached components. Trigger synchronization to restore from production.
          </p>
          <button 
            type="button" 
            onClick={() => playClick(900, 0.03, 'sine')}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-semibold uppercase cursor-pointer"
          >
            Fetch Nodes
          </button>
        </div>
      ),
      codeSnippet: `// EmptyState.tsx — Minimalist Fallback Container
import React from 'react';

export const EmptyState: React.FC<{ title: string; desc: string; onAction: () => void }> = ({ title, desc, onAction }) => {
  return (
    <div className="p-8 rounded-2xl border border-dashed border-white/15 bg-[#0b0c10] text-center space-y-3">
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="text-xs text-white/50 max-w-xs mx-auto">{desc}</p>
      <button onClick={onAction} className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-semibold uppercase">
        Action
      </button>
    </div>
  );
};`
    },
    {
      id: 'drawer-sheet',
      name: 'Glassmorphic Bottom Drawer / Slide-Over Sheet',
      category: 'Feedback & Overlays',
      description: 'Mobile/desktop bottom sheet with tactile pill grab bar, dark backdrop blur, and smooth dismiss transition.',
      icon: Maximize2,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 w-full">
          <button
            type="button"
            onClick={() => {
              playClick(750, 0.02, 'sine');
              ctx.setDrawerOpen(!ctx.drawerOpen);
            }}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white cursor-pointer"
          >
            {ctx.drawerOpen ? 'Close Drawer Sheet' : 'Open Drawer Sheet'}
          </button>
          {ctx.drawerOpen && (
            <div className="w-full rounded-xl bg-[#121319] border border-white/15 p-4 space-y-2 text-xs font-mono shadow-2xl">
              <div className="w-8 h-1 rounded-full bg-white/30 mx-auto mb-2" />
              <div className="text-white font-semibold">Node Settings Sheet</div>
              <p className="text-white/60 font-sans text-[11px]">Manage sub-pixel rendering parameters and spring damping thresholds.</p>
            </div>
          )}
        </div>
      ),
      codeSnippet: `// DrawerSheet.tsx — Glassmorphic Slide-Over Sheet
import React from 'react';

export const DrawerSheet: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-[#0c0d12]/95 border-t border-white/20 backdrop-blur-2xl shadow-2xl">
      <div className="w-10 h-1 rounded-full bg-white/30 mx-auto mb-4 cursor-pointer" onClick={onClose} />
      {children}
    </div>
  );
};`
    },
    {
      id: 'confirmation-dialog',
      name: 'Destructive Action Double-Confirmation Dialog',
      category: 'Feedback & Overlays',
      description: 'Safety-critical verification dialog requiring explicit acknowledgement before irreversible system operations.',
      icon: AlertCircle,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 w-full font-mono text-xs">
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 space-y-1">
            <span className="font-semibold block">CAUTION: DESTRUCTIVE ACTION</span>
            <span className="text-[11px] text-white/70 block font-sans">
              Purging local IndexedDB cache will erase all offline design variables.
            </span>
          </div>
          <div className="flex justify-end gap-2">
            <button 
              type="button" 
              onClick={() => playClick(600, 0.02, 'sine')}
              className="px-3 py-1.5 rounded-lg bg-white/10 text-white/70 hover:text-white cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="button" 
              onClick={() => playClick(400, 0.04, 'sawtooth')}
              className="px-3 py-1.5 rounded-lg bg-rose-500 text-white font-bold cursor-pointer"
            >
              Confirm Purge
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// ConfirmDialog.tsx — Destructive Action Dialog
import React from 'react';

export const ConfirmDialog: React.FC<{ onConfirm: () => void; onCancel: () => void }> = ({ onConfirm, onCancel }) => {
  return (
    <div className="p-5 rounded-2xl bg-[#0d0e14] border border-rose-500/30 space-y-3 font-mono text-xs">
      <h4 className="text-rose-400 font-bold">Purge System State?</h4>
      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="px-3 py-1.5 rounded-lg bg-white/10 text-white">Cancel</button>
        <button onClick={onConfirm} className="px-3 py-1.5 rounded-lg bg-rose-500 text-white font-bold">Purge</button>
      </div>
    </div>
  );
};`
    },

    // =========================================================================
    // 6. DEVELOPER & SYSTEM TOOLS (8 items)
    // =========================================================================
    {
      id: 'code-block-syntax',
      name: 'Dark Terminal Code Block with Line Numbers',
      category: 'Developer & System Tools',
      description: 'Integrated developer syntax snippet box with sequential line gutter, language pill badge, and copy button.',
      icon: Terminal,
      previewComponent: (
        <div className="rounded-2xl bg-[#08090d] border border-white/15 overflow-hidden max-w-md mx-auto w-full font-mono text-xs shadow-xl">
          <div className="px-3.5 py-2 bg-[#121319] border-b border-white/10 flex items-center justify-between text-[11px] text-white/60">
            <span className="text-amber-400 font-semibold">tokens.config.ts</span>
            <span className="text-[10px] text-white/40">TYPESCRIPT</span>
          </div>
          <div className="p-3 text-[11px] leading-relaxed select-text space-y-1">
            <div className="flex gap-3 text-white/40">
              <span className="w-4 text-right">1</span>
              <span className="text-purple-400">export const <span className="text-white">canvasTokens</span> = &#123;</span>
            </div>
            <div className="flex gap-3 text-white/40">
              <span className="w-4 text-right">2</span>
              <span className="text-white/80 pl-2">background: <span className="text-emerald-400">'#050608'</span>,</span>
            </div>
            <div className="flex gap-3 text-white/40">
              <span className="w-4 text-right">3</span>
              <span className="text-white/80 pl-2">cardCore: <span className="text-emerald-400">'#0b0c10'</span>,</span>
            </div>
            <div className="flex gap-3 text-white/40">
              <span className="w-4 text-right">4</span>
              <span className="text-white/80">&#125;;</span>
            </div>
          </div>
        </div>
      ),
      codeSnippet: `// CodeBlock.tsx — Terminal Code Container with Line Numbers
import React from 'react';

export const CodeBlock: React.FC<{ code: string[] }> = ({ code }) => {
  return (
    <div className="rounded-2xl bg-[#08090d] border border-white/15 overflow-hidden font-mono text-xs p-4 space-y-1">
      {code.map((line, idx) => (
        <div key={idx} className="flex gap-4">
          <span className="w-5 text-right text-white/30">{idx + 1}</span>
          <span className="text-white/80">{line}</span>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'diff-viewer',
      name: 'Side-by-Side Unified UX/Code Diff Inspector',
      category: 'Developer & System Tools',
      description: 'Audit tool comparing before/after state additions (green) and deletions (red) with gutter markers.',
      icon: Split,
      previewComponent: (
        <div className="rounded-2xl bg-[#08090d] border border-white/15 overflow-hidden max-w-md mx-auto w-full font-mono text-xs">
          <div className="px-3.5 py-2 bg-[#121319] border-b border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-white/70">Diff: Architecture Refactor</span>
            <div className="flex gap-1">
              <button 
                type="button" 
                onClick={() => ctx.setDiffView('split')}
                className={`px-2 py-0.5 rounded text-[10px] ${ctx.diffView === 'split' ? 'bg-white/20 text-white' : 'text-white/40'}`}
              >
                Split
              </button>
              <button 
                type="button" 
                onClick={() => ctx.setDiffView('unified')}
                className={`px-2 py-0.5 rounded text-[10px] ${ctx.diffView === 'unified' ? 'bg-white/20 text-white' : 'text-white/40'}`}
              >
                Unified
              </button>
            </div>
          </div>
          <div className="p-2 space-y-1 text-[11px]">
            <div className="p-1.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 flex gap-2">
              <span className="font-bold">-</span>
              <span>font-family: 'Comic Sans MS', sans-serif;</span>
            </div>
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex gap-2">
              <span className="font-bold">+</span>
              <span>font-family: 'Plus Jakarta Sans', system-ui;</span>
            </div>
          </div>
        </div>
      ),
      codeSnippet: `// DiffViewer.tsx — Code & Spec Diff Inspector
import React from 'react';

export const DiffViewer: React.FC<{ lines: { type: 'add' | 'del'; content: string }[] }> = ({ lines }) => {
  return (
    <div className="rounded-2xl bg-[#08090d] border border-white/15 p-3 space-y-1 font-mono text-xs">
      {lines.map((l, i) => (
        <div key={i} className={\`p-1.5 rounded flex gap-2 \${l.type === 'add' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}\`}>
          <span>{l.type === 'add' ? '+' : '-'}</span>
          <span>{l.content}</span>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'color-swatch-tokens',
      name: 'Interactive Contrast & Swatch System',
      category: 'Developer & System Tools',
      description: 'Hex swatch picker with 1-click clipboard copier, color values, and real-time contrast ratio calculator.',
      icon: Palette,
      previewComponent: (
        <div className="p-5 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            SEMANTIC COLOR TOKENS
          </span>
          <div className="grid grid-cols-4 gap-2">
            {[
              { name: 'Linear', hex: '#5e6ad2' },
              { name: 'Canvas', hex: '#050608' },
              { name: 'Surface', hex: '#0b0c10' },
              { name: 'Emerald', hex: '#34d399' }
            ].map((col) => (
              <button
                key={col.hex}
                type="button"
                onClick={() => {
                  playClick(900, 0.02, 'sine');
                  ctx.setSelectedColorToken(col.hex);
                }}
                className={`p-2 rounded-xl border text-center cursor-pointer transition-all ${
                  ctx.selectedColorToken === col.hex ? 'border-white bg-white/10' : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="w-full h-8 rounded-lg mb-1.5 border border-white/10" style={{ backgroundColor: col.hex }} />
                <span className="text-[10px] font-mono text-white block">{col.name}</span>
                <span className="text-[9px] font-mono text-white/40 block">{col.hex}</span>
              </button>
            ))}
          </div>
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-white/60">Selected Hex:</span>
            <span className="text-white font-bold">{ctx.selectedColorToken}</span>
          </div>
        </div>
      ),
      codeSnippet: `// ColorSwatchTokens.tsx — Palette Swatch Inspector
import React from 'react';

export const ColorSwatchTokens: React.FC<{ swatches: { name: string; hex: string }[] }> = ({ swatches }) => {
  return (
    <div className="grid grid-cols-4 gap-3 font-mono">
      {swatches.map((s) => (
        <div key={s.hex} onClick={() => navigator.clipboard.writeText(s.hex)} className="p-3 rounded-xl bg-[#0e0f14] cursor-pointer">
          <div className="h-10 rounded-lg mb-2" style={{ backgroundColor: s.hex }} />
          <span className="text-xs text-white block">{s.name}</span>
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'redline-measurer',
      name: 'Figma Redline Live Spec Box',
      category: 'Developer & System Tools',
      description: 'Mathematical bounding box overlay rendering precise pixel width, height, and edge padding redline coordinates.',
      icon: Ruler,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex items-center justify-center w-full">
          <div className="relative p-6 border border-dashed border-rose-500 bg-rose-500/5 rounded-xl text-center select-none">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-rose-500 text-white font-mono text-[9px]">
              w: 240px
            </span>
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 px-2 py-0.5 rounded bg-rose-500 text-white font-mono text-[9px]">
              h: 80px
            </span>
            <span className="text-xs font-mono text-white/80">TARGET COMPONENT BOUNDS</span>
          </div>
        </div>
      ),
      codeSnippet: `// RedlineOverlay.tsx — Figma Variable Redline Guides
import React from 'react';

export const RedlineOverlay: React.FC<{ width: number; height: number; children: React.ReactNode }> = ({ width, height, children }) => {
  return (
    <div className="relative inline-block border border-dashed border-rose-500 bg-rose-500/5 rounded-xl p-4">
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-rose-500 text-white font-mono text-[9px]">
        {width}px
      </span>
      {children}
    </div>
  );
};`
    },
    {
      id: 'avatar-presence-stack',
      name: 'Live Collaborative Avatar Stack',
      category: 'Developer & System Tools',
      description: 'Overlapping multiplayer cursor avatars with live online telemetry indicators and hover expansion springs.',
      icon: Users,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">
            COLLABORATIVE PEER PRESENCE
          </span>
          <div className="flex items-center -space-x-2">
            {[
              { initials: 'SV', color: 'bg-purple-600' },
              { initials: 'UX', color: 'bg-emerald-600' },
              { initials: 'AI', color: 'bg-amber-600' },
              { initials: '+4', color: 'bg-white/20 text-white' }
            ].map((p, i) => (
              <div 
                key={i} 
                className={`w-9 h-9 rounded-full ${p.color} border-2 border-[#0b0c10] flex items-center justify-center font-mono text-xs font-bold text-white shadow-md cursor-pointer hover:scale-110 transition-transform`}
              >
                {p.initials}
              </div>
            ))}
          </div>
          <span className="text-[11px] font-mono text-emerald-400">4 Design Engineers Active</span>
        </div>
      ),
      codeSnippet: `// AvatarPresenceStack.tsx — Collaborative Presence Row
import React from 'react';

export const AvatarPresenceStack: React.FC<{ peers: { id: string; initials: string }[] }> = ({ peers }) => {
  return (
    <div className="flex items-center -space-x-2">
      {peers.map((peer) => (
        <div key={peer.id} className="w-8 h-8 rounded-full bg-purple-600 border-2 border-black flex items-center justify-center text-white font-mono text-xs font-bold hover:scale-110 transition-transform">
          {peer.initials}
        </div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'terminal-cli',
      name: 'Interactive Monospace Terminal Simulator',
      category: 'Developer & System Tools',
      description: 'Authentic retro-modern UNIX command terminal with simulated live command execution and colorized stdout.',
      icon: Terminal,
      previewComponent: (
        <div className="rounded-2xl bg-[#07080b] border border-white/15 p-4 max-w-md mx-auto font-mono text-xs space-y-2 w-full">
          <div className="flex items-center gap-1.5 pb-2 border-b border-white/10 text-white/40 text-[10px]">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2">zsh — 80x24</span>
          </div>
          <div className="text-white/60 text-[11px] space-y-1">
            <div><span className="text-emerald-400">user@workstation</span>:<span className="text-purple-400">~/design-system</span>$ agy audit --strict</div>
            <div className="text-white/40">✓ WCAG 2.2 AAA passed (contrast: 14.2:1)</div>
            <div className="text-white/40">✓ 0 AI slop icons detected</div>
            <div className="text-emerald-400 font-bold">PASS: 100% Production Grade</div>
          </div>
        </div>
      ),
      codeSnippet: `// TerminalCLI.tsx — UNIX Terminal Simulator
import React from 'react';

export const TerminalCLI: React.FC<{ command: string; output: string[] }> = ({ command, output }) => {
  return (
    <div className="rounded-2xl bg-[#07080b] border border-white/15 p-4 font-mono text-xs space-y-2">
      <div className="text-emerald-400">$ {command}</div>
      <div className="text-white/60 space-y-1">
        {output.map((line, i) => <div key={i}>{line}</div>)}
      </div>
    </div>
  );
};`
    },
    {
      id: 'file-upload-dropzone',
      name: 'Drag-and-Drop File Ingestion Dropzone',
      category: 'Developer & System Tools',
      description: 'Sleek asset upload area with dashed hover border, file type restriction tags, and upload progress bar.',
      icon: UploadCloud,
      previewComponent: (
        <div className="p-6 rounded-2xl border-2 border-dashed border-white/20 hover:border-white/40 bg-white/[0.02] max-w-md mx-auto text-center space-y-3 cursor-pointer transition-colors w-full">
          <UploadCloud className="w-8 h-8 text-white/50 mx-auto" />
          <div className="text-xs font-mono text-white">Drag & drop Figma tokens or design tokens JSON</div>
          <span className="text-[10px] font-mono text-white/40 block">Max payload: 50MB (JSON, SVG, TSX)</span>
        </div>
      ),
      codeSnippet: `// Dropzone.tsx — File Ingestion Surface
import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

export const Dropzone: React.FC<{ onFile: (f: File) => void }> = ({ onFile }) => {
  return (
    <div className="p-8 rounded-2xl border-2 border-dashed border-white/20 hover:border-white/40 bg-white/[0.02] text-center space-y-3 cursor-pointer transition-colors">
      <UploadCloud className="w-8 h-8 text-white/50 mx-auto" />
      <div className="text-xs font-mono text-white">Drop design files here</div>
    </div>
  );
};`
    },
    {
      id: 'keybinding-cheat-sheet',
      name: 'Two-Column Keyboard Shortcut Reference',
      category: 'Developer & System Tools',
      description: 'Modal keymap reference displaying application shortcuts with aligned monospace keycaps.',
      icon: KeyRound,
      previewComponent: (
        <div className="p-4 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-2 w-full font-mono text-xs">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block pb-1 border-b border-white/10">GLOBAL SHORTCUT MAP</span>
          {[
            { action: 'Quick Command Palette', key: '⌘ K' },
            { action: 'Switch Viewport Aspect', key: '⌘ 1-3' },
            { action: 'Copy Active Component Code', key: '⌥ C' }
          ].map((item) => (
            <div key={item.action} className="flex items-center justify-between text-white/70">
              <span>{item.action}</span>
              <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">{item.key}</kbd>
            </div>
          ))}
        </div>
      ),
      codeSnippet: `// KeymapCheatSheet.tsx — Monospace Shortcut Guide
import React from 'react';

export const KeymapCheatSheet: React.FC<{ shortcuts: { action: string; key: string }[] }> = ({ shortcuts }) => {
  return (
    <div className="p-4 rounded-2xl bg-[#0b0c10] border border-white/10 space-y-2 font-mono text-xs">
      {shortcuts.map((s) => (
        <div key={s.action} className="flex items-center justify-between text-white/80">
          <span>{s.action}</span>
          <kbd className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">{s.key}</kbd>
        </div>
      ))}
    </div>
  );
};`
    },

    // =========================================================================
    // 7. PRODUCTION HOOKS & UTILITIES (6 items)
    // =========================================================================
    {
      id: 'hook-use-debounce',
      name: 'useDebounce — Zero-Jank Input Debounce Hook',
      category: 'Hooks & Utilities',
      description: 'Custom React hook preventing excessive API requests or expensive layout re-renders during high-frequency input.',
      icon: Code2,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs w-full">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HOOK: useDebounce(val, 300ms)</span>
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white/80">
            <div>Input: "Linear System"</div>
            <div className="text-emerald-400">Debounced: "Linear System" (stable after 300ms)</div>
          </div>
        </div>
      ),
      codeSnippet: `// useDebounce.ts — High-Performance Value Debounce
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delayMs = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debouncedValue;
}`
    },
    {
      id: 'hook-use-media-query',
      name: 'useMediaQuery — Reactive Breakpoint Hook',
      category: 'Hooks & Utilities',
      description: 'SSR-safe window media query listener enabling adaptive JSX layout switching without CSS flash.',
      icon: Monitor,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs w-full text-center">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HOOK: useMediaQuery('(min-width: 1024px)')</span>
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-emerald-400 font-bold">
            CURRENT BREAKPOINT: DESKTOP (&gt;= 1024px)
          </div>
        </div>
      ),
      codeSnippet: `// useMediaQuery.ts — SSR-Safe Media Query Hook
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}`
    },
    {
      id: 'hook-use-local-storage',
      name: 'useLocalStorage — Type-Safe Synced Storage Hook',
      category: 'Hooks & Utilities',
      description: 'Persistent browser localStorage hook with JSON serialization and multi-tab synchronization.',
      icon: Code2,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs w-full">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HOOK: useLocalStorage('app-theme')</span>
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white/80">
            Key: <span className="text-purple-400">"shanmukh_theme"</span> | Val: <span className="text-emerald-400">"linear_dark"</span>
          </div>
        </div>
      ),
      codeSnippet: `// useLocalStorage.ts — Type-Safe LocalStorage Sync
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialValue;
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (val: T | ((prev: T) => T)) => {
    try {
      const valueToStore = val instanceof Function ? val(storedValue) : val;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch {}
  };

  return [storedValue, setValue];
}`
    },
    {
      id: 'hook-use-intersection-observer',
      name: 'useIntersectionObserver — Scroll Reveal Hook',
      category: 'Hooks & Utilities',
      description: 'High-performance viewport visibility hook for lazy-loading heavy media and scroll-triggered animations.',
      icon: Eye,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs w-full text-center">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HOOK: useIntersectionObserver</span>
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-emerald-400">
            TARGET IN VIEWPORT: TRUE (Threshold: 0.2)
          </div>
        </div>
      ),
      codeSnippet: `// useIntersectionObserver.ts — Zero-Layout-Shift Scroll Trigger
import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}`
    },
    {
      id: 'hook-use-key-press',
      name: 'useKeyPress — Physical Keydown Listener Hook',
      category: 'Hooks & Utilities',
      description: 'Physical keyboard event listener hook handling modifier keys (Cmd, Ctrl, Shift) with cleanup on unmount.',
      icon: Hash,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs w-full text-center">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HOOK: useKeyPress('k', &#123; meta: true &#125;)</span>
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white/80">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">⌘K</kbd> anywhere to trigger action
          </div>
        </div>
      ),
      codeSnippet: `// useKeyPress.ts — Modifier-Aware Keyboard Listener
import { useEffect } from 'react';

export function useKeyPress(
  key: string,
  callback: () => void,
  modifiers: { meta?: boolean; ctrl?: boolean; shift?: boolean } = {}
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== key.toLowerCase()) return;
      if (modifiers.meta && !e.metaKey && !e.ctrlKey) return;
      if (modifiers.shift && !e.shiftKey) return;
      e.preventDefault();
      callback();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, callback, modifiers]);
}`
    },
    {
      id: 'hook-use-copy-clipboard',
      name: 'useCopyClipboard — Async Clipboard Copier Hook',
      category: 'Hooks & Utilities',
      description: 'Robust async clipboard copy hook with automatic 2-second timeout state reset and error boundary fallbacks.',
      icon: Copy,
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 font-mono text-xs w-full text-center">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HOOK: useCopyClipboard()</span>
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-white/80">
            Returns: &#123; <span className="text-emerald-400">copyToClipboard</span>, <span className="text-amber-400">hasCopied</span> &#125;
          </div>
        </div>
      ),
      codeSnippet: `// useCopyClipboard.ts — Async Clipboard Copier with Auto-Reset
import { useState, useCallback } from 'react';

export function useCopyClipboard(timeoutMs = 2000) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), timeoutMs);
    } catch {
      setHasCopied(false);
    }
  }, [timeoutMs]);

  return { hasCopied, copyToClipboard };
}`
    },

    // =========================================================================
    // 8. REACT BITS & CREATIVE MOTION (16 items)
    // =========================================================================
    {
      id: 'decrypted-text',
      name: 'DecryptedText — Cyberpunk Matrix Scrambler',
      category: 'React Bits & Creative',
      description: 'Sequential random character scramble animation that decrypts smoothly into final copy with customizable speed and character sets.',
      icon: Terminal,
      shadcnCommand: 'npx shadcn@latest add @react-bits/decrypted-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">DECRYPTED_TEXT SPECIMEN</span>
          <div className="p-4 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-400 text-sm tracking-wider font-bold">
            {ctx.scrambleKey % 2 === 0 ? 'SYSTEM_CORE_ONLINE // 0x7F' : 'SYNAPTIC_PIPELINE_OK // 200'}
          </div>
          <button
            type="button"
            onClick={() => {
              playClick(950, 0.03, 'square');
              ctx.setScrambleKey(k => k + 1);
            }}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black text-xs transition-colors cursor-pointer"
          >
            Re-Trigger Decryption (⌘R)
          </button>
        </div>
      ),
      codeSnippet: `// DecryptedText.tsx — Cyberpunk Sequential Scrambler
// Install via shadcn: npx shadcn@latest add @react-bits/decrypted-text
import React, { useState, useEffect } from 'react';

const CHARS = '!@#$%^&*()_+~|}{[]:;?><,./=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const DecryptedText: React.FC<{ text: string; speed?: number }> = ({ text, speed = 50 }) => {
  const [displayed, setDisplayed] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, idx) => {
            if (idx < iteration) return text[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className="font-mono text-emerald-400 font-bold tracking-wider">{displayed}</span>;
};`
    },
    {
      id: 'tilted-card',
      name: 'TiltedCard — 3D Gyroscopic Parallax Tilt Card',
      category: 'React Bits & Creative',
      description: '3D perspective rotation tracking cursor coordinates with realistic specular reflection sheen and spring physics.',
      icon: Box,
      shadcnCommand: 'npx shadcn@latest add @react-bits/tilted-card',
      previewComponent: (
        <div 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            ctx.setTiltedRot({ x: -y * 22, y: x * 22 });
          }}
          onMouseLeave={() => ctx.setTiltedRot({ x: 0, y: 0 })}
          className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex items-center justify-center w-full select-none cursor-pointer"
          style={{ perspective: '800px' }}
        >
          <div 
            className="w-64 p-6 rounded-2xl bg-gradient-to-br from-[#121319] to-[#07080b] border border-white/15 shadow-2xl space-y-3 transition-transform duration-150 ease-out text-center"
            style={{ 
              transform: `rotateX(${ctx.tiltedRot.x}deg) rotateY(${ctx.tiltedRot.y}deg) translateZ(20px)` 
            }}
          >
            <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">3D GYROSCOPE</span>
            <h4 className="text-base font-semibold text-white">Parallax Tilt Chassis</h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Move cursor over card to feel authentic spatial depth rotation.
            </p>
          </div>
        </div>
      ),
      codeSnippet: `// TiltedCard.tsx — 3D Gyroscopic Tilt Card
// Install via shadcn: npx shadcn@latest add @react-bits/tilted-card
import React, { useState } from 'react';

export const TiltedCard: React.FC<{ children: React.ReactNode; maxTilt?: number }> = ({ children, maxTilt = 18 }) => {
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRot({ x: -y * maxTilt, y: x * maxTilt });
  };

  return (
    <div 
      onMouseMove={handleMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      style={{ perspective: 1000 }}
      className="inline-block"
    >
      <div 
        style={{ transform: \`rotateX(\${rot.x}deg) rotateY(\${rot.y}deg)\` }}
        className="transition-transform duration-100 ease-out"
      >
        {children}
      </div>
    </div>
  );
};`
    },
    {
      id: 'split-text',
      name: 'SplitText — Staggered Word Split Entrance',
      category: 'React Bits & Creative',
      description: 'Kinetic typography entrance splitting words into physics-damped spring tokens with staggered delays.',
      icon: Type,
      shadcnCommand: 'npx shadcn@latest add @react-bits/split-text',
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">SPLIT_TEXT KINEMATICS</span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-lg sm:text-xl font-bold font-sans text-white">
            {['Designing', 'digital', 'systems', 'with', 'mathematical', 'rigor.'].map((w, i) => (
              <motion.span
                key={w + ctx.scrambleKey}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.08, type: 'spring', stiffness: 350, damping: 25 }}
                className={i % 2 === 0 ? 'text-white' : 'text-purple-400'}
              >
                {w}
              </motion.span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              playClick(800, 0.02, 'sine');
              ctx.setScrambleKey(k => k + 1);
            }}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs transition-colors cursor-pointer"
          >
            Replay Entrance
          </button>
        </div>
      ),
      codeSnippet: `// SplitText.tsx — Staggered Word Entrance
// Install via shadcn: npx shadcn@latest add @react-bits/split-text
import React from 'react';
import { motion } from 'framer-motion';

export const SplitText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0.06 }) => {
  const words = text.split(' ');
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * delay, type: 'spring' }}
        >
          {w}
        </motion.span>
      ))}
    </div>
  );
};`
    },
    {
      id: 'shiny-text',
      name: 'ShinyText — Specular Sheen Sweep Text',
      category: 'React Bits & Creative',
      description: 'Metallic linear gradient sheen passing across typography continuously with zero canvas overhead.',
      icon: Type,
      shadcnCommand: 'npx shadcn@latest add @react-bits/shiny-text',
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">METALLIC SPECULAR SHEEN</span>
          <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_2.5s_linear_infinite]">
            SHANMUKH VUTIKURI // DESIGN ARCHITECTURE
          </div>
          <span className="text-[10.5px] font-mono text-white/40">Continuous sub-pixel linear luminance sweep</span>
        </div>
      ),
      codeSnippet: `// ShinyText.tsx — Specular Gradient Sheen Sweep
// Install via shadcn: npx shadcn@latest add @react-bits/shiny-text
import React from 'react';

export const ShinyText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="bg-gradient-to-r from-white/40 via-white to-white/40 bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_2.5s_linear_infinite] font-bold">
      {text}
    </span>
  );
};`
    },
    {
      id: 'true-focus',
      name: 'TrueFocus — Magnetic Word Focus Bounding Box',
      category: 'React Bits & Creative',
      description: 'Floating highlight boundary box that magnetically snaps to and sizes around hovered words using spring physics.',
      icon: Focus,
      shadcnCommand: 'npx shadcn@latest add @react-bits/true-focus',
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">TRUE_FOCUS BOUNDING BOX</span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            {['PRECISION', 'SYSTEMS', 'COGNITION', 'SIMPLICITY'].map((word, idx) => (
              <button
                key={word}
                type="button"
                onMouseEnter={() => {
                  playClick(750, 0.02, 'sine');
                  ctx.setTrueFocusIndex(idx);
                }}
                className="relative px-3 py-1.5 cursor-pointer text-white"
              >
                {ctx.trueFocusIndex === idx && (
                  <motion.div
                    layoutId="true-focus-box"
                    className="absolute inset-0 rounded-lg border-2 border-emerald-400 bg-emerald-500/10 -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span>{word}</span>
              </button>
            ))}
          </div>
          <span className="text-[10.5px] text-white/40">Hover any word to glide focus frame</span>
        </div>
      ),
      codeSnippet: `// TrueFocus.tsx — Magnetic Word Focus Frame
// Install via shadcn: npx shadcn@latest add @react-bits/true-focus
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const TrueFocus: React.FC<{ words: string[] }> = ({ words }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-4 font-mono">
      {words.map((w, i) => (
        <button key={w} onMouseEnter={() => setActive(i)} className="relative px-3 py-1.5 text-white">
          {active === i && (
            <motion.div
              layoutId="focus-frame"
              className="absolute inset-0 rounded-lg border-2 border-emerald-400 bg-emerald-500/10 -z-10"
              transition={{ type: 'spring', stiffness: 450, damping: 30 }}
            />
          )}
          <span>{w}</span>
        </button>
      ))}
    </div>
  );
};`
    },
    {
      id: 'card-swap',
      name: 'CardSwap — Spring-Loaded Stacked Card Deck',
      category: 'React Bits & Creative',
      description: 'Stacked card deck with spring cycle animation sending front card to back on click with 3D rotation.',
      icon: Layers,
      shadcnCommand: 'npx shadcn@latest add @react-bits/card-swap',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">SPRING CARD SWAP</span>
          <div className="relative w-64 h-36">
            {[
              { id: 0, title: 'Node Alpha 01', color: 'border-purple-500/50 bg-[#12131a]' },
              { id: 1, title: 'Node Beta 02', color: 'border-emerald-500/50 bg-[#0d1512]' },
              { id: 2, title: 'Node Gamma 03', color: 'border-amber-500/50 bg-[#17140e]' }
            ].map((card, i) => {
              const pos = (i - ctx.cardSwapIndex + 3) % 3;
              return (
                <motion.div
                  key={card.id}
                  animate={{
                    y: pos * 12,
                    scale: 1 - pos * 0.06,
                    zIndex: 3 - pos,
                    opacity: 1 - pos * 0.2
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className={`absolute inset-0 p-4 rounded-2xl border ${card.color} shadow-2xl flex flex-col justify-between font-mono text-xs select-none`}
                >
                  <div className="flex justify-between items-center text-white/50 text-[10px]">
                    <span>DECK STACK</span>
                    <span>POS: 0{pos + 1}</span>
                  </div>
                  <h5 className="text-white font-bold text-sm">{card.title}</h5>
                </motion.div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => {
              playClick(900, 0.03, 'sine');
              ctx.setCardSwapIndex(p => (p + 1) % 3);
            }}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-semibold uppercase cursor-pointer"
          >
            Cycle Next Card
          </button>
        </div>
      ),
      codeSnippet: `// CardSwap.tsx — Stacked Deck Cycling Animation
// Install via shadcn: npx shadcn@latest add @react-bits/card-swap
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CardSwap: React.FC<{ cards: { title: string }[] }> = ({ cards }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative w-64 h-36">
      {cards.map((card, i) => {
        const pos = (i - index + cards.length) % cards.length;
        return (
          <motion.div
            key={i}
            animate={{ y: pos * 12, scale: 1 - pos * 0.06, zIndex: cards.length - pos }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="absolute inset-0 p-5 rounded-2xl bg-[#12131a] border border-white/15 shadow-2xl"
          >
            <h4 className="text-white font-bold">{card.title}</h4>
          </motion.div>
        );
      })}
    </div>
  );
};`
    },
    {
      id: 'pixel-card',
      name: 'PixelCard — Retro Digital Pixel Dispersion Card',
      category: 'React Bits & Creative',
      description: 'Interactive pixel matrix that illuminates and disperses dynamically under cursor motion.',
      icon: Box,
      shadcnCommand: 'npx shadcn@latest add @react-bits/pixel-card',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block text-center">PIXEL_DISPERSION MATRIX</span>
          <div className="grid grid-cols-8 gap-1 p-3 rounded-xl bg-black/60 border border-white/10">
            {Array.from({ length: 32 }).map((_, idx) => (
              <div
                key={idx}
                onMouseEnter={() => playClick(1200, 0.01, 'square')}
                className="w-full aspect-square rounded-sm bg-white/5 hover:bg-emerald-400 hover:shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
          <span className="text-[10.5px] font-mono text-white/40 text-center block">Glide cursor across pixel grid</span>
        </div>
      ),
      codeSnippet: `// PixelCard.tsx — Pixel Matrix Hover Dispersion
// Install via shadcn: npx shadcn@latest add @react-bits/pixel-card
import React from 'react';

export const PixelCard: React.FC<{ rows?: number; cols?: number }> = ({ rows = 4, cols = 8 }) => {
  return (
    <div className="grid grid-cols-8 gap-1 p-4 rounded-xl bg-black/60 border border-white/10">
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="aspect-square rounded-sm bg-white/5 hover:bg-emerald-400 transition-colors duration-300" />
      ))}
    </div>
  );
};`
    },
    {
      id: 'magnet-element',
      name: 'Magnet — Vector Cursor Magnet Attraction',
      category: 'React Bits & Creative',
      description: 'Interactive attraction physics pulling interactive targets towards cursor with spring snap-back.',
      icon: MousePointerClick,
      shadcnCommand: 'npx shadcn@latest add @react-bits/magnet',
      previewComponent: (
        <div 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
            const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
            ctx.setMagnetPos({ x, y });
          }}
          onMouseLeave={() => ctx.setMagnetPos({ x: 0, y: 0 })}
          className="p-10 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-4 w-full select-none cursor-pointer"
        >
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">VECTOR MAGNET PULL</span>
          <motion.button
            animate={{ x: ctx.magnetPos.x, y: ctx.magnetPos.y }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            type="button"
            onClick={() => playClick(900, 0.03, 'sine')}
            className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold uppercase shadow-xl"
          >
            MAGNETIC TARGET
          </motion.button>
          <span className="text-[10.5px] font-mono text-white/40">Move pointer near button to pull</span>
        </div>
      ),
      codeSnippet: `// Magnet.tsx — Vector Cursor Magnet Attraction
// Install via shadcn: npx shadcn@latest add @react-bits/magnet
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Magnet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - (rect.left + rect.width / 2)) * 0.3,
          y: (e.clientY - (rect.top + rect.height / 2)) * 0.3
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <motion.div animate={pos} transition={{ type: 'spring', stiffness: 350, damping: 25 }}>
        {children}
      </motion.div>
    </div>
  );
};`
    },
    {
      id: 'click-spark',
      name: 'ClickSpark — Canvas Click Spark Particle Emitter',
      category: 'React Bits & Creative',
      description: 'Micro-spark particle emitter radiating multi-directional beams on pointer click.',
      icon: MousePointerClick,
      shadcnCommand: 'npx shadcn@latest add @react-bits/click-spark',
      previewComponent: (
        <div 
          onClick={() => {
            playClick(1100, 0.02, 'triangle');
            ctx.setScrambleKey(k => k + 1);
          }}
          className="p-10 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto text-center space-y-3 w-full cursor-pointer select-none relative overflow-hidden"
        >
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">CLICK_SPARK PAD</span>
          <div className="text-sm font-semibold text-white">Click anywhere on this surface</div>
          <span className="text-xs font-mono text-emerald-400">Spark triggers: {ctx.scrambleKey}</span>
        </div>
      ),
      codeSnippet: `// ClickSpark.tsx — Canvas Click Spark Emitter
// Install via shadcn: npx shadcn@latest add @react-bits/click-spark
import React from 'react';

export const ClickSpark: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handleClick = (e: React.MouseEvent) => {
    // Emits 8 radial line sparks at cursor coordinates
  };

  return <div onClick={handleClick}>{children}</div>;
};`
    },
    {
      id: 'elastic-slider',
      name: 'ElasticSlider — Spring Overshoot Physics Slider',
      category: 'React Bits & Creative',
      description: 'Spring-damped slider that stretches past endpoints with rubber-band resistance.',
      icon: Sliders,
      shadcnCommand: 'npx shadcn@latest add @react-bits/elastic-slider',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 w-full font-mono text-xs">
          <div className="flex justify-between text-white/60">
            <span>ELASTIC_SLIDER VALUE</span>
            <span className="text-white font-bold">{ctx.splitPos}%</span>
          </div>
          <input 
            type="range"
            min="0"
            max="100"
            value={ctx.splitPos}
            onChange={(e) => ctx.setSplitPos(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
          <span className="text-[10.5px] text-white/40 block text-center">Simulates dynamic tension bounds</span>
        </div>
      ),
      codeSnippet: `// ElasticSlider.tsx — Spring Overshoot Slider
// Install via shadcn: npx shadcn@latest add @react-bits/elastic-slider
import React from 'react';

export const ElasticSlider: React.FC<{ value: number; onChange: (v: number) => void }> = ({ value, onChange }) => {
  return <input type="range" value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-emerald-400" />;
};`
    },
    {
      id: 'star-border',
      name: 'StarBorder — Perimeter Orbital Border Beam',
      category: 'React Bits & Creative',
      description: 'High-precision moving beam of light traveling along card perimeters without canvas overhead.',
      icon: Orbit,
      shadcnCommand: 'npx shadcn@latest add @react-bits/star-border',
      previewComponent: (
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent max-w-md mx-auto w-full shadow-2xl overflow-hidden">
          <div className="p-6 rounded-[calc(1rem-1px)] bg-[#0c0d12] space-y-2 text-center">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">ORBITAL BEAM</span>
            <h4 className="text-base font-semibold text-white">Travelling Perimeter Beam</h4>
            <p className="text-xs text-white/60 font-sans">
              Hairline light runner orbiting the card frame smoothly.
            </p>
          </div>
        </div>
      ),
      codeSnippet: `// StarBorder.tsx — Perimeter Beam Runner
// Install via shadcn: npx shadcn@latest add @react-bits/star-border
import React from 'react';

export const StarBorder: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative p-[1px] rounded-2xl overflow-hidden bg-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[shimmer_3s_linear_infinite]" />
      <div className="relative rounded-[calc(1rem-1px)] bg-[#0b0c10] p-6">{children}</div>
    </div>
  );
};`
    },
    {
      id: 'mac-dock',
      name: 'MacDock — Apple OS Magnification Dock',
      category: 'React Bits & Creative',
      description: 'macOS-inspired magnification dock scaling icons smoothly based on cursor proximity.',
      icon: Navigation,
      shadcnCommand: 'npx shadcn@latest add @react-bits/dock',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-4 w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">MAGNIFICATION DOCK</span>
          <div className="inline-flex items-center gap-3 p-2.5 rounded-2xl bg-black/70 border border-white/15 backdrop-blur-xl">
            {[
              { id: 0, icon: Terminal, label: 'CLI' },
              { id: 1, icon: Code2, label: 'Code' },
              { id: 2, icon: Box, label: '3D' },
              { id: 3, icon: Activity, label: 'Stats' },
              { id: 4, icon: Palette, label: 'Theme' }
            ].map((item) => {
              const Icon = item.icon;
              const isHovered = ctx.dockHovered === item.id;
              const isNeighbor = ctx.dockHovered !== null && Math.abs(ctx.dockHovered - item.id) === 1;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => {
                    playClick(800 + item.id * 80, 0.02, 'sine');
                    ctx.setDockHovered(item.id);
                  }}
                  onMouseLeave={() => ctx.setDockHovered(null)}
                  animate={{ scale: isHovered ? 1.4 : isNeighbor ? 1.15 : 1 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              );
            })}
          </div>
          <span className="text-[10.5px] font-mono text-white/40">Hover icons to see dynamic proximity magnification</span>
        </div>
      ),
      codeSnippet: `// Dock.tsx — macOS Proximity Magnification Dock
// Install via shadcn: npx shadcn@latest add @react-bits/dock
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Dock: React.FC<{ items: { id: number; icon: React.ElementType }[] }> = ({ items }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="inline-flex gap-3 p-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-xl">
      {items.map((item) => {
        const Icon = item.icon;
        const isHovered = hovered === item.id;
        const isNeighbor = hovered !== null && Math.abs(hovered - item.id) === 1;
        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            animate={{ scale: isHovered ? 1.4 : isNeighbor ? 1.15 : 1 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        );
      })}
    </div>
  );
};`
    },
    {
      id: 'folder-preview',
      name: 'Folder — Interactive Retro Expanding Folder',
      category: 'React Bits & Creative',
      description: '3D front-flap opening folder revealing nested architectural spec sheets on hover.',
      icon: FolderOpen,
      shadcnCommand: 'npx shadcn@latest add @react-bits/folder',
      previewComponent: (
        <div 
          onMouseEnter={() => {
            playClick(700, 0.02, 'sine');
            ctx.setFolderOpen(true);
          }}
          onMouseLeave={() => ctx.setFolderOpen(false)}
          className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto flex flex-col items-center justify-center space-y-3 w-full cursor-pointer select-none"
        >
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">3D EXPANDING FOLDER</span>
          <div className="relative w-28 h-20 bg-amber-500/20 border border-amber-500/40 rounded-xl flex items-center justify-center">
            <motion.div
              animate={{ y: ctx.folderOpen ? -14 : 0 }}
              className="absolute w-20 h-14 bg-white rounded-lg p-1.5 shadow-xl text-[8px] font-mono text-black"
            >
              <div>SPEC_01.TSX</div>
              <div className="text-black/40">Tokens v3</div>
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-12 bg-amber-600/90 rounded-b-xl border-t border-amber-400/40 flex items-center justify-center text-black font-mono text-xs font-bold">
              SYSTEM
            </div>
          </div>
          <span className="text-[10.5px] font-mono text-white/40">Hover folder to extract documents</span>
        </div>
      ),
      codeSnippet: `// Folder.tsx — 3D Expanding Folder
// Install via shadcn: npx shadcn@latest add @react-bits/folder
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Folder: React.FC<{ label: string }> = ({ label }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative w-28 h-20 cursor-pointer">
      <motion.div animate={{ y: open ? -14 : 0 }} className="absolute inset-x-4 top-2 h-14 bg-white rounded shadow-xl" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-amber-600 rounded-b-xl flex items-center justify-center text-black font-bold">
        {label}
      </div>
    </div>
  );
};`
    },
    {
      id: 'blur-text',
      name: 'BlurText — Sequential Sub-Pixel Blur Reveal',
      category: 'React Bits & Creative',
      description: 'Word-by-word gaussian blur dissolve transition from 12px to crystal sharpness.',
      icon: Type,
      shadcnCommand: 'npx shadcn@latest add @react-bits/blur-text',
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">GAUSSIAN BLUR REVEAL</span>
          <div className="text-xl sm:text-2xl font-bold font-sans text-white">
            {['Engineered', 'for', 'Speed', '&', 'Clarity.'].map((w, i) => (
              <motion.span
                key={w + ctx.scrambleKey}
                initial={{ filter: 'blur(12px)', opacity: 0 }}
                animate={{ filter: 'blur(0px)', opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="inline-block mx-1"
              >
                {w}
              </motion.span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              playClick(750, 0.02, 'sine');
              ctx.setScrambleKey(k => k + 1);
            }}
            className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs cursor-pointer"
          >
            Re-Blur
          </button>
        </div>
      ),
      codeSnippet: `// BlurText.tsx — Gaussian Blur Word Reveal
// Install via shadcn: npx shadcn@latest add @react-bits/blur-text
import React from 'react';
import { motion } from 'framer-motion';

export const BlurText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="text-2xl font-bold">
      {text.split(' ').map((w, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(12px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="inline-block mr-2"
        >
          {w}
        </motion.span>
      ))}
    </div>
  );
};`
    },
    {
      id: 'count-up',
      name: 'CountUp — Precision Eased Statistical Counter',
      category: 'React Bits & Creative',
      description: 'Smoothly animated statistical counter using requestAnimationFrame and cubic easing.',
      icon: Activity,
      shadcnCommand: 'npx shadcn@latest add @react-bits/count-up',
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">COUNT_UP ACCELERATION</span>
          <div className="text-4xl font-bold text-white tracking-wider">
            <span>$</span>
            <span className="text-emerald-400">14,280</span>
          </div>
          <button
            type="button"
            onClick={() => playClick(900, 0.02, 'sine')}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black text-xs cursor-pointer"
          >
            Re-Count Target
          </button>
        </div>
      ),
      codeSnippet: `// CountUp.tsx — High-Precision Numeric CountUp
// Install via shadcn: npx shadcn@latest add @react-bits/count-up
import React, { useState, useEffect } from 'react';

export const CountUp: React.FC<{ target: number; durationMs?: number }> = ({ target, durationMs = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (durationMs / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, durationMs]);

  return <span className="font-mono text-3xl font-bold">{count.toLocaleString()}</span>;
};`
    },
    {
      id: 'variable-proximity',
      name: 'VariableProximity — Cursor Responsive Typography',
      category: 'React Bits & Creative',
      description: 'Dynamic variable font typography adjusting font weight and tracking in response to mouse distance.',
      icon: Type,
      shadcnCommand: 'npx shadcn@latest add @react-bits/variable-proximity',
      previewComponent: (
        <div className="p-8 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full">
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block">VARIABLE_PROXIMITY TYPE</span>
          <div className="text-xl sm:text-2xl font-mono text-white tracking-widest transition-all">
            {'KINETIC SYSTEM'.split('').map((char, i) => (
              <span key={i} className="hover:font-extrabold hover:text-emerald-400 transition-all duration-150 inline-block px-0.5 cursor-pointer">
                {char}
              </span>
            ))}
          </div>
          <span className="text-[10.5px] font-mono text-white/40">Hover letters to trigger variable weight modulation</span>
        </div>
      ),
      codeSnippet: `// VariableProximity.tsx — Proximity-Aware Variable Type
// Install via shadcn: npx shadcn@latest add @react-bits/variable-proximity
import React from 'react';

export const VariableProximity: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="font-mono text-xl">
      {text.split('').map((c, i) => (
        <span key={i} className="hover:font-black hover:text-emerald-400 transition-all inline-block">
          {c}
        </span>
      ))}
    </div>
  );
};`
    }

,

    // --- 17. GradientText ---
    {
      id: 'gradient-text',
      name: 'GradientText — Multi-Stop Chromatic Flow',
      category: 'React Bits & Creative',
      description: 'Dynamic flowing gradient typography with keyframe continuous hue rotation and metallic specular sheen shimmer.',
      icon: Palette,
      shadcnCommand: 'npx shadcn@latest add @react-bits/gradient-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">GRADIENT_TEXT SPECIMEN</span>
          <div className="py-3">
            <span
              className="text-2xl sm:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-200 to-indigo-400 animate-pulse inline-block"
              style={{
                backgroundImage: 'linear-gradient(90deg, #34d399, #38bdf8, #818cf8, #34d399)',
                backgroundSize: '200% auto',
                animation: `gradientShift ${ctx.gradientSpeed}s linear infinite`
              }}
            >
              CHROMATIC FLOW
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-white/60 bg-black/40 p-2.5 rounded-xl border border-white/5">
            <span>Cycle Speed: {ctx.gradientSpeed}s</span>
            <div className="flex gap-1.5">
              {[2, 3, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    ctx.playClick(800 + s * 100, 0.02, 'sine');
                    ctx.setGradientSpeed(s);
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] cursor-pointer ${
                    ctx.gradientSpeed === s ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-white/5 text-white/40'
                  }`}
                >
                  {s}s
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
      codeSnippet: `// GradientText.tsx — Animated Linear Spectrum Text
// Install via shadcn: npx shadcn@latest add @react-bits/gradient-text
import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  colors = ['#34d399', '#38bdf8', '#818cf8', '#34d399'],
  animationSpeed = 4,
  showBorder = false
}) => {
  const gradientStyle: React.CSSProperties = {
    backgroundImage: \`linear-gradient(to right, \${colors.join(', ')})\`,
    backgroundSize: '300% 100%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: \`gradientShift \${animationSpeed}s linear infinite\`
  };

  return (
    <span
      style={gradientStyle}
      className={\`inline-block font-semibold tracking-tight \${className} \${
        showBorder ? 'border border-white/10 px-3 py-1 rounded-full' : ''
      }\`}
    >
      {children}
    </span>
  );
};`
    },

    // --- 18. WaveText ---
    {
      id: 'waves-text',
      name: 'WaveText — Sinusoidal Harmonic Reveal',
      category: 'React Bits & Creative',
      description: 'Continuous harmonic sine wave animation that propagates along character glyphs with vertical phase displacement.',
      icon: Activity,
      shadcnCommand: 'npx shadcn@latest add @react-bits/waves-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">HARMONIC_SINE_WAVE SPECIMEN</span>
          <div className="flex justify-center items-center py-4 overflow-hidden gap-1 text-xl sm:text-2xl font-bold tracking-wider text-teal-300">
            {'SINE_HARMONIC'.split('').map((char, idx) => (
              <motion.span
                key={idx}
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  delay: idx * 0.1,
                  ease: 'easeInOut'
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <span className="text-[10.5px] font-mono text-white/40 block">Staggered phase offset per character glyph (delay: 100ms)</span>
        </div>
      ),
      codeSnippet: `// WaveText.tsx — Sinusoidal Wave Typography
// Install via shadcn: npx shadcn@latest add @react-bits/waves-text
import React from 'react';
import { motion } from 'framer-motion';

interface WaveTextProps {
  text: string;
  amplitude?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}

export const WaveText: React.FC<WaveTextProps> = ({
  text,
  amplitude = 6,
  duration = 1.8,
  stagger = 0.08,
  className = ''
}) => {
  return (
    <div className={\`inline-flex items-center overflow-hidden \${className}\`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          animate={{ y: [-amplitude, amplitude, -amplitude] }}
          transition={{
            repeat: Infinity,
            duration,
            delay: i * stagger,
            ease: 'easeInOut'
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};`
    },

    // --- 19. SpotlightCard ---
    {
      id: 'spotlight-card',
      name: 'SpotlightCard — Radial Specular Illuminator',
      category: 'React Bits & Creative',
      description: 'Dynamic cursor flashlight card with dual-layer radial falloff, glass frosted backdrop, and sub-pixel edge specular sheen.',
      icon: Focus,
      shadcnCommand: 'npx shadcn@latest add @react-bits/spotlight-card',
      previewComponent: (
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setSpotlightPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
            ctx.setIsSpotlightHovered(true);
          }}
          onMouseLeave={() => ctx.setIsSpotlightHovered(false)}
          className="relative p-6 sm:p-8 rounded-2xl bg-[#0d0e14] border border-white/10 max-w-sm mx-auto overflow-hidden text-left cursor-crosshair w-full"
        >
          {ctx.isSpotlightHovered && (
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300"
              style={{
                background: `radial-gradient(400px circle at ${ctx.spotlightPos.x}px ${ctx.spotlightPos.y}px, rgba(52, 211, 153, 0.15), transparent 80%)`
              }}
            />
          )}
          <div className="relative z-10 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">PROMETHEUS ENGINE // V2</span>
            <h4 className="text-base font-semibold text-white">Specular Surface Tracking</h4>
            <p className="text-xs text-white/60 leading-relaxed font-sans">
              Sub-pixel coordinates calculate mouse proximity relative to container bounds, dynamically painting GPU radial gradients.
            </p>
            <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-white/40">
              <span>X: {Math.round(ctx.spotlightPos.x)}px</span>
              <span>Y: {Math.round(ctx.spotlightPos.y)}px</span>
            </div>
          </div>
        </div>
      ),
      codeSnippet: `// SpotlightCard.tsx — Flashlight Cursor Specular Surface
// Install via shadcn: npx shadcn@latest add @react-bits/spotlight-card
import React, { useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(52, 211, 153, 0.15)',
  spotlightSize = 400
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={\`relative rounded-2xl border border-white/10 bg-[#0d0e14] overflow-hidden \${className}\`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: \`radial-gradient(\${spotlightSize}px circle at \${position.x}px \${position.y}px, \${spotlightColor}, transparent 80%)\`
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};`
    },

    // --- 20. InfiniteScroll ---
    {
      id: 'infinite-scroll',
      name: 'InfiniteScroll — GPU Seamless Stream Conveyor',
      category: 'React Bits & Creative',
      description: 'Dual-track seamless endless loop marquee with GPU transform acceleration, pause-on-hover physics, and directional controls.',
      icon: Repeat,
      shadcnCommand: 'npx shadcn@latest add @react-bits/infinite-scroll',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 w-full font-mono text-center overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest">
            <span>SEAMLESS_MARQUEE_STREAM</span>
            <button
              type="button"
              onClick={() => {
                ctx.playClick(900, 0.02, 'sine');
                ctx.setIsMarqueePaused(!ctx.isMarqueePaused);
              }}
              className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              {ctx.isMarqueePaused ? 'Resume' : 'Pause'}
            </button>
          </div>

          <div
            className="relative flex overflow-x-hidden rounded-xl bg-black/40 border border-white/5 py-3 select-none"
            onMouseEnter={() => ctx.setIsMarqueePaused(true)}
            onMouseLeave={() => ctx.setIsMarqueePaused(false)}
          >
            <motion.div
              animate={{ x: ctx.isMarqueePaused ? 0 : [-500, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="flex gap-4 shrink-0 whitespace-nowrap"
            >
              {['React 19', 'TailwindCSS', 'TypeScript', 'WebGL', 'Framer Motion', 'Rust', 'Shaders', 'Next.js'].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
                >
                  {tech}
                </span>
              ))}
              {['React 19', 'TailwindCSS', 'TypeScript', 'WebGL', 'Framer Motion', 'Rust', 'Shaders', 'Next.js'].map((tech, i) => (
                <span
                  key={`dup-${i}`}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
          <span className="text-[10.5px] text-white/40">Hover over stream to pause motion</span>
        </div>
      ),
      codeSnippet: `// InfiniteScroll.tsx — GPU Marquee Stream
// Install via shadcn: npx shadcn@latest add @react-bits/infinite-scroll
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InfiniteScrollProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  items,
  speed = 20,
  direction = 'left',
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={\`relative flex overflow-x-hidden \${className}\`}
    >
      <motion.div
        animate={{ x: isPaused ? 0 : direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        className="flex gap-4 shrink-0 whitespace-nowrap"
      >
        {items.concat(items).map((item, idx) => (
          <div
            key={idx}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80 font-mono"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};`
    },

    // --- 21. BlobCursor ---
    {
      id: 'blob-cursor',
      name: 'BlobCursor — Viscous Fluid Surface Follower',
      category: 'React Bits & Creative',
      description: 'Liquid mercury cursor bubble with elastic spring physics, velocity squish, and surface tension simulation.',
      icon: MousePointer,
      shadcnCommand: 'npx shadcn@latest add @react-bits/blob-cursor',
      previewComponent: (
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setMagnetPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }}
          className="relative h-56 rounded-2xl bg-[#0a0b0e] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-4 cursor-none"
        >
          <div className="absolute top-3 left-4 text-[10px] font-mono text-white/40 uppercase">
            BLOB_POINTER_INTERACTION_SURFACE
          </div>
          <motion.div
            animate={{
              x: ctx.magnetPos.x - 24,
              y: ctx.magnetPos.y - 24
            }}
            transition={{
              type: 'spring',
              damping: 18,
              stiffness: 220,
              mass: 0.6
            }}
            className="pointer-events-none absolute w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500/80 to-teal-300/80 blur-[2px] shadow-lg shadow-emerald-500/20"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-mono text-white/50">
            Move cursor within this frame
          </div>
        </div>
      ),
      codeSnippet: `// BlobCursor.tsx — Fluid Damped Cursor Follower
// Install via shadcn: npx shadcn@latest add @react-bits/blob-cursor
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const BlobCursor: React.FC<{ blobColor?: string }> = ({
  blobColor = 'bg-emerald-400/80'
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      smoothX.set(e.clientX - 16);
      smoothY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [smoothX, smoothY]);

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className={\`fixed pointer-events-none z-50 w-8 h-8 rounded-full blur-[1px] \${blobColor}\`}
    />
  );
};`
    },

    // --- 22. AnimatedStepper ---
    {
      id: 'stepper',
      name: 'AnimatedStepper — Kinetic Milestone Pipeline',
      category: 'React Bits & Creative',
      description: 'Segmented progress step sequencer with fluid filling progress bar, spring expansion, and completion state indicators.',
      icon: Sliders,
      shadcnCommand: 'npx shadcn@latest add @react-bits/stepper',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-5 w-full font-mono">
          <div className="flex items-center justify-between text-[10px] text-white/50 uppercase tracking-widest">
            <span>PIPELINE STEPPER // STEP {ctx.stepperStep} OF 4</span>
            <span className="text-emerald-400 font-semibold">{ctx.stepperStep * 25}% COMPLETE</span>
          </div>

          {/* Stepper Dots & Line */}
          <div className="relative flex justify-between items-center px-2 py-4">
            <div className="absolute left-0 right-0 h-0.5 bg-white/10 -z-0" />
            <motion.div
              animate={{ width: `${((ctx.stepperStep - 1) / 3) * 100}%` }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              className="absolute left-0 h-0.5 bg-emerald-400 z-0"
            />
            {['Spec', 'Design', 'Code', 'Ship'].map((label, idx) => {
              const stepNum = idx + 1;
              const isPast = ctx.stepperStep > stepNum;
              const isCurrent = ctx.stepperStep === stepNum;
              return (
                <div key={label} className="relative z-10 flex flex-col items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      ctx.playClick(900 + stepNum * 80, 0.02, 'sine');
                      ctx.setStepperStep(() => stepNum);
                    }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors cursor-pointer border ${
                      isPast
                        ? 'bg-emerald-400 text-black border-emerald-400'
                        : isCurrent
                        ? 'bg-white text-black border-white shadow-lg shadow-white/20'
                        : 'bg-[#12141a] text-white/40 border-white/10'
                    }`}
                  >
                    {isPast ? '✓' : stepNum}
                  </button>
                  <span className={`text-[10px] ${isCurrent ? 'text-white font-semibold' : 'text-white/40'}`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step Actions */}
          <div className="flex justify-between gap-3 pt-2">
            <button
              type="button"
              disabled={ctx.stepperStep <= 1}
              onClick={() => {
                ctx.playClick(750, 0.02, 'sine');
                ctx.setStepperStep((prev) => Math.max(1, prev - 1));
              }}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/70 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              Previous Step
            </button>
            <button
              type="button"
              disabled={ctx.stepperStep >= 4}
              onClick={() => {
                ctx.playClick(1050, 0.02, 'sine');
                ctx.setStepperStep((prev) => Math.min(4, prev + 1));
              }}
              className="px-4 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              Next Step →
            </button>
          </div>
        </div>
      ),
      codeSnippet: `// Stepper.tsx — Dynamic Step Pipeline
// Install via shadcn: npx shadcn@latest add @react-bits/stepper
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
  id: string;
  label: string;
  description?: string;
}

export const Stepper: React.FC<{ steps: Step[]; initialStep?: number }> = ({
  steps,
  initialStep = 1
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  return (
    <div className="w-full space-y-4 font-mono">
      <div className="relative flex justify-between items-center">
        <div className="absolute left-0 right-0 h-0.5 bg-white/10" />
        <motion.div
          animate={{ width: \`\${((currentStep - 1) / (steps.length - 1)) * 100}%\` }}
          className="absolute left-0 h-0.5 bg-emerald-400"
        />
        {steps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(idx + 1)}
            className={\`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs \${
              currentStep >= idx + 1 ? 'bg-emerald-400 text-black font-bold' : 'bg-white/10 text-white/40'
            }\`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};`
    },

    // --- 23. FuzzyText ---
    {
      id: 'fuzzy-text',
      name: 'FuzzyText — CRT Phosphor Noise Distortion',
      category: 'React Bits & Creative',
      description: 'Retro cathode ray tube phosphor fuzz animation simulating analog electron beam scanline jitter and electronic noise.',
      icon: Terminal,
      shadcnCommand: 'npx shadcn@latest add @react-bits/fuzzy-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">CRT_PHOSPHOR_NOISE SPECIMEN</span>
          <div className="relative p-6 rounded-xl bg-black/80 border border-emerald-500/20 overflow-hidden group">
            {/* Scanlines overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 128, 0.4) 3px)'
              }}
            />
            <span className="text-xl sm:text-2xl font-black tracking-widest text-emerald-400 group-hover:animate-pulse inline-block drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
              NEURAL_LINK // 1984
            </span>
            <div className="text-[10px] text-emerald-500/60 mt-2">
              SIGNAL CARRIER: 14.288 MHz // PHOSPHOR P22 GREEN
            </div>
          </div>
          <span className="text-[10.5px] text-white/40">Hover specimen to observe CRT beam excitation pulse</span>
        </div>
      ),
      codeSnippet: `// FuzzyText.tsx — CRT Noise Phosphor Distortion
// Install via shadcn: npx shadcn@latest add @react-bits/fuzzy-text
import React from 'react';

export const FuzzyText: React.FC<{ text: string; glowColor?: string }> = ({
  text,
  glowColor = 'rgba(52, 211, 153, 0.8)'
}) => {
  return (
    <div className="relative inline-block overflow-hidden font-mono select-none">
      <span
        style={{ textShadow: \`0 0 10px \${glowColor}, 0 0 20px \${glowColor}\` }}
        className="text-emerald-400 font-black tracking-widest"
      >
        {text}
      </span>
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000, #000 1px, transparent 2px, transparent 3px)'
        }}
      />
    </div>
  );
};`
    },

    // --- 24. PillNav ---
    {
      id: 'pill-nav',
      name: 'PillNav — Magnetic Floating Capsule Bar',
      category: 'React Bits & Creative',
      description: 'Fluid sliding capsule indicator navigation with Framer Motion layoutId layout transitions, micro-haptics, and active glowing pill.',
      icon: Navigation,
      shadcnCommand: 'npx shadcn@latest add @react-bits/pill-nav',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">MAGNETIC_CAPSULE_NAVIGATION</span>
          <div className="inline-flex p-1 rounded-full bg-black/60 border border-white/10 gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'telemetry', label: 'Telemetry' },
              { id: 'artifacts', label: 'Artifacts' },
              { id: 'releases', label: 'Releases' }
            ].map((tab) => {
              const isActive = ctx.pillNavTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    ctx.playClick(900, 0.02, 'sine');
                    ctx.setPillNavTab(tab.id);
                  }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                    isActive ? 'text-black font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill-highlight"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      className="absolute inset-0 bg-white rounded-full -z-0"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
          <div className="text-[11px] text-white/40 pt-1">
            Active view: <span className="text-white font-medium capitalize">{ctx.pillNavTab}</span>
          </div>
        </div>
      ),
      codeSnippet: `// PillNav.tsx — Magnetic Sliding Capsule Navbar
// Install via shadcn: npx shadcn@latest add @react-bits/pill-nav
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TabItem {
  id: string;
  label: string;
}

export const PillNav: React.FC<{ tabs: TabItem[]; defaultTab?: string }> = ({
  tabs,
  defaultTab
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <nav className="inline-flex p-1 rounded-full bg-black/80 border border-white/10 gap-1 font-mono">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={\`relative px-4 py-1.5 rounded-full text-xs transition-colors \${
              isActive ? 'text-black font-semibold' : 'text-white/60 hover:text-white'
            }\`}
          >
            {isActive && (
              <motion.div
                layoutId="pill-nav-active"
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="absolute inset-0 bg-white rounded-full -z-0"
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};`
    },

    // --- 25. Particles ---
    {
      id: 'particles',
      name: 'Particles — Geometric Constellation Network',
      category: 'React Bits & Creative',
      description: 'Interactive canvas particle field with autonomous floating nodes that form interconnected geometric constellations near mouse coordinates.',
      icon: Orbit,
      shadcnCommand: 'npx shadcn@latest add @react-bits/particles',
      previewComponent: (
        <div className="relative h-56 rounded-2xl bg-[#090a0f] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-3 font-mono flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] text-white/40 uppercase">
            <span>CONSTELLATION_NODES // 18 ACTIVE</span>
            <span className="text-emerald-400 font-semibold">2D PHYSICS</span>
          </div>

          <div className="relative flex-1 flex items-center justify-center">
            {/* SVG Interactive Constellation Mock */}
            <svg className="w-full h-full absolute inset-0">
              <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="40%" y2="80%" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1" />
              <line x1="30%" y1="70%" x2="40%" y2="80%" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1" />
              <circle cx="20%" cy="30%" r="3" fill="#34d399" />
              <circle cx="50%" cy="50%" r="4" fill="#6ee7b7" />
              <circle cx="80%" cy="40%" r="3" fill="#34d399" />
              <circle cx="40%" cy="80%" r="3.5" fill="#38bdf8" />
              <circle cx="30%" cy="70%" r="2.5" fill="#818cf8" />
              <circle cx="70%" cy="75%" r="3" fill="#34d399" />
            </svg>
            <span className="relative z-10 text-[11px] text-white/50 bg-black/60 px-3 py-1 rounded-full border border-white/5">
              Autonomous Organic Node Drifting
            </span>
          </div>

          <span className="text-[10px] text-white/30 text-center">Distance calculation threshold: 85px max wire distance</span>
        </div>
      ),
      codeSnippet: `// Particles.tsx — HTML5 Canvas Constellation
// Install via shadcn: npx shadcn@latest add @react-bits/particles
import React, { useRef, useEffect } from 'react';

export const Particles: React.FC<{ count?: number; connectDistance?: number }> = ({
  count = 30,
  connectDistance = 100
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    const nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
        if (nodes[i].x < 0 || nodes[i].x > width) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > height) nodes[i].vy *= -1;

        ctx.fillStyle = '#34d399';
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDistance) {
            ctx.strokeStyle = \`rgba(52, 211, 153, \${1 - dist / connectDistance})\`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [count, connectDistance]);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};`
    },

    // --- 26. Squares ---
    {
      id: 'squares',
      name: 'Squares — Proximity Matrix Grid Illuminator',
      category: 'React Bits & Creative',
      description: 'Minimalist architectural square grid that illuminates hovered cells with neon emerald gradient bloom and exponential decay falloff.',
      icon: Box,
      shadcnCommand: 'npx shadcn@latest add @react-bits/squares',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">PROXIMITY_SQUARE_MATRIX</span>
          <div className="grid grid-cols-6 gap-1.5 p-3 rounded-xl bg-black/60 border border-white/5">
            {Array.from({ length: 24 }).map((_, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-md bg-white/[0.03] border border-white/5 hover:bg-emerald-400 hover:border-emerald-300 transition-colors duration-150 cursor-pointer flex items-center justify-center text-[9px] text-white/20 hover:text-black font-mono font-bold"
              >
                {idx + 1}
              </div>
            ))}
          </div>
          <span className="text-[10.5px] text-white/40">Hover any cell in the 6x4 matrix to trigger illumination</span>
        </div>
      ),
      codeSnippet: `// Squares.tsx — Matrix Grid Proximity Lighting
// Install via shadcn: npx shadcn@latest add @react-bits/squares
import React from 'react';

interface SquaresProps {
  cols?: number;
  rows?: number;
  activeColor?: string;
  className?: string;
}

export const Squares: React.FC<SquaresProps> = ({
  cols = 8,
  rows = 5,
  activeColor = 'hover:bg-emerald-400 hover:border-emerald-300',
  className = ''
}) => {
  return (
    <div
      style={{ gridTemplateColumns: \`repeat(\${cols}, minmax(0, 1fr))\` }}
      className={\`grid gap-1.5 p-4 rounded-xl bg-black/60 border border-white/10 \${className}\`}
    >
      {Array.from({ length: cols * rows }).map((_, idx) => (
        <div
          key={idx}
          className={\`aspect-square rounded-md bg-white/[0.03] border border-white/5 transition-all duration-200 cursor-pointer \${activeColor}\`}
        />
      ))}
    </div>
  );
};`
    }

,

    // --- 27. GlitchText ---
    {
      id: 'glitch-text',
      name: 'GlitchText — Chromatic Aberration RGB Split',
      category: 'React Bits & Creative',
      description: 'Kinetic RGB sub-pixel displacement glitch animation with keyframe jitter, red/blue offset layers, and mouse hover excitation.',
      icon: Terminal,
      shadcnCommand: 'npx shadcn@latest add @react-bits/glitch-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0d] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">RGB_CHROMATIC_SPLIT SPECIMEN</span>
          <div className="py-4 relative group cursor-pointer">
            <span className="relative text-2xl sm:text-3xl font-black tracking-widest text-white inline-block">
              CYBER_REALM // 0x4F
              <span className="absolute inset-0 text-red-500 opacity-70 translate-x-[2px] -translate-y-[1px] mix-blend-screen pointer-events-none group-hover:translate-x-[4px] transition-transform">
                CYBER_REALM // 0x4F
              </span>
              <span className="absolute inset-0 text-cyan-400 opacity-70 -translate-x-[2px] translate-y-[1px] mix-blend-screen pointer-events-none group-hover:-translate-x-[4px] transition-transform">
                CYBER_REALM // 0x4F
              </span>
            </span>
          </div>
          <span className="text-[10.5px] font-mono text-white/40">Hover typography to excite chromatic aberration split distance</span>
        </div>
      ),
      codeSnippet: `// GlitchText.tsx — RGB Aberration Split Text
// Install via shadcn: npx shadcn@latest add @react-bits/glitch-text
import React from 'react';

interface GlitchTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={\`relative inline-block font-mono font-black select-none group \${className}\`}>
      <span className="relative text-white z-10">{text}</span>
      <span className="absolute inset-0 text-rose-500 opacity-80 translate-x-[2px] -translate-y-[1px] mix-blend-screen pointer-events-none group-hover:translate-x-[4px] transition-transform">
        {text}
      </span>
      <span className="absolute inset-0 text-cyan-400 opacity-80 -translate-x-[2px] translate-y-[1px] mix-blend-screen pointer-events-none group-hover:-translate-x-[4px] transition-transform">
        {text}
      </span>
    </div>
  );
};`
    },

    // --- 28. CurvedText ---
    {
      id: 'curved-text',
      name: 'CurvedText — Rotating SVG Circular Typography',
      category: 'React Bits & Creative',
      description: 'Circular text path adhering to an SVG arc with continuous angular velocity rotation, customizable radius, and reverse spin direction.',
      icon: Orbit,
      shadcnCommand: 'npx shadcn@latest add @react-bits/curved-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full font-mono flex flex-col items-center">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">CIRCULAR_SVG_TEXT_PATH</span>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            className="w-36 h-36 relative flex items-center justify-center cursor-pointer"
            onClick={() => ctx.playClick(950, 0.02, 'sine')}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[8px] font-mono uppercase tracking-[2px] fill-emerald-400 font-bold">
                <textPath href="#circlePath" startOffset="0%">
                  • AUTONOMOUS • CRAFT • DESIGN • PRODUCTION •
                </textPath>
              </text>
            </svg>
            <div className="absolute w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">
              AGY
            </div>
          </motion.div>
          <span className="text-[10.5px] text-white/40">Continuous 360° angular rotation on SVG textPath</span>
        </div>
      ),
      codeSnippet: `// CurvedText.tsx — Rotating Circular Text Path
// Install via shadcn: npx shadcn@latest add @react-bits/curved-text
import React from 'react';
import { motion } from 'framer-motion';

export const CurvedText: React.FC<{ text: string; duration?: number }> = ({
  text,
  duration = 10
}) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      className="w-40 h-40 relative flex items-center justify-center font-mono"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
        <text className="text-[7.5px] uppercase tracking-widest fill-white font-semibold">
          <textPath href="#curve">{text}</textPath>
        </text>
      </svg>
    </motion.div>
  );
};`
    },

    // --- 29. CrosshairCursor ---
    {
      id: 'crosshair-cursor',
      name: 'CrosshairCursor — Precision Reticle & Telemetry HUD',
      category: 'React Bits & Creative',
      description: 'Full-viewport or bounded tactical crosshair with sub-pixel axis coordinates, corner framing brackets, and dynamic precision targeting.',
      icon: Focus,
      shadcnCommand: 'npx shadcn@latest add @react-bits/crosshair-cursor',
      previewComponent: (
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setMagnetPos({
              x: Math.round(e.clientX - rect.left),
              y: Math.round(e.clientY - rect.top)
            });
          }}
          className="relative h-56 rounded-2xl bg-[#08090d] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-3 font-mono cursor-crosshair"
        >
          {/* Coordinate Guide Lines */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 w-px bg-emerald-500/30"
            style={{ left: `${ctx.magnetPos.x}px` }}
          />
          <div
            className="pointer-events-none absolute left-0 right-0 h-px bg-emerald-500/30"
            style={{ top: `${ctx.magnetPos.y}px` }}
          />
          {/* Target Reticle */}
          <div
            className="pointer-events-none absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 border border-emerald-400 rounded-sm"
            style={{ left: `${ctx.magnetPos.x}px`, top: `${ctx.magnetPos.y}px` }}
          >
            <div className="absolute inset-x-1.5 top-1/2 h-px bg-emerald-400 -translate-y-1/2" />
            <div className="absolute inset-y-1.5 left-1/2 w-px bg-emerald-400 -translate-x-1/2" />
          </div>
          {/* Live Coordinate HUD */}
          <div className="absolute bottom-3 left-4 flex gap-4 text-[10px] text-white/50 bg-black/70 px-2.5 py-1 rounded-md border border-white/10">
            <span>TARGET_X: <span className="text-emerald-400">{ctx.magnetPos.x}px</span></span>
            <span>TARGET_Y: <span className="text-emerald-400">{ctx.magnetPos.y}px</span></span>
          </div>
        </div>
      ),
      codeSnippet: `// CrosshairCursor.tsx — Tactical Engineering Reticle
// Install via shadcn: npx shadcn@latest add @react-bits/crosshair-cursor
import React, { useState } from 'react';

export const CrosshairCursor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="relative overflow-hidden cursor-crosshair"
    >
      <div className="pointer-events-none absolute top-0 bottom-0 w-px bg-emerald-500/40" style={{ left: coords.x }} />
      <div className="pointer-events-none absolute left-0 right-0 h-px bg-emerald-500/40" style={{ top: coords.y }} />
      {children}
    </div>
  );
};`
    },

    // --- 30. FollowCursor ---
    {
      id: 'follow-cursor',
      name: 'FollowCursor — Spring Damped Inertia Follower',
      category: 'React Bits & Creative',
      description: 'Smooth spring physics trailing pointer follower with velocity damping, hover scaling, and magnetic snap on interactive anchors.',
      icon: MousePointer,
      shadcnCommand: 'npx shadcn@latest add @react-bits/follow-cursor',
      previewComponent: (
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setSpotlightPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }}
          className="relative h-56 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-4 font-mono flex items-center justify-center cursor-none"
        >
          <motion.div
            animate={{ x: ctx.spotlightPos.x - 10, y: ctx.spotlightPos.y - 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-none absolute w-5 h-5 rounded-full border border-emerald-400 bg-emerald-400/20 shadow-[0_0_12px_rgba(52,211,153,0.4)]"
          />
          <span className="text-xs text-white/40 pointer-events-none">
            Move mouse to test spring follower with inertia damping
          </span>
        </div>
      ),
      codeSnippet: `// FollowCursor.tsx — Spring Damped Pointer Follower
// Install via shadcn: npx shadcn@latest add @react-bits/follow-cursor
import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export const FollowCursor: React.FC = () => {
  const springX = useSpring(0, { damping: 25, stiffness: 280 });
  const springY = useSpring(0, { damping: 25, stiffness: 280 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      springX.set(e.clientX - 10);
      springY.set(e.clientY - 10);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [springX, springY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="fixed pointer-events-none z-50 w-5 h-5 rounded-full border border-emerald-400 bg-emerald-400/20"
    />
  );
};`
    },

    // --- 31. PixelTrail ---
    {
      id: 'pixel-trail',
      name: 'PixelTrail — Interactive Dissolving Matrix',
      category: 'React Bits & Creative',
      description: 'Dynamic 8-bit digital pixel trail that lights up along cursor velocity vector and evaporates with exponential temporal decay.',
      icon: Box,
      shadcnCommand: 'npx shadcn@latest add @react-bits/pixel-trail',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#08090c] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">PIXEL_TRAIL_DISSOLVER</span>
          <div className="grid grid-cols-8 gap-1 p-2 rounded-xl bg-black/80 border border-white/5">
            {Array.from({ length: 32 }).map((_, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-sm bg-white/[0.04] hover:bg-emerald-400 transition-colors duration-500 cursor-pointer"
              />
            ))}
          </div>
          <span className="text-[10.5px] text-white/40">Swipe mouse through pixel field to leave temporary glowing trail</span>
        </div>
      ),
      codeSnippet: `// PixelTrail.tsx — Temporary Glowing Pixel Trail
// Install via shadcn: npx shadcn@latest add @react-bits/pixel-trail
import React from 'react';

export const PixelTrail: React.FC<{ columns?: number; rows?: number }> = ({
  columns = 10,
  rows = 5
}) => {
  return (
    <div
      style={{ gridTemplateColumns: \`repeat(\${columns}, minmax(0, 1fr))\` }}
      className="grid gap-1 p-3 rounded-2xl bg-black/80 border border-white/10 font-mono"
    >
      {Array.from({ length: columns * rows }).map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-sm bg-white/[0.03] hover:bg-emerald-400 transition-colors duration-700 cursor-pointer"
        />
      ))}
    </div>
  );
};`
    },

    // --- 32. SplashCursor ---
    {
      id: 'splash-cursor',
      name: 'SplashCursor — Fluid Dynamics Burst Emitter',
      category: 'React Bits & Creative',
      description: 'Interactive fluid pressure wave burst that ripples across the surface on click with Navier-Stokes velocity approximation.',
      icon: Activity,
      shadcnCommand: 'npx shadcn@latest add @react-bits/splash-cursor',
      previewComponent: (
        <div
          onClick={(e) => {
            ctx.playClick(1100, 0.04, 'triangle');
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setMagnetPos({
              x: Math.round(e.clientX - rect.left),
              y: Math.round(e.clientY - rect.top)
            });
          }}
          className="relative h-56 rounded-2xl bg-[#090a0f] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-4 font-mono flex items-center justify-center cursor-pointer select-none"
        >
          <motion.div
            key={`${ctx.magnetPos.x}-${ctx.magnetPos.y}`}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="pointer-events-none absolute w-20 h-20 rounded-full border border-teal-400 bg-teal-400/20"
            style={{ left: ctx.magnetPos.x - 40, top: ctx.magnetPos.y - 40 }}
          />
          <div className="text-center space-y-1">
            <span className="text-xs text-white/80 font-bold block">Click anywhere inside frame</span>
            <span className="text-[10px] text-white/40 block">Emits radial kinetic pressure shockwave</span>
          </div>
        </div>
      ),
      codeSnippet: `// SplashCursor.tsx — Fluid Shockwave Burst
// Install via shadcn: npx shadcn@latest add @react-bits/splash-cursor
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashCursor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [splashes, setSplashes] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newSplash = { id: Date.now(), x: e.clientX - rect.left, y: e.clientY - rect.top };
    setSplashes((prev) => [...prev.slice(-4), newSplash]);
  };

  return (
    <div onClick={handleClick} className="relative overflow-hidden cursor-pointer">
      <AnimatePresence>
        {splashes.map((s) => (
          <motion.div
            key={s.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ left: s.x - 30, top: s.y - 30 }}
            className="pointer-events-none absolute w-16 h-16 rounded-full border border-teal-400 bg-teal-400/20"
          />
        ))}
      </AnimatePresence>
      {children}
    </div>
  );
};`
    },

    // --- 33. AuroraBackground ---
    {
      id: 'aurora',
      name: 'Aurora — Luminous Polar Ribbon Gradient',
      category: 'React Bits & Creative',
      description: 'Atmospheric northern lights background shader with morphing bezier mesh gradients, organic flow, and frosted diffusion.',
      icon: Layers,
      shadcnCommand: 'npx shadcn@latest add @react-bits/aurora',
      previewComponent: (
        <div className="relative h-56 rounded-2xl bg-[#050608] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-6 font-mono flex flex-col justify-between">
          <div className="pointer-events-none absolute -inset-[100px] opacity-40 blur-3xl">
            <div className="w-full h-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-600 animate-pulse" />
          </div>
          <span className="relative z-10 text-[10px] text-white/60 tracking-widest uppercase">
            POLAR_AURORA_LUMINESCENCE
          </span>
          <div className="relative z-10 space-y-1">
            <h4 className="text-lg font-bold text-white tracking-tight">Ethereal Ribbon Shader</h4>
            <p className="text-xs text-white/70 font-sans">Multi-stage gaussian filtered ambient backdrop.</p>
          </div>
          <span className="relative z-10 text-[10.5px] text-emerald-400/80">Luminance channel: 60fps GPU acceleration</span>
        </div>
      ),
      codeSnippet: `// Aurora.tsx — Polar Luminous Mesh Backdrop
// Install via shadcn: npx shadcn@latest add @react-bits/aurora
import React from 'react';

export const Aurora: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-[#050608] p-6 rounded-2xl border border-white/10">
      <div className="pointer-events-none absolute -inset-[100px] opacity-40 blur-3xl">
        <div className="w-full h-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-600 animate-pulse" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};`
    },

    // --- 34. Iridescence ---
    {
      id: 'iridescence',
      name: 'Iridescence — Specular Oil-Slick Shader',
      category: 'React Bits & Creative',
      description: 'Thin-film optical interference shader creating shifting metallic chromatic color reflections that dynamically react to light angle.',
      icon: Palette,
      shadcnCommand: 'npx shadcn@latest add @react-bits/iridescence',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0a0b0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">THIN_FILM_OPTICAL_INTERFERENCE</span>
          <div
            className="h-28 rounded-xl border border-white/10 flex items-center justify-center p-4 transition-all duration-700 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(52,211,153,0.3), rgba(168,85,247,0.3), rgba(56,189,248,0.3))',
              backdropFilter: 'blur(10px)'
            }}
            onClick={() => ctx.playClick(1000, 0.03, 'sine')}
          >
            <span className="text-xs font-bold text-white/90 bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
              CLICK TO MODULATE INTERFERENCE
            </span>
          </div>
          <span className="text-[10.5px] text-white/40">Multi-band refraction mimicking soap bubble thin-film physics</span>
        </div>
      ),
      codeSnippet: `// Iridescence.tsx — Thin-Film Oil Slick Shader
// Install via shadcn: npx shadcn@latest add @react-bits/iridescence
import React from 'react';

export const Iridescence: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(52,211,153,0.25), rgba(168,85,247,0.25), rgba(56,189,248,0.25))',
        backdropFilter: 'blur(16px)'
      }}
      className="rounded-2xl border border-white/10 p-6"
    >
      {children}
    </div>
  );
};`
    },

    // --- 35. Hyperspeed ---
    {
      id: 'hyperspeed',
      name: 'Hyperspeed — Warp Starfield Vector Streaks',
      category: 'React Bits & Creative',
      description: 'High-velocity 3D perspective starfield tunnel with relativistic light streaking, variable acceleration, and camera roll angle.',
      icon: Orbit,
      shadcnCommand: 'npx shadcn@latest add @react-bits/hyperspeed',
      previewComponent: (
        <div className="relative h-56 rounded-2xl bg-black border border-white/10 max-w-md mx-auto w-full overflow-hidden p-4 font-mono flex flex-col justify-between">
          <div className="flex justify-between text-[10px] text-white/40 uppercase">
            <span>WARP_CORE // MACH 12</span>
            <span className="text-emerald-400 font-bold">RELATIVISTIC</span>
          </div>
          <div className="relative flex-1 flex items-center justify-center">
            {/* SVG Speed Lines */}
            <svg className="w-full h-full absolute inset-0">
              <line x1="50%" y1="50%" x2="10%" y2="10%" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="rgba(52,211,153,0.8)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="15%" y2="90%" stroke="rgba(56,189,248,0.8)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="5%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="95%" y2="50%" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
              <circle cx="50%" cy="50%" r="4" fill="#ffffff" />
            </svg>
            <span className="relative z-10 text-xs font-bold text-white bg-black/80 px-3 py-1 rounded-full border border-white/10">
              HYPERSPACE TUNNEL
            </span>
          </div>
          <span className="text-[10px] text-white/30 text-center">Radial linear projection velocity vector</span>
        </div>
      ),
      codeSnippet: `// Hyperspeed.tsx — 3D Warp Starfield Streaks
// Install via shadcn: npx shadcn@latest add @react-bits/hyperspeed
import React, { useRef, useEffect } from 'react';

export const Hyperspeed: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const stars = Array.from({ length: 150 }, () => ({
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 800,
      z: Math.random() * 800
    }));

    const render = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (const s of stars) {
        s.z -= 4;
        if (s.z <= 0) s.z = 800;
        const k = 200 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;

        ctx.fillStyle = '#34d399';
        ctx.fillRect(px, py, 2, 2);
      }
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} width={400} height={250} className="w-full h-full" />;
};`
    },

    // --- 36. LensCard ---
    {
      id: 'lens-card',
      name: 'LensCard — Optical Loupe Zoom Inspector',
      category: 'React Bits & Creative',
      description: 'Interactive optical magnification loupe that tracks cursor coordinates to display a high-resolution magnified preview of intricate UI details.',
      icon: Eye,
      shadcnCommand: 'npx shadcn@latest add @react-bits/lens-card',
      previewComponent: (
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setSpotlightPos({
              x: Math.round(e.clientX - rect.left),
              y: Math.round(e.clientY - rect.top)
            });
          }}
          className="relative h-56 rounded-2xl bg-[#0c0d12] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-6 font-mono cursor-none"
        >
          <div className="space-y-2 select-none">
            <span className="text-[10px] text-emerald-400 uppercase tracking-widest">PRECISION SPEC // 0.25mm</span>
            <h4 className="text-base font-bold text-white">Apple Watch Ultra Titanium Chassis</h4>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Grade 5 aerospace titanium enclosure with sapphire crystal display and dual-frequency GPS antenna array.
            </p>
          </div>
          {/* Zoom Loupe Circle */}
          <div
            className="pointer-events-none absolute w-20 h-20 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-md shadow-2xl -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-[10px] font-bold text-white"
            style={{ left: ctx.spotlightPos.x, top: ctx.spotlightPos.y }}
          >
            2.5x ZOOM
          </div>
        </div>
      ),
      codeSnippet: `// LensCard.tsx — Loupe Zoom Inspector
// Install via shadcn: npx shadcn@latest add @react-bits/lens-card
import React, { useState } from 'react';

export const LensCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lensPos, setLensPos] = useState({ x: 0, y: 0, visible: false });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setLensPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
      }}
      onMouseLeave={() => setLensPos((prev) => ({ ...prev, visible: false }))}
      className="relative overflow-hidden cursor-none rounded-2xl border border-white/10 p-6"
    >
      {children}
      {lensPos.visible && (
        <div
          style={{ left: lensPos.x, top: lensPos.y }}
          className="pointer-events-none absolute w-24 h-24 rounded-full border border-white bg-white/10 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
};`
    },

    // --- 37. StackCards ---
    {
      id: 'stack-cards',
      name: 'StackCards — Gesture Draggable Stack Deck',
      category: 'React Bits & Creative',
      description: 'Tinder-style gesture swipeable stacked card deck with spring return physics, rotation skewing, and smooth depth layering.',
      icon: Layers,
      shadcnCommand: 'npx shadcn@latest add @react-bits/stack',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0b0c10] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <div className="flex justify-between text-[10px] text-white/50 uppercase tracking-widest">
            <span>STACK_CARD_DECK</span>
            <button
              type="button"
              onClick={() => {
                ctx.playClick(900, 0.02, 'sine');
                ctx.setStackCardsTop((prev) => (prev + 1) % 3);
              }}
              className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              Next Card →
            </button>
          </div>

          <div className="relative h-32 flex items-center justify-center">
            {[0, 1, 2].map((idx) => {
              const offset = (idx - ctx.stackCardsTop + 3) % 3;
              return (
                <motion.div
                  key={idx}
                  animate={{
                    y: offset * 8,
                    scale: 1 - offset * 0.05,
                    zIndex: 3 - offset
                  }}
                  transition={{ type: 'spring', damping: 20, stiffness: 250 }}
                  className={`absolute w-64 p-4 rounded-xl border text-left cursor-pointer ${
                    offset === 0 ? 'bg-[#151720] border-white/20 text-white shadow-xl' : 'bg-[#0f1016] border-white/5 text-white/50'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-emerald-400">ITEM #{idx + 1}</span>
                  <p className="text-xs font-semibold mt-1">Design System Component Archetype</p>
                </motion.div>
              );
            })}
          </div>
          <span className="text-[10.5px] text-white/40">Click "Next Card" to cycle stacked layer cards</span>
        </div>
      ),
      codeSnippet: `// StackCards.tsx — Draggable Stack Deck
// Install via shadcn: npx shadcn@latest add @react-bits/stack
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const StackCards: React.FC<{ items: string[] }> = ({ items }) => {
  const [topIdx, setTopIdx] = useState(0);

  return (
    <div className="relative h-48 flex items-center justify-center font-mono">
      {items.map((item, i) => {
        const offset = (i - topIdx + items.length) % items.length;
        return (
          <motion.div
            key={i}
            animate={{ y: offset * 10, scale: 1 - offset * 0.06, zIndex: items.length - offset }}
            onClick={() => setTopIdx((prev) => (prev + 1) % items.length)}
            className="absolute w-64 p-5 rounded-2xl bg-[#14151c] border border-white/10 text-white cursor-pointer shadow-xl"
          >
            <h4 className="text-sm font-bold">{item}</h4>
          </motion.div>
        );
      })}
    </div>
  );
};`
    },

    // --- 38. FloatingDock ---
    {
      id: 'floating-dock',
      name: 'FloatingDock — Glass Capsule Tool Capsule',
      category: 'React Bits & Creative',
      description: 'Suspended frosted glass pill dock with spring proximity expansion, smooth tooltip hovers, and active app glow indicator.',
      icon: Navigation,
      shadcnCommand: 'npx shadcn@latest add @react-bits/floating-dock',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">SUSPENDED_FROSTED_DOCK</span>
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl">
            {['Finder', 'Terminal', 'Figma', 'Code', 'Settings'].map((tool, idx) => (
              <motion.button
                key={tool}
                type="button"
                whileHover={{ scale: 1.25, y: -4 }}
                onClick={() => {
                  ctx.playClick(900 + idx * 80, 0.02, 'sine');
                  ctx.setFloatingDockHovered(idx);
                }}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {tool[0]}
              </motion.button>
            ))}
          </div>
          <span className="text-[10.5px] text-white/40">Spring scale and translation on pointer hover</span>
        </div>
      ),
      codeSnippet: `// FloatingDock.tsx — Frosted Glass Capsule Dock
// Install via shadcn: npx shadcn@latest add @react-bits/floating-dock
import React from 'react';
import { motion } from 'framer-motion';

export const FloatingDock: React.FC<{ items: { id: string; label: string; icon: React.ReactNode }[] }> = ({
  items
}) => {
  return (
    <div className="inline-flex items-center gap-2 p-2.5 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-xl font-mono">
      {items.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.3, y: -5 }}
          className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white cursor-pointer"
        >
          {item.icon}
        </motion.button>
      ))}
    </div>
  );
};`
    },

    // --- 39. CircularGallery ---
    {
      id: 'circular-gallery',
      name: 'CircularGallery — 3D Cylindrical Showcase Carousel',
      category: 'React Bits & Creative',
      description: '3D cylindrical carousel projection with hardware-accelerated CSS perspective, mouse drag inertia, and card angle inclination.',
      icon: Repeat,
      shadcnCommand: 'npx shadcn@latest add @react-bits/circular-gallery',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">3D_CYLINDER_PROJECTION</span>
          <div className="h-32 flex items-center justify-center gap-2 overflow-hidden py-2">
            {[-25, -10, 0, 10, 25].map((deg, i) => (
              <motion.div
                key={i}
                animate={{ rotateY: deg, scale: 1 - Math.abs(deg) * 0.01 }}
                className={`w-14 h-24 rounded-xl border flex items-center justify-center text-xs font-bold cursor-pointer transition-all ${
                  deg === 0 ? 'bg-white text-black border-white shadow-lg' : 'bg-white/5 border-white/10 text-white/40'
                }`}
                onClick={() => ctx.playClick(900, 0.02, 'sine')}
              >
                {i + 1}
              </motion.div>
            ))}
          </div>
          <span className="text-[10.5px] text-white/40">Hardware-accelerated CSS rotateY projection carousel</span>
        </div>
      ),
      codeSnippet: `// CircularGallery.tsx — 3D Cylindrical Carousel
// Install via shadcn: npx shadcn@latest add @react-bits/circular-gallery
import React from 'react';

export const CircularGallery: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="flex justify-center items-center gap-3 perspective-1000 font-mono">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-20 h-32 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white"
        >
          {item}
        </div>
      ))}
    </div>
  );
};`
    },

    // --- 40. RollingGallery ---
    {
      id: 'rolling-gallery',
      name: 'RollingGallery — Momentum Inertial Cylindrical Strip',
      category: 'React Bits & Creative',
      description: 'Continuous 3D rolling ribbon with momentum physics, kinetic friction damping, and depth-of-field edge fade.',
      icon: Sliders,
      shadcnCommand: 'npx shadcn@latest add @react-bits/rolling-gallery',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono overflow-hidden">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">CONTINUOUS_ROLLING_RIBBON</span>
          <motion.div
            animate={{ x: [-200, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="flex gap-3 whitespace-nowrap"
          >
            {['Tokyo', 'Berlin', 'San Francisco', 'London', 'Kyoto', 'Seoul'].map((city, idx) => (
              <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                {city}
              </span>
            ))}
            {['Tokyo', 'Berlin', 'San Francisco', 'London', 'Kyoto', 'Seoul'].map((city, idx) => (
              <span key={`dup-${idx}`} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white/80">
                {city}
              </span>
            ))}
          </motion.div>
          <span className="text-[10.5px] text-white/40">Continuous loop with linear translation velocity</span>
        </div>
      ),
      codeSnippet: `// RollingGallery.tsx — Continuous Rolling Ribbon
// Install via shadcn: npx shadcn@latest add @react-bits/rolling-gallery
import React from 'react';
import { motion } from 'framer-motion';

export const RollingGallery: React.FC<{ items: string[]; speed?: number }> = ({ items, speed = 10 }) => {
  return (
    <div className="overflow-hidden flex whitespace-nowrap font-mono">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
        className="flex gap-4"
      >
        {items.concat(items).map((it, i) => (
          <div key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white">
            {it}
          </div>
        ))}
      </motion.div>
    </div>
  );
};`
    },

    // --- 41. NoiseOverlay ---
    {
      id: 'noise-overlay',
      name: 'NoiseOverlay — Vintage Analog Film Grain',
      category: 'React Bits & Creative',
      description: 'Subtle monochromatic perlin film noise overlay generating microscopic tactile texture to eliminate digital banding.',
      icon: Terminal,
      shadcnCommand: 'npx shadcn@latest add @react-bits/noise',
      previewComponent: (
        <div className="relative p-6 rounded-2xl bg-[#090a0d] border border-white/10 max-w-md mx-auto space-y-3 text-center w-full font-mono overflow-hidden">
          {/* Subtle noise pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '4px 4px'
            }}
          />
          <span className="relative z-10 text-[10px] text-white/50 uppercase tracking-widest block">ANALOG_TACTILE_GRAIN</span>
          <div className="relative z-10 py-3 text-sm text-white font-bold">
            TEXTURE CHANNEL: PERLIN GRAIN DENSITY // 0.08
          </div>
          <span className="relative z-10 text-[10.5px] text-white/40">Eliminates 8-bit digital banding on OLED dark displays</span>
        </div>
      ),
      codeSnippet: `// NoiseOverlay.tsx — Film Grain Canvas Layer
// Install via shadcn: npx shadcn@latest add @react-bits/noise
import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0)',
        backgroundSize: '4px 4px'
      }}
      className="pointer-events-none absolute inset-0 opacity-20"
    />
  );
};`
    },

    // --- 42. GradientBorder ---
    {
      id: 'gradient-border',
      name: 'GradientBorder — Conical Rotating Sheen Stroke',
      category: 'React Bits & Creative',
      description: 'Continuous conical gradient perimeter stroke with masked inner background, giving card components a luxurious Apple-style liquid edge.',
      icon: Box,
      shadcnCommand: 'npx shadcn@latest add @react-bits/gradient-border',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#08090d] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">CONICAL_ROTATING_BORDER</span>
          <div className="relative p-0.5 rounded-2xl overflow-hidden inline-block w-full max-w-xs">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#34d399,#38bdf8,#818cf8,#34d399)]"
            />
            <div className="relative bg-[#0d0e14] p-5 rounded-2xl space-y-1 text-left">
              <span className="text-[9px] text-emerald-400 uppercase font-bold">PRO SPEC</span>
              <h4 className="text-sm font-semibold text-white">Liquid Perimeter Edge</h4>
              <p className="text-[11px] text-white/50 font-sans">Continuous rotating conical gradient mask.</p>
            </div>
          </div>
        </div>
      ),
      codeSnippet: `// GradientBorder.tsx — Conical Rotating Border
// Install via shadcn: npx shadcn@latest add @react-bits/gradient-border
import React from 'react';
import { motion } from 'framer-motion';

export const GradientBorder: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative p-0.5 rounded-2xl overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,#34d399,#38bdf8,#34d399)]"
      />
      <div className="relative bg-[#0d0e14] rounded-2xl p-5">{children}</div>
    </div>
  );
};`
    },

    // --- 43. TextPressure ---
    {
      id: 'text-pressure',
      name: 'TextPressure — Force Sensitive Variable Typography',
      category: 'React Bits & Creative',
      description: 'Variable font width, weight, and optical size modulating dynamically based on cursor proximity, velocity, and simulated pressure.',
      icon: Type,
      shadcnCommand: 'npx shadcn@latest add @react-bits/text-pressure',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">FORCE_SENSITIVE_VARIABLE_WEIGHT</span>
          <div className="flex justify-center gap-1.5 text-2xl sm:text-3xl font-bold py-3 text-white select-none">
            {'FORCE_PUSH'.split('').map((c, i) => (
              <span
                key={i}
                className="hover:scale-125 hover:font-black hover:text-teal-300 transition-all duration-150 inline-block cursor-pointer"
              >
                {c}
              </span>
            ))}
          </div>
          <span className="text-[10.5px] text-white/40">Hover individual glyphs to test dynamic optical pressure scale</span>
        </div>
      ),
      codeSnippet: `// TextPressure.tsx — Dynamic Variable Type Pressure
// Install via shadcn: npx shadcn@latest add @react-bits/text-pressure
import React from 'react';

export const TextPressure: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="inline-flex gap-1 font-mono font-bold">
      {text.split('').map((char, idx) => (
        <span
          key={idx}
          className="hover:scale-130 hover:font-black hover:text-emerald-400 transition-transform cursor-pointer inline-block"
        >
          {char}
        </span>
      ))}
    </div>
  );
};`
    },

    // --- 44. ScrambleText ---
    {
      id: 'scramble-text',
      name: 'ScrambleText — Cryptographic Keyframe Decryptor',
      category: 'React Bits & Creative',
      description: 'Continuous entropy reduction text cipher that flips random hex and ASCII characters before snapping sequentially into plaintext.',
      icon: Terminal,
      shadcnCommand: 'npx shadcn@latest add @react-bits/scramble-text',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0a0b0f] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">ENTROPY_REDUCTION_CIPHER</span>
          <div className="p-4 rounded-xl bg-black/70 border border-emerald-500/20 text-emerald-400 font-bold text-sm tracking-wider">
            {ctx.scrambleKey % 2 === 0 ? 'SHA256_HASH_VERIFIED // 0xFA9' : 'DECENTRALIZED_CONSENSUS // OK'}
          </div>
          <button
            type="button"
            onClick={() => {
              ctx.playClick(1000, 0.03, 'sine');
              ctx.setScrambleKey((prev) => prev + 1);
            }}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs cursor-pointer"
          >
            Re-run Decrypt Sequence
          </button>
        </div>
      ),
      codeSnippet: `// ScrambleText.tsx — Entropy Text Decryptor
// Install via shadcn: npx shadcn@latest add @react-bits/scramble-text
import React, { useState, useEffect } from 'react';

export const ScrambleText: React.FC<{ targetText: string }> = ({ targetText }) => {
  const [displayText, setDisplayText] = useState(targetText);
  const chars = 'ABCDEF0123456789!@#$%^&*';

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        targetText
          .split('')
          .map((letter, idx) => (idx < iteration ? letter : chars[Math.floor(Math.random() * chars.length)]))
          .join('')
      );
      if (iteration >= targetText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span onClick={scramble} className="font-mono font-bold cursor-pointer">
      {displayText}
    </span>
  );
};`
    },

    // --- 45. GridMotion ---
    {
      id: 'grid-motion',
      name: 'GridMotion — 3D Isometric Scrolling Matrix',
      category: 'React Bits & Creative',
      description: 'Infinite scrolling isometric matrix grid with tilt perspective, hardware matrix transforms, and depth-fading horizon line.',
      icon: Box,
      shadcnCommand: 'npx shadcn@latest add @react-bits/grid-motion',
      previewComponent: (
        <div className="relative h-56 rounded-2xl bg-[#06070a] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-4 font-mono flex flex-col justify-between">
          <div className="flex justify-between text-[10px] text-white/40 uppercase">
            <span>ISOMETRIC_GRID_SCROLLER</span>
            <span className="text-teal-400 font-bold">3D PERSPECTIVE</span>
          </div>
          <div
            className="relative flex-1 flex items-center justify-center"
            style={{ perspective: '400px' }}
          >
            <motion.div
              animate={{ y: [-30, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              style={{ rotateX: '55deg' }}
              className="w-full h-48 grid grid-cols-6 gap-2 border border-white/10 p-2 rounded-xl"
            >
              {Array.from({ length: 18 }).map((_, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-sm" />
              ))}
            </motion.div>
          </div>
          <span className="text-[10px] text-white/30 text-center">Hardware CSS rotateX 55° coordinate matrix</span>
        </div>
      ),
      codeSnippet: `// GridMotion.tsx — 3D Isometric Scrolling Grid
// Install via shadcn: npx shadcn@latest add @react-bits/grid-motion
import React from 'react';
import { motion } from 'framer-motion';

export const GridMotion: React.FC = () => {
  return (
    <div style={{ perspective: '500px' }} className="overflow-hidden h-64 font-mono">
      <motion.div
        animate={{ y: ['-20%', '0%'] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
        style={{ rotateX: '60deg' }}
        className="grid grid-cols-6 gap-2"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-12 bg-white/5 border border-white/10 rounded-md" />
        ))}
      </motion.div>
    </div>
  );
};`
    },

    // --- 46. RibbonCursor ---
    {
      id: 'ribbon-cursor',
      name: 'RibbonCursor — Bezier Elastic Spline Trail',
      category: 'React Bits & Creative',
      description: 'Continuous bezier spline trailing curve connecting past pointer coordinates with tension-based spring curvature.',
      icon: MousePointer,
      shadcnCommand: 'npx shadcn@latest add @react-bits/ribbon-cursor',
      previewComponent: (
        <div
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            ctx.setSpotlightPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top
            });
          }}
          className="relative h-56 rounded-2xl bg-[#090a0f] border border-white/10 max-w-md mx-auto w-full overflow-hidden p-4 font-mono flex items-center justify-center cursor-none"
        >
          {/* Mock Bezier Trail */}
          <svg className="w-full h-full absolute inset-0 pointer-events-none">
            <path
              d={`M 40 200 Q ${ctx.spotlightPos.x} ${ctx.spotlightPos.y} 340 40`}
              stroke="url(#ribbonGrad)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xs text-white/40 pointer-events-none">Move pointer to flex bezier spline ribbon</span>
        </div>
      ),
      codeSnippet: `// RibbonCursor.tsx — Bezier Elastic Spline
// Install via shadcn: npx shadcn@latest add @react-bits/ribbon-cursor
import React, { useState } from 'react';

export const RibbonCursor: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [point, setPoint] = useState({ x: 100, y: 100 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPoint({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="relative overflow-hidden cursor-none"
    >
      <svg className="absolute inset-0 pointer-events-none w-full h-full">
        <path d={\`M 20 200 Q \${point.x} \${point.y} 300 30\`} stroke="#34d399" strokeWidth="3" fill="none" />
      </svg>
      {children}
    </div>
  );
};`
    },

    // --- 47. MarqueeTicker ---
    {
      id: 'marquee-ticker',
      name: 'MarqueeTicker — Low-Latency Telemetry Streamer',
      category: 'React Bits & Creative',
      description: 'Financial/system telemetry ticker with delta micro-badges, status pings, and real-time live value modulation.',
      icon: Activity,
      shadcnCommand: 'npx shadcn@latest add @react-bits/marquee-ticker',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#0a0b0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <div className="flex justify-between text-[10px] text-white/50 uppercase tracking-widest">
            <span>TELEMETRY_TICKER</span>
            <span className="text-emerald-400 font-bold">● LIVE FEED</span>
          </div>
          <div className="flex justify-around items-center bg-black/60 p-3 rounded-xl border border-white/5 text-xs">
            <div>
              <span className="text-white/40 block text-[10px]">LATENCY</span>
              <span className="font-bold text-white">12.4ms</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px]">THROUGHPUT</span>
              <span className="font-bold text-emerald-400">+48.2k/s</span>
            </div>
            <div>
              <span className="text-white/40 block text-[10px]">CPU CORE</span>
              <span className="font-bold text-teal-300">18.4%</span>
            </div>
          </div>
          <span className="text-[10.5px] text-white/40">Continuous polling streaming telemetry stream</span>
        </div>
      ),
      codeSnippet: `// MarqueeTicker.tsx — Telemetry Status Streamer
// Install via shadcn: npx shadcn@latest add @react-bits/marquee-ticker
import React from 'react';

export const MarqueeTicker: React.FC<{ stats: { label: string; value: string; positive?: boolean }[] }> = ({
  stats
}) => {
  return (
    <div className="flex gap-6 p-4 rounded-xl bg-black/70 border border-white/10 font-mono text-xs">
      {stats.map((s, i) => (
        <div key={i}>
          <span className="text-white/40 text-[10px] block">{s.label}</span>
          <span className={s.positive ? 'text-emerald-400 font-bold' : 'text-white font-bold'}>{s.value}</span>
        </div>
      ))}
    </div>
  );
};`
    },

    // --- 48. GlowCard ---
    {
      id: 'glow-card',
      name: 'GlowCard — Specular Ambient Luminance Surface',
      category: 'React Bits & Creative',
      description: 'Multi-tier ambient glow card with dual-concentric border lighting and soft diffuse neon back-glow.',
      icon: Focus,
      shadcnCommand: 'npx shadcn@latest add @react-bits/glow-card',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#08090c] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">AMBIENT_SPECULAR_LUMINANCE</span>
          <div className="relative p-6 rounded-2xl bg-[#0e1017] border border-emerald-500/30 shadow-[0_0_30px_rgba(52,211,153,0.15)] text-left space-y-2">
            <span className="text-[10px] text-emerald-400 font-bold uppercase">HARDWARE GRADE</span>
            <h4 className="text-base font-bold text-white">Machined Aluminum Shell</h4>
            <p className="text-xs text-white/60 font-sans">
              Sub-surface ambient LED reflection cast against matte bead-blasted surface.
            </p>
          </div>
        </div>
      ),
      codeSnippet: `// GlowCard.tsx — Specular Ambient Glow Surface
// Install via shadcn: npx shadcn@latest add @react-bits/glow-card
import React from 'react';

export const GlowCard: React.FC<{ children: React.ReactNode; glowColor?: string }> = ({
  children,
  glowColor = 'rgba(52, 211, 153, 0.15)'
}) => {
  return (
    <div
      style={{ boxShadow: \`0 0 35px \${glowColor}\` }}
      className="p-6 rounded-2xl bg-[#0e1017] border border-emerald-500/30"
    >
      {children}
    </div>
  );
};`
    },

    // --- 49. MagneticButton ---
    {
      id: 'magnetic-button',
      name: 'MagneticButton — Elastic Vector Snap Action',
      category: 'React Bits & Creative',
      description: 'Micro-physics button that latches onto the cursor vector with spring resistance, returning with zero-delay kinetic rebound.',
      icon: MousePointerClick,
      shadcnCommand: 'npx shadcn@latest add @react-bits/magnetic-button',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">VECTOR_SPRING_MAGNETIC_BUTTON</span>
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => ctx.playClick(1050, 0.03, 'triangle')}
            className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs tracking-wider cursor-pointer shadow-lg shadow-white/20"
          >
            INTERACTIVE SNAP BUTTON
          </motion.button>
          <span className="text-[10.5px] text-white/40 block">Cursor vector attraction with spring kinetic rebound</span>
        </div>
      ),
      codeSnippet: `// MagneticButton.tsx — Elastic Vector Snap Button
// Install via shadcn: npx shadcn@latest add @react-bits/magnetic-button
import React from 'react';
import { motion } from 'framer-motion';

export const MagneticButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({
  children,
  onClick
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-6 py-3 rounded-full bg-white text-black font-bold font-mono text-xs cursor-pointer shadow-xl"
    >
      {children}
    </motion.button>
  );
};`
    },

    // --- 50. MorphingDialog ---
    {
      id: 'morphing-dialog',
      name: 'MorphingDialog — Shared Layout Expandable Surface',
      category: 'React Bits & Creative',
      description: 'Fluid layoutId morphing modal dialog that expands smoothly from a card preview into a full-fidelity inspector pane.',
      icon: Maximize2,
      shadcnCommand: 'npx shadcn@latest add @react-bits/morphing-dialog',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">SHARED_LAYOUT_MORPH_DIALOG</span>
          <div
            onClick={() => {
              ctx.playClick(900, 0.03, 'sine');
              ctx.setMorphDialogOpen(!ctx.morphDialogOpen);
            }}
            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left ${
              ctx.morphDialogOpen ? 'bg-emerald-500/10 border-emerald-400' : 'bg-white/5 border-white/10'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-white">
                {ctx.morphDialogOpen ? 'Expanded View Active' : 'Compact Card Specimen'}
              </span>
              <span className="text-[10px] text-emerald-400 font-bold">
                {ctx.morphDialogOpen ? 'COLLAPSE' : 'EXPAND'}
              </span>
            </div>
            {ctx.morphDialogOpen && (
              <p className="text-xs text-white/70 font-sans mt-2 leading-relaxed">
                Full-fidelity inspector drawer morphed smoothly using Framer Motion shared layout transitions without layout popping.
              </p>
            )}
          </div>
        </div>
      ),
      codeSnippet: `// MorphingDialog.tsx — Shared Layout Morphing Modal
// Install via shadcn: npx shadcn@latest add @react-bits/morphing-dialog
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const MorphingDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-mono">
      <motion.div
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-2xl bg-white/10 border border-white/20 cursor-pointer"
      >
        <motion.h4 layout className="text-sm font-bold text-white">Expandable Card Specimen</motion.h4>
        {isOpen && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-white/60 mt-2 font-sans">
            Detailed inspector pane expanded smoothly with shared layout spring physics.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};`
    },

    // --- 51. AnimatedTabs ---
    {
      id: 'animated-tabs',
      name: 'AnimatedTabs — Gliding Underline Segmented Indicator',
      category: 'React Bits & Creative',
      description: 'Framer Motion spring-driven segmented tab controller with sub-pixel sliding glow bar and decoupled content transitions.',
      icon: Sliders,
      shadcnCommand: 'npx shadcn@latest add @react-bits/animated-tabs',
      previewComponent: (
        <div className="p-6 rounded-2xl bg-[#090a0e] border border-white/10 max-w-md mx-auto space-y-4 text-center w-full font-mono">
          <span className="text-[10px] text-white/50 uppercase tracking-widest block">SPRING_GLIDING_TAB_BAR</span>
          <div className="flex border-b border-white/10">
            {['Spec', 'Tokens', 'Architecture'].map((tab) => {
              const isActive = ctx.activeAnimatedTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    ctx.playClick(900, 0.02, 'sine');
                    ctx.setActiveAnimatedTab(tab);
                  }}
                  className={`relative flex-1 py-2 text-xs font-semibold cursor-pointer ${
                    isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <span>{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="animated-tab-indicator"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="text-xs text-white/60 pt-2 font-sans">
            Active tab panel: <span className="text-white font-mono font-bold">{ctx.activeAnimatedTab}</span>
          </div>
        </div>
      ),
      codeSnippet: `// AnimatedTabs.tsx — Gliding Spring Tab Bar
// Install via shadcn: npx shadcn@latest add @react-bits/animated-tabs
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedTabs: React.FC<{ tabs: string[] }> = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="flex border-b border-white/10 font-mono">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={\`relative py-2.5 px-4 text-xs font-semibold \${active === tab ? 'text-white' : 'text-white/40'}\`}
        >
          {tab}
          {active === tab && (
            <motion.div
              layoutId="tab-underline"
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
            />
          )}
        </button>
      ))}
    </div>
  );
};`
    }

  ];
}