import AboutSection from "@/components/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aman Singh Bhogal",
  description: "About Aman Singh Bhogal",
};

export default function Page() {
  return (
    <>
      <h1>About</h1>
      <AboutSection />
    </>
  );
}
