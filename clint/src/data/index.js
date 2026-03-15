// ─────────────────────────────────────────────
//  All static data for the portfolio
// ─────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 1,
    title: 'NexusFlow',
    category: 'Web App',
    desc: 'An AI-powered workflow automation platform built for distributed teams. Real-time collaboration, smart task routing, and predictive analytics.',
    tags: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    year: '2024',
    color: '#00EEFF',
    metrics: [
      { label: 'Users',         val: '12K+' },
      { label: 'Uptime',        val: '99.9%' },
      { label: 'Ops reduction', val: '40%'  },
    ],
  },
  {
    id: 2,
    title: 'Luminary UI',
    category: 'Design System',
    desc: 'A production-grade component library with 120+ accessible components, Figma integration, and automated visual regression testing.',
    tags: ['TypeScript', 'Storybook', 'Figma API', 'Jest'],
    year: '2024',
    color: '#5599FF',
    metrics: [
      { label: 'Components',   val: '120+' },
      { label: 'Downloads/mo', val: '8K'   },
      { label: 'Stars',        val: '2.4K' },
    ],
  },
  {
    id: 3,
    title: 'Terrain3D',
    category: 'Three.js',
    desc: 'Procedurally generated 3D terrain explorer using WebGL shaders, real-world elevation data APIs, and GPU-accelerated rendering.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'Vite'],
    year: '2023',
    color: '#00DDAA',
    metrics: [
      { label: 'FPS target', val: '60'    },
      { label: 'Triangles',  val: '2M'    },
      { label: 'Load time',  val: '<1.2s' },
    ],
  },
  {
    id: 4,
    title: 'PulseOS',
    category: 'Dashboard',
    desc: 'Real-time infrastructure monitoring dashboard with custom WebGL charts, alert workflows, and Kubernetes cluster visualization.',
    tags: ['Go', 'React', 'InfluxDB', 'K8s'],
    year: '2023',
    color: '#FF7755',
    metrics: [
      { label: 'Data pts/s', val: '50K'   },
      { label: 'Latency',    val: '<12ms' },
      { label: 'Clusters',   val: '200+'  },
    ],
  },
  {
    id: 5,
    title: 'Cipher API',
    category: 'Backend',
    desc: 'Zero-trust authentication microservice with JWTs, RBAC, rate limiting, and comprehensive audit logging. Battle-tested in production.',
    tags: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
    year: '2023',
    color: '#BB66FF',
    metrics: [
      { label: 'Req/s',       val: '80K'   },
      { label: 'P99 latency', val: '4ms'   },
      { label: 'Uptime',      val: '99.99%'},
    ],
  },
  {
    id: 6,
    title: 'Morph Mobile',
    category: 'React Native',
    desc: 'Cross-platform fitness app with computer vision pose detection, personalized AI coaching, and offline-first architecture.',
    tags: ['React Native', 'TensorFlow.js', 'SQLite', 'Expo'],
    year: '2022',
    color: '#FFBB22',
    metrics: [
      { label: 'Downloads', val: '28K' },
      { label: 'Rating',    val: '4.8★'},
      { label: 'DAU',       val: '6K'  },
    ],
  },
]

export const PROJECT_CATEGORIES = [
  'All', 'Web App', 'Design System', 'Three.js', 'Dashboard', 'Backend', 'React Native',
]

export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next.js',  level: 96 },
      { name: 'TypeScript',       level: 92 },
      { name: 'Three.js / WebGL', level: 84 },
      { name: 'CSS / Tailwind',   level: 94 },
      { name: 'Figma',            level: 88 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Go',                level: 82 },
      { name: 'PostgreSQL',        level: 86 },
      { name: 'Redis',             level: 80 },
      { name: 'GraphQL',           level: 78 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker / K8s',           level: 78 },
      { name: 'AWS / GCP',              level: 74 },
      { name: 'CI/CD (GitHub Actions)', level: 85 },
      { name: 'Linux / Bash',           level: 80 },
      { name: 'Git',                    level: 95 },
    ],
  },
]

export const LANGUAGES = [
  { label: 'TypeScript', pct: 96 },
  { label: 'Go',         pct: 82 },
  { label: 'Python',     pct: 70 },
  { label: 'Rust',       pct: 44 },
  { label: 'GLSL',       pct: 62 },
  { label: 'SQL',        pct: 88 },
  { label: 'Bash',       pct: 80 },
  { label: 'Lua',        pct: 32 },
]

export const TOOLS = [
  'VS Code', 'Figma', 'Postman',
  'Anti-Gravity', 'Linear', 'Notion', 'GitHub', 'Cursor',
]

export const TIMELINE = [
  {
    year: '2025',
    title: 'Frontend Engineer II',
    org: 'Gujarat , India',
    desc: 'Built the open-source Luminary UI design system from scratch. Grew adoption from 0 to 2K+ GitHub stars in 18 months.',
  },
  {
    year: '2024',
    title: 'Full Stack Developer',
    org: 'Ahmedabad , Gujarat',
    desc: 'Developed custom e-commerce platforms and interactive marketing microsites for Fortune 500 clients. Led a team of 3 junior devs.',
  },
  {
    year: '2024',
    title: 'BSc Computer Science',
    org: 'Ahmedabad , Gujarat',
    desc: 'Graduated with honors. Specialized in computer graphics and distributed systems. Thesis on procedural terrain generation.',
  },
]

export const VALUES = [
  {
    icon: '◈',
    title: 'Performance First',
    desc: 'Every millisecond matters. I obsess over Core Web Vitals, bundle sizes, and rendering pipelines before anything ships.',
  },
  {
    icon: '◉',
    title: 'Design Integrity',
    desc: "Beautiful products don't happen by accident. I push for consistency in spacing, type, and motion from day one.",
  },
  {
    icon: '⬡',
    title: 'Ship & Iterate',
    desc: 'Perfect is the enemy of done. I bias toward working software with fast feedback loops over perfect plans.',
  },
  {
    icon: '◎',
    title: 'Open Source First',
    desc: 'I try to give back. Whenever a solution is generalizable, I package and publish it for the community.',
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    featured: true,
    title: 'Building a Real-Time Collaboration Engine from Scratch',
    excerpt: 'How I designed and shipped a production-ready CRDT-based collaboration layer for NexusFlow, handling 50K+ concurrent users with sub-50ms latency.',
    tags: ['Architecture', 'WebSockets', 'CRDTs'],
    date: 'Dec 12, 2024',
    readTime: '11 min read',
    color: '#00EEFF',
  },
  {
    id: 2,
    featured: false,
    title: 'Why I Switched from Three.js to Raw WebGL for Terrain3D',
    excerpt: 'A deep dive into the performance gains, pitfalls, and GLSL shader patterns that unlocked 60fps at 2M triangle counts.',
    tags: ['WebGL', 'GLSL', 'Performance'],
    date: 'Nov 3, 2024',
    readTime: '8 min read',
    color: '#0055FF',
  },
  {
    id: 3,
    featured: false,
    title: 'The Design System Checklist I Wish I Had on Day One',
    excerpt: 'After building Luminary UI from scratch, here are 22 decisions you need to make before writing a single component.',
    tags: ['Design Systems', 'TypeScript'],
    date: 'Oct 18, 2024',
    readTime: '6 min read',
    color: '#00CCAA',
  },
  {
    id: 4,
    featured: false,
    title: 'Go vs Node.js for High-Throughput APIs: A 2024 Honest Take',
    excerpt: "I've shipped APIs in both. Here's the actual benchmarks, the hidden costs, and when each choice makes sense.",
    tags: ['Go', 'Node.js', 'Backend'],
    date: 'Sep 5, 2024',
    readTime: '9 min read',
    color: '#AA55FF',
  },
]

export const CONTACT_DETAILS = [
  { label: 'Email',         value: 'devamyadav2006@gmail.com',            accent: true  },
  { label: 'Location',      value: 'Gujarat,India (IST, UTC+5:30)', accent: false },
  { label: 'Availability',  value: 'Open to projects',         accent: true  },
  { label: 'Response time', value: '< 24 hours',               accent: false },
]

export const SOCIALS = ['GitHub', 'LinkedIn', 'Twitter']

export const STATS = [
  { num: '28+', label: 'PROJECTS SHIPPED'    },
  { num: '2yr', label: 'INDUSTRY EXPERIENCE' },
  { num: '12',  label: 'OPEN SOURCE LIBS'    },
  { num: '99%', label: 'CLIENT SATISFACTION' },
]

export const NAV_LINKS = ['Home', 'Work', 'About', 'Skills', 'Blog', 'Contact']
