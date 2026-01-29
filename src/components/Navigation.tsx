import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Home, User, Wrench, Briefcase, FolderKanban, Award, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileNavDrawer } from '@/components/MobileNavDrawer';
import { MobileHeader } from '@/components/MobileHeader';

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
    { href: '#certifications', label: 'Certs', icon: Award },
    { href: '#publications', label: 'Papers', icon: FileText },
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
      {/* Desktop Navigation - Document flow, centered */}
      <div className="hidden md:flex justify-center py-2.5 w-full">
        {/* Gradient border wrapper */}
        <div className="relative">
          {/* Outer glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-full blur-sm opacity-60" />

          {/* Gradient border */}
          <div className="relative p-[1px] rounded-full bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30">
            {/* Inner pill container */}
            <nav className="relative flex items-center gap-1 px-3 py-2 rounded-full bg-background/95 backdrop-blur-xl border border-border/30">
              {/* Navigation Links */}
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-300
                      ${isActive
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Active indicator with layout animation */}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}

              {/* Divider */}
              <div className="w-px h-6 bg-border/50 mx-1" />

              {/* Theme Toggle */}
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Header - shown only on mobile */}
      <MobileHeader
        onMenuOpen={() => setIsOpen(true)}
        onLogoClick={() => scrollToSection('#home')}
        scrolled={scrolled}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Back to Top Button - This can stay fixed */}
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
