import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Home, User, Wrench, Briefcase, FolderKanban, Award, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Wrench },
    { href: '#career', label: 'Career', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: FolderKanban },
    { href: '#certifications', label: 'Certifications', icon: Award },
    { href: '#publications', label: 'Publications', icon: FileText },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowBackToTop(scrollTop > 400);
      setScrolled(scrollTop > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg shadow-background/50' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold font-display text-gradient-animate hover:scale-105 active:scale-95 transition-transform"
            >
              Shanmukha
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg active:scale-95 ${activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button + Theme Toggle */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-muted-foreground hover:text-primary active:scale-90 transition-all glass rounded-lg"
                aria-label="Toggle menu"
              >
                <Menu className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-In Drawer */}
      {/* Only render on mobile - use conditional rendering to prevent flash */}
      <div className="md:hidden">
        {/* Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] transition-opacity duration-300"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(false);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setIsOpen(false);
            }}
            aria-hidden="true"
          />
        )}

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] max-w-[80vw] glass-strong z-[70] transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          aria-hidden={!isOpen}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/50">
            <span className="text-lg font-bold font-display text-gradient">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-muted-foreground hover:text-primary active:scale-90 transition-all rounded-lg hover:bg-muted/50"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="p-4 overflow-y-auto h-[calc(100%-80px)]">
            <nav className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);

                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 active:scale-95 ${isActive
                      ? 'text-primary bg-primary/10 border border-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen ? 'slideInFromRight 0.3s ease forwards' : 'none',
                    }}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : ''}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Social Links in Drawer */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 px-4">Connect</p>
              <div className="flex gap-2 px-4">
                <a
                  href="https://github.com/vutikurishanmukha9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-lg hover:border-primary/30 active:scale-90 transition-all"
                >
                  <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/shanmukha-vutikuri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 glass rounded-lg hover:border-primary/30 active:scale-90 transition-all"
                >
                  <svg className="h-4 w-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:vutikurishanmukh17@gmail.com"
                  className="p-2.5 glass rounded-lg hover:border-primary/30 active:scale-90 transition-all"
                >
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full btn-glow active:scale-90 transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        size="icon"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </>
  );
};