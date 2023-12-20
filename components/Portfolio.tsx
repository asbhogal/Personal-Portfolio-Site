"use client";

import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import FadeIn from "@/utils/animations";
import { ProjectType } from "@/utils/types";
import { unstable_getImgProps as getImgProps } from "next/image";

export default function Portfolio() {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) return <p>Failed to fetch data</p>;
  if (!data) return <p>Loading...</p>;

  console.log(data.projects);
  return (
    <FadeIn as="section" className="Projects">
      {data.projects.map((project: ProjectType) => {
        const common = {
          alt: project.portfolioImg.alt,
          width: 500,
          height: 900,
        };

        const {
          props: { srcSet: desktop },
        } = getImgProps({
          ...common,
          src: project.portfolioImg.desktop,
        });

        const {
          props: { src: mobile, ...rest },
        } = getImgProps({
          ...common,
          src: project.portfolioImg.mobile,
        });

        return (
          <FadeIn as="div" className="ProjectSectionBox" key={project.id}>
            <FadeIn
              as="a"
              className="ProjectSectionLink"
              href={`/${project.link}`}
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
                <FadeIn
                  as="a"
                  className="ProjectButton"
                  href={project.code}
                  aria-label={`Code for ${project.project} project`}
                >
                  Code
                </FadeIn>
                <FadeIn
                  as="a"
                  className="ProjectButton"
                  href={project.site}
                  aria-label={`Site for ${project.project} project`}
                >
                  Site
                </FadeIn>
                <FadeIn
                  as="a"
                  className="ProjectButton"
                  href={project.more}
                  aria-label={`View more about ${project.project} project`}
                >
                  View More
                </FadeIn>
              </FadeIn>
            </FadeIn>
          </FadeIn>
        );
      })}
    </FadeIn>
  );
}
