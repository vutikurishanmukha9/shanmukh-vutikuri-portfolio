import { useEffect, useState, useRef } from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Cpu, Zap, Palette, Hammer, Shield, Rocket, TrendingUp, ChevronRight } from 'lucide-react';
import { useSkillFilter } from '@/context/SkillFilterContext';

// Pipeline stages with associated skills
const pipelineStages = [
  {
    id: 'design',
    label: 'Design',
    subtitle: 'Architecture & API contracts',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    prominent: false,
    skills: ['System Architecture', 'System Design', 'REST API Design', 'Database', 'MongoDB', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'build',
    label: 'Build',
    subtitle: 'Core services & async logic',
    icon: Hammer,
    color: 'from-cyan-500 to-blue-500',
    prominent: true, // Execution stage
    skills: ['FastAPI', 'Python', 'TypeScript', 'JavaScript', 'Async Programming', 'TensorFlow', 'PyTorch'],
  },
  {
    id: 'secure',
    label: 'Secure',
    subtitle: 'Auth & trust boundaries',
    icon: Shield,
    color: 'from-amber-500 to-orange-500',
    prominent: false,
    skills: ['JWT Authentication', 'AWS', 'Git', 'Linux'],
  },
  {
    id: 'deploy',
    label: 'Deploy',
    subtitle: 'Containers, CI/CD, cloud infra',
    icon: Rocket,
    color: 'from-violet-500 to-purple-500',
    prominent: true, // Execution stage
    skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git'],
  },
  {
    id: 'optimize',
    label: 'Optimize',
    subtitle: 'Performance, cost, reliability',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-500',
    prominent: false,
    skills: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Scikit-learn'],
  },
];

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const { selectedSkill, setSelectedSkill } = useSkillFilter();

  const skillCategories = [
    {
      title: 'Backend & Systems',
      icon: Zap,
      color: 'from-violet-500 to-fuchsia-500',
      bgPattern: 'radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
      skills: ['FastAPI', 'REST API Design', 'JWT Authentication', 'Async Programming', 'System Architecture', 'System Design'],
    },
    {
      title: 'Programming',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
      skills: ['Python', 'SQL', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500',
      bgPattern: 'radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
      skills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-amber-500 to-orange-500',
      bgPattern: 'radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
      skills: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'],
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      bgPattern: 'radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)',
      skills: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Excel'],
    },
    {
      title: 'IoT & Hardware',
      icon: Cpu,
      color: 'from-rose-500 to-red-500',
      bgPattern: 'radial-gradient(circle at 50% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 50%)',
      skills: ['Arduino', 'Raspberry Pi', 'Sensors', 'MQTT'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSkillClick = (skill: string) => {
    // Set the selected skill and scroll to projects
    setSelectedSkill(skill);

    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter skill categories based on selected pipeline stage
  const getFilteredCategories = () => {
    if (!selectedStage) return skillCategories;

    const stageSkills = pipelineStages.find(s => s.id === selectedStage)?.skills || [];

    return skillCategories.filter(category =>
      category.skills.some(skill =>
        stageSkills.some(stageSkill =>
          skill.toLowerCase().includes(stageSkill.toLowerCase()) ||
          stageSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  };

  const filteredCategories = getFilteredCategories();

  return (
    <section ref={sectionRef} id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            <Zap className="h-4 w-4" />
            What I do best
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any skill to see related projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* How I Build Systems - Pipeline Strip */}
        <div className={`mb-12 ${isVisible ? 'blur-in stagger-2' : 'opacity-0'}`}>
          {/* Mindset tagline */}
          <p className="text-center text-xs text-muted-foreground/60 uppercase tracking-widest mb-3">
            End-to-end ownership mindset
          </p>
          <h3 className="text-center text-lg font-semibold text-foreground mb-2">
            How I Build Systems
          </h3>
          {/* Philosophy microcopy */}
          <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
            From architecture decisions to production optimization — every step is intentional.
          </p>

          {/* Desktop: Horizontal strip with arrows + feedback loop */}
          <div className="hidden md:flex flex-col items-center">
            <div
              ref={pipelineRef}
              className="flex items-center justify-center gap-1 relative"
            >
              {pipelineStages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = selectedStage === stage.id;

                return (
                  <div key={stage.id} className="flex items-center">
                    <button
                      onClick={() => setSelectedStage(isActive ? null : stage.id)}
                      className={`
                        flex flex-col items-center gap-1 px-4 py-3 rounded-xl
                        transition-all duration-200 group relative
                        ${stage.prominent ? 'scale-[1.03]' : ''}
                        ${isActive
                          ? `bg-gradient-to-r ${stage.color} text-white shadow-lg shadow-primary/20`
                          : `glass hover:border-primary/40 text-muted-foreground hover:text-foreground
                             ${stage.prominent ? 'border-primary/20' : ''}`
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        {/* Icon with accent dot */}
                        <span className="relative">
                          <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'group-hover:text-primary'} ${stage.prominent && !isActive ? 'text-primary/70' : ''}`} />
                          <span className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white/80' : 'bg-primary/60'}`} />
                        </span>
                        <span className={`font-medium text-sm ${stage.prominent && !isActive ? 'font-semibold' : ''}`}>{stage.label}</span>
                      </div>
                      {/* Subtitle - shows when active */}
                      {isActive && (
                        <span className="text-xs text-white/80 mt-0.5">{stage.subtitle}</span>
                      )}
                    </button>

                    {index < pipelineStages.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-muted-foreground/40 mx-0.5 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Feedback loop arrow - subtle curved arrow from Optimize back to Design */}
            <div className="relative w-full max-w-[600px] h-6 mt-2">
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 600 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M550 6 Q575 6 575 18 Q575 24 300 24 Q25 24 25 18 Q25 6 50 6"
                  stroke="url(#feedbackGradient)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="feedbackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
                {/* Arrow head pointing to Design */}
                <polygon points="45,3 50,6 45,9" fill="hsl(var(--primary))" opacity="0.4" />
              </svg>
              <span className="absolute left-1/2 -translate-x-1/2 top-2 text-[10px] text-muted-foreground/40 italic">iterate</span>
            </div>
          </div>

          {/* Mobile: Swipeable pills */}
          <div
            className="md:hidden overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center gap-3 w-max">
              {pipelineStages.map((stage) => {
                const Icon = stage.icon;
                const isActive = selectedStage === stage.id;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStage(isActive ? null : stage.id)}
                    className={`
                      flex flex-col items-center gap-1 px-4 py-2.5 rounded-full whitespace-nowrap
                      transition-all duration-300
                      ${stage.prominent ? 'ring-1 ring-primary/30' : ''}
                      ${isActive
                        ? `bg-gradient-to-r ${stage.color} text-white shadow-lg`
                        : 'glass text-muted-foreground'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="font-medium text-sm">{stage.label}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] text-white/80">{stage.subtitle}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active filter indicator with subtitle */}
          {selectedStage && (
            <div className="text-center mt-4">
              <span className="text-sm text-muted-foreground">
                Filtering by: <span className="text-primary font-semibold">{pipelineStages.find(s => s.id === selectedStage)?.label}</span>
              </span>
              <button
                onClick={() => setSelectedStage(null)}
                className="ml-3 text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                ✕ Clear
              </button>
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`group relative glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden ${isVisible ? 'slide-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Animated background pattern */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: category.bgPattern }}
              />

              {/* Gradient border glow on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${category.color} blur-xl`} />

              {/* Category Header */}
              <div className="relative flex items-center gap-4 mb-6">
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <category.icon className="h-7 w-7 text-white" />
                  {/* Icon glow */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} blur-md opacity-50 group-hover:opacity-70 transition-opacity`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground font-display group-hover:text-gradient transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
                </div>
              </div>

              {/* Skills as clickable interactive tags */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const isSelected = selectedSkill === skill;
                  const isHovered = hoveredSkill === `${categoryIndex}-${skillIndex}`;

                  return (
                    <button
                      key={skillIndex}
                      onClick={() => handleSkillClick(skill)}
                      className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer
                        ${isSelected
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105 ring-2 ring-white/30`
                          : isHovered
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                            : 'glass text-foreground hover:text-primary border border-transparent hover:border-primary/20'
                        }`}
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${category.color} opacity-5 rounded-tl-full pointer-events-none group-hover:opacity-10 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};