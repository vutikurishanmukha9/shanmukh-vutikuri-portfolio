import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Menu, X, Mail } from 'lucide-react';
import { SoundToggle } from '@/components/SoundToggle';
import { useSound } from '@/hooks/useSound';

export const DesignNavigation: React.FC = () => {
  const { playClick } = useSound();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('process');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, navKey: string) => {
    playClick(700, 0.03, 'sine');
    setActiveNav(navKey);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'process', label: 'Process', target: 'process-timeline' },
    { key: 'work', label: 'Projects', target: 'works' },
    { key: 'redesign', label: 'Before & After', target: 'redesign-showcase' },
    { key: 'labs', label: 'Tokens', target: 'craft-lab' },
    { key: 'stash', label: '106 Components', target: 'design-stash', highlight: true },
    { key: 'philosophy', label: 'Principles', target: 'philosophy' },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-center p-3 sm:p-5 pointer-events-none select-none">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-[background-color,border-color,box-shadow] duration-300 ${
            isScrolled
              ? 'bg-[#08090d]/90 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]'
              : 'bg-transparent'
          }`}
        >
          {/* Left: [ DC ] Brand Mark & Title */}
          <div className="flex items-center gap-3">
            <Link
              to="/design"
              onClick={() => playClick(600, 0.03, 'sine')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 flex items-center justify-center text-xs font-mono font-bold text-white transition-[border-color,background-color]">
                SV
              </div>
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-white transition-colors font-jakarta flex items-center gap-1.5">
                Shanmukha <span className="text-white/40 font-normal font-mono text-[11px]">// Product Design</span>
              </span>
            </Link>

            {/* Quick Switch to Code Mode */}
            <Link
              to="/"
              onClick={() => playClick(600, 0.03, 'sine')}
              className="inline-flex items-center gap-1 ml-1 sm:ml-2 px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-[10px] font-mono text-white/60 hover:text-white border border-white/10 transition-colors"
              title="Switch to Engineering Portfolio"
            >
              <Code className="w-3 h-3 text-emerald-400" />
              <span>Dev Mode</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5 text-[11px] font-mono tracking-wider">
            {navItems.map((item) => {
              if (item.highlight) {
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => scrollToSection(item.target, item.key)}
                    className="relative px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold cursor-pointer transition-all duration-150 shadow-[0_0_12px_rgba(52,211,153,0.15)] flex items-center gap-1.5 tabular-nums"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item.label}</span>
                  </button>
                );
              }
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => scrollToSection(item.target, item.key)}
                  className={`relative py-1 cursor-pointer transition-colors ${
                    activeNav === item.key ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeNav === item.key && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Sound Toggle + "• LET'S CONNECT" Pill Button */}
          <div className="flex items-center gap-3">
            <SoundToggle />

            <a
              href="mailto:vutikurishanmukh17@gmail.com"
              onClick={() => playClick(850, 0.03, 'sine')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black hover:bg-white/90 font-mono text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              <Mail className="w-3 h-3 text-black" />
              <span>LET'S TALK</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => {
                playClick(600, 0.03, 'sine');
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl bg-[#0d0e14]/95 border border-white/15 backdrop-blur-2xl shadow-2xl md:hidden space-y-4 pt-safe pb-safe"
          >
            <div className="flex flex-col space-y-3 font-mono text-xs tracking-wider uppercase">
              {/* Prominent Mode Switcher at Top */}
              <Link
                to="/"
                onClick={() => {
                  playClick(600, 0.03, 'sine');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-mono text-xs font-medium text-center flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-[background-color,color,border-color,transform] shadow-sm mb-1 active:scale-98 cursor-pointer"
              >
                <Code className="w-4 h-4 text-amber-400" />
                <span>Switch to Engineering Mode →</span>
              </Link>

              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => scrollToSection(item.target, item.key)}
                  className={`text-left py-2.5 border-b border-white/5 flex items-center justify-between transition-colors ${
                    item.highlight 
                      ? 'text-emerald-400 font-bold bg-emerald-500/10 px-3 rounded-lg border-emerald-500/30' 
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.highlight && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="text-[10px] font-mono text-white/40 uppercase">AVAILABLE FOR Q3 2026</span>
              <a
                href="mailto:vutikurishanmukh17@gmail.com"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-mono text-[10.5px] font-semibold tracking-wider uppercase active:scale-95 transition-transform"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
