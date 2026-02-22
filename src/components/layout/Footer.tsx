import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { personalData } from "@/data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* CTA / Engage */}
          <div className="md:col-span-5">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Let's build something
              <br />
              <span className="text-primary">amazing together.</span>
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">
              I'm currently available for freelance work and full-time positions. 
              If you have a project that needs some creative magic, let's talk.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-5 text-primary font-medium hover:underline underline-offset-4 transition-all"
            >
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Resume", href: personalData.resumeUrl },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: personalData.social.github },
                { icon: Linkedin, href: personalData.social.linkedin },
                { icon: Twitter, href: personalData.social.twitter },
                { icon: Mail, href: personalData.social.email },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Large name at the bottom with fade/blend effect */}
      <div className="pointer-events-none select-none overflow-hidden px-6 sm:px-10 lg:px-16 -mb-4">
        <div
          className="bg-gradient-to-b from-foreground/[0.06] to-transparent bg-clip-text"
        >
          <span className="block font-heading text-[4rem] sm:text-[7rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] font-bold text-transparent leading-[0.85]">
            <span className="sm:hidden">Nouman</span>
            <span className="hidden sm:inline">Nouman Ejaz</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
