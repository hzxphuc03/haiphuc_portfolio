import { FadeIn } from '../components/FadeIn';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const STATS = [
  {
    value: 1,
    suffix: "+",
    prefix: "0",
    label: "Years of Experience in Web Development"
  },
  {
    value: 13,
    suffix: "",
    prefix: "",
    label: "Team Members Collaboration at FSEL"
  },
  {
    value: 100,
    suffix: "%",
    prefix: "",
    label: "SEO & Performance Optimization Focus"
  }
];

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    damping: 50,
    stiffness: 100,
    mass: 1
  });
  
  const displayValue = useTransform(springValue, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export const StatsSection = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 border-t border-[#D7E2EA]/10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
        {STATS.map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1} y={20} className="flex flex-col items-center text-center">
            <span className="hero-heading font-black text-6xl sm:text-7xl md:text-8xl leading-none mb-4 tracking-tighter">
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
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
