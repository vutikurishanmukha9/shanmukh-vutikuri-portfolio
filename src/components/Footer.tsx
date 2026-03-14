import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vutikurishanmukha9', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shanmukha-vutikuri', icon: Linkedin },
    { name: 'Email', url: 'mailto:vutikurishanmukh17@gmail.com', icon: Mail },
    { name: 'LeetCode', url: 'https://leetcode.com/u/vutikurishanmukh9/', icon: ExternalLink },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display tracking-tight text-foreground">Vutikuri Shanmukha</h3>
            <p className="text-muted-foreground leading-relaxed text-sm max-w-xs">
              Building intelligent solutions through AI, cloud computing, and elegant software design.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-lift-minimal"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:ml-auto">
            <h4 className="text-lg font-semibold text-foreground font-display">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:ml-auto">
            <h4 className="text-lg font-semibold text-foreground font-display">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:vutikurishanmukh17@gmail.com" className="hover:text-foreground transition-colors">
                vutikurishanmukh17@gmail.com
              </a>
              <p>Available for new opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Vutikuri Shanmukha. All rights reserved.</p>
            <span className="hidden sm:inline text-border">•</span>
            <p className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Maintained Constantly
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-xs text-muted-foreground">
              <span>Built with React + Vite</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="rounded-full hover-lift-minimal bg-background"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};