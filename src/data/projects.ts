export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  badges: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  coverImage: string;
  galleryImages: string[];
  coverGradient: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    slug: "cloudsync-dashboard",
    title: "CloudSync Dashboard",
    description:
      "A real-time analytics dashboard for cloud infrastructure monitoring with interactive charts, alert management, and team collaboration features.",
    badges: ["Featured", "Open Source"],
    technologies: ["React", "TypeScript", "D3.js", "WebSocket"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    coverImage: "project-cloudsync",
    galleryImages: [],
    coverGradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    problem: "Engineering teams lacked a unified view of their cloud infrastructure, leading to slow incident response times and missed performance issues across distributed systems.",
    solution: "Built a real-time dashboard with WebSocket-powered live updates, interactive D3.js charts, and a configurable alert system. Implemented team collaboration features including shared views and annotation tools.",
    outcome: "Reduced mean time to detection (MTTD) by 60% and improved incident response times by 45%. Adopted by 3 engineering teams internally, monitoring 200+ cloud services.",
  },
  {
    id: "2",
    slug: "ai-content-studio",
    title: "AI Content Studio",
    description:
      "An AI-powered content creation platform with natural language processing, image generation, and smart content scheduling.",
    badges: ["Featured"],
    technologies: ["Next.js", "OpenAI", "Prisma", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    coverImage: "project-ai-studio",
    galleryImages: [],
    coverGradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    problem: "Content creators spent 4-6 hours per article on research, writing, and formatting. Scheduling across platforms was manual and error-prone.",
    solution: "Developed an AI-assisted writing platform leveraging OpenAI APIs for drafting, editing suggestions, and SEO optimization. Built a unified scheduling engine supporting multiple publishing platforms.",
    outcome: "Cut content creation time by 70%. Platform processes 500+ articles monthly with 95% user satisfaction rating. Successfully launched to 200+ beta users.",
  },
  {
    id: "3",
    slug: "devflow-cli",
    title: "DevFlow CLI",
    description:
      "A command-line tool for automating development workflows — scaffolding, linting, deployment, and environment management in one package.",
    badges: ["Open Source"],
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    coverImage: "project-devflow",
    galleryImages: [],
    coverGradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    problem: "Developers wasted 30+ minutes daily on repetitive setup tasks: creating projects, configuring linters, managing environments, and deploying manually.",
    solution: "Created a modular CLI tool with pluggable commands for scaffolding, linting, testing, and deployment. Added environment management with encrypted secrets and team-shared configurations.",
    outcome: "300+ GitHub stars in the first month. Saved an estimated 15 hours/week for a team of 8 developers. Published as an npm package with 2,000+ weekly downloads.",
  },
  {
    id: "4",
    slug: "ecotrack-mobile",
    title: "EcoTrack Mobile",
    description:
      "A sustainability tracking app that helps users monitor and reduce their carbon footprint through daily habit tracking and community challenges.",
    badges: ["In Progress"],
    technologies: ["React Native", "Supabase", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    coverImage: "project-ecotrack",
    galleryImages: [],
    coverGradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    problem: "Individuals struggle to understand their environmental impact and lack motivation to adopt sustainable habits consistently.",
    solution: "Built a gamified mobile app with daily habit tracking, carbon footprint calculators, and community challenges. Used Supabase for real-time leaderboards and social features.",
    outcome: "Currently in beta with 500+ users. Average daily engagement of 12 minutes. Users report 25% reduction in estimated carbon footprint after 30 days of use.",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
