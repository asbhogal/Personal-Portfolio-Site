import AboutSection from "@/components/AboutSection";
import { Metadata } from "next";
import AboutCover from "./AboutCover";
import { getAboutData } from "@/utils/functions";

export const metadata: Metadata = {
  title: "About | Aman Singh Bhogal",
  description: "About Aman Singh Bhogal",
};

export default async function Page() {
  const { about: aboutData } = await getAboutData();
  return (
    <>
      <AboutCover />
      <AboutSection aboutData={aboutData} />
    </>
  );
}
