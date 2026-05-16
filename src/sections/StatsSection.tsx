import { FadeIn } from '../components/FadeIn';

const STATS = [
  {
    value: "01+",
    label: "Years of Experience in Web Development"
  },
  {
    value: "13",
    label: "Team Members Collaboration at FSEL"
  },
  {
    value: "100%",
    label: "SEO & Performance Optimization Focus"
  }
];

export const StatsSection = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 border-t border-[#D7E2EA]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
        {STATS.map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20} className="flex flex-col items-center text-center">
            <span className="hero-heading font-black text-6xl sm:text-7xl md:text-8xl leading-none mb-4">
              {stat.value}
            </span>
            <p className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm max-w-[200px]">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
