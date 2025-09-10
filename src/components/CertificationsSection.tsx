import { Award, Cloud, Database, Code, BarChart3, FileSpreadsheet, Brain } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: Cloud,
      description: 'Foundational understanding of AWS cloud services, architecture, and best practices',
      category: 'Cloud Computing',
    },
    {
      title: 'Oracle Certified AI Foundations Associate',
      issuer: 'Oracle',
      icon: Brain,
      description: 'Foundational knowledge of artificial intelligence concepts, machine learning, and AI implementation strategies',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Oracle Certified Foundations Associate',
      issuer: 'Oracle',
      icon: Database,
      description: 'Comprehensive knowledge of Oracle database fundamentals and SQL concepts',
      category: 'Database',
    },
    {
      title: 'IBM Data Analysis with Python',
      issuer: 'IBM',
      icon: BarChart3,
      description: 'Advanced data analysis techniques using Python libraries like pandas and NumPy',
      category: 'Data Analysis',
    },
    {
      title: 'IBM SQL for Data Science',
      issuer: 'IBM',
      icon: FileSpreadsheet,
      description: 'SQL fundamentals for data science applications and database querying',
      category: 'Data Science',
    },
    {
      title: 'IBM Python for Data Science',
      issuer: 'IBM',
      icon: Code,
      description: 'Python programming fundamentals for data science and machine learning',
      category: 'Programming',
    },
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously advancing my expertise through industry-recognized certifications
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative"
            >
              {/* Category Badge */}
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4 text-primary" />
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                  {cert.category}
                </span>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <cert.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-primary font-medium text-sm">
                  {cert.issuer}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Committed to continuous learning and professional development
          </p>
        </div>
      </div>
    </section>
  );
};