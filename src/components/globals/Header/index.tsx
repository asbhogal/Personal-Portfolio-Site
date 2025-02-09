import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { HiMenuAlt3 } from 'react-icons/hi';
import type { JSX } from 'react';
import styles from './styles.module.scss';
import colors from '../../../styles/colors/index.module.scss';
import { Logo } from '../../graphics';
import { Link } from '../Link';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';
import { NavMenu } from './components';

export const Header = async (): Promise<JSX.Element> => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.findGlobal({
    slug: 'header-menu',
  });

  const { headerMenu } = data;

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
          name="menu"
          title="Menu"
        >
          <HiMenuAlt3 color={colors.argent} />
        </Button>
        <NavMenu
          headerMenu={headerMenu}
        />
      </header>
    </FadeIn>
  );
};
