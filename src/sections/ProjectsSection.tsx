import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Globe, Zap, ArrowUpRight, Cpu, Activity, Gamepad2, Database, Star } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

// --- Sub-component: Lighthouse Circular Progress ---
const CircularProgress = ({ value, label, color, delay = 0 }: { value: number, label: string, color: string, delay?: number }) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r={radius}
            stroke="currentColor"
            strokeWidth="3"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            cx="28"
            cy="28"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <span className="absolute text-[10px] font-bold text-[#D7E2EA]">{value}</span>
      </div>
      <span className="text-[8px] uppercase tracking-widest text-[#D7E2EA]/40 font-bold">{label}</span>
    </div>
  );
};

// --- Sub-component: Particle Data Flow (LHP Project) ---
const ParticleFlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      x: number; y: number; speed: number; size: number; opacity: number;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = 0.5 + Math.random() * 1.5;
        this.size = 1 + Math.random() * 2;
        this.opacity = Math.random() * 0.5;
      }
      update() {
        this.y -= this.speed;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx!.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: 50 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />;
};

// --- Sub-component: Advanced Project Card ---
const ProjectCard = ({ 
  title, 
  subtitle,
  description, 
  tags, 
  image, 
  link, 
  index, 
  isLarge = false,
  visualType = 'default'
}: { 
  title: string, 
  subtitle?: string,
  description: string, 
  tags: { name: string, color: string }[], 
  image: string, 
  link: string, 
  index: number,
  isLarge?: boolean,
  visualType?: 'sneaker' | 'data' | 'game' | 'default'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${isLarge ? 'md:col-span-8' : 'md:col-span-4'} h-[550px] rounded-[3rem] overflow-hidden cursor-pointer bg-[#141414] border border-white/5 shadow-2xl`}
    >
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {visualType === 'sneaker' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <img src="/haiphuc-shop.png" className="w-full h-full object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-700 filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" alt="" />
              <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px]" />
            </motion.div>
          </div>
        )}

        {visualType === 'data' && (
          <>
            <ParticleFlow />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
          </>
        )}

        {visualType === 'game' && (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Gamepad2 className="w-48 h-48 text-purple-500/20 group-hover:text-purple-500/40 transition-colors duration-700" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10"
              >
                <Star className="w-12 h-12 text-yellow-500/20" />
              </motion.div>
            </motion.div>
          </div>
        )}

        {/* Refraction Effect on Hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{ transform: "translateZ(100px)" }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 h-full p-10 flex flex-col justify-between" style={{ transform: "translateZ(60px)" }}>
        
        {/* Top Badges */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl">
              {visualType === 'sneaker' && <ShoppingBag className="w-7 h-7 text-blue-400" />}
              {visualType === 'data' && <Activity className="w-7 h-7 text-green-400" />}
              {visualType === 'game' && <Gamepad2 className="w-7 h-7 text-purple-400" />}
            </div>
            
            {visualType === 'data' && (
              <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg inline-flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-[9px] text-green-400 font-bold uppercase tracking-widest">Active Processes: 1,248</span>
              </div>
            )}
          </div>

          <div className="flex gap-4 p-4 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-xl">
            {visualType === 'sneaker' && <CircularProgress value={100} label="SEO" color="#10b981" />}
            {visualType === 'game' && <CircularProgress value={98} label="PERF" color="#3b82f6" />}
          </div>
        </div>

        {/* Bottom Info */}
        <div>
          <div className="mb-4">
            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.3em] mb-2 block">{subtitle}</span>
            <h3 className="text-[#D7E2EA] font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.8] mb-6 pr-4">
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h3>
            <p className="text-[#D7E2EA]/40 text-sm md:text-base leading-relaxed max-w-sm mb-8 group-hover:text-[#D7E2EA]/70 transition-colors line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-wrap gap-2 flex-1">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag.name} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-white/40 font-bold uppercase tracking-widest">
                  {tag.name}
                </span>
              ))}
            </div>
            <motion.a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
              className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] py-24 sm:py-32 px-6 md:px-10 overflow-hidden">
      
      {/* Background Texture & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <FadeIn x={-20}>
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Digital Experience</span>
            </div>
            <h2 className="hero-heading font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter pr-4">
              Featured <br/> <span className="text-[#D7E2EA]">Work.</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2} x={20} className="max-w-xs">
            <p className="text-[#D7E2EA]/40 text-sm leading-relaxed border-l-2 border-white/10 pl-6 uppercase tracking-widest font-medium">
              Enterprise-grade solutions engineered for maximum scalability and digital impact.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 perspective-2000">
          
          {/* Hai Phuc Shop */}
          <ProjectCard 
            index={1}
            isLarge={true}
            visualType="sneaker"
            title="Hai Phuc Shop"
            subtitle="Streetwear Hypebeast Platform"
            description="Premium Streetwear & Hypebeast e-commerce platform. Built with Next.js 16, Express 5, and PayOS."
            image="/haiphuc-shop.png"
            link="https://haiphucorder.io.vn"
            tags={[
              { name: "Next.js 16", color: "#ffffff" },
              { name: "Tailwind 4", color: "#38bdf8" },
              { name: "PayOS", color: "#3b82f6" }
            ]}
          />

          {/* Le Hong Phong */}
          <ProjectCard 
            index={2}
            visualType="data"
            title="LHP Portal"
            subtitle="Enterprise Learning Mgmt"
            description="Enterprise academic portal for training management and e-learning. Angular & RxJS."
            image="/lhp-project.png"
            link="#"
            tags={[
              { name: "Angular", color: "#dd0031" },
              { name: "RxJS", color: "#e10098" }
            ]}
          />

          {/* Empty Space for Grid Balance or Connectors */}
          <div className="hidden md:block md:col-span-4" />

          {/* HaiPhuc Games */}
          <ProjectCard 
            index={3}
            isLarge={true}
            visualType="game"
            title="HaiPhuc Games"
            subtitle="Instant-play Gaming Hub"
            description="Instant-play gaming hub utilizing GamePix API. Built on Next.js 16 & Tailwind 4."
            image="/haiphuc-games.png"
            link="https://fe-hai-phuc-games.vercel.app/"
            tags={[
              { name: "Next.js 16", color: "#ffffff" },
              { name: "GamePix API", color: "#f7df1e" }
            ]}
          />

        </div>

        {/* Connectors (SVG overlay) */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
           <svg className="w-full h-full">
              {/* Electric Arc 1 */}
              <motion.path 
                d="M 800 600 Q 900 700 1000 800"
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
           </svg>
        </div>

      </div>

      {/* Decorative Shutter revealed on hover */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
    </section>
  );
};
