import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Github,
  Sparkles,
  Brain,
  Cloud,
  Eye,
  Globe,
  BarChart3,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  Layers3,
  X,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { cn } from '@/lib/utils';
import { useSkillFilter } from '@/context/SkillFilterContext';

type ProjectCategory = 'AI/ML' | 'Cloud' | 'Web App' | 'Computer Vision' | 'Data Analysis' | 'Other';

type Project = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  category: ProjectCategory;
  focus: string;
  github: string;
  demo?: string;
  featured?: boolean;
};

const categoryConfig: Record<ProjectCategory, { icon: LucideIcon; color: string; label: string }> = {
  'AI/ML': { icon: Brain, color: 'text-violet-500', label: 'Artificial Intelligence' },
  Cloud: { icon: Cloud, color: 'text-sky-500', label: 'Cloud Architecture' },
  'Web App': { icon: Globe, color: 'text-primary', label: 'Web Development' },
  'Computer Vision': { icon: Eye, color: 'text-emerald-500', label: 'Computer Vision' },
  'Data Analysis': { icon: BarChart3, color: 'text-amber-500', label: 'Data Science' },
  Other: { icon: Sparkles, color: 'text-muted-foreground', label: 'Various Engineering' },
};

const projects: Project[] = [
  {
    title: 'GetReport',
    description: 'Full-stack reporting platform that turns raw datasets into PDF reports with fast Polars processing and AI-assisted semantic querying.',
    outcome: 'Data upload to report workflow with RAG-style exploration',
    tech: ['FastAPI', 'React', 'Polars', 'Redis', 'OpenAI', 'Docker'],
    category: 'Web App',
    focus: 'Data Platform',
    github: 'https://github.com/vutikurishanmukha9/GetReport',
    demo: 'https://get-report.vercel.app',
    featured: true,
  },
  {
    title: 'Candle-Light',
    description: 'AI-powered market pattern analysis experience with multi-model fallback and low-latency recognition flows.',
    outcome: 'Computer vision inspired pattern detection for market signals',
    tech: ['React', 'TailwindCSS', 'Machine Learning', 'OAuth'],
    category: 'AI/ML',
    focus: 'AI Pipelines',
    github: 'https://github.com/vutikurishanmukha9/Candle-Light',
    demo: 'https://candle-light-kappa.vercel.app',
    featured: true,
  },
  {
    title: 'HeartOut',
    description: 'Anonymous storytelling platform with role-based access control, JWT authentication, and a scalable MongoDB content model.',
    outcome: 'Secure community product with moderation-ready foundations',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Web App',
    focus: 'Backend Systems',
    github: 'https://github.com/vutikurishanmukha9/HeartOut',
    demo: 'https://heart-out.vercel.app/',
    featured: true,
  },
  {
    title: 'Ele-Visualize',
    description: 'Interactive 3D molecule visualization engine using WebGL and MediaPipe hand tracking for gesture-led exploration.',
    outcome: 'Touchless 3D interaction prototype for STEM learning',
    tech: ['React', 'Three.js', 'MediaPipe', 'WebGL'],
    category: 'Computer Vision',
    focus: '3D Interaction',
    github: 'https://github.com/vutikurishanmukha9/Ele-Visualize',
    demo: 'https://ele-visualize.vercel.app/',
  },
  {
    title: 'PromptBuddy',
    description: 'Prompt optimization workspace with reusable templates and intelligent slot filling for faster AI workflows.',
    outcome: 'Reusable prompt system for consistent AI outputs',
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    category: 'Web App',
    focus: 'SaaS Product',
    github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
    demo: 'https://prompt-buddy-64y2.vercel.app/',
  },
  {
    title: 'Jarvis PDF Chatbot',
    description: 'Document intelligence app with vector retrieval pipelines and provider fallback for reliable PDF question answering.',
    outcome: 'RAG pipeline for searchable document knowledge',
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
    category: 'AI/ML',
    focus: 'RAG Systems',
    github: 'https://github.com/vutikurishanmukha9/Jarvis',
  },
  {
    title: 'AI Health ChatBot',
    description: 'Diagnostic assistant prototype using NLP models for symptom intake and guided medical consultation flows.',
    outcome: 'Conversational triage concept with healthcare UX patterns',
    tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
    category: 'AI/ML',
    focus: 'Healthcare AI',
    github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
    demo: 'https://odatyd.netlify.app/',
  },
  {
    title: 'Touchless Keyboard',
    description: 'Gesture-based text input system using OpenCV and MediaPipe for low-latency keystroke detection.',
    outcome: 'Hands-free input prototype for accessibility-first control',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    category: 'Computer Vision',
    focus: 'CV Systems',
    github: 'https://github.com/vutikurishanmukha9/Touchless-Keyboard',
  },
  {
    title: 'Automated Attendance',
    description: 'Facial recognition attendance pipeline with real-time matching and cloud database synchronization.',
    outcome: 'Identity-aware attendance system with cloud sync',
    tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
    category: 'Computer Vision',
    focus: 'CV Pipeline',
    github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
  },
  {
    title: 'Employee Data Analysis',
    description: 'EDA workflow for cleaning, visualizing, and interpreting HR datasets to reveal retention and workforce trends.',
    outcome: 'Business insight report from messy HR data',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    focus: 'Data Insights',
    github: 'https://github.com/vutikurishanmukha9/Employee_Data_Analysis',
  },
];

const categories: Array<ProjectCategory | 'All'> = ['All', 'Web App', 'AI/ML', 'Computer Vision', 'Data Analysis', 'Cloud'];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const visual = categoryConfig[project.category];
  const IconComponent = visual.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.18) }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10',
        project.featured && 'md:col-span-2 lg:col-span-1'
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-amber-400 opacity-80" />
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />

      <div className="relative mb-6 flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-sm', visual.color)}>
            <IconComponent className="h-5 w-5" />
          </div>
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className={cn('rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide', visual.color)}>
                {project.category}
              </span>
              {project.featured && (
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                  Featured
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{project.title}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{project.focus}</p>
          </div>
        </div>
      </div>

      <p className="relative mb-5 flex-1 text-sm leading-7 text-muted-foreground md:text-[15px]">
        {project.description}
      </p>

      <div className="relative mb-5 rounded-2xl border border-border/70 bg-background/70 p-4">
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          Product proof
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{project.outcome}</p>
      </div>

      <div className="relative border-t border-border/60 pt-5">
        <h4 className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          <Terminal className="h-3 w-3" />
          Stack
        </h4>
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full bg-background" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
          {project.demo && (
            <Button size="sm" className="rounded-full" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
                Live
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const { selectedSkill, setSelectedSkill } = useSkillFilter();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSkill = !selectedSkill || project.tech.some((tech) => tech.toLowerCase().includes(selectedSkill.toLowerCase()));
      return matchesCategory && matchesSkill;
    });
  }, [selectedCategory, selectedSkill]);

  return (
    <SectionWrapper id="projects" className="relative overflow-hidden bg-background py-24">
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 shadow-sm"
            >
              <Layers3 className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Product Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl"
            >
              Products with proof, not just project cards.
            </motion.h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Each build is framed around the problem solved, the system designed, and the result a user can understand quickly.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-foreground">{projects.length}+</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Builds</div>
              </div>
              <div>
                <div className="text-2xl font-black text-foreground">5</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Live</div>
              </div>
              <div>
                <div className="text-2xl font-black text-foreground">4</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Domains</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-border bg-card/70 p-3 shadow-sm backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                    isSelected
                      ? 'bg-foreground text-background shadow-sm'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {selectedSkill && (
            <button
              onClick={() => setSelectedSkill(null)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
            >
              Skill: {selectedSkill}
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-card/80 p-10 text-center">
            <p className="text-lg font-semibold text-foreground">No projects match that filter yet.</p>
            <p className="mt-2 text-muted-foreground">Clear the skill filter or choose another category.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
