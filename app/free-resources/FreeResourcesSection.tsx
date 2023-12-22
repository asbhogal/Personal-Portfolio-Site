"use client";

import FadeIn from "@/utils/animations";
import { ResourcesType } from "@/utils/types";
import Image from "next/image";

export default function FreeResourcesSection({
  resourcesData,
}: {
  resourcesData: ResourcesType[];
}) {
  return (
    <FadeIn as="section" className="FreeResourcesSection">
      {resourcesData.map((resource) => (
        <FadeIn as="div" className="ResourcesCard" key={resource.id}>
          <FadeIn as="div" className="ResourcesSnapshot">
            <Image
              className="ImageSnapshot"
              src={resource.img}
              alt={resource.imgAlt}
              width={1920}
              height={960}
            />
          </FadeIn>
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
      ))}
    </FadeIn>
  );
}
