import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { visibleTools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";
import { ToolCard } from "@/components/tools/ToolCard";

export function ToolsSection() {
  return (
    <section id="tools" className="pt-10 pb-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Tools"
            subtitle="Useful tools I've built to make developer life easier."
          />
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
          {visibleTools.map((tool) => (
            <StaggerItem key={tool.name}>
              <ToolCard {...tool} descriptionClassName="line-clamp-2" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="flex justify-center mt-10">
          <Button variant="outline" className="rounded-xl gap-2" asChild>
            <Link to="/tools">
              View All Tools <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
