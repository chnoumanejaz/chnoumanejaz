export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "TechCorp Inc.",
    role: "Senior Software Engineer",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture for a SaaS platform serving 100k+ users. Implemented micro-frontend architecture, reducing bundle size by 40%. Mentoring junior developers and driving code quality initiatives.",
    highlights: [
      "Reduced page load time by 60% through code splitting and lazy loading",
      "Led migration from REST to GraphQL, improving data fetching efficiency",
      "Mentored 4 junior developers, 2 promoted within a year",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "AWS"],
  },
  {
    id: "2",
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2021 — 2023",
    description:
      "Built and shipped the core product from 0 to 1, handling both frontend and backend. Designed RESTful APIs, implemented real-time features with WebSockets, and integrated payment processing.",
    highlights: [
      "Architected and launched MVP in 3 months, acquiring 5k users in first quarter",
      "Implemented real-time collaboration features using WebSockets",
      "Integrated Stripe payment processing handling $500k+ in transactions",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "3",
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    period: "2019 — 2021",
    description:
      "Delivered pixel-perfect, responsive web experiences for Fortune 500 clients. Specialized in animation-rich marketing sites and interactive dashboards.",
    highlights: [
      "Delivered 15+ client projects on time with 98% satisfaction rate",
      "Built interactive data dashboards reducing reporting time by 70%",
      "Created reusable component library adopted across 3 teams",
    ],
    technologies: ["React", "GSAP", "Tailwind CSS", "Firebase"],
  },
  {
    id: "4",
    company: "Freelance",
    role: "Web Developer",
    period: "2018 — 2019",
    description:
      "Worked with small businesses and startups to establish their online presence. Designed and developed custom WordPress themes and headless CMS solutions.",
    highlights: [
      "Completed 20+ freelance projects across diverse industries",
      "Increased client conversion rates by average of 35% through UX improvements",
      "Built custom e-commerce solutions generating $200k+ in client revenue",
    ],
    technologies: ["JavaScript", "WordPress", "PHP", "CSS"],
  },
];
