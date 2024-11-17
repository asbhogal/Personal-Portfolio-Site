'use client';

import FadeIn from '@/utils/animations';
import styles from './styles.module.scss';

export const SkillLozenge = ({ skills }: { skills: string[] }) => (
  <FadeIn
    as="div"
    className={styles.skillLozenges}
  >
    {skills.map((skill) => (
      <FadeIn
        as="span"
        className={styles.skillLozenge}
        key={skill}
      >
        {skill}
      </FadeIn>
    ))}
  </FadeIn>
);
