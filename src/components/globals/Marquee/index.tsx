'use client';

import { motion, Variants } from 'motion/react';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  direction?: 'left' | 'right';
  text: string;
}

const getMarqueeVariants = (direction: 'left' | 'right'): Variants => ({
  animate: {
    transition: {
      duration: 15,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    },
    x: direction === 'left' ? [0, -1035] : [-1035, 0],
  },
});

export const Marquee = ({ text, direction = 'left' }: Props) => (
  <div className={styles.marquee}>
    <motion.div
      variants={getMarqueeVariants(direction)}
      initial="initial"
      animate="animate"
      className={styles.track}
    >
      {
        Array.from({ length: 16 }).map((_, index) => (
          <p key={index}>{text}</p>
        ))
      }
    </motion.div>
  </div>
);
