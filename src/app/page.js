
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
