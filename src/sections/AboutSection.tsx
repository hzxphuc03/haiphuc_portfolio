import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      {/* Decorative Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          About me
        </h2>
      </FadeIn>

      {/* Animated Text Block */}
      <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-16 max-w-[800px]">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <AnimatedText 
            text="With more than one year of experience in web development, i focus on Angular & Next.js architecture and building optimized production systems."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed font-kanit"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 1.5rem)' } as any}
            offset={["start 0.9", "start 0.7"]}
          />

          <AnimatedText 
            text="I'm currently at FSEL, designing reusable frontend architectures and handling complex asynchronous data flows with RxJS operators."
            className="text-[#D7E2EA]/70 font-normal text-center leading-relaxed font-kanit"
            style={{ fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)' } as any}
            offset={["start 0.75", "start 0.55"]}
          />

          <AnimatedText 
            text="Reach me at: phucpanda2003@gmail.com — +84 972 221 123"
            className="text-[#D7E2EA] font-medium text-center tracking-widest border-t border-[#D7E2EA]/10 pt-10 font-kanit"
            style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)' } as any}
            offset={["start 0.6", "start 0.4"]}
          />
        </div>
        
        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
