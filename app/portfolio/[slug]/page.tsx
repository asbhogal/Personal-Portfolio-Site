"use client";

import { ProjectType } from "@/utils/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import FadeIn from "@/utils/animations";
import { unstable_getImgProps as getImgProps } from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) return <p>Error returning data</p>;
  if (!data) return <p>Data loading</p>;

  const projectData: ProjectType = data.projects.find(
    (project: ProjectType) => project.slug === params.slug
  );

  const common = {
    alt: projectData.details.hero.alt,
    height: 1440,
    width: 2560,
  };

  const {
    props: { srcSet: desktop },
  } = getImgProps({
    ...common,
    src: projectData.details.hero.desktop,
  });

  const {
    props: { src: mobile, ...rest },
  } = getImgProps({ ...common, src: projectData.details.hero.mobile });

  return (
    <div className="Project">
      <FadeIn as="section" className="ProjectHero">
        <picture className="PictureContainer">
          <source media="(min-width: 600px)" srcSet={desktop} />
          <img src={mobile} alt={projectData.details.hero.alt} />
        </picture>
      </FadeIn>

      <FadeIn as="section" className="ProjectLinks">
        {Object.entries(projectData.details.links).map(([key, value]) => (
          <FadeIn
            key={key}
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            className="ProjectButton"
            href={value}
          >
            {key}
          </FadeIn>
        ))}
      </FadeIn>

      <FadeIn as="section" className="ProjectAbout">
        <FadeIn as="h2">About</FadeIn>
        <FadeIn as="div" className="ProjectDateAndType">
          <FadeIn as="span">{projectData.details.type}</FadeIn>
          <FadeIn as="span">{projectData.details.date}</FadeIn>
        </FadeIn>
        <FadeIn as="div" className="ProjectLozenges">
          {projectData.details.discipline.map((disciplines) => (
            <FadeIn as="span" key={disciplines}>
              {disciplines}
            </FadeIn>
          ))}
        </FadeIn>
        <FadeIn as="div" className="ProjectStacksAndTools">
          {projectData.stacks.map((stackGroup, groupIndex) =>
            stackGroup.map((stack, stackIndex) => (
              <FadeIn
                as="span"
                className="StackToolLozenge"
                key={`${groupIndex}-${stackIndex}`}
              >
                {stack}
              </FadeIn>
            ))
          )}
        </FadeIn>
        <FadeIn as="p" className="ProjectAboutContent">
          {projectData.details.description}
          {projectData.details.list && (
            <FadeIn as="ul">
              {projectData.details.list.map((list) => (
                <FadeIn as="li" key={list}>
                  {list}
                </FadeIn>
              ))}
            </FadeIn>
          )}
        </FadeIn>
      </FadeIn>
    </div>
  );
}
