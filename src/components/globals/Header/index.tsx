'use client';

import React, { useEffect, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import type { JSX } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import type { HeaderMenu } from '@/payload-types';
import styles from './styles.module.scss';
import colors from '../../../styles/colors/index.module.scss';
import { Logo } from '../../graphics';
import { Link } from '../Link';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';
import { NavMenu } from './components';


interface Props {
  data: HeaderMenu;
}

export const Header = ({ data }: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <FadeIn>
      <header className={styles.header}>
        <Link
          aria-label="Home"
          href="/"
        >
          <Logo
            className={styles.headerLogo}
            width={34}
          />
        </Link>
        <Button
          aria-label="Toggle mobile menu"
          name="menu"
          title="Menu"
          className={styles.toggleButton}
          onClick={() => { toggleModal(); }}
        >
          {
            isOpen
              ? <IoCloseOutline color={colors.argent} />
              : <HiMenuAlt3 color={colors.argent} />
          }
        </Button>
        <NavMenu
          data={data}
          isOpen={isOpen}
        />
      </header>
    </FadeIn>
  );
};
