'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navMenu } from '@/utils/data';
import FadeIn from '@/utils/animations';
import Image from 'next/image';
import styles from './styles.module.scss';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [ariaExpanded, setAriaExpanded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  return (
    <FadeIn
      as="header"
      className="Header"
    >
      <nav className={styles.nav}>
        <div className={styles.navBar}>
          <button
            type="button"
            aria-label="Menu Toggle"
            aria-expanded={navOpen}
            onClick={() => {
              setNavOpen(!navOpen);
              setAriaExpanded(!ariaExpanded);
            }}
            className={styles.menuToggle}
          >
            <span className={navOpen ? 'LineTop Spin' : 'LineTop'} />
            <span className={navOpen ? 'LineBottom Spin' : 'LineBottom'} />
          </button>
          <div className={styles.mainLogo}>
            <Link
              className={styles.homePageLogoLink}
              href="/"
              aria-label="Return to the home page"
            >
              <Image
                src="/icons/logo.svg"
                alt=""
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className={navOpen ? 'NavOverlay NavOverlayOpen' : 'NavOverlay'}>
          <ul className="NavLinks">
            {navMenu.map((item) => (
              <li
                className="NavItems"
                key={item.id}
              >
                <Link
                  href={item.href}
                  onClick={() => setNavOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </FadeIn>
  );
};
