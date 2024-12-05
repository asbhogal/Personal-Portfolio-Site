'use client';

import { motion } from 'motion/react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const FadeIn = ({
  children,
  className,
}: Props) => (
  <motion.div
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition:
      {
        delay: 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }}
  >
    {children}
  </motion.div>
);
