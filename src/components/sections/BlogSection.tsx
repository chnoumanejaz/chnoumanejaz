import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/shared/ScrollAnimation";

export function BlogSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <ScrollAnimation>
          <SectionHeading
            title="Latest Posts"
            subtitle="Thoughts on software development, design, and technology."
          />
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {latestPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <motion.div
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
                  whileHover={{ y: -4, boxShadow: "0 15px 30px -10px hsl(152 60% 50% / 0.1)" }}
                >
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mt-3 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
