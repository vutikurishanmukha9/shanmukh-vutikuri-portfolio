import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Folder, 
  Palette, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Copy, 
  Check, 
  ExternalLink, 
  FileDown, 
  Mail, 
  Sliders, 
  Compass, 
  Workflow, 
  Activity, 
  Box,
  Github,
  Linkedin,
  Code2
} from 'lucide-react';
import { useSound } from '@/hooks/useSound';

export interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Design Tokens' | 'Actions & Contact';
  shortcut?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
}

export const DesignerCommandPalette: React.FC = () => {
  const { playClick } = useSound();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global listener for Cmd+K and custom event 'open-command-palette'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        playClick(850, 0.02, 'sine');
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => {
      setIsOpen(true);
      playClick(850, 0.02, 'sine');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-command-palette', handleCustomOpen);
    };
  }, [isOpen, playClick]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  const copyText = (text: string, key: string) => {
    playClick(1000, 0.03, 'sine');
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
      setIsOpen(false);
    }, 1200);
  };

  const jumpTo = (elementId: string) => {
    playClick(850, 0.02, 'sine');
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const COMMANDS: CommandItem[] = [
    // Navigation
    {
      id: 'nav-works',
      title: 'Jump to Featured Work & Case Studies',
      category: 'Navigation',
      shortcut: 'W',
      icon: Folder,
      action: () => jumpTo('works')
    },
    {
      id: 'nav-process',
      title: 'Jump to Design Process & AI Stack',
      category: 'Navigation',
      shortcut: 'P',
      icon: Workflow,
      action: () => jumpTo('process-timeline')
    },
    {
      id: 'nav-stash',
      title: 'Jump to Component Library Stash (125 Bits)',
      category: 'Navigation',
      shortcut: 'S',
      icon: Box,
      action: () => jumpTo('design-stash')
    },
    {
      id: 'nav-craft',
      title: 'Jump to Design Tokens Craft Lab',
      category: 'Navigation',
      shortcut: 'C',
      icon: Palette,
      action: () => jumpTo('craft-lab')
    },
    {
      id: 'nav-tools',
      title: 'Jump to Production Tooling & Tech Stack',
      category: 'Navigation',
      shortcut: 'T',
      icon: Cpu,
      action: () => jumpTo('tools')
    },
    {
      id: 'nav-philosophy',
      title: 'Jump to Core Design Principles',
      category: 'Navigation',
      shortcut: 'O',
      icon: Layers,
      action: () => jumpTo('philosophy')
    },

    // Design Tokens Quick Copy
    {
      id: 'token-linear',
      title: 'Copy Linear Signature Hex (#5e6ad2)',
      category: 'Design Tokens',
      shortcut: '#5E',
      icon: Copy,
      action: () => copyText('#5e6ad2', 'token-linear')
    },
    {
      id: 'token-emerald',
      title: 'Copy WCAG AAA Emerald Hex (#34d399)',
      category: 'Design Tokens',
      shortcut: '#34',
      icon: Copy,
      action: () => copyText('#34d399', 'token-emerald')
    },
    {
      id: 'token-canvas',
      title: 'Copy Dark Canvas Background (#050608)',
      category: 'Design Tokens',
      shortcut: '#05',
      icon: Copy,
      action: () => copyText('#050608', 'token-canvas')
    },
    {
      id: 'token-spring',
      title: 'Copy Framer Motion Spring Config (stiffness: 450, damping: 35)',
      category: 'Design Tokens',
      shortcut: 'SPRING',
      icon: Code2,
      action: () => copyText('{ type: "spring", stiffness: 450, damping: 35 }', 'token-spring')
    },
    {
      id: 'token-tailwind',
      title: 'Copy Tailwind Font Family Preset',
      category: 'Design Tokens',
      shortcut: 'FONT',
      icon: Code2,
      action: () => copyText(`fontFamily: { sans: ['Plus Jakarta Sans'], serif: ['Instrument Serif'], grotesk: ['Space Grotesk'], mono: ['JetBrains Mono'] }`, 'token-tailwind')
    },

    // Actions & Contact
    {
      id: 'act-email',
      title: 'Compose Email to Shanmukha',
      category: 'Actions & Contact',
      shortcut: 'EMAIL',
      icon: Mail,
      action: () => {
        window.open('mailto:vutikurishanmukh17@gmail.com', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'act-github',
      title: 'Open GitHub Profile (@vutikurishanmukha9)',
      category: 'Actions & Contact',
      shortcut: 'GIT',
      icon: Github,
      action: () => {
        window.open('https://github.com/vutikurishanmukha9', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'act-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Actions & Contact',
      shortcut: 'IN',
      icon: Linkedin,
      action: () => {
        window.open('https://linkedin.com/in/shanmukha-vutikuri', '_blank');
        setIsOpen(false);
      }
    }
  ];

  const filteredCommands = COMMANDS.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.title.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      (cmd.shortcut && cmd.shortcut.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
      playClick(600, 0.015, 'sine');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
      playClick(600, 0.015, 'sine');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 select-none">
          {/* Backdrop Blur Wash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#0c0d13] border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden z-10"
          >
            {/* Top Search Input Box */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-4 border-b border-white/10 bg-white/[0.02]">
              <Search className="w-4 h-4 text-white/40 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a command, token name, or section... (↑↓ to navigate)"
                className="w-full bg-transparent text-sm sm:text-base font-sans text-white placeholder:text-white/30 focus:outline-none"
              />
              <kbd className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white/60 border border-white/10 shrink-0">
                ESC
              </kbd>
            </div>

            {/* Command List View */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-white/40">
                  No commands match "{query}"
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = selectedIndex === idx;
                  const Icon = cmd.icon;
                  return (
                    <div
                      key={cmd.id}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`px-3.5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 text-xs ${
                        isSelected
                          ? 'bg-white/15 text-white shadow-sm'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-white text-black' : 'bg-white/5 text-white/60'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <span className="font-medium font-sans block truncate text-white">
                            {cmd.title}
                          </span>
                          <span className="text-[10px] font-mono text-white/40 uppercase">
                            {cmd.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {copiedKey === cmd.id ? (
                          <span className="font-mono text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Copied!
                          </span>
                        ) : cmd.shortcut ? (
                          <kbd className="px-2 py-0.5 rounded bg-black/50 border border-white/10 font-mono text-[10px] text-white/50">
                            {cmd.shortcut}
                          </kbd>
                        ) : null}
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-white' : 'text-white/20'}`} />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Hint Bar */}
            <div className="px-4 py-2.5 border-t border-white/10 bg-black/40 flex items-center justify-between text-[10.5px] font-mono text-white/40">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↑↓</kbd> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd> Select
                </span>
              </div>
              <span className="text-white/30">
                PRO TIP: PRESS CMD+K ANYWHERE
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
