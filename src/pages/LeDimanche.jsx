import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import cryptoverseHeroImg from "/images/Cryptoverse/mockups/CryptoverseHeroImg.jpg";
import cryptoverseiMacImage from "/images/Cryptoverse/mockups/iMacMockup.jpg";
import cryptoverseHPImage from "/images/Cryptoverse/mockups/HPMockup.jpg";
import cryptoverseiPadImages from "/images/Cryptoverse/mockups/iPadMockups.jpg";
import cryptoverseiPhoneImage from "/images/Cryptoverse/mockups/iPhoneMockup.jpg"; */
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";

const LeDimanche = () => {
  useEffect(() => {
    document.title = "Le Dimanche | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <div className="Project">
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
                alt="A series of iPhone screens with a calculator in three different themes"
              />
            </picture>
            {/* <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={cryptoverseHeroImg}
              alt="A close up of a Macbook with an application interface on the screen against a dark blue background"
            /> */}
          </m.section>

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
              <span className="StackToolLozenge">React</span>
              <span className="StackToolLozenge">useReducer</span>
              <span className="StackToolLozenge">Custom Hooks</span>
              <span className="StackToolLozenge">ChakraUI</span>
              <span className="StackToolLozenge">State Management</span>
              <span className="StackToolLozenge">Single Page Application</span>
              <span className="StackToolLozenge">TDD</span>
              <span className="StackToolLozenge">RTL</span>
              <span className="StackToolLozenge">Jest</span>
              <span className="StackToolLozenge">Vite</span>
              <span className="StackToolLozenge">Git</span>
              <span className="StackToolLozenge">Vercel</span>
            </m.div>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectAboutContent"
            >
              Le Demanche, French for &quot;On Sunday&quot;, is an exclusive
              e-commerce store providing a gateway to a world of opulent
              indulgence designed to enhance customer weekend retreats by
              combining luxury with leisure. The store sells designer handbags,
              finely-crafted timepieces and hand-made, small-batch spirits
              geared towards helping the customer savor those precious moments
              before the start of a new week. The site (SPA) has been built
              using TypeScript with React, ChakraUI and Vite with ESLint.
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
                id="CryptoverseTypeface"
              >
                Noto Sans
              </m.span>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                id="CryptoverseTypeface"
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
                  <li id="Crypto-Weight-200">02 Extra Light</li>⋅
                  <li id="Crypto-Weight-300">03 Light</li>⋅
                  <li id="Crypto-Weight-400">04 Regular</li>
                </m.ul>
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
                alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
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
                alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
              />
            </m.picture>
            {/* <m.picture
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="PictureContainer"
            >
              <source
                media="(min-width: 600px)"
                srcSet="/images/LeDimanche/LeDimanche-Desktop-3.jpg"
              />
              <img
                src="/images/LeDimanche/LeDimanche-Mobile-3.jpg"
                alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
              />
            </m.picture> */}
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
                alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
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
                alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
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
                src="/images/LeDimanche/LeDimanche-Desktop-6.jpg"
                alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
              />
            </m.picture>
          </m.section>

          <CTA />
        </div>
      </main>

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default LeDimanche;
