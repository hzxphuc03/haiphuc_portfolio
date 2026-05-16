import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { StatsSection } from './sections/StatsSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen font-kanit overflow-x-clip">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
