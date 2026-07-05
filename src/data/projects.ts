export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  status?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  detailDescription?: string[];
  features?: string[];
  technicalDetails?: string[];
  role?: string;
  projectLinks?: ProjectLink[];
  badges: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  coverImage: string;
  galleryImages: string[];
  coverGradient: string;
  problem: string;
  solution: string;
  outcome: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    slug: "tramper",
    title: "Tramper — Peer-to-Peer Package Delivery Marketplace",
    description:
      "A full-stack peer-to-peer package delivery marketplace for the UAE market, connecting shippers with travelers through trips, shipment requests, payments, chat, verification, and admin workflows.",
    detailDescription: [
      "Tramper is a peer-to-peer package delivery marketplace for the UAE market. The platform connects shippers who need packages delivered with travelers who can carry packages along their existing routes.",
      "I built the platform as a full-stack system covering authentication, traveler trips, shipment requests, shipper-traveler matching, real-time chat, Ziina payments, wallet and commission flows, Firebase notifications, verification, complaints, and a custom admin portal.",
      "The system supports AED payments, Arabic and English localization, QR-based delivery confirmation, and admin-level operational workflows for managing users, shipments, trips, payments, withdrawals, complaints, and verification.",
    ],
    features: [
      "Traveler trip posting and shipper package request flow",
      "Shipment request matching between shippers and travelers",
      "Real-time chat using Django Channels, WebSockets, and Redis",
      "Ziina payment integration for AED-based transactions",
      "Wallet, commission, and withdrawal handling",
      "QR code delivery confirmation before wallet credit",
      "Firebase push notifications and in-app notifications",
      "Email, phone, and ID verification workflows",
      "Complaint and dispute management",
      "Custom admin portal with secure JWT cookie authentication",
      "Arabic and English i18n support for the UAE market",
    ],
    technicalDetails: [
      "Built backend APIs using Django 4.2 and Django REST Framework",
      "Implemented JWT authentication with access and refresh tokens",
      "Used Django Channels and Redis for WebSocket-based live chat",
      "Added Celery for asynchronous jobs and background workflows",
      "Integrated AWS S3 for media and file storage",
      "Integrated Ziina for AED payments and marketplace transaction flow",
      "Used Firebase Cloud Messaging for push notifications",
      "Built the frontend with React, TypeScript, Vite, and Tailwind CSS",
      "Deployed backend services on Heroku",
    ],
    role:
      "Full-stack development across backend architecture, REST APIs, frontend admin UI, authentication, real-time communication, payments, wallet logic, notifications, verification workflows, and deployment setup.",
    projectLinks: [
      {
        label: "Portal",
        url: "https://tramper-admin.vercel.app/",
        // status: "In progress",
      },
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.tramper.app",
      },
    ],
    badges: ["In Progress", "Full Stack", "Marketplace"],
    technologies: ["Django", "DRF", "React", "TypeScript", "Redis", "WebSockets", "Celery", "AWS S3", "Firebase", "Ziina"],
    githubUrl: "",
    liveUrl: "",
    coverImage: "project-tramper",
    galleryImages: ["project-tramper-1", "project-tramper-2", "project-tramper-3"],
    coverGradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    problem: "The UAE delivery market needed a trusted marketplace flow where shippers could request package delivery and travelers could earn by carrying packages along routes they were already taking.",
    solution:
      "Built a production-style Django DRF and React platform with shipment matching, traveler trips, real-time chat, Ziina AED payments, wallet flows, notifications, verification, complaints, and a secure custom admin portal.",
    outcome:
      "Delivered a full-stack marketplace architecture with AED payments, bilingual UAE localization, QR delivery confirmation, wallet crediting, and operational admin workflows for managing the end-to-end delivery lifecycle.",
  },
  {
    id: "2",
    slug: "kolber-autoparts",
    title: "Kolber AutoParts — Custom E-commerce Platform",
    description:
      "A production-grade auto parts e-commerce platform for the Costa Rican market, featuring a custom storefront, admin dashboard, Alegra ERP sync, multi-gateway payments, AI vehicle compatibility, shipping rules, multilingual support, and SEO-ready product pages.",
    detailDescription: [
      "Kolber AutoParts is a custom e-commerce platform built for a Costa Rica-based auto parts business. The project included both the customer-facing storefront and a complete admin portal for managing products, categories, orders, payments, customers, registered users, reviews, support tickets, deals, search demand, and store settings.",
      "The platform was built from scratch because the business needed deeper control than generic e-commerce platforms could provide, especially around Alegra ERP sync, regional payment gateways, crypto payments, AI vehicle compatibility, Costa Rica shipping rules, multilingual content, and product-level SEO.",
    ],
    features: [
      "Customer-facing auto parts storefront with product search, categories, cart, account, wishlist, and product detail pages",
      "Complete custom admin dashboard for products, categories, orders, payments, customers, users, deals, support tickets, reviews, and settings",
      "Alegra ERP integration for product, category, price list, stock, and invoice sync",
      "Multi-gateway payments using Tilopay, Pagadito, and Coinbase Commerce",
      "AI-powered vehicle compatibility assistant for part fitment checks",
      "User demand analysis based on customer search behavior",
      "CSV bulk import for vehicle compatibility data",
      "Costa Rica shipping rules with free-shipping threshold support",
      "Spanish and English multilingual support",
      "JWT authentication with refresh tokens",
      "OTP-secured admin login through email",
      "SEO-ready product pages, sitemap generation, robots.txt, and structured metadata",
      "Vercel frontend deployment and Heroku backend deployment",
    ],
    technicalDetails: [
      "Built the frontend with React 18, TypeScript, Vite, Tailwind CSS v4, and shadcn/ui",
      "Built backend APIs using Django 5 and Django REST Framework",
      "Used PostgreSQL for relational product, order, payment, and customer data",
      "Used Celery for background sync jobs and async workflows",
      "Integrated Alegra ERP using a layered service architecture",
      "Built custom integrations for regional payment gateways including Tilopay and Pagadito",
      "Integrated Coinbase Commerce for crypto payment support",
      "Added AI-backed compatibility and search-demand analysis workflows",
      "Implemented production deployment flows using Vercel, Heroku, Docker Compose, and CI/CD",
    ],
    role:
      "I built the customer-facing storefront and the complete admin portal, working across frontend architecture, backend integration, e-commerce flows, product management, admin workflows, payment integrations, inventory sync, AI-assisted search demand features, and deployment support.",
    projectLinks: [
      {
        label: "Link",
        url: "https://www.kolberautoparts.com/",
        status: "Delivered/Complete",
      },
    ],
    badges: ["Featured", "Full Stack", "E-commerce"],
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "DRF",
      "PostgreSQL",
      "Celery",
      "Alegra API",
      "Tilopay",
      "Coinbase",
      "Vercel",
    ],
    githubUrl: "",
    liveUrl: "",
    coverImage: "project-kolber",
    galleryImages: ["project-kolber-1", "project-kolber-2", "project-kolber-3"],
    coverGradient: "from-red-500/20 via-zinc-500/10 to-transparent",
    problem:
      "A Costa Rica-based auto parts business needed a custom e-commerce platform with ERP inventory sync, regional payments, crypto support, vehicle compatibility checks, province-based shipping, and full operational control.",
    solution:
      "Built a full-stack e-commerce platform with a React storefront, Django REST backend, custom admin dashboard, Alegra ERP sync, multi-gateway payments, AI compatibility assistant, and SEO-ready product pages.",
    outcome:
      "Delivered a production-ready e-commerce system with real-time inventory sync, secure payments, AI-powered search insights, multilingual support, SEO-ready product pages, and full admin control.",
  },
  {
    id: "3",
    slug: "topleft",
    title: "TopLeft — Visual Project Management Platform for MSPs",
    description:
      "A SaaS platform for managed service providers that adds visual project management, Kanban boards, Gantt charts, capacity planning, team views, and client portal workflows on top of PSA tools like ConnectWise, Autotask, and HaloPSA.",
    detailDescription: [
      "TopLeft is a SaaS platform for managed service providers that adds visual project management workflows on top of PSA tools like ConnectWise, Autotask, and HaloPSA.",
      "I worked on product interfaces for Kanban boards, Gantt chart views, capacity planning, team visibility, filtering, and client portal workflows so MSP teams could understand project and ticket data faster.",
    ],
    features: [
      "Product Kanban board for project tickets and service workflows",
      "Swimlane-based ticket views grouped by member, client, project, or workflow stage",
      "Gantt chart and timeline views for project planning and delivery visibility",
      "Capacity planning interface to show overloaded and available team members",
      "Client portal workflows for project and ticket visibility",
      "Filtering, searching, view switching, and advanced interaction states",
      "Dashboard-style views for project overview, ticket counts, workflow delays, and team visibility",
      "UI handling for status indicators, warnings, overdue work, and bottlenecks",
    ],
    technicalDetails: [
      "Built complex React and TypeScript interfaces for data-heavy SaaS workflows",
      "Developed interactive board and timeline-style UI patterns",
      "Worked with project tickets, service tickets, team members, statuses, workflow stages, and capacity data",
      "Implemented product screens that needed to stay readable despite dense operational data",
      "Focused on responsive layouts, usability, filtering, and scalable component structure",
      "Collaborated around PSA-driven workflows connected to ConnectWise, Autotask, and HaloPSA concepts",
    ],
    role:
      "I worked on frontend/product development for key SaaS interfaces, including the product Kanban board, Gantt chart views, capacity planning screens, and client portal workflows. My focus was building clear, scalable, and usable interfaces for complex project and ticket data.",
    projectLinks: [
      {
        label: "Link",
        url: "https://www.topleft.team/",
      },
    ],
    badges: ["Featured", "SaaS Product", "MSP Platform"],
    technologies: [
      "React",
      "TypeScript",
      "Kanban UI",
      "Gantt Charts",
      "Capacity Planning",
      "Client Portal",
      "SaaS",
      "PSA Integrations",
    ],
    githubUrl: "",
    liveUrl: "",
    coverImage: "project-topleft",
    galleryImages: ["project-topleft-1", "project-topleft-2", "project-topleft-3"],
    coverGradient: "from-sky-500/20 via-indigo-500/10 to-transparent",
    problem:
      "MSP teams manage projects, service tickets, dispatch, and capacity inside PSA tools, but the work is often hard to visualize. Managers need clear visibility into tickets, timelines, bottlenecks, overloaded team members, and client-facing updates without forcing teams into duplicate data entry.",
    solution:
      "Worked on product interfaces that make PSA work easier to manage visually, including Kanban boards, Gantt chart views, capacity planning, and client portal workflows. Focused on building clear, usable interfaces for project tickets, team workload, timelines, filtering, and client-facing visibility.",
    outcome:
      "Helped improve the product experience for MSP teams by making project work, ticket flow, capacity, timelines, and client communication easier to understand and act on from visual SaaS interfaces.",
  },
  {
    id: "4",
    slug: "gripo",
    title: "Gripo — DevOps Workflow Automation Platform",
    description:
      "A DevOps automation platform for engineering teams to build visual workflows, run scripts in isolated sandboxes, manage Kubernetes and cloud infrastructure, deploy AI agents, and connect services through plugins.",
    detailDescription: [
      "Gripo is a DevOps workflow automation platform for engineering teams. It combines visual workflow building, isolated code execution, AI agents, plugin integrations, and Kubernetes/cloud infrastructure automation into one product experience.",
      "My work was focused on frontend development for product interfaces, especially data-heavy dashboards and Kubernetes/cloud management screens.",
    ],
    features: [
      "Kubernetes cluster overview dashboards",
      "Cluster detail screens for status, properties, events, node pools, applications, and resources",
      "Cloud provider selection flows for AWS, Google Cloud, Azure, Linode, and DigitalOcean",
      "Cluster creation UI and infrastructure provisioning flows",
      "Data visualization components for pods, deployments, stateful sets, daemon sets, jobs, and replicasets",
      "Dashboard cards, charts, status indicators, filters, and technical data layouts",
      "Responsive frontend screens for infrastructure-heavy product workflows",
      "Reusable React components for complex DevOps UI patterns",
    ],
    technicalDetails: [
      "Built frontend interfaces using React, Next.js, and TypeScript",
      "Developed dashboard layouts for Kubernetes and cloud infrastructure data",
      "Created reusable UI components for cards, charts, tables, status views, and configuration screens",
      "Worked with API-driven product data and technical DevOps concepts",
      "Focused on readability, responsiveness, component structure, and user experience for dense infrastructure screens",
      "Collaborated with backend/platform teams to align frontend flows with Kubernetes and cloud workflows",
    ],
    role:
      "I worked as a Frontend Engineer on Gripo, building product UI screens for Kubernetes cluster management, cloud infrastructure workflows, dashboard overviews, and automation-related interfaces. My focus was turning complex DevOps data into clear, usable, and scalable frontend experiences.",
    badges: ["Featured", "Frontend", "DevOps SaaS"],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Kubernetes UI",
      "Cloud Dashboards",
      "Workflow Automation",
      "API Integration",
    ],
    githubUrl: "",
    liveUrl: "",
    coverImage: "project-gripo",
    galleryImages: ["project-gripo-1", "project-gripo-2"],
    coverGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    problem:
      "Engineering and DevOps teams need clear interfaces to manage complex automation workflows, Kubernetes resources, cloud infrastructure, scripts, plugins, and operational data without making the product feel overloaded or difficult to use.",
    solution:
      "Worked on frontend product interfaces for Gripo, including Kubernetes cluster dashboards, cluster creation flows, cloud provider selection, infrastructure overview screens, and data-heavy dashboard components. Focused on clean UI structure, responsive layouts, reusable components, and clear presentation of technical infrastructure data.",
    outcome:
      "Helped shape a frontend experience that made complex DevOps workflows easier to understand, monitor, and operate through visual dashboards, cloud infrastructure views, and Kubernetes-focused product screens.",
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}
