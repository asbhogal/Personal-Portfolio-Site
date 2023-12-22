import CTA from "@/components/CTA";
import Heading from "@/components/Heading";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { getProjectData } from "@/utils/functions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aman Singh Bhogal | Award Winning Creative Front End Developer",
  description:
    "The portfolio site of Aman Singh Bhogal, Creative Front End Developer with over three and a half years of experience in designing and building user interfaces",
};

export default async function Page() {
  const { projects: projectData } = await getProjectData();

  return (
    <>
      <Heading />
      <Skills />
      <Projects projectData={projectData} />
      <CTA />
    </>
  );
}
