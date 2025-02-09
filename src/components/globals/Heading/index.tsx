'use client';

import Image from 'next/image';
import { PaginatedDocs } from 'payload';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FadeIn } from '../FadeIn';
import { Marquee } from '../Marquee';
import { Link } from '../Link';
import { Logo } from '../../graphics';
import { VisuallyHidden } from '../../typography';

interface Props {
  headerImage: PaginatedDocs['docs'][0]['headerImage'];
  title: string;
}

export const Heading = ({ headerImage, title }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div
      className={styles.homePageSection}
    >
      <FadeIn>
        <Marquee text="Award Winning Creative Developer" />
        <div className={styles.headerContainer}>
          {
            windowWidth < 577 ? (
              <VisuallyHidden>
                <h1>{title}</h1>
              </VisuallyHidden>
            ) : (
              <h1>{title}</h1>
            )
          }
          <div className={styles.headerImageContainer}>
            <Image
              className={styles.headerImage}
              src={headerImage.url}
              alt={headerImage.altText}
              width={headerImage.width}
              height={headerImage.height}
            />
          </div>
          <div className={styles.linksContainer}>
            <Link href="/about">- About</Link>
            <Link href="/work">- Work</Link>
          </div>
        </div>
        <Marquee
          direction="right"
          text="Award Winning Creative Developer"
        />
      </FadeIn>
      <Logo
        className={styles.logo}
        width={1000}
      />
    </div>
  );
};
