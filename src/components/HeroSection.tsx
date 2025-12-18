import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight, ChevronDown, Loader2 } from 'lucide-react';
import { ParticlesBackground } from '@/components/ParticlesBackground';

const heroPhoto = '/images/hero-photo.png';

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isResumeLoading, setIsResumeLoading] = useState(false);
  const titles = ['Software Engineer', 'Data Analyst', 'Cloud Engineer', 'AI/ML Engineer', 'IoT Engineer', 'Research Engineer'];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/vutikurishanmukha9', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/shanmukha-vutikuri', icon: Linkedin },
    { name: 'Email', url: 'mailto:vutikurishanmukh17@gmail.com', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    setIsResumeLoading(true);

    // Analytics tracking for resume downloads
    if (typeof window !== 'undefined') {
      // Track with Google Analytics if available
      if ((window as any).gtag) {
        (window as any).gtag('event', 'resume_download', {
          event_category: 'engagement',
          event_label: 'Resume View',
          value: 1
        });
      }
      // Console log for development/debugging
      console.log('[Analytics] Resume viewed at:', new Date().toISOString());
    }

    // Open in new tab
    window.open('https://drive.google.com/file/d/16x2kGp4mp_g5qFjJPlF4XXhUyDOA1e10/view?usp=sharing', '_blank');

    // Reset loading state after 2 seconds
    setTimeout(() => {
      setIsResumeLoading(false);
    }, 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient overflow-hidden">
      <ParticlesBackground />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left space-y-8 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
            <div className="space-y-6">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm text-muted-foreground">Open to opportunities</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-tight">
                <span className="block text-foreground">Vutikuri</span>
                <span className="block text-gradient-animate">Shanmukha</span>
              </h1>

              <div className="h-12 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                  I'm a{' '}
                  <span className="text-primary font-semibold typing">
                    {titles[currentTitle]}
                  </span>
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Building intelligent solutions through AI, cloud computing, and data analytics.
                Transforming complex problems into elegant, scalable solutions.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 glass rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="btn-glow group px-8 py-6 text-base"
                onClick={handleResumeClick}
                disabled={isResumeLoading}
              >
                {isResumeLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Opening...
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                    View Resume
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                className="px-8 py-6 text-base border-muted hover:border-primary/50 hover:bg-primary/5 group"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className={`flex justify-center lg:justify-end ${isLoaded ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl opacity-50 animate-pulse" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden gradient-border group">
                <img
                  src={heroPhoto}
                  alt="Vutikuri Shanmukha"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl glass flex items-center justify-center floating">
                <span className="text-2xl font-bold text-gradient">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl glass flex items-center justify-center floating" style={{ animationDelay: '1s' }}>
                <span className="text-lg font-bold text-gradient">ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};