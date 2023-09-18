import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
/* import cryptoverseHeroImg from "/images/Cryptoverse/mockups/CryptoverseHeroImg.jpg";
import cryptoverseiMacImage from "/images/Cryptoverse/mockups/iMacMockup.jpg";
import cryptoverseHPImage from "/images/Cryptoverse/mockups/HPMockup.jpg";
import cryptoverseiPadImages from "/images/Cryptoverse/mockups/iPadMockups.jpg";
import cryptoverseiPhoneImage from "/images/Cryptoverse/mockups/iPhoneMockup. */
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";

const Calculator = () => {
  useEffect(() => {
    document.title = "Calculator | Aman Singh Bhogal";
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
                srcSet="/images/Calculator/Calculator-Desktop-1.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-1.jpg"
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
              href="https://github.com/asbhogal/React-Calculator"
              className="ProjectButton"
            >
              code
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.frontendmentor.io/solutions/react-calculator-usereducer-chakra-ui-tdd-LKGyEpFp7Y"
              className="ProjectButton"
            >
              challenge
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://react-calculator-asbhogal.vercel.app/"
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
              This project was a Frontend Mentor challenge which required
              creating a fully functional Calculator app with three themes and
              the ability to toggle between them from a brief and style guide.
              The following changes were subsequently made to improve the
              aesthetics, accessibility and UX of the app:
              <ul>
                <li>
                  A redesigned UI complete with a light, dark and blue
                  monochromatic theme and modern typeface
                </li>
                <li>
                  ChakraUI to handle the accessibility and styling of components
                  (Chakra UI has been used to style the components, with custom
                  component variants used to couple the styling with the JSX
                  markup and theme extensions)
                </li>
                <li>
                  The ability to see the previous operands, as well as the
                  current
                </li>
              </ul>
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
              The decision was made to change the original design brief to
              reflect something more contemporary. The Inter typeface was chosen
              (weights 400, 500, 700) for a clear, clean, modern and affirmed
              typography with accentuated x-heights for improved readability
              with mixed-case and lower-case text. The three themes therefore
              chosen instead also aligned with modern-day styling: a
              conventional light (white) version, dark (black) version and blue
              version, each following a monochromatic-set of shades for visual
              consistency. Blue was chosen as the third and final theme for its
              medium between the two, harmonious and muted.
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
                id="CalculatorTypeface"
              >
                Inter
              </m.span>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                id="CalculatorTypeface"
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
                  <li id="Calculator-Weight-400">04 Regular</li>⋅
                  <li id="Calculator-Weight-500">05 Medium</li>⋅
                  <li id="Calculator-Weight-700">07 Bold</li>
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
                srcSet="/images/Calculator/Calculator-Desktop-2.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-2.jpg"
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
                srcSet="/images/Calculator/Calculator-Desktop-3.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-3.jpg"
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
                srcSet="/images/Calculator/Calculator-Desktop-4.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-4.jpg"
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
                srcSet="/images/Calculator/Calculator-Desktop-5.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-5.jpg"
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
                srcSet="/images/Calculator/Calculator-Desktop-6.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-6.jpg"
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
                srcSet="/images/Calculator/Calculator-Desktop-7.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-7.jpg"
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
                srcSet="/images/Calculator/Calculator-Desktop-8.jpg"
              />
              <img
                src="/images/Calculator/Calculator-Mobile-8.jpg"
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

export default Calculator;
