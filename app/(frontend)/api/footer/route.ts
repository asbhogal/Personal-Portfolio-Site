import { FooterLinksType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET() {
  const footerLinks: FooterLinksType[] = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/amansinghbhogal",
      ariaLabel: "LinkedIn page",
      icon: "FaLinkedinIn",
    },
    {
      id: 2,
      href: "https://www.github.com/asbhogal",
      ariaLabel: "GitHub page",
      icon: "BsGithub",
    },
    {
      id: 3,
      href: "https://www.figma.com/@amansinghbhogal",
      ariaLabel: "Figma profile",
      icon: "FiFigma",
    },
  ];

  return NextResponse.json({ footerLinks }, { status: 200 });
}
