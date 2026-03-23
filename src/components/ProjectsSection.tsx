import { Button } from '@/components/ui/button';
import { Github, Sparkles, Brain, Cloud, Eye, Globe, BarChart3, ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { cn } from '@/lib/utils';

const categoryConfig: { [key: string]: { icon: any; color: string; label: string } } = {
  'AI/ML': { icon: Brain, color: 'text-purple-500', label: 'Artificial Intelligence' },
  'Cloud': { icon: Cloud, color: 'text-blue-500', label: 'Cloud Architecture' },
  'Web App': { icon: Globe, color: 'text-primary', label: 'Web Development' },
  'Computer Vision': { icon: Eye, color: 'text-emerald-500', label: 'Computer Vision' },
  'Data Analysis': { icon: BarChart3, color: 'text-orange-500', label: 'Data Science' },
  'Other': { icon: Sparkles, color: 'text-muted-foreground', label: 'Various Engineering' }
};

const projects = [
  {
    title: 'GetReport',
    description: 'Architected a full-stack platform transforming raw data into PDF reports with high-performance Polars processing and AI-driven RAG for semantic data querying.',
    tech: ['FastAPI', 'React', 'Polars', 'Redis', 'OpenAI', 'Docker'],
    category: 'Web App',
    focus: 'Data Platform',
    github: 'https://github.com/vutikurishanmukha9/GetReport',
    demo: 'https://get-report.vercel.app',
  },
  {
    title: 'Candle-Light',
    description: 'Built an AI-powered computer vision pipeline with multi-model fallback for low-latency pattern recognition in real-time market data analysis.',
    tech: ['React', 'TailwindCSS', 'Machine Learning', 'OAuth'],
    category: 'AI/ML',
    focus: 'AI Pipelines',
    github: 'https://github.com/vutikurishanmukha9/Candle-Light',
    demo: 'https://candle-light-kappa.vercel.app',
  },
  {
    title: 'HeartOut',
    description: 'Architected a secure anonymous storytelling platform with role-based access control and scalable database schema for high-volume content.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Web App',
    focus: 'Backend Systems',
    github: 'https://github.com/vutikurishanmukha9/HeartOut',
    demo: 'https://heart-out.vercel.app/',
  },
  {
    title: 'Ele-Visualize',
    description: 'Developed an interactive 3D visualization engine with MediaPipe hand-tracking for touchless, gesture-controlled molecule exploration.',
    tech: ['React', 'Three.js', 'MediaPipe', 'WebGL'],
    category: 'Computer Vision',
    focus: '3D Interaction',
    github: 'https://github.com/vutikurishanmukha9/Ele-Visualize',
    demo: 'https://ele-visualize.vercel.app/',
  },
  {
    title: 'PromptBuddy',
    description: 'Created a template-based prompt optimization tool with a regex-free string matching engine for intelligent template filling.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    category: 'Web App',
    focus: 'SaaS Product',
    github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
    demo: 'https://prompt-buddy-64y2.vercel.app/',
  },
  {
    title: 'Jarvis PDF Chatbot',
    description: 'Built a RAG-based document intelligence system with vector retrieval pipelines and provider fallback for reliable Q&A.',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
    category: 'AI/ML',
    focus: 'RAG Systems',
    github: 'https://github.com/vutikurishanmukha9/Jarvis',
    demo: '',
  },
  {
    title: 'AI Health ChatBot',
    description: 'Created an intelligent diagnostic assistant with custom NLP models for symptom analysis and real-time medical consultation.',
    tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
    category: 'AI/ML',
    focus: 'Healthcare AI',
    github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
    demo: 'https://odatyd.netlify.app/',
  },
  {
    title: 'Touchless Keyboard',
    description: 'Built a gesture-based text input system with optimized MediaPipe tracking for low-latency keystroke detection.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    category: 'Computer Vision',
    focus: 'CV Systems',
    github: 'https://github.com/vutikurishanmukha9/Touchless-Keyboard',
    demo: '',
  },
  {
    title: 'Automated Attendance',
    description: 'Engineered a facial recognition attendance pipeline with real-time face matching and cloud database sync.',
    tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
    category: 'Computer Vision',
    focus: 'CV Pipeline',
    github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
    demo: '',
  },
  {
    title: 'Employee Data Analysis',
    description: 'Built a comprehensive EDA workflow to clean and visualize complex HR datasets revealing retention trends.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    focus: 'Data Insights',
    github: 'https://github.com/vutikurishanmukha9/Employee_Data_Analysis',
    demo: '',
  },
];

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const visual = categoryConfig[project.category] || categoryConfig['Other'];
  const IconComponent = visual.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index % 2 === 0 ? 0 : 0.1 }}
      className="glass-elevated border border-border/60 rounded-2xl p-6 md:p-8 flex flex-col h-full hover:border-primary/30 transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5 shrink-0">
        <div className="flex items-start gap-3">
          <div className={cn("w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm shrink-0", visual.color)}>
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight text-foreground">{project.title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className={cn("text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 bg-background rounded-md border border-border", visual.color)}>
                {project.category}
              </span>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-wide">{project.focus}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          {project.github && (
            <Button variant="outline" size="icon" className="rounded-full w-9 h-9 bg-background hover:bg-muted text-foreground transition-colors" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="default" size="icon" className="rounded-full w-9 h-9 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="pt-4 border-t border-border/50 shrink-0">
        <h4 className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          <Terminal className="w-3 h-3" />
          Stack
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-background border border-border text-[11px] font-medium text-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="relative py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background border border-border shadow-sm mb-6"
          >
            <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Work</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground"
          >
            Selected Projects
          </motion.h2>
        </div>

        {/* Simple 2-column grid — no sticky, no scroll transforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};