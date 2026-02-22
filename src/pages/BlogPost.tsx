import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getBlogPost, blogPosts } from "@/data/blogPosts";
import { Badge } from "@/components/ui/badge";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { HeartButton } from "@/components/blog/HeartButton";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold mb-4">Post Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 pt-28 pb-20">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        {/* Post header - full width */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content + TOC layout - TOC on left, sticky */}
        <div className="flex gap-12">
          <TableOfContents content={post.content} />

          <article className="flex-1 min-w-0 max-w-3xl">
            <div className="prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children, ...props }) => {
                    const text = String(children);
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                    return <h2 id={id} {...props}>{children}</h2>;
                  },
                  h3: ({ children, ...props }) => {
                    const text = String(children);
                    const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
                    return <h3 id={id} {...props}>{children}</h3>;
                  },
                  code({ className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    const codeString = String(children).replace(/\n$/, "");
                    return match ? (
                      <SyntaxHighlighter
                        style={ghcolors}
                        language={match[1]}
                        PreTag="div"
                        className="!rounded-xl !text-sm"
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Heart button */}
            <div className="mt-12 pt-8 border-t border-border flex justify-center">
              <HeartButton />
            </div>

            {/* Prev/Next navigation */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <ChevronLeft className="h-3 w-3" /> Previous
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all text-right"
                >
                  <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground mb-1">
                    Next <ChevronRight className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
