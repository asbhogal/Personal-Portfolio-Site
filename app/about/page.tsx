import AboutSection from "@/components/AboutSection";
import { Metadata } from "next";
import AboutCover from "./AboutCover";

export const metadata: Metadata = {
  title: "About | Aman Singh Bhogal",
  description: "About Aman Singh Bhogal",
};

export default function Page() {
  return (
    <>
      <AboutCover />
      <AboutSection />
    </>
  );
}
