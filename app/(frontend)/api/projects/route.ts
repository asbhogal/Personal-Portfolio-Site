import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';

export const GET = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'projects',
  });

  return Response.json(data);
};

export const POST = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const data = await payload.create({
    collection: 'projects',
    data: {
      heroImage: 'Test',
    },
  });

  return Response.json(data);
};
