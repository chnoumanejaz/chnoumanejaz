export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "SJ",
    content: "Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering high-quality code is exceptional."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at TechCorp",
    avatar: "MC",
    content: "Incredible technical skills combined with excellent communication. The project was delivered on time and exceeded our expectations."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Designer",
    avatar: "ER",
    content: "The ability to transform design concepts into pixel-perfect implementations is outstanding. A true professional who understands both design and development."
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Startup Founder",
    avatar: "DK",
    content: "From MVP to production, the expertise and guidance provided was invaluable. The code quality and architecture decisions were spot-on."
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Engineering Manager",
    avatar: "JM",
    content: "A rare combination of technical depth and creative problem-solving. Always delivers solutions that are both elegant and maintainable."
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Business Owner",
    avatar: "RT",
    content: "Our web application's performance improved dramatically. The optimization work was thorough and the results speak for themselves."
  }
];
