import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SERVICES = [
  {
    number: "01",
    name: "Frontend Development",
    description: "High-performance, scalable web applications using Angular, React, and Next.js with reusable component architecture."
  },
  {
    number: "02",
    name: "Fullstack Solutions",
    description: "End-to-end digital products using Node.js, Express, and MongoDB with seamless frontend-backend integration."
  },
  {
    number: "03",
    name: "UI/UX & Responsive Design",
    description: "Modern, conversion-focused interfaces with Tailwind CSS and Figma for fluid cross-device experiences."
  },
  {
    number: "04",
    name: "SEO & Performance",
    description: "Production optimization using SSR, lazy loading, and advanced caching for high Lighthouse scores."
  },
  {
    number: "05",
    name: "Enterprise Architecture",
    description: "Complex management systems with robust state management for large-scale enterprise platforms."
  }
];

const CARD_HEIGHT = 80; // vh units per card

const StickyCard = ({ 
  service, 
  index 
}: { 
  service: typeof SERVICES[0], 
  index: number 
}) => {
  return (
    <div
      className="sticky top-0 w-full flex items-center justify-center bg-white border-t border-[#0C0C0C]/5"
      style={{ height: `${CARD_HEIGHT}vh`, zIndex: index + 1 }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-10% 0% -10% 0%" }}
        className="max-w-4xl w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-12 md:gap-16 px-6"
      >
        <div className="relative flex-shrink-0">
          <span className="text-[#0C0C0C]/5 font-black leading-none text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            {service.number}
          </span>
          <span className="relative z-10 text-[#0C0C0C] font-bold text-4xl sm:text-5xl md:text-6xl flex items-center gap-4">
            <span className="w-12 h-[2px] bg-blue-500 hidden sm:block" />
            {service.number}
          </span>
        </div>
        <div className="flex flex-col gap-3 relative z-10 text-center sm:text-left">
          <h3 className="text-[#0C0C0C] font-black uppercase leading-tight text-xl sm:text-2xl md:text-3xl tracking-tight">
            {service.name}
          </h3>
          <p className="text-[#0C0C0C]/60 font-medium leading-relaxed max-w-md text-sm sm:text-base md:text-lg">
            {service.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <section 
      id="services"
      className="relative bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-20 z-10 pb-[20vh]"
    >
      {/* Title section - not sticky, just scrolls away */}
      <div className="pt-24 sm:pt-32 pb-16 px-5 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
        >
          Our Expertise
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#0C0C0C] font-black uppercase leading-none tracking-tighter text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
        >
          Services
        </motion.h2>
      </div>

      {/* Sticky Cards Stack */}
      <div className="relative">
        {SERVICES.map((service, i) => (
          <StickyCard 
            key={service.number}
            service={service}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};