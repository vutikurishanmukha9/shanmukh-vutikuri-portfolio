import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Ruler, 
  Palette, 
  Type, 
  Activity, 
  Command,
  Copy,
  Check,
  Code2
} from 'lucide-react';
import { useSound } from '@/hooks/useSound';

// ==========================================
// WORKSTATION 01: COMPONENT BLUEPRINT SPECIMENS
// ==========================================
interface BlueprintSpecimen {
  id: string;
  name: string;
  category: string;
  padding: string;
  radius: string;
  border: string;
  shadow: string;
  cssTokens: string[];
}

const BLUEPRINT_COMPONENTS: BlueprintSpecimen[] = [
  {
    id: 'telemetry-card',
    name: '01 // High-Density Telemetry Node',
    category: 'FinTech & AI Ledger',
    padding: 'pt: 16px | pb: 16px | px: 20px',
    radius: '12px (rounded-xl)',
    border: '0.5px solid var(--border-subtle)',
    shadow: '0 4px 20px rgba(0, 0, 0, 0.45)',
    cssTokens: [
      'background: var(--surface-raised)',
      'border-color: var(--border-hairline)',
      'color: var(--ink-primary)',
      'font-family: var(--font-mono)'
    ]
  },
  {
    id: 'command-input',
    name: '02 // ⌘K Command Palette Input',
    category: 'Keyboard Navigation & Action Hub',
    padding: 'pt: 12px | pb: 12px | px: 16px',
    radius: '10px (rounded-lg)',
    border: '1px solid var(--accent-focus)',
    shadow: '0 0 0 2px var(--accent-ring)',
    cssTokens: [
      'background: var(--surface-overlay)',
      'outline: 2px solid var(--accent-primary)',
      'color: var(--ink-contrast)',
      'backdrop-filter: blur(16px)'
    ]
  },
  {
    id: 'segmented-pill',
    name: '03 // Haptic Segmented Control',
    category: 'State Machine Switcher',
    padding: 'p: 4px | gap: 2px',
    radius: '9999px (rounded-full)',
    border: '0.5px solid var(--border-hairline)',
    shadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.3)',
    cssTokens: [
      'background: var(--surface-inset)',
      'transition: layout 200ms cubic-bezier(0.16, 1, 0.3, 1)',
      'indicator-bg: var(--ink-inverse)'
    ]
  }
];

// ==========================================
// WORKSTATION 02: 3-TIER SEMANTIC TOKENS
// ==========================================
const SEMANTIC_THEMES = [
  {
    id: 'inky-dark',
    name: 'Inky Dark Tech',
    surfaceGround: '#07080a',
    surfaceRaised: '#0d0e12',
    surfaceBorder: 'rgba(255, 255, 255, 0.12)',
    accent: '#6366f1',
    accentName: 'Indigo 500',
    contrastRatio: '18.8:1',
    wcag: 'AAA PASSED',
    globalToken: 'color.palette.indigo.500',
    semanticToken: 'color.accent.brand',
    componentToken: 'button.primary.background'
  },
  {
    id: 'terracotta',
    name: 'Terracotta Editorial',
    surfaceGround: '#0f0c0b',
    surfaceRaised: '#181412',
    surfaceBorder: 'rgba(249, 115, 22, 0.22)',
    accent: '#ea580c',
    accentName: 'Orange 600',
    contrastRatio: '16.4:1',
    wcag: 'AAA PASSED',
    globalToken: 'color.palette.orange.600',
    semanticToken: 'color.accent.forensic',
    componentToken: 'scanner.alert.indicator'
  },
  {
    id: 'quantum-emerald',
    name: 'Quantum Emerald',
    surfaceGround: '#050c09',
    surfaceRaised: '#0a1410',
    surfaceBorder: 'rgba(16, 185, 129, 0.22)',
    accent: '#10b981',
    accentName: 'Emerald 500',
    contrastRatio: '17.2:1',
    wcag: 'AAA PASSED',
    globalToken: 'color.palette.emerald.500',
    semanticToken: 'color.accent.scientific',
    componentToken: 'orbital.mesh.accent'
  },
  {
    id: 'warm-amber',
    name: 'Warm Amber Sanctuary',
    surfaceGround: '#0f0d08',
    surfaceRaised: '#17130c',
    surfaceBorder: 'rgba(245, 158, 11, 0.22)',
    accent: '#d97706',
    accentName: 'Amber 600',
    contrastRatio: '15.9:1',
    wcag: 'AAA PASSED',
    globalToken: 'color.palette.amber.600',
    semanticToken: 'color.accent.editorial',
    componentToken: 'letter.heading.highlight'
  }
];

// ==========================================
// WORKSTATION 03: MODULAR TYPOGRAPHY RATIOS
// ==========================================
const SCALE_RATIOS = [
  { id: 'major-third', name: '1.250 Major Third', desc: 'Harmonic balanced scale for SaaS dashboards & data products' },
  { id: 'perfect-fourth', name: '1.333 Perfect Fourth', desc: 'High-contrast dramatic hierarchy for editorial hero stages' },
  { id: 'minor-third', name: '1.200 Minor Third', desc: 'Compact high-density scale for multi-column analytics' },
];

export const CraftLab: React.FC = () => {
  const { playClick } = useSound();

  // Workstation 01 State: Blueprint & Interactive States
  const [selectedBlueprint, setSelectedBlueprint] = useState<BlueprintSpecimen>(BLUEPRINT_COMPONENTS[0]);
  const [blueprintMode, setBlueprintMode] = useState<'preview' | 'blueprint' | 'code'>('blueprint');
  const [componentState, setComponentState] = useState<'default' | 'hover' | 'loading' | 'error'>('default');

  // Workstation 02 State: Tokens & Exporter
  const [selectedTheme, setSelectedTheme] = useState(SEMANTIC_THEMES[0]);
  const [copiedTokenFormat, setCopiedTokenFormat] = useState<string | null>(null);

  // Workstation 03 State: Typography
  const [selectedRatio, setSelectedRatio] = useState(SCALE_RATIOS[0]);
  const [activeTypeStep, setActiveTypeStep] = useState<number>(0);

  // Workstation 04 State: Spring Physics
  const [stiffness, setStiffness] = useState<number>(450);
  const [damping, setDamping] = useState<number>(32);
  const [mass, setMass] = useState<number>(0.8);
  const [motionTrigger, setMotionTrigger] = useState<number>(0);

  // Dynamic Typography Scale Generator based on selected ratio
  const getScaleSteps = () => {
    const ratioMultiplier = selectedRatio.id === 'perfect-fourth' ? 1.333 : selectedRatio.id === 'minor-third' ? 1.200 : 1.250;
    const base = 14;
    const s5 = Math.round(base * Math.pow(ratioMultiplier, 4));
    const s4 = Math.round(base * Math.pow(ratioMultiplier, 3));
    const s3 = Math.round(base * Math.pow(ratioMultiplier, 2));
    const s2 = Math.round(base * Math.pow(ratioMultiplier, 1));
    const s1 = base;
    const s0 = 10.5;

    return [
      { name: 'Display Headline', size: `${s5}px / ${(s5 / 16).toFixed(2)}rem`, font: 'Display Sans 700', tracking: '-0.03em', lh: '1.10' },
      { name: 'Section Header', size: `${s4}px / ${(s4 / 16).toFixed(2)}rem`, font: 'Display Sans 600', tracking: '-0.02em', lh: '1.20' },
      { name: 'Subsection Title', size: `${s3}px / ${(s3 / 16).toFixed(2)}rem`, font: 'Sans UI 600', tracking: '-0.01em', lh: '1.30' },
      { name: 'Component Title', size: `${s2}px / ${(s2 / 16).toFixed(2)}rem`, font: 'Sans UI 500', tracking: '-0.005em', lh: '1.40' },
      { name: 'Body Narrative', size: `${s1}px / ${(s1 / 16).toFixed(2)}rem`, font: 'Sans UI 400', tracking: '0.00em', lh: '1.60' },
      { name: 'Telemetry Label', size: `${s0}px / 0.65rem`, font: 'Geist Mono 500', tracking: '+0.08em', lh: '1.40' }
    ];
  };

  const scaleSteps = getScaleSteps();

  const handleTriggerMotion = () => {
    playClick(850 + stiffness * 0.2, 0.04, 'triangle');
    setMotionTrigger((prev) => prev + 1);
  };

  const handleCopyTokens = (format: 'css' | 'tailwind' | 'json') => {
    let code = '';
    if (format === 'css') {
      code = `:root {\n  --surface-ground: ${selectedTheme.surfaceGround};\n  --surface-raised: ${selectedTheme.surfaceRaised};\n  --color-accent: ${selectedTheme.accent};\n  --border-surface: ${selectedTheme.surfaceBorder};\n  --wcag-contrast: "${selectedTheme.contrastRatio}";\n}`;
    } else if (format === 'tailwind') {
      code = `// tailwind.config.ts\nexport default {\n  theme: {\n    extend: {\n      colors: {\n        canvas: '${selectedTheme.surfaceGround}',\n        raised: '${selectedTheme.surfaceRaised}',\n        accent: '${selectedTheme.accent}',\n      }\n    }\n  }\n};`;
    } else {
      code = JSON.stringify({
        name: selectedTheme.name,
        contrast: selectedTheme.contrastRatio,
        tokens: {
          global: selectedTheme.globalToken,
          semantic: selectedTheme.semanticToken,
          component: selectedTheme.componentToken,
          hex: selectedTheme.accent
        }
      }, null, 2);
    }
    navigator.clipboard.writeText(code);
    playClick(920, 0.03, 'sine');
    setCopiedTokenFormat(format);
    setTimeout(() => setCopiedTokenFormat(null), 2000);
  };

  return (
    <section id="craft-lab" className="relative scroll-mt-24 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 border-b border-white/5 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-primary uppercase">
            <Ruler className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOOLS // COLORS &amp; SPACING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.035em] text-[#f7f8f8] font-jakarta">
            Design Tokens &amp; <span className="font-instrument italic font-normal tracking-normal text-white/95">Visual</span> Systems
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed font-sans">
          Interactive studio for testing design tokens, typography scales, semantic themes, and physical spring animations.
        </p>
      </div>

      {/* 2x2 Bento Architectural Grid */}
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        
        {/* ========================================================================= */}
        {/* WORKSTATION 01: LIVING COMPONENT ANATOMY & REDLINE BLUEPRINT STUDIO */}
        {/* ========================================================================= */}
        <div className="group relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-[border-color,background-color] duration-500 overflow-hidden flex flex-col justify-between">
          <div className="relative rounded-[calc(1.5rem-0.125rem)] bg-[#0d0e12] border border-white/5 p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
            
            {/* Header & Mode Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Ruler className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                  TOOL 01 // COMPONENT SPACING & SPECS
                </span>
              </div>

              <div className="flex p-0.5 rounded-lg bg-white/5 border border-white/10">
                {(['preview', 'blueprint', 'code'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => {
                      playClick(750, 0.02, 'sine');
                      setBlueprintMode(mode);
                    }}
                    className={`px-2 py-0.5 rounded text-[9.5px] font-mono uppercase transition-colors cursor-pointer ${
                      blueprintMode === mode
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Component Selector Pills */}
            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
              {BLUEPRINT_COMPONENTS.map((comp) => (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => {
                    playClick(700, 0.02, 'sine');
                    setSelectedBlueprint(comp);
                  }}
                  className={`p-1.5 rounded-lg text-[10px] font-mono transition-colors text-center cursor-pointer truncate ${
                    selectedBlueprint.id === comp.id
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {comp.name.split('//')[1]?.trim() || comp.name}
                </button>
              ))}
            </div>

            {/* State Machine Switcher (Default / Hover / Loading / Error) */}
            <div className="flex items-center justify-between gap-2 text-[10px] font-mono text-white/50">
              <span>TEST STATE:</span>
              <div className="flex items-center gap-1">
                {(['default', 'hover', 'loading', 'error'] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => {
                      playClick(800, 0.02, 'sine');
                      setComponentState(st);
                    }}
                    className={`px-2 py-0.5 rounded uppercase cursor-pointer transition-colors ${
                      componentState === st ? 'bg-white/20 text-white font-semibold' : 'hover:text-white text-white/40'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Stage Canvas */}
            <div className="relative p-5 rounded-xl bg-[#07080a] border border-white/10 flex flex-col items-center justify-center min-h-[185px] overflow-hidden">
              
              {/* If Blueprint Mode: Geometric Measurement Matrix */}
              {blueprintMode === 'blueprint' && (
                <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:12px_12px]" />
              )}

              {/* RENDER VIEW / BLUEPRINT VIEW */}
              {blueprintMode !== 'code' ? (
                <div className={`relative w-full max-w-sm rounded-xl p-4 transition-all duration-300 ${
                  blueprintMode === 'blueprint'
                    ? 'border border-dashed border-primary bg-primary/10 shadow-[0_0_24px_rgba(99,102,241,0.2)]'
                    : componentState === 'error'
                    ? 'border border-rose-500/50 bg-rose-500/10'
                    : componentState === 'hover'
                    ? 'border border-white/30 bg-white/10 shadow-lg'
                    : 'border border-white/15 bg-white/5 shadow-md'
                }`}>
                  {blueprintMode === 'blueprint' && (
                    <div className="absolute -top-3 left-3 px-2 py-0.5 rounded bg-primary text-[8.5px] font-mono text-white tracking-widest uppercase shadow-sm">
                      {selectedBlueprint.padding}
                    </div>
                  )}

                  {componentState === 'loading' ? (
                    <div className="space-y-2.5 animate-pulse">
                      <div className="h-3 w-3/4 bg-white/20 rounded" />
                      <div className="h-2.5 w-full bg-white/10 rounded" />
                      <div className="h-2.5 w-1/2 bg-white/10 rounded" />
                    </div>
                  ) : (
                    <>
                      {selectedBlueprint.id === 'telemetry-card' && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                            <span className="text-xs font-mono text-white font-semibold">Real-Time Ingestion Node</span>
                            <span className={`text-[10px] font-mono ${componentState === 'error' ? 'text-rose-400' : 'text-emerald-400'}`}>
                              {componentState === 'error' ? 'ALERT: ANOMALY DETECTED' : '99.98% HEALTH'}
                            </span>
                          </div>
                          <p className="text-[11.5px] text-white/70 leading-relaxed font-sans">
                            Polars multi-threaded ledger running sub-pixel baseline alignment and automated memory eviction.
                          </p>
                        </div>
                      )}

                      {selectedBlueprint.id === 'command-input' && (
                        <div className={`flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border ${
                          componentState === 'error' ? 'border-rose-500 text-rose-400' : 'border-white/10 text-white/80'
                        }`}>
                          <div className="flex items-center gap-2 text-xs font-mono">
                            <Command className="w-3.5 h-3.5 text-primary" />
                            <span>Search design tokens (e.g. --color-zinc)...</span>
                          </div>
                          <span className="text-[9px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/50">ESC</span>
                        </div>
                      )}

                      {selectedBlueprint.id === 'segmented-pill' && (
                        <div className="p-1 rounded-full bg-white/5 border border-white/10 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-white text-black text-xs font-mono font-semibold">PREVIEW</span>
                          <span className="px-3 py-1 text-xs font-mono text-white/60">SCHEMA</span>
                          <span className="px-3 py-1 text-xs font-mono text-white/60">TOKENS</span>
                        </div>
                      )}
                    </>
                  )}

                  {blueprintMode === 'blueprint' && (
                    <div className="flex items-center justify-between pt-2 mt-2 border-t border-dashed border-primary/50 text-[8.5px] font-mono text-primary">
                      <span>RADIUS: {selectedBlueprint.radius}</span>
                      <span>BORDER: {selectedBlueprint.border}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* CODE & TOKENS VIEW */
                <div className="w-full max-w-sm p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-[10.5px] text-emerald-400 space-y-1">
                  <div className="text-white/40 text-[9px] border-b border-white/10 pb-1">
                    /* CSS Token Specification */
                  </div>
                  {selectedBlueprint.cssTokens.map((token) => (
                    <div key={token} className="truncate">
                      <span className="text-primary">{token.split(':')[0]}:</span>
                      <span className="text-white/80">{token.split(':')[1]};</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            <p className="text-xs text-white/60 pt-2 border-t border-white/5 leading-relaxed">
              Every component uses consistent 4px and 8px spacing for clean, reliable layouts.
            </p>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* WORKSTATION 02: 3-TIER SEMANTIC TOKEN VARIABLE PIPELINE */}
        {/* ========================================================================= */}
        <div className="group relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-[border-color,background-color] duration-500 overflow-hidden flex flex-col justify-between">
          <div className="relative rounded-[calc(1.5rem-0.125rem)] bg-[#0d0e12] border border-white/5 p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                  TOOL 02 // COLOR THEMES & TOKENS
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                CONTRAST: {selectedTheme.contrastRatio}
              </span>
            </div>

            {/* Theme Preset Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {SEMANTIC_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    playClick(750, 0.02, 'sine');
                    setSelectedTheme(theme);
                  }}
                  className={`p-2 rounded-lg text-left text-[10px] font-mono border transition-[border-color,background-color,color,box-shadow] cursor-pointer ${
                    selectedTheme.id === theme.id
                      ? 'border-white text-white shadow-md'
                      : 'border-white/5 text-white/50 hover:text-white bg-white/5'
                  }`}
                  style={{ background: selectedTheme.id === theme.id ? theme.surfaceRaised : undefined }}
                >
                  <span className="block truncate font-bold">{theme.name.split(' ')[0]}</span>
                  <span className="text-[8.5px] opacity-70 block">{theme.accentName}</span>
                </button>
              ))}
            </div>

            {/* 3-Tier Token Variable Breakdown */}
            <div className="space-y-1.5 p-3 rounded-xl bg-[#07080a] border border-white/10 font-mono text-[10.5px]">
              <div className="flex items-center justify-between py-0.5 border-b border-white/5 text-[9.5px]">
                <span className="text-white/40">TIER 1 (GLOBAL):</span>
                <span className="text-white">{selectedTheme.globalToken}</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-white/5 text-[9.5px]">
                <span className="text-white/40">TIER 2 (SEMANTIC):</span>
                <span className="text-primary">{selectedTheme.semanticToken}</span>
              </div>
              <div className="flex items-center justify-between py-0.5 text-[9.5px]">
                <span className="text-white/40">TIER 3 (COMPONENT):</span>
                <span className="text-emerald-400">{selectedTheme.componentToken}</span>
              </div>
            </div>

            {/* Live Token Transformation Canvas & 1-Click Code Exporter */}
            <div 
              className="p-3.5 rounded-xl border transition-[background-color,border-color] duration-300 space-y-2"
              style={{ background: selectedTheme.surfaceRaised, borderColor: selectedTheme.surfaceBorder }}
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-medium">{selectedTheme.name} Theme</span>
                <span className="font-bold" style={{ color: selectedTheme.accent }}>
                  {selectedTheme.wcag}
                </span>
              </div>
              <p className="text-[11.5px] text-white/70 leading-relaxed font-sans">
                Tokens compile directly from Figma variables into TypeScript schemas with zero manual synchronization.
              </p>

              {/* 1-Click Token Exporter Action Buttons */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-[10px] font-mono">
                <span className="text-white/40 flex items-center gap-1">
                  <Code2 className="w-3 h-3 text-amber-400" />
                  EXPORT TOKENS:
                </span>
                <div className="flex items-center gap-1.5">
                  {(['css', 'tailwind', 'json'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => handleCopyTokens(fmt)}
                      className="px-2 py-0.5 rounded bg-white/10 hover:bg-white text-white hover:text-black uppercase cursor-pointer transition-colors flex items-center gap-1"
                    >
                      {copiedTokenFormat === fmt ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      <span>{copiedTokenFormat === fmt ? 'Copied' : fmt}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-white/60 pt-2 border-t border-white/5 leading-relaxed">
              Clean color organization that makes switching themes and dark mode effortless.
            </p>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* WORKSTATION 03: HARMONIC MODULAR TYPOGRAPHY SCALE */}
        {/* ========================================================================= */}
        <div className="group relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-[border-color,background-color] duration-500 overflow-hidden flex flex-col justify-between">
          <div className="relative rounded-[calc(1.5rem-0.125rem)] bg-[#0d0e12] border border-white/5 p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Type className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                  TOOL 03 // TYPE SIZES & FONTS
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">
                {selectedRatio.name.split(' ')[0]} RATIO
              </span>
            </div>

            {/* Ratio Selector Buttons */}
            <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
              {SCALE_RATIOS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    playClick(750, 0.02, 'sine');
                    setSelectedRatio(r);
                  }}
                  className={`p-1.5 rounded-lg text-[9.5px] font-mono text-center transition-colors cursor-pointer truncate ${
                    selectedRatio.id === r.id
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {r.name.split(' ')[0]} {r.name.split(' ')[1]}
                </button>
              ))}
            </div>

            {/* Interactive Scale Ladder */}
            <div className="space-y-1">
              {scaleSteps.slice(0, 5).map((step, idx) => (
                <button
                  key={step.name}
                  type="button"
                  onClick={() => {
                    playClick(700 + idx * 30, 0.02, 'sine');
                    setActiveTypeStep(idx);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs font-mono transition-colors cursor-pointer ${
                    activeTypeStep === idx
                      ? 'bg-white/10 text-white border border-white/15'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="font-medium text-[11px] truncate">{step.name}</span>
                  <span className="text-[10px] text-white/40">{step.size}</span>
                </button>
              ))}
            </div>

            {/* Active Typography Specimen Card */}
            <div className="p-3 rounded-xl bg-[#07080a] border border-white/10 flex items-center justify-between text-xs font-mono">
              <div className="space-y-0.5">
                <span className="text-white font-semibold text-[11px]">{scaleSteps[activeTypeStep].name} Spec</span>
                <span className="text-[10px] text-white/40 block">Font: {scaleSteps[activeTypeStep].font}</span>
              </div>
              <div className="text-right text-[10px] text-emerald-400 font-mono">
                <span>LH: {scaleSteps[activeTypeStep].lh}</span>
                <span className="text-white/40 block">Tracking: {scaleSteps[activeTypeStep].tracking}</span>
              </div>
            </div>

            <p className="text-xs text-white/60 pt-2 border-t border-white/5 leading-relaxed">
              Balanced typography scale pairing modern headings with clean, readable text.
            </p>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* WORKSTATION 04: KINETIC SPRING PHYSICS & SUB-16MS MOTION LAB */}
        {/* ========================================================================= */}
        <div className="group relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-[border-color,background-color] duration-500 overflow-hidden flex flex-col justify-between">
          <div className="relative rounded-[calc(1.5rem-0.125rem)] bg-[#0d0e12] border border-white/5 p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                  TOOL 04 // SMOOTH ANIMATIONS
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">
                SMOOTH 60FPS
              </span>
            </div>

            {/* Interactive Physical Kinetic Stage */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#07080a] border border-white/10 flex flex-col items-center justify-center min-h-[140px] space-y-2.5">
              <motion.button
                key={motionTrigger}
                type="button"
                initial={{ scale: 0.88, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness, damping, mass }}
                onClick={handleTriggerMotion}
                className="w-full sm:w-auto px-6 py-3 sm:py-2.5 rounded-full bg-white text-black font-mono text-xs font-semibold shadow-lg cursor-pointer select-none active:scale-95 transition-transform text-center"
              >
                CLICK TO TEST ANIMATION
              </motion.button>

              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-mono text-white/50 pt-1">
                <span>STIFFNESS: {stiffness}</span>
                <span className="hidden sm:inline">•</span>
                <span>DAMPING: {damping}</span>
                <span className="hidden sm:inline">•</span>
                <span>MASS: {mass}</span>
              </div>
            </div>

            {/* Physics Sliders Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 text-xs font-mono">
              <div className="space-y-1.5 sm:space-y-1">
                <label htmlFor="stiffness-slider" className="text-[9.5px] text-white/50 flex items-center justify-between sm:block">
                  <span>STIFFNESS</span>
                  <span className="text-primary font-bold">{stiffness}</span>
                </label>
                <input
                  id="stiffness-slider"
                  type="range"
                  min="150"
                  max="700"
                  step="25"
                  value={stiffness}
                  aria-label="Spring Stiffness Slider"
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full h-6 sm:h-5 accent-primary cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-1">
                <label htmlFor="damping-slider" className="text-[9.5px] text-white/50 flex items-center justify-between sm:block">
                  <span>DAMPING</span>
                  <span className="text-primary font-bold">{damping}</span>
                </label>
                <input
                  id="damping-slider"
                  type="range"
                  min="12"
                  max="50"
                  step="2"
                  value={damping}
                  aria-label="Spring Damping Slider"
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full h-6 sm:h-5 accent-primary cursor-pointer"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-1">
                <label htmlFor="mass-slider" className="text-[9.5px] text-white/50 flex items-center justify-between sm:block">
                  <span>MASS</span>
                  <span className="text-primary font-bold">{mass}</span>
                </label>
                <input
                  id="mass-slider"
                  type="range"
                  min="0.4"
                  max="1.8"
                  step="0.1"
                  value={mass}
                  aria-label="Spring Mass Slider"
                  onChange={(e) => setMass(Number(e.target.value))}
                  className="w-full h-6 sm:h-5 accent-primary cursor-pointer"
                />
              </div>
            </div>

            <p className="text-xs text-white/60 pt-2 border-t border-white/5 leading-relaxed">
              Natural spring animations that give buttons and cards a responsive, tactile feel.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
