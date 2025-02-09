import type { Metadata } from 'next';
import React from 'react';
import { Heading } from '@/src/components/globals';
import type { PaginatedDocs } from 'payload';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import Image from 'next/image';
import type { Page, Project } from '@/payload-types';
import { Subheading } from '@/src/components/typography';
import dayjs from 'dayjs';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import styles from './styles.module.scss';

export const metadata: Metadata = {
  description:
    'The portfolio site of Aman Singh Bhogal, Creative Front End Developer with over 4 and a half years of experience in designing and building accessible, responsive and attractive user interfaces',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/icons/favicon-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/icons/favicon-light.svg',
      },
    ],
  },
  title: 'Aman Singh Bhogal | Award Winning Creative Front End Developer',
};

export default async function Home(): Promise<React.ReactNode> {
  const payload = await getPayload({
    config: configPromise,
  });

  const { docs }: PaginatedDocs<Page> = await payload.find({
    collection: 'pages',
    where: {
      title: {
        equals: 'Home Page',
      },
    },
  });

  const { docs: projectDocs } = await payload.find({
    collection: 'projects',

  });

  return (
    <React.Fragment>
      <div className={styles.pageHeader}>
        <Heading
          title="Aman Singh Bhogal"
          headerImage={docs[0]?.headerImage}
        />
      </div>
      <Subheading subheading="Work" />
      <div className={styles.gridContainer}>
        <div className={styles.verticalDivider} />
        {projectDocs
          .sort((a: Project, b: Project) => (
            dayjs(b.date).unix() - dayjs(a.date).unix()
          ))
          .map((project: Project) => (
            <div
              key={project.id}
              className={styles.gridItem}
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
                <Link
                  className={styles.projectLink}
                  href={`/work/${project.slug}`}
                >
                  <p>Visit</p>
                  <MdArrowOutward />
                </Link>
              </div>
              <div className={styles.gridContent}>
                <h3>{project.title}</h3>
                <p>{dayjs(project.date).format('MMMM YYYY')}</p>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}
