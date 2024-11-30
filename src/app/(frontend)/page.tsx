import { Metadata } from 'next';
import React from 'react';
import { Heading, Spacer } from '@/src/components/globals';
import { getPayload, PaginatedDocs } from 'payload';
import configPromise from '@payload-config';
import { RichText, Subheading } from '@/src/components/typography';
import { ArrowDown } from '@/src/components/graphics';
import { AccoladesBlock, SliderBlock } from '@/src/components/blocks';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  description:
    'The portfolio site of Aman Singh Bhogal, Creative Front End Developer with over 4 and a half years of experience in designing and building accessible, responsive and attractive user interfaces',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icons/favicon-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icons/favicon-light.svg',
      },
    ],
  },
  title: 'Aman Singh Bhogal | Award Winning Creative Front End Developer',
};

export default async function Page() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data: PaginatedDocs = await payload.find({
    collection: 'pages',
    where: {
      title: {
        equals: 'Home Page',
      },
    },
  });

  const { docs } = data;

  return (
    <div className={styles.container}>
      <Heading title={
        docs[0]?.title || 'Aman Singh Bhogal'
      }
      />
      <Spacer height={300} />
      <RichText content={
        docs[0]?.layout?.[0].Content || []
      }
      />
      <ArrowDown className={styles.arrow} />
      <Spacer height={300} />
      <div className={styles.containerInner}>
        <Subheading subheading={docs[0]?.layout?.[1].subheading} />
        <AccoladesBlock accolades={docs[0]?.layout?.[2].accolade} />
      </div>
      <Spacer height={364} />
      <div className={styles.containerInner}>
        <Subheading subheading={docs[0]?.layout?.[4].title} />
        <SliderBlock items={docs[0]?.layout?.[4]} />
      </div>
    </div>
  );
}
