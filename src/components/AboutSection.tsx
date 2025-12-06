import { useEffect, useState, useRef } from 'react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const highlights = [
    { number: '92', suffix: '%', label: 'AI Model Accuracy' },
    { number: '99.9', suffix: '%', label: 'AWS Uptime' },
    { number: '85', suffix: '%', label: 'Efficiency Improvement' },
    { number: '3', suffix: '+', label: 'Successful Projects' },
  ];

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

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className={`space-y-6 mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-primary font-semibold">B.Tech graduate in Electronics & Communication Engineering</span> with
              a passionate focus on artificial intelligence, cloud technologies, and data analytics.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-primary font-semibold">published researcher</span> in IoT-driven smart systems,
              I bring deep expertise in AWS deployments and the Python data ecosystem. My experience spans
              machine learning model development, cloud infrastructure optimization, and data-driven solution architecture.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am actively seeking opportunities to contribute to innovative teams where I can leverage my technical
              skills to build intelligent solutions that drive meaningful impact.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`group text-center p-6 glass rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 ${isVisible ? 'slide-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-gradient font-display mb-2">
                  <AnimatedNumber value={parseFloat(highlight.number)} visible={isVisible} />
                  {highlight.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {highlight.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Animated number component
const AnimatedNumber = ({ value, visible }: { value: number; visible: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(increment * step, value));
      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [visible, value]);

  return <>{current.toFixed(value % 1 !== 0 ? 1 : 0)}</>;
};