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
    <footer className="relative overflow-hidden">
      {/* Gradient border top */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="glass-strong">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-gradient">Vutikuri Shanmukha</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Building intelligent solutions through AI, cloud computing, and data analytics.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2.5 glass rounded-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground font-display">
                Quick Links
              </h4>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground font-display">
                Get In Touch
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="hover:text-primary transition-colors">
                  <a href="mailto:vutikurishanmukh17@gmail.com">vutikurishanmukh17@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground text-center md:text-left">
              <p>© {currentYear} Vutikuri Shanmukha. All rights reserved.</p>
              <span className="hidden sm:inline text-border">•</span>
              <p className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Updated: {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 glass rounded-lg text-xs text-muted-foreground">
                <span>Built with</span>
                <span className="text-primary font-medium">React</span>
                <span>+</span>
                <span className="text-primary font-medium">Tailwind</span>
                <span>+</span>
                <span className="text-primary font-medium">Vite</span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="glass hover:border-primary/30 group"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};