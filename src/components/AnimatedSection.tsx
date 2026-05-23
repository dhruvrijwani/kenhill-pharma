import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'staggerContainer' | 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'scaleIn';
}

export default function AnimatedSection({
  children,
  className = '',
  variant = 'fadeUp'
}: AnimatedSectionProps) {
  const getVariant = () => {
    switch (variant) {
      case 'staggerContainer':
        return staggerContainer;
      case 'fadeIn':
        return fadeIn;
      case 'slideInLeft':
        return slideInLeft;
      case 'slideInRight':
        return slideInRight;
      case 'scaleIn':
        return scaleIn;
      case 'fadeUp':
      default:
        return fadeUp;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={getVariant()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
