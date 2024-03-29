import { getServicesData } from "@/utils/functions";
import AdditionalServicesContent from "@/components/sections/AdditionalServicesContent";
import AdditionalServicesCover from "@/components/covers/AdditionalServicesCover";
import { Metadata } from "next";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Additional Services | Aman Singh Bhogal",
  description: "Additional services offered",
};

export default async function Page() {
  const { services: servicesData } = await getServicesData();
  return (
    <>
      <AdditionalServicesCover />
      <AdditionalServicesContent servicesData={servicesData} />
      <CTA />
    </>
  );
}
