import { Github, Linkedin, Twitter, Mail, Download, Mouse } from "lucide-react";
import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";

function StatCounter({ value, label, index }: { value: string; label: string; index: number }) {
  return (
    <motion.div
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-heading text-lg sm:text-xl font-bold text-primary">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </motion.div>
  );
}

export function HeroSidebar() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
      <div className="relative w-28 h-28 mx-auto mb-5">
        <motion.div
          className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-primary/20"
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="font-heading text-3xl font-bold text-primary">NE</span>
        </motion.div>
        {personalData.available && (
          <div className="absolute -bottom-1 -right-1 animate-pulse-glow rounded-full">
            <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 border-0">
              Available
            </Badge>
          </div>
        )}
      </div>

      <div className="text-center mb-6">
        <h2 className="font-heading text-xl font-bold">{personalData.name}</h2>
        <p className="text-sm text-muted-foreground mt-1">{personalData.role}</p>
        <p className="text-xs text-muted-foreground mt-1">{personalData.location}</p>
      </div>

      <div className="flex items-center justify-center gap-2 mb-6">
        {[
          { icon: Github, href: personalData.social.github },
          { icon: Linkedin, href: personalData.social.linkedin },
          { icon: Twitter, href: personalData.social.twitter },
          { icon: Mail, href: personalData.social.email },
        ].map(({ icon: Icon, href }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Icon className="h-4 w-4" />
          </motion.a>
        ))}
      </div>

      <div className="flex flex-col gap-2.5">
        <Button className="w-full gap-2 rounded-xl" asChild>
          <a href={personalData.resumeUrl}>
            <Download className="h-4 w-4" /> Download CV
          </a>
        </Button>
        <Button variant="outline" className="w-full rounded-xl" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { displayed, done } = useTypingAnimation(personalData.role, 100, 800);

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="w-full">
        {/* Left sidebar - visible only on mobile */}
        <ScrollAnimation animation="slide-in-left" className="lg:hidden mb-10">
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
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2 min-h-[1.5em]">
              {displayed}
              {!done && (
                <motion.span
                  className="inline-block w-[3px] h-[0.9em] bg-primary ml-0.5 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                />
              )}
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {personalData.bio}
            </p>
          </ScrollAnimation>

          <motion.div
            className="mt-10 inline-flex flex-wrap items-center gap-3 sm:gap-4 p-3 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg shadow-primary/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {personalData.stats.map((stat, i) => (
              <StatCounter key={i} value={stat.value} label={stat.label} index={i} />
            ))}
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="#experience"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mouse className="h-8 w-8 animate-float" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
