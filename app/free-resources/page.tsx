import { getResourcesData } from "@/utils/functions";
import FreeResourcesSection from "@/components/sections/FreeResourcesSection";
import FreeResourcesCover from "@/components/covers/FreeResourcesCover";
import { Metadata } from "next";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Free Resources | Aman Singh Bhogal",
  description: "Free resources, including brand templates and wireframes",
};

export default async function Page() {
  const { resources: resourcesData } = await getResourcesData();
  return (
    <>
      <FreeResourcesCover />
      <FreeResourcesSection resourcesData={resourcesData} />
      <CTA />
    </>
  );
}
