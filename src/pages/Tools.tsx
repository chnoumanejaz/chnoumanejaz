import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { ToolCardGrid } from "@/components/tools/ToolCard";

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

        <ToolCardGrid animate />
      </main>
      <Footer />
    </div>
  );
}
