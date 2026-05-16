import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight, Cpu, Terminal, GitBranch, Share2, Activity, ShieldCheck, Database } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

// --- Sub-component: Tree Visualizer ---
const TreeVisualizer = () => {
  return (
    <div className="relative w-full h-[120px] bg-black/40 rounded-xl border border-white/5 overflow-hidden group cursor-pointer">
      <div className="absolute top-2 left-3 text-[10px] text-white/30 uppercase font-mono tracking-widest">Recursive Hierarchy</div>
      <svg className="w-full h-full" viewBox="0 0 400 120">
        <motion.path
          d="M 50 60 L 100 60 M 100 60 L 150 30 M 100 60 L 150 90 M 150 30 L 200 15 M 150 30 L 200 45 M 150 90 L 200 75 M 150 90 L 200 105"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1, stroke: "rgba(59, 130, 246, 0.5)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {[
          { x: 50, y: 60, active: true },
          { x: 100, y: 60, active: true },
          { x: 150, y: 30, active: false },
          { x: 150, y: 90, active: false },
          { x: 200, y: 15, active: false },
          { x: 200, y: 45, active: false },
          { x: 200, y: 75, active: false },
          { x: 200, y: 105, active: false },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            className={node.active ? "fill-blue-500" : "fill-white/20"}
            whileHover={{ r: 5, fill: "#3b82f6" }}
          />
        ))}
      </svg>
      <div className="absolute bottom-2 right-3 text-[9px] text-blue-400/60 font-mono italic opacity-0 group-hover:opacity-100 transition-opacity">
        Hover to expand logic
      </div>
    </div>
  );
};

// --- Sub-component: RxJS Visualizer ---
const RxJSVisualizer = () => {
  const operators = [
    { name: 'debounce', icon: <Activity className="w-3 h-3" /> },
    { name: 'switchMap', icon: <Share2 className="w-3 h-3" /> },
    { name: 'distinct', icon: <ShieldCheck className="w-3 h-3" /> }
  ];

  return (
    <div className="relative w-full h-[120px] bg-black/40 rounded-xl border border-white/5 overflow-hidden p-4">
      <div className="absolute top-2 left-3 text-[10px] text-white/30 uppercase font-mono tracking-widest">Async Stream Pipeline</div>
      <div className="flex items-center justify-between h-full px-4 relative">
        <div className="absolute left-8 right-8 h-[1px] bg-white/10 top-1/2 -translate-y-1/2" />
        
        {/* Animated Stream Ball */}
        <motion.div
          animate={{
            x: [0, 240],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1.2, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10"
        />

        {operators.map((op, i) => (
          <div key={i} className="relative z-0 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-blue-400 transition-colors">
              {op.icon}
            </div>
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">{op.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <section id="about" className="relative min-h-screen bg-[#0C0C0C] py-24 sm:py-32 px-6 md:px-10 overflow-hidden">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Personal Info */}
          <div className="flex flex-col gap-10">
            <FadeIn y={30}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Available for Hire</span>
              </div>
              <h2 className="text-[#D7E2EA] font-black uppercase text-5xl sm:text-6xl md:text-7xl leading-none tracking-tighter mb-8 pr-4">
                The <span className="hero-heading">Engineer</span> <br/> Behind The Code.
              </h2>
              <p className="text-[#D7E2EA]/60 text-lg leading-relaxed max-w-xl">
                Currently a final-year student at <span className="text-[#D7E2EA]">Electric Power University (EPU)</span>, specializing in Software Engineering. I bridge the gap between complex backend logic and pixel-perfect frontend experiences.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 gap-6">
              <FadeIn delay={0.2} y={20} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-3xl font-black text-[#D7E2EA] mb-1">1+</div>
                <div className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest leading-tight">Years of Professional Dev</div>
              </FadeIn>
              <FadeIn delay={0.3} y={20} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                <div className="text-3xl font-black text-[#D7E2EA] mb-1">Modern</div>
                <div className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest leading-tight">Tech Stack Environment</div>
              </FadeIn>
            </div>

            <FadeIn delay={0.4} y={20}>
              <div className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl backdrop-blur-xl">
                <h4 className="text-[#D7E2EA] font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" /> Core Specialization
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Angular Architecture', 'RxJS Streams', 'Next.js 15', 'Fullstack Systems', 'UI/UX Engineering', 'Enterprise Management'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-[#D7E2EA]/70 font-medium uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive FSEL Timeline */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.5} y={30}>
              <div className="relative p-1 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md overflow-hidden">
                <div className="bg-[#0C0C0C] rounded-[2.2rem] p-8 md:p-10">
                  
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <Terminal className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-[#D7E2EA] font-bold text-xl uppercase tracking-tighter">Technical Ecosystem</h3>
                        <p className="text-[#D7E2EA]/30 text-[10px] uppercase tracking-widest">Enterprise & E-Commerce Solutions</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <span className="text-[9px] text-green-400 font-bold uppercase tracking-widest">Production Ready</span>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative pl-8 border-l border-white/10 space-y-12">
                    
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => setShowBreakdown(!showBreakdown)}
                    >
                      {/* Node Point */}
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#0C0C0C] border-2 border-blue-500 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-blue-400 font-mono text-[10px] uppercase tracking-widest mb-1 block">Current Phase // 2025</span>
                            <h4 className="text-[#D7E2EA] font-bold text-2xl uppercase group-hover:text-blue-400 transition-colors">Front-End Developer</h4>
                          </div>
                          <ChevronRight className={`w-5 h-5 text-white/20 transition-transform ${showBreakdown ? 'rotate-90 text-blue-400' : ''}`} />
                        </div>

                        <p className="text-[#D7E2EA]/40 text-sm leading-relaxed">
                          Building scalable architectures for both Enterprise portals (Angular) and high-performance E-commerce platforms (Next.js 16).
                        </p>

                        {/* Interactive Tech Modules */}
                        <AnimatePresence>
                          {showBreakdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.5, ease: "circOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 grid grid-cols-1 gap-4">
                                <TreeVisualizer />
                                <RxJSVisualizer />
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <Database className="w-4 h-4 text-purple-400 mb-2" />
                                    <div className="text-[10px] text-[#D7E2EA] font-bold uppercase mb-1">State Mgmt</div>
                                    <div className="text-[9px] text-[#D7E2EA]/40 uppercase tracking-tighter leading-tight">Advanced Reactive Forms & Custom Validation</div>
                                  </div>
                                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                                    <GitBranch className="w-4 h-4 text-orange-400 mb-2" />
                                    <div className="text-[10px] text-[#D7E2EA] font-bold uppercase mb-1">Architecture</div>
                                    <div className="text-[9px] text-[#D7E2EA]/40 uppercase tracking-tighter leading-tight">Reusable Module-based Design Pattern</div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {!showBreakdown && (
                          <div className="text-[10px] text-blue-400/60 font-mono uppercase tracking-[0.2em] mt-2 animate-pulse">
                            Click node to explore tech modules
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Secondary Node (Placeholder for previous work/study) */}
                    <div className="relative opacity-30 pointer-events-none">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#0C0C0C] border-2 border-white/20" />
                      <div>
                        <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-1 block">Previous // 2024</span>
                        <h4 className="text-[#D7E2EA] font-bold text-xl uppercase">EPU Academic Projects</h4>
                        <p className="text-[#D7E2EA]/40 text-xs mt-2">Fullstack Development Foundation</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
