import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import { cn } from "@/lib/utils";

const homepageHighlightCount: Record<string, number> = {
  autocall: 3,
  visnext: 2,
  gripo: 2,
  freelance: 1,
};

type ExperienceCardVariant = "featured" | "medium" | "compact";

export function ExperienceSection() {
  const [showFullExperience, setShowFullExperience] = useState(false);
  const [featuredExperience, ...olderExperiences] = experienceData;

  return (
    <ParallaxSection speed={0.05} id="experience">
      <section className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <SectionHeading
              title="Experience"
              subtitle="A track record of building production-ready SaaS products, dashboards, APIs, admin portals, automation workflows, and AI-powered platforms across modern frontend and backend stacks."
            />
          </ScrollAnimation>

          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <StaggerContainer className="space-y-10" staggerDelay={0.15}>
              {featuredExperience && (
                <StaggerItem key={featuredExperience.id}>
                  <TimelineExperienceCard
                    experience={featuredExperience}
                    variant="featured"
                    highlightCount={
                      showFullExperience
                        ? featuredExperience.highlights.length
                        : homepageHighlightCount[featuredExperience.id]
                    }
                    expanded={showFullExperience}
                  />
                </StaggerItem>
              )}

              {olderExperiences.map((exp) => (
                <StaggerItem key={exp.id}>
                  <TimelineExperienceCard
                    experience={exp}
                    variant={exp.id === "freelance" ? "compact" : "medium"}
                    highlightCount={showFullExperience ? exp.highlights.length : homepageHighlightCount[exp.id]}
                    expanded={showFullExperience}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="flex justify-center mt-10 pl-8 md:pl-20">
              <Button
                variant="outline"
                className="rounded-xl gap-2"
                onClick={() => setShowFullExperience((current) => !current)}
              >
                {showFullExperience ? "Show less" : "View full experience"}
                <ArrowRight className={cn("h-4 w-4 transition-transform", showFullExperience && "-rotate-90")} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  );
}

function TimelineExperienceCard({
  experience,
  variant,
  highlightCount,
  expanded,
}: {
  experience: (typeof experienceData)[number];
  variant: ExperienceCardVariant;
  highlightCount: number;
  expanded: boolean;
}) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const visibleHighlights = experience.highlights.slice(0, highlightCount);

  return (
    <div className="relative pl-8 md:pl-20 group">
      <div
        className={cn(
          "absolute left-0 md:left-8 top-2 -translate-x-1/2 rounded-full bg-primary border-4 border-background transition-all group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/30",
          isFeatured ? "h-4 w-4" : "h-3 w-3"
        )}
      />

      <article
        className={cn(
          "bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500",
          isFeatured
            ? "rounded-2xl p-6 sm:p-7 bg-primary/[0.03] border-primary/20"
            : "rounded-xl p-4 sm:p-5",
          isCompact && "p-4"
        )}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
          <div>
            <h3 className={cn("font-heading font-bold leading-tight", isFeatured ? "text-xl" : "text-base")}>
              {experience.role}
            </h3>
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              >
                {experience.company}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <p className="text-primary font-medium text-sm">{experience.company}</p>
            )}
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">{experience.period}</span>
        </div>

        <p
          className={cn(
            "text-muted-foreground text-sm leading-relaxed",
            isFeatured ? "mb-4" : "mb-3",
            !isFeatured && !expanded && (isCompact ? "line-clamp-2" : "sm:line-clamp-1")
          )}
        >
          {experience.description}
        </p>

        {visibleHighlights.length > 0 && (
          <ul className={cn("mb-4", isFeatured ? "space-y-2" : "space-y-1.5")}>
            {visibleHighlights.map((point) => (
              <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[11px] font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      </article>
    </div>
  );
}
