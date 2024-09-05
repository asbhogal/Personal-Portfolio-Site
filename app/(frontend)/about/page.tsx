import { Metadata } from 'next';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import React from 'react';

export const metadata: Metadata = {
  description: 'About Aman Singh Bhogal',
  title: 'About | Aman Singh Bhogal',
};

export default async function Page() {
  // const { about: aboutData } = await getAboutData();

  const payload = await getPayloadHMR({
    config,
  });

  const data = await payload
    .find({
      collection: 'pages',
    })
    .then((results) => results.docs[2]);

  // eslint-disable-next-line no-console
  console.log(data);
  return (
    <React.Fragment>
      <p>About</p>
      {/*  <AboutCover />
      <AboutSection aboutData={aboutData} />
      <CTA /> */}
    </React.Fragment>
  );
}
