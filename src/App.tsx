import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { StatsSection } from './sections/StatsSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] min-h-screen font-kanit overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Footer */}
      <footer id="contact" className="bg-[#0C0C0C] py-20 px-10 text-center flex flex-col items-center gap-8 border-t border-[#D7E2EA]/10">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-bold uppercase tracking-widest">Available for Full-time Roles</h4>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-[#D7E2EA]/60 text-sm uppercase">Ha Noi, Vietnam</p>
          </div>
        </div>
        
        <div className="flex gap-6 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm">
          <a href="mailto:phucpanda2003@gmail.com" className="hover:opacity-70 transition-opacity">Email</a>
          <a href="https://haiphucorder.io.vn" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Domain</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">Portfolio</a>
        </div>

        <p className="text-[#D7E2EA]/20 uppercase tracking-widest text-[10px] mt-10">
          &copy; {new Date().getFullYear()} PHẠM HẢI PHÚC -- Front-End / Fullstack Developer.
        </p>
      </footer>
    </main>
  );
}

export default App;
