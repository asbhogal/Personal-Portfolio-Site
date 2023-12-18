import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const projects = [
    {
      id: 1,
      project: "brand",
      imageDesktop: "/home/Brand-HomePage-Desktop.jpg",
      imageMobile: "/home/Brand-HomePage-Mobile.jpg",
      summary:
        "A conceptualised page created from a series of responsive wireframes in Figma. Built using React, SASS and Webpack.",
      stacks: [
        ["Figma", "Wireframing", "UI Prototyping", "Auto Layout", "Components"],
        ["React", "Babel", "SASS", "PostCSS", "Webpack", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/React-Brand-Responsive-Web-Page",
      site: "https://brand-responsive-web-page.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/brand",
      details: {
        description:
          "Brand is a conceptualised company which offers minimalistic interior decorating options inspired by Milanese design. Logos and assets were provided and from these, five responsive templates (for 5 breakpoints) were created using Figma. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.",
        design:
          "The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.",
        typeface: {
          font: "Inter",
          type: "singular",
          weights: [
            "04 Regular",
            "05 Medium",
            "06 Semi Bold",
            "07 Bold",
            "09 Black",
          ],
        },

        branding: {
          images: "/images/BRAND/BrandImages.png",
          logos: [
            "/images/logos/brand-logo-black.svg",
            "/images/logos/brand-logo-white.svg",
          ],
          components: "/images/BRAND/BrandComponents.svg",
          palette: "/images/BRAND/BrandColorPalette.svg",
        },
        templates: "/images/BRAND/mockups/BrandMockups.png",
        mockups: [],
      },
    },
  ];
  return NextResponse.json({ projects }, { status: 200 });
}
