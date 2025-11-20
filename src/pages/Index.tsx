import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { InnovationSection } from "@/components/InnovationSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { FoundersSection } from "@/components/FoundersSection";
import { CTASection } from "@/components/CTASection";
// import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <InnovationSection />
      <SolutionsSection />
      <FoundersSection />
      <CTASection />
    </div>
  );
};

export default Index;
