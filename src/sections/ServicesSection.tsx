import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    number: "01",
    name: "Frontend Development",
    description: "Building high-performance, scalable web applications using Angular, React, and Next.js with a focus on reusable component architecture and maintainable code."
  },
  {
    number: "02",
    name: "Fullstack Solutions",
    description: "Developing end-to-end digital products using Node.js, Express, and MongoDB, ensuring seamless integration between frontend and backend systems."
  },
  {
    number: "03",
    name: "UI/UX & Responsive Design",
    description: "Creating modern, conversion-focused user interfaces with Tailwind CSS and Figma that provide a consistent and fluid experience across all devices."
  },
  {
    number: "04",
    name: "SEO & Performance Optimization",
    description: "Optimizing production sites for maximum speed and search engine visibility using SSR, lazy loading, and advanced caching techniques to achieve high Lighthouse scores."
  },
  {
    number: "05",
    name: "Enterprise Architecture",
    description: "Designing complex management systems with robust state management and asynchronous data flows, tailored for large-scale enterprise and educational platforms."
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 -mt-10 relative z-0">
      <div className="max-w-7xl mx-auto">
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28">
          <h2 className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            Services
          </h2>
        </FadeIn>

        <div className="max-w-5xl mx-auto flex flex-col">
          {SERVICES.map((service, i) => (
            <FadeIn 
              key={service.number}
              delay={i * 0.1}
              y={30}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 ${i === 0 ? 'border-t' : ''}`}
            >
              <span 
                className="text-[#0C0C0C] font-black leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 
                  className="text-[#0C0C0C] font-medium uppercase leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p 
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
