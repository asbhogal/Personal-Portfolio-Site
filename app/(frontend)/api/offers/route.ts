import { ServicesType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const offers: ServicesType[] = [
    {
      id: 1,
      skill: "Logos & Branding",
      description:
        "Developing strong, consistent and recognisable branding which evokes emotions through visualisations and mood boards.",
      icon: "PaintIcon",
    },
    {
      id: 2,
      skill: "Web Design",
      description:
        "Designing high fidelity, responsive and interactive mockups from sketches/wireframes and existing branding using Figma and Adobe CC",
      icon: "RulerIcon",
    },
    {
      id: 3,
      skill: "Web Development",
      description:
        "Developing modern, front-end applications and websites from scratch or existing mockups using React, Next.js & TypeScript.",
      icon: "CodeIcon",
    },
    {
      id: 4,
      skill: "Site Optimisation",
      description:
        "Optimising React and WordPress website builds across performance, accessibility, SEO and stability.",
      icon: "SpeedIcon",
    },
  ];
  return NextResponse.json({ offers }, { status: 200 });
}
