import { useState, useEffect } from "react";

const sectionIds = ["about", "experience", "projects", "skills", "tools", "blog", "testimonials", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position, offset by navbar height + some buffer
      const scrollPosition = window.scrollY + 200; // 200px offset for navbar and buffer
      
      let currentSection = "about";
      
      // Find which section we're currently in
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if scroll position is within this section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}
