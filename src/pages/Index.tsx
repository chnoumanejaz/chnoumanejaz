import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { HeroSection, HeroSidebar } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

const Index = () => {
  const [pastHero, setPastHero] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

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
      <ScrollProgress />
      <Navbar />
      <main>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sticky sidebar - desktop only */}
            <div className="hidden lg:block lg:col-span-4 self-start sticky top-24">
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
              <div className="space-y-0">
                <SkillsSection />
                <ToolsSection />
              </div>
              <BlogSection />
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
