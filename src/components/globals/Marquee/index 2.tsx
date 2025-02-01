'use client';

import { motion, Variants } from 'motion/react';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  text: string;
}

const marqueeVariants: Variants = {
  animate: {
    transition: {
      duration: 15,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    },
    x: [0, -1035],
  },
};

export const Marquee = ({ text }: Props) => (
  <div className={styles.marquee}>
    <motion.div
      variants={marqueeVariants}
      initial="initial"
      animate="animate"
      className={styles.track}
    >
      {
        Array.from({ length: 10 }).map((_, index) => (
          <p key={index}>{text}</p>
        ))
      }
    </motion.div>
  </div>
);
