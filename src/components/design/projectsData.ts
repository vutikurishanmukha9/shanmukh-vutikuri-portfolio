import { ProjectData } from './ProjectModal';

export const RANKED_PRODUCTS: ProjectData[] = [
  {
    id: 'ai-royal-rumble',
    title: 'AI Royal Rumble',
    category: 'Arena & AI Model Battle UX',
    year: '2026',
    client: 'Autonomous Arena Systems',
    role: 'Lead Product & Interaction Designer',
    description: 'Every AI claims superiority. Tonight they prove it. A high-stakes live arena interface where LLM models battle in real-time.',
    longSummary: 'AI Royal Rumble moves away from dry developer benchmarks into an electrifying, event-driven arena. Users submit complex tasks, watch GPT-4o, Claude, Gemini, Grok, DeepSeek, and LLaMA compete simultaneously, and vote on the victor with sub-100ms reaction times.',
    problem: 'AI model evaluation benchmarks are overwhelmingly boring, static, and disconnected from real user comprehension.',
    solution: 'Designed an editorial dark luxury canvas with oversized serif typography, live split-pane token streaming, and an arena voting ledger.',
    impact: [
      'Rank 01 Flagship for visual distinctiveness and high-impact landing page UX.',
      'High-contrast editorial typography paired with focused dark luxury tone.',
      'Immersive inky atmosphere eliminating generic SaaS conventions.'
    ],
    tags: ['Arena UI', 'Editorial Typography', 'Dark Luxury', 'Token Streaming'],
    accentColor: '#991b1b',
    imageSrc: '/ui/AI-Royal Rumble.png',
    screens: [
      {
        title: 'Headline Statement & Live Prompt Input',
        subtitle: 'High-contrast typography immediately establishing the event-driven tension.',
        bgGradient: 'linear-gradient(135deg, rgba(153,27,27,0.25) 0%, rgba(7,8,10,0.95) 100%)'
      },
      {
        title: 'Multi-Model Real-Time Battle Canvas',
        subtitle: 'Simultaneous response rendering across 8 LLM engines with live voting.',
        bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(7,8,10,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 01', change: 'Flagship' },
      { label: 'Latency', value: '<45ms', change: 'Model Streaming' },
      { label: 'Engagement', value: '92%', change: 'Task Completion' }
    ]
  },
  {
    id: 'clean-slate',
    title: 'Clean-Slate',
    category: 'File Intelligence & Privacy Tool',
    year: '2026',
    client: 'Private by Default Open Source',
    role: 'Staff Product Designer',
    description: 'Know what your files are carrying. Deep EXIF metadata scanner and intelligent text sanitization interface.',
    longSummary: 'Clean-Slate inspects hidden metadata, geographic coordinates, hardware fingerprints, and sensitive payload signals inside files. Designed with warm bone and terracotta editorial precision, it transforms forensic metadata into glanceable privacy decisions.',
    problem: 'File metadata tools are either confusing CLI utilities or clumsy enterprise software nightmares.',
    solution: 'Engineered a dual-column layout pairing a clean statement hero with an interactive, live file telemetry card featuring automated privacy risk grading.',
    impact: [
      'Rank 02 Core Product Design showcase for functional data density.',
      'Complex forensic metadata synthesized into glanceable, human-friendly badges.',
      'Streamlined workflow: Drop File -> Inspect Signals -> Sanitize -> Export.'
    ],
    tags: ['File Intelligence', 'Privacy UX', 'Metadata Inspector', 'Editorial Layout'],
    accentColor: '#c2410c',
    imageSrc: '/ui/Clean Slate.png',
    screens: [
      {
        title: 'Interactive Metadata Telemetry Card',
        subtitle: 'Real-time GPS, device model, and sensitive signal classification.',
        bgGradient: 'linear-gradient(135deg, rgba(194,65,12,0.2) 0%, rgba(13,14,19,0.95) 100%)'
      },
      {
        title: 'Text Studio & Machine Sanitizer',
        subtitle: 'Refining synthetic AI text into authentic, personalized human writing.',
        bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 02', change: 'Product Core' },
      { label: 'Detection', value: '23 Fields', change: 'Instant Scan' },
      { label: 'Retention', value: '0 sec', change: 'Zero Storage' }
    ]
  },
  {
    id: 'problems-ap',
    title: 'Problems@AP',
    category: 'Civic Intelligence & Geospatial UX',
    year: '2025',
    client: 'Citizen-Built Platform',
    role: 'Lead UI/UX Systems Architect',
    description: 'Independent civic platform empowering citizens to voice and track public infrastructure issues across 175 assembly constituencies.',
    longSummary: 'Problems@AP maps citizen grievances across 175 assembly seats, 57 ministries, and 28 districts in Andhra Pradesh. Features an OpenStreetMap live geospatial visualizer, 100% anonymous reporting, and real-time civic aggregation telemetry.',
    problem: 'Citizens face opaque bureaucratic walls with zero visibility into local constituency issues or departmental resolution status.',
    solution: 'Designed a high-clarity civic portal with instant report submission, public issue maps, and statewide live statistics.',
    impact: [
      'Rank 03 Showcase for systemic product storytelling and information architecture.',
      'Cohesive civic color system (Amber, Red, Cream) elevating public utility design.',
      '100% anonymous, zero-auth architecture removing citizen friction.'
    ],
    tags: ['Civic UX', 'Geospatial Maps', 'OpenStreetMap', 'Public Telemetry'],
    accentColor: '#ea580c',
    imageSrc: '/ui/AP@Problems.png',
    screens: [
      {
        title: 'Statewide Civic Pulse Dashboard',
        subtitle: 'Real-time breakdown of constituencies, ministries, and district activity.',
        bgGradient: 'linear-gradient(135deg, rgba(234,88,12,0.2) 0%, rgba(13,14,19,0.95) 100%)'
      },
      {
        title: 'OpenStreetMap Problem Spatial View',
        subtitle: 'Visual geospatial density clusters highlighting urgent public issues.',
        bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 03', change: 'Civic System' },
      { label: 'Coverage', value: '175 Seats', change: '57 Ministries' },
      { label: 'Friction', value: '0 Login', change: '100% Anonymous' }
    ]
  },
  {
    id: 'ele-visualize',
    title: 'Ele-visualize',
    category: 'Scientific 3D & Quantum Inspector',
    year: '2025',
    client: 'Quantum Science Laboratory',
    role: 'Lead Interface Architect',
    description: 'Visualize the building blocks of the universe. Interactive quantum 3D visualizer, molecular builder, and atomic inspector.',
    longSummary: 'Ele-visualize bridges physics simulation with software ergonomics. Users rotate quantum 3D atom states, compare orbital shells, construct molecular bonds, and observe nuclear decay paths with sub-pixel precision.',
    problem: 'Scientific educational tools are traditionally dated, static, and unintuitive for spatial atomic understanding.',
    solution: 'Architected a comprehensive scientific workspace organized into Discovery -> Exploration -> Inspection layers with interactive 3D rotation controls.',
    impact: [
      'Rank 04 Complex UI Architecture piece structuring high-density controls.',
      'Mint green and pastel spectrum creating an authentic precision instrument aesthetic.',
      'Sub-60fps 3D canvas interaction across 118 periodic elements.'
    ],
    tags: ['3D Quantum Canvas', 'Scientific UI', 'Periodic Table', 'Complex IA'],
    accentColor: '#10b981',
    imageSrc: '/ui/Ele-Visualize.png',
    screens: [
      {
        title: 'Quantum Interactive 3D Visualizer',
        subtitle: 'Auto-spinning 3D atomic nucleus with orbital magnification controls.',
        bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(13,14,19,0.95) 100%)'
      },
      {
        title: 'Atomic Category Discovery Rail',
        subtitle: 'Instant filtering from Alkali metals to Noble gases and Actinides.',
        bgGradient: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 04', change: 'Complex IA' },
      { label: 'Elements', value: '118 Total', change: 'Full System' },
      { label: 'Frame Rate', value: '60 FPS', change: '3D WebGL' }
    ]
  },
  {
    id: 'get-report',
    title: 'GetReport',
    category: 'Auditable Data Ledger & RAG Reporting',
    year: '2025',
    client: 'Data Synthesis Platform',
    role: 'Product Designer & Frontend Architect',
    description: 'Turn raw data into publication-ready reports. Auditable data health ledger with automated RAG synthesis and statistical PDF compilation.',
    longSummary: 'GetReport streamlines statistical auditing for analysts. Users upload CSV or Excel files, review data integrity in an interactive ledger, analyze collinearity, and receive a publication-ready PDF with Grade-A data health certification.',
    problem: 'Data analysts waste hours converting raw spreadsheets into executive-ready PDF presentations.',
    solution: 'Designed an active processing log showing real-time Polars ingest, VIF collinearity calculation, and RAG synthesis with clear primary and secondary CTA hierarchy.',
    impact: [
      'Rank 05 SaaS Execution piece displaying authentic data workflows.',
      'Cream, burgundy, and charcoal palette delivering an executive auditable feel.',
      'Reduced report compilation from 45 minutes to 4 seconds.'
    ],
    tags: ['SaaS Ledger', 'RAG Synthesis', 'Data Health Score', 'PDF Automation'],
    accentColor: '#881337',
    imageSrc: '/ui/GetReport.png',
    screens: [
      {
        title: 'Active Processing Logs & Ledger',
        subtitle: 'Real-time telemetry tracking Polars ingest, integrity score, and RAG synthesis.',
        bgGradient: 'linear-gradient(135deg, rgba(136,19,55,0.2) 0%, rgba(13,14,19,0.95) 100%)'
      },
      {
        title: 'Data Health Score & Grade Certification',
        subtitle: 'Automated statistical verification rating data cleanliness.',
        bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 05', change: 'SaaS Design' },
      { label: 'Speed', value: '4 sec', change: 'PDF Generation' },
      { label: 'Integrity', value: 'Grade A', change: 'Automated Audit' }
    ]
  },
  {
    id: 'heart-out',
    title: 'HeartOut',
    category: 'Editorial Platform & Human Stories',
    year: '2025',
    client: 'Sanctuary for Stories',
    role: 'Lead Brand & Interaction Designer',
    description: 'Where every quiet story finds a home. Authentic personal experiences, unexpressed letters, and moments of courage free from social performance.',
    longSummary: 'HeartOut rethinks social publishing into an intimate, anonymous sanctuary. Users share unsent letters, life lessons, and quiet reflections without algorithms, follower counts, or performative metrics.',
    problem: 'Modern social networks incentivize performative vanity, leaving no safe space for vulnerable human reflections.',
    solution: 'Crafted a warm amber editorial serif reading sanctuary with intuitive category cards and an empathetic bottom reflection bar.',
    impact: [
      'Rank 06 Brand & Editorial showcase for human-centered vulnerability.',
      'Warm serif typography establishing a book-like intimate reading environment.',
      'High emotional resonance across 6 curated reflection hubs.'
    ],
    tags: ['Editorial Brand', 'Emotional UX', 'Sanctuary Design', 'Writing Platform'],
    accentColor: '#d97706',
    imageSrc: '/ui/HeartOut.png',
    screens: [
      {
        title: 'Curated Emotional Category Bento',
        subtitle: 'Success stories, unsent letters, sacrifices, and quiet reflections.',
        bgGradient: 'linear-gradient(135deg, rgba(217,119,6,0.2) 0%, rgba(13,14,19,0.95) 100%)'
      },
      {
        title: 'Quiet Reflection Drawer',
        subtitle: 'Distraction-free input mode inviting authentic, unhurried expression.',
        bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 06', change: 'Editorial' },
      { label: 'Categories', value: '6 Curated', change: 'Story Hubs' },
      { label: 'Social Clutter', value: '0%', change: 'Algorithm Free' }
    ]
  },
  {
    id: 'prompt-buddy',
    title: 'PromptBuddy',
    category: 'AI Prompt Optimizer & Workbench',
    year: '2025',
    client: 'Productivity Labs',
    role: 'Product Designer',
    description: 'Turn messy requests into production-ready AI prompts. Four-step structured prompt workbench for ChatGPT, Claude, and Gemini.',
    longSummary: 'PromptBuddy eliminates trial-and-error prompt engineering. Users enter raw requests, select role/objective parameters, and generate structured prompts with role, context, instructions, and format constraints.',
    problem: 'Users struggle with hallucinating AI outputs due to vague, unstructured input requests.',
    solution: 'Designed a clean, multi-step workbench separating raw input from structured role/objective/format previews with 1-click clipboard export.',
    impact: [
      'Rank 07 Workflow Piece demonstrating structured step-by-step application design.',
      'Clear split-pane interface comparing raw input vs optimized structured prompt.',
      'Compatible across ChatGPT, Claude, and Gemini prompt standards.'
    ],
    tags: ['Prompt Workbench', '4-Step Flow', 'AI Ergonomics', 'Split Screen'],
    accentColor: '#059669',
    imageSrc: '/ui/Prompt Buddy.png',
    screens: [
      {
        title: 'Structured Prompt Preview Canvas',
        subtitle: 'Clean role, objective, context, instructions, and format breakdown.',
        bgGradient: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      },
      {
        title: '4-Step Sequential Workflow Bar',
        subtitle: 'Clear progression: Paste -> Settings -> Generate -> Export.',
        bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(13,14,19,0.95) 100%)'
      }
    ],
    metrics: [
      { label: 'Priority', value: 'Rank 07', change: 'Clean Flow' },
      { label: 'Steps', value: '4 Steps', change: 'Zero Confusion' },
      { label: 'Retries', value: '-65%', change: 'In AI Responses' }
    ]
  }
];
