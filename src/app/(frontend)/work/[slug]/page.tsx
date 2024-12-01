import { getPayload, PaginatedDocs } from 'payload';
import configPromise from '@payload-config';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { ListBlock, ProjectShowcaseBlock, TypefaceBlock } from '@/src/components/blocks';
import { RichText } from '@/src/components/typography';
import { ArrowDown } from '@/src/components/graphics';
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

  const { docs } = data;

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={docs[0].heroImage.width as number}
          height={docs[0].heroImage.height as number}
          src={docs[0].heroImage.url as string}
          alt={docs[0].heroImage.altText as string}
          priority
        />
      </div>
      <h1 className={styles.title}>{docs[0].title}</h1>
      <ListBlock
        className={styles.stacksList}
        stacks={docs[0].stacks}
      />
      <RichText content={docs[0].description[0].Content} />
      <ArrowDown className={styles.arrowDown} />
      <TypefaceBlock typeface={docs[0].typeface} />
      <ProjectShowcaseBlock images={docs[0].showcase} />
    </div>
  );
}