import AboutSection from "@/sections/aboutSection";
import HeroSection from "@/sections/heroSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
    </main>
  );
}
