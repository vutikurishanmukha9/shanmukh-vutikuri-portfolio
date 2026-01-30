
import { useState, useRef } from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Cpu, Zap, Palette, Hammer, Shield, Rocket, TrendingUp, ChevronRight } from 'lucide-react';
import { useSkillFilter } from '@/context/SkillFilterContext';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

const pipelineStages = [
  { id: 'ingest', label: 'Ingest', icon: Database, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
  { id: 'process', label: 'Process', icon: Cpu, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
  { id: 'store', label: 'Store', icon: Cloud, color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
  { id: 'analyze', label: 'Analyze', icon: BarChart3, color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  { id: 'visualize', label: 'Visualize', icon: Palette, color: 'text-pink-400', bg: 'bg-pink-400/10', border: 'border-pink-400/20' },
];

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C', 'C++', 'Java'],
    icon: Code,
    stage: 'process',
    position: { top: '10%', left: '10%' }
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    icon: Cloud,
    stage: 'store',
    position: { top: '20%', right: '15%' }
  },
  {
    title: 'Data & AI',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    icon: Brain,
    stage: 'analyze',
    position: { bottom: '20%', left: '20%' }
  },
  {
    title: 'Web Technologies',
    skills: ['React', 'Node.js', 'FastAPI', 'HTML/CSS', 'JavaScript'],
    icon: Palette,
    stage: 'visualize',
    position: { bottom: '15%', right: '10%' }
  },
  {
    title: 'Core Engineering',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'IoT', 'Embedded Systems'],
    icon: Hammer,
    stage: 'ingest',
    position: { top: '50%', left: '50%' } // Center
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Linux', 'Jira', 'Postman', 'VS Code'],
    icon: Shield,
    stage: 'process',
    position: { top: '15%', left: '45%' }
  },
];

export const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const { selectedSkill, setSelectedSkill } = useSkillFilter();

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(selectedSkill === skill ? null : skill);
    // Scroll to projects if a skill is selected
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
    <SectionWrapper id="skills" className="py-20 lg:py-40 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Constellation Lines (Static for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-20">
          <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary" />
          <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-secondary" />
          <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-accent" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[4rem] lg:text-[6rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/20 uppercase tracking-tighter"
          >
            Capabilities
          </motion.h2>
        </div>

        {/* Interactive Pipeline Strip */}
        <motion.div
          className="flex overflow-x-auto pb-4 gap-2 md:gap-4 justify-start md:justify-center mb-20 hide-scrollbar"
        >
          {pipelineStages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = selectedStage === stage.id;

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(isSelected ? null : stage.id)}
                className={`
                  relative group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300
                  ${isSelected ? `${stage.bg} ${stage.border} ring-2 ring-primary/50` : 'glass border-white/5 hover:bg-white/5'}
                `}
              >
                <Icon className={`w-5 h-5 ${isSelected ? stage.color : 'text-muted-foreground group-hover:text-foreground'}`} />
                <span className={`text-sm font-medium whitespace-nowrap ${isSelected ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  {stage.label}
                </span>
                {isSelected && (
                  <motion.div layoutId="pipeline-active" className="absolute inset-0 rounded-full bg-primary/5 -z-10" />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Floating Orbs Layout - Desktop */}
        <div className="hidden lg:block relative w-full h-[600px]">
          {filteredCategories.map((category, index) => {
            const isCenter = category.title === 'Core Engineering';
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                className="absolute"
                style={category.position as any}
              >
                <div
                  className={`relative group cursor-pointer ${isCenter ? 'z-20' : 'z-10'}`}
                  onMouseEnter={() => setHoveredCategory(category.title)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Orb */}
                  <div className={`
                                rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500
                                ${isCenter ? 'w-48 h-48 bg-primary/10 border-primary/30' : 'w-32 h-32 glass hover:scale-125'}
                                ${selectedStage && category.stage !== selectedStage ? 'opacity-20 grayscale' : 'opacity-100'}
                            `}>
                    <div className="text-center p-2">
                      <category.icon className={`
                                        w-8 h-8 mx-auto mb-2 transition-colors duration-300
                                        ${isCenter ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}
                                    `} />
                      <div className={`
                                        font-bold leading-tight transition-colors duration-300
                                        ${isCenter ? 'text-lg text-white' : 'text-xs text-muted-foreground group-hover:text-white'}
                                    `}>
                        {category.title}
                      </div>
                    </div>
                  </div>

                  {/* Orbiting Skills (Visible on Hover or Center) */}
                  <AnimatePresence>
                    {(hoveredCategory === category.title || isCenter) && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {category.skills.map((skill, i) => {
                          const angle = (i / category.skills.length) * 2 * Math.PI;
                          const radius = isCenter ? 140 : 100;
                          const x = Math.cos(angle) * radius;
                          const y = Math.sin(angle) * radius;

                          return (
                            <motion.button
                              key={skill}
                              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                              animate={{ opacity: 1, x, y, scale: 1 }}
                              exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                              transition={{ delay: i * 0.05, type: "spring" }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSkillClick(skill);
                              }}
                              className={`
                                                        absolute w-auto px-3 py-1.5 rounded-full pointer-events-auto
                                                        flex items-center justify-center text-xs font-bold
                                                        border backdrop-blur-xl shadow-lg
                                                        ${selectedSkill === skill
                                  ? 'bg-primary text-black border-primary box-shadow-glow'
                                  : 'bg-black/80 text-white border-white/20 hover:border-primary hover:text-primary'}
                                                    `}
                            >
                              {skill}
                            </motion.button>
                          );
                        })}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fallback Grid Layout - Mobile/Tablet */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div key={category.title} className="glass rounded-3xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className={`
                                  px-3 py-1.5 rounded-full text-xs font-medium border transition-colors
                                  ${selectedSkill === skill
                        ? 'bg-primary text-black border-primary'
                        : 'bg-white/5 text-muted-foreground border-white/10 hover:border-primary/50'}
                                `}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};