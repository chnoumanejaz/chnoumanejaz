import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Parse headings from markdown content
    const lines = content.split("\n");
    const items: TocItem[] = [];
    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        items.push({ id, text, level });
      }
    });
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const tocContent = (
    <ul className="space-y-1">
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "block text-sm py-1 transition-colors border-l-2",
              heading.level === 3 ? "pl-6" : "pl-3",
              activeId === heading.id
                ? "border-primary text-primary font-medium"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop TOC */}
      <aside className="hidden lg:block sticky top-24 w-64 shrink-0">
        <h4 className="font-heading text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Table of Contents
        </h4>
        {tocContent}
      </aside>

      {/* Mobile TOC toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <List className="h-4 w-4" /> Table of Contents
        </button>
        {mobileOpen && (
          <div className="mt-3 p-4 bg-card border border-border rounded-xl animate-fade-in">
            {tocContent}
          </div>
        )}
      </div>
    </>
  );
}
