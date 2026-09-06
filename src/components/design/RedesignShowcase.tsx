import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ShieldCheck, Compass, CheckCircle2, TrendingUp } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { useSound } from '@/hooks/useSound';

interface RedesignSpecimen {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  beforeMetric: string;
  afterMetric: string;
  keyShift: string;
}

const REDESIGN_SPECIMENS: RedesignSpecimen[] = [
  {
    id: 'cleanslate-exif',
    badge: 'CASE 01 // PRIVACY SCANNER',
    title: 'Clean-Slate: File Privacy Scanner',
    subtitle: 'Transforming confusing raw data into clear, simple privacy decisions.',
    problem: 'Standard file inspections dump 80+ cryptic raw tags into unformatted tables. Users cannot tell if GPS coordinates, serial numbers, or software keys expose their identity.',
    solution: 'Designed an automated 3-tier privacy rating system. Sensitive GPS and personal data are clearly highlighted in amber badges with one-click cleanup.',
    beforeImage: '/ui/screens/cleanslate-metadata-inspector.png',
    afterImage: '/ui/screens/cleanslate-sanitize-results.png',
    beforeLabel: 'ORIGINAL: RAW CONFUSING DATA',
    afterLabel: 'REDESIGN: CLEAN & EASY TO READ',
    beforeMetric: 'Old workflow: 4.2s per inspect',
    afterMetric: 'Clean export: 0.8s (-81% friction)',
    keyShift: '23 Hidden Fields Cleaned in 0.8s'
  },
  {
    id: 'ai-rumble',
    badge: 'CASE 02 // AI ARENA',
    title: 'AI Royal Rumble: Live Model Arena',
    subtitle: 'Turning dry benchmark leaderboards into an exciting, live side-by-side battle.',
    problem: 'Traditional AI benchmarks show test scores in static, boring tables that give no sense of how AI models actually respond to real human questions.',
    solution: 'Designed a split-screen arena where models answer side-by-side in real time with 60-second timers, spectator reactions, and community voting.',
    beforeImage: '/ui/screens/ai-rumble-landing.png',
    afterImage: '/ui/screens/ai-rumble-jam.png',
    beforeLabel: 'ORIGINAL: STATIC TABLE',
    afterLabel: 'REDESIGN: LIVE INTERACTIVE ARENA',
    beforeMetric: 'User comprehension: 12%',
    afterMetric: 'Spectator engagement: 92%',
    keyShift: '<45ms Live Streaming Speed'
  },
  {
    id: 'cleanslate-text',
    badge: 'CASE 03 // TEXT CLEANER',
    title: 'Clean-Slate: Text Studio Cleaner',
    subtitle: 'Cleaning AI patterns and personal information from documents before sharing.',
    problem: 'Copy-pasting content into public documents frequently leaks internal corporate markers, AI watermarks, and personal email addresses.',
    solution: 'Built an interactive side-by-side editor that removes tracking markers, cleans AI artifacts, and helps text read naturally with real-time word counts.',
    beforeImage: '/ui/screens/cleanslate-text-studio.png',
    afterImage: '/ui/screens/cleanslate-sanitize-results.png',
    beforeLabel: 'ORIGINAL: UNFILTERED TEXT',
    afterLabel: 'REDESIGN: CLEAN SANITIZED TEXT',
    beforeMetric: 'Manual editing: 15 min/doc',
    afterMetric: 'Automated clean: 1.2 sec',
    keyShift: '100% Tracking Markers Removed'
  }
];

export const RedesignShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(REDESIGN_SPECIMENS[0].id);
  const { playClick } = useSound();

  const activeSpecimen = REDESIGN_SPECIMENS.find((s) => s.id === activeId) || REDESIGN_SPECIMENS[0];

  return (
    <section id="redesign-showcase" className="relative scroll-mt-24 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 border-b border-white/5 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-white/80 uppercase">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>CASE STUDIES // 3 BEFORE &amp; AFTER EXAMPLES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.035em] text-[#f7f8f8] font-jakarta">
            Before &amp; After <span className="font-instrument italic font-normal tracking-normal text-white/95">Redesign</span> Studies
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed font-sans">
          Interactive before &amp; after case studies showing direct usability, cognitive clarity, and velocity improvements.
        </p>
      </div>

      {/* Case Switcher Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
        {REDESIGN_SPECIMENS.map((specimen, idx) => {
          const isActive = specimen.id === activeId;
          return (
            <button
              key={specimen.id}
              type="button"
              onClick={() => {
                playClick(800 + idx * 40, 0.02, 'sine');
                setActiveId(specimen.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? 'bg-white text-black border-white font-semibold shadow-sm'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border-white/10'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black' : 'bg-white/40'}`} />
              <span>{specimen.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Double-Bezel Interactive Stage */}
      <div className="group relative rounded-3xl p-2 sm:p-3 bg-white/[0.03] border border-white/10 shadow-2xl">
        <div className="rounded-[calc(1.5rem-0.125rem)] bg-[#0b0c10] border border-white/5 p-5 sm:p-8 space-y-6">
          
          {/* Specimen Header & Key Shift Badge */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-white/5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block">
                {activeSpecimen.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-white font-jakarta">
                {activeSpecimen.title}
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono self-start sm:self-center">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{activeSpecimen.keyShift}</span>
            </div>
          </div>

          {/* Interactive Before / After Comparison Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpecimen.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <BeforeAfterSlider
                beforeImage={activeSpecimen.beforeImage}
                afterImage={activeSpecimen.afterImage}
                beforeLabel={activeSpecimen.beforeLabel}
                afterLabel={activeSpecimen.afterLabel}
                beforeMetric={activeSpecimen.beforeMetric}
                afterMetric={activeSpecimen.afterMetric}
                aspectRatio="aspect-[16/9]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Problem & Solution Deconstruction Cards */}
          <div className="grid md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>The Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                {activeSpecimen.problem}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                {activeSpecimen.solution}
              </p>
            </div>
          </div>

          {/* 3 Foundational UX Principles Row */}
          <div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-white/5 text-[11px] font-mono text-white/50">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Simpler User Flows</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Consistent Spacing &amp; Layout</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>High Contrast &amp; Easy to Read</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
