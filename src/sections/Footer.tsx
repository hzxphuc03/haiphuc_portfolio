import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Check, Copy, Globe } from 'lucide-react';
import { Magnet } from '../components/Magnet';

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "phucpanda2003@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="none">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      url: 'https://github.com/hzxphuc03' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" stroke="none">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      url: 'https://www.facebook.com/h4ipknc.ph4w/' 
    },
    { name: 'Portfolio', icon: <Globe className="w-5 h-5" />, url: 'https://haiphucorder.io.vn' },
  ];

  return (
    <footer id="contact" className="relative bg-[#0C0C0C] pt-40 pb-20 px-6 md:px-10 overflow-hidden border-t border-white/5">
      
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h2 className="text-[15vw] font-black uppercase tracking-tighter opacity-[0.03] text-[#D7E2EA] whitespace-nowrap">
          Creative Force
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: Contact Hub */}
        <div className="flex flex-col items-center text-center gap-12 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <MapPin className="w-3 h-3 text-blue-400" />
              <span className="text-[10px] text-[#D7E2EA]/60 uppercase tracking-widest font-bold">Hanoi, Vietnam</span>
            </div>
            <h3 className="text-[#D7E2EA] text-4xl md:text-6xl font-black uppercase tracking-tighter">Let's Build Together.</h3>
          </motion.div>

          {/* Interactive Email Hub */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[#D7E2EA]/40 uppercase tracking-widest font-bold mb-0.5">Drop me a message</div>
                  <div className="text-[#D7E2EA] font-bold text-lg md:text-xl">{email}</div>
                </div>
                
                <div className="ml-4 pl-4 border-l border-white/10">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <Check className="w-5 h-5 text-green-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <Copy className="w-5 h-5 text-[#D7E2EA]/40 group-hover:text-[#D7E2EA]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute left-1/2 -translate-x-1/2 top-0 px-4 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-xl pointer-events-none"
                    >
                      Copied to clipboard!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <a 
              href="tel:0972221123" 
              className="flex items-center gap-3 text-[#D7E2EA]/60 hover:text-white transition-colors group"
            >
              <Phone className="w-4 h-4 text-blue-400/60 group-hover:text-blue-400" />
              <span className="font-mono text-sm tracking-widest">0972 221 123</span>
            </a>
          </div>
        </div>

        {/* Separator Grid Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Social Links with Magnetic Scaling */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Magnet key={link.name} padding={30} strength={3}>
                <a 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#D7E2EA]/40 hover:text-white hover:border-white/30 transition-all group"
                  aria-label={link.name}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    {link.icon}
                  </motion.div>
                </a>
              </Magnet>
            ))}
          </div>

          {/* Graduation Info */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-[#D7E2EA]/80 font-medium uppercase tracking-[0.2em]">
                Expected Graduation: July 2026
              </span>
            </div>
            <p className="text-[#D7E2EA]/20 text-[10px] uppercase tracking-[0.3em] font-bold">
              @ Electric Power University (EPU)
            </p>
          </div>

        </div>

        {/* Final Copyright */}
        <div className="mt-20 text-center">
          <p className="text-[#D7E2EA]/10 text-[9px] uppercase tracking-[0.5em]">
            &copy; {new Date().getFullYear()} HAIPHUC &mdash; DIGITAL ARCHITECT
          </p>
        </div>

      </div>
    </footer>
  );
};
