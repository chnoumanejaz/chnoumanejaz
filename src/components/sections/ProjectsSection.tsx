import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { personalData } from "@/data/personal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import { getProjectCoverImage } from "@/lib/projectImages";

export function ProjectsSection() {
  return (
    <ParallaxSection speed={0.06} id="projects">
      <section className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <SectionHeading
              title="Featured Projects"
              subtitle="A selection of projects I've built and contributed to."
            />
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {projectsData.map((project) => {
              const coverSrc = getProjectCoverImage(project.coverImage);
              return (
                <StaggerItem key={project.id}>
                  <Link to={`/projects/${project.slug}`} className="group block h-full">
                    <motion.article
                      className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 h-full"
                      whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.12)" }}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={coverSrc}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          width="600"
                          height="400"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>

                      <div className="p-6 -mt-6 relative">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.badges.map((badge) => (
                            <Badge key={badge} className="text-[10px] uppercase tracking-wider font-semibold border-0">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                        <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mt-2 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollAnimation>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group h-12 rounded-full border-primary/30 bg-background/70 px-5 font-semibold shadow-sm backdrop-blur hover:border-primary/60 hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Check more projects on GitHub"
                >
                  <Github className="h-4 w-4" />
                  Check More Projects
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </ParallaxSection>
  );
}
