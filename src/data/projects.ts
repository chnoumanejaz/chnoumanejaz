export interface Project {
  id: string;
  title: string;
  description: string;
  badges: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "CloudSync Dashboard",
    description:
      "A real-time analytics dashboard for cloud infrastructure monitoring with interactive charts, alert management, and team collaboration features.",
    badges: ["Featured", "Open Source"],
    technologies: ["React", "TypeScript", "D3.js", "WebSocket"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    title: "AI Content Studio",
    description:
      "An AI-powered content creation platform with natural language processing, image generation, and smart content scheduling.",
    badges: ["Featured"],
    technologies: ["Next.js", "OpenAI", "Prisma", "Tailwind"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "3",
    title: "DevFlow CLI",
    description:
      "A command-line tool for automating development workflows — scaffolding, linting, deployment, and environment management in one package.",
    badges: ["Open Source"],
    technologies: ["Node.js", "TypeScript", "Commander.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/placeholder.svg",
  },
  {
    id: "4",
    title: "EcoTrack Mobile",
    description:
      "A sustainability tracking app that helps users monitor and reduce their carbon footprint through daily habit tracking and community challenges.",
    badges: ["In Progress"],
    technologies: ["React Native", "Supabase", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/placeholder.svg",
  },
];
