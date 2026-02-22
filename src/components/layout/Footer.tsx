import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { personalData } from "@/data/personal";

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Large background name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-heading text-[12rem] sm:text-[16rem] lg:text-[20rem] font-bold text-foreground/[0.03] leading-none whitespace-nowrap">
          Nouman Ejaz
        </span>
      </div>

      <div className="container mx-auto px-6 py-16 relative">
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

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
