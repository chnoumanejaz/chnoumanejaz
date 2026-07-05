import { useEffect, useState } from "react";
import { Github, Linkedin, X as XIcon, Mail, Download, Mouse, Code2, Globe2, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

const socialLinks = [
  { label: "GitHub", icon: Github, href: personalData.social.github },
  { label: "LinkedIn", icon: Linkedin, href: personalData.social.linkedin },
  { label: "X", icon: XIcon, href: personalData.social.x },
  { label: "Email", icon: Mail, href: personalData.social.email },
];

const profileHighlights = [
  { icon: Globe2, label: "Available for Remote Roles" },
  { icon: Layers3, label: "Full Stack / Frontend / Backend" },
  { icon: Code2, label: "React · Next.js · Node.js · Django · FastAPI" },
];

const HERO_SIDEBAR_VISIT_KEY = "portfolio-nouman-hero-sidebar-visited";

function StatCounter({ value, label, index }: {value: string;label: string;index: number;}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>

      <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{value}</div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>);

}

export function HeroSidebar() {
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);

  useEffect(() => {
    try {
      const hasVisited = window.localStorage.getItem(HERO_SIDEBAR_VISIT_KEY) === "true";
      setHasVisitedBefore(hasVisited);

      if (!hasVisited) {
        window.localStorage.setItem(HERO_SIDEBAR_VISIT_KEY, "true");
      }
    } catch {
      setHasVisitedBefore(false);
    }
  }, []);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg py-[32px]">
      <div className="relative w-28 h-28 mx-auto mb-5">
        <motion.img
          src={personalData.avatarUrl}
          alt={personalData.name}
          width="112"
          height="112"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-primary/20"
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          transition={{ type: "spring", stiffness: 300 }}>
        </motion.img>
        {personalData.available &&
        <div className="absolute bottom-0 right-0 z-10">
            <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 border-2 border-background shadow-md">
              Available
            </Badge>
          </div>
        }
      </div>

      <div className="text-center mb-6">
        <h2 className="font-heading text-xl font-bold">{personalData.name}</h2>
        <p className="text-xs text-muted-foreground mt-1">Based in {personalData.location} · Remote-first</p>
      </div>

      <div className="space-y-2.5 mb-6">
        {profileHighlights.map(({ icon: Icon, label }) =>
        <div
          key={label}
          className="flex items-center gap-3 rounded-xl border border-border/70 bg-secondary/45 px-3.5 py-3 text-left">

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium leading-snug text-foreground">{label}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mb-6">
        {socialLinks.map(({ label, icon: Icon, href }, i) =>
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
          className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}>

            <Icon className="h-4 w-4" />
          </motion.a>
        )}
      </div>

      <div className="flex flex-col gap-2.5">
        <Button className="w-full rounded-xl" asChild>
          <a href={hasVisitedBefore ? "#contact" : "#projects"}>
            {hasVisitedBefore ? "Contact Me" : "View Projects"}
          </a>
        </Button>
        <Button variant="outline" className="w-full gap-2 rounded-xl" asChild>
          <a href={personalData.resumeUrl}>
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>
    </div>);

}


export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16 mx-[24px] scroll-mt-24">
      <div className="w-full">
        {/* Left sidebar - visible only on mobile */}
        <ScrollAnimation animation="slide-in-left" className="lg:hidden mb-10 sticky">
          <HeroSidebar />
        </ScrollAnimation>

        {/* Right content - takes full width */}
        <div>
          <ScrollAnimation animation="fade-up">
            <p className="text-primary font-medium mb-3">Hello, I'm</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {personalData.name}
              <span className="text-primary">.</span>
            </h1>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-2xl font-semibold text-muted-foreground mt-3 min-h-[2.5em] leading-snug max-w-3xl">
              {personalData.heroHeadline}
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            I turn rough ideas into reliable products, from polished frontend interfaces and dashboards to scalable APIs, admin portals, and integrations.
            </p>
          </ScrollAnimation>

          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-card/50 border border-border/50 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}>

            {personalData.stats.map((stat, i) =>
            <StatCounter key={i} value={stat.value} label={stat.label} index={i} />
            )}
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}>

            <a
              href="#experience"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">

              <Mouse className="h-8 w-8 animate-float" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}
