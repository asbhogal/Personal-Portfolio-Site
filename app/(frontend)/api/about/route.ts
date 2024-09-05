import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'pages',
  });

  return NextResponse.json(data);
};
