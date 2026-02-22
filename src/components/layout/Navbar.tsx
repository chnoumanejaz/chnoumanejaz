import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AccentSwitcher } from "@/components/AccentSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto flex items-center backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20",
          "transition-[max-width,padding,margin,border-radius,background-color,border-color] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
          scrolled
            ? "max-w-3xl mt-4 px-5 py-2.5 rounded-full bg-background/60 border border-white/[0.08]"
            : "max-w-full w-full mt-0 px-6 sm:px-10 lg:px-16 py-4 rounded-none bg-background/40 border-b border-white/[0.05]"
        )}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors flex-shrink-0"
        >
          NE<span className="text-primary">.</span>
        </a>

        {/* Left spacer - collapses on scroll */}
        <div
          className="transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ flexGrow: scrolled ? 0 : 1 }}
        />

        {/* Desktop nav links - always in center */}
        <div className="hidden md:flex items-center gap-1 mx-3">
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

        {/* Right spacer - collapses on scroll */}
        <div
          className="transition-[flex-grow] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ flexGrow: scrolled ? 0 : 1 }}
        />

        {/* Right side controls */}
        <div className="hidden md:flex items-center gap-1 flex-shrink-0">
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
        <div className="pointer-events-auto absolute top-full mt-2 left-4 right-4 md:hidden bg-background/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 animate-fade-in overflow-hidden">
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
    </header>
  );
}
