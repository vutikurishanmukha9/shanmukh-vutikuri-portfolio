import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Sparkles, Brain, Cloud, Eye, Globe, BarChart3, ArrowUpRight, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
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
    description: 'Data analysis is often fragmented. Architected a full-stack platform transforming raw data into PDF reports. Implemented high-performance Polars processing and AI-driven RAG for semantic data querying.',
    tech: ['FastAPI', 'React', 'Polars', 'Redis', 'OpenAI', 'Docker'],
    category: 'Web App',
    focus: 'Data Platform',
    github: 'https://github.com/vutikurishanmukha9/GetReport',
    demo: 'https://get-report.vercel.app',
  },
  {
    title: 'Candle-Light',
    description: 'Trading platforms lack automated pattern recognition. Built an AI-powered computer vision pipeline with multi-model fallback. Implemented low-latency pattern recognition for real-time market data analysis.',
    tech: ['React', 'TailwindCSS', 'Machine Learning', 'OAuth'],
    category: 'AI/ML',
    focus: 'AI Pipelines',
    github: 'https://github.com/vutikurishanmukha9/Candle-Light',
    demo: 'https://candle-light-kappa.vercel.app',
  },
  {
    title: 'HeartOut',
    description: 'Social platforms lack true anonymity. Architected a secure anonymous storytelling platform. Engineered role-based access control and scalable database schema for high-volume content.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Web App',
    focus: 'Backend Systems',
    github: 'https://github.com/vutikurishanmukha9/HeartOut',
    demo: 'https://heart-out.vercel.app/',
  },
  {
    title: 'Ele-Visualize',
    description: 'Abstract atomic concepts are hard to visualize. Developed an interactive 3D visualization engine. Integrated MediaPipe hand-tracking for touchless, gesture-controlled molecule exploration.',
    tech: ['React', 'Three.js', 'MediaPipe', 'WebGL'],
    category: 'Computer Vision',
    focus: '3D Interaction',
    github: 'https://github.com/vutikurishanmukha9/Ele-Visualize',
    demo: 'https://ele-visualize.vercel.app/',
  },
  {
    title: 'PromptBuddy',
    description: 'Prompt engineering is repetitive. Created a template-based prompt optimization tool. Built a regex-free string matching engine for intelligent template filling without API dependencies.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    category: 'Web App',
    focus: 'SaaS Product',
    github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
    demo: 'https://prompt-buddy-64y2.vercel.app/',
  },
  {
    title: 'Jarvis PDF Chatbot',
    description: 'Static PDFs trap knowledge. Built a RAG-based document intelligence system. Implemented vector retrieval pipelines and provider fallback (OpenAI/OpenRouter) for reliable Q&A.',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
    category: 'AI/ML',
    focus: 'RAG Systems',
    github: 'https://github.com/vutikurishanmukha9/Jarvis',
    demo: '',
  },
  {
    title: 'AI Health ChatBot',
    description: 'Healthcare advice needs immediacy. Created an intelligent diagnostic assistant. Trained custom NLP models for symptom analysis and real-time medical consultation support.',
    tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
    category: 'AI/ML',
    focus: 'Healthcare AI',
    github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
    demo: 'https://odatyd.netlify.app/',
  },
  {
    title: 'Touchless Keyboard',
    description: 'Physical interfaces can be limiting. Built a purely gesture-based text input system. Optimized MediaPipe tracking for low-latency keystroke detection on standard webcams.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    category: 'Computer Vision',
    focus: 'CV Systems',
    github: 'https://github.com/vutikurishanmukha9/Touchless-Keyboard',
    demo: '',
  },
  {
    title: 'Automated Attendance System',
    description: 'Manual attendance is inefficient. Engineered a facial recognition attendance pipeline. Integrated real-time face matching with cloud database sync for instant reporting.',
    tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
    category: 'Computer Vision',
    focus: 'CV Pipeline',
    github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
    demo: '',
  },
  {
    title: 'Employee Data Analysis',
    description: 'Raw HR data lacks insight. Built a comprehensive EDA workflow. Cleaned and visualized complex datasets to reveal retention trends using the Python data science stack.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    focus: 'Data Insights',
    github: 'https://github.com/vutikurishanmukha9/Employee_Data_Analysis',
    demo: '',
  },
];

const Card = ({
  project,
  i,
  progress,
  range,
  targetScale
}: {
  project: any,
  i: number,
  progress: MotionValue<number>,
  range: [number, number],
  targetScale: number
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const visual = categoryConfig[project.category] || categoryConfig['Other'];
  const IconComponent = visual.icon;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 30}px)` }}
        className="will-change-transform relative flex flex-col w-[90vw] md:w-[75vw] lg:w-[1000px] h-auto min-h-[50vh] max-h-[85vh] origin-top glass-elevated border border-border/60 rounded-3xl p-8 md:p-12 overflow-y-auto overflow-x-hidden shadow-2xl thin-scrollbar"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6 relative z-10 shrink-0">
          <div className="flex items-start gap-4">
            <div className={cn("w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm shrink-0", visual.color)}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground mb-2">{project.title}</h3>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className={cn("text-xs font-semibold tracking-wide uppercase px-2 py-1 bg-background rounded-md border border-border", visual.color)}>
                  {project.category}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs font-medium text-muted-foreground tracking-wide">{project.focus}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            {project.github && (
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-background hover:bg-muted text-foreground transition-colors" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="default" size="icon" className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between relative z-10">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mb-10">
            {project.description}
          </p>

          <div className="mt-auto pt-6 border-t border-border/50">
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              <Terminal className="w-4 h-4" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech: string) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-background border border-border shadow-sm text-xs font-medium text-foreground transition-colors hover:border-primary/40 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <SectionWrapper id="projects" className="relative py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 mb-10">
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
      </div>

      <div ref={container} className="relative z-10 w-full mb-10">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.04);
          return (
            <Card
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.08, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>

      <div className="h-32 w-full flex items-center justify-center">
        <div className="flex items-center gap-2 text-muted-foreground opacity-50">
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
        </div>
      </div>
    </SectionWrapper>
  );
};