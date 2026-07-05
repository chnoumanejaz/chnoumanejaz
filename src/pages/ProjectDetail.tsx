import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github, Lightbulb, Trophy, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { getProjectBySlug, projectsData } from "@/data/projects";
import { getProjectCoverImage } from "@/lib/projectImages";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 pt-28 pb-20">
          <Button variant="ghost" size="sm" className="gap-2 mb-8" asChild>
            <Link to="/#projects">
              <ArrowLeft className="h-4 w-4" /> Back to Projects
            </Link>
          </Button>
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl font-bold mb-3">Project Not Found</h1>
            <p className="text-muted-foreground">The project you're looking for is not available.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const coverSrc = getProjectCoverImage(project.coverImage);
  const currentIndex = projectsData.findIndex((item) => item.slug === project.slug);
  const previousProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={project.title}
        description={project.description}
        canonical={`/projects/${project.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          author: { "@type": "Person", name: "Nouman Ejaz" },
          keywords: project.technologies.join(", "),
        }}
      />
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Button variant="ghost" size="sm" className="gap-2 mb-8" asChild>
          <Link to="/#projects">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </Button>

        <article className="max-w-5xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.badges.map((badge) => (
                <Badge key={badge} className="text-[10px] uppercase tracking-wider font-semibold border-0">
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl font-bold leading-tight">{project.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-3xl">{project.description}</p>
          </header>

          <div className="relative h-64 sm:h-[28rem] overflow-hidden rounded-2xl border border-border">
            <img src={coverSrc} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5">
            <ProjectStoryBlock
              icon={<Lightbulb className="h-5 w-5" />}
              title="The Problem"
              tone="text-red-400 bg-red-500/10"
              copy={project.problem}
            />
            <ProjectStoryBlock
              icon={<Wrench className="h-5 w-5" />}
              title="The Solution"
              tone="text-blue-400 bg-blue-500/10"
              copy={project.solution}
            />
            <ProjectStoryBlock
              icon={<Trophy className="h-5 w-5" />}
              title="The Outcome"
              tone="text-primary bg-primary/10"
              copy={project.outcome}
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-10 pt-6 border-t border-border">
            <Button variant="outline" className="gap-2 rounded-xl" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> View Code
              </a>
            </Button>
            <Button className="gap-2 rounded-xl" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previousProject ? (
              <Link
                to={`/projects/${previousProject.slug}`}
                className="group p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
              >
                <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                  <ChevronLeft className="h-3 w-3" /> Previous
                </span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {previousProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all sm:text-right"
              >
                <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1 sm:justify-end">
                  Next <ChevronRight className="h-3 w-3" />
                </span>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function ProjectStoryBlock({
  icon,
  title,
  tone,
  copy,
}: {
  icon: ReactNode;
  title: string;
  tone: string;
  copy: string;
}) {
  return (
    <section className="flex gap-4 rounded-2xl border border-border bg-card p-5">
      <div className={`p-2.5 rounded-xl h-fit ${tone}`}>{icon}</div>
      <div>
        <h2 className="font-heading font-semibold text-sm uppercase tracking-wider mb-1">{title}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{copy}</p>
      </div>
    </section>
  );
}
