import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code } from 'lucide-react';

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: 'AI Health ChatBot',
      description: 'Developed an intelligent healthcare chatbot using advanced NLP and machine learning algorithms. Features include symptom analysis, medical consultation assistance, and real-time health monitoring integration.',
      tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
      category: 'AI/ML',
      github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
      demo: 'https://odatyd.netlify.app/',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      achievements: ['96% accuracy in symptom detection', 'Reduced consultation time by 40%'],
      featured: true,
    },
    {
      title: 'Automated Attendance System',
      description: 'Implemented a computer vision-based attendance tracking system using facial recognition technology. Integrated with cloud storage and real-time notifications for seamless attendance management.',
      tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
      category: 'Computer Vision',
      github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      achievements: ['99.2% recognition accuracy', 'Automated record keeping'],
      featured: false,
    },
    {
      title: 'Smart IoT Energy Management',
      description: 'Built an IoT-driven occupancy detection system for smart buildings with Arduino, IR sensors, and DHT sensors. Achieved significant energy savings through real-time automation and intelligent control systems.',
      tech: ['Arduino', 'IoT', 'Python', 'AWS IoT', 'React'],
      category: 'IoT',
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      achievements: ['96% detection accuracy', '60ms response time', '30% energy savings'],
      featured: true,
    },
  ];

  const categories = ['All', 'AI/ML', 'Computer Vision', 'IoT'];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card/50 text-muted-foreground hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-xs text-primary font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Achievements */}
                {project.achievements && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md border border-accent/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="hero" size="sm" className="flex-1 group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo !== '#' && (
                    <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
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