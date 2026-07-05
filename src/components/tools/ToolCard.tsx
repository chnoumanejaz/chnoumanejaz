import { Braces, Palette, SearchCode, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { visibleTools, isExternalUrl } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Braces,
  Palette,
  SearchCode,
  Globe,
};

interface ToolCardProps {
  name: string;
  description: string;
  icon: string;
  url: string;
  tags: string[];
  descriptionClassName?: string;
  motionProps?: Record<string, unknown>;
}

export function ToolCard({
  name,
  description,
  icon,
  url,
  tags,
  descriptionClassName = "",
  motionProps = {},
}: ToolCardProps) {
  const Icon = iconMap[icon] || Globe;
  const external = isExternalUrl(url);

  const cardContent = (
    <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="font-heading text-base font-bold group-hover:text-primary transition-colors">
        {name}
      </h3>

      <p
        className={`text-muted-foreground text-sm leading-relaxed mt-2 flex-1 ${descriptionClassName}`}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-[10px] uppercase tracking-wider font-normal"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );

  if (external) {
    return (
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        {...motionProps}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div className="group block h-full" {...motionProps}>
      <Link to={url} className="block h-full">
        {cardContent}
      </Link>
    </motion.div>
  );
}

export function ToolCardGrid({
  tools = visibleTools,
  className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
  descriptionClassName,
  animate = false,
}: {
  tools?: typeof visibleTools;
  className?: string;
  descriptionClassName?: string;
  animate?: boolean;
}) {
  return (
    <div className={className}>
      {tools.map((tool, i) => (
        <ToolCard
          key={tool.name}
          {...tool}
          descriptionClassName={descriptionClassName}
          motionProps={
            animate
              ? {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: i * 0.08, duration: 0.4 },
                  whileHover: { y: -4 },
                }
              : { whileHover: { y: -4 } }
          }
        />
      ))}
    </div>
  );
}
