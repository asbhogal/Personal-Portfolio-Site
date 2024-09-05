import { getPayloadHMR } from '@payloadcms/next/utilities';
import configPromise from '@payload-config';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'projects',
  });

  return NextResponse.json(data);
};

/* export const POST = async (req: NextRequest) => {
  const payload = await getPayloadHMR({
    config: configPromise,
  });

  const requestBody = await req.json();

  const result = await payload.create({
    collection: 'projects',
    data: requestBody,
  });

  return NextResponse.json(result);
};
 */
