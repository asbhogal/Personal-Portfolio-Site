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
            <Image className="ImageSnapshot" src={resource.img} alt="" />
          </FadeIn>
        </FadeIn>
      ))}
    </FadeIn>
  );
}
