import { motion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type RevealType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'fadeLeft' 
  | 'fadeRight' 
  | 'scaleIn' 
  | 'clipIn' 
  | 'rotate3D'
  | 'blurIn';

interface ScrollRevealProps {
  children: ReactNode;
  type?: RevealType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const getVariants = (type: RevealType) => {
  switch (type) {
    case 'fadeUp':
      return {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
      };
    case 'fadeDown':
      return {
        hidden: { opacity: 0, y: -60 },
        visible: { opacity: 1, y: 0 }
      };
    case 'fadeLeft':
      return {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0 }
      };
    case 'fadeRight':
      return {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0 }
      };
    case 'scaleIn':
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
      };
    case 'clipIn':
      return {
        hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        visible: { opacity: 1, clipPath: 'inset(0 0% 0 0)' }
      };
    case 'rotate3D':
      return {
        hidden: { opacity: 0, rotateX: 30, rotateY: -15, scale: 0.9 },
        visible: { opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }
      };
    case 'blurIn':
      return {
        hidden: { opacity: 0, filter: 'blur(20px)', y: 30 },
        visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
      };
    default:
      return {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 }
      };
  }
};

export const ScrollReveal = ({
  children,
  type = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
  amount = 0.3,
}: ScrollRevealProps) => {
  const ref = useRef(null);

  const variants = getVariants(type);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};