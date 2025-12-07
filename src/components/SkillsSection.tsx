import { useEffect, useState, useRef } from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Cpu } from 'lucide-react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'SQL'],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      skills: ['AWS', 'Docker', 'Git', 'Linux'],
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      skills: ['Pandas', 'NumPy', 'Tableau', 'Power BI', 'Excel'],
    },
    {
      title: 'IoT & Hardware',
      icon: Cpu,
      color: 'from-orange-500 to-red-500',
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
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            What I do best
          </span>
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
              className={`group glass card-shine rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${isVisible ? 'slide-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-display">
                  {category.title}
                </h3>
              </div>

              {/* Skills as tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag px-3 py-2 glass rounded-lg text-sm font-medium text-foreground hover:border-primary/30 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};