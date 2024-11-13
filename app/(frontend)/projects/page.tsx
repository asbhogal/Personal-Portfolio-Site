import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Project } from '@/payload-types';
import { PaginatedDocs } from 'payload';

export default async function Page() {
  const payload = await getPayloadHMR({
    config,
  });

  const { docs }: PaginatedDocs<Project> = await payload.find({
    collection: 'projects',
  });

  // eslint-disable-next-line no-console
  console.log(docs);

  return <div />;
}
