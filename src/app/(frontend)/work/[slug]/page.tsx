import React, { Suspense } from 'react';
import type { PaginatedDocs } from 'payload';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { ProjectShowcaseBlock, TypefaceBlock } from '@/src/components/blocks';
import { RichText, VisuallyHidden } from '@/src/components/typography';
import { ArrowDown } from '@/src/components/graphics';
import type { JSX } from 'react';
import Loading from '@/src/components/globals/Loading';
import { FadeIn, Spacer } from '@/src/components/globals';
import type { Project } from '@/payload-types';
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
    description: data.docs.find((doc) => doc.slug === slug)?.SEO?.description ?? '',
    title: `${data.docs.find((doc) => doc.slug === slug)?.title} | Aman Singh Bhogal`,
  };
}

export default async function Page({ params }: Props): Promise<JSX.Element> {
  const { slug } = await params;

  const payload = await getPayload({
    config: configPromise,
  });

  const data: PaginatedDocs<Project> = await payload.find({
    collection: 'projects',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const [project] = data.docs;

  return (
    <Suspense fallback={<Loading />}>
      <FadeIn className={styles.pageHeader}>
        <FadeIn className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            {typeof project.heroImage !== 'string' && (
              <Image
                className={styles.image}
                width={project.heroImage.width ?? 500}
                height={project.heroImage.height ?? 500}
                src={project.heroImage.url ?? ''}
                alt={project.heroImage.altText}
                priority
              />
            )}
          </div>
        </FadeIn>
        <h1>{project.title}</h1>
      </FadeIn>
      <FadeIn className={styles.descriptionContainer}>
        <VisuallyHidden>
          <h2>About</h2>
        </VisuallyHidden>
        <RichText content={project.description[0].Content} />
      </FadeIn>
      <Spacer height={30} />
      {
        project.typeface && project.typeface.length > 0 && (
          <React.Fragment>
            <FadeIn>
              <ArrowDown className={styles.arrowDown} />
            </FadeIn>
            <Spacer height={10} />
            <FadeIn>
              <TypefaceBlock typeface={project.typeface} />
            </FadeIn>
          </React.Fragment>
        )
      }
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
