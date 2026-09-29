import Preloader from "@/components/ui/Preloader";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import ProductsTeaser from "@/components/sections/ProductsTeaser";

export default function Home() {
  return (
    <>
      <Preloader />
      
      
      
      
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <StatsSection />
        <TechStack />
        <Testimonials />
        <ProductsTeaser />
      </main>
      
      
    </>
  );
}
