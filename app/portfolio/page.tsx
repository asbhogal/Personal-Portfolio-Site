import Portfolio from "@/components/Portfolio";
import PortfolioTitle from "@/components/PortfolioTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Aman Singh Bhogal",
  description: "A list of portfolio projects created by Aman Singh Bhogal",
};

export default function Page() {
  return (
    <>
      <PortfolioTitle />
      <Portfolio />
    </>
  );
}
