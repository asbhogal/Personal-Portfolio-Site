import { getResourcesData } from "@/utils/functions";
import FreeResourcesSection from "./FreeResourcesSection";
import FreeResourcesCover from "./FreeResourcesCover";
import { Metadata } from "next";

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
    </>
  );
}
