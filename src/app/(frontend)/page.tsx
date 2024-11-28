import { Metadata } from 'next';
import React from 'react';
import config from '@payload-config';
import { Page as PageProps } from '@/payload-types';
import { Heading, RenderBlocks } from '@/src/components/globals';
import RichText from '@/src/components/typography/RichText';
import { getPayload } from 'payload';

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
    config,
  });

  const data: PageProps = await payload
    .find({
      collection: 'pages',
    })
    .then((results) => results.docs[0]);

  /* @ts-expect-error resolve content mismatch */
  const title = data?.content?.root?.children[0]?.children[0]?.text ?? '';

  if (!data || !title) {
    throw new Error('Failed to load page data');
  }

  return (
    <React.Fragment>
      <Heading title={title} />
      {/* @ts-expect-error resolve content mismatch */}
      <RichText content={data?.layout[0].Content || ''} />
      <RenderBlocks blocks={data.layout || []} />
    </React.Fragment>
  );
}
