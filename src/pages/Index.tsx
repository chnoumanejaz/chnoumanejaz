import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { HeroSection, HeroSidebar } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";
import { personalData } from "@/data/personal";

const Index = () => {
  const [pastHero, setPastHero] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setPastHero(heroBottom < window.innerHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nouman Ejaz",
          jobTitle: "Software Engineer",
          url: "https://noumanejaz.com",
          sameAs: [
            personalData.social.github,
            personalData.social.linkedin,
            personalData.social.x,
          ],
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sticky sidebar - desktop only */}
            <div
              className={`hidden lg:flex lg:col-span-4 self-start sticky items-center w-full transition-all duration-500 ${
                pastHero ? "top-24 min-h-0 pt-0 pb-0" : "top-0 min-h-screen pt-[2rem] pb-16"
              }`}
            >
              <div className="w-full">
                <ScrollAnimation animation="slide-in-left">
                  <HeroSidebar />
                </ScrollAnimation>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-8" ref={heroRef}>
              <HeroSection />
              <ExperienceSection />
              <ProjectsSection />
              <SkillsSection />
              <ToolsSection />
              <TestimonialsSection />
              <ContactSection />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
