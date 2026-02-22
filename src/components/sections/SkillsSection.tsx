import { skillsData } from "@/data/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Skills & Technologies"
            subtitle="The tools and technologies I use to bring ideas to life."
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, catIndex) => (
            <ScrollAnimation key={category.name} animation="fade-up" delay={catIndex * 100}>
              <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                <h3 className="font-heading font-semibold text-sm text-primary mb-4 uppercase tracking-wider">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
