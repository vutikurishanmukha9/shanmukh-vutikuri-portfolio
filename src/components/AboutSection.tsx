import { useEffect, useState, useRef } from 'react';
import { Brain, Layers, Rocket, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} id="about" className="py-10 lg:py-14 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Engineering Philosophy
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            How I <span className="text-gradient">Think</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Philosophy Cards */}
        <div className={`grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          {philosophyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Currently Exploring Badge */}
          <div className={`flex justify-center mb-8 ${isVisible ? 'slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Currently exploring: <span className="text-primary">AI Trading Systems & RAG Pipelines</span></span>
            </div>
          </div>

          {/* Bio Content - Enhanced for fresher perspective */}
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an <span className="text-primary font-semibold">Applied AI and Cloud Engineer</span> with a foundation in Electronics & Communication Engineering. While I'm early in my career, I've already built and shipped <span className="text-primary font-semibold">10+ production-ready projects</span> — from AI-powered trading analysis to scalable backend platforms.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My hands-on experience spans <span className="text-primary font-semibold">Python, FastAPI, AWS, and modern AI frameworks</span> including computer vision, NLP, and RAG systems. I don't just build demos — projects like <span className="text-primary font-semibold">Candle-Light</span> (AI pattern recognition) and <span className="text-primary font-semibold">HeartOut</span> (secure backend architecture) are deployed and running.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              As an <span className="text-primary font-semibold">IEEE peer-reviewed published researcher</span> in IoT-driven smart systems, I bring both engineering rigor and practical problem-solving to every project.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm seeking opportunities where I can <span className="text-primary font-semibold">build, scale, and ship intelligent systems</span> that solve real problems — ready to contribute from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
