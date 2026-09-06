import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Timer } from 'lucide-react';
import fontPaths from './signatureFontPaths.json';

const ALEX_BRUSH = fontPaths.alexBrush;

// Optimized viewBox with safe padding for flourish sweep
const SIGNATURE_VIEWBOX = "-28 15 1185 180";

// Automated periodic replay interval (60 seconds = 1 minute)
const AUTO_REPLAY_INTERVAL_MS = 60_000;

// Continuous, overlapping timing curves for seamless 60/120fps motion
const ANIMATION_TIMING = {
  strokeDuration: 2.1,
  strokeDelay: 0.1,
  fillDuration: 0.45,
  fillDelay: 1.7, // Overlaps with final letters so ink settles continuously
  flourishDuration: 0.65,
  flourishDelay: 1.85, // Starts seamlessly as text finishes with zero pause
};

export const SignatureSignoff: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();
  const [animationKey, setAnimationKey] = useState(0);

  const shouldAnimate = shouldReduceMotion || isInView;

  /* ─────────────────────────────────────────────────────────────
   * Automated 60-Second Signature Replay Cycle
   * ────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;

    const timer = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, AUTO_REPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isInView, shouldReduceMotion]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto my-8 sm:my-12 px-2 sm:px-4 select-none">
      {/* Outer Double-Bezel Hardware Enclosure (Linear & Raycast Aesthetic) */}
      <div className="relative rounded-3xl p-2 sm:p-2.5 bg-white/[0.03] border border-white/10 shadow-2xl overflow-hidden group">
        
        {/* Top Edge Specular Ray */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-500 group-hover:via-white/70 z-20" />

        {/* Ambient Warm Backlight Bloom */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/[0.04] blur-3xl rounded-full z-0" />

        {/* Inner Dark Surface Card */}
        <div className="relative z-10 rounded-[calc(1.5rem-0.125rem)] bg-[#0b0c10] border border-white/5 p-5 sm:p-8 md:p-10 space-y-6">
          
          {/* Header Telemetry Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-white/10 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-[10px] sm:text-[10.5px] font-mono tracking-widest text-white/80 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" />
                <span>[ 0xAUTH_SIGNATURE // VERIFIED OPERATOR ]</span>
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 text-[9.5px] sm:text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              <Timer className="w-3 h-3 text-white/80 inline" />
              <span>AUTO-CYCLE // 60s</span>
            </div>
          </div>

          {/* Main Signature Display Canvas */}
          <div className="py-3 sm:py-6 md:py-8 flex flex-col items-center justify-center text-center w-full">
            <div 
              className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-1 select-none"
              aria-label="Cursive handwritten signature of Shanmukha Vutikuri"
            >
              {/* Fully Responsive SVG Vector Signature Canvas */}
              <div className="w-full flex items-center justify-center px-1 sm:px-3">
                <svg
                  key={`fluid-signature-${animationKey}`}
                  viewBox={SIGNATURE_VIEWBOX}
                  className="w-full h-auto min-h-[65px] max-h-[90px] xs:max-h-[110px] sm:max-h-[140px] md:max-h-[165px] lg:max-h-[185px] overflow-visible drop-shadow-[0_4px_28px_rgba(255,255,255,0.22)]"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                >
                  {/* 1. Luminous Pure White Continuous Stroke Drawing */}
                  <motion.path
                    d={ALEX_BRUSH.d}
                    fill="none"
                    className="stroke-white"
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      pathLength: shouldReduceMotion ? 1 : 0,
                      opacity: shouldReduceMotion ? 1 : 0,
                    }}
                    animate={
                      shouldAnimate
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: shouldReduceMotion ? 0 : ANIMATION_TIMING.strokeDuration,
                        delay: shouldReduceMotion ? 0 : ANIMATION_TIMING.strokeDelay,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      opacity: {
                        duration: 0.04,
                        delay: shouldReduceMotion ? 0 : ANIMATION_TIMING.strokeDelay,
                      },
                    }}
                  />

                  {/* 2. Luminous Pure White Ink Density Fill */}
                  <motion.path
                    d={ALEX_BRUSH.d}
                    stroke="none"
                    className="fill-white"
                    initial={{
                      opacity: shouldReduceMotion ? 1 : 0,
                    }}
                    animate={
                      shouldAnimate
                        ? { opacity: 1 }
                        : { opacity: 0 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0 : ANIMATION_TIMING.fillDuration,
                      delay: shouldReduceMotion ? 0 : ANIMATION_TIMING.fillDelay,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />

                  {/* 3. Golden Amber Calligraphy Flourish Underline */}
                  <motion.path
                    d="M 20,165 C 240,178 600,160 880,168 C 980,171 1060,165 1080,157 C 1090,152 1076,168 1030,175 C 890,188 560,172 260,180"
                    fill="none"
                    className="stroke-amber-400 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{
                      pathLength: shouldReduceMotion ? 1 : 0,
                      opacity: shouldReduceMotion ? 1 : 0,
                    }}
                    animate={
                      shouldAnimate
                        ? { pathLength: 1, opacity: 1 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: {
                        duration: shouldReduceMotion ? 0 : ANIMATION_TIMING.flourishDuration,
                        delay: shouldReduceMotion ? 0 : ANIMATION_TIMING.flourishDelay,
                        ease: [0.16, 1, 0.3, 1],
                      },
                      opacity: {
                        duration: 0.01,
                        delay: shouldReduceMotion ? 0 : ANIMATION_TIMING.flourishDelay,
                      },
                    }}
                  />
                </svg>
              </div>
            </div>

            {/* Subtext Philosophy Quote in Elegant Editorial Serif */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-base italic text-white/80 max-w-lg mx-auto leading-relaxed px-2 font-serif">
              &ldquo;Engineered with architectural rigor, sub-pixel precision, and human curiosity.&rdquo;
            </p>
          </div>

          {/* Footer Technical Metadata Strip */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-white/50 gap-2 text-center sm:text-left">
            <span>SHA-256: 0x9f8b2d41a87e0c33</span>
            <span>LOCATION // HYDERABAD, INDIA</span>
          </div>

        </div>
      </div>
    </div>
  );
};
