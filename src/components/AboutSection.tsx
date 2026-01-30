import { useRef } from 'react';
import { Brain, Layers, Rocket, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const philosophyCards = [
    {
      icon: Brain,
      title: 'Applied AI',
      description: 'Building intelligent systems that solve real problems',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Layers,
      title: 'Systems Thinking',
      description: 'Designing scalable backend architectures',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Rocket,
      title: 'Ship-First Mindset',
      description: 'From concept to production, not just prototypes',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <SectionWrapper id="about" className="py-20 lg:py-28">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4"
          >
            Engineering Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold font-display mb-4"
          >
            How I <span className="text-gradient">Think</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto perspective-1000">
          {philosophyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: 20, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 50 }}
                whileHover={{ y: -10, rotateX: 5, zIndex: 10 }}
                className="group glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-black/20`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Currently Exploring Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-colors shadow-glow-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Currently exploring: <span className="text-primary font-bold">AI Trading Systems & RAG Pipelines</span></span>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-6 text-left"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an <span className="text-primary font-semibold relative inline-block">
                Applied AI and Cloud Engineer
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/30"></span>
              </span> with a foundation in Electronics & Communication Engineering. While I'm early in my career, I've already built and shipped <span className="text-foreground font-semibold">10+ production-ready projects</span> — from AI-powered trading analysis to scalable backend platforms.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My hands-on experience spans <span className="text-foreground font-medium">Python, FastAPI, AWS, and modern AI frameworks</span> including computer vision, NLP, and RAG systems. I don't just build demos — projects like <span className="text-primary font-semibold">Candle-Light</span> (AI pattern recognition) and <span className="text-primary font-semibold">HeartOut</span> (secure backend architecture) are deployed and running.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              As an <span className="text-secondary font-semibold">IEEE peer-reviewed published researcher</span> in IoT-driven smart systems, I bring both engineering rigor and practical problem-solving to every project.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm seeking opportunities where I can <span className="text-primary font-bold">build, scale, and ship intelligent systems</span> that solve real problems — ready to contribute from day one.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
