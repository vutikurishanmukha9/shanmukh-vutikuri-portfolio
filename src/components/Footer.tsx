import { Github, Linkedin, Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: 'Home',
    href: '#home'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Skills',
    href: '#skills'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const socialLinks = [{
    name: 'GitHub',
    url: 'https://github.com/vutikurishanmukha9',
    icon: Github
  }, {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shanmukha-vutikuri',
    icon: Linkedin
  }, {
    name: 'Email',
    url: 'mailto:vutikurishanmukh17@gmail.com',
    icon: Mail
  }, {
    name: 'Codolio',
    url: 'https://codolio.com/profile/Shanmukh1122',
    icon: ExternalLink
  }];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Vutikuri Shanmukha</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building intelligent solutions through AI, cloud computing, and data analytics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-background/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-lg transition-all duration-300 group">
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => <button key={index} onClick={() => scrollToSection(link.href)} className="block text-muted-foreground hover:text-primary transition-colors duration-300">
                  {link.label}
                </button>)}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>vutikurishanmukh17@gmail.com</p>
              <p>+91-8978467769</p>
              <p>Rajahmundry, AP, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} Vutikuri Shanmukha. All rights reserved.
          </p>
          
          <Button variant="ghost" size="icon" onClick={scrollToTop} className="mt-4 md:mt-0 hover:bg-primary/10 hover:text-primary">
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>;
};