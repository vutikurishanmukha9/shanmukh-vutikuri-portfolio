import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { useSound } from '@/hooks/useSound';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeMetric?: string;
  afterMetric?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'LEGACY SPEC // UNCONSTRAINED',
  afterLabel = 'REDESIGNED SPEC // OPTIMIZED',
  beforeMetric = 'Legacy workflow: 4.2s per action',
  afterMetric = 'Redesigned: 0.8s (81% faster)',
  aspectRatio = 'aspect-[16/10]',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDraggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { playClick } = useSound();

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  }, [handleMove]);

  return (
    <div className="space-y-3 select-none">
      {/* Top Telemetry Metric Strip */}
      <div className="flex items-center justify-between gap-2 text-[11px] font-mono tabular-nums text-white/60">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>{beforeMetric}</span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
          <span>{afterMetric}</span>
        </div>
      </div>

      {/* Main Interactive Comparison Stage */}
      <div
        ref={containerRef}
        role="region"
        aria-label="Before and after redesign visual comparison slider"
        onMouseDown={() => {
          isDraggingRef.current = true;
          playClick(800, 0.02, 'sine');
        }}
        onMouseUp={() => {
          isDraggingRef.current = false;
        }}
        onMouseLeave={() => {
          isDraggingRef.current = false;
        }}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className={`relative ${aspectRatio} w-full rounded-2xl overflow-hidden border border-white/15 bg-black/80 cursor-ew-resize touch-none shadow-2xl`}
      >
        {/* AFTER (Redesigned) Image (Full Bleed Background) */}
        <img
          src={afterImage}
          alt="After Redesign"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />

        {/* AFTER Badge (Top Right) */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/40 text-[9px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 pointer-events-none tabular-nums">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>{afterLabel}</span>
        </div>

        {/* BEFORE (Legacy) Image (Masked Left Slice) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt="Before Redesign"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale-[35%]"
          />
          {/* Subtle dimming wash over legacy UI */}
          <div className="absolute inset-0 bg-black/25" />

          {/* BEFORE Badge (Top Left) */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-rose-500/40 text-[9px] font-mono text-rose-400 uppercase tracking-wider flex items-center gap-1.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider Split Line with Floating Grab Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Floating Pill Handle in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border-2 border-black/40">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Bottom Instruction Hint */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-mono text-white/70 border border-white/10 pointer-events-none">
          DRAG TO COMPARE REDESIGN
        </div>
      </div>
    </div>
  );
};
