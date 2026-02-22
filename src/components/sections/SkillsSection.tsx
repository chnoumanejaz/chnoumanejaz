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
                  <h3 className="font-heading font-semibold text-sm text-primary mb-5 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="px-4 py-2.5 text-sm rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default w-fit"
                        whileHover={{ scale: 1.05, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.div>
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
