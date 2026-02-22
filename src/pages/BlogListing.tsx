import { ArrowRight, Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const BlogListing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog"
        description="Thoughts on software development, design, and technology by Nouman Ejaz."
        canonical="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Nouman Ejaz's Blog",
          description: "Thoughts on software development, design, and technology.",
          author: { "@type": "Person", name: "Nouman Ejaz" },
        }}
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-3">All Posts</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Thoughts on software development, design, and technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogListing;
