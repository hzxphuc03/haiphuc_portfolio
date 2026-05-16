import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { Footer } from './sections/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen font-kanit overflow-x-clip relative">
      <CustomCursor />
      <ParticleCanvas />
      <ScrollProgress />
      
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
