import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';

export default async function Page() {
  const payload = await getPayloadHMR({
    config,
  });

  const data = await payload
    .find({
      collection: 'pages',
    })
    .then((results) => results.docs[0]);

  return (
    <div>
      {/* @ts-expect-error resolve content mismatch */}
      <h1>{data?.content?.root?.children[0]?.children[0]?.text}</h1>
    </div>
  );
}
