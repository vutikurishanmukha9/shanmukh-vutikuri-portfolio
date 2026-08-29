import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectData } from './ProjectModal';
import { useSound } from '@/hooks/useSound';

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  onSelect: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const { playClick } = useSound();

  const handleCardClick = () => {
    playClick(800, 0.03, 'sine');
    onSelect(project);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl p-1.5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-[border-color,background-color] duration-500 overflow-hidden select-none"
    >
      {/* Outer Specular Top Ray */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Inner Core Container */}
      <div className="relative rounded-[calc(1rem-0.125rem)] bg-[#0d0e12] border border-white/5 p-4 sm:p-6 flex flex-col justify-between h-full overflow-hidden">
        
        {/* Subtle Ambient Radial Backlight on Hover */}
        <div 
          className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{ background: project.accentColor }}
        />

        {/* Top Header Tag Strip */}
        <div className="relative z-10 flex items-center justify-between gap-2 pb-3.5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-[9.5px] font-mono tracking-widest text-white/50 uppercase px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
              0{index + 1} // {project.category}
            </span>
            <span className="text-[10px] font-mono text-white/40">{project.year}</span>
          </div>

          <div className="flex items-center gap-1 text-[10.5px] font-mono text-emerald-400">
            <CheckCircle2 className="w-3 h-3" />
            <span>{project.metrics[0]?.value}</span>
          </div>
        </div>

        {/* Authentic UI Screenshot Showcase Frame */}
        <div 
          role="button"
          tabIndex={0}
          onClick={handleCardClick}
          onKeyDown={handleKeyDown}
          aria-label={`Open case study for ${project.title}`}
          className="relative z-10 my-3.5 sm:my-4 rounded-lg border border-white/10 overflow-hidden bg-[#07080a] group-hover:border-white/30 transition-[border-color,transform] duration-500 cursor-pointer aspect-[16/10]"
        >
          {/* Real Screenshot Preview */}
          <img
            src={project.imageSrc}
            alt={`${project.title} UI Preview`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Hover Dark Glass Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
          
          {/* Quick Hover Inspect Pill */}
          <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[9.5px] font-mono text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Inspect UI</span>
            <ArrowUpRight className="w-3 h-3 text-primary" />
          </div>
        </div>

        {/* Title, Narrative & Actions */}
        <div className="relative z-10 space-y-3">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-serif-display font-medium text-white tracking-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-xs text-white/60 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tags & Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-white/5">
            <div className="flex flex-wrap gap-1 w-full sm:max-w-[70%]">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[9.5px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={handleCardClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-1.5 sm:py-1 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-mono text-[10.5px] tracking-wide transition-[background-color,color,transform] duration-300 cursor-pointer active:scale-95 group/btn"
              aria-label={`View Story for ${project.title}`}
            >
              <span>View Case</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
