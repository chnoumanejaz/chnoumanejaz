import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of projects I've built and contributed to."
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ScrollAnimation key={project.id} animation="scale-in" delay={index * 100}>
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                {/* Badges */}
                <div className="p-6 pb-0">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="text-[10px] uppercase tracking-wider font-semibold border-0"
                      >
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
                </div>

                {/* Tech tags */}
                <div className="p-6 pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action links - visible on hover */}
                  <div className="flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-4 w-4" /> View Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
