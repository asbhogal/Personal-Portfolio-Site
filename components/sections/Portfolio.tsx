"use client";

import FadeIn from "@/utils/animations";
import { ProjectType } from "@/utils/types";
import { getImageProps } from 'next/image'

export default function Portfolio({
  portfolioData,
}: {
  portfolioData: ProjectType[];
}) {
  return (
    <FadeIn as="section" className="Projects">
      {portfolioData.map((project: ProjectType) => {
        const common = {
          alt: project.portfolioImg.alt,
          width: 500,
          height: 900,
        };

        const {
          props: { srcSet: desktop },
        } = getImageProps({
          ...common,
          src: project.portfolioImg.desktop,
        });

        const {
          props: { src: mobile, ...rest },
        } = getImageProps({
          ...common,
          src: project.portfolioImg.mobile,
        });

        return (
          <FadeIn as="div" className="ProjectSectionBox" key={project.id}>
            <FadeIn
              as="a"
              className="ProjectSectionLink"
              href={`portfolio/${project.slug}`}
              aria-label={project.project}
            >
              <picture className="PictureContainer">
                <source media="(min-width: 600px)" srcSet={desktop} />
                <img src={mobile} alt={project.portfolioImg.alt} />
              </picture>
            </FadeIn>
            <FadeIn as="div" className="ProjectBoxContent">
              <FadeIn as="h2" className="ProjectBoxContentTitle">
                {project.project}
              </FadeIn>
              <FadeIn as="p" className="ProjectBoxContentText">
                {project.summary}
              </FadeIn>
              <FadeIn as="div" className="ProjectBoxContentListContainer">
                <FadeIn as="ul" className="ProjectBoxContentList">
                  {project.stacks[0].map((stack) => (
                    <FadeIn as="li" key={stack}>
                      {stack}
                    </FadeIn>
                  ))}
                </FadeIn>
                <FadeIn as="ul" className="ProjectBoxContentList">
                  {project.stacks[1].map((stack) => (
                    <FadeIn as="li" key={stack}>
                      {stack}
                    </FadeIn>
                  ))}
                </FadeIn>
              </FadeIn>
              <FadeIn as="div" className="ProjectBoxLinks">
                {Object.entries({
                  Code: project.code,
                  Site: project.site,
                  "View More": project.more,
                }).map(([key, value]) => (
                  <FadeIn
                    as="a"
                    className="ProjectButton"
                    href={value}
                    aria-label={`${key} for ${project.project} project`}
                    key={key}
                  >
                    {key}
                  </FadeIn>
                ))}
              </FadeIn>
            </FadeIn>
          </FadeIn>
        );
      })}
    </FadeIn>
  );
}
