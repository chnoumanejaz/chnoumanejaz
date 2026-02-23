import { ArrowRight, Braces, Palette, SearchCode, Globe, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toolsData } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";

const iconMap: Record<string, React.ElementType> = {
  Braces,
  Palette,
  SearchCode,
  Globe
};

export function ToolsSection() {
  return (
    <section id="tools" className="pt-10 pb-20 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Tools"
            subtitle="Useful tools I've built to make developer life easier." />

        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
        {toolsData.slice(0, 4).map((tool) => {
          const Icon = iconMap[tool.icon] || Globe;
          return (
            <StaggerItem key={tool.name}>
              <motion.a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
                whileHover={{ y: -4 }}>

                <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-heading text-base font-bold group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mt-2 flex-1 line-clamp-2">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {tool.tags.map((tag) =>
                    <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-normal">
                        {tag}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.a>
            </StaggerItem>);

        })}
      </StaggerContainer>

      <div className="flex justify-center mt-10">
        <Button variant="outline" className="rounded-xl gap-2" asChild>
          <Link to="/tools">
            View All Tools <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>      </div>    </section>);

}