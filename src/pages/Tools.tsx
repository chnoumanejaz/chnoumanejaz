import { ArrowLeft, ExternalLink, Braces, Palette, SearchCode, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toolsData } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";

const iconMap: Record<string, React.ElementType> = {
  Braces,
  Palette,
  SearchCode,
  Globe,
};

export default function Tools() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Developer Tools"
        description="A collection of useful developer tools built by Nouman Ejaz to solve common problems."
        canonical="/tools"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Developer Tools by Nouman Ejaz",
          description: "A collection of useful developer tools to solve common problems.",
          author: { "@type": "Person", name: "Nouman Ejaz" },
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="gap-2 mb-6" asChild>
            <Link to="/">
              <ArrowLeft className="h-4 w-4" /> Back Home
            </Link>
          </Button>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            All Tools
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            A collection of useful tools I've built to solve common developer problems.
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {toolsData.map((tool, i) => {
            const Icon = iconMap[tool.icon] || Globe;
            return (
              <motion.a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
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

                  <p className="text-muted-foreground text-sm leading-relaxed mt-2 flex-1">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
