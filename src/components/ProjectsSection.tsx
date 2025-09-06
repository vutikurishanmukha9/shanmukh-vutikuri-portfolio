import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Zap, Users } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Health Chatbot',
      description: 'NLP-powered chatbot with 92% accuracy in over-the-counter drug recommendations, deployed on AWS with 99.9% uptime.',
      technologies: ['Python', 'Flask', 'scikit-learn', 'Docker', 'AWS EC2', 'NLP'],
      icon: Brain,
      liveDemo: '#',
      github: '#',
      featured: true,
    },
    {
      title: 'PromptBuddy – Multi-LLM Platform',
      description: 'AI prompt refinement platform integrating multiple large language models including OpenAI, Claude, Gemini, and Cohere.',
      technologies: ['Flask', 'React', 'Python', 'REST API', 'OpenAI', 'Vercel'],
      icon: Zap,
      liveDemo: 'https://prompt-buddy-ten.vercel.app/',
      github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
      featured: true,
    },
    {
      title: 'Automated Attendance System',
      description: 'Face-recognition system with AWS Lambda integration, reducing manual attendance tracking time by 85%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Face-API.js', 'AWS Lambda', 'AWS SES'],
      icon: Users,
      liveDemo: '#',
      github: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions combining AI, cloud computing, and modern web technologies
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1 xl:col-span-1' : ''
              }`}
            >
              {/* Project Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <project.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1 group/btn"
                  asChild
                >
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    Live Demo
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="group/btn"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  </a>
                </Button>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/vutikurishanmukha9"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};