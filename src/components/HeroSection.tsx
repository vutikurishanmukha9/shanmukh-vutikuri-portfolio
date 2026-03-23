import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-10">
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-elevated mb-4 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-foreground">Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black font-display tracking-tighter text-foreground leading-[1.1]"
          >
            Vutikuri <br className="md:hidden" />
            <span className="text-muted-foreground">Shanmukha</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            Software Engineer specializing in building exceptional digital experiences. I focus on clean code, intuitive design, and scalable architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 pt-8 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto rounded-full px-10 h-14 text-base bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-lg hover-lift-minimal transition-all"
            >
              View My Work
            </Button>
            
            <div className="flex gap-4 items-center">
              <a href="https://github.com/vutikurishanmukha" target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/vutikurishanmukha" target="_blank" rel="noreferrer" className="p-3 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:vutikurishanmukh17@gmail.com" className="p-3 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

        </div>
        
        {/* Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 text-muted-foreground hover:text-foreground transition-colors"
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-medium tracking-[0.2em] uppercase">Scroll to explore</span>
          <ChevronDown className="animate-bounce w-5 h-5 mt-1 text-primary/70" />
        </motion.div>
      </div>
    </section>
  );
};