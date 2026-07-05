import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

interface ToolPageLayoutProps {
  title: string;
  description: string;
  canonical: string;
  children: React.ReactNode;
}

export function ToolPageLayout({
  title,
  description,
  canonical,
  children,
}: ToolPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          description,
          applicationCategory: "DeveloperApplication",
          author: { "@type": "Person", name: "Nouman Ejaz" },
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="mb-8">
          <Button variant="ghost" size="sm" className="gap-2 mb-6" asChild>
            <Link to="/tools">
              <ArrowLeft className="h-4 w-4" /> Back to Tools
            </Link>
          </Button>
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">{description}</p>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
