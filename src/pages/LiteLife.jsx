import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";
import yamahaKeyboard from "/images/LiteLife/assets/Yamaha.jpg";
import screwdriverBlack from "/images/LiteLife/assets/Screwdriver.jpg";
import iMacWhite from "/images/LiteLife/assets/iMacWhite.jpg";
import earphonesCase from "/images/LiteLife/assets/Earphones.jpg";
import deskLamp from "/images/LiteLife/assets/DeskLamp.jpg";
import cordDark from "/images/LiteLife/assets/Cord.jpg";
import chargingBank from "/images/LiteLife/assets/ChargingBank.jpg";
import blackMacBook from "/images/LiteLife/assets/BlackMacbook.jpg";
import liteLifeColorPalette from "/images/LiteLife/assets/LiteLifePalette.svg";

const LiteLifeHero = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectHero"
    >
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LiteLife/mockups/LiteLife-Desktop-1.jpg"
        />
        <img
          src="/images/LiteLife/mockups/LiteLife-Mobile-1.jpg"
          alt="A top-down view of portrait and landscape oriented iPads with an ecommerce site on them"
        />
      </m.picture>
    </m.section>
  );
};

const LiteLifeLinks = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectLinks"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/asbhogal/React-Tech-Commerce.Js-Site"
        className="ProjectButton"
      >
        code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://litelife.vercel.app/"
        className="ProjectButton"
      >
        site
      </a>
    </m.section>
  );
};

const LiteLifeAbout = () => {
  const stackTools = [
    "React",
    "JavaScript",
    "Material UI",
    "React Router",
    "React Hook Form",
    "Single Page Application",
    "Commerce.js",
    "Stripe",
    "Webpack",
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
            Jan 2023 - Feb 2023
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
          Lite Life is a conceptualised e-commerce company which specialises in
          selling high quality, simplistic technological products for
          minimalistic working environments. Design for this project was handled
          by Material UI. The project is a Single Page Application built using
          React and React Router with Commerce.js (a headless CMS) and React
          Hook Form to handle the project catalogue, cart system, ordering and
          customer data. Stripe payment gateway was also configured to handle
          the checkout process and order confirmation. This project was compiled
          using Webpack then deployed for production via Vercel.
        </m.p>
      </m.section>

      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="DesignDecisions"
      >
        <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Design Decisions
        </m.h2>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectAboutContent"
        >
          Lite Life incorporates the simplistic tones of black, grey and white
          alongside the stark constrasts of red and violet-blue to consider both
          user immersion and ease-of-navigation during the checkout process
          (during the latter, distraction-free UX is incorporated to keep the
          customer on the pages until the transaction is complete.) The logo can
          be considered widely known and recognizable in this modern age. The
          stripped back, simple style reflects the design of the site, and the
          long branches complement the horizontal and vertical lines used in the
          UI.
        </m.p>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectAboutContent"
        >
          Roboto, by name, is synonymous with clean, modern technology, and this
          is in turn reflected through its short descenders and wide bowls,
          where the former aligns close to the baseline and keeps the space
          efficient and egonomic, akin to the technology Lite Life sells. The
          use of only one weight also reinforces consistency within simplicity.
          On the broader scale, this conveys two things: simple things can still
          be quality. And quality things can still be simple.
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
            id="LiteLifeTypeface"
            className="Typeface"
          >
            Roboto
          </m.span>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            id="LiteLifeTypeface"
            className="TypefaceWeights"
          >
            <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Singular
            </m.span>
            <m.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              id="LiteLifeTypeface"
              className="TypefaceWeightsList"
            >
              <li className="Weight-400">04 Regular</li>
            </m.ul>
          </m.div>
        </m.div>
      </m.section>

      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ProjectAssetsAndBranding"
      >
        <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Branding & Assets
        </m.h2>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          id="LiteLiteAssetsAndBranding"
          className="ProjectAssetsAndBrandingContainer"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            id="LiteLifeAssets"
            className="AssetsAndBranding"
          >
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={yamahaKeyboard}
              alt="A side view of a black Yamaha keyboard"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={screwdriverBlack}
              alt="A black screwdriver, with various bits next to it"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={cordDark}
              alt="A rolled up charging cable"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={deskLamp}
              alt="A close up view of a matte black desk lamp head"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={chargingBank}
              alt="A close up view of a power charging bank"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={iMacWhite}
              alt="A white iMac"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={blackMacBook}
              alt="A black Macbook"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={earphonesCase}
              alt="A black wireless earphones charging case"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="AssetsAndBranding"
          >
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="LiteLifeColorPalette"
              src={liteLifeColorPalette}
              alt="A color palette"
            />
          </m.div>
        </m.div>
      </m.section>
    </>
  );
};

const LiteLifeMockups = () => {
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
          srcSet="/images/LiteLife/mockups/LiteLife-Desktop-2.jpg"
        />
        <img
          src="/images/LiteLife/mockups/LiteLife-Mobile-2.jpg"
          alt="A white iMac with an ecommerce site open on the screen, on an office desk with a phone, coffee mug, plant and mouse"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LiteLife/mockups/LiteLife-Desktop-3.jpg"
        />
        <img
          src="/images/LiteLife/mockups/LiteLife-Mobile-3.jpg"
          alt="A Galaxy smartphone with an ecommerce site open on the screen"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LiteLife/mockups/LiteLife-Desktop-4.jpg"
        />
        <img
          src="/images/LiteLife/mockups/LiteLife-Mobile-4.jpg"
          alt="A side view of a Macbook and iPhone with an ecommerce site open on the screens"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LiteLife/mockups/LiteLife-Desktop-5.jpg"
        />
        <img
          src="/images/LiteLife/mockups/LiteLife-Mobile-5.jpg"
          alt="An iPad resting on a cushion with an ecommerce site open on the screen and a stylus pen next to it"
        />
      </m.picture>
      <m.picture
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="PictureContainer"
      >
        <source
          media="(min-width: 600px)"
          srcSet="/images/LiteLife/mockups/LiteLife-Desktop-6.jpg"
        />
        <img
          src="/images/LiteLife/mockups/LiteLife-Mobile-6.jpg"
          alt="A close up of an iPhone and Airpods with a website open on the screen"
        />
      </m.picture>
    </m.section>
  );
};

const LiteLife = () => {
  useEffect(() => {
    document.title = "Lite Life | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <div className="Project">
          <LiteLifeHero />
          <LiteLifeLinks />
          <LiteLifeAbout />
          <LiteLifeMockups />
          <CTA />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default LiteLife;
