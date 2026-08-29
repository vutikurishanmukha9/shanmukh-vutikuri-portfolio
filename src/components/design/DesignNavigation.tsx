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
  const [activeNav, setActiveNav] = useState('work');

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
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/40 flex items-center justify-center text-xs font-mono font-bold text-white transition-[border-color,background-color]">
                DC
              </div>
              <span className="text-sm font-medium tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Design Canvas
              </span>
            </Link>

            {/* Quick Switch to Code Mode (Always visible on mobile & desktop) */}
            <Link
              to="/"
              onClick={() => playClick(600, 0.03, 'sine')}
              className="inline-flex items-center gap-1 ml-1 sm:ml-2 px-2 py-0.5 rounded-md bg-white/5 hover:bg-white/10 text-[10px] font-mono text-white/60 hover:text-white border border-white/10 transition-colors"
              title="Switch to Engineering Portfolio"
            >
              <Code className="w-3 h-3" />
              <span>Dev Mode</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-wider uppercase">
            {[
              { key: 'work', label: 'WORK', target: 'works' },
              { key: 'about', label: 'ABOUT', target: 'philosophy' },
              { key: 'process', label: 'PROCESS', target: 'craft-lab' },
              { key: 'labs', label: 'LABS', target: 'craft-lab' },
              { key: 'notes', label: 'NOTES', target: 'philosophy' },
            ].map((item) => (
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
            ))}
          </div>

          {/* Right: Sound Toggle + "• LET'S CONNECT" Pill Button */}
          <div className="flex items-center gap-3">
            <SoundToggle />

            <a
              href="mailto:vutikurishanmukh17@gmail.com"
              onClick={() => playClick(850, 0.03, 'sine')}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-amber-500/30 hover:border-amber-500/60 text-white font-mono text-[11px] tracking-wider uppercase transition-[background-color,border-color,transform] active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.08)] cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse shadow-[0_0_6px_rgba(245,158,11,0.9)]" />
              <span>LET'S CONNECT</span>
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
            className="fixed inset-x-4 top-20 z-50 p-6 rounded-2xl bg-[#0d0e14] border border-white/15 backdrop-blur-2xl shadow-2xl md:hidden space-y-4"
          >
            <div className="flex flex-col space-y-3 font-mono text-xs tracking-wider uppercase">
              {/* Prominent Mode Switcher at Top */}
              <Link
                to="/"
                onClick={() => {
                  playClick(600, 0.03, 'sine');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs text-center flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-[background-color,color,border-color,transform] shadow-sm mb-1"
              >
                <Code className="w-3.5 h-3.5" />
                <span>Switch to Engineering Mode →</span>
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection('works', 'work')}
                className="text-left text-white py-1.5 border-b border-white/5"
              >
                WORK
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('philosophy', 'about')}
                className="text-left text-white/70 hover:text-white py-1.5 border-b border-white/5"
              >
                ABOUT
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('craft-lab', 'process')}
                className="text-left text-white/70 hover:text-white py-1.5 border-b border-white/5"
              >
                PROCESS & LABS
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('philosophy', 'notes')}
                className="text-left text-white/70 hover:text-white py-1.5 border-b border-white/5"
              >
                NOTES
              </button>
            </div>

            <div className="pt-2 flex items-center justify-end border-t border-white/10">
              <a
                href="mailto:vutikurishanmukh17@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-black font-mono text-[10.5px] font-semibold"
              >
                <Mail className="w-3 h-3" />
                <span>Contact</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
