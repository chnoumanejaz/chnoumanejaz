import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Lightbulb,
  ListChecks,
  ServerCog,
  Trophy,
  UserRound,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { getProjectBySlug, projectsData } from "@/data/projects";
import { getProjectCoverImage } from "@/lib/projectImages";
import { cn } from "@/lib/utils";

const siteUrl = "https://noumanejaz.com";

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
  const hasProjectLinks = Boolean(project.githubUrl || project.liveUrl || project.projectLinks?.length);
  const canonicalPath = `/projects/${project.slug}`;
  const absoluteCoverImage = coverSrc.startsWith("http")
    ? coverSrc
    : `${siteUrl}${coverSrc.startsWith("/") ? coverSrc : `/${coverSrc}`}`;
  const externalProjectLinks = [
    ...(project.projectLinks?.map((link) => link.url) ?? []),
    project.githubUrl,
    project.liveUrl,
  ].filter(Boolean);
  const carouselImages = [project.coverImage, ...project.galleryImages]
    .map((imageKey) => getProjectCoverImage(imageKey))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={project.title}
        description={project.description}
        canonical={canonicalPath}
        type="article"
        image={coverSrc}
        article={{ tags: project.technologies }}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: `${siteUrl}${canonicalPath}`,
          mainEntityOfPage: `${siteUrl}${canonicalPath}`,
          image: absoluteCoverImage,
          creator: { "@type": "Person", name: "Nouman Ejaz" },
          keywords: project.technologies.join(", "),
          about: project.badges.join(", "),
          genre: "Project case study",
          ...(externalProjectLinks.length > 0 && { sameAs: externalProjectLinks }),
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
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.badges.map((badge) => (
                    <Badge key={badge} className="text-[10px] uppercase tracking-wider font-semibold border-0">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="font-heading text-3xl sm:text-5xl font-bold leading-tight">{project.title}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-3xl">{project.description}</p>
              </div>

              {hasProjectLinks && (
                <ProjectActionLinks
                  projectLinks={project.projectLinks}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  className="lg:justify-end lg:pt-1"
                />
              )}
            </div>
          </header>

          <ProjectImageCarousel images={carouselImages} title={project.title} />

          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>

          {project.detailDescription && (
            <div className="mt-10 space-y-4 text-muted-foreground leading-relaxed">
              {project.detailDescription.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 gap-5">
            {project.role && (
              <ProjectStoryBlock
                icon={<UserRound className="h-5 w-5" />}
                title="My Role"
                tone="text-emerald-400 bg-emerald-500/10"
                copy={project.role}
              />
            )}
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

          {project.features && (
            <section className="mt-10 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl text-primary bg-primary/10">
                  <ListChecks className="h-5 w-5" />
                </div>
                <h2 className="font-heading font-semibold text-sm uppercase tracking-wider">Platform Features</h2>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.technicalDetails && (
            <section className="mt-10 rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl text-blue-400 bg-blue-500/10">
                  <ServerCog className="h-5 w-5" />
                </div>
                <h2 className="font-heading font-semibold text-sm uppercase tracking-wider">Technical Details</h2>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.technicalDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

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

function ProjectActionLinks({
  projectLinks,
  githubUrl,
  liveUrl,
  className,
}: {
  projectLinks?: { label: string; url: string; status?: string }[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {projectLinks?.map((link) => (
        <Button key={link.url} className="gap-2 rounded-xl" asChild>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            {link.label}
            {link.status && (
              <span className="rounded-full bg-primary-foreground/15 px-2 py-0.5 text-[10px] uppercase tracking-wider">
                {link.status}
              </span>
            )}
          </a>
        </Button>
      ))}
      {githubUrl && (
        <Button variant="outline" className="gap-2 rounded-xl" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" /> View Code
          </a>
        </Button>
      )}
      {liveUrl && (
        <Button className="gap-2 rounded-xl" asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </Button>
      )}
    </div>
  );
}

function ProjectImageCarousel({ images, title }: { images: string[]; title: string }) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="relative h-72 sm:h-[32rem] lg:h-[34rem] overflow-hidden rounded-2xl border border-border">
        <img src={images[0]} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <Carousel opts={{ align: "start", loop: true }} className="group">
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={image} className="pl-0">
            <div className="relative h-72 sm:h-[32rem] lg:h-[34rem] overflow-hidden rounded-2xl border border-border">
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                {index + 1} / {images.length}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 h-10 w-10 border-border bg-background/80 backdrop-blur hover:bg-background" />
      <CarouselNext className="right-4 h-10 w-10 border-border bg-background/80 backdrop-blur hover:bg-background" />
    </Carousel>
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
