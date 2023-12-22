"use client";

import { unstable_getImgProps as getImgProps } from "next/image";
import FadeIn from "@/utils/animations";
import { ResourcesType } from "@/utils/types";

export default function FreeResourcesSection({
  resourcesData,
}: {
  resourcesData: ResourcesType[];
}) {
  return (
    <FadeIn as="section" className="FreeResourcesSection">
      {resourcesData.map((resource) => {
        const common = {
          alt: resource.images.alt,
          width: 500,
          height: 900,
        };

        const {
          props: { srcSet: desktop },
        } = getImgProps({
          ...common,
          src: resource.images.desktop,
        });

        const {
          props: { src: mobile, ...rest },
        } = getImgProps({
          ...common,
          src: resource.images.mobile,
        });
        return (
          <FadeIn as="div" className="ResourcesCard" key={resource.id}>
            <picture className="ImageSnapshot">
              <source media="(min-width: 600px)" srcSet={desktop} />
              <img src={mobile} alt={resource.images.alt} />
            </picture>
            <FadeIn as="h2" className="ResourcesTitle">
              {resource.resource}
            </FadeIn>
            <FadeIn as="p">{resource.description}</FadeIn>
            <FadeIn as="div" className="ResourceLinks">
              <FadeIn
                as="a"
                className="ResourceDownload"
                target="_blank"
                rel="noreferrer noopener"
                href={resource.link}
              >
                Download
              </FadeIn>
            </FadeIn>
          </FadeIn>
        );
      })}
    </FadeIn>
  );
}
