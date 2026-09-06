import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  Code2, 
  Eye, 
  Layers, 
  Palette, 
  Box, 
  Search,
  Sliders,
  Terminal,
  FileCode,
  CheckCircle2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useSound } from '@/hooks/useSound';
import { 
  buildStashComponents, 
  StashCategory, 
  StashComponent,
  StashStateContext 
} from './stashComponents';

export const DesignSystemStash: React.FC = () => {
  const { playClick } = useSound();
  const [activeTab, setActiveTab] = useState<'components' | 'tokens' | 'stack'>('components');
  const [selectedCompId, setSelectedCompId] = useState<string>('double-bezel');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [componentSearchQuery, setComponentSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Interactive preview state machine
  const [activeSegment, setActiveSegment] = useState<'design' | 'code' | 'review'>('design');
  const [activeViewport, setActiveViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [splitPos, setSplitPos] = useState<number>(50);
  const [spotlightPos, setSpotlightPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isSpotlightHovered, setIsSpotlightHovered] = useState<boolean>(false);
  const [paletteQuery, setPaletteQuery] = useState<string>('');
  const [switchEnabled, setSwitchEnabled] = useState<boolean>(true);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(0);
  const [selectedTags, setSelectedTags] = useState<string[]>(['React', 'TypeScript', 'Tailwind']);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [islandState, setIslandState] = useState<'idle' | 'call' | 'sync'>('idle');
  const [counterVal, setCounterVal] = useState<number>(1420);
  const [selectedColorToken, setSelectedColorToken] = useState<string>('#5e6ad2');
  const [diffView, setDiffView] = useState<'split' | 'unified'>('split');
  const [gaugeVal, setGaugeVal] = useState<number>(84);
  const [pricingInterval, setPricingInterval] = useState<'monthly' | 'annually'>('annually');
  const [passwordInput, setPasswordInput] = useState<string>('k!9_SystemAlpha');
  const [timerCount, setTimerCount] = useState<number>(10);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [confirmOpen, setConfirmOpen] = useState<boolean>(false);

  // React Bits & Creative interactive states
  const [cardSwapIndex, setCardSwapIndex] = useState<number>(0);
  const [trueFocusIndex, setTrueFocusIndex] = useState<number>(0);
  const [folderOpen, setFolderOpen] = useState<boolean>(false);
  const [scrambleKey, setScrambleKey] = useState<number>(0);
  const [dockHovered, setDockHovered] = useState<number | null>(null);
  const [magnetPos, setMagnetPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [tiltedRot, setTiltedRot] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [copiedCli, setCopiedCli] = useState<boolean>(false);
  const [stepperStep, setStepperStep] = useState<number>(1);
  const [pillNavTab, setPillNavTab] = useState<string>('overview');
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);
  const [gradientSpeed, setGradientSpeed] = useState<number>(3);
  const [floatingDockHovered, setFloatingDockHovered] = useState<number | null>(null);
  const [morphDialogOpen, setMorphDialogOpen] = useState<boolean>(false);
  const [activeAnimatedTab, setActiveAnimatedTab] = useState<string>('Spec');
  const [lensZoom, setLensZoom] = useState<number>(2.5);
  const [stackCardsTop, setStackCardsTop] = useState<number>(0);

  const context: StashStateContext = {
    playClick,
    activeSegment,
    setActiveSegment,
    activeViewport,
    setActiveViewport,
    splitPos,
    setSplitPos,
    spotlightPos,
    setSpotlightPos,
    isSpotlightHovered,
    setIsSpotlightHovered,
    paletteQuery,
    setPaletteQuery,
    switchEnabled,
    setSwitchEnabled,
    accordionOpen,
    setAccordionOpen,
    selectedTags,
    setSelectedTags,
    dropdownOpen,
    setDropdownOpen,
    islandState,
    setIslandState,
    counterVal,
    setCounterVal,
    selectedColorToken,
    setSelectedColorToken,
    diffView,
    setDiffView,
    gaugeVal,
    setGaugeVal,
    pricingInterval,
    setPricingInterval,
    passwordInput,
    setPasswordInput,
    timerCount,
    setTimerCount,
    timerRunning,
    setTimerRunning,
    drawerOpen,
    setDrawerOpen,
    confirmOpen,
    setConfirmOpen,
    cardSwapIndex,
    setCardSwapIndex,
    trueFocusIndex,
    setTrueFocusIndex,
    folderOpen,
    setFolderOpen,
    scrambleKey,
    setScrambleKey,
    dockHovered,
    setDockHovered,
    magnetPos,
    setMagnetPos,
    tiltedRot,
    setTiltedRot,
    stepperStep,
    setStepperStep,
    pillNavTab,
    setPillNavTab,
    isMarqueePaused,
    setIsMarqueePaused,
    gradientSpeed,
    setGradientSpeed,
    floatingDockHovered,
    setFloatingDockHovered,
    morphDialogOpen,
    setMorphDialogOpen,
    activeAnimatedTab,
    setActiveAnimatedTab,
    lensZoom,
    setLensZoom,
    stackCardsTop,
    setStackCardsTop
  };

  const STASH_COMPONENTS: StashComponent[] = buildStashComponents(context);

  const handleCopyCode = (id: string, code: string) => {
    playClick(1000, 0.03, 'sine');
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const switchTab = (tab: 'components' | 'tokens' | 'stack') => {
    playClick(750, 0.02, 'sine');
    setActiveTab(tab);
  };

  // Filter components by category and search query
  const filteredComponents = STASH_COMPONENTS.filter(comp => {
    const matchesCategory = activeCategoryFilter === 'all' || comp.category === activeCategoryFilter;
    const matchesQuery = componentSearchQuery === '' || 
      comp.name.toLowerCase().includes(componentSearchQuery.toLowerCase()) ||
      comp.category.toLowerCase().includes(componentSearchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(componentSearchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const currentComp = STASH_COMPONENTS.find((c) => c.id === selectedCompId) || filteredComponents[0] || STASH_COMPONENTS[0];

  return (
    <section id="design-stash" className="relative scroll-mt-32 pt-8 sm:pt-12 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Ambient Emerald Radial Glow Highlight */}
      <div className="pointer-events-none absolute -top-24 inset-x-0 flex items-center justify-center overflow-hidden z-0">
        <div className="w-[1000px] h-[400px] bg-gradient-to-b from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl rounded-full opacity-75" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-white/10 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10.5px] font-mono tracking-widest text-emerald-300 uppercase shadow-[0_0_16px_rgba(52,211,153,0.15)] tabular-nums">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>FREE &amp; OPEN SOURCE // {STASH_COMPONENTS.length} READY-TO-USE COMPONENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-jakarta font-semibold tracking-[-0.03em] text-[#f7f8f8]">
            Component <span className="font-instrument italic font-normal tracking-normal text-white/95">Library</span> &amp; Systems Stash
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-white/60 max-w-lg leading-relaxed font-sans">
          A free collection of <span className="font-mono tabular-nums text-white/80">{STASH_COMPONENTS.length}</span> interactive React components, animated effects, and design tokens. Test them live, view the code, and copy them directly into your project.
        </p>
      </div>

      {/* Main Mode Navigation Tabs (Components | Tokens & Variables | Tech Stack & Tools) */}
      <div className="relative z-10 flex items-center gap-2 mb-6 overflow-x-auto no-scrollbar pb-1">
        <button
          type="button"
          onClick={() => switchTab('components')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border flex items-center gap-2 shrink-0 ${
            activeTab === 'components'
              ? 'bg-white text-black border-white font-semibold shadow-sm'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border-white/10'
          }`}
        >
          <Box className="w-3.5 h-3.5" />
          <span>Components <span className="tabular-nums">({STASH_COMPONENTS.length})</span></span>
        </button>

        <button
          type="button"
          onClick={() => switchTab('tokens')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border flex items-center gap-2 shrink-0 ${
            activeTab === 'tokens'
              ? 'bg-white text-black border-white font-semibold shadow-sm'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border-white/10'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Design Tokens &amp; Variables</span>
        </button>

        <button
          type="button"
          onClick={() => switchTab('stack')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border flex items-center gap-2 shrink-0 ${
            activeTab === 'stack'
              ? 'bg-white text-black border-white font-semibold shadow-sm'
              : 'bg-white/[0.03] hover:bg-white/[0.07] text-white/70 hover:text-white border-white/10'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Tech Stack &amp; Tools</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: PRODUCTION REACT COMPONENTS (INSPECT & COPY) */}
      {/* ========================================================================= */}
      {activeTab === 'components' && (
        <div className="space-y-4">
          
          {/* Subcategory Filter Pills & Live Search Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs font-mono">
              {[
                { key: 'all', label: `All (${STASH_COMPONENTS.length})` },
                { key: 'React Bits & Creative', label: `Animations & Effects (${STASH_COMPONENTS.filter(c => c.category === 'React Bits & Creative').length})` },
                { key: 'Surfaces & Cards', label: `Cards & Surfaces (${STASH_COMPONENTS.filter(c => c.category === 'Surfaces & Cards').length})` },
                { key: 'Controls & Navigation', label: `Buttons & Nav (${STASH_COMPONENTS.filter(c => c.category === 'Controls & Navigation').length})` },
                { key: 'Haptics & Motion', label: `Interactive Motion (${STASH_COMPONENTS.filter(c => c.category === 'Haptics & Motion').length})` },
                { key: 'Data & Telemetry', label: `Stats & Counters (${STASH_COMPONENTS.filter(c => c.category === 'Data & Telemetry').length})` },
                { key: 'Feedback & Overlays', label: `Modals & Popups (${STASH_COMPONENTS.filter(c => c.category === 'Feedback & Overlays').length})` },
                { key: 'Developer & System Tools', label: `Developer Tools (${STASH_COMPONENTS.filter(c => c.category === 'Developer & System Tools').length})` },
                { key: 'Hooks & Utilities', label: `React Hooks (${STASH_COMPONENTS.filter(c => c.category === 'Hooks & Utilities').length})` },
              ].map(f => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => {
                    playClick(750, 0.02, 'sine');
                    setActiveCategoryFilter(f.key);
                    if (f.key !== 'all') {
                      const firstInCat = STASH_COMPONENTS.find(c => c.category === f.key);
                      if (firstInCat) setSelectedCompId(firstInCat.id);
                    }
                  }}
                  className={`px-3 py-1 rounded-lg border transition-colors cursor-pointer shrink-0 ${
                    activeCategoryFilter === f.key
                      ? 'bg-white/15 text-white border-white/30 font-medium'
                      : 'bg-white/[0.02] text-white/50 hover:text-white border-white/5'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Quick Search inside Stash */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono w-full lg:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 text-white/40" />
              <input
                type="text"
                value={componentSearchQuery}
                onChange={(e) => setComponentSearchQuery(e.target.value)}
                placeholder={`Search ${STASH_COMPONENTS.length} components...`}
                className="bg-transparent text-white placeholder:text-white/30 focus:outline-none w-full text-xs font-mono"
              />
              {componentSearchQuery && (
                <button 
                  type="button" 
                  onClick={() => setComponentSearchQuery('')}
                  className="text-white/40 hover:text-white text-[10px]"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Master Stash Grid: List (5 Cols) vs Preview (7 Cols) */}
          <div className="grid lg:grid-cols-12 gap-5 items-start">
            
            {/* Left: Component List Selector */}
            <div className="lg:col-span-5 space-y-2 max-h-[680px] overflow-y-auto pr-1">
              {filteredComponents.length === 0 ? (
                <div className="p-8 rounded-xl border border-white/5 text-center font-mono text-xs text-white/40">
                  No components match "{componentSearchQuery}"
                </div>
              ) : (
                filteredComponents.map((comp) => {
                  const isSelected = currentComp.id === comp.id;
                  const IconComponent = comp.icon;
                  return (
                    <div
                      key={comp.id}
                      onClick={() => {
                        playClick(900, 0.02, 'triangle');
                        setSelectedCompId(comp.id);
                      }}
                      className={`p-3 rounded-xl border transition-all duration-150 cursor-pointer text-left flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-white/10 border-white/30 shadow-md'
                          : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 text-white/70 hover:text-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-white text-black' : 'bg-white/5 text-white/80'}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xs font-medium text-white tracking-tight block">
                            {comp.name}
                          </span>
                          <p className="text-[11px] text-white/50 line-clamp-1 font-sans">
                            {comp.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 mt-1 shrink-0 ${isSelected ? 'text-white' : 'text-white/20'}`} />
                    </div>
                  );
                })
              )}
            </div>

            {/* Right: Component Preview & Code Copier */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#0c0d12] border border-white/10 p-5 sm:p-7 space-y-5 shadow-2xl">
                
                {/* Header & Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                      {currentComp.category}
                    </span>
                    <h3 className="text-lg font-jakarta font-semibold tracking-tight text-white">
                      {currentComp.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Preview / Code Toggle */}
                    <div className="flex items-center gap-1 bg-black/60 p-0.5 rounded-lg border border-white/10 text-xs font-mono">
                      <button
                        type="button"
                        onClick={() => {
                          playClick(750, 0.02, 'sine');
                          setViewMode('preview');
                        }}
                        className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                          viewMode === 'preview' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <Eye className="w-3 h-3" />
                        <span>Preview</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          playClick(850, 0.02, 'sine');
                          setViewMode('code');
                        }}
                        className={`px-3 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                          viewMode === 'code' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <Code2 className="w-3 h-3" />
                        <span>TSX Code</span>
                      </button>
                    </div>

                    {/* shadcn CLI Copy Button if available */}
                    {currentComp.shadcnCommand && (
                      <button
                        type="button"
                        onClick={() => {
                          playClick(1100, 0.03, 'sine');
                          navigator.clipboard.writeText(currentComp.shadcnCommand!);
                          setCopiedCli(true);
                          setTimeout(() => setCopiedCli(false), 2000);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 border border-amber-400/30 font-mono text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                        title="Copy npx shadcn CLI install command"
                      >
                        {copiedCli ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-amber-300" />
                            <span className="font-semibold">CLI Copied!</span>
                          </>
                        ) : (
                          <>
                            <Terminal className="w-3.5 h-3.5" />
                            <span>shadcn CLI</span>
                          </>
                        )}
                      </button>
                    )}

                    {/* Copy TSX Button */}
                    <button
                      type="button"
                      onClick={() => handleCopyCode(currentComp.id, currentComp.codeSnippet)}
                      className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      {copiedId === currentComp.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy TSX</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {currentComp.description}
                </p>

                {/* shadcn CLI installation affordance */}
                {currentComp.shadcnCommand && (
                  <div className="flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-black/70 border border-amber-400/20 text-xs font-mono">
                    <div className="flex items-center gap-2 text-amber-300/90 overflow-x-auto no-scrollbar">
                      <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-white/40 shrink-0">$</span>
                      <code className="select-text whitespace-nowrap">{currentComp.shadcnCommand}</code>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        playClick(1100, 0.03, 'sine');
                        navigator.clipboard.writeText(currentComp.shadcnCommand!);
                        setCopiedCli(true);
                        setTimeout(() => setCopiedCli(false), 2000);
                      }}
                      className="px-2.5 py-1 rounded-lg bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 text-[10px] font-mono shrink-0 transition-colors cursor-pointer"
                    >
                      {copiedCli ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                )}

                {/* Active Stage (Preview or Code) */}
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#07080b]">
                  {viewMode === 'preview' ? (
                    <div className="p-6 sm:p-8 flex items-center justify-center min-h-[260px]">
                      {currentComp.previewComponent}
                    </div>
                  ) : (
                    <div className="p-4 overflow-x-auto max-h-[400px] text-[11px] font-mono leading-relaxed text-white/80 select-text">
                      <pre>
                        <code>{currentComp.codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>

                {/* Bottom Spec Tip */}
                <div className="flex items-center justify-between text-[10.5px] font-mono text-white/40 pt-1">
                  <span>DEPENDENCY: REACT 19 + TAILWIND CSS</span>
                  <span className="text-emerald-400">100% PRODUCTION TESTED</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: DESIGN SYSTEM TOKENS & CSS VARIABLES */}
      {/* ========================================================================= */}
      {activeTab === 'tokens' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0d12] border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                  DESIGN SYSTEM // COLOR &amp; FONT VARIABLES
                </span>
                <h3 className="text-xl font-jakarta font-semibold tracking-tight text-white">
                  CSS Color &amp; Typography Variables
                </h3>
              </div>

              <button
                type="button"
                onClick={() => handleCopyCode('css-tokens', `:root {
  /* Canvas & Ground Surfaces */
  --surface-canvas: #050608;
  --surface-card: #0b0c10;
  --surface-elevated: #0f1015;
  --surface-overlay: rgba(15, 16, 22, 0.85);
  --border-hairline: rgba(255, 255, 255, 0.1);
  --border-focus: #5e6ad2;

  /* Typography Colors */
  --ink-primary: #f7f8f8;
  --ink-muted: #d0d6e0;
  --ink-subtle: #8a8f98;

  /* Accent Signatures */
  --accent-linear: #5e6ad2;
  --accent-emerald: #34d399;
  --accent-amber: #f59e0b;
  --accent-rose: #f43f5e;

  /* Typography Scale */
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-serif: 'Instrument Serif', Georgia, serif;
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  /* Motion & Spring Dynamics */
  --spring-stiffness: 450;
  --spring-damping: 35;
  --ease-mechanical: cubic-bezier(0.16, 1, 0.3, 1);
}`)}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs transition-colors cursor-pointer flex items-center gap-1.5 self-start sm:self-center"
              >
                {copiedId === 'css-tokens' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied CSS!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Complete CSS Variables</span>
                  </>
                )}
              </button>
            </div>

            {/* Token Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: '--surface-canvas', val: '#050608', desc: 'Linear Void Canvas Background' },
                { name: '--surface-card', val: '#0b0c10', desc: 'Machined Double-Bezel Panel' },
                { name: '--surface-elevated', val: '#0f1015', desc: 'Floating Window Chrome' },
                { name: '--border-hairline', val: 'rgba(255, 255, 255, 0.1)', desc: '1px Crisp Divider' },
                { name: '--accent-linear', val: '#5e6ad2', desc: 'Linear Signature Lavender' },
                { name: '--accent-emerald', val: '#34d399', desc: 'WCAG AAA Success Token' },
                { name: '--accent-amber', val: '#f59e0b', desc: 'High-Visibility Attention Gold' },
                { name: '--accent-rose', val: '#f43f5e', desc: 'Critical Failure / Friction Red' },
                { name: '--ease-mechanical', val: 'cubic-bezier(0.16, 1, 0.3, 1)', desc: 'Sub-16ms Spring Curve' },
              ].map((token) => (
                <div key={token.name} className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1.5 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-400 truncate pr-2">{token.name}</span>
                    <span className="text-white font-semibold shrink-0">{token.val}</span>
                  </div>
                  <span className="text-[10px] text-white/50 block font-sans">{token.desc}</span>
                </div>
              ))}
            </div>

            {/* Tailwind Configuration Template */}
            <div className="p-4 rounded-xl bg-[#07080b] border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-white/60 pb-2 border-b border-white/10">
                <span className="text-amber-400 font-semibold">tailwind.config.ts Preset</span>
                <button 
                  type="button"
                  onClick={() => handleCopyCode('tw-config', `// tailwind.config.ts preset
export default {
  theme: {
    extend: {
      colors: {
        canvas: '#050608',
        card: '#0b0c10',
        elevated: '#0f1015',
        linear: '#5e6ad2',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};`)}
                  className="hover:text-white text-[11px] flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>Copy Preset</span>
                </button>
              </div>
              <pre className="text-[11px] font-mono text-white/70 overflow-x-auto select-text">
                <code>{`export default {
  theme: {
    extend: {
      colors: { canvas: '#050608', card: '#0b0c10', elevated: '#0f1015', linear: '#5e6ad2' },
      fontFamily: { sans: ['Plus Jakarta Sans'], serif: ['Instrument Serif'], grotesk: ['Space Grotesk'], mono: ['JetBrains Mono'] }
    }
  }
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: THE COMPLETE CREATION STACK DIRECTORY */}
      {/* ========================================================================= */}
      {activeTab === 'stack' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'React 19 & TypeScript 5',
              category: 'Frontend Framework',
              desc: 'Fast, reliable components with clean TypeScript types and zero layout shifts.',
              tag: 'FRAMEWORK'
            },
            {
              title: 'Tailwind CSS v3/v4 Utilities',
              category: 'CSS Framework',
              desc: 'Utility-first styling with responsive layouts and dark mode support.',
              tag: 'STYLING'
            },
            {
              title: 'Framer Motion Spring Kinematics',
              category: 'Animation Library',
              desc: 'Smooth, natural physics-based motion for buttons, dialogs, and transitions.',
              tag: 'MOTION'
            },
            {
              title: 'Web Audio API Clicks',
              category: 'Sound Effects',
              desc: 'Subtle, pleasant clicks and haptic audio generated directly in the browser.',
              tag: 'AUDIO'
            },
            {
              title: 'Curated Typography Quad',
              category: 'Typography & Fonts',
              desc: 'Plus Jakarta Sans, Instrument Serif, Space Grotesk, and JetBrains Mono.',
              tag: 'TYPOGRAPHY'
            },
            {
              title: 'Playwright & Chromium Engine',
              category: 'Testing & Quality',
              desc: 'Automated snapshot tests ensuring screens look clean across mobile and desktop.',
              tag: 'TESTING'
            },
            {
              title: 'Oxlint & Biome Anti-Slop',
              category: 'Code Quality',
              desc: 'Strict code standards banning generic AI patterns, clutter, and uncalibrated gradients.',
              tag: 'LINTING'
            },
            {
              title: 'Lucide Icons Clean Vector Set',
              category: 'Clean Icon System',
              desc: 'Consistent 24px vector icons with clear line weights and optical balance.',
              tag: 'ICONS'
            },
            {
              title: 'Vite 5 Lightning Bundler',
              category: 'Build Tool',
              desc: 'Instant hot reloading during development and optimized production bundles.',
              tag: 'BUNDLER'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-white/20 transition-all duration-300 space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9.5px] font-mono tracking-widest text-amber-400 uppercase">
                  {item.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <h4 className="text-sm sm:text-base font-jakarta font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {item.title}
              </h4>
              <span className="text-[11px] font-mono text-white/50 block">{item.category}</span>
              <p className="text-xs text-white/65 font-sans leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};
