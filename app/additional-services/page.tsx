import { getServicesData } from "@/utils/functions";
import AdditionalServicesContent from "./AdditionalServicesContent";
import AdditionalServicesCover from "./AdditionalServicesCover";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Additional Services | Aman Singh Bhogal",
  description: "Additional services offered",
};

export default async function Page() {
  const servicesData = await getServicesData();
  return (
    <>
      <AdditionalServicesCover />
      <AdditionalServicesContent servicesData={servicesData} />
    </>
  );
}
