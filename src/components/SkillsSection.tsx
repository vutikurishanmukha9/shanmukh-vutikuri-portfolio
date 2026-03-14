import { useState } from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Cpu, Palette, Hammer, Shield, ChevronRight } from 'lucide-react';
import { useSkillFilter } from '@/context/SkillFilterContext';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { cn } from '@/lib/utils';

const pipelineStages = [
  { id: 'ingest', label: 'Ingest', icon: Database },
  { id: 'process', label: 'Process', icon: Cpu },
  { id: 'store', label: 'Store', icon: Cloud },
  { id: 'analyze', label: 'Analyze', icon: BarChart3 },
  { id: 'visualize', label: 'Visualize', icon: Palette },
];

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C', 'C++', 'Java', 'TypeScript'],
    icon: Code,
    stage: 'process',
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    icon: Cloud,
    stage: 'store',
  },
  {
    title: 'Data & AI',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    icon: Brain,
    stage: 'analyze',
  },
  {
    title: 'Web Technologies',
    skills: ['React', 'Node.js', 'FastAPI', 'Next.js', 'HTML/CSS'],
    icon: Palette,
    stage: 'visualize',
  },
  {
    title: 'Core Engineering',
    skills: ['System Design', 'Algorithms', 'Data Structures', 'IoT', 'Embedded Systems'],
    icon: Hammer,
    stage: 'ingest',
  },
  {
    title: 'Tools & Ecosystem',
    skills: ['Git', 'Linux', 'Vite', 'Postman', 'Figma'],
    icon: Shield,
    stage: 'process',
  },
];

export const SkillsSection = () => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const { selectedSkill, setSelectedSkill } = useSkillFilter();

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
    if (selectedSkill !== skill) {
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const filteredCategories = selectedStage
    ? skillCategories.filter(cat => cat.stage === selectedStage)
    : skillCategories;

  return (
    <SectionWrapper id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Expertise</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Technologies I use to bring ideas to life. Select a skill to filter projects.
          </motion.p>
        </div>

        {/* Pipeline Filters */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto"
        >
          {pipelineStages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = selectedStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(isSelected ? null : stage.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-medium",
                  isSelected 
                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                    : "glass-panel hover:bg-muted text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <Icon className={cn("w-4 h-4", isSelected ? "text-primary-foreground" : "text-primary")} />
                {stage.label}
              </button>
            );
          })}
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={category.title} 
                  className="glass-panel p-8 hover-lift-minimal flex flex-col h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground font-display">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => {
                      const isSkillSelected = selectedSkill === skill;
                      return (
                        <button
                          key={skill}
                          onClick={() => handleSkillClick(skill)}
                          className={cn(
                            "px-4 py-2 rounded-full text-xs font-medium border transition-colors duration-300",
                            isSkillSelected
                              ? "bg-primary text-primary-foreground border-primary shadow-sm scale-105"
                              : "bg-background/50 text-muted-foreground border-border/50 hover:border-primary/50 hover:text-foreground"
                          )}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </SectionWrapper>
  );
};