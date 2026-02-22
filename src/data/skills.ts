export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs", "Redis"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "CI/CD"],
  },
  {
    name: "Other",
    skills: ["Agile", "System Design", "Testing", "Performance", "Accessibility", "SEO"],
  },
];
