import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Maximize2, Compass, Layers, Activity, Monitor, Tablet, Smartphone } from 'lucide-react';
import { ProjectData } from './ProjectModal';
import { useSound } from '@/hooks/useSound';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onSelect: (project: ProjectData) => void;
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const { playClick } = useSound();
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const isFlagship = index === 0 || index === 1;

  const handleOpenModal = () => {
    playClick(800, 0.03, 'sine');
    onSelect(project);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpenModal();
    }
  };

  const handleViewportChange = (e: React.MouseEvent, mode: ViewportMode) => {
    e.stopPropagation();
    playClick(900, 0.02, 'triangle');
    setViewport(mode);
  };

  const getViewportAspect = () => {
    switch (viewport) {
      case 'tablet':
        return 'aspect-[4/3] max-w-[85%] mx-auto';
      case 'mobile':
        return 'aspect-[9/16] max-h-[380px] max-w-[220px] mx-auto';
      default:
        return 'aspect-[16/10] w-full';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-[border-color,background-color] duration-500 select-none ${
        isFlagship ? 'md:col-span-2' : ''
      }`}
    >
      {/* Outer Top Specular Ray */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Inner Concentric Double-Bezel Container */}
      <div className="relative rounded-[calc(1.5rem-0.125rem)] bg-[#0c0d11] border border-white/5 p-5 sm:p-8 flex flex-col justify-between h-full overflow-hidden">
        
        {/* Ambient Radial Underglow on Hover */}
        <div 
          className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
          style={{ background: project.accentColor }}
        />

        {/* Top Header Strip */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10">
              0{index + 1} // {project.category}
            </span>
            <span className="text-[10.5px] font-mono text-white/40">{project.year}</span>
            {isFlagship && (
              <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                FLAGSHIP SPECIMEN
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-emerald-400 hidden sm:inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{project.role}</span>
            </span>

            <button
              type="button"
              onClick={handleOpenModal}
              aria-label={`Open case study for ${project.title}`}
              className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project Title & Narrative */}
        <div className="relative z-10 my-5 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-jakarta text-white tracking-[-0.025em] group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-white/40 tracking-wider">
              CLIENT: {project.client}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Apple Display Studio Frame with Interactive Viewport Mode Switcher */}
        <div 
          role="button"
          tabIndex={0}
          onClick={handleOpenModal}
          onKeyDown={handleKeyDown}
          aria-label={`Inspect high-resolution design screen for ${project.title}`}
          className="relative z-10 my-2 rounded-2xl border border-white/15 overflow-hidden bg-black/95 shadow-2xl group/display cursor-pointer"
        >
          {/* macOS / Apple Studio Display Chrome Bar with Viewport Controls */}
          <div className="px-4 py-2.5 bg-[#121319] border-b border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
            {/* Window Traffic Lights & Title */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
              <span className="ml-2 text-white/70 text-[11px] font-mono tracking-tight hidden sm:inline">
                {project.title} &bull; Retina Comp
              </span>
            </div>

            {/* Interactive Viewport Mode Switcher (Desktop / Tablet / Mobile) */}
            <div className="flex items-center gap-1 bg-black/50 p-0.5 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={(e) => handleViewportChange(e, 'desktop')}
                title="Desktop View (16:10)"
                className={`p-1 rounded transition-colors ${
                  viewport === 'desktop' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => handleViewportChange(e, 'tablet')}
                title="Tablet View (4:3)"
                className={`p-1 rounded transition-colors ${
                  viewport === 'tablet' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => handleViewportChange(e, 'mobile')}
                title="Mobile View (9:16)"
                className={`p-1 rounded transition-colors ${
                  viewport === 'mobile' ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Click to Inspect Pill */}
            <div className="flex items-center gap-2">
              <div className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-white/80 flex items-center gap-1 group-hover/display:bg-amber-500 group-hover/display:text-black transition-colors">
                <span>Inspect Spec</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Responsive Canvas with Image Asset */}
          <div className="p-3 sm:p-4 bg-[#07080a] flex items-center justify-center min-h-[220px]">
            <div className={`relative overflow-hidden rounded-xl border border-white/10 transition-all duration-500 ${getViewportAspect()}`}>
              <img
                src={project.imageSrc}
                alt={`${project.title} High-Fidelity Production Designer Screen`}
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/display:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover/display:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 3 Design Annotation Breakdown Cards for Flagships */}
        {isFlagship && (
          <div className="relative z-10 grid sm:grid-cols-3 gap-3 my-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-rose-400 uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>Design Intent</span>
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-amber-400 uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>System Architecture</span>
              </div>
              <p className="text-xs text-white/75 font-sans leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-emerald-400 uppercase">
                <Activity className="w-3.5 h-3.5" />
                <span>Measurable Impact</span>
              </div>
              <p className="text-xs text-white/90 font-mono font-medium leading-relaxed">
                {project.impact[0] || '100% Production Grade Architecture'}
              </p>
            </div>
          </div>
        )}

        {/* Key Metrics Strip */}
        <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-3 my-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-0.5"
            >
              <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-white/40 uppercase block">
                {m.label}
              </span>
              <div className="flex items-baseline gap-1 sm:gap-2">
                <span className="text-sm sm:text-lg font-bold text-white font-mono tabular-nums">{m.value}</span>
                <span className="text-[10px] font-mono text-emerald-400 truncate">{m.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tags & Case Study CTA */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-white/60 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={handleOpenModal}
            className="group/btn inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs transition-all duration-300 cursor-pointer"
          >
            <span>Inspect Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </motion.div>
  );
};
