import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";

const FyrreMagazineHero = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectHero"
    >
      <picture className="PictureContainer">
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-1.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-1.jpg"
          alt="An iPhone standing upright on an elevated concrete platform with showing a magazine site on the display. The title 'Art & Life' is seen in bold uppercase on the screen"
        />
      </picture>
    </m.section>
  );
};

const FyrreMagazineLinks = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectLinks"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.figma.com/community/file/1136023191939170511/fyrre-magazine-website-webflow-template"
        className="ProjectButton"
      >
        design
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/asbhogal/Fyrre-Magazine"
        className="ProjectButton"
      >
        code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://fyrre-magazine.vercel.app/"
        className="ProjectButton"
      >
        site
      </a>
    </m.section>
  );
};

const FyrreMagazineAbout = () => {
  const stackTools = [
    "Next.js",
    "React",
    "React Server Components",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn",
    "GSAP",
    "E2E",
    "Playwright",
    "ESLint",
    "Vercel",
  ];

  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ProjectAbout"
      >
        <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          About
        </m.h2>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectDateAndType"
        >
          <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Project Type: Personal
          </m.span>
          <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            October 2023 - November 2023
          </m.span>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectLozenges"
        >
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectLozenge"
          >
            Design
          </m.span>
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectLozenge"
          >
            Development
          </m.span>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectStacksAndTools"
        >
          {stackTools.map((tool, index) => (
            <m.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={index}
              className="StackToolLozenge"
            >
              {tool}
            </m.span>
          ))}
        </m.div>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectAboutContent"
        >
          Fyrre Magazine is a bold, striking arts and life-focused website
          focused on articles and podcasts regarding the European culture and
          arts scene. The app was developed from initial Figma designs created
          by Webflow Designer Pawel Gola. Next.js and RSC were used to handle
          the data fetching of the dynamic content (articles, podcasts and
          authors) from JSON data created to simulate an API endpoint. The site
          was built using the now-stable app router in Next.js, with TypeScript
          for type safety, Shadcn for accessible components, Tailwind for
          responsive styling and GSAP for horizontal scrolling animations. E2E
          testing using playwright was implemented, as well as React Suspense
          for UI loading states during data fetching. Context API and Custom
          Hooks were initially used for the child components, which stored the
          data fetched at a higher level. This was then refactored to have each
          component fetch directly via async/await and subsequently converted
          back to Server Components. The site was deployed using Vercel.
        </m.p>
      </m.section>

      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ProjectTypefaces"
      >
        <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Typeface
        </m.h2>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectTypefaceInfo"
        >
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            id="FyrreMagazineTypeface"
          >
            General Sans
          </m.span>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            id="FyrreMagazineTypeface"
            className="TypefaceWeights"
          >
            <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Singular
            </m.span>
            <m.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="TypefaceWeightsList"
            >
              <li id="FyrreMagazine-Weight-400">04 Regular ⋅ </li>
              <li id="FyrreMagazine-Weight-500">05 Medium ⋅ </li>
              <li id="FyrreMagazine-Weight-600">06 Semibold</li>
            </m.ul>
          </m.div>
        </m.div>
      </m.section>
    </>
  );
};

const FyrreMagazineMockups = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectScreens"
    >
      <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Screens
      </m.h2>

      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-2.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-2.jpg"
          alt="A magazine article about 'The Best Art Museums' on a MacBook, resting on a bed with pillows and daylight behind"
        />
      </m.picture>

      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-3.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-3.jpg"
          alt="A magazine website on an iPad in horizontal orientation, resting at an angle on a dark backdrop. The title 'Art & Life' is seen in bold uppercase on the screen"
        />
      </m.picture>

      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-4.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-4.jpg"
          alt="A podcast article on an iPad in vertical orientation. The title 'The Art of Movement' is seen in bold uppercase, with podcast information"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-7.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-7.jpg"
          alt="A magazine article on an iPad in vertical orientation and the same screen on an iPhone resting to the left of it. The title 'The Devil Is The Details' is seen in bold uppercase, with article information. Both devices rest on a desk."
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-5.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-5.jpg"
          alt="A magazine website on an iMac with the tower standing next to it. The title 'Art & Life' is seen in bold uppercase on the screen"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/FyrreMagazine/FyrreMagazine-Desktop-6.jpg"
        />
        <img
          src="/images/FyrreMagazine/FyrreMagazine-Mobile-6.jpg"
          alt="A magazine article on a Nothing Phone elevated and at a slight angle. The title 'Street Art Festival' is seen in bold uppercase on the screen, as well as article info underneath it"
        />
      </m.picture>
    </m.section>
  );
};

const FyrreMagazine = () => {
  useEffect(() => {
    document.title = "Fyrre Magazine | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <div className="Project">
          <FyrreMagazineHero />
          <FyrreMagazineLinks />
          <FyrreMagazineAbout />
          <FyrreMagazineMockups />
          <CTA />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default FyrreMagazine;
