import CTA from "@/components/sections/CTA";
import Heading from "@/components/covers/Heading";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { getOffersData, getProjectData } from "@/utils/functions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aman Singh Bhogal | Award Winning Creative Front End Developer",
  description:
    "The portfolio site of Aman Singh Bhogal, Creative Front End Developer with over three and a half years of experience in designing and building user interfaces",
};

export default async function Page() {
  const { projects: projectData } = await getProjectData();
  const { offers: offersData } = await getOffersData();
  return (
    <>
      <Heading />
      <Skills offersData={offersData} />
      <Projects projectData={projectData} />
      <CTA />
    </>
  );
}
