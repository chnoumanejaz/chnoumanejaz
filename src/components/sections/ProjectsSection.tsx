import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";

export function ProjectsSection() {
  return (
    <ParallaxSection speed={0.06}>
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <SectionHeading
              title="Featured Projects"
              subtitle="A selection of projects I've built and contributed to."
            />
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {projectsData.map((project) => (
              <StaggerItem key={project.id}>
                <motion.div
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.12)" }}
                >
                  {/* Cover image area */}
                  <div className={`relative h-40 bg-gradient-to-br ${project.coverGradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <span className="font-heading text-6xl font-bold text-foreground">{project.title.charAt(0)}</span>
                    </div>
                  </div>

                  <div className="p-6 -mt-8 relative">
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
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-4 w-4" /> View Code
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </ParallaxSection>
  );
}
