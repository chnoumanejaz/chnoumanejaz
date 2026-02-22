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
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Sticky sidebar - desktop only, centered with hero */}
            <div className="hidden lg:flex lg:col-span-4 min-h-screen items-center pt-20 pb-16">
              <div className="sticky top-1/2 -translate-y-1/2 w-full">
                <ScrollAnimation animation="slide-in-left">
                  <HeroSidebar />
                </ScrollAnimation>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-8">
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
