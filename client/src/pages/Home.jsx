import Footer from "../components/layout/Footer";
import SiteHeader from "../components/layout/SiteHeader";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import StacksSection from "../sections/StacksSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <StacksSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
