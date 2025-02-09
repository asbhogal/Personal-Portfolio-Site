import type { Metadata } from 'next';
import type { JSX } from 'react';
import React from 'react';
import type { PaginatedDocs } from 'payload';
import { getPayload } from 'payload';
import { RichText } from '@/src/components/typography';
import configPromise from '@payload-config';
import { AboutBlock } from '@/src/components/blocks';
import { Logo } from '@/src/components/graphics';
import { FadeIn } from '@/src/components/globals';
import type { Page } from '@/payload-types';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  description: 'About Aman Singh Bhogal',
  title: 'About | Aman Singh Bhogal',
};

export default async function About(): Promise<JSX.Element> {
  const payload = await getPayload({
    config: configPromise,
  });

  const data: PaginatedDocs<Page> = await payload.find({
    collection: 'pages',
    where: {
      title: {
        equals: 'About',
      },
    },
  });

  const { docs } = data;

  return (
    <div className={styles.container}>
      <FadeIn>
        <h1 className={styles.title}>{docs[0].title}</h1>
      </FadeIn>
      <FadeIn>
        <RichText
          className={styles.aboutSummary}
          content={docs[0]?.content}
        />
      </FadeIn>
      <div className={styles.aboutContainer}>
        <Logo
          className={styles.logo}
          width={500}
        />
        <FadeIn>
          {docs[0]?.layout?.[0]?.blockType === 'about-block' && (
            <AboutBlock history={
              docs[0]?.layout?.[0]?.about
            }
            />
          )}
        </FadeIn>
      </div>
    </div>
  );
}
