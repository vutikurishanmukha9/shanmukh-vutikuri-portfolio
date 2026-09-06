import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Compass, 
  Sliders, 
  ZoomIn, 
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Activity,
  LayoutGrid
} from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  description: string;
  longSummary: string;
  problem: string;
  solution: string;
  impact: string[];
  tags: string[];
  accentColor: string;
  imageSrc: string;
  screens: { title: string; subtitle: string; bgGradient?: string; imageSrc?: string }[];
  metrics: { label: string; value: string; change: string }[];
  specs?: {
    contrast: string;
    baseGrid: string;
    tokensCount: number;
    typography: string;
    motionSpeed: string;
  };
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { playClick } = useSound();
  const onCloseRef = useRef(onClose);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [modalTab, setModalTab] = useState<'flow' | 'tokens'>('flow');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // Reset active screen when project changes
  useEffect(() => {
    setActiveScreenIndex(0);
    setModalTab('flow');
    setIsZoomed(false);
  }, [project?.id]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playClick(600, 0.03, 'sine');
        onCloseRef.current();
      } else if (e.key === 'ArrowRight' && project?.screens?.length) {
        setActiveScreenIndex((prev) => (prev + 1) % project.screens.length);
        playClick(750, 0.02, 'sine');
      } else if (e.key === 'ArrowLeft' && project?.screens?.length) {
        setActiveScreenIndex((prev) => (prev - 1 + project.screens.length) % project.screens.length);
        playClick(750, 0.02, 'sine');
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, playClick, project?.screens?.length]);

  if (!project) return null;

  const handleClose = () => {
    playClick(600, 0.03, 'sine');
    onClose();
  };

  const currentScreen = project.screens?.[activeScreenIndex] || {
    title: project.title,
    subtitle: project.description,
    imageSrc: project.imageSrc
  };

  const currentImage = currentScreen.imageSrc || project.imageSrc;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-y-auto touch-scroll">
          {/* Backdrop Blur with Accessible Key Listener */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="button"
            tabIndex={0}
            onClick={handleClose}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleClose();
            }}
            aria-label="Close modal backdrop"
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl cursor-pointer"
          />

          {/* Modal Card (Bottom-sheet on mobile, centered museum card on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 30 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-[#0b0c10] border border-white/15 rounded-t-3xl sm:rounded-3xl p-4 sm:p-7 md:p-10 pb-safe shadow-2xl z-10 select-none touch-scroll custom-scrollbar"
          >
            {/* Top Specular Ray */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {project.category} // {project.year}
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SHIPPED SPECIMEN
                </span>
              </div>

              {/* Mode Tabs (Workflow vs. Design Tokens) + Close */}
              <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => {
                      playClick(750, 0.02, 'sine');
                      setModalTab('flow');
                    }}
                    className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      modalTab === 'flow' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Flow & Specs
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      playClick(800, 0.02, 'sine');
                      setModalTab('tokens');
                    }}
                    className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      modalTab === 'tokens' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Design Tokens
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close Case Study Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title & Core Summary */}
            <div className="pt-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-[-0.03em] leading-tight">
                  {project.title}
                </h2>
                <span className="text-xs font-mono text-white/50 tracking-wider">ROLE: {project.role}</span>
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl font-sans">
                {project.longSummary}
              </p>
            </div>

            {/* TAB 1: SCREEN WORKFLOW & APPLE STUDIO DISPLAY */}
            {modalTab === 'flow' && (
              <>
                {/* Multi-Screen Navigation Tabs (If project has multiple screens) */}
                {project.screens && project.screens.length > 1 && (
                  <div className="pt-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                        APPLICATION SCREENS // {project.screens.length} VIEWS (USE ARROW KEYS)
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveScreenIndex((prev) => (prev - 1 + project.screens.length) % project.screens.length);
                            playClick(750, 0.02, 'sine');
                          }}
                          className="p-1 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10"
                          title="Previous Screen"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveScreenIndex((prev) => (prev + 1) % project.screens.length);
                            playClick(750, 0.02, 'sine');
                          }}
                          className="p-1 rounded bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10"
                          title="Next Screen"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                      {project.screens.map((screen, sIdx) => {
                        const isScreenActive = sIdx === activeScreenIndex;
                        return (
                          <button
                            key={screen.title}
                            type="button"
                            onClick={() => {
                              playClick(750 + sIdx * 30, 0.02, 'sine');
                              setActiveScreenIndex(sIdx);
                            }}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border whitespace-nowrap flex items-center gap-2 ${
                              isScreenActive
                                ? 'bg-white/15 border-amber-500/60 text-white font-medium shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                                : 'bg-white/[0.02] border-white/5 text-white/50 hover:text-white hover:bg-white/[0.05]'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${isScreenActive ? 'bg-amber-400' : 'bg-white/30'}`} />
                            <span>0{sIdx + 1} // {screen.title.split('—')[0].split('-')[0]}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Apple Studio Display Chrome Box */}
                <div className="my-6 rounded-2xl border border-white/15 overflow-hidden bg-black/95 shadow-2xl">
                  {/* Chrome Bar */}
                  <div className="px-4 py-3 bg-[#121319] border-b border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                      <span className="ml-2 text-white/80 font-mono text-[11px]">
                        {currentScreen.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsZoomed(!isZoomed)}
                        className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] text-white/80 flex items-center gap-1 transition-colors"
                      >
                        {isZoomed ? <ZoomOut className="w-3 h-3" /> : <ZoomIn className="w-3 h-3" />}
                        <span>{isZoomed ? 'Reset View' : 'Zoom 100%'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Active Screen Presentation */}
                  <div className={`relative ${isZoomed ? 'overflow-auto max-h-[70vh]' : 'aspect-[16/10] overflow-hidden'} bg-[#07080a]`}>
                    <img
                      src={currentImage}
                      alt={currentScreen.title}
                      className={`w-full ${isZoomed ? 'min-w-[1200px]' : 'h-full object-cover object-top'}`}
                      onError={(e) => {
                        // Fallback to project main image if screen path fails
                        (e.target as HTMLImageElement).src = project.imageSrc;
                      }}
                    />
                  </div>

                  {/* Screen Subtitle Bar */}
                  <div className="px-4 py-2.5 bg-[#0e0f14] border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                    <p className="text-xs text-white/70 font-sans leading-relaxed">
                      {currentScreen.subtitle}
                    </p>
                    <span className="text-[10px] font-mono text-white/40 shrink-0 ml-4 hidden sm:inline">
                      VIEW {activeScreenIndex + 1} OF {project.screens?.length || 1}
                    </span>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-1"
                    >
                      <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase block">
                        {m.label}
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white font-mono">{m.value}</span>
                        <span className="text-xs font-mono text-emerald-400">{m.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem & Solution Double-Column */}
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 text-xs font-mono tracking-wider uppercase">
                      <Compass className="w-4 h-4" />
                      <span>The Friction & Cognitive Bottleneck</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-mono tracking-wider uppercase">
                      <Layers className="w-4 h-4" />
                      <span>Systemic Interaction Solution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Impact Highlights */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 my-8">
                  <h3 className="text-xs font-mono tracking-widest text-emerald-400 uppercase flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Measurable Business & Ergonomic Impact
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-sans">
                    {project.impact.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* TAB 2: DESIGN SYSTEM REDLINES & TOKEN ARCHITECTURE */}
            {modalTab === 'tokens' && (
              <div className="my-8 space-y-6">
                {/* 4 Architectural Token Specs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      <span>WCAG Contrast & Color Tokens</span>
                    </div>
                    <p className="text-2xl font-bold font-mono text-white">
                      {project.specs?.contrast || '18.4:1 (AAA)'}
                    </p>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      All body, label, and interactive elements pass WCAG 2.2 AAA standards with zero reliance on pure black or oversaturated neons.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase">
                      <LayoutGrid className="w-4 h-4" />
                      <span>Spatial Grid & Baseline Rhythm</span>
                    </div>
                    <p className="text-2xl font-bold font-mono text-white">
                      {project.specs?.baseGrid || '4px / 8px Grid'}
                    </p>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      Rigid baseline grid eliminating layout shifts and ensuring mathematical consistency across mobile, tablet, and desktop.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase">
                      <Activity className="w-4 h-4" />
                      <span>Kinetic Ergonomics & Micro-Motion</span>
                    </div>
                    <p className="text-2xl font-bold font-mono text-white">
                      {project.specs?.motionSpeed || '<16ms Locked 60fps'}
                    </p>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      Physical spring parameters calibrated for responsive tactile affordances, respecting user prefers-reduced-motion settings.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase">
                      <Sliders className="w-4 h-4" />
                      <span>Token Synchronization Pipeline</span>
                    </div>
                    <p className="text-2xl font-bold font-mono text-white">
                      {project.specs?.tokensCount || 48} Semantic Variables
                    </p>
                    <p className="text-xs text-white/60 font-sans leading-relaxed">
                      Figma variables translated directly into TypeScript design tokens, ensuring automated dark mode and zero hardcoded values.
                    </p>
                  </div>
                </div>

                {/* Token Definition Matrix Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-2">
                    <span>SEMANTIC VARIABLE TOKEN</span>
                    <span>COMPILED PRODUCTION VALUE</span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-amber-400">color.surface.canvas</span>
                    <span>#07080a (Deep Inky Zinc)</span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-amber-400">color.accent.brand</span>
                    <span>{project.accentColor} (Primary Brand Accent)</span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-amber-400">font.family.display</span>
                    <span>{project.specs?.typography || 'Display Sans'}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-amber-400">border.radius.container</span>
                    <span>1.5rem (Double-Bezel Hardware Curvature)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tags & Action Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10.5px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-mono text-xs font-medium tracking-wide hover:bg-white/90 active:scale-95 transition-[background-color,transform] cursor-pointer"
              >
                <span>Done Reading</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
