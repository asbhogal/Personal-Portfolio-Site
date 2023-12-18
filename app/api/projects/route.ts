import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const projects = [
    {
      id: 1,
      project: "brand",
      link: "brand",
      imageDesktop: "/images/home/Brand-HomePage-Desktop.jpg",
      imageMobile: "/images/home/Brand-HomePage-Mobile.jpg",
      imgAlt:
        "An iPhone resting on a concrete surface at an angle, with a website on the screen",
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
        hero: {
          desktop: "/images/BRAND/mockups/Brand-Desktop-1.jpg",
          mobile: "/images/BRAND/mockups/Brand-Mobile-1.jpg",
          alt: "A series of iPhones face-down, with one in the middle faced-up, showing a website page",
        },
        links: {
          templates:
            "https://www.figma.com/community/file/1187868244670810561/",
          code: "https://github.com/asbhogal/React-Brand-Responsive-Web-Page",
          site: "https://brand-responsive-web-page.vercel.app/",
        },
        type: "personal",
        date: "Jan 2023 - Feb 2023",
        description:
          "Brand is a conceptualised company which offers minimalistic interior decorating options inspired by Milanese design. Logos and assets were provided and from these, five responsive templates (for 5 breakpoints) were created using Figma. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.",
        design: [
          "The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.",
        ],
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
          images: ["/images/BRAND/BrandImages.png"],
          logos: [
            "/images/logos/brand-logo-black.svg",
            "/images/logos/brand-logo-white.svg",
          ],
          components: "/images/BRAND/BrandComponents.svg",
          palette: "/images/BRAND/BrandColorPalette.svg",
        },
        templates: {
          img: "/images/BRAND/mockups/BrandMockups.png",
          alt: "5 templates of a website design",
        },
        mockups: [
          {
            desktop: "/images/BRAND/mockups/Brand-Desktop-3.jpg",
            mobile: "/images/BRAND/mockups/Brand-Mobile-3.jpg",
            alt: "A mockup of a website menu toggle on an iPhone",
          },
          {
            desktop: "/images/BRAND/mockups/Brand-Desktop-4.jpg",
            mobile: "/images/BRAND/mockups/Brand-Mobile-4.jpg",
            alt: "A mockup of a website on an iMac",
          },
          {
            desktop: "/images/BRAND/mockups/Brand-Desktop-5.jpg",
            mobile: "/images/BRAND/mockups/Brand-Mobile-5.jpg",
            alt: "A mockup of a website on a Macbook",
          },
          {
            desktop: "/images/BRAND/mockups/Brand-Desktop-7.jpg",
            mobile: "/images/BRAND/mockups/Brand-Mobile-7.jpg",
            alt: "A mockup of a website on an iPad",
          },
          {
            desktop: "/images/BRAND/mockups/Brand-Desktop-8.jpg",
            mobile: "/images/BRAND/mockups/Brand-Mobile-8.jpg",
            alt: "A mockup of a website on an iPad",
          },
        ],
      },
    },
    {
      id: 2,
      project: "lite life",
      link: "litelife",
      imageDesktop: "/images/home/LiteLife-HomePage-Desktop.jpg",
      imageMobile: "/images/home/LiteLife-HomePage-Mobile.jpg",
      imgAlt:
        "A close up of an iPhone and Airpods with a website open on the screen",
      summary:
        "A fully-functioning, Single Page e-commerce application which sells a range of minimalist, high-end products. Built using React with Stripe, Material UI for styling and Webpack.",
      stacks: [
        [
          "React",
          "React Hook Form",
          "React Router",
          "DOMPurify",
          "Commerce.js (Headless CMS)",
        ],
        ["SPA", "Stripe", "Material UI", "Webpack", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/React-Tech-Commerce.Js-Site",
      site: "https://litelife.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/litelife",
      details: {
        hero: {
          desktop: "/images/LiteLife/mockups/LiteLife-Desktop-1.jpg",
          mobile: "/images/LiteLife/mockups/LiteLife-Mobile-1.jpg",
          alt: "A top-down view of portrait and landscape oriented iPads with an ecommerce site on them",
        },
        links: {
          code: "https://github.com/asbhogal/React-Tech-Commerce.Js-Site",
          site: "https://litelife.vercel.app/",
        },
        type: "personal",
        date: "Jan 2023 - Feb 2023",
        description:
          "Lite Life is a conceptualised e-commerce company which specialises in selling high quality, simplistic technological products for minimalistic working environments. Design for this project was handled by Material UI. The project is a Single Page Application built using React and React Router with Commerce.js (a headless CMS) and React Hook Form to handle the project catalogue, cart system, ordering and customer data. Stripe payment gateway was also configured to handle the checkout process and order confirmation. This project was compiled using Webpack then deployed for production via Vercel.",
        design: [
          [
            "Lite Life incorporates the simplistic tones of black, grey and white alongside the stark constrasts of red and violet-blue to consider both user immersion and ease-of-navigation during the checkout process (during the latter, distraction-free UX is incorporated to keep the customer on the pages until the transaction is complete.) The logo can be considered widely known and recognizable in this modern age. The stripped back, simple style reflects the design of the site, and the long branches complement the horizontal and vertical lines used in the UI.",
          ],
          [
            "Roboto, by name, is synonymous with clean, modern technology, and this is in turn reflected through its short descenders and wide bowls, where the former aligns close to the baseline and keeps the space efficient and egonomic, akin to the technology Lite Life sells. The use of only one weight also reinforces consistency within simplicity. On the broader scale, this conveys two things: simple things can still be quality. And quality things can still be simple.",
          ],
        ],
        typeface: {
          font: "Roboto",
          type: "singular",
          weights: ["04 Regular"],
        },
        branding: {
          images: [
            "/images/LiteLife/assets/Yamaha.jpg",
            "/images/LiteLife/assets/Screwdriver.jpg",
            "/images/LiteLife/assets/Cord.jpg",
            "/images/LiteLife/assets/DeskLamp.jpg",
            "/images/LiteLife/assets/ChargingBank.jpg",
            "/images/LiteLife/assets/iMacWhite.jpg",
            "/images/LiteLife/assets/BlackMacbook.jpg",
            "/images/LiteLife/assets/Earphones.jpg",
          ],
          palette: "/images/LiteLife/assets/LiteLifePalette.svg",
        },
        mockups: [
          {
            desktop: "/images/LiteLife/mockups/LiteLife-Desktop-2.jpg",
            mobile: "/images/LiteLife/mockups/LiteLife-Mobile-2.jpg",
            alt: "A white iMac with an ecommerce site open on the screen, on an office desk with a phone, coffee mug, plant and mouse",
          },
          {
            desktop: "/images/LiteLife/mockups/LiteLife-Desktop-3.jpg",
            mobile: "/images/LiteLife/mockups/LiteLife-Mobile-3.jpg",
            alt: "A Galaxy smartphone with an ecommerce site open on the screen",
          },
          {
            desktop: "/images/LiteLife/mockups/LiteLife-Desktop-4.jpg",
            mobile: "/images/LiteLife/mockups/LiteLife-Mobile-4.jpg",
            alt: "A side view of a Macbook and iPhone with an ecommerce site open on the screens",
          },
          {
            desktop: "/images/LiteLife/mockups/LiteLife-Desktop-5.jpg",
            mobile: "/images/LiteLife/mockups/LiteLife-Mobile-5.jpg",
            alt: "An iPad resting on a cushion with an ecommerce site open on the screen and a stylus pen next to it",
          },
          {
            desktop: "/images/LiteLife/mockups/LiteLife-Desktop-6.jpg",
            mobile: "/images/LiteLife/mockups/LiteLife-Mobile-6.jpg",
            alt: "A close up of an iPhone and Airpods with a website open on the screen",
          },
        ],
      },
    },
  ];
  return NextResponse.json({ projects }, { status: 200 });
}
