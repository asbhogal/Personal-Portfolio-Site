import { Metadata } from 'next';
import React from 'react';
import { Heading } from '@/src/components/globals';
import RichText from '@/src/components/typography/RichText';
import { getPayload, PaginatedDocs } from 'payload';
import configPromise from '@payload-config';

export const metadata: Metadata = {
  description:
    'The portfolio site of Aman Singh Bhogal, Creative Front End Developer with over three and a half years of experience in designing and building user interfaces',
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
    <React.Fragment>
      <Heading title={
        docs[0]?.title || 'Aman Singh Bhogal'
      }
      />
      <RichText content={
        docs[0]?.layout?.Content || []
      }
      />
    </React.Fragment>
  );
}
