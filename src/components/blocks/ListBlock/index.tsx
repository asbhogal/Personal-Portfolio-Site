import type { Project } from '@/payload-types';
import type { JSX } from 'react';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  stacks: Project['stacks'];
}

export const ListBlock = ({ className, stacks }: Props): JSX.Element => (
  <ul className={`${styles.ul} ${className}`}>
    {stacks?.map((stack) => (
      stack.items?.map((item) => (
        <li
          key={item.id}
          className={styles.li}
        >
          {item.item}
        </li>
      ))
    ))}
  </ul>
);
