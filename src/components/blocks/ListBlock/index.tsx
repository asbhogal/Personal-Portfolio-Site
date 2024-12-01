import { Project } from '@/payload-types';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  stacks: Project['stacks'];
}

export const ListBlock = ({ className, stacks }: Props) => (
  <ul className={`${styles.ul} ${className}`}>
    {stacks?.map((stack) => (
      stack?.items?.map((item) => (
        <React.Fragment key={stack.id}>
          <li className={styles.li}>
            {item.item}
          </li>
        </React.Fragment>
      ))
    ))}
  </ul>
);
