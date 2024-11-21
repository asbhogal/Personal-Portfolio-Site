import configPromise from '@payload-config';
import { getPayload } from 'payload';

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.findGlobal({
    slug: 'footer-menu',
  });

  return Response.json(data);
};
