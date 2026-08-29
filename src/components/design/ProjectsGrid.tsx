import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal, ProjectData } from './ProjectModal';
import { RANKED_PRODUCTS } from './projectsData';
import { Layers } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export const ProjectsGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { playClick } = useSound();

  const filteredProjects = RANKED_PRODUCTS.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return project.tags.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('arena') || t.toLowerCase().includes('prompt'));
    if (activeFilter === 'product') return project.tags.some(t => t.toLowerCase().includes('privacy') || t.toLowerCase().includes('file') || t.toLowerCase().includes('saas') || t.toLowerCase().includes('civic'));
    if (activeFilter === 'editorial') return project.tags.some(t => t.toLowerCase().includes('editorial') || t.toLowerCase().includes('scientific') || t.toLowerCase().includes('3d') || t.toLowerCase().includes('sanctuary'));
    return true;
  });

  const handleFilterChange = (filterKey: string) => {
    playClick(750, 0.03, 'sine');
    setActiveFilter(filterKey);
  };

  return (
    <section id="works" className="relative py-3 sm:py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-3 sm:mb-4 border-b border-white/5 pb-3">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-primary uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>CURATED PRODUCT PORTFOLIO // 7 PRODUCTION APPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-medium text-white tracking-tight">
            Curated Product Works
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl sm:rounded-full bg-white/5 border border-white/10 overflow-x-auto no-scrollbar max-w-full">
          {[
            { key: 'all', label: 'All Works (7)' },
            { key: 'ai', label: 'AI & Arenas' },
            { key: 'product', label: 'Product & Civic' },
            { key: 'editorial', label: 'Editorial & 3D' },
          ].map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => handleFilterChange(f.key)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer shrink-0 ${
                activeFilter === f.key
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Work Grid with Proportional Gaps */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Interactive Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
