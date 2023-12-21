"use client";

import { ProjectType } from "@/utils/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import FadeIn from "@/utils/animations";
import Image, { unstable_getImgProps as getImgProps } from "next/image";
import CTA from "@/components/CTA";

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
      <h1 className="sr-only">{projectData.project}</h1>
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

      {projectData.details.design && (
        <FadeIn as="section" className="DesignDecisions">
          <FadeIn as="h2">Design Decisions</FadeIn>
          <FadeIn as="p" className="ProjectAboutContent">
            {projectData.details.design}
          </FadeIn>
        </FadeIn>
      )}

      <FadeIn as="section" className="ProjectTypefaces">
        <FadeIn as="h2">Typeface</FadeIn>
        <FadeIn as="div" className="ProjectTypefaceInfo">
          <FadeIn as="span" id={projectData.details.typeface.id}>
            {projectData.details.typeface.font}
          </FadeIn>
          <FadeIn
            as="div"
            id={projectData.details.typeface.id}
            className="TypefaceWeights"
          >
            <FadeIn as="span">{projectData.details.typeface.type}</FadeIn>
            <FadeIn as="ul" className="TypefaceWeightsList">
              {projectData.details.typeface.weights.map((weight) => (
                <FadeIn as="li" key={weight}>
                  {weight}
                </FadeIn>
              ))}
            </FadeIn>
          </FadeIn>
        </FadeIn>
      </FadeIn>

      {projectData.details.branding && (
        <FadeIn as="section" className="ProjectAssetsAndBranding">
          <FadeIn as="h2">Branding & Assets</FadeIn>
          <FadeIn as="div" className="ProjectAssetsAndBrandingContainer">
            {projectData.details.branding &&
              (projectData.details.branding.images ||
                projectData.details.branding.logos) && (
                <FadeIn as="div" className="AssetsAndBranding">
                  {(projectData.details.branding.images || [])
                    .concat(projectData.details.branding.logos || [])
                    .map((image, index) => (
                      <Image
                        key={index}
                        src={image.img}
                        alt={image.alt}
                        width={500}
                        height={1000}
                      />
                    ))}
                </FadeIn>
              )}
            {projectData.details.branding.components &&
              projectData.details.branding.components.map((image, index) => (
                <FadeIn as="div" className="AssetsAndBranding" key={index}>
                  <Image
                    src={image.img}
                    alt={image.alt}
                    width={500}
                    height={1000}
                  />
                </FadeIn>
              ))}
            {projectData.details.branding.palette && (
              <FadeIn as="div" className="AssetsAndBranding">
                <Image
                  src={projectData.details.branding.palette.img}
                  alt={projectData.details.branding.palette.alt}
                  width={500}
                  height={1000}
                />
              </FadeIn>
            )}
          </FadeIn>
        </FadeIn>
      )}
      <CTA />
    </div>
  );
}
