import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Compass } from 'lucide-react';
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
  screens: { title: string; subtitle: string; bgGradient: string }[];
  metrics: { label: string; value: string; change: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { playClick } = useSound();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playClick(600, 0.03, 'sine');
        onCloseRef.current();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, playClick]);

  if (!project) return null;

  const handleClose = () => {
    playClick(600, 0.03, 'sine');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
            className="fixed inset-0 bg-black/85 backdrop-blur-xl cursor-pointer"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0e12] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl z-10 select-none custom-scrollbar"
          >
            {/* Top Specular Ray */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

            {/* Header Strip */}
            <div className="flex items-center justify-between gap-2.5 pb-4 sm:pb-6 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-white/50 uppercase px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10">
                  {project.category} // {project.year}
                </span>
                <span className="text-[10.5px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SHIPPED PRODUCTION UX
                </span>
              </div>

              <button
                type="button"
                onClick={handleClose}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close Case Study Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Core Summary */}
            <div className="pt-6 space-y-4">
              <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl font-sans">
                {project.longSummary}
              </p>
            </div>

            {/* Full-Bleed High-Res UI Screenshot Frame */}
            <div className="my-8 rounded-2xl border border-white/15 overflow-hidden bg-black/60 shadow-2xl">
              <div className="p-3 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-white/80">{project.title} — High-Fidelity UI</span>
                </div>
                <span>100% PRODUCTION SCALE</span>
              </div>
              <img
                src={project.imageSrc}
                alt={`${project.title} High-Fidelity Production UI`}
                className="w-full h-auto object-cover"
              />
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
                <div className="flex items-center gap-2 text-primary text-xs font-mono tracking-wider uppercase">
                  <Layers className="w-4 h-4" />
                  <span>Systemic Interaction Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-white/[0.02] to-transparent border border-primary/20 space-y-3 my-8">
              <h3 className="text-xs font-mono tracking-widest text-primary uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Measurable Business & Ergonomic Impact
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-sans">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
