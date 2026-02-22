import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection, HeroSidebar } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollAnimation } from "@/components/shared/ScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sticky sidebar - desktop only */}
            <div className="hidden lg:block lg:col-span-4 pt-28">
              <div className="sticky top-28">
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
              <SkillsSection />
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
