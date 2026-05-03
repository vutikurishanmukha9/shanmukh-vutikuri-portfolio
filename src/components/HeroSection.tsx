import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-36 pb-14">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-muted/60 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid min-h-[calc(100vh-10rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-4xl space-y-8 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-2 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-foreground">Available for software, AI, cloud, and data roles</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl font-black tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-[6.5rem] lg:leading-[0.98]"
            >
              Vutikuri <br />
              <span className="text-gradient">Shanmukha</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-xl leading-8 text-muted-foreground md:text-2xl lg:mx-0"
          >
            I build production-minded AI, cloud, and data products with clean interfaces, scalable backends, and measurable user value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="grid grid-cols-3 gap-3 rounded-3xl border border-border bg-card/75 p-3 shadow-sm backdrop-blur-xl sm:max-w-xl lg:max-w-2xl"
          >
            {[
              ['10+', 'Products'],
              ['6', 'Live demos'],
              ['IEEE', 'Published'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-background/80 px-4 py-4 text-center">
                <div className="text-2xl font-black text-foreground md:text-3xl">{value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-muted-foreground md:text-xs">{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex w-full flex-col items-center gap-5 pt-2 sm:w-auto sm:flex-row lg:items-start"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 w-full rounded-full bg-foreground px-9 text-base font-bold text-background shadow-lg transition-all hover:bg-foreground/90 sm:w-auto"
              >
                View Product Work
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-14 w-full rounded-full bg-background px-9 text-base font-bold sm:w-auto"
              >
                Contact Me
              </Button>
            </motion.div>
            
            <div className="flex items-center gap-3">
              <motion.a 
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://github.com/vutikurishanmukha9" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://linkedin.com/in/shanmukha-vutikuri" 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a 
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="mailto:vutikurishanmukh17@gmail.com" 
                className="p-3 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </motion.div>

        </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-emerald-400/10 to-amber-300/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/85 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-muted">
                <img
                  src="/hero-portrait.png"
                  alt="Vutikuri Shanmukha"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/55 to-transparent p-5 pt-24">
                  <div className="flex items-center gap-2 rounded-2xl border border-border bg-card/85 p-3 backdrop-blur-xl">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-bold text-foreground">Product-minded engineer</p>
                      <p className="text-xs text-muted-foreground">AI systems, cloud platforms, and clean web apps</p>
                    </div>
                  </div>
                </div>
              </div>
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
