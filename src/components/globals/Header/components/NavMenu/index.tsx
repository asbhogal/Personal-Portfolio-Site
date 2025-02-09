
'use client';

import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { constructClassName } from '@/utils/constructClassName';
import type { JSX } from 'react';
import type { HeaderMenu } from '@/payload-types';
import { Link } from '../../../Link';
import styles from './styles.module.scss';
import { Button } from '../../../Button';
import colors from '../../../../../styles/colors/index.module.scss';

interface Props {
  className?: string;
  headerMenu: HeaderMenu['headerMenu'];
}

export const NavMenu = ({ className, headerMenu }: Props): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // const openNav = () => {
  //   setIsNavOpen(true);
  // };

  const closeNav = (): void => {
    setIsNavOpen(false);
  };

  return (
    <div className={constructClassName([
      className,
      isNavOpen ? styles.containerOpen : styles.container,
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
      <Button
        name="closeButton"
        className={constructClassName([
          styles.closeButton,
        ])}
        onClick={() => closeNav}
      >
        <IoCloseOutline color={colors.argent} />
      </Button>
    </div>
  );
};
