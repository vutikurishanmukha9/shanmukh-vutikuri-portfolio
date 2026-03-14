import { Award, Cloud, Database, Code, BarChart3, FileSpreadsheet, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
      category: 'Cloud Computing',
    },
    {
      title: 'Oracle Certified AI Foundations Associate',
      issuer: 'Oracle',
      icon: Brain,
      description: 'Foundational knowledge of AI and machine learning concepts.',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle',
      icon: Database,
      description: 'Comprehensive knowledge of Oracle Cloud Infrastructure fundamentals.',
      category: 'Cloud & Database',
    },
    {
      title: 'IBM Data Analysis with Python',
      issuer: 'IBM',
      icon: BarChart3,
      description: 'Data analysis techniques using Python, pandas, and NumPy.',
      category: 'Data Analysis',
    },
    {
      title: 'IBM SQL for Data Science',
      issuer: 'IBM',
      icon: FileSpreadsheet,
      description: 'SQL fundamentals for data science and database querying.',
      category: 'Data Science',
    },
    {
      title: 'IBM Python for Data Science',
      issuer: 'IBM',
      icon: Code,
      description: 'Python programming fundamentals for data science.',
      category: 'Programming',
    },
  ];

  return (
    <SectionWrapper id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Credentials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Continuously advancing my expertise through industry-recognized certifications.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-3xl p-8 hover-lift-minimal border border-border/60 relative group flex flex-col h-full"
                >
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-md border border-border">
                    {cert.category}
                    </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-semibold text-foreground font-display leading-tight">
                    {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        <p className="text-foreground font-medium text-sm">
                        {cert.issuer}
                        </p>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed font-light mt-4">
                    {cert.description}
                    </p>
                </div>
                </motion.div>
              );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};