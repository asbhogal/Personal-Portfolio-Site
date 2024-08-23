import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';

export const GET = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const data = await payload.findGlobal({
    slug: 'footer-menu',
  });

  return Response.json(data);
};
