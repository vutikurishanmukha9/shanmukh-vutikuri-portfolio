import { useEffect, useState, useRef } from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Cpu, Zap } from 'lucide-react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
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
            Comprehensive expertise across AI, cloud computing, and data analytics
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
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

              {/* Skills as interactive tags */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default
                      ${hoveredSkill === `${categoryIndex}-${skillIndex}`
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                        : 'glass text-foreground hover:text-primary border border-transparent hover:border-primary/20'
                      }`}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${category.color} opacity-5 rounded-tl-full pointer-events-none group-hover:opacity-10 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Skills count summary */}
        <div className={`text-center mt-12 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-4 px-6 py-3 glass rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-bold">{skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+</span> Technical Skills
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-bold">{skillCategories.length}</span> Domains
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};