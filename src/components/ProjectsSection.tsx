import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp, Brain, Cloud, Eye, Globe, BarChart3, X, Filter, ArrowUpRight } from 'lucide-react';
import { useSkillFilter } from '@/context/SkillFilterContext';
import { SpotlightCard } from '@/components/ui/spotlight-card';

// Category config for dynamic visuals
const categoryConfig: Record<string, { color: string; icon: typeof Brain }> = {
  'AI/ML': { color: 'text-violet-500', icon: Brain },
  'Computer Vision': { color: 'text-cyan-500', icon: Eye },
  'Web App': { color: 'text-emerald-500', icon: Globe },
  'Data Analysis': { color: 'text-amber-500', icon: BarChart3 },
  'Cloud': { color: 'text-sky-500', icon: Cloud },
};

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { selectedSkill, setSelectedSkill } = useSkillFilter();

  const projects = [
    // Featured projects first (top 3)
    {
      title: 'AI Health ChatBot',
      description: 'Intelligent healthcare chatbot using advanced NLP and machine learning for symptom analysis, medical consultation assistance, and real-time health monitoring.',
      tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
      category: 'AI/ML',
      github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
      demo: 'https://odatyd.netlify.app/',
      featured: true,
    },
    {
      title: 'Jarvis PDF Chatbot',
      description: 'AI-powered PDF question answering system with multi-provider LLM support (OpenAI, OpenRouter). Upload PDFs and chat with your documents using RAG technology.',
      tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
      category: 'AI/ML',
      github: 'https://github.com/vutikurishanmukha9/Jarvis',
      demo: '',
      featured: true,
    },
    {
      title: 'Touchless Keyboard',
      description: 'Gesture-controlled virtual keyboard using computer vision and hand tracking. Type without touching any physical surface using AI-enhanced gesture recognition.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
      category: 'Computer Vision',
      github: 'https://github.com/vutikurishanmukha9/Touchless-Keyboard',
      demo: '',
      featured: true,
    },
    // Other projects
    {
      title: 'Resume Analyzer AI',
      description: 'Smart resume analysis tool that provides ATS scoring, keyword recommendations, skills extraction, salary predictions, and detailed improvement suggestions.',
      tech: ['Python', 'Flask', 'NLP', 'Machine Learning', 'REST API', 'Pytorch', 'TensorFlow'],
      category: 'AI/ML',
      github: 'https://github.com/vutikurishanmukha9/Resume_App',
      demo: '',
      demoNote: 'Requires 8GB+ RAM (ML models)',
      featured: false,
    },
    {
      title: 'PromptBuddy',
      description: 'AI prompt engineering tool that transforms basic prompts into structured, optimized templates using intelligent template matching - no API keys required.',
      tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      category: 'Web App',
      github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
      demo: 'https://prompt-buddy-64y2.vercel.app/',
      featured: false,
    },
    {
      title: 'HeartOut',
      description: 'Personal storytelling platform where users can share achievements, lessons learned, unsent letters, and life journeys. Built with a focus on authentic self-expression.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      category: 'Web App',
      github: 'https://github.com/vutikurishanmukha9/HeartOut',
      demo: 'https://heart-out.vercel.app/',
      featured: false,
    },
    {
      title: 'HiHR - HR Email Outreach',
      description: 'Smart HR cold emailing platform with campaign management, Gmail integration, encrypted credentials, and automated email sending for job seekers.',
      tech: ['Node.js', 'Express', 'React', 'SQLite', 'SMTP'],
      category: 'Web App',
      github: 'https://github.com/vutikurishanmukha9/HR_Cold_Email',
      demo: '',
      demoNote: 'SMTP requires paid hosting',
      featured: false,
    },
    {
      title: 'Automated Attendance System',
      description: 'Computer vision-based attendance tracking using facial recognition technology with cloud storage and real-time notifications.',
      tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
      category: 'Computer Vision',
      github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
      demo: '',
      featured: false,
    },
    {
      title: 'Employee Data Analysis',
      description: 'Comprehensive EDA project analyzing employee data with data preprocessing, visualization, and actionable HR insights using Python data science stack.',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      category: 'Data Analysis',
      github: 'https://github.com/vutikurishanmukha9/Employee_Data_Analysis',
      demo: '',
      featured: false,
    },
    {
      title: 'Adidas US Sales Analysis',
      description: 'Business intelligence project analyzing Adidas US sales data to uncover insights on revenue trends, regional performance, and product categories.',
      tech: ['Python', 'Pandas', 'Power BI', 'Excel', 'Visualization'],
      category: 'Data Analysis',
      github: 'https://github.com/vutikurishanmukha9/Adidas_US_Sales',
      demo: '',
      featured: false,
    },
  ];

  const categories = ['All', 'AI/ML', 'Computer Vision', 'Web App', 'Data Analysis'];

  // Filter projects based on category AND skill filter
  const filteredByCategory = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // If a skill is selected, further filter by tech stack
  const filteredProjects = selectedSkill
    ? filteredByCategory.filter(project =>
      project.tech.some(tech =>
        tech.toLowerCase().includes(selectedSkill.toLowerCase()) ||
        selectedSkill.toLowerCase().includes(tech.toLowerCase())
      )
    )
    : filteredByCategory;

  // Show only top 3 initially, or all if showAll is true or if filtering
  const displayedProjects = (showAll || activeFilter !== 'All' || selectedSkill)
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const remainingCount = filteredProjects.length - 3;

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

  // Reset showAll when filter changes
  useEffect(() => {
    if (activeFilter !== 'All' || selectedSkill) {
      setShowAll(false);
    }
  }, [activeFilter, selectedSkill]);

  // Clear skill filter when switching category
  const handleCategoryFilter = (category: string) => {
    setActiveFilter(category);
    setSelectedSkill(null);
  };

  // Clear skill filter
  const clearSkillFilter = () => {
    setSelectedSkill(null);
  };

  // Get category visual config
  const getCategoryVisual = (category: string) => {
    return categoryConfig[category] || categoryConfig['AI/ML'];
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 relative bg-background/50">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Selected <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing expertise in AI, Machine Learning, and Full-Stack Development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category && !selectedSkill
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 transform scale-105'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Skill Filter Badge */}
        {selectedSkill && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card rounded-full border border-primary/30 shadow-sm">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Showing projects with</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {selectedSkill}
              </span>
              <button
                onClick={clearSkillFilter}
                className="p-1 rounded-full hover:bg-destructive/10 transition-colors group"
                title="Clear filter"
              >
                <X className="h-4 w-4 text-muted-foreground group-hover:text-destructive transition-colors" />
              </button>
            </div>
          </div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && selectedSkill && (
          <div className="text-center py-16 bg-card border border-border rounded-2xl mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              No projects found searching for <span className="text-primary font-semibold">{selectedSkill}</span>
            </p>
            <Button variant="outline" onClick={clearSkillFilter}>
              Clear Filter
            </Button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => {
            const visual = getCategoryVisual(project.category);
            const IconComponent = visual.icon;

            return (
              <SpotlightCard
                key={index}
                className={`flex flex-col h-full bg-card hover:border-primary/50 transition-colors duration-500 group ${isVisible ? 'animate-in fade-in slide-in-from-bottom-4 duration-700' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                spotlightColor="hsl(var(--primary) / 0.2)"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-primary/5 ${visual.color} ring-1 ring-inset ring-foreground/5`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-xs font-semibold uppercase tracking-wider ${visual.color}`}>
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] text-muted-foreground">Featured Project</span>
                        )}
                      </div>
                    </div>

                    {/* External Link Overlay Button */}
                    {project.demo || project.github ? (
                      <a
                        href={project.demo || project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 rounded-full"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>

                  {/* Content */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 4).map((tech, i) => {
                      const isMatched = selectedSkill && tech.toLowerCase().includes(selectedSkill.toLowerCase());
                      return (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${isMatched
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
                            }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/30 text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer / Actions */}
                  <div className="flex items-center gap-3 mt-auto pt-6 border-t border-border/50">
                    {project.github !== '#' && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="flex-1 gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Globe className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    )}
                    {!project.demo && project.github !== '#' && (
                      <span className="flex-1 text-center text-xs text-muted-foreground px-2 py-2 bg-secondary/30 rounded-md">
                        {project.demoNote || "In Development"}
                      </span>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* View All Button */}
        {activeFilter === 'All' && remainingCount > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2 min-w-[200px]"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  View All Projects
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};