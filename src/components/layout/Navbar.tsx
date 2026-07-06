import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AccentSwitcher } from "@/components/AccentSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    setMobileOpen(false);

    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
      <div className="mt-4 w-full max-w-fit transition-all duration-300 ease-out">
        <nav
          className={cn(
            "flex items-center transition-all duration-300 ease-out",
            "gap-2 rounded-full border border-white/[0.12] bg-background/55 px-5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl supports-[backdrop-filter]:bg-background/45 dark:border-white/[0.08] dark:shadow-black/20"
          )}
        >
          <a
            href="#"
            className="mr-2 flex-shrink-0 font-heading text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary sm:text-2xl"
          >
            NE<span className="text-primary">.</span>
          </a>

          {/* Desktop nav links - always in center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors group whitespace-nowrap",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-0.5 bg-primary transition-transform origin-left",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </a>
              );
            })}
          </div>

          <div className="ml-2 hidden flex-shrink-0 items-center gap-1 md:flex">
            <AccentSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile nav */}
          <div className="flex md:hidden items-center gap-1 ml-auto">
            <AccentSwitcher />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden mt-2 bg-background/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 animate-fade-in overflow-hidden">
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
