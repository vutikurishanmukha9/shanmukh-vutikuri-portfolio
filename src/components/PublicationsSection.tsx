import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Award } from 'lucide-react';

export const PublicationsSection = () => {
  const publications = [
    {
      title: 'Optimizing Energy Efficiency in Smart Buildings Through IOT-Driven Occupancy Sensing',
      authors: 'Vutikuri Shanmukha, et al.',
      journal: 'IEEE Xplore',
      year: '2025',
      description: 'Research on implementing IoT solutions for precision agriculture, focusing on smart monitoring systems and data-driven farming techniques.',
      link: 'https://ieeexplore.ieee.org/document/11101373',
      type: 'Conference Paper',
      featured: true,
    },
  ];

  return (
    <section id="publications" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Research <span className="text-gradient">Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the academic community through published research in IoT and smart systems
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
            >
              {/* Publication Type Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">
                  {publication.type}
                </span>
                {publication.featured && (
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">
                    Featured
                  </span>
                )}
              </div>

              {/* Publication Title */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
                {publication.title}
              </h3>

              {/* Authors and Journal Info */}
              <div className="text-muted-foreground mb-2">
                <span className="font-medium">{publication.authors}</span>
              </div>
              <div className="text-muted-foreground mb-4">
                <span className="italic">{publication.journal}</span> • <span>{publication.year}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {publication.description}
              </p>

              {/* Action Button */}
              <div className="flex gap-4">
                <Button
                  variant="hero"
                  size="sm"
                  className="group/btn"
                  asChild
                >
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Read Publication
                    <ExternalLink className="h-3 w-3 ml-2 group-hover/btn:scale-110 transition-transform duration-300" />
                  </a>
                </Button>
              </div>

              {/* Decorative Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More publications in progress • Exploring opportunities for collaborative research
          </p>
        </div>
      </div>
    </section>
  );
};