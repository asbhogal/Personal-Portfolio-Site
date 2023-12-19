import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const about = {
    summary:
      "Aman Singh Bhogal is an Award-Winning Creative Front End Developer with 3 years of client side experience in Front End Development. His work covers designing, building and optimising CMS-based websites (WordPress and Hubspot) static applications using HTML, CSS and JavaScript.",
    summary2:
      "He now works with international clients across a broad spectrum of web design and development services and creates interfaces using Adobe CC, Figma, React and Next.js from existing and new design briefs, as well as offering consultancies and mentoring for junior developers.",
    experience: [
      {
        id: 1,
        position: "WordPress Designer & Developer",
        dates: "May 2020 - Feb 2021",
        duties: [
          "Designed & developed using Astra Pro, Elementor Pro,WooCommerce and Stripe",
          "Established branding which was used across the site and social media content",
          "Created beta group testing forms and discussed feedback with stakeholders",
          "Negotiated 10% off the annual subscription price for Sucuri Platform",
          "Led the handover meeting with stakeholders and internal team",
        ],
        stacks: [
          "WordPress",
          "Elementor",
          "Astra",
          "WooCommerce",
          "Stripe",
          "YoastSEO",
          "Lighthouse",
          "CSS3",
          "JS",
          "PHP",
          "RWD",
        ],
        link: {
          href: "https://www.dropbox.com/sh/t6j0d882l18ajel/AAAuAl1ML0kWPePpuiCvudkma?dl=0",
        },
      },
      {
        id: 2,
        position: "Web Designer & Developer",
        dates: "Feb 2021 - Oct 2022",
        duties: [
          "Leveraged HTML5, CSS3, SCSS, JavaScript (ES6), PHP, RESTful APIs, npm & Git for vanilla builds",
          "Managed and deployed multiple applications on DigitalOcean via Cloudways hosting",
          "Created bespoke WordPress themes and modifying off-the-shelf themes and plugins",
          "Designed & developed a joint-client website on WordPress",
          "Performing domain management, DNS record changes and propagation tests",
        ],
        stacks: [
          "HTML5",
          "CSS3",
          "JS",
          "jQuery",
          "PHP",
          "WordPress",
          "Astra",
          "Gutenberg",
          "SEO",
          "HubSpot",
          "DigitalOcean",
          "DNS",
          "Git",
        ],
        link: {
          href: "https://www.dropbox.com/sh/drm4vdxboqhbb2n/AAD5AsoPB_vGOP0DSywab0Sda?dl=0",
        },
      },
      {
        id: 3,
        position: "Creative Front End Developer / UI Engineer",
        dates: "Oct 2022 - Present",
        duties: [
          "Creating responsive, interactive prototypes, components, design systems and high-fidelity wireframes/mockups in Figma",
          "Establishing branding, logos, typography, brand boards & UI mockups using Figma & Adobe CC",
          "Translating designs and wireframes into high-quality, responsive builds using Next.js, TypeScript, Custom Hooks, Redux, React, CSS-in-JS, RESTful APIs, Babel, ESLint, Storybook, Docker, Webpack & CI/CD",
          "Assessing cross-browser compatibility, accessibility (to WCAG 2.1 AAA standards) and debugging issues",
          "Refactoring code to ensure performance, component modularity, flexibility, reliability and maintainability",
          "Performing code reviews, PRs, debugging, pair programming and mentoring other developers",
          "Providing freelance designer/developer services and advice to international clientele",
          "Conducting Test Driven Development (Jest, React Testing Library, Cypress, Playwright, Vitest)",
        ],
        stacks: [
          "Next.js",
          "React",
          "TypeScript",
          "Redux",
          "SASS",
          "Tailwind CSS",
          "REST APIs",
          "ESLint",
          "Webpack",
          "Docker",
          "Storybook",
          "TDD",
          "Git",
        ],
        link: {
          href: "https://www.github.com/asbhogal",
        },
      },
    ],
  };

  return NextResponse.json({ about }, { status: 200 });
}
