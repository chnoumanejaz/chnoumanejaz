import { Github, Linkedin, Twitter, Mail, Download, ArrowDown } from "lucide-react";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

function StatCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-heading text-2xl sm:text-3xl font-bold text-primary">{value}</div>
      <div className="text-xs sm:text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left sidebar card */}
          <ScrollAnimation animation="slide-in-left" className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg">
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <span className="font-heading text-3xl font-bold text-primary">AJ</span>
                </div>
                {personalData.available && (
                  <div className="absolute -bottom-1 -right-1 animate-pulse-glow rounded-full">
                    <Badge className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 border-0">
                      Available
                    </Badge>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h2 className="font-heading text-xl font-bold">{personalData.name}</h2>
                <p className="text-sm text-muted-foreground mt-1">{personalData.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{personalData.location}</p>
              </div>

              {/* Social */}
              <div className="flex items-center justify-center gap-2 mb-6">
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
                    className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>

              {/* Buttons */}
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
          </ScrollAnimation>

          {/* Right content */}
          <div className="lg:col-span-8">
            <ScrollAnimation animation="fade-up">
              <p className="text-primary font-medium mb-3">Hello, I'm</p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                {personalData.name}
                <span className="text-primary">.</span>
              </h1>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2">
                {personalData.role}
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {personalData.bio}
              </p>
            </ScrollAnimation>

            {/* Stats */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-card border border-border rounded-2xl">
                {personalData.stats.map((stat, i) => (
                  <StatCounter key={i} value={stat.value} label={stat.label} />
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500}>
              <div className="mt-12 flex justify-center">
                <a
                  href="#experience"
                  className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="text-sm">Scroll down</span>
                  <ArrowDown className="h-4 w-4 animate-float" />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
