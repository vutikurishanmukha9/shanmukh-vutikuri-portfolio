import { useEffect, useState, useRef } from 'react';
import { Award, Cloud, Database, Code, BarChart3, FileSpreadsheet, Brain, ExternalLink } from 'lucide-react';

export const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      color: 'from-orange-500 to-amber-500',
      description: 'Foundational understanding of AWS Cloud concepts, services, and terminology.',
      category: 'Cloud Computing',
      credentialFile: '/certifications/AWS Certified Cloud Practitioner certificate.pdf',
    },
    {
      title: 'Oracle Certified AI Foundations Associate',
      issuer: 'Oracle',
      icon: Brain,
      color: 'from-red-500 to-rose-500',
      description: 'Foundational knowledge of AI and machine learning concepts.',
      category: 'Artificial Intelligence',
      credentialFile: '/certifications/Oracle AI Certified Foundations Associate.pdf',
    },
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle',
      icon: Database,
      color: 'from-red-500 to-orange-500',
      description: 'Comprehensive knowledge of Oracle Cloud Infrastructure fundamentals.',
      category: 'Cloud & Database',
      credentialFile: '/certifications/Oracle Certified Foundations Associate.pdf',
    },
    {
      title: 'IBM Data Analysis with Python',
      issuer: 'IBM',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      description: 'Data analysis techniques using Python, pandas, and NumPy.',
      category: 'Data Analysis',
      credentialFile: '/certifications/IBM-Data Analysis with Python.pdf',
    },
    {
      title: 'IBM SQL for Data Science',
      issuer: 'IBM',
      icon: FileSpreadsheet,
      color: 'from-blue-600 to-blue-400',
      description: 'SQL fundamentals for data science and database querying.',
      category: 'Data Science',
      credentialFile: '/certifications/IBM-SQL and Relational Databases.pdf',
    },
    {
      title: 'IBM Python for Data Science',
      issuer: 'IBM',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      description: 'Python programming fundamentals for data science.',
      category: 'Programming',
      credentialFile: '/certifications/IBM-python for data science.pdf',
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
    <section ref={sectionRef} id="certifications" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously advancing my expertise through industry-recognized certifications
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.credentialFile}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 relative block ${isVisible ? 'slide-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4 text-primary" />
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                  {cert.category}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground font-display group-hover:text-gradient transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>

                <p className="text-primary font-medium text-sm flex items-center gap-1">
                  {cert.issuer}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* View Certificate indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="h-4 w-4 text-primary" />
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
            Committed to continuous learning and professional development
          </p>
        </div>
      </div>
    </section>
  );
};