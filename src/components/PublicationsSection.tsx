import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Award, FileText, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export const PublicationsSection = () => {
  const publications = [
    {
      title: 'Optimizing Energy Efficiency in Smart Buildings Through IOT-Driven Occupancy Sensing',
      authors: 'Vutikuri Shanmukha, et al.',
      journal: 'IEEE Xplore',
      year: '2025',
      description: 'Published a research paper on an IoT-driven occupancy detection system for smart buildings, integrating Arduino, IR, and DHT sensors with cloud connectivity. The framework achieved 96% accuracy, 60ms response time, and significant energy savings through real-time automation and intelligent control.',
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

  return (
    <SectionWrapper id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Research</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
          >
            Publications
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-8 md:p-12 hover-lift-minimal border border-border/60 relative overflow-hidden"
            >
              {/* Publication badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-md border border-border">
                  <FileText className="h-3.5 w-3.5" />
                  {publication.type}
                </span>
                {publication.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md border border-primary/20">
                    <Award className="h-3.5 w-3.5" />
                    Featured
                  </span>
                )}
              </div>

              {/* Publication Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground font-display mb-4 leading-tight">
                {publication.title}
              </h3>

              {/* Authors and Journal Info */}
              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {publication.authors}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {publication.journal}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {publication.year}
                </span>
              </div>

              {/* Key Metrics */}
              {publication.metrics && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col p-5 bg-background border border-border rounded-2xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{publication.metrics.accuracy}</div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Accuracy</div>
                  </div>
                  <div className="flex flex-col p-5 bg-background border border-border rounded-2xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{publication.metrics.responseTime}</div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Response</div>
                  </div>
                  <div className="flex flex-col p-5 bg-background border border-border rounded-2xl shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{publication.metrics.energySavings}</div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Savings</div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 md:text-lg font-light">
                {publication.description}
              </p>

              {/* Action Button */}
              <div className="flex gap-4">
                <Button
                  className="rounded-full shadow-sm bg-foreground text-background hover:bg-foreground/90 transition-all font-medium"
                  asChild
                >
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Read Publication
                    <ExternalLink className="h-3.5 w-3.5 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Decorative Icon */}
              <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                <BookOpen className="h-32 w-32 text-foreground" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};