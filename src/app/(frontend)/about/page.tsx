import { Metadata } from 'next';
import React from 'react';
import { getPayload } from 'payload';
import { RichText } from '@/src/components/typography';
import configPromise from '@payload-config';
import { AboutBlock } from '@/src/components/blocks';
import { ArrowDown, Logo } from '@/src/components/graphics';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  description: 'About Aman Singh Bhogal',
  title: 'About | Aman Singh Bhogal',
};

export default async function Page() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
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
      <h1 className={styles.title}>{docs[0].title}</h1>
      {/* @ts-expect-error resolve type mismatch */}
      <RichText content={docs[0]?.layout?.[0].Content || []} />
      <ArrowDown className={styles.arrowDown} />
      <div className={styles.aboutContainer}>
        <Logo
          className={styles.logo}
          width={500}
        />
        {/* @ts-expect-error resolve type mismatch */}
        <AboutBlock history={docs[0]?.layout?.[1].about} />
      </div>
    </div>
  );
}
