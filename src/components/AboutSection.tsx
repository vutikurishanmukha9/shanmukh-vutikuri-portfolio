import { useEffect, useState, useRef } from 'react';

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
          <div className={`space-y-6 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm an <span className="text-primary font-semibold">Applied AI and Cloud Engineer</span> with a strong foundation in Electronics & Communication Engineering, focused on building real-world, production-ready systems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I design and deploy <span className="text-primary font-semibold">AI-powered backend platforms</span>, cloud-native applications, and data-driven systems using Python, FastAPI, AWS, and modern AI frameworks. My work spans applied machine learning, computer vision, NLP, and scalable cloud infrastructure, with hands-on experience taking ideas from concept to deployment.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm also an <span className="text-primary font-semibold">IEEE peer-reviewed published researcher</span>, where my work in IoT-driven smart systems reflects my ability to combine engineering rigor with practical problem-solving.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm actively seeking opportunities where I can build, scale, and ship intelligent systems that solve real problems — not just prototypes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
