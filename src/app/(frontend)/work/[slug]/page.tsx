import { getPayload, PaginatedDocs } from 'payload';
import configPromise from '@payload-config';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import RichText from '@/src/components/typography/RichText';
import { ListBlock } from '@/src/components/blocks';
import styles from './styles.module.scss';

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props, _: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await params;

  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'projects',
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return {
    description: data.docs.find((doc) => doc.slug === slug)?.description?.toString() || '',
    title: `${data.docs.find((doc) => doc.slug === slug)?.title} | Aman Singh Bhogal`,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const payload = await getPayload({
    config: configPromise,
  });

  const data: PaginatedDocs = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={data.docs[0].heroImage.width as number}
          height={data.docs[0].heroImage.height as number}
          src={data.docs[0].heroImage.url as string}
          alt={data.docs[0].heroImage.altText as string}
          priority
        />
      </div>
      <h1 className={styles.title}>{data.docs[0].title}</h1>
      <ListBlock stacks={data.docs[0].stacks} />
      <RichText content={data.docs[0].description.Content} />
    </div>
  );
}
