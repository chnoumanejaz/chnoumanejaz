
# Portfolio Website Plan

## Design Direction
- **Primary inspiration**: resume-cv.framer.website layout & animations (dark background, green accent, smooth hover effects, clean spacing)
- **Blog design inspiration**: joshwcomeau.com (table of contents sidebar, heart interactions, rich footer)
- **Both light and dark mode** with a theme toggle

---

## Pages & Structure

### 1. Homepage (Single-page scrollable)
Inspired by resume-cv.framer.website with these sections:

- **Hero + About Section**: Left sticky sidebar card with photo, name, status badge ("Available for work"), social links, and "Download CV" / "Contact Me" buttons. Right side: large intro heading with animated role text, short bio, and stat counters (projects, years of experience, etc.)

- **Experience Section**: Timeline-style cards showing work history with company, role, date range, and description — matching the Framer reference design

- **Skills / Tech Stack Section**: Grid of technology badges/icons grouped by category (Frontend, Backend, Tools, etc.) — inspired by Brittany Chiang's style

- **Featured Projects Section**: 3-4 project cards with:
  - Badges/tags at the top (e.g. "Featured", "Open Source", tech used)
  - Title and short description always visible
  - On hover: smooth overlay revealing "View Code" (GitHub) and "Live Demo" links
  - Smooth scale/shadow animations on hover

- **Latest Blog Posts Section**: 2-3 recent blog post preview cards with title, date, short excerpt, and category tag. Clicking opens the blog post page.

- **Contact Section**: Simple contact form or email CTA with social links

- **Footer**: Inspired by joshwcomeau.com — rich footer with categories, social icons, and a fun personal tagline

### 2. Blog Post Page (`/blog/:slug`)
- **Layout**: Content area with a sticky **Table of Contents** sidebar on the left (like joshwcomeau.com)
- **Content**: Rendered from Markdown files with syntax highlighting, headings, images, code blocks
- **Interactions**: Heart/like button (local state), hit counter display (dummy), smooth scroll to sections via TOC
- **Navigation**: Back to homepage link, previous/next post navigation

---

## Key Design Details
- **Animations**: Fade-in on scroll for sections, smooth hover scale on cards, underline animations on links, accordion animations for experience items
- **Theme toggle**: Sun/moon icon in the header for light/dark mode switching
- **Navigation**: Minimal top navbar with smooth scroll links to homepage sections + blog link
- **Responsive**: Fully mobile-friendly — sidebar card becomes top card on mobile, TOC becomes a collapsible drawer on mobile
- **Typography**: Clean, modern font hierarchy with good spacing

---

## Technical Approach
- Markdown files stored in `src/content/blog/` for blog posts with frontmatter (title, date, excerpt, tags)
- Modular component architecture: small, reusable sub-components (SectionHeading, ProjectCard, BlogCard, StatCounter, SkillBadge, etc.)
- All dummy data centralized in data files for easy replacement later
- Light/dark mode via next-themes (already installed)
- Smooth scroll and intersection observer for scroll animations

---

## Data (Dummy, replaceable later)
- Personal info, experience, skills, projects, and blog posts all stored in separate data/config files so you can easily swap in your real info
