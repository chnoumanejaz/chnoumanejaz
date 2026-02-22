import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ParallaxSection } from "@/components/shared/ParallaxSection";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <ParallaxSection speed={0.08}>
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation>
            <SectionHeading
              title="Skills & Technologies"
              subtitle="The tools and technologies I use to bring ideas to life."
            />
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
            {skillsData.map((category) => (
              <StaggerItem key={category.name}>
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                  <h3 className="font-heading font-semibold text-sm text-primary mb-4 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
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
