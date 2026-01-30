
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle"; // Integration

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Code", href: "#github-vortex" },
  { label: "Career", href: "#career" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [activeHash, setActiveHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Determine active section
      // We look for the section that is currently most visible in viewport
      const sections = navItems.map(item => item.href.substring(1));

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within the top half of viewport, or if we scrolled past it but not too far
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveHash(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Offset for the floating header
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveHash(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        {/* The Cyber Capsule */}
        <div
          className={cn(
            "pointer-events-auto flex items-center p-2 rounded-full border transition-all duration-500 overflow-hidden relative",
            isScrolled
              ? "border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] scale-95"
              : "border-white/5 scale-100"
          )}
          style={{
            background: isScrolled
              ? 'linear-gradient(180deg, rgba(30, 30, 35, 0.8) 0%, rgba(10, 10, 12, 0.9) 100%)'
              : 'linear-gradient(180deg, rgba(30, 30, 35, 0.5) 0%, rgba(10, 10, 12, 0.6) 100%)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Top Sheen */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

          {/* Bottom Shadow */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/40 to-transparent" />

          {/* Brand - Visible mainly on mobile or distinct styling */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="px-4 py-2 font-black text-lg tracking-tighter text-white hover:text-primary transition-colors md:hidden relative z-10"
          >
            VS<span className="text-primary">.</span>
          </a>

          {/* Mobile Toggle */}
          <div className="md:hidden pr-2 relative z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-white/10 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 relative z-10">
            {navItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-bold tracking-wide rounded-full transition-colors duration-300",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-6 bg-white/10 mx-3 relative z-10" />

          {/* Theme Toggle - Integrated */}
          <div className="hidden md:block relative z-10">
            <ThemeToggle />
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-black/80 md:hidden flex flex-col items-center justify-center p-4"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-6 w-full max-w-sm"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                  className={cn(
                    "text-3xl font-black tracking-tight w-full text-center py-2 border-b border-white/5",
                    activeHash === item.href ? "text-primary border-primary/50" : "text-gray-400"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="mt-8">
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
