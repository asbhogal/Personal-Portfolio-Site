import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const menu = [
    {
      id: 1,
      name: "home",
      href: "/",
    },
    {
      id: 2,
      name: "about",
      href: "/about",
    },
    {
      id: 3,
      name: "portfolio",
      href: "/portfolio",
    },
    {
      id: 4,
      name: "brand manifesto",
      href: "/AmanSinghBhogal-Brand-Manifesto.pdf",
    },
    {
      id: 5,
      name: "testimonials",
      href: "/testimonials",
    },
    {
      id: 6,
      name: "additional services",
      href: "/additionalservices",
    },
    {
      id: 7,
      name: "free resources",
      href: "/freeresources",
    },
  ];

  return NextResponse.json({ data: menu }, { status: 200 });
}
