import { ProjectType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const projects: ProjectType[] = [
    {
      id: 1,
      project: "brand",
      slug: "brand",
      imageDesktop: "/images/Home/Brand-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/Brand-HomePage-Mobile.jpg",
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
      portfolioImg: {
        desktop: "/images/Portfolio/Brand-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/Brand-PortfolioPage-Mobile.jpg",
        alt: "A series of iPhones face down, with one faced-up and a website on its screen",
      },
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
          [
            "The templates were kept consistent in design, aesthetic and layout. The clean, minimalistic structure with attention to whitespacing, legibility and heirarchy was also respected, paralleling the affluence communicated by the brand. The logo itself is assured, sharp and rigid, to emphasise the nature and quality of their products. The anti-flash white provides a medium through which the two extremes of black and white fuse in different elements at play and merge across various content typesets, yet still manage to become two distinct entities in their own right, emboldened by the contrasting logos used.",
          ],
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
          fontWeights: [400, 500, 600, 700, 900],
        },
        branding: {
          backgroundColor: "BrandBackgroundColor",
          images: [
            {
              img: "/images/BRAND/BrandImages.png",
              alt: "Images of Milanese-designed furniture",
            },
          ],
          logos: [
            {
              img: "/images/logos/brand-logo-black.svg",
              alt: "The word BRAND in bold, black lettering",
            },
            {
              img: "/images/logos/brand-logo-white.svg",
              alt: "The word BRAND in bold, white lettering",
            },
          ],
          components: [
            {
              img: "/images/BRAND/BrandComponents.svg",
              alt: "Various page components, including a testimonial card and buttons",
            },
          ],
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
      slug: "lite-life",
      imageDesktop: "/images/Home/LiteLife-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/LiteLife-HomePage-Mobile.jpg",
      imgAlt:
        "A close up of an iPhone and Airpods with a website open on the screen",
      summary:
        "A fully-functioning, Single Page e-commerce application which sells a range of minimalist, high-end products. Built using React with Stripe, Material UI for styling and Webpack.",
      stacks: [
        [
          "TypeScript",
          "React",
          "React Hook Form",
          "React Router",
          "DOMPurify",
          "Commerce.js (Headless CMS)",
          "RESTful APIs",
        ],
        ["SPA", "Stripe", "Material UI", "Babel", "Webpack", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/React-Tech-Commerce.Js-Site",
      site: "https://litelife.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/litelife",
      portfolioImg: {
        desktop: "/images/Portfolio/LiteLife-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/LiteLife-PortfolioPage-Mobile.jpg",
        alt: "A Galaxy phone with an e-commerce site on the screen",
      },
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
          fontWeights: [400],
        },
        branding: {
          images: [
            {
              img: "/images/LiteLife/assets/Yamaha.jpg",
              alt: "A close-up of a Yamaha keyboard, with the brand in clear view",
            },
            {
              img: "/images/LiteLife/assets/Screwdriver.jpg",
              alt: "A cordless screwdriver with a temperature display on the rear, surrounded by drill bits",
            },
            {
              img: "/images/LiteLife/assets/Cord.jpg",
              alt: "A fibre-weaved cord, wrapped into a circle on top of a laptop keyboard",
            },
            {
              img: "/images/LiteLife/assets/DeskLamp.jpg",
              alt: "A black desk lamp, on and facing the surface",
            },
            {
              img: "/images/LiteLife/assets/ChargingBank.jpg",
              alt: "A powerbank charging, with the brand 'ANKER' printed on the cable",
            },
            {
              img: "/images/LiteLife/assets/iMacWhite.jpg",
              alt: "An iMac, with a keyboard and keypad, against a white backdrop",
            },
            {
              img: "/images/LiteLife/assets/BlackMacbook.jpg",
              alt: "A black Macbook against a white backdrop",
            },
            {
              img: "/images/LiteLife/assets/Earphones.jpg",
              alt: "A rear-view of an earphones charging box, with the lid upright",
            },
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
      slug: "oceanica",
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
      portfolioImg: {
        desktop: "/images/Portfolio/Oceanica-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/Oceanica-PortfolioPage-Mobile.jpg",
        alt: "A MacBook in front of a pool showing a website",
      },
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
          fontWeights: [400, 500, 600, 700],
        },
        branding: {
          backgroundColor: "OceanicaBackgroundColor",
          components: [
            {
              img: "/images/Oceanica/assets/TestimonialCard.svg",
              alt: "A testimonial card, with an image, placeholder text and name underneath",
            },
            {
              img: "/images/Oceanica/assets/PackagesCard.svg",
              alt: "A snapshot of a package offer, with an image, title, placeholder text and price",
            },
          ],
          logos: [
            {
              img: "/images/Oceanica/assets/Logo.svg",
              alt: "The words 'Oceanica' with a wave-shaped half circle to the left of it",
            },
          ],
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
      slug: "cryptoverse",
      imageDesktop: "/images/Home/Cryptoverse-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/Cryptoverse-HomePage-Mobile.jpg",
      imgAlt:
        "An iMac with a Crypo-related application on the screen, against a black backdrop",
      summary:
        "A single page application which returns a range of crypto-related data, including currently top-trending currencies, market value, exchange rates and news. Built using Next.js with Redux RTK Query to handle multiple API calls.",
      stacks: [
        [
          "TypeScript",
          "Next.js",
          "React",
          "Redux",
          "RTK Query",
          "RESTful APIs",
          "Axios",
          "SPA",
        ],
        [
          "SASS",
          "PostCSS",
          "Playwright",
          "E2E Testing",
          "Husky",
          "ESLint",
          "Git",
          "Vercel",
        ],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/Next.js-Cryptocurrency-App",
      site: "https://next-js-cryptocurrency-app.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/cryptoverse",
      portfolioImg: {
        desktop: "/images/Portfolio/Cryptoverse-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/Cryptoverse-PortfolioPage-Mobile.jpg",
        alt: "A Cryptocurrency application on an iPhone screen, lying next to a Macbook keyboard",
      },
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
          "Cryptoverse is a conceptualised company which offers data on different cryptocurrencies, including market capitalisation, exchanges and current news. The application also allows users to look up the current stats of a cryptocurrency, including its ranking, price and market cap. The application was built using TypeScript and Next.js and leveraged Redux RTK Query to manage API calls from Coinranking, Coin Gecko and The News. The app was also styled using SCSS, tested using Playwright E2E and a111y testing, leverages husky for pre-commit linting and testing and compiled as a production build using Webpack and shipped via Vercel.",
        typeface: {
          id: "CryptoverseTypeface",
          font: "Noto Sans",
          type: "singular",
          weights: ["02 Extra Light", "03 Light", "04 Regular"],
          fontWeights: [200, 300, 400],
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
      slug: "calculator",
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
      portfolioImg: {
        desktop: "/images/Portfolio/Calculator-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/Calculator-PortfolioPage-Mobile.jpg",
        alt: "Two iPhones standing upright on a stair-like surface showing two different themes of a calculator app",
      },
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
          fontWeights: [400, 500, 700],
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
    {
      id: 6,
      project: "le dimanche",
      slug: "le-dimanche",
      imageDesktop: "/images/Home/LeDimanche-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/LeDimanche-HomePage-Mobile.jpg",
      imgAlt:
        "A luxury e-commerce site on a HTC phone, resting next to a laptop, both on a table",
      summary:
        "An exclusive e-commerce store designed to enhance customer weekend retreats by combining luxury with leisure. Built using TypeScript with React, custom hooks and context, local storage, Chakra UI and Vite.",
      stacks: [
        ["TypeScript", "React", "useReducer", "Custom Hooks", "Chakra UI"],
        ["Local Storage API", "ES Lint", "Vite", "Git", "Vercel"],
      ],
      skills: ["web design", "web development"],
      code: "https://github.com/asbhogal/TypeScript-Shopping-Cart",
      site: "https://typescript-ecommerce-shop.vercel.app/shop",
      more: "https://www.amansinghbhogal.com/portfolio/ledimanche",
      portfolioImg: {
        desktop: "/images/Portfolio/LeDimanche-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/LeDimanche-PortfolioPage-Mobile.jpg",
        alt: "A luxury shopping site on a Macbook, resting on a white table with a mobile next to it",
      },
      details: {
        hero: {
          desktop: "/images/LeDimanche/LeDimanche-Desktop-Alt.jpg",
          mobile: "/images/LeDimanche/LeDimanche-Mobile-Alt.jpg",
          alt: "A laptop with a luxury e-commerce site, resting on a grey block",
        },
        links: {
          code: "https://github.com/asbhogal/TypeScript-Shopping-Cart",
          site: "https://typescript-ecommerce-shop.vercel.app/shop",
        },
        type: "personal",
        date: "July 2023 - July 2023",
        discipline: ["design", "development"],
        description:
          "Le Dimanche, French for 'On Sunday', is an exclusive e-commerce store providing a gateway to a world of opulent indulgence designed to enhance customer weekend retreats by combining luxury with leisure. The store sells designer handbags, finely-crafted timepieces and hand-made, small-batch spirits geared towards helping the customer savor those precious moments before the start of a new week. The site (SPA) has been built using TypeScript with React, ChakraUI and Vite with ESLint.",
        typeface: {
          id: "LeDimancheTypeface",
          font: "Poiret One",
          type: "singular",
          weights: ["04 Regular", "06 Bold"],
          fontWeights: [400, 600],
        },
        mockups: [
          {
            desktop: "/images/LeDimanche/LeDimanche-Desktop-Alt3.jpg",
            mobile: "/images/LeDimanche/LeDimanche-Mobile-Alt3.jpg",
            alt: "A luxury e-commerce website on a Macbook resting on a grey couch",
          },
          {
            desktop: "/images/LeDimanche/LeDimanche-Desktop-Alt2.jpg",
            mobile: "/images/LeDimanche/LeDimanche-Mobile-Alt2.jpg",
            alt: "A luxury e-commerce site on a HTC phone, resting next to a laptop, both on a table",
          },
          {
            desktop: "/images/LeDimanche/LeDimanche-Desktop-4.jpg",
            mobile: "/images/LeDimanche/LeDimanche-Mobile-4.jpg",
            alt: "A luxury e-commerce site on an iPad against a white backdrop",
          },
          {
            desktop: "/images/LeDimanche/LeDimanche-Desktop-5.jpg",
            mobile: "/images/LeDimanche/LeDimanche-Mobile-5.jpg",
            alt: "A luxury e-commerce site on an iMac, sitting on a desk with a vase to the right and a journal with a pen on the left",
          },
          {
            desktop: "/images/LeDimanche/LeDimanche-Desktop-6.jpg",
            mobile: "/images/LeDimanche/LeDimanche-Mobile-6.jpg",
            alt: "A luxury e-commerce site on a mobile device, standing upright on top of rocks, with a branch next to it and a biege backdrop",
          },
        ],
      },
    },
    {
      id: 7,
      project: "fyrre magazine",
      slug: "fyrre-magazine",
      imageDesktop: "/images/Home/FyrreMagazine-HomePage-Desktop.jpg",
      imageMobile: "/images/Home/FyrreMagazine-HomePage-Mobile.jpg",
      imgAlt:
        "An iPhone standing upright on an elevated concrete platform with showing a magazine site on the display. The title 'Art & Life' is seen in bold uppercase on the screen",
      summary:
        "A bold, striking SPA arts and life-focused magazine website developed from Figma designs using Next.js, TypeScript React Server Components, Shadcn, Tailwind CSS, GSAP and E2E testing with Playwright.",
      stacks: [
        [
          "Next.js",
          "React Server Components",
          "TypeScript",
          "React Suspense",
          "Context API",
          "Custom Hooks",
          "React Hook Form",
          "Zod",
          "Server Actions",
        ],
        [
          "SPA",
          "Tailwind CSS",
          "Shadcn",
          "GSAP",
          "E2E Testing",
          "Playwright",
          "Husky",
          "Git",
          "Vercel",
        ],
      ],
      skills: ["web development"],
      code: "https://github.com/asbhogal/Fyrre-Magazine",
      site: "https://fyrremagazine.vercel.app/",
      more: "https://www.amansinghbhogal.com/portfolio/fyrremagazine",
      portfolioImg: {
        desktop: "/images/Portfolio/FyrreMagazine-PortfolioPage-Desktop.jpg",
        mobile: "/images/Portfolio/FyrreMagazine-PortfolioPage-Mobile.jpg",
        alt: "An iPhone standing upright on an elevated concrete platform with showing a magazine site on the display. The title 'Art & Life' is seen in bold uppercase on the screen",
      },
      details: {
        hero: {
          desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-1.jpg",
          mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-1.jpg",
          alt: "An iPhone standing upright on an elevated concrete platform with showing a magazine site on the display. The title 'Art & Life' is seen in bold uppercase on the screen",
        },
        links: {
          templates:
            "https://www.figma.com/community/file/1136023191939170511/fyrre-magazine-website-webflow-template",
          code: "https://github.com/asbhogal/Fyrre-Magazine",
          site: "https://fyrre-magazine.vercel.app/",
        },
        type: "personal",
        date: "October 2023 - November 2023",
        discipline: ["development"],
        description:
          "Fyrre Magazine is a bold, striking arts and life-focused website focused on articles and podcasts regarding the European culture and arts scene. The app was developed from initial Figma designs created by Webflow Designer Pawel Gola. Next.js and RSC were used to handle the data fetching of the dynamic content (articles, podcasts and authors) from JSON data created to simulate an API endpoint. The site was built using the now-stable app router in Next.js, with TypeScript for type safety, Shadcn for accessible components, Tailwind for responsive styling and GSAP for horizontal scrolling animations. E2E testing using playwright was implemented, as well as React Suspense for UI loading states during data fetching. Context API and Custom Hooks were initially used for the child components, which stored the data fetched at a higher level. This was then refactored to have each component fetch directly via async/await and subsequently converted back to Server Components. The site was deployed using Vercel.",
        typeface: {
          id: "FyrreMagazineTypeface",
          font: "General Sans",
          type: "singular",
          weights: ["04 Regular", "05 Medium", "06 Semi Bold"],
          fontWeights: [400, 500, 600],
        },
        mockups: [
          {
            desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-2.jpg",
            mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-2.jpg",
            alt: "A magazine article with the words 'The Best Art Museums' on a MacBook, resting on a bed with pillows and daylight behind",
          },
          {
            desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-3.jpg",
            mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-3.jpg",
            alt: "A magazine website on an iPad in horizontal orientation, resting at an angle on a dark backdrop. The title 'Art & Life' is seen in bold uppercase on the screen",
          },
          {
            desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-4.jpg",
            mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-4.jpg",
            alt: "A podcast article on an iPad in vertical orientation. The title 'The Art of Movement' is seen in bold uppercase, with podcast information",
          },
          {
            desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-7.jpg",
            mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-7.jpg",
            alt: "A magazine article on an iPad in vertical orientation and the same screen on an iPhone resting to the left of it. The title 'The Devil Is The Details' is seen in bold uppercase, with article information. Both devices rest on a desk.",
          },
          {
            desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-5.jpg",
            mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-5.jpg",
            alt: "A magazine website on an iMac with the tower standing next to it. The title 'Art & Life' is seen in bold uppercase on the screen",
          },
          {
            desktop: "/images/FyrreMagazine/FyrreMagazine-Desktop-6.jpg",
            mobile: "/images/FyrreMagazine/FyrreMagazine-Mobile-6.jpg",
            alt: "A magazine article on a Nothing Phone elevated and at a slight angle. The title 'Street Art Festival' is seen in bold uppercase on the screen, as well as article info underneath it",
          },
        ],
      },
    },
  ];
  return NextResponse.json({ projects }, { status: 200 });
}
