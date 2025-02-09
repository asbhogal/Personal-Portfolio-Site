
'use client';

import React from 'react';
import { constructClassName } from '@/utils/constructClassName';
import type { JSX } from 'react';
import type { HeaderMenu } from '@/payload-types';
import { Link } from '../../../Link';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  data: HeaderMenu;
  isOpen: boolean;
}

export const NavMenu = ({ className, data, isOpen }: Props): JSX.Element => {
  const { headerMenu } = data;

  return (
    <div className={constructClassName([
      className,
      isOpen ? styles.containerOpen : styles.container,
    ])}
    >
      <nav className={styles.nav}>
        <ul>
          {headerMenu?.map((headerItem) => (
            <li key={headerItem.id}>
              <Link href={headerItem.linkUrl ?? ''}>
                {headerItem.linkText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
