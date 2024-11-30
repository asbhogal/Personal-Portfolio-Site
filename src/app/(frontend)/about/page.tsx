import { Metadata } from 'next';
import React from 'react';
import { getPayload } from 'payload';
import { RichText } from '@/src/components/typography';
import configPromise from '@payload-config';
import { AboutBlock } from '@/src/components/blocks';

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
    <div>
      <h1>{docs[0].title}</h1>
      {/* @ts-expect-error resolve type mismatch */}
      <RichText content={docs[0]?.layout?.[0].Content || []} />
      {/* @ts-expect-error resolve type mismatch */}
      <AboutBlock history={docs[0]?.layout?.[1].about} />
    </div>
  );
}
