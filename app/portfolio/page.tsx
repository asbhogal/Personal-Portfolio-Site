import Portfolio from "@/components/sections/Portfolio";
import PortfolioTitle from "@/components/covers/PortfolioTitle";
import { getProjectData } from "@/utils/functions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Aman Singh Bhogal",
  description: "A list of portfolio projects created by Aman Singh Bhogal",
};

export default async function Page() {
  const { projects: portfolioData } = await getProjectData();

  return (
    <>
      <PortfolioTitle />
      {/* <Portfolio portfolioData={portfolioData} /> */}
    </>
  );
}
