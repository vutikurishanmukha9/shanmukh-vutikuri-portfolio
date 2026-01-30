
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax Effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const rotate = useTransform(scrollY, [0, 500], [0, 5]);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    stiffness: 100,
    damping: 30
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    stiffness: 100,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Massive Hollow Background Text */}
      <motion.div
        style={{ y: y1, opacity: 0.2 }}
        className="absolute top-[10%] left-0 w-full select-none z-0 pointer-events-none"
      >
        <h1 className="text-massive text-hollow text-center whitespace-nowrap leading-none opacity-20 transform -rotate-2">
          ENGINEER
        </h1>
      </motion.div>

      <motion.div
        style={{ y: y2, opacity: 0.1 }}
        className="absolute bottom-[10%] right-0 w-full select-none z-0 pointer-events-none"
      >
        <h1 className="text-massive text-hollow text-center whitespace-nowrap leading-none opacity-20 transform rotate-2">
          CREATOR
        </h1>
      </motion.div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="space-y-8"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium tracking-widest text-primary">PORTFOLIO 2025</span>
              </motion.div>

              {/* Radical Name Layout */}
              <div className="relative z-20">
                <h1 className="text-[2.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[8rem] font-black leading-[0.85] tracking-tighter mix-blend-difference">
                  VUTIKURI
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient-x">
                    SHANMUKHA
                  </span>
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed backdrop-blur-sm border-l-4 border-primary/50 pl-6">
              I craft <span className="text-primary font-bold">digital experiences</span> that merge technical precision with artistic fluidity.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto rounded-full px-6 sm:px-8 h-14 text-base bg-primary hover:bg-primary/80 text-background font-bold shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]"
                >
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </MagneticButton>

              <div className="flex bg-card/30 backdrop-blur-md rounded-full p-1 border border-primary/20">
                <MagneticButton>
                  <a href="https://github.com/vutikurishanmukha" target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/20 hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="https://linkedin.com/in/vutikurishanmukha" target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/20 hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="mailto:contact@example.com">
                    <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 hover:bg-primary/20 hover:text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Image Hologram */}
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, rotate }}
            className="relative block perspective-1000 mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[320px] h-[400px] lg:max-w-[500px] lg:h-[600px] mx-auto group">
              {/* Holographic Border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/30 z-20 group-hover:border-primary/60 transition-colors duration-500" />
              <div className="absolute inset-4 rounded-3xl border border-primary/10 z-20" />

              {/* Glow Behind */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />

              {/* Image Container with Glitch Effect */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card">
                <img
                  src="/hero-portrait.png"
                  alt="Shanmukh Vutikuri"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                />

                {/* Glitch Overlay Layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating UI Elements */}
              <motion.div
                style={{ x: useTransform(x, [-0.5, 0.5], [-20, 20]), y: useTransform(y, [-0.5, 0.5], [-20, 20]) }}
                className="absolute -right-8 top-20 glass p-4 rounded-xl z-30 hidden md:flex items-center gap-3 shadow-2xl shadow-primary/20 border border-primary/20"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="font-mono text-xs font-bold tracking-widest text-primary">SYSTEM ONLINE</span>
              </motion.div>

              <motion.div
                style={{ x: useTransform(x, [-0.5, 0.5], [20, -20]), y: useTransform(y, [-0.5, 0.5], [20, -20]) }}
                className="absolute -left-8 bottom-32 glass p-4 rounded-xl z-30 hidden md:flex shadow-2xl shadow-primary/20 border border-primary/20"
              >
                <div className="space-y-2">
                  <div className="h-1.5 w-24 bg-primary/50 rounded-full" />
                  <div className="h-1.5 w-16 bg-primary/30 rounded-full" />
                  <div className="h-1.5 w-20 bg-primary/40 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs font-mono tracking-[0.3em] text-primary/80">INITIALIZE</span>
          <ChevronDown className="animate-bounce text-primary w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};