import { useEffect, useState } from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Calculator, PieChart, BarChart4, Cpu, Microchip, Radio, Wifi, Code2, Globe, Package, GitBranch, Terminal, Eye } from 'lucide-react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95, icon: Code },
        { name: 'SQL', level: 90, icon: Database },
        { name: 'JavaScript', level: 85, icon: Code2 },
        { name: 'HTML/CSS', level: 88, icon: Globe },
      ],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85, icon: Brain },
        { name: 'PyTorch', level: 80, icon: Brain },
        { name: 'Scikit-learn', level: 90, icon: BarChart3 },
        { name: 'OpenCV', level: 75, icon: Eye },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 88, icon: Cloud },
        { name: 'Docker', level: 75, icon: Package },
        { name: 'Git', level: 92, icon: GitBranch },
        { name: 'Linux', level: 80, icon: Terminal },
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        { name: 'Pandas', level: 92, icon: BarChart3 },
        { name: 'NumPy', level: 90, icon: Calculator },
        { name: 'Tableau', level: 85, icon: PieChart },
        { name: 'Power BI', level: 80, icon: BarChart4 },
      ],
    },
    {
      title: 'IoT & Hardware',
      skills: [
        { name: 'Arduino', level: 85, icon: Cpu },
        { name: 'Raspberry Pi', level: 80, icon: Microchip },
        { name: 'Sensor Integration', level: 88, icon: Radio },
        { name: 'MQTT', level: 75, icon: Wifi },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI, cloud computing, and data analytics
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};