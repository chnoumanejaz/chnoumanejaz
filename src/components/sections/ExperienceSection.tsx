import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";

export function ExperienceSection() {
  return (
    <ParallaxSection speed={0.05} id="experience">
      <section className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <SectionHeading
              title="Experience"
              subtitle="My professional journey and the companies I've worked with."
            />
          </ScrollAnimation>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <StaggerContainer className="space-y-10" staggerDelay={0.15}>
              {experienceData.map((exp) => (
                <StaggerItem key={exp.id}>
                  <div className="relative pl-8 md:pl-20 group">
                    <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background transition-all group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/30" />

                    <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-heading text-lg font-bold">{exp.role}</h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{exp.description}</p>
                      <ul className="space-y-1.5 mb-4">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs font-normal">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}
