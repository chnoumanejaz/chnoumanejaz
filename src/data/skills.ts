export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    description: "Building responsive, fast, and polished user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    description: "Designing APIs, business logic, authentication, and scalable services.",
    skills: ["Node.js", "Django", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    name: "Data & Infrastructure",
    description: "Working with databases, caching, deployments, and production environments.",
    skills: ["PostgreSQL", "Redis", "Docker", "AWS", "DigitalOcean", "CI/CD", "Nginx"],
  },
  {
    name: "Engineering Quality",
    description: "Keeping products reliable, accessible, fast, and maintainable.",
    skills: ["Testing", "Performance", "Accessibility", "SEO", "System Design", "Code Reviews"],
  },
];
