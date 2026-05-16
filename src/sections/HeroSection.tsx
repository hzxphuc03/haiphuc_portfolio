import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SplitText } from '../components/SplitText';
import { Magnet } from '../components/Magnet';
import { Volume2, VolumeX, Terminal, Cpu, Layout, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const roles = [
    "Front-End Developer",
    "Fullstack Fresher",
    "UI-UX Explorer"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen py-20 md:py-0 md:h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0C0C0C]">
      {/* Background Layers */}
      <div className="noise-bg" />
      <div className="crt-overlay" />
      
      {/* Ambient Glow Lights */}
      <div className="glow-light bg-purple-900/40 w-[500px] h-[500px] -top-20 -left-20 animate-float" />
      <div className="glow-light bg-blue-900/30 w-[600px] h-[600px] -bottom-40 -right-20 animate-float" style={{ animationDelay: '-5s' }} />

      {/* Sound Toggle */}
      <div className="absolute top-8 right-8 z-50">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 rounded-full border border-[#D7E2EA]/10 hover:bg-[#D7E2EA]/5 transition-colors group"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-[#D7E2EA]/40 group-hover:text-[#D7E2EA]" />
          ) : (
            <Volume2 className="w-5 h-5 text-[#D7E2EA]" />
          )}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 flex flex-col items-center">
        
        {/* Heading */}
        <div className="mb-4">
          <SplitText 
            text="PHAM HAI PHUC" 
            className="hero-heading font-black uppercase text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-none tracking-tighter text-center"
            delay={0.2}
          />
        </div>

        {/* Subtitle / Typing Effect */}
        <div className="h-8 flex items-center justify-center mb-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[#D7E2EA]/60 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Centerpiece Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full max-w-5xl h-auto md:h-[400px]">
          
          {/* Card 1: Tech Stack Dock */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="md:col-span-4 bg-[#141414] border border-[#D7E2EA]/5 rounded-2xl p-6 flex flex-col justify-between overflow-hidden group hover:border-[#D7E2EA]/20 transition-colors min-h-[180px] md:min-h-0"
          >
            <div className="flex justify-between items-start">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-[10px] text-blue-400 font-mono uppercase tracking-widest">System Active</div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {['React', 'Next.js', 'TS', 'Tailwind', 'Node'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[#D7E2EA]/5 border border-[#D7E2EA]/10 rounded-full text-[10px] text-[#D7E2EA]/60 font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-[#D7E2EA]/5">
              <h3 className="text-[#D7E2EA] font-bold text-lg leading-tight uppercase">Tech Stack</h3>
              <p className="text-[#D7E2EA]/40 text-xs mt-1">High-performance architecture</p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Silhouette / Central Focus */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="md:col-span-5 relative bg-[#141414] border border-[#D7E2EA]/5 rounded-2xl overflow-hidden group min-h-[300px] md:min-h-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
              alt="Character"
              className="absolute inset-0 w-full h-full object-contain object-bottom p-4 filter grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-white/60 uppercase tracking-widest font-bold">Identity Verified</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Experience Bento */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="md:col-span-3 flex flex-col gap-4"
          >
            <div className="flex-1 bg-[#141414] border border-[#D7E2EA]/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center group hover:border-[#D7E2EA]/20 transition-colors">
              <Layout className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-2xl font-black text-[#D7E2EA]">15+</div>
              <div className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest">Projects Done</div>
            </div>
            <div className="flex-1 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-[#D7E2EA]/5 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <Terminal className="w-8 h-8 text-white/80 mb-2" />
              <div className="text-[10px] text-[#D7E2EA] font-mono leading-tight">ROOT@PHUC:~/WORK$ <br/> ./LAUNCH_PORTFOLIO</div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 md:mt-16">
          <Magnet padding={50} strength={5}>
            <button className="group relative px-10 py-4 bg-transparent transition-all duration-500">
              {/* Liquid Border Effect */}
              <div className="absolute inset-0 rounded-full border border-[#D7E2EA]/20 group-hover:border-transparent transition-colors" />
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="liquid-border absolute inset-0 w-full h-full scale-[1.02]" />
              </div>
              
              {/* Button Content */}
              <div className="relative flex items-center gap-3 text-[#D7E2EA] font-bold uppercase tracking-[0.2em] text-sm">
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </Magnet>
        </div>

      </div>

      {/* Decorative Text */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="text-[10px] text-[#D7E2EA]/20 font-mono flex flex-col gap-1 uppercase tracking-tighter">
          <span>LAT: 21.0285 N</span>
          <span>LONG: 105.8542 E</span>
          <span>EST. 2024 // CORE_V1.0</span>
        </div>
      </div>

    </section>
  );
};
