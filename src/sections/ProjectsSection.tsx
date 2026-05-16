import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    number: "01",
    category: "FSEL - Enterprise Management System",
    name: "Front-End Developer",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
    },
    tags: ["Angular", "TypeScript", "RxJS", "Agile/Scrum"]
  },
  {
    number: "02",
    category: "Hai Phuc Shop - Fullstack E-commerce",
    name: "Lead Developer",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
    },
    tags: ["Next.js", "React", "Node.js", "MongoDB", "SEO"]
  }
];

const ProjectCard = ({ project, index, progress, range, targetScale }: any) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div
        style={{ 
          scale, 
          top: `${index * 28}px`,
          backgroundColor: '#0C0C0C'
        }}
        className="relative w-full h-full border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 overflow-hidden flex flex-col gap-6"
      >
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
            <span className="text-[#D7E2EA] font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-xl md:text-2xl mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag: string) => (
                  <span key={tag} className="px-2 py-0.5 rounded border border-[#D7E2EA]/30 text-[#D7E2EA]/80 text-[10px] uppercase tracking-tighter">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image Grid */}
        <div className="flex-1 flex gap-4 sm:gap-6 md:gap-8 min-h-0">
          <div className="w-[40%] flex flex-col gap-4 sm:gap-6 md:gap-8">
            <img 
              src={project.images.col1_1} 
              alt="" 
              className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.images.col1_2} 
              alt="" 
              className="w-full flex-1 object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-[60%] h-full">
            <img 
              src={project.images.col2} 
              alt="" 
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      ref={container}
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pb-20 -mt-10 sm:-mt-12 md:-mt-14 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40} className="py-20 sm:py-24 md:py-32">
          <h2 className="hero-heading font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Project
          </h2>
        </FadeIn>

        <div className="relative">
          {PROJECTS.map((project, i) => {
            const targetScale = 1 - ((PROJECTS.length - 1 - i) * 0.03);
            return (
              <ProjectCard 
                key={project.number}
                index={i}
                project={project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
