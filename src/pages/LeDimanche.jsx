/* import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";

const LeDimancheHero = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectHero"
    >
      <picture className="PictureContainer">
        <source
          media="(min-width: 600px)"
          srcSet="/images/LeDimanche/LeDimanche-Desktop-Alt.jpg"
        />
        <img
          src="/images/LeDimanche/LeDimanche-Mobile-Alt.jpg"
          alt="A laptop with a luxury e-commerce site, resting on a grey block"
        />
      </picture>
    </m.section>
  );
};

const LeDimancheLinks = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectLinks"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/asbhogal/TypeScript-Shopping-Cart"
        className="ProjectButton"
      >
        code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://typescript-ecommerce-shop.vercel.app/shop"
        className="ProjectButton"
      >
        site
      </a>
    </m.section>
  );
};

const LeDimancheAbout = () => {
  const stackTools = [
    "React",
    "useReducer",
    "Custom Hooks",
    "ChakraUI",
    "State Management",
    "Single Page Application",
    "TDD",
    "RTL",
    "Jest",
    "Vite",
    "Git",
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
            July 2023 - July 2023
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
          Le Dimanche, French for &quot;On Sunday&quot;, is an exclusive
          e-commerce store providing a gateway to a world of opulent indulgence
          designed to enhance customer weekend retreats by combining luxury with
          leisure. The store sells designer handbags, finely-crafted timepieces
          and hand-made, small-batch spirits geared towards helping the customer
          savor those precious moments before the start of a new week. The site
          (SPA) has been built using TypeScript with React, ChakraUI and Vite
          with ESLint.
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
            id="LeDimancheTypeface"
          >
            Poiret One
          </m.span>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            id="LeDimancheTypeface"
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
              <li id="LeDimanche-Weight-400">04 Regular ⋅ </li>
              <li id="LeDimanche-Weight-600">06 Bold</li>
            </m.ul>
          </m.div>
        </m.div>
      </m.section>
    </>
  );
};

const LeDimancheMockups = () => {
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
          srcSet="/images/LeDimanche/LeDimanche-Desktop-Alt3.jpg"
        />
        <img
          src="/images/LeDimanche/LeDimanche-Mobile-Alt3.jpg"
          alt="A luxury e-commerce website on a Macbook resting on a grey couch"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LeDimanche/LeDimanche-Desktop-Alt2.jpg"
        />
        <img
          src="/images/LeDimanche/LeDimanche-Mobile-Alt2.jpg"
          alt="A luxury e-commerce site on a HTC phone, resting next to a laptop, both on a table"
        />
      </m.picture>

      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LeDimanche/LeDimanche-Desktop-4.jpg"
        />
        <img
          src="/images/LeDimanche/LeDimanche-Mobile-4.jpg"
          alt="A luxury e-commerce site on an iPad against a white backdrop"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LeDimanche/LeDimanche-Desktop-5.jpg"
        />
        <img
          src="/images/LeDimanche/LeDimanche-Mobile-5.jpg"
          alt="A luxury e-commerce site on an iMac, sitting on a desk with a vase to the right and a journal with a pen on the left"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LeDimanche/LeDimanche-Desktop-6.jpg"
        />
        <img
          src="/images/LeDimanche/LeDimanche-Mobile-6.jpg"
          alt="A luxury e-commerce site on a mobile device, standing upright on top of rocks, with a branch next to it and a biege backdrop"
        />
      </m.picture>
    </m.section>
  );
};

const LeDimanche = () => {
  useEffect(() => {
    document.title = "Le Dimanche | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <div className="Project">
          <LeDimancheHero />
          <LeDimancheLinks />
          <LeDimancheAbout />
          <LeDimancheMockups />
          <CTA />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LeDimanche;
 */
