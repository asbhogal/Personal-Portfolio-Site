import Heading from '@/components/covers/Heading';
import { Metadata } from 'next';
import React from 'react';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Page as PageProps } from '@/payload-types';
import Arrow from '@/components/icons/Arrow';
import RichText from '@/components/typography/RichText';
import RenderBlocks from '@/components/sections/RenderBlocks';

export const metadata: Metadata = {
  description:
    'The portfolio site of Aman Singh Bhogal, Creative Front End Developer with over three and a half years of experience in designing and building user interfaces',
  title: 'Aman Singh Bhogal | Award Winning Creative Front End Developer',
};

export default async function Page() {
  const payload = await getPayloadHMR({
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
      <Arrow />
      <RenderBlocks blocks={data.layout} />
    </React.Fragment>
  );
}
