import { getPayload, PaginatedDocs } from 'payload';
import configPromise from '@payload-config';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { ListBlock, ProjectShowcaseBlock, TypefaceBlock } from '@/src/components/blocks';
import { RichText } from '@/src/components/typography';
import { ArrowDown } from '@/src/components/graphics';
import { Suspense } from 'react';
import Loading from '@/src/components/globals/Loading';
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
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const project = data.docs[0];

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          width={project.heroImage.width as number}
          height={project.heroImage.height as number}
          src={`/images/media/${project.heroImage.filename}`}
          alt={project.heroImage.altText as string}
          priority
        />
      </div>
      <h1 className={styles.title}>{project.title}</h1>
      <ListBlock
        className={styles.stacksList}
        stacks={project.stacks}
      />
      <RichText content={project.description[0].Content} />
      <ArrowDown className={styles.arrowDown} />
      <TypefaceBlock typeface={project.typeface} />
      <ProjectShowcaseBlock images={project.showcase} />
    </Suspense>
  );
}
