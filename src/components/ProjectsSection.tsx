import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowUpRight,
  BarChart3,
  Brain,
  CheckCircle2,
  Cloud,
  Database,
  Eye,
  FileText,
  Github,
  Globe,
  HeartPulse,
  Layers3,
  Lock,
  MessageSquareText,
  MousePointer2,
  ScanFace,
  Sparkles,
  Terminal,
  X,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { cn } from '@/lib/utils';
import { useSkillFilter } from '@/context/SkillFilterContext';

type ProjectCategory = 'AI/ML' | 'Cloud' | 'Web App' | 'Computer Vision' | 'Data Analysis' | 'Other';
type PreviewType = 'report' | 'signals' | 'community' | 'molecule' | 'prompt' | 'rag' | 'health' | 'gesture' | 'attendance' | 'analytics';

type Project = {
  title: string;
  description: string;
  impact: string;
  ownership: string;
  metrics: string[];
  tech: string[];
  category: ProjectCategory;
  focus: string;
  github: string;
  demo?: string;
  featured?: boolean;
  previewType: PreviewType;
  accent: string;
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
    impact: 'Built a complete data-to-report workflow for uploading files, exploring data, and generating polished reports.',
    ownership: 'Solo full-stack build',
    metrics: ['PDF reports', 'RAG querying', 'Polars pipeline'],
    tech: ['FastAPI', 'React', 'Polars', 'Redis', 'OpenAI', 'Docker'],
    category: 'Web App',
    focus: 'Data Platform',
    github: 'https://github.com/vutikurishanmukha9/GetReport',
    demo: 'https://get-report.vercel.app',
    featured: true,
    previewType: 'report',
    accent: 'from-sky-500 via-cyan-400 to-emerald-400',
  },
  {
    title: 'Candle-Light',
    description: 'AI-powered market pattern analysis experience with multi-model fallback and low-latency recognition flows.',
    impact: 'Created a visual AI workflow for reading market patterns and presenting signals in a cleaner product experience.',
    ownership: 'Solo AI product build',
    metrics: ['Pattern analysis', 'Model fallback', 'Live UI'],
    tech: ['React', 'TailwindCSS', 'Machine Learning', 'OAuth'],
    category: 'AI/ML',
    focus: 'AI Pipelines',
    github: 'https://github.com/vutikurishanmukha9/Candle-Light',
    demo: 'https://candle-light-kappa.vercel.app',
    featured: true,
    previewType: 'signals',
    accent: 'from-violet-500 via-fuchsia-400 to-rose-400',
  },
  {
    title: 'HeartOut',
    description: 'Anonymous storytelling platform with role-based access control, JWT authentication, and a scalable MongoDB content model.',
    impact: 'Shipped a secure community-style product foundation with authentication, content flows, and backend structure.',
    ownership: 'Solo product build',
    metrics: ['JWT auth', 'RBAC', 'MongoDB schema'],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Web App',
    focus: 'Backend Systems',
    github: 'https://github.com/vutikurishanmukha9/HeartOut',
    demo: 'https://heart-out.vercel.app/',
    featured: true,
    previewType: 'community',
    accent: 'from-rose-500 via-orange-400 to-amber-300',
  },
  {
    title: 'Ele-Visualize',
    description: 'Interactive 3D molecule visualization engine using WebGL and MediaPipe hand tracking for gesture-led exploration.',
    impact: 'Designed a touchless 3D learning prototype that turns hand movement into molecule interaction.',
    ownership: 'Solo interaction build',
    metrics: ['3D WebGL', 'Hand tracking', 'STEM UX'],
    tech: ['React', 'Three.js', 'MediaPipe', 'WebGL'],
    category: 'Computer Vision',
    focus: '3D Interaction',
    github: 'https://github.com/vutikurishanmukha9/Ele-Visualize',
    demo: 'https://ele-visualize.vercel.app/',
    previewType: 'molecule',
    accent: 'from-emerald-500 via-teal-400 to-cyan-400',
  },
  {
    title: 'PromptBuddy',
    description: 'Prompt optimization workspace with reusable templates and intelligent slot filling for faster AI workflows.',
    impact: 'Created a productivity tool that makes prompt reuse, structure, and iteration easier for everyday AI work.',
    ownership: 'Solo SaaS-style build',
    metrics: ['Templates', 'Prompt slots', 'Fast workflow'],
    tech: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
    category: 'Web App',
    focus: 'SaaS Product',
    github: 'https://github.com/vutikurishanmukha9/PromptBuddy',
    demo: 'https://prompt-buddy-64y2.vercel.app/',
    previewType: 'prompt',
    accent: 'from-blue-500 via-indigo-400 to-violet-400',
  },
  {
    title: 'Jarvis PDF Chatbot',
    description: 'Document intelligence app with vector retrieval pipelines and provider fallback for reliable PDF question answering.',
    impact: 'Built a RAG pipeline that turns static PDFs into searchable knowledge with conversational retrieval.',
    ownership: 'Solo AI systems build',
    metrics: ['FAISS retrieval', 'PDF Q&A', 'Provider fallback'],
    tech: ['Python', 'LangChain', 'Streamlit', 'OpenAI', 'FAISS'],
    category: 'AI/ML',
    focus: 'RAG Systems',
    github: 'https://github.com/vutikurishanmukha9/Jarvis',
    previewType: 'rag',
    accent: 'from-purple-500 via-blue-400 to-cyan-400',
  },
  {
    title: 'AI Health ChatBot',
    description: 'Diagnostic assistant prototype using NLP models for symptom intake and guided medical consultation flows.',
    impact: 'Created a healthcare conversation prototype that organizes symptom input into a guided assistant experience.',
    ownership: 'Solo AI prototype',
    metrics: ['NLP flow', 'Symptom intake', 'Assistant UI'],
    tech: ['Python', 'NLP', 'TensorFlow', 'Flask', 'React'],
    category: 'AI/ML',
    focus: 'Healthcare AI',
    github: 'https://github.com/vutikurishanmukha9/OUR-D-at-YOUR-D',
    demo: 'https://odatyd.netlify.app/',
    previewType: 'health',
    accent: 'from-red-500 via-pink-400 to-violet-400',
  },
  {
    title: 'Touchless Keyboard',
    description: 'Gesture-based text input system using OpenCV and MediaPipe for low-latency keystroke detection.',
    impact: 'Built a hands-free input prototype focused on gesture detection, responsiveness, and accessibility-minded control.',
    ownership: 'Solo computer vision build',
    metrics: ['OpenCV', 'MediaPipe', 'Gesture input'],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
    category: 'Computer Vision',
    focus: 'CV Systems',
    github: 'https://github.com/vutikurishanmukha9/Touchless-Keyboard',
    previewType: 'gesture',
    accent: 'from-lime-500 via-emerald-400 to-teal-400',
  },
  {
    title: 'Automated Attendance',
    description: 'Facial recognition attendance pipeline with real-time matching and cloud database synchronization.',
    impact: 'Engineered a recognition workflow for identifying users, recording attendance, and syncing data.',
    ownership: 'Solo CV pipeline build',
    metrics: ['Face matching', 'AWS sync', 'MySQL storage'],
    tech: ['Python', 'OpenCV', 'AWS', 'MySQL', 'React'],
    category: 'Computer Vision',
    focus: 'CV Pipeline',
    github: 'https://github.com/vutikurishanmukha9/Automated-Attendance-System',
    previewType: 'attendance',
    accent: 'from-cyan-500 via-blue-400 to-sky-300',
  },
  {
    title: 'Employee Data Analysis',
    description: 'EDA workflow for cleaning, visualizing, and interpreting HR datasets to reveal retention and workforce trends.',
    impact: 'Converted messy HR data into clear analysis views that expose workforce patterns and business insights.',
    ownership: 'Solo analytics project',
    metrics: ['EDA', 'Retention trends', 'Visual reports'],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    focus: 'Data Insights',
    github: 'https://github.com/vutikurishanmukha9/Employee_Data_Analysis',
    previewType: 'analytics',
    accent: 'from-amber-500 via-orange-400 to-red-400',
  },
];

const categories: Array<ProjectCategory | 'All'> = ['All', 'Web App', 'AI/ML', 'Computer Vision', 'Data Analysis', 'Cloud'];

const PreviewPanel = ({ project, compact = false }: { project: Project; compact?: boolean }) => {
  const previewContent: Record<PreviewType, React.ReactNode> = {
    report: (
      <>
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2 w-16 rounded-full bg-foreground/25" />
            <div className="mt-2 h-2 w-24 rounded-full bg-foreground/10" />
          </div>
          <FileText className="h-8 w-8 text-white/80" />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2">
          {[62, 88, 44].map((height) => (
            <div key={height} className="flex h-20 items-end rounded-xl bg-white/10 p-2">
              <div className="w-full rounded-lg bg-white/60" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
      </>
    ),
    signals: (
      <>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">AI SIGNAL</div>
          <Brain className="h-8 w-8 text-white/80" />
        </div>
        <div className="mt-8 flex h-20 items-end gap-2">
          {[35, 74, 48, 86, 52, 68, 94].map((height, index) => (
            <div key={index} className="flex-1 rounded-t-lg bg-white/60" style={{ height: `${height}%` }} />
          ))}
        </div>
      </>
    ),
    community: (
      <>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="h-2 w-20 rounded-full bg-white/50" />
            <div className="mt-2 h-2 w-28 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="mt-7 space-y-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-2xl bg-white/12 p-3">
              <div className="h-2 w-full rounded-full bg-white/30" />
              <div className="mt-2 h-2 w-2/3 rounded-full bg-white/15" />
            </div>
          ))}
        </div>
      </>
    ),
    molecule: (
      <div className="relative h-full min-h-44">
        {[['left-8 top-8', 'h-10 w-10'], ['left-1/2 top-16', 'h-14 w-14'], ['bottom-8 right-10', 'h-11 w-11'], ['bottom-12 left-16', 'h-8 w-8']].map(([position, size]) => (
          <div key={position} className={cn('absolute rounded-full border border-white/40 bg-white/20 shadow-lg', position, size)} />
        ))}
        <div className="absolute left-20 top-14 h-px w-28 rotate-12 bg-white/35" />
        <div className="absolute bottom-20 left-24 h-px w-36 -rotate-12 bg-white/35" />
        <MousePointer2 className="absolute right-8 top-8 h-8 w-8 text-white/80" />
      </div>
    ),
    prompt: (
      <>
        <div className="rounded-2xl bg-white/15 p-3">
          <div className="h-2 w-20 rounded-full bg-white/50" />
          <div className="mt-3 space-y-2">
            <div className="h-2 rounded-full bg-white/25" />
            <div className="h-2 w-4/5 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/12 p-3">
            <Sparkles className="mb-4 h-5 w-5 text-white/80" />
            <div className="h-2 rounded-full bg-white/25" />
          </div>
          <div className="rounded-2xl bg-white/12 p-3">
            <Terminal className="mb-4 h-5 w-5 text-white/80" />
            <div className="h-2 rounded-full bg-white/25" />
          </div>
        </div>
      </>
    ),
    rag: (
      <>
        <div className="flex items-center justify-between">
          <Database className="h-8 w-8 text-white/80" />
          <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">RAG</div>
        </div>
        <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="space-y-2 rounded-2xl bg-white/12 p-3">
            <div className="h-2 rounded-full bg-white/35" />
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-white/70" />
          <div className="space-y-2 rounded-2xl bg-white/12 p-3">
            <div className="h-2 rounded-full bg-white/35" />
            <div className="h-2 w-3/4 rounded-full bg-white/20" />
          </div>
        </div>
      </>
    ),
    health: (
      <>
        <div className="flex items-center gap-3">
          <HeartPulse className="h-8 w-8 text-white/85" />
          <div>
            <div className="h-2 w-20 rounded-full bg-white/50" />
            <div className="mt-2 h-2 w-28 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="mt-7 space-y-3">
          <div className="ml-auto w-4/5 rounded-2xl bg-white/20 p-3">
            <div className="h-2 rounded-full bg-white/35" />
          </div>
          <div className="w-4/5 rounded-2xl bg-white/12 p-3">
            <div className="h-2 rounded-full bg-white/30" />
            <div className="mt-2 h-2 w-2/3 rounded-full bg-white/20" />
          </div>
        </div>
      </>
    ),
    gesture: (
      <div className="relative h-full min-h-44">
        <div className="absolute inset-x-6 bottom-8 grid grid-cols-8 gap-1">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="h-5 rounded-md bg-white/15" />
          ))}
        </div>
        <MousePointer2 className="absolute left-1/2 top-10 h-10 w-10 -translate-x-1/2 text-white/85" />
        <div className="absolute left-1/2 top-20 h-16 w-px -translate-x-1/2 bg-white/35" />
      </div>
    ),
    attendance: (
      <div className="relative h-full min-h-44">
        <div className="absolute left-1/2 top-10 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-3xl border border-white/40 bg-white/12">
          <ScanFace className="h-12 w-12 text-white/85" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/12 p-3">
          <div className="h-2 w-1/2 rounded-full bg-white/35" />
          <div className="mt-2 h-2 w-4/5 rounded-full bg-white/20" />
        </div>
      </div>
    ),
    analytics: (
      <>
        <div className="flex items-center justify-between">
          <BarChart3 className="h-8 w-8 text-white/85" />
          <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">EDA</div>
        </div>
        <div className="mt-8 flex h-24 items-end gap-2">
          {[70, 42, 58, 88, 76, 52].map((height, index) => (
            <div key={index} className="flex-1 rounded-t-xl bg-white/55" style={{ height: `${height}%` }} />
          ))}
        </div>
      </>
    ),
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950 p-4 text-white shadow-inner',
        compact ? 'min-h-52' : 'min-h-72',
      )}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-75', project.accent)} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,6,23,0.18),rgba(2,6,23,0.78))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative mb-5 flex items-center justify-between rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">{project.focus}</span>
      </div>
      <div className="relative h-full">{previewContent[project.previewType]}</div>
    </div>
  );
};

const ProjectCard = ({ project, index, variant = 'card' }: { project: Project; index: number; variant?: 'hero' | 'card' }) => {
  const visual = categoryConfig[project.category];
  const IconComponent = visual.icon;
  const primaryTech = project.tech.slice(0, 4);
  const isHero = variant === 'hero';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.18) }}
      className={cn(
        'group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-gradient-to-b from-card to-muted/20 p-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-2xl hover:shadow-primary/10',
        isHero ? 'grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:p-4' : 'flex h-full flex-col gap-4'
      )}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <PreviewPanel project={project} compact={!isHero} />

      <div className={cn('flex flex-col', isHero ? 'p-2 lg:py-4' : 'px-1 pb-1')}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={cn('inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm', visual.color)}>
            <IconComponent className="h-3.5 w-3.5" />
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-600 shadow-sm dark:text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            {project.ownership}
          </span>
        </div>

        <div className="mb-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{project.focus}</p>
          <h3 className={cn('font-display font-black tracking-tight text-foreground', isHero ? 'text-3xl md:text-5xl' : 'text-2xl')}>
            {project.title}
          </h3>
        </div>

        <p className={cn('text-muted-foreground', isHero ? 'text-base leading-8' : 'text-sm leading-7')}>
          {project.description}
        </p>

        <div className="my-5 rounded-2xl border border-border/70 bg-background/75 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Recruiter takeaway
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{project.impact}</p>
        </div>

        <div className="mb-5 grid gap-2 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-2xl border border-border bg-background/85 px-3 py-3 text-center text-xs font-bold text-foreground shadow-sm">
              {metric}
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-border/60 pt-5">
          <h4 className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Terminal className="h-3 w-3" />
            Primary Stack
          </h4>
          <div className="mb-5 flex flex-wrap gap-1.5">
            {primaryTech.map((tech) => (
              <span key={tech} className="rounded-lg border border-border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground">
                {tech}
              </span>
            ))}
            {project.tech.length > primaryTech.length && (
              <span className="rounded-lg border border-border bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                +{project.tech.length - primaryTech.length}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.demo && (
              <Button size="sm" className="rounded-full" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo`}>
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button variant="outline" size="sm" className="rounded-full bg-background" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} GitHub repository`}>
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          </div>
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

  const heroProject = filteredProjects.find((project) => project.featured) ?? filteredProjects[0];
  const standardProjects = filteredProjects.filter((project) => project !== heroProject);

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
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Solo Product Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl"
            >
              Solo-built products with proof.
            </motion.h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Every project here was built end-to-end by me, from product thinking and UI to backend systems, AI workflows, and deployment.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-foreground">{projects.length}+</div>
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Solo Builds</div>
              </div>
              <div>
                <div className="text-2xl font-black text-foreground">6</div>
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
          <div className="space-y-6">
            <ProjectCard project={heroProject} index={0} variant="hero" />
            {standardProjects.length > 0 && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {standardProjects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i + 1} />
                ))}
              </div>
            )}
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
