import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { SignatureSignoff } from '@/components/ui/SignatureSignoff';
import { useSound } from '@/hooks/useSound';

export const DesignFooter: React.FC = () => {
  const { playClick } = useSound();
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState({ utc: '--:--:--', ist: '--:--:--' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const utcOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const utcString = now.toLocaleTimeString('en-US', utcOptions);

      const istOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const istString = now.toLocaleTimeString('en-US', istOptions);

      setTime({ utc: utcString, ist: istString });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    playClick(850, 0.03, 'sine');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    playClick(750, 0.03, 'sine');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#07080a] border-t border-white/10 text-white select-none overflow-hidden pt-6 pb-12">
      {/* Top Ambient Glow Line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Author Signature & Authentication Signoff */}
        <div className="mb-10">
          <SignatureSignoff />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-10 border-b border-white/5">
          
          {/* Col 1: Brand & Manifesto */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xl sm:text-2xl font-jakarta font-semibold tracking-[-0.03em] text-[#f7f8f8]">
              Vutikuri Shanmukha
            </h3>
            <p className="text-xs sm:text-sm text-white/55 leading-relaxed max-w-md font-sans">
              Product &amp; Interaction Designer building clean digital experiences, consistent design systems, and thoughtful user interfaces.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {[
                { name: 'GitHub', url: 'https://github.com/vutikurishanmukha9', icon: Github },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/shanmukha-vutikuri', icon: Linkedin },
                { name: 'Email', url: 'mailto:vutikurishanmukh17@gmail.com', icon: Mail },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick(900, 0.02, 'sine')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-white/70 hover:text-white transition-[background-color,border-color,color,transform] cursor-pointer"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono text-white/60">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('works')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Projects <span className="tabular-nums">(7)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('craft-lab')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Tokens &amp; Styles
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('design-stash')}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-medium"
                >
                  Free Components <span className="tabular-nums">(106)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('philosophy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Principles
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Telemetry & Time */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">
              AVAILABILITY &amp; TIME
            </span>
            <div className="space-y-1.5 text-xs font-mono">
              <div className="flex items-center justify-between text-white/70">
                <span>STATUS:</span>
                <span className="text-emerald-400 font-semibold">AVAILABLE Q3 2026</span>
              </div>
              <div className="flex items-center justify-between text-white/50">
                <span>IST (LOCAL):</span>
                <span className="text-white tabular-nums">{time.ist}</span>
              </div>
              <div className="flex items-center justify-between text-white/50">
                <span>UTC CLOCK:</span>
                <span className="text-white tabular-nums">{time.utc}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[10.5px] font-mono text-white/40">
          <div className="flex items-center gap-2">
            <span className="tabular-nums">© {currentYear} Vutikuri Shanmukha.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>DESIGNED WITH SUB-PIXEL PRECISION</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer p-1"
              aria-label="Scroll to top of page"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
