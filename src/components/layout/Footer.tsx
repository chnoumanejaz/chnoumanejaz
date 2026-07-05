import { Github, Linkedin, X as XIcon, Mail, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { personalData } from "@/data/personal";

const socialLinks = [
  { label: "GitHub", icon: Github, href: personalData.social.github },
  { label: "LinkedIn", icon: Linkedin, href: personalData.social.linkedin },
  { label: "X", icon: XIcon, href: personalData.social.x },
  { label: "Email", icon: Mail, href: personalData.social.email },
];

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border overflow-hidden my-[24px]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-2 my-0 py-[52px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* CTA / Engage */}
          <div className="md:col-span-5">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              Let&apos;s build 
              <br />
              <span className="text-primary">production-ready products.</span>
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-sm">
            I&apos;m open to remote full-stack roles, freelance projects, and product teams building SaaS dashboards, APIs, admin portals, and automation workflows.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleHashClick(e, "#contact")}
              className="inline-flex items-center gap-2 mt-5 text-primary font-medium hover:underline underline-offset-4 transition-all">

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
              { label: "Skills", href: "#skills" }].
              map((link) =>
              <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleHashClick(e, link.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {[
              { label: "Resume", href: personalData.resumeUrl },
              { label: "Contact", href: "#contact" }].
              map((link) =>
              <li key={link.label}>
                  {link.href.startsWith("/") ?
                <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link> :

                <a href={link.href} onClick={(e) => handleHashClick(e, link.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                }
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, icon: Icon, href }) =>
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">

                  <Icon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Large name at the bottom with fade/blend effect */}
      <div className="pointer-events-none select-none overflow-hidden px-6 sm:px-10 lg:px-16 -mb-4">
        <div className="bg-gradient-to-b from-foreground/[0.10] to-transparent bg-clip-text w-full text-center">
          <span className="inline-block font-heading font-bold text-transparent leading-[0.85] whitespace-nowrap" style={{ fontSize: 'clamp(3rem, 15vw, 18rem)' }}>
            <span className="sm:hidden">Nouman</span>
            <span className="hidden sm:inline">Nouman Ejaz</span>
          </span>
        </div>
      </div>
    </footer>);

}
