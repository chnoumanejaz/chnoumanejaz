export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-performant-react-apps",
    title: "Building Performant React Applications",
    date: "2024-12-15",
    excerpt:
      "Deep dive into React performance optimization techniques — from memoization strategies to bundle splitting and beyond.",
    tags: ["React", "Performance"],
    readTime: "8 min read",
    content: `
## Introduction

Performance is not just about speed — it's about user experience. A performant application feels responsive, reliable, and delightful to use. In this post, we'll explore practical techniques to make your React apps blazing fast.

## Why Performance Matters

Users expect web applications to load instantly and respond to interactions without delay. Studies show that a 100ms delay in response time can reduce conversion rates by 7%.

### Key Metrics to Track

- **First Contentful Paint (FCP)**: When the first content appears
- **Largest Contentful Paint (LCP)**: When the main content is visible
- **Time to Interactive (TTI)**: When the page becomes fully interactive
- **Cumulative Layout Shift (CLS)**: Visual stability of the page

## Memoization Strategies

React provides several hooks for memoization:

\`\`\`tsx
// useMemo for expensive computations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.priority - b.priority);
}, [items]);

// useCallback for stable function references
const handleClick = useCallback((id: string) => {
  setSelected(id);
}, []);

// React.memo for component memoization
const ExpensiveList = React.memo(({ items }) => {
  return items.map(item => <ListItem key={item.id} {...item} />);
});
\`\`\`

## Code Splitting

Use dynamic imports to split your bundle:

\`\`\`tsx
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

## Virtual Scrolling

For large lists, virtual scrolling renders only visible items:

\`\`\`tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualList({ items }) {
  const parentRef = useRef(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(virtualRow => (
          <div key={virtualRow.index}>
            {items[virtualRow.index].name}
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\`

## Conclusion

Performance optimization is an ongoing process. Start by measuring, identify bottlenecks, and apply targeted optimizations. Remember: premature optimization is the root of all evil, but informed optimization is the path to excellent user experiences.
`,
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques You Should Know",
    date: "2024-11-28",
    excerpt:
      "Exploring the latest CSS features that are changing how we build layouts, animations, and responsive designs.",
    tags: ["CSS", "Frontend"],
    readTime: "6 min read",
    content: `
## The CSS Renaissance

CSS has evolved dramatically in recent years. Features that once required JavaScript or complex workarounds are now achievable with a few lines of CSS.

## Container Queries

Container queries let you style elements based on their parent's size rather than the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Nesting

Native CSS nesting is finally here:

\`\`\`css
.card {
  background: var(--card);
  border-radius: 1rem;

  & .title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}
\`\`\`

## View Transitions

The View Transitions API enables smooth page transitions:

\`\`\`css
@view-transition {
  navigation: auto;
}

.hero-image {
  view-transition-name: hero;
}
\`\`\`

## Scroll-Driven Animations

Animate elements based on scroll position:

\`\`\`css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}

.section {
  animation: fade-in linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
\`\`\`

## Conclusion

Modern CSS is incredibly powerful. These features reduce our dependency on JavaScript for layout and animation concerns, leading to better performance and simpler codebases.
`,
  },
  {
    slug: "typescript-design-patterns",
    title: "TypeScript Design Patterns for Scalable Apps",
    date: "2024-11-10",
    excerpt:
      "Practical design patterns in TypeScript that help you write more maintainable, testable, and scalable code.",
    tags: ["TypeScript", "Architecture"],
    readTime: "10 min read",
    content: `
## Why Design Patterns?

Design patterns provide proven solutions to common software design problems. In TypeScript, they become even more powerful thanks to the type system.

## The Repository Pattern

Abstract your data access layer:

\`\`\`typescript
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  findAll(filter?: Partial<T>): Promise<T[]>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

class UserRepository implements Repository<User> {
  constructor(private db: Database) {}

  async findById(id: string): Promise<User | null> {
    return this.db.users.findUnique({ where: { id } });
  }
  // ... other methods
}
\`\`\`

## The Builder Pattern

Great for constructing complex objects:

\`\`\`typescript
class QueryBuilder<T> {
  private filters: Filter[] = [];
  private sortField?: keyof T;
  private limitCount?: number;

  where(field: keyof T, value: unknown): this {
    this.filters.push({ field, value });
    return this;
  }

  orderBy(field: keyof T): this {
    this.sortField = field;
    return this;
  }

  limit(count: number): this {
    this.limitCount = count;
    return this;
  }

  build(): Query<T> {
    return new Query(this.filters, this.sortField, this.limitCount);
  }
}
\`\`\`

## The Strategy Pattern

Encapsulate interchangeable algorithms:

\`\`\`typescript
interface AuthStrategy {
  authenticate(credentials: unknown): Promise<User>;
}

class EmailAuthStrategy implements AuthStrategy {
  async authenticate({ email, password }: EmailCredentials) {
    // email/password authentication logic
  }
}

class OAuthStrategy implements AuthStrategy {
  async authenticate({ provider, token }: OAuthCredentials) {
    // OAuth authentication logic
  }
}

class AuthService {
  constructor(private strategy: AuthStrategy) {}

  async login(credentials: unknown) {
    return this.strategy.authenticate(credentials);
  }
}
\`\`\`

## Conclusion

Design patterns are tools, not rules. Use them when they solve a real problem in your codebase. TypeScript's type system makes these patterns safer and more expressive than ever.
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
