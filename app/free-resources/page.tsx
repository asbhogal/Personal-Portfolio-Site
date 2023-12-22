import { getResourcesData } from "@/utils/functions";
import FreeResourcesSection from "./FreeResourcesSection";
import FreeResourcesCover from "./FreeResourcesCover";

export default async function Page() {
  const { resources: resourcesData } = await getResourcesData();
  return (
    <>
      <FreeResourcesCover />
      <FreeResourcesSection resourcesData={resourcesData} />
    </>
  );
}
