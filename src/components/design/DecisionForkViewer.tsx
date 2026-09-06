import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitFork, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Layers, 
  Activity, 
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Terminal
} from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export interface DecisionForkItem {
  id: string;
  project: string;
  decisionTitle: string;
  problemStatement: string;
  optionA: {
    name: string;
    tag: 'REJECTED';
    summary: string;
    failureReason: string;
    metrics: { label: string; value: string; isNegative?: boolean }[];
    tradeoffs: string[];
  };
  optionB: {
    name: string;
    tag: 'SHIPPED';
    summary: string;
    successReason: string;
    metrics: { label: string; value: string; isNegative?: boolean }[];
    tradeoffs: string[];
  };
}

export const DECISION_FORKS: DecisionForkItem[] = [
  {
    id: 'prompt-buddy-flow',
    project: 'Prompt Buddy Platform',
    decisionTitle: 'Form Input Architecture: 12-Field Modal vs. Stepped Conversational Chips',
    problemStatement: 'Early user testing revealed users were paralyzed by a 12-field traditional modal form with 20+ dropdown parameters, resulting in a 58% abandonment rate during onboarding.',
    optionA: {
      name: 'Option A: Comprehensive 12-Field Modal Form',
      tag: 'REJECTED',
      summary: 'A standard SaaS dialog displaying all temperature, top_p, persona, tone, length, and context parameters upfront.',
      failureReason: 'Cognitive overload. Users suffered decision fatigue, unsure what settings would yield high-quality prompt output.',
      metrics: [
        { label: 'Drop-off Rate', value: '58.4%', isNegative: true },
        { label: 'Time-to-First-Prompt', value: '3m 42s', isNegative: true },
        { label: 'User Confidence Score', value: '3.2 / 10', isNegative: true }
      ],
      tradeoffs: [
        'Exposed all low-level LLM knobs, but overwhelmed 80% of non-technical product managers.',
        'Required 6 manual scroll actions on mobile viewports.',
        'Zero live feedback on how settings altered generation quality.'
      ]
    },
    optionB: {
      name: 'Option B: Stepped Conversational Token Chips',
      tag: 'SHIPPED',
      summary: 'A 3-step progressive disclosure interface where parameters are represented as interactive contextual chips with smart presets.',
      successReason: 'Users select intuitive chips ("High Creative", "Strict Technical", "Executive Brief") while advanced knobs remain collapsed.',
      metrics: [
        { label: 'Completion Rate', value: '+81.2%', isNegative: false },
        { label: 'Time-to-First-Prompt', value: '28 Seconds', isNegative: false },
        { label: 'User Satisfaction', value: '9.4 / 10', isNegative: false }
      ],
      tradeoffs: [
        'Required deeper initial state machine engineering to support seamless chip morphing.',
        'Engineers implemented reactive preview caching to render sample outputs instantaneously.'
      ]
    }
  },
  {
    id: 'ai-rumble-voting',
    project: 'AI Royal Rumble',
    decisionTitle: 'Evaluation UX: 30-Column Spreadsheet Table vs. Blind 1v1 Battle Canvas',
    problemStatement: 'Engineers initially wanted an information-dense comparison table showing 30 benchmark metrics across 10 LLMs simultaneously.',
    optionA: {
      name: 'Option A: Dense 30-Column Benchmark Spreadsheet',
      tag: 'REJECTED',
      summary: 'A tabular data grid displaying latency, tokens per second, MMLU benchmarks, and cost matrices for every model simultaneously.',
      failureReason: 'Users scanned numbers without engaging emotionally. Mobile readability was virtually impossible without horizontal scrolling.',
      metrics: [
        { label: 'Average Dwell Time', value: '42 Seconds', isNegative: true },
        { label: 'Mobile Bounce Rate', value: '71.0%', isNegative: true },
        { label: 'Votes Cast / Session', value: '1.2 Votes', isNegative: true }
      ],
      tradeoffs: [
        'Satisfied benchmark researchers, but completely alienated product builders and casual voters.',
        'High rendering latency on low-end devices due to 300+ DOM table cells.'
      ]
    },
    optionB: {
      name: 'Option B: Blind 1v1 Arena Canvas with Instant Reveal',
      tag: 'SHIPPED',
      summary: 'A gamified side-by-side arena where two anonymized models respond to identical prompts, followed by an immediate Elo rating reveal.',
      successReason: 'Eliminated brand bias (e.g. voters favoring OpenAI over Anthropic blindly) and converted evaluation into an engaging, competitive game.',
      metrics: [
        { label: 'Votes Cast / Session', value: '8.6 Votes', isNegative: false },
        { label: 'Session Dwell Time', value: '4m 15s', isNegative: false },
        { label: 'Mobile Retention', value: '64.2%', isNegative: false }
      ],
      tradeoffs: [
        'Required WebSocket synchronization for simultaneous dual-model streaming responses.',
        'Strict animation timing required to prevent revealing model identities prematurely.'
      ]
    }
  },
  {
    id: 'design-tokens-architecture',
    project: 'Cross-App Design System',
    decisionTitle: 'Handoff Architecture: Hardcoded Tailwind Arbitrary CSS vs. Figma JSON Variables',
    problemStatement: 'Multiple developers were copy-pasting arbitrary hex codes (#0f1015, #5e6ad2) and arbitrary paddings (p-[18px]), causing visual drift across 7 shipped applications.',
    optionA: {
      name: 'Option A: Ad-Hoc Arbitrary Tailwind Classes',
      tag: 'REJECTED',
      summary: 'Developers styled components using ad-hoc classes directly in JSX files without centralized design token variables.',
      failureReason: 'Dark mode updates required manual refactoring across 40+ files. Brand color updates caused visual inconsistencies.',
      metrics: [
        { label: 'Theme Refactor Effort', value: '34 Hours', isNegative: true },
        { label: 'Design Discrepancies', value: '48 Issues', isNegative: true },
        { label: 'Accessibility Failures', value: '12 Contrast Errors', isNegative: true }
      ],
      tradeoffs: [
        'Quick for prototyping 1 isolated component, but lethal for multi-app scale.',
        'Zero automated verification between Figma library updates and git repositories.'
      ]
    },
    optionB: {
      name: 'Option B: Bi-Directional Figma Variable Tokens',
      tag: 'SHIPPED',
      summary: 'Exporting Figma Variables as structured JSON tokens automatically mapped to CSS custom variables and Tailwind theme presets.',
      successReason: 'Single source of truth. Any color, spacing, or radius change in Figma propagates to code in seconds with zero visual drift.',
      metrics: [
        { label: 'Theme Refactor Effort', value: '4 Minutes', isNegative: false },
        { label: 'Design Discrepancies', value: '0 Mismatches', isNegative: false },
        { label: 'WCAG AAA Compliance', value: '100% Pass', isNegative: false }
      ],
      tradeoffs: [
        'Required strict upfront discipline naming Figma Variables according to design token standards.',
        'Designers and engineers had to align on strict 4px/8px spatial increments.'
      ]
    }
  }
];

export const DecisionForkViewer: React.FC = () => {
  const { playClick } = useSound();
  const [activeForkIndex, setActiveForkIndex] = useState<number>(0);
  const [selectedBranch, setSelectedBranch] = useState<'shipped' | 'rejected'>('shipped');

  const currentFork = DECISION_FORKS[activeForkIndex];

  const handleSelectFork = (idx: number) => {
    playClick(800, 0.02, 'sine');
    setActiveForkIndex(idx);
    setSelectedBranch('shipped');
  };

  const handleToggleBranch = (branch: 'shipped' | 'rejected') => {
    playClick(branch === 'shipped' ? 900 : 700, 0.02, 'triangle');
    setSelectedBranch(branch);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0a0b10] p-5 sm:p-7 space-y-6 select-none shadow-2xl">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
            <span className="text-[10.5px] font-mono tracking-widest text-purple-400 uppercase font-semibold">
              STRATEGIC DESIGN DECISION AUDIT // A/B FORKS
            </span>
          </div>
          <h3 className="font-jakarta text-xl sm:text-2xl font-bold tracking-tight text-white">
            Decision Trees &amp; Rejected Variant Studies
          </h3>
          <p className="text-xs font-sans text-white/60 leading-relaxed max-w-2xl">
            Great product designers are judged by the quality of decisions that led to the final screen. Explore real trade-off audits comparing rejected options with shipped solutions.
          </p>
        </div>

        {/* Shipped vs. Rejected Branch Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10 text-xs font-mono shrink-0">
          <button
            type="button"
            onClick={() => handleToggleBranch('shipped')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedBranch === 'shipped'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.2)] font-semibold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>✓ Shipped Innovation</span>
          </button>
          <button
            type="button"
            onClick={() => handleToggleBranch('rejected')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedBranch === 'rejected'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_12px_rgba(244,63,94,0.2)] font-semibold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            <XCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>✕ Rejected Variant</span>
          </button>
        </div>
      </div>

      {/* Case Scenario Tabs (3 Projects) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs font-mono">
        {DECISION_FORKS.map((fork, idx) => (
          <button
            key={fork.id}
            type="button"
            onClick={() => handleSelectFork(idx)}
            className={`px-3.5 py-2 rounded-xl border transition-all cursor-pointer shrink-0 text-left flex items-center gap-2 ${
              activeForkIndex === idx
                ? 'bg-white text-black border-white font-semibold shadow-md'
                : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border-white/10'
            }`}
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>{fork.project}</span>
          </button>
        ))}
      </div>

      {/* Decision Detail Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentFork.id}-${selectedBranch}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Problem Statement Box */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              THE DESIGN CHALLENGE &amp; FRICTION
            </span>
            <h4 className="font-jakarta text-base font-bold text-white tracking-tight">
              {currentFork.decisionTitle}
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed pt-1">
              {currentFork.problemStatement}
            </p>
          </div>

          {/* Active Branch Display */}
          {selectedBranch === 'shipped' ? (
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/15 border border-emerald-500/30 space-y-4 ring-1 ring-emerald-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  <span className="font-jakarta font-bold text-base text-white">
                    {currentFork.optionB.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider self-start sm:self-center">
                  SHIPPED TO PRODUCTION
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                {currentFork.optionB.summary}
              </p>

              <div className="p-3.5 rounded-xl bg-black/50 border border-emerald-500/20 space-y-1">
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block font-semibold">
                  WHY THIS WON // CORE RATIONALE
                </span>
                <p className="font-sans text-xs text-white/75 leading-relaxed">
                  {currentFork.optionB.successReason}
                </p>
              </div>

              {/* Shipped Metrics Grid */}
              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                {currentFork.optionB.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/60 border border-emerald-500/20 space-y-0.5">
                    <span className="text-[10px] font-mono text-white/50 uppercase block">
                      {m.label}
                    </span>
                    <span className="text-lg font-bold font-jakarta text-emerald-400 tracking-tight tabular-nums block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trade-offs Row */}
              <div className="pt-2 border-t border-emerald-500/20 space-y-1.5">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                  TECHNICAL TRADE-OFFS &amp; ENGINEERING INVESTMENT:
                </span>
                {currentFork.optionB.tradeoffs.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2 font-mono text-xs text-white/70">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-5 sm:p-6 rounded-2xl bg-rose-950/15 border border-rose-500/30 space-y-4 ring-1 ring-rose-500/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-rose-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
                  <span className="font-jakarta font-bold text-base text-white">
                    {currentFork.optionA.name}
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-semibold uppercase tracking-wider self-start sm:self-center">
                  REJECTED IN TESTING
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                {currentFork.optionA.summary}
              </p>

              <div className="p-3.5 rounded-xl bg-black/50 border border-rose-500/20 space-y-1">
                <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest block font-semibold">
                  WHY THIS FAILED // USABILITY BOTTLENECK
                </span>
                <p className="font-sans text-xs text-white/75 leading-relaxed">
                  {currentFork.optionA.failureReason}
                </p>
              </div>

              {/* Rejected Metrics Grid */}
              <div className="grid sm:grid-cols-3 gap-3 pt-1">
                {currentFork.optionA.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-black/60 border border-rose-500/20 space-y-0.5">
                    <span className="text-[10px] font-mono text-white/50 uppercase block">
                      {m.label}
                    </span>
                    <span className="text-lg font-bold font-jakarta text-rose-400 tracking-tight tabular-nums block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trade-offs Row */}
              <div className="pt-2 border-t border-rose-500/20 space-y-1.5">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                  IDENTIFIED DEFECTS &amp; USER FRICTION:
                </span>
                {currentFork.optionA.tradeoffs.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2 font-mono text-xs text-white/70">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
