'use client';

import type { JSX } from 'react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import type { PaginatedDocs } from 'payload';
import { VscDash } from 'react-icons/vsc';
import colors from '@/src/styles/colors/index.module.scss';
import type { Media } from '@/payload-types';
import styles from './styles.module.scss';
import { Marquee } from '../Marquee';
import { Link } from '../Link';
import { Logo } from '../../graphics';
import { VisuallyHidden } from '../../typography';

interface Props {
  headerImage: PaginatedDocs['docs'][0]['headerImage'];
  title: string;
}

export const Heading = ({ headerImage, title }: Props): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const isMedia = (image: unknown): image is Media => typeof image === 'object' && image !== null && 'url' in image && 'altText' in image;

  return (
    <div
      className={styles.homePageSection}
    >
      <Marquee text="Award Winning Creative Developer" />
      <div className={styles.headerContainer}>
        <VisuallyHidden>
          <h1>{title}</h1>
        </VisuallyHidden>
        <div className={styles.imageContainer}>
          <Image
            src="/images/Home/PageTitle.svg"
            alt="Page Title"
            width={1000}
            height={1000}
            loading="eager"
          />
        </div>
        <div className={styles.headerImageContainer}>
          {isMedia(headerImage) && (
            <Image
              className={styles.headerImage}
              src="/images/aman-picture.jpg"
              alt="A side headshot of a young man with a beard looking to the side in black and white"
              width={headerImage.width ?? 1000}
              height={headerImage.height ?? 1000}
              priority
            />
          )}
        </div>
        <div className={styles.linksContainer}>
          <Link href="/about">
            {
              windowWidth > 577 && (
                <VscDash
                  size={20}
                  color={colors.argent}
                />
              )
            }
            About
          </Link>
          <Link href="/work">
            {
              windowWidth > 577 && (
                <VscDash
                  size={20}
                  color={colors.argent}
                />
              )
            }
            Work
          </Link>
        </div>
      </div>
      <Marquee
        direction="right"
        text="Award Winning Creative Developer"
      />
      {
        windowWidth > 577 && (
          <Logo
            className={styles.logo}
            width={1200}
          />
        )
      }
    </div>
  );
};
