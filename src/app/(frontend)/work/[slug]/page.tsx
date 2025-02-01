import { getPayload, PaginatedDocs } from 'payload';
import configPromise from '@payload-config';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { ProjectShowcaseBlock, TypefaceBlock } from '@/src/components/blocks';
import { RichText } from '@/src/components/typography';
import { ArrowDown } from '@/src/components/graphics';
import { Suspense } from 'react';
import Loading from '@/src/components/globals/Loading';
import { FadeIn, Spacer } from '@/src/components/globals';
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
    description: data.docs.find((doc) => doc.slug === slug)?.SEO?.description || '',
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
      <FadeIn className={styles.pageHeader}>
        <h1>{project.title}</h1>
        <FadeIn>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              width={project.heroImage.width as number}
              height={project.heroImage.height as number}
              src={project.heroImage.url}
              alt={project.heroImage.altText as string}
              priority
            />
          </div>
        </FadeIn>
      </FadeIn>
      <FadeIn className={styles.descriptionContainer}>
        <h2>About</h2>
        <RichText content={project.description[0].Content} />
      </FadeIn>
      <Spacer height={30} />
      <FadeIn>
        <ArrowDown className={styles.arrowDown} />
      </FadeIn>
      <Spacer height={10} />
      <FadeIn>
        <TypefaceBlock typeface={project.typeface} />
      </FadeIn>
      {
        project.showcase && project.showcase.length > 0 && (
          <FadeIn>
            <ProjectShowcaseBlock images={project.showcase} />
          </FadeIn>
        )
      }
    </Suspense>
  );
}
