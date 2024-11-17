'use client';

import { ProjectType } from '@/utils/types';
import FadeIn from '@/utils/animations';
import Image, { getImageProps } from 'next/image';

export const ProjectPage = ({
  projectData,
}: {
  projectData: ProjectType;
}) => (
  <div className="Project">
    <h1 className="sr-only">{projectData.project}</h1>
    <FadeIn
      as="section"
      className="ProjectHero"
    >
      <Image
        className="ProjectHeroDesktop"
        src={projectData.details.hero.desktop}
        alt={projectData.details.hero.alt}
        width={2560}
        height={1920}
        priority
      />
      <Image
        className="ProjectHeroMobile"
        src={projectData.details.hero.mobile}
        alt={projectData.details.hero.alt}
        width={900}
        height={675}
        priority
      />
    </FadeIn>

    <FadeIn
      as="section"
      className="ProjectLinks"
    >
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

    <FadeIn
      as="section"
      className="ProjectAbout"
    >
      <FadeIn as="h2">About</FadeIn>
      <FadeIn
        as="div"
        className="ProjectDateAndType"
      >
        <FadeIn as="span">{projectData.details.type}</FadeIn>
        <FadeIn as="span">{projectData.details.date}</FadeIn>
      </FadeIn>
      <FadeIn
        as="div"
        className="ProjectLozenges"
      >
        {projectData.details.discipline.map((disciplines) => (
          <FadeIn
            as="span"
            key={disciplines}
          >
            {disciplines}
          </FadeIn>
        ))}
      </FadeIn>
      <FadeIn
        as="div"
        className="ProjectStacksAndTools"
      >
        {projectData.stacks.map((stackGroup, groupIndex) => stackGroup.map((stack, stackIndex) => (
          <FadeIn
            as="span"
            className="StackToolLozenge"
            key={`${groupIndex}-${stackIndex}`}
          >
            {stack}
          </FadeIn>
        )))}
      </FadeIn>
      <FadeIn
        as="p"
        className="ProjectAboutContent"
      >
        {projectData.details.description}
      </FadeIn>
      {projectData.details.list && (
        <FadeIn
          as="ul"
          className="ProjectAboutContentList"
        >
          {projectData.details.list.map((list) => (
            <FadeIn
              as="li"
              key={list}
            >
              {list}
            </FadeIn>
          ))}
        </FadeIn>
      )}
    </FadeIn>

    {projectData.details.design && (
      <FadeIn
        as="section"
        className="DesignDecisions"
      >
        <FadeIn as="h2">Design Decisions</FadeIn>
        <FadeIn
          as="p"
          className="ProjectAboutContent"
        >
          {projectData.details.design}
        </FadeIn>
      </FadeIn>
    )}

    <FadeIn
      as="section"
      className="ProjectTypefaces"
    >
      <FadeIn as="h2">Typeface</FadeIn>
      <FadeIn
        as="div"
        className="ProjectTypefaceInfo"
      >
        <FadeIn
          as="span"
          id={projectData.details.typeface.id}
        >
          {projectData.details.typeface.font}
        </FadeIn>
        <FadeIn
          as="div"
          id={projectData.details.typeface.id}
          className="TypefaceWeights"
        >
          <FadeIn as="span">{projectData.details.typeface.type}</FadeIn>
          <FadeIn
            as="ul"
            className="TypefaceWeightsList"
          >
            {projectData.details.typeface.weights.map((weight, index) => (
              <FadeIn
                as="li"
                key={weight}
                id={`Weight-${projectData.details.typeface.fontWeights[index]}`}
              >
                {weight}
              </FadeIn>
            ))}
          </FadeIn>
        </FadeIn>
      </FadeIn>
    </FadeIn>

    {projectData.details.branding && (
      <FadeIn
        as="section"
        className="ProjectAssetsAndBranding"
      >
        <FadeIn as="h2">Branding & Assets</FadeIn>
        <FadeIn
          as="div"
          className="ProjectAssetsAndBrandingContainer"
          id={projectData.details.branding?.backgroundColor}
        >
          {projectData.details.branding
            && (projectData.details.branding.images
              || projectData.details.branding.logos) && (
              <FadeIn
                as="div"
                className="AssetsAndBranding"
              >
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
              // eslint-disable-next-line indent
            )}
          {projectData.details.branding.components
            && projectData.details.branding.components.map((image, index) => (
              <FadeIn
                as="div"
                className="AssetsAndBranding"
                key={index}
              >
                <Image
                  src={image.img}
                  alt={image.alt}
                  width={500}
                  height={1000}
                />
              </FadeIn>
            ))}
          {projectData.details.branding.palette && (
            <FadeIn
              as="div"
              className="AssetsAndBranding"
            >
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

    {projectData.details.templates && (
      <FadeIn
        as="section"
        className="ProjectMockups"
      >
        <FadeIn as="h2">Mockups</FadeIn>
        <FadeIn
          as="img"
          src={projectData.details.templates.img}
          alt={projectData.details.templates.alt}
        />
      </FadeIn>
    )}

    {projectData.details.prototypes && (
      <FadeIn
        as="section"
        className="ProjectPrototypes"
      >
        <FadeIn as="h2">Prototypes</FadeIn>
        <FadeIn
          as="img"
          src={projectData.details.prototypes.img}
          alt={projectData.details.prototypes.alt}
          className="Prototypes"
        />
      </FadeIn>
    )}

    <FadeIn
      as="section"
      className="ProjectScreens"
    >
      <FadeIn as="h2">Screens</FadeIn>
      {projectData.details.mockups.map((mockup, index) => {
        const common = {
          alt: mockup.alt,
          height: 1440,
          width: 2560,
        };

        const {
          props: { srcSet: desktop },
        } = getImageProps({
          ...common,
          src: mockup.desktop,
        });

        const {
          props: { src: mobile },
        } = getImageProps({ ...common, src: mockup.mobile });

        return (
          <FadeIn
            as="picture"
            key={index}
            className="PictureContainer"
          >
            <source
              media="(min-width: 600px)"
              srcSet={desktop}
            />
            <FadeIn
              as="img"
              src={mobile}
              alt={mockup.alt}
            />
          </FadeIn>
        );
      })}
    </FadeIn>
  </div>
);
