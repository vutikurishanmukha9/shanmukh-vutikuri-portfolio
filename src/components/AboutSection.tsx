import { useRef } from 'react';
import { Brain, Layers, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const philosophyCards = [
    {
      icon: Brain,
      title: 'Applied AI',
      description: 'Building intelligent systems that solve real problems, moving beyond prototypes into production.',
    },
    {
      icon: Layers,
      title: 'Systems & Architecture',
      description: 'Designing clean, scalable backend architectures that can grow seamlessly with user demand.',
    },
    {
      icon: Rocket,
      title: 'Ship-First Mindset',
      description: 'Focusing on delivering tangible value quickly while maintaining engineering rigor and quality.',
    },
  ];

  return (
    <SectionWrapper id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Introduction</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
          >
            Engineering Philosophy
          </motion.h2>
        </div>

        {/* Philosophy Cards - Clean Bento Style */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {philosophyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 hover-lift-minimal group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-display">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light"
          >
            <p>
              I am an <strong className="text-foreground font-medium">Applied AI and Cloud Engineer</strong> with a background in Electronics & Communication Engineering. Although I am relatively early in my career, I have already developed and deployed <strong className="text-foreground font-medium">5+ production-grade projects</strong> ranging from AI-driven trading analysis to scalable backend infrastructure.
            </p>

            <p>
              I have hands-on experience with Python, FastAPI, AWS, and state-of-the-art AI technologies such as computer vision, NLP, and RAG systems. I don't just develop proof-of-concepts – projects such as <span className="text-foreground font-medium">Candle-Light</span> (AI pattern recognition) and <span className="text-foreground font-medium">HeartOut</span> (secure backend design) are actually deployed and up and running.
            </p>

            <p>
              As an <span className="text-foreground font-medium">IEEE peer-reviewed published researcher</span> in IoT-enabled smart systems, I possess both the engineering discipline and the problem-solving skills to bring to each project. I am currently investigating the convergence of AI Trading Systems and RAG Pipelines.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
