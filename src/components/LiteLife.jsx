import { useEffect } from "react";
import { motion as m } from "framer-motion";
import yamahaKeyboard from "../assets/images/LiteLife/assets/Yamaha.jpg";
import screwdriverBlack from "../assets/images/LiteLife/assets/Screwdriver.jpg";
import iMacWhite from "../assets/images/LiteLife/assets/iMacWhite.jpg";
import earphonesCase from "../assets/images/LiteLife/assets/Earphones.jpg";
import deskLamp from "../assets/images/LiteLife/assets/DeskLamp.jpg";
import cordDark from "../assets/images/LiteLife/assets/Cord.jpg";
import chargingBank from "../assets/images/LiteLife/assets/ChargingBank.jpg";
import blackMacBook from "../assets/images/LiteLife/assets/BlackMacbook.jpg";
import liteLifeColorPalette from "../assets/images/LiteLife/assets/LiteLifePalette.svg";
import Header from "./Header";
import Footer from "./Footer";
import liteLifeHeroImg from "../assets/images/LiteLife//mockups/LiteLifeHeroImg.jpg";
import liteLifeGalaxyImage from "../assets/images/LiteLife/mockups/GalaxyMockup.jpg";
import liteLifeMacbookAndIphoneImage from "../assets/images/LiteLife/mockups/MacbookAndiPhoneMockup.jpg";
import liteLifeiPadImage from "../assets/images/LiteLife/mockups/iPadMockup.jpg";
import liteLifeiMacImage from "../assets/images/LiteLife/mockups/iMacMockup.jpg";

import CTA from "./CTA";
import ScrollToTop from "./ScrollToTop";

const LiteLife = () => {
  useEffect(() => {
    document.title = "Lite Life | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <div className="Project">
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectHero"
        >
          <m.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src={liteLifeHeroImg}
            alt="A top-down view of portrait and landscape oriented iPads with an ecommerce site on them"
          />
        </m.section>

        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectLinks"
        >
          <a
            target="_blank"
            href="https://github.com/asbhogal/React-Tech-Commerce.Js-Site"
            className="ProjectButton"
          >
            code
          </a>
          <a
            target="_blank"
            href="https://litelife.vercel.app/"
            className="ProjectButton"
          >
            site
          </a>
        </m.section>

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
            <span className="StackToolLozenge">React</span>
            <span className="StackToolLozenge">JavaScript</span>
            <span className="StackToolLozenge">Material UI</span>
            <span className="StackToolLozenge">React Router</span>
            <span className="StackToolLozenge">React Hook Form</span>
            <span className="StackToolLozenge">Single Page Application</span>
            <span className="StackToolLozenge">Commerce.js</span>
            <span className="StackToolLozenge">Stripe</span>
            <span className="StackToolLozenge">Webpack</span>
            <span className="StackToolLozenge">Git</span>
            <span className="StackToolLozenge">Vercel</span>
          </m.div>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectAboutContent"
          >
            Lite Life is a conceptualised e-commerce company which specialises
            in selling high quality, simplistic technological products for
            minimalistic working environments. Design for this project was
            handled by Material UI. The project is a Single Page Application
            built using React and React Router with Commerce.js (a headless CMS)
            and React Hook Form to handle the project catologue, cart system,
            ordering and customer data. Stripe payment gateway was also
            configured to handle the checkout process and order confirmation.
            This project was compiled using Webpack then shipped for production
            via Vercel.
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
            alongside the stark constrasts of red and violet-blue to consider
            both user immersion and ease-of-navigation during the checkout
            process (during the latter, distraction-free UX is incorporated to
            keep the customer on the pages until the transaction is complete.)
            The logo can be considered widely known and recognizable in this
            modern age. The stripped back, simple style reflects the design of
            the site, and the long branches complement the horizontal and
            vertical lines used in the UI.
          </m.p>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectAboutContent"
          >
            Roboto, by name, is synonymous with clean, modern technology, and
            this is in turn reflected through its short descenders and wide
            bowls, where the former aligns close to the baseline and keeps the
            space efficient and egonomic, akin to the technology Lite Life
            sells. The use of only one weight also reinforces consistency within
            simplicity. On the broader scale, this conveys two things: simple
            things can still be quality. And quality things can still be simple.
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

        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectScreens"
        >
          <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Screens
          </m.h2>
          <m.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src={liteLifeiMacImage}
            alt="A white iMac with an ecommerce site open on the screen, on an office desk with a phone, coffee mug, plant and mouse"
          />
          <m.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src={liteLifeGalaxyImage}
            alt="A Galaxy smartphone with an ecommerce site open on the screen"
          />
          <m.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src={liteLifeMacbookAndIphoneImage}
            alt="A side view of a Macbook and iPhone with an ecommerce site open on the screens"
          />
          <m.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            src={liteLifeiPadImage}
            alt="An iPad resting on a cushion with an ecommerce site open on the screen and a stylus pen next to it"
          />
        </m.section>
        <CTA />
      </div>

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default LiteLife;
