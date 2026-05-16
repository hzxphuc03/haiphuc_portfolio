import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-50">
        <FadeIn delay={0} y={-20} className="w-full">
          <div className="flex justify-between w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
            <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
            <a href="#price" className="hover:opacity-70 transition-opacity duration-200">Price</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
          </div>
        </FadeIn>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center relative px-6 md:px-10">
        <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi, i&apos;m phuc
            </h1>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 w-full">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              a front-end / fullstack developer driven by crafting digital experiences and high-performance production systems
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3}>
            <img 
              src="/portrait.png" 
              alt="Phuc Portrait" 
              className="w-full h-auto object-contain"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
};
