import { Metadata } from 'next';
import config from '@payload-config';
import React from 'react';
import { getPayload } from 'payload';

export const metadata: Metadata = {
  description: 'About Aman Singh Bhogal',
  title: 'About | Aman Singh Bhogal',
};

export default async function Page() {
  // const { about: aboutData } = await getAboutData();

  const payload = await getPayload({
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
