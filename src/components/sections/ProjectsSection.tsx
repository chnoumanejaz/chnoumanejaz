import { useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, Eye, X, Lightbulb, Wrench, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";

import projectCloudsync from "@/assets/project-cloudsync.jpg";
import projectAiStudio from "@/assets/project-ai-studio.jpg";
import projectDevflow from "@/assets/project-devflow.jpg";
import projectEcotrack from "@/assets/project-ecotrack.jpg";

const coverImages: Record<string, string> = {
  "project-cloudsync": projectCloudsync,
  "project-ai-studio": projectAiStudio,
  "project-devflow": projectDevflow,
  "project-ecotrack": projectEcotrack,
};

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const coverSrc = coverImages[project.coverImage] || "";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Cover image */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
          <img src={coverSrc} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="p-6 sm:p-8 -mt-12 relative">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.badges.map((badge) => (
              <Badge key={badge} className="text-[10px] uppercase tracking-wider font-semibold border-0">
                {badge}
              </Badge>
            ))}
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mt-3">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>

          {/* Problem / Solution / Outcome */}
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 h-fit">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-red-400 mb-1">The Problem</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 h-fit">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-blue-400 mb-1">The Solution</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary mb-1">The Outcome</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.outcome}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-6 border-t border-border">
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
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            {projectsData.map((project) => {
              const coverSrc = coverImages[project.coverImage] || "";
              return (
                <StaggerItem key={project.id}>
                  <motion.div
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
                    whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.12)" }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Cover image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={coverSrc}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                      {/* Hover open icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <motion.div
                          className="p-4 rounded-full bg-primary/90 text-primary-foreground"
                          initial={false}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Eye className="h-6 w-6" />
                        </motion.div>
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
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {createPortal(
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
          </AnimatePresence>,
          document.body
        )}
      </section>
    </ParallaxSection>
  );
}
