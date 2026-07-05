import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      {/* Outer wrapper for positioning - always centered */}
      <div
        className={cn(
          "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] mt-0",
          scrolled ? "mt-4 max-w-fit" : "w-full"
        )}
      >
        <nav
          className={cn(
            "flex items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
            "backdrop-blur-xl border shadow-lg shadow-black/5 dark:shadow-black/20",
            scrolled
              ? "gap-2 px-5 py-2.5 rounded-full bg-background/60 border-white/[0.08]"
              : "gap-6 px-6 sm:px-10 lg:px-16 py-4 rounded-none bg-background/40 border-white/[0.05] border-b"
          )}
        >
          {/* Logo - slides inward */}
          <a
            href="#"
            className={cn(
              "font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-all duration-700 flex-shrink-0",
              scrolled ? "mr-2" : "mr-auto"
            )}
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

          {/* Right side - slides inward */}
          <div
            className={cn(
              "hidden md:flex items-center gap-1 flex-shrink-0 transition-all duration-700",
              scrolled ? "ml-2" : "ml-auto"
            )}
          >
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
