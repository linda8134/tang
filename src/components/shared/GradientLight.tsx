import { motion } from 'framer-motion';
import { useRef } from 'react';

interface GradientLightProps {
  className?: string;
  color?: string;
  size?: string;
  duration?: number;
  delay?: number;
}

const GradientLight = ({ 
  className = "", 
  color = "rgba(56, 189, 248, 0.15)", 
  size = "600px",
  duration = 8,
  delay = 0 
}: GradientLightProps) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      animate={{
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
      }}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        filter: 'blur(60px)',
      }}
    />
  );
};

export default GradientLight; 