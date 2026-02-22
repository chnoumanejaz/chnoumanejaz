import { Github, Linkedin, Twitter, Heart, Mail } from "lucide-react";
import { personalData } from "@/data/personal";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: personalData.social.github },
      { label: "LinkedIn", href: personalData.social.linkedin },
      { label: "Twitter", href: personalData.social.twitter },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-heading text-3xl font-bold tracking-tight">
              NE<span className="text-primary">.</span>
            </a>
            <p className="mt-3 text-muted-foreground max-w-sm leading-relaxed">
              Software engineer passionate about building beautiful, performant web experiences. Let's create something amazing together.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={personalData.social.github} className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
              <a href={personalData.social.linkedin} className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={personalData.social.twitter} className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
              <a href={personalData.social.email} className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> and too much coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
