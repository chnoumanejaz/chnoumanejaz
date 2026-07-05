export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "autocall",
    company: "AutoCall",
    companyUrl: "https://www.autocall.com.au/",
    role: "Senior Frontend Engineer",
    period: "June 2026 — Present",
    description:
      "Building an AI-powered contact centre platform across call analytics, AI agents, reporting dashboards, routing workflows, integrations, and role-based admin systems.",
    highlights: [
      "Building full-stack features for AI agents, call analytics, reporting, and contact centre workflows.",
      "Developing scalable dashboards and admin interfaces with React, Next.js, and TypeScript.",
      "Working across routing workflows, integrations, and role-based admin systems.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "AI Agents"],
  },
  {
    id: "visnext",
    company: "Visnext Software Solutions",
    companyUrl: "https://www.visnext.com/",
    role: "Software Engineer",
    period: "June 2024 — June 2026",
    description:
      "Built production-ready web and mobile solutions for client projects, focusing on full-stack development, dashboards, APIs, admin systems, performance, and deployment workflows.",
    highlights: [
      "Built and improved full-stack product features across React, Django, Python, and TypeScript applications.",
      "Developed dashboards, admin portals, API-driven workflows, and client-facing production features.",
      "Improved application performance, security, scalability, and delivery quality through code reviews and technical guidance.",
    ],
    technologies: ["React", "TypeScript", "Python", "Django", "FastAPI", "PostgreSQL", "CI/CD"],
  },
  {
    id: "gripo",
    company: "Gripo.io",
    companyUrl: "https://gripo.io/",
    role: "Frontend Engineer",
    period: "November 2022 — June 2024",
    description:
      "Built frontend systems for a DevOps workflow automation platform covering visual workflows, cloud automation, Kubernetes operations, plugin integrations, and infrastructure dashboards.",
    highlights: [
      "Built scalable frontend architecture with React and Next.js for cloud and workflow automation features.",
      "Improved web performance by 40% through rendering optimization, component refactoring, and frontend performance fixes.",
      "Created reusable UI components and product flows for workflow builders, plugins, and infrastructure management.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Kubernetes UI", "Workflow Automation", "AWS"],
  },
  {
    id: "freelance",
    company: "Internship & Freelance Projects",
    role: "Web Developer / Freelance Developer",
    period: "June 2021 — November 2022",
    description:
      "Built websites, landing pages, and custom web applications for small businesses, individual clients, and early-stage projects.",
    highlights: [
      "Delivered responsive websites and interactive web apps using HTML, CSS, JavaScript, and React.",
      "Handled client communication, requirements gathering, revisions, and final delivery independently.",
      "Built a strong foundation in UI implementation, responsive design, debugging, and project ownership.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
];
