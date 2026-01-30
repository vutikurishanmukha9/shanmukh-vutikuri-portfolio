
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Sparkles, Brain, Cloud, Eye, Globe, BarChart3, ArrowUpRight, Terminal } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';

const categoryConfig: { [key: string]: { icon: any; color: string; label: string } } = {
  'AI/ML': { icon: Brain, color: 'text-purple-400', label: 'Artificial Intelligence' },
  'Cloud': { icon: Cloud, color: 'text-cyan-400', label: 'Cloud Architecture' },
  'Web App': { icon: Globe, color: 'text-primary', label: 'Web Development' },
  'Computer Vision': { icon: Eye, color: 'text-emerald-400', label: 'Computer Vision' },
  'Data Analysis': { icon: BarChart3, color: 'text-orange-400', label: 'Data Science' },
  'Other': { icon: Sparkles, color: 'text-gray-400', label: 'Various Engineering' }
};

const projects = [
  {
    title: 'Candle-Light',
    description: 'Trading platforms lack automated pattern recognition. Built an AI-powered computer vision pipeline with multi-model fallback. Implemented low-latency pattern recognition for real-time market data analysis.',
    tech: ['React', 'TailwindCSS', 'Machine Learning', 'OAuth', 'TypeScript'],
    category: 'AI/ML',
    focus: 'AI Pipelines',
    github: 'https://github.com/vutikurishanmukha9/Candle-Light',
    demo: 'https://candle-light-kappa.vercel.app',
    featured: true,
  },
  {
    title: 'HeartOut',
    description: 'Social platforms lack true anonymity. Architected a secure anonymous storytelling platform. Engineered role-based access control and scalable database schema for high-volume content.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Web App',
    focus: 'Backend Systems',
    github: 'https://github.com/vutikurishanmukha9/HeartOut',
    demo: 'https://heart-out.vercel.app/',
    featured: true,
  },
  {
    title: 'Ele-Visualize',
    description: 'Abstract atomic concepts are hard to visualize. Developed an interactive 3D visualization engine. Integrated MediaPipe hand-tracking for touchless, gesture-controlled molecule exploration.',
    tech: ['React', 'Three.js', 'MediaPipe', 'WebGL', 'TypeScript'],
    category: 'Computer Vision',
    focus: '3D Interaction',
    github: 'https://github.com/vutikurishanmukha9/Ele-Visualize',
    demo: 'https://ele-visualize.vercel.app/',
    featured: true,
  },
  {
    title: 'PromptBuddy',
    description: 'Prompt engineering is repetitive. Created a template-based prompt optimization tool. Built a regex-free string matching engine for intelligent template filling without API dependencies.',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    category: 'Web App',
    focus: 'SaaS Product',
    github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
    demo: 'https://prompt-buddy-64y2.vercel.app/',
    featured: true,
  },
  {
    title: 'Jarvis PDF Chatbot',
    description: 'Static PDFs trap knowledge. Built a RAG-based document intelligence system. Implemented vector retrieval pipelines and provider fallback (OpenAI/OpenRouter) for reliable Q&A.',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
    category: 'AI/ML',
    focus: 'RAG Systems',
    github: 'https://github.com/vutikurishanmukha9/Jarvis',
    demo: '',
    featured: false,
  },
  {
    title: 'Resume Analyzer AI',
    description: 'ATS systems are opaque. Developed an explainable resume scoring engine. Utilized NLP for keyword extraction and ML classification to give actionable improvement feedback.',
    tech: ['Python', 'Flask', 'NLP', 'Machine Learning', 'REST API'],
    category: 'AI/ML',
    focus: 'NLP Pipeline',
    github: 'https://github.com/vutikurishanmukha9/Resume_App',
    demo: '',
    demoNote: 'Requires 8GB+ RAM',
    featured: false,
  },
  {
    title: 'AI Health ChatBot',
    description: 'Healthcare advice needs immediacy. Created an intelligent diagnostic assistant. Trained custom NLP models for symptom analysis and real-time medical consultation support.',
    tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
    category: 'AI/ML',
    focus: 'Healthcare AI',
    github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
    demo: 'https://odatyd.netlify.app/',
    featured: false,
  },
  {
    title: 'Touchless Keyboard',
    description: 'Physical interfaces can be limiting. Built a purely gesture-based text input system. Optimized MediaPipe tracking for low-latency keystroke detection on standard webcams.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    category: 'Computer Vision',
    focus: 'CV Systems',
    github: 'https://github.com/vutikurishanmukha9/Touchless-Keyboard',
    demo: '',
    featured: false,
  },
  {
    title: 'Automated Attendance System',
    description: 'Manual attendance is inefficient. Engineered a facial recognition attendance pipeline. Integrated real-time face matching with cloud database sync for instant reporting.',
    tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
    category: 'Computer Vision',
    focus: 'CV Pipeline',
    github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
    demo: '',
    featured: false,
  },
  {
    title: 'Employee Data Analysis',
    description: 'Raw HR data lacks insight. Built a comprehensive EDA workflow. Cleaned and visualized complex datasets to reveal retention trends using the Python data science stack.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    focus: 'Data Insights',
    github: 'https://github.com/vutikurishanmukha9/Employee_Data_Analysis',
    demo: '',
    featured: false,
  },
  {
    title: 'Adidas US Sales Analysis',
    description: 'Retail data is noisy. Developed a business intelligence dashboard. Transformed raw sales logs into actionable regional performance metrics and growth indicators.',
    tech: ['Python', 'Pandas', 'Power BI', 'Excel', 'Visualization'],
    category: 'Data Analysis',
    focus: 'Business Intelligence',
    github: 'https://github.com/vutikurishanmukha9/Adidas_US_Sales',
    demo: '',
    featured: false,
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
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  const visual = categoryConfig[project.category] || categoryConfig['Other'];
  const IconComponent = visual.icon;

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col w-[90vw] md:w-[70vw] lg:w-[1000px] h-[60vh] md:h-[500px] origin-top cyber-card rounded-3xl p-8 border border-white/10"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center ${visual.color}`}>
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-white drop-shadow-md">{project.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-xs font-mono uppercase tracking-widest ${visual.color} brightness-125`}>{project.category}</span>
                <span className="text-gray-500">•</span>
                <span className="text-xs font-mono text-gray-400 uppercase">{project.focus}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            {project.github && (
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/20 hover:bg-white/10 hover:border-primary hover:text-primary transition-all text-white" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            )}
            {project.demo && (
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-white/20 hover:bg-white/10 hover:border-primary hover:text-primary transition-all text-white" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-1">
            <p className="text-lg text-gray-300 leading-relaxed font-medium">
              {project.description}
            </p>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                <Terminal className="w-4 h-4" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <span key={tech} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-cyan-200 hover:bg-white/10 hover:border-cyan-400/50 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Decor */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-20" />
        <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-primary/5 blur-2xl rounded-full" />
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
    <SectionWrapper id="projects" className="relative">
      <div ref={container} className="relative z-10 w-full mb-[20vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center pointer-events-none z-0">
          <motion.h2
            style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            className="text-[12vw] font-black text-center leading-none text-white/5 select-none absolute"
          >
            PROJECTS
          </motion.h2>
        </div>

        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={i}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.1, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>

      {/* End of section buffer */}
      <div className="h-[20vh] w-full flex items-center justify-center">
        <p className="text-muted-foreground animate-pulse text-sm font-mono tracking-widest">
                    /// END OF ARCHIVE ///
        </p>
      </div>
    </SectionWrapper>
  );
};