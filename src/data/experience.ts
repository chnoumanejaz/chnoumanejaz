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
    company: "Visnext Software Solutions",
    role: "Software Engineer",
    period: "2024 — Present",
    description:
      "Working at a full-cycle custom software development company focused on delivering high-quality web and mobile solutions across industries. Responsible for improving application performance, security, and scalability while mentoring team members.",
    highlights: [
      "Optimized application performance, making key products faster and more secure",
      "Led and supported a team of 2 engineers, improving code quality and delivery speed",
      "Architected scalable backend and frontend systems to handle increased load",
    ],
    technologies: ["Python", "TypeScript", "React", "Django", "DigitalOcean", "CI/CD"],
  },
  {
    id: "2",
    company: "Gripo.io",
    role: "React Developer",
    period: "2022 — 2024",
    description:
      "Worked for a cloud-native automation and Kubernetes management platform that helps teams deploy and operate multi-cloud infrastructure with ease. Built scalable, optimized frontend solutions and contributed to backend logic where needed.",
    highlights: [
      "Designed and built scalable frontend architecture using Next.js, improving page responsiveness",
      "Increased overall web performance by 40% through optimization efforts",
      "Collaborated with cloud services including AWS, Azure, and DigitalOcean integrations",
    ],
    technologies: ["Next.js", "React", "Go (backend)", "Azure", "AWS", "DigitalOcean"],
  },
  {
    id: "3",
    company: "Web Development Intern & Freelance",
    role: "Web Developer",
    period: "2020 — 2022",
    description:
      "Completed internships and freelance projects building custom websites and web applications for small businesses and individual clients. Focused on delivering polished UI, responsive design, and reliable functionality.",
    highlights: [
      "Delivered multiple client projects on time with positive feedback",
      "Built responsive and interactive web interfaces using modern JavaScript frameworks",
      "Communicated directly with clients to gather requirements and deliver results",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Frontend Frameworks"],
  },
];
