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
        discipline: ["design", "development"],
        description:
          "Brand is a conceptualised company which offers minimalistic interior decorating options inspired by Milanese design. Logos and assets were provided and from these, five responsive templates (for 5 breakpoints) were created using Figma. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.",
        design: [
          "The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.",
        ],
        typeface: {
          id: "BrandTypeface",
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
          images: [
            {
              img1: "/images/BRAND/BrandImages.png",
              alt: "Images of Milanese-designed furniture",
            },
          ],
          logos: [
            {
              img1: "/images/logos/brand-logo-black.svg",
              alt: "The word BRAND in bold, black lettering",
            },
            {
              img2: "/images/logos/brand-logo-white.svg",
              alt: "The word BRAND in bold, white lettering",
            },
          ],
          components: {
            img: "/images/BRAND/BrandComponents.svg",
            alt: "Various page components, including a testimonial card and buttons",
          },
          palette: {
            img: "/images/BRAND/BrandColorPalette.svg",
            alt: "A color palette",
          },
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
        discipline: ["design", "development"],
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
          id: "LiteLifeTypeface",
          font: "Roboto",
          type: "singular",
          weights: ["04 Regular"],
        },
        branding: {
          images: [
            { img: "/images/LiteLife/assets/Yamaha.jpg" },
            { img: "/images/LiteLife/assets/Screwdriver.jpg" },
            { img: "/images/LiteLife/assets/Cord.jpg" },
            { img: "/images/LiteLife/assets/DeskLamp.jpg" },
            { img: "/images/LiteLife/assets/ChargingBank.jpg" },
            { img: "/images/LiteLife/assets/iMacWhite.jpg" },
            { img: "/images/LiteLife/assets/BlackMacbook.jpg" },
            { img: "/images/LiteLife/assets/Earphones.jpg" },
          ],
          palette: {
            img: "/images/LiteLife/assets/LiteLifePalette.svg",
            alt: "A color palette",
          },
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
    {
      id: 3,
      project: "oceanica",
      link: "oceanica",
      imageDesktop: "/images/Home/Oceanica-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/Oceanica-HomePage-Mobile.jpg",
      imgAlt:
        "A Macbook with a website open on the screen, resting on a concrete surface next to a pool",
      summary:
        "A conceptualised page created from a series of responsive wireframes in Figma. Built using React, SASS and Webpack.",
      stacks: [
        [
          "Figma",
          "Logo Creation",
          "Masking",
          "Wireframing",
          "UI Prototyping",
          "Auto Layouts",
          "Components",
        ],
        ["React", "Babel", "SASS", "PostCSS", "Webpack", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/React-Oceanica-Responsive-Web-Page",
      site: "https://oceanica.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/oceanica",
      details: {
        hero: {
          desktop: "/images/Oceanica/mockups/Oceanica-Desktop-1.jpg",
          mobile: "/images/Oceanica/mockups/Oceanica-Mobile-1.jpg",
          alt: "An iPhone resting on a green platform in front of an archway with tall palm leaves in the backdrop",
        },
        links: {
          templates:
            "https://www.figma.com/community/file/1190467806509137896/",
          code: "https://github.com/asbhogal/React-Oceanica-Responsive-Web-Page",
          site: "https://oceanica.vercel.app/",
        },
        type: "personal",
        date: "Dec 2022 - Feb 2023",
        discipline: ["design", "development"],
        description:
          "Oceanica is a conceptualised company which offers luxury travel resorts and activities around the world. Logos, assets and responsive templates (for 5 breakpoints) were created using Figma, including prototypes to simulate a booking screen. A responsive Web page from these was then built using React with SCSS, Babel and JS, compiled as a production build using Webpack and then shipped using Vercel.",
        design: [
          [
            "Luxury and allure were key factors behind the message of this brand. The font used symbolises the nature of the sea and open waters; vast and spacious yet defined and affirmed, further reinforced by the semi bold and bold weightings, broad shoulders and wide leading. The logo of a wave is simplistic and therefore easily memorable; it's character parallels that of the typography leveraged and against the rich black backdrop rings true the message of style and class, with its elliptical nature replicating that of the shape of the Earth and the wave line flowing into the brand name. The background calligraphic words carry this theme throughout the page with its swashes leaning on an axis akin to the Earth's own orbit, as the user is enveloped in this magnetism during their journey.",
          ],
        ],
        typeface: {
          id: "OceanicaTypeface",
          font: "manrope",
          type: "singular",
          weights: ["04 Regular", "05 Medium", "06 Semi Bold", "07 Bold"],
        },
        branding: {
          images: [
            {
              img1: "/images/Oceanica/assets/TestimonialCard.svg",
              alt: "A testimonial card, with an image, placeholder text and name underneath",
            },
            {
              img2: "/images/Oceanica/assets/PackagesCard.svg",
              alt: "A snapshot of a package offer, with an image, title, placeholder text and price",
            },
          ],
          logos: {
            img: "/images/Oceanica/assets/Logo.svg",
            alt: "The words 'Oceanica' with a wave-shaped half circle to the left of it",
          },
          palette: {
            img: "/images/Oceanica/assets/oceanicaColorPalette.svg",
            alt: "A color palette",
          },
        },
        templates: {
          img: "/images/Oceanica/mockups/OceanicaTemplates.png",
          alt: "5 templates of a website design",
        },
        prototypes: {
          img: "/images/Oceanica/OceanicaPrototypes.png",
          alt: "6 screens showing prototype interaction",
        },
        mockups: [
          {
            desktop: "/images/Oceanica/mockups/Oceanica-Desktop-2.jpg",
            mobile: "/images/Oceanica/mockups/Oceanica-Mobile-2.jpg",
            alt: "A mockup of a website on a Macbook",
          },
          {
            desktop: "/images/Oceanica/mockups/Oceanica-Desktop-3.jpg",
            mobile: "/images/Oceanica/mockups/Oceanica-Mobile-3.jpg",
            alt: "A mockup of a website on an iPad",
          },
          {
            desktop: "/images/Oceanica/mockups/Oceanica-Desktop-4.jpg",
            mobile: "/images/Oceanica/mockups/Oceanica-Mobile-4.jpg",
            alt: "A mockup of a website on an iPhone",
          },
          {
            desktop: "/images/Oceanica/mockups/Oceanica-Desktop-6.jpg",
            mobile: "/images/Oceanica/mockups/Oceanica-Mobile-6.jpg",
            alt: "Different sections of a web page on four iPhone screens, laid side by side",
          },
        ],
      },
    },
    {
      id: 4,
      project: "cryptoverse",
      link: "cryptoverse",
      imageDesktop: "/images/Home/Cryptoverse-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/Cryptoverse-HomePage-Mobile.jpg",
      imgAlt:
        "An iMac with a Crypo-related application on the screen, against a black backdrop",
      summary:
        "A single page application which returns a range of crypto-related data, including currently top-trending currencies, market value, exchange rates and news. Built using Next.js with Redux RTK Query to handle multiple API calls.",
      stacks: [
        ["Next.js", "React", "Redux", "RTK Query", "RESTful APIs", "Axios"],
        ["SPA", "SASS", "PostCSS", "Webpack", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/Next.js-Cryptocurrency-App",
      site: "https://next-js-cryptocurrency-app.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/cryptoverse",
      details: {
        hero: {
          desktop: "/images/Cryptoverse/mockups/Cryptoverse-Desktop-Alt.jpg",
          mobile: "/images/Cryptoverse/mockups/Cryptoverse-Mobile-Alt.jpg",
          alt: "A close up of a Macbook with an application interface on the screen resting on its corner",
        },
        links: {
          code: "https://github.com/asbhogal/Next.js-Cryptocurrency-App",
          site: "https://next-js-cryptocurrency-app.vercel.app/",
        },
        type: "personal",
        date: "March 2023 - April 2023",
        discipline: ["design", "development"],
        description:
          "A single page application which returns a range of crypto-related data, including currently top-trending currencies, market value, exchange rates and news. Built using Next.js with Redux RTK Query to handle multiple API calls",
        design: [
          [
            "Cryptoverse is a conceptualised company which offers data on different cryptocurrencies, including market capitalisation, exchanges and current news. The application also allows users to look up the current stats of a cryptocurrency, including its ranking, price and market cap. The application was built using Next.js and leveraged Redux RTK Query to manage API calls from Coinranking, Coin Gecko and Bing News Search. The app was also styled using SCSS, compiled as a production build using Webpack and shipped via Vercel.",
          ],
        ],
        typeface: {
          id: "CryptoverseTypeface",
          font: "Noto Sans",
          type: "singular",
          weights: ["02 Extra Light", "03 Light", "04 Regular"],
        },
        mockups: [
          {
            desktop: "/images/Cryptoverse/mockups/Cryptoverse-Desktop-1.jpg",
            mobile: "/images/Cryptoverse/mockups/Cryptoverse-Mobile-1.jpg",
            alt: "A mockup of a crypto application on an iMac",
          },
          {
            desktop: "/images/Cryptoverse/mockups/Cryptoverse-Desktop-3.jpg",
            mobile: "/images/Cryptoverse/mockups/Cryptoverse-Mobile-3.jpg",
            alt: "A mockup of a crypto application on an iMac",
          },
          {
            desktop: "/images/Cryptoverse/mockups/Cryptoverse-Desktop-2.jpg",
            mobile: "/images/Cryptoverse/mockups/Cryptoverse-Mobile-2.jpg",
            alt: "A mockup of a crypto application on two iPads, one in landscape and the other in portrait orientation",
          },
          {
            desktop: "/images/Cryptoverse/mockups/Cryptoverse-Desktop-4.jpg",
            mobile: "/images/Cryptoverse/mockups/Cryptoverse-Mobile-4.jpg",
            alt: "A mockup of a crypto application on an iPhone resting at an angle next to a laptop keyboard",
          },
          {
            desktop: "/images/Cryptoverse/mockups/Cryptoverse-Desktop-5.jpg",
            mobile: "/images/Cryptoverse/mockups/Cryptoverse-Mobile-5.jpg",
            alt: "A mockup of a crypto application on an HP laptop",
          },
        ],
      },
    },
    {
      id: 5,
      project: "calculator",
      link: "calculator",
      imageDesktop: "/images/Home/Calculator-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/Calculator-HomePage-Mobile.jpg",
      imgAlt:
        "Two iPhones standing upright on a stair-like surface, showing two different themes of a calculator app",
      summary:
        "A completely redesigned Calculator app from an initial Frontend Mentor brief, including three modern themes and the ability to view the previous operands.",
      stacks: [
        ["React", "useReducer", "Custom Hooks", "Chakra UI", "Unit Testing"],
        ["React Testing Library", "Jest", "Vite", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/React-Calculator",
      site: "https://react-calculator-asbhogal.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/calculator",
      details: {
        hero: {
          desktop: "/images/Calculator/Calculator-Desktop-1.jpg",
          mobile: "/images/Calculator/Calculator-Mobile-1.jpg",
          alt: "A series of iPhone screens with a calculator in three different themes",
        },
        links: {
          code: "https://github.com/asbhogal/Next.js-Cryptocurrency-App",
          challenge:
            "https://www.frontendmentor.io/solutions/react-calculator-usereducer-chakra-ui-tdd-LKGyEpFp7Y",
          site: "https://react-calculator-asbhogal.vercel.app/",
        },
        type: "personal",
        date: "July 2023 - July 2023",
        discipline: ["design", "development"],
        description:
          "This project was a Frontend Mentor challenge which required creating a fully functional Calculator app with three themes and the ability to toggle between them from a brief and style guide. The following changes were subsequently made to improve the aesthetics, accessibility and UX of the app:",
        list: [
          "A redesigned UI complete with a light, dark and blue monochromatic theme and modern typeface",
          "ChakraUI to handle the accessibility and styling of components (Chakra UI has been used to style the components, with custom component variants used to couple the styling with the JSX markup and theme extensions)",
          "The ability to see the previous operands, as well as the current",
        ],
        design: [
          [
            "The decision was made to change the original design brief to reflect something more contemporary. The Inter typeface was chosen (weights 400, 500, 700) for a clear, clean, modern and affirmed typography with accentuated x-heights for improved readability with mixed-case and lower-case text. The three themes therefore chosen instead also aligned with modern-day styling: a conventional light (white) version, dark (black) version and blue version, each following a monochromatic-set of shades for visual consistency. Blue was chosen as the third and final theme for its medium between the two, harmonious and muted.",
          ],
        ],
        typeface: {
          id: "CalculatorTypeface",
          font: "Inter",
          type: "singular",
          weights: ["04 Regular", "05 Medium", "07 Bold"],
        },
        mockups: [
          {
            desktop: "/images/Calculator/Calculator-Desktop-2.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-2.jpg",
            alt: "A white-themed calculator application on an iPhone screen, resting next to a laptop",
          },
          {
            desktop: "/images/Calculator/Calculator-Desktop-3.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-3.jpg",
            alt: "A blue-themed calculator application on a tablet screen, with a white stylus pen and keyboard, resting on a small coffee table with a black coffee cup on the right",
          },
          {
            desktop: "/images/Calculator/Calculator-Desktop-4.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-4.jpg",
            alt: "A dark-themed calculator application on an iMac screen",
          },
          {
            desktop: "/images/Calculator/Calculator-Desktop-5.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-5.jpg",
            alt: "A dark-themed calculator application on a tablet screen, with a keyboard attached against a deep grey background",
          },
          {
            desktop: "/images/Calculator/Calculator-Desktop-6.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-6.jpg",
            alt: "A blue-themed calculator application on a Macbook screen against a white backdrop",
          },
          {
            desktop: "/images/Calculator/Calculator-Desktop-7.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-7.jpg",
            alt: "A dark-themed calculator application on an Android screen against a white backdrop",
          },
          {
            desktop: "/images/Calculator/Calculator-Desktop-8.jpg",
            mobile: "/images/Calculator/Calculator-Mobile-8.jpg",
            alt: "Two iPhones standing upright on a stair-like surface, showing two different themes of a calculator app",
          },
        ],
      },
    },
  ];
  return NextResponse.json({ projects }, { status: 200 });
}
