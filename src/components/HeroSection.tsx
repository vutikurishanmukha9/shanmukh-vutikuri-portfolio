import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight } from 'lucide-react';
const heroPhoto = '/lovable-uploads/9280c102-fa01-4f44-8cb2-47a6c6af1d71.png';

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Software Engineer', 'AI/ML Engineer', 'IoT Engineer', 'Research Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/vutikurishanmukha9',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shanmukha-vutikuri',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:vutikurishanmukh17@gmail.com',
      icon: Mail,
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/Shanmukh1122',
      icon: ExternalLink,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Vutikuri</span>
                <span className="block text-gradient">Shanmukha</span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                  I'm a{' '}
                  <span className="text-primary font-semibold typing">
                    {titles[currentTitle]}
                  </span>
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Building intelligent solutions through AI, cloud computing, and data analytics
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card/50 hover:bg-card border border-border hover:border-primary rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                >
                  <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://drive.google.com/file/d/16x2kGp4mp_g5qFjJPlF4XXhUyDOA1e10/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Resume
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="group"
              >
                View Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <img
                  src={heroPhoto}
                  alt="Vutikuri Shanmukha"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/30 rounded-full blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};