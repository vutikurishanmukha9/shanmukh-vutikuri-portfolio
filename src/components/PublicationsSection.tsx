import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Award, FileText, Calendar, Users } from 'lucide-react';

export const PublicationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const publications = [
    {
      title: 'Optimizing Energy Efficiency in Smart Buildings Through IOT-Driven Occupancy Sensing',
      authors: 'Vutikuri Shanmukha, et al.',
      journal: 'IEEE Xplore',
      year: '2025',
      description: 'Published a research paper on an IoT-driven occupancy detection system for smart buildings, integrating Arduino, IR, and DHT sensors with cloud connectivity. The framework achieved 96% accuracy, 60ms response time, and significant energy savings through real-time automation and intelligent control, enhancing scalability and efficiency in energy management.',
      link: 'https://ieeexplore.ieee.org/document/11101373',
      type: 'Conference Paper',
      featured: true,
      metrics: {
        accuracy: '96%',
        responseTime: '60ms',
        energySavings: '30%',
      },
    },
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
    <section ref={sectionRef} id="publications" className="py-10 lg:py-14 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Academic Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Research <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the academic community through published research in IoT and smart systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <div
              key={index}
              className={`group glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative ${isVisible ? 'slide-up' : 'opacity-0'
                }`}
            >
              {/* Publication badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-secondary text-background text-xs font-semibold rounded-full">
                  <FileText className="h-3 w-3" />
                  {publication.type}
                </span>
                {publication.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 glass text-primary text-xs font-semibold rounded-full border border-primary/30">
                    <Award className="h-3 w-3" />
                    Featured
                  </span>
                )}
              </div>

              {/* Publication Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-display mb-4 group-hover:text-gradient transition-colors duration-300 leading-tight">
                {publication.title}
              </h3>

              {/* Authors and Journal Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  {publication.authors}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-primary" />
                  {publication.journal}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" />
                  {publication.year}
                </span>
              </div>

              {/* Key Metrics */}
              {publication.metrics && (
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-2xl font-bold text-gradient font-display">{publication.metrics.accuracy}</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-2xl font-bold text-gradient font-display">{publication.metrics.responseTime}</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center p-4 glass rounded-xl">
                    <div className="text-2xl font-bold text-gradient font-display">{publication.metrics.energySavings}</div>
                    <div className="text-xs text-muted-foreground">Energy Savings</div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {publication.description}
              </p>

              {/* Action Button */}
              <div className="flex gap-4">
                <Button
                  className="btn-glow group/btn"
                  asChild
                >
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Read Publication
                    <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Decorative Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <BookOpen className="h-16 w-16 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse" />
            More publications in progress - Exploring opportunities for collaborative research
          </p>
        </div>
      </div>
    </section>
  );
};