import { ResourcesType } from "@/utils/types";
import { NextResponse } from "next/server";

export default function GET(request: Request) {
  const resources: ResourcesType[] = [
    {
      id: 1,
      resource: "Responsive Wireframes",
      description:
        "A set of responsive wireframes for a typical company home page to demonstrate Figma's auto layout capabilities across five common screen breakpoints (1440px+, 1440px, 1024px, 744px, 375px). Please note that these are for demonstrative purposes and user-centred research should always be carried out prior.",
      link: "https://www.figma.com/community/file/1189223658475172983/responsive-wireframes",
    },
    {
      id: 2,
      resource: "Brand Board Template",
      description:
        "A set of responsive wireframes for a typical company home page to demonstrate Figma's auto layout capabilities across five common screen breakpoints (1440px+, 1440px, 1024px, 744px, 375px). Please note that these are for demonstrative purposes and user-centred research should always be carried out prior.",
      link: "https://www.figma.com/community/file/1192459698727174432/brand-board-template",
    },
    {
      id: 3,
      resource: "Junior Developer Portfolio Template",
      description:
        "An unopinionated, responsive Junior Developer Portfolio Template, covering 1440px+, 1440px, 1024px, 744px and 375px breakpoints with UI Prototyping for mobile and tablet menu toggling, auto layout for responsive adapting to viewport width changes, components and prototyping to emulate typical user flow and interaction, accessible color palette examples (complying with WCAG 2.1 Level AA and AAA standards), typeface examples (Serif and Sans Serif Google Fonts) and tips, advice and resources.",
      link: "https://www.figma.com/community/file/1276573947309032643/junior-developer-portfolio-template",
    },
  ];
  return NextResponse.json({ resources }, { status: 200 });
}
