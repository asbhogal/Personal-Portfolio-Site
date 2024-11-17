'use client';

import { getImageProps } from 'next/image';
import FadeIn from '@/utils/animations';
import Link from 'next/link';
import { ProjectType } from '@/utils/types';
import { SkillLozenge } from '../../features';

export const Projects = ({
  projectData,
}: {
  projectData: ProjectType[];
}) => (
  <FadeIn
    as="section"
    className="ProjectScreens"
  >
    <FadeIn
      as="div"
      className="HomePageSectionBar"
    >
      <FadeIn as="h2">Selected Work</FadeIn>
      <Link
        href="/portfolio"
        className="AllProjectsLink"
        aria-label="Portfolio"
      />
    </FadeIn>
    <FadeIn
      as="div"
      className="ProjectsContainer"
    >
      {projectData.map((project: ProjectType) => {
        const common = {
          alt: project.imgAlt,
          height: 900,
          width: 500,
        };

        const {
          props: { srcSet: desktop },
        } = getImageProps({
          ...common,
          src: project.imageDesktop,
        });

        const {
          props: { src: mobile },
        } = getImageProps({
          ...common,
          src: project.imageMobile,
        });

        return (
          <FadeIn
            as="div"
            className="ProjectBox"
            key={project.id}
          >
            <Link
              href={`/portfolio/${project.slug}`}
              className="ProjectLink"
              aria-label={project.project}
            >
              <SkillLozenge skills={project.skills} />
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet={desktop}
                />
                <img
                  src={mobile}
                  alt={project.imgAlt}
                />
              </picture>
            </Link>

            <FadeIn
              as="div"
              className="ProjectTitle HomePageProjectTitle"
            >
              <FadeIn as="h3">{project.project}</FadeIn>
              <Link
                href={`/portfolio/${project.slug}`}
                className="HomePageProjectLinks"
                aria-label={project.project}
              >
                <span className="sr-only">{project.project}</span>
              </Link>
            </FadeIn>
          </FadeIn>
        );
      })}
    </FadeIn>
  </FadeIn>
);
