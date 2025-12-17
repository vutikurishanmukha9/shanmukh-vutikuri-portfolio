import { useState, useEffect } from 'react';
import { Menu, ChevronUp, Home, User, Wrench, Briefcase, FolderKanban, Award, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileNavDrawer } from '@/components/MobileNavDrawer';

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
              type="button"
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
                  type="button"
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
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2 text-muted-foreground hover:text-primary active:scale-90 transition-all glass rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

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
