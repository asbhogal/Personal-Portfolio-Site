import { ResourcesType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const resources: ResourcesType[] = [
    {
      id: 1,
      resource: "Responsive Wireframes",
      description:
        "A set of responsive wireframes for a typical company home page to demonstrate Figma's auto layout capabilities across five common screen breakpoints (1440px+, 1440px, 1024px, 744px, 375px). Please note that these are for demonstrative purposes and user-centred research should always be carried out prior.",
      images: {
        desktop: "/images/resources/ResponsiveWireframes-Desktop.jpg",
        mobile: "/images/resources/ResponsiveWireframes-Mobile.jpg",
        alt: "A close up screenshot of some responsive website wireframe templates at an angle",
      },
      link: "https://www.figma.com/community/file/1189223658475172983/responsive-wireframes",
    },
    {
      id: 2,
      resource: "Brand Board Template",
      description:
        "A set of responsive wireframes for a typical company home page to demonstrate Figma's auto layout capabilities across five common screen breakpoints (1440px+, 1440px, 1024px, 744px, 375px). Please note that these are for demonstrative purposes and user-centred research should always be carried out prior.",
      images: {
        desktop: "/images/resources/BrandBoardTemplate-Desktop.jpg",
        mobile: "/images/resources/BrandBoardTemplate-Mobile.jpg",
        alt: "A close up of a brand board template in two parts, layered over one another, with information on the left of it",
      },
      link: "https://www.figma.com/community/file/1192459698727174432/brand-board-template",
    },
    {
      id: 3,
      resource: "Junior Developer Portfolio Template",
      description:
        "An unopinionated, responsive Junior Developer Portfolio Template, covering 1440px+, 1440px, 1024px, 744px and 375px breakpoints with UI Prototyping for mobile and tablet menu toggling, auto layout for responsive adapting to viewport width changes, components and prototyping to emulate typical user flow and interaction, accessible color palette examples (complying with WCAG 2.1 Level AA and AAA standards), typeface examples (Serif and Sans Serif Google Fonts) and tips, advice and resources.",
      images: {
        desktop: "/images/resources/JuniorDeveloperTemplate-Desktop.jpg",
        mobile: "/images/resources/JuniorDeveloperTemplate-Mobile.jpg",
        alt: "A close up screenshot of a junior developer portfolio template at an angle, with information on the left of it",
      },
      link: "https://www.figma.com/community/file/1276573947309032643/junior-developer-portfolio-template",
    },
  ];
  return NextResponse.json({ resources }, { status: 200 });
}
