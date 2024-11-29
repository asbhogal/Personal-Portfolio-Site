import { Project } from '@/payload-types';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
  stacks: Project['stacks'];
}

export const ListBlock = ({ stacks }: Props) => (
  <ul className={styles.ul}>
    {stacks?.map((stack) => (
      stack?.items?.map((item) => (
        <React.Fragment key={stack.id}>
          <li className={styles.li}>
            {item.item}
          </li>
          {stack?.items && stack?.items?.length > 1 && <span className={styles.separator} />}
        </React.Fragment>
      ))
    ))}
  </ul>
);
