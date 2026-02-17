import TurfRightPanel from "@/components/home/FootballField3D";
import Hero from "@/components/home/Hero";
import TurfsSection from "@/components/home/TurfsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TurfsSection />
      <TurfRightPanel />
      <AboutSection />
      <ContactSection />
    </>
  );
}

