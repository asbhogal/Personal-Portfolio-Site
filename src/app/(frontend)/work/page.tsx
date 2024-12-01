import config from '@payload-config';
import { Project } from '@/payload-types';
import { getPayload, PaginatedDocs } from 'payload';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from '@/src/components/graphics';
import { Suspense } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Loading from './loading';

export const metadata: Metadata = {
  description: 'A collection of projects',
  title: 'Work | Aman Singh Bhogal',
};

export default async function Page() {
  const payload = await getPayload({
    config,
  });

  const { docs }: PaginatedDocs = await payload.find({
    collection: 'projects',
  });

  return (
    <div>
      <h1 className={styles.title}>Projects</h1>
      <Suspense fallback={<Loading />}>
        <ul className={styles.grid}>
          {docs.map((project: Project) => (
            <li
              key={project.id}
              className={styles.projectContainer}
            >
              <div className={styles.imageContainer}>
                {typeof project.heroImage === 'object' && (
                  <Image
                    width={project.heroImage.width as number}
                    height={project.heroImage.height as number}
                    className={styles.image}
                    src={project.heroImage.url as string}
                    alt={project.heroImage.altText as string}
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
      </Suspense>
    </div>
  );
}
