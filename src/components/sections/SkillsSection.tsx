import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";

export function SkillsSection() {
  return (
    <ParallaxSection speed={0.08} id="skills">
      <section className="pt-20 pb-10 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollAnimation>
            <SectionHeading
              title="Skills & Technologies"
              subtitle="Technologies I use to build production-ready web apps, SaaS dashboards, APIs, automation workflows, and scalable backend systems."
            />
          </ScrollAnimation>

          <StaggerContainer className="space-y-10" staggerDelay={0.15}>
            {skillsData.map((category) => (
              <StaggerItem key={category.name}>
                <div className="group">
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 text-sm rounded-full border border-border bg-card text-muted-foreground hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </ParallaxSection>
  );
}
