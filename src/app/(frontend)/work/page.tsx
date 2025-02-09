import type { JSX } from 'react';
import React, { Suspense } from 'react';
import config from '@payload-config';
import type { Project } from '@/payload-types';
import type { PaginatedDocs } from 'payload';
import { getPayload } from 'payload';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Logo } from '@/src/components/graphics';
import Image from 'next/image';
import Loading from '@/src/components/globals/Loading';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  description: 'A collection of projects',
  title: 'Work | Aman Singh Bhogal',
};

export default async function Page(): Promise<JSX.Element> {
  const payload = await getPayload({
    config,
  });

  const { docs }: PaginatedDocs = await payload.find({
    collection: 'projects',
  });

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h1 className={styles.title}>Projects</h1>
        <Logo
          className={styles.logo}
          width={500}
        />
        <ul className={styles.grid}>
          {docs.map((project: Project) => (
            <li
              key={project.id}
              className={styles.projectContainer}
            >
              <div className={styles.imageContainer}>
                {typeof project.heroImage === 'object' && (
                  <Image
                    width={project.heroImage.width ?? 500}
                    height={project.heroImage.height ?? 500}
                    className={styles.image}
                    src={`${project.heroImage.url}`}
                    alt={project.heroImage.altText}
                  />
                )}
              </div>
              <div className={styles.info}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <Link href={`/work/${project.slug}`}>
                  <ArrowRight />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
