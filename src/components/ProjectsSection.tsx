import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, ChevronDown, ChevronUp, Brain, Cloud, Eye, Globe, BarChart3, X, Filter } from 'lucide-react';
import { useSkillFilter } from '@/context/SkillFilterContext';

// Category config for dynamic visuals
const categoryConfig: Record<string, { gradient: string; icon: typeof Brain; pattern: string }> = {
  'AI/ML': {
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
    icon: Brain,
    pattern: 'radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
  },
  'Computer Vision': {
    gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
    icon: Eye,
    pattern: 'radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
  },
  'Web App': {
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: Globe,
    pattern: 'radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
  },
  'Data Analysis': {
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    icon: BarChart3,
    pattern: 'radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
  },
  'Cloud': {
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    icon: Cloud,
    pattern: 'radial-gradient(circle at 30% 70%, rgba(14, 165, 233, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.3) 0%, transparent 50%)',
  },
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
      demo: '',
      featured: false,
    },
    {
      title: 'HiHR - HR Email Outreach',
      description: 'Smart HR cold emailing platform with campaign management, Gmail integration, encrypted credentials, and automated email sending for job seekers.',
      tech: ['Node.js', 'Express', 'React', 'SQLite', 'SMTP'],
      category: 'Web App',
      github: 'https://github.com/vutikurishanmukha9/HR_Cold_Email',
      demo: '',
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
    <section ref={sectionRef} id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions combining AI, cloud computing, and modern web technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category && !selectedSkill
                ? 'btn-glow text-background'
                : 'glass text-muted-foreground hover:text-primary hover:border-primary/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Active Skill Filter Badge */}
        {selectedSkill && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-full border border-primary/30">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Showing projects with</span>
              <span className="px-3 py-1 bg-gradient-to-r from-primary to-secondary text-background text-sm font-semibold rounded-full">
                {selectedSkill}
              </span>
              <button
                onClick={clearSkillFilter}
                className="p-1 rounded-full hover:bg-destructive/20 transition-colors"
                title="Clear filter"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-destructive" />
              </button>
            </div>
          </div>
        )}

        {/* No results message */}
        {filteredProjects.length === 0 && selectedSkill && (
          <div className="text-center py-12 glass rounded-2xl mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              No projects found using <span className="text-primary font-semibold">{selectedSkill}</span>
            </p>
            <Button variant="outline" size="sm" onClick={clearSkillFilter} className="glass">
              <X className="h-4 w-4 mr-2" />
              Clear Filter
            </Button>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
            const visual = getCategoryVisual(project.category);
            const IconComponent = visual.icon;

            return (
              <div
                key={index}
                className={`group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${isVisible ? 'slide-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Dynamic Gradient Visual Header */}
                <div className="relative h-48 overflow-hidden">
                  {/* Base gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${visual.gradient} opacity-90`} />

                  {/* Animated pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{ background: visual.pattern }}
                  />

                  {/* Mesh gradient animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Animated floating shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full animate-pulse" />
                    <div className="absolute bottom-8 left-8 w-12 h-12 border border-white/10 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full" />
                  </div>

                  {/* Category icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <IconComponent className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 blur-xl bg-white/20 rounded-full scale-150" />
                    </div>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                        <Sparkles className="h-3 w-3" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Bottom gradient fade */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-6">
                  {/* Category tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <IconComponent className="h-4 w-4 text-primary" />
                    <span className="text-xs text-primary font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground font-display mb-3 group-hover:text-gradient transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 glass text-xs rounded-lg text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2.5 py-1 glass text-xs rounded-lg text-muted-foreground">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github !== '#' && (
                      <Button className="flex-1 btn-glow group/btn" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button variant="outline" size="sm" className="flex-1 glass hover:border-primary/50 group/btn" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Live
                        </a>
                      </Button>
                    )}

                    {!project.demo && project.github !== '#' && (
                      <Button variant="outline" size="sm" className="flex-1 glass hover:border-primary/50 opacity-50 cursor-not-allowed" disabled>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        In Process
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See All / Show Less Button */}
        {activeFilter === 'All' && remainingCount > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="glass hover:border-primary/50 group"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-5 w-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-5 w-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  See All Projects ({remainingCount} more)
                </>
              )}
            </Button>
          </div>
        )}

        <div className="text-center mt-8">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary group" asChild>
            <a
              href="https://github.com/vutikurishanmukha9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};