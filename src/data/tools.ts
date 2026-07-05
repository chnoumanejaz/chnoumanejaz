export interface Tool {
  name: string;
  description: string;
  icon: string;
  url: string;
  tags: string[];
  hidden?: boolean;
}

export const toolsData: Tool[] = [
  {
    name: "JSON Formatter",
    description:
      "A fast, clean JSON formatter and validator to debug your API responses instantly.",
    icon: "Braces",
    url: "/tools/json-formatter",
    tags: ["Developer", "Utility"],
  },
  {
    name: "Color Palette Generator",
    description:
      "Generate beautiful, accessible color palettes for your next design project.",
    icon: "Palette",
    url: "/tools/color-palette",
    tags: ["Design", "CSS"],
  },
  {
    name: "Regex Tester",
    description:
      "Test and debug your regular expressions in real-time with instant visual feedback.",
    icon: "SearchCode",
    url: "/tools/regex-tester",
    tags: ["Developer", "Utility"],
  },
  {
    name: "Meta Tag Generator",
    description:
      "Generate perfect meta tags and Open Graph data for better SEO and social sharing.",
    icon: "Globe",
    url: "https://google.com",
    tags: ["SEO", "Marketing"],
    hidden: true,
  },
];

export const visibleTools = toolsData.filter((tool) => !tool.hidden);

export function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}
