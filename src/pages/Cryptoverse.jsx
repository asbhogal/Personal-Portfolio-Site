import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import cryptoverseHeroImg from "/images/Cryptoverse/mockups/CryptoverseHeroImg.jpg";
import cryptoverseiMacImage from "/images/Cryptoverse/mockups/iMacMockup.jpg";
import cryptoverseHPImage from "/images/Cryptoverse/mockups/HPMockup.jpg";
import cryptoverseiPadImages from "/images/Cryptoverse/mockups/iPadMockups.jpg";
import cryptoverseiPhoneImage from "/images/Cryptoverse/mockups/iPhoneMockup.jpg";
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";

const Cryptoverse = () => {
  useEffect(() => {
    document.title = "Cryptoverse | Aman Singh Bhogal";
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
            {/* <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={cryptoverseHeroImg}
              alt="A close up of a Macbook with an application interface on the screen against a dark blue background"
            /> */}

            <m.picture
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="PictureContainer"
            >
              <source
                media="(min-width: 600px)"
                srcSet="/images/Cryptoverse/mockups/Cryptoverse-Desktop-Alt.jpg"
              />
              <img
                src="/images/Cryptoverse/mockups/Cryptoverse-Mobile-Alt.jpg"
                alt="A close up of a Macbook with an application interface on the screen resting on the corner"
              />
            </m.picture>
          </m.section>

          <m.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectLinks"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/asbhogal/Next.js-Cryptocurrency-App"
              className="ProjectButton"
            >
              code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://next-js-cryptocurrency-app.vercel.app/"
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
                March 2023 - Present
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
              <span className="StackToolLozenge">Next.js</span>
              <span className="StackToolLozenge">React</span>
              <span className="StackToolLozenge">Redux</span>
              <span className="StackToolLozenge">RTK Query</span>
              <span className="StackToolLozenge">API</span>
              <span className="StackToolLozenge">Single Page Application</span>
              <span className="StackToolLozenge">State Management</span>
              <span className="StackToolLozenge">SASS</span>
              <span className="StackToolLozenge">Webpack</span>
              <span className="StackToolLozenge">Git</span>
              <span className="StackToolLozenge">Vercel</span>
            </m.div>
            <m.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectAboutContent"
            >
              Cryptoverse is a conceptualised company which offers data on
              different cryptocurrencies, including market capitalisation,
              exchanges and current news. The application also allows users to
              look up the current stats of a cryptocurrency, including its
              ranking, price and market cap. The application was built using
              Next.js and leveraged Redux RTK Query to manage API calls from
              Coinranking, Coin Gecko and Bing News Search. The app was also
              styled using SCSS, compiled as a production build using Webpack
              and shipped via Vercel.
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
                srcSet="/images/Cryptoverse/mockups/Cryptoverse-Desktop-1.jpg"
              />
              <img
                src="/images/Cryptoverse/mockups/Cryptoverse-Mobile-1.jpg"
                alt="A mockup of a crypto application on an iMac"
              />
            </m.picture>
            <m.picture
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="PictureContainer"
            >
              <source
                media="(min-width: 600px)"
                srcSet="/images/Cryptoverse/mockups/Cryptoverse-Desktop-3.jpg"
              />
              <img
                src="/images/Cryptoverse/mockups/Cryptoverse-Mobile-3.jpg"
                alt="A mockup of a crypto application on an iMac"
              />
            </m.picture>
            <m.picture
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="PictureContainer"
            >
              <source
                media="(min-width: 600px)"
                srcSet="/images/Cryptoverse/mockups/Cryptoverse-Desktop-2.jpg"
              />
              <img
                src="/images/Cryptoverse/mockups/Cryptoverse-Mobile-2.jpg"
                alt="A mockup of a crypto application on an iPad"
              />
            </m.picture>
            <m.picture
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="PictureContainer"
            >
              <source
                media="(min-width: 600px)"
                srcSet="/images/Cryptoverse/mockups/Cryptoverse-Desktop-4.jpg"
              />
              <img
                src="/images/Cryptoverse/mockups/Cryptoverse-Mobile-4.jpg"
                alt="A mockup of a crypto application on an iPhone"
              />
            </m.picture>
            <m.picture
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="PictureContainer"
            >
              <source
                media="(min-width: 600px)"
                srcSet="/images/Cryptoverse/mockups/Cryptoverse-Desktop-5.jpg"
              />
              <img
                src="/images/Cryptoverse/mockups/Cryptoverse-Mobile-5.jpg"
                alt="A mockup of a crypto application on an HP laptop"
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

export default Cryptoverse;
