import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  offset?: [any, any];
}

export const AnimatedText = ({ text, className = "", style, offset = ["start 0.8", "end 0.2"] }: AnimatedTextProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset
  });

  const words = text.split(" ");
  let charCount = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIndex) => {
        const chars = word.split("");
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
            {chars.map((char, charIndex) => {
              const i = charCount++;
              const start = i / text.length;
              const end = start + 1 / text.length;
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

              return (
                <span key={charIndex} className="relative inline-block">
                  <span className="opacity-20">{char}</span>
                  <motion.span
                    style={{ opacity }}
                    className="absolute left-0 top-0"
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
