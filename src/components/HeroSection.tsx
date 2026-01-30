import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
// import { MotionButton } from '@/components/ui/motion-button'; // Removed in favor of MagneticButton or standard motion.button
import { MagneticButton } from '@/components/ui/magnetic-button';
import { Github, Linkedin, Mail, ExternalLink, Download, ArrowRight, ChevronDown, Loader2 } from 'lucide-react';
import { ParticlesBackground } from '@/components/ParticlesBackground';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const heroPhoto = '/images/hero-photo.png';

export const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isResumeLoading, setIsResumeLoading] = useState(false);
  const titles = ['Software Engineer', 'Data Analyst', 'Cloud Engineer', 'AI/ML Engineer', 'IoT Engineer', 'Applied AI Engineer'];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Move Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouseX.set(x);
    mouseY.set(y);
  };

  const xSpring = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const ySpring = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(ySpring, [0, 1], [10, -10]);
  const rotateY = useTransform(xSpring, [0, 1], [-10, 10]);


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
    window.open('https://drive.google.com/file/d/1ghslaZ6k533wyCvs8YkAs2bfd-uHPcAB/view?usp=drive_link', '_blank');

    // Reset loading state after 2 seconds
    setTimeout(() => {
      setIsResumeLoading(false);
    }, 2000);
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative hero-gradient overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <ParticlesBackground />

      {/* Background Ambience */}
      <motion.div
        className="absolute inset-0 bg-noise opacity-[0.03] z-0 pointer-events-none"
      />

      {/* Giant Scrolling Text */}
      <div className="absolute top-1/3 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none">
        <motion.div
          className="whitespace-nowrap text-[12rem] font-bold text-foreground/20 font-display leading-none"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          INNOVATE CREATE BUILD DEPLOY SCALE INNOVATE CREATE BUILD DEPLOY SCALE
        </motion.div>
      </div>


      {/* Main Grid Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text Content */}
          <motion.div
            style={{ y, opacity }}
            className={`text-center lg:text-left space-y-8 z-20`}
          >
            <div className="space-y-6">

              {/* Status Badge with Stagger */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 glow-border-animate w-fit mx-auto lg:mx-0"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm text-muted-foreground font-medium tracking-wide">Available for Work</span>
              </motion.div>

              {/* Main Headline */}
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-[1.1] tracking-tight">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "circOut", delay: 0.3 }}
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                      Vutikuri
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "circOut", delay: 0.5 }}
                    className="relative"
                  >
                    <span className="text-gradient-animate lg:text-[1.1em] block -mt-2 lg:-mt-4 relative z-10">
                      Shanmukha
                    </span>
                    <span className="text-stroke absolute top-0 left-0 -z-10 blur-sm opacity-50 select-none" aria-hidden="true">
                      Shanmukha
                    </span>
                  </motion.div>
                </h1>
              </div>

              {/* Typing Effect Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="h-12 flex items-center justify-center lg:justify-start"
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
                  I'm a{' '}
                  <span className="text-primary font-semibold typing relative">
                    {titles[currentTitle]}
                  </span>
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
              >
                Building intelligent solutions through <span className="text-foreground font-medium">AI</span>, <span className="text-foreground font-medium">Cloud Computing</span>, and <span className="text-foreground font-medium">Data Analytics</span>.
                Transforming complex problems into elegant, scalable solutions.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social) => (
                <MagneticButton key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 glass rounded-xl block border border-white/5 hover:border-primary/50 transition-all duration-300"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                </MagneticButton>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <MagneticButton>
                <Button
                  className="btn-glow group px-8 py-7 text-base rounded-full text-foreground font-semibold relative overflow-hidden"
                  onClick={handleResumeClick}
                  disabled={isResumeLoading}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                  {isResumeLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin relative z-10" />
                      <span className="relative z-10">Opening...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 mr-2 group-hover:animate-bounce relative z-10" />
                      <span className="relative z-10">View Resume</span>
                    </>
                  )}
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="outline"
                  className="px-8 py-7 text-base rounded-full border-muted hover:border-primary/50 hover:bg-primary/5 group transition-all duration-500"
                  onClick={() => scrollToSection('#projects')}
                >
                  View Projects
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Hero Image / 3D Element */}
          <motion.div
            style={{ x: useTransform(mouseX, [0, 1], [15, -15]), y: useTransform(mouseY, [0, 1], [15, -15]), rotateX, rotateY }}
            className="flex justify-center lg:justify-end relative perspective-1000"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="relative z-10"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-[3rem] blur-3xl opacity-40 animate-pulse-slow pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] rounded-[2rem] p-2 glass-strong transform-style-3d group">

                {/* Inner Border/Container */}
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10 pointer-events-none" />
                  <img
                    src={heroPhoto}
                    alt="Vutikuri Shanmukha"
                    className="w-full h-full object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out grayscale-[20%] group-hover:grayscale-0"
                  />
                </div>

                {/* Floating Badge 1 */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl glass flex items-center justify-center shadow-glow backdrop-blur-xl border border-white/10 z-20"
                >
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-white drop-shadow-sm">AI</span>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 rounded-xl glass flex items-center justify-center shadow-glow backdrop-blur-xl border border-white/10 z-20"
                >
                  <span className="text-xl font-bold text-white">ML</span>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-medium">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-primary/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};