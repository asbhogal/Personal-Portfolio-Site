import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import ScrollToTop from "../components/ScrollToTop";
import oceanicaLogo from "/images/Oceanica/assets/Logo.svg";
import oceanicaColorPalette from "/images/Oceanica/assets/oceanicaColorPalette.svg";
import oceanicaTestimonialCard from "/images/Oceanica/assets/TestimonialCard.svg";
import oceanicaPackagesCard from "/images/Oceanica/assets/PackagesCard.svg";
import oceanicaMockups from "/images/Oceanica/mockups/OceanicaTemplates.png";
import oceanicaPrototypes from "/images/Oceanica/OceanicaPrototypes.png";

const OceanicaHero = () => {
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
          srcSet="/images/Oceanica/mockups/Oceanica-Desktop-1.jpg"
        />
        <img
          src="/images/Oceanica/mockups/Oceanica-Mobile-1.jpg"
          alt="An iPhone resting on a green platform in front of an archway with tall palm leaves in the backdrop"
        />
      </m.picture>
    </m.section>
  );
};

const OceanicaLinks = () => {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="ProjectLinks"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.figma.com/community/file/1190467806509137896/"
        className="ProjectButton"
      >
        templates
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/asbhogal/React-Oceanica-Responsive-Web-Page"
        className="ProjectButton"
      >
        code
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://oceanica.vercel.app/"
        className="ProjectButton"
      >
        site
      </a>
    </m.section>
  );
};

const OceanicaAbout = () => {
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
            Dec 2022 - Feb 2023
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
          id="SingleRowStacksAndTools"
          className="ProjectStacksAndTools"
        >
          {[
            ["Figma", "UI Prototyping", "Auto Layouts", "Components"],
            ["React", "JS", "Babel", "SASS", "Webpack", "Git", "Vercel"],
          ].map((toolGroup, groupIndex) => (
            <m.span
              key={groupIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              {toolGroup.map((tool, index) => (
                <m.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="StackToolLozenge"
                >
                  {tool}
                </m.span>
              ))}
            </m.span>
          ))}
        </m.div>
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectAboutContent"
        >
          Oceanica is a conceptualised company which offers luxury travel
          resorts and activities around the world. Logos, assets and responsive
          templates (for 5 breakpoints) were created using Figma, including
          prototypes to simulate a booking screen. A responsive Web page from
          these was then built using React with SCSS, Babel and JS, compiled as
          a production build using Webpack and then shipped using Vercel.
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
          Luxury and allure were key factors behind the message of this brand.
          The font used symbolises the nature of the sea and open waters; vast
          and spacious yet defined and affirmed, further reinforced by the semi
          bold and bold weightings, broad shoulders and wide leading. The logo
          of a wave is simplistic and therefore easily memorable; it&apos;s
          character parallels that of the typography leveraged and against the
          rich black backdrop rings true the message of style and class, with
          its elliptical nature replicating that of the shape of the Earth and
          the wave line flowing into the brand name. The background calligraphic
          words carry this theme throughout the page with its swashes leaning on
          an axis akin to the Earth&apos;s own orbit, as the user is enveloped
          in this magnetism during their journey.
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
            id="OceanicaTypeface"
          >
            manrope
          </m.span>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            id="OceanicaTypeface"
            className="TypefaceWeights"
          >
            <m.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Singular
            </m.span>
            <m.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              id="OceanicaTypeface"
              className="TypefaceWeightsList"
            >
              <li className="Weight-400">04 Regular &nbsp;⋅ </li>
              <li id="Weight-500">05 Medium &nbsp;⋅ </li>
              <li id="Weight-600">06 Semi Bold &nbsp;⋅</li>
              <li id="Weight-700">07 Bold</li>
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
          id="OceanicaAssetsAndBrandingContainer"
          className="ProjectAssetsAndBrandingContainer"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="AssetsAndBranding"
          >
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={oceanicaLogo}
              alt="The words 'Oceanica' with a wave-shaped half circle to the left of it"
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
              src={oceanicaTestimonialCard}
              alt="A testimonial card, with an image, placeholder text and name underneath"
            />
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={oceanicaPackagesCard}
              alt="A snapshot of a package offer, with an image, title, placeholder text and price"
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
              src={oceanicaColorPalette}
              alt="A color palette"
            />
          </m.div>
        </m.div>
      </m.section>
    </>
  );
};

const OceanicaMockups = () => {
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ProjectMockups"
      >
        <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Mockups
        </m.h2>
        <m.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src={oceanicaMockups}
          alt="5 templates of a website design"
        />
      </m.section>

      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ProjectPrototypes"
      >
        <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Prototypes
        </m.h2>
        <m.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src={oceanicaPrototypes}
          className="OceanicaPrototypes"
          alt="6 screens showing prototype interaction"
        />
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
            srcSet="/images/Oceanica/mockups/Oceanica-Desktop-2.jpg"
          />
          <img
            src="/images/Oceanica/mockups/Oceanica-Mobile-2.jpg"
            alt="A mockup of a website on a Macbook"
          />
        </m.picture>
        <m.picture
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="PictureContainer"
        >
          <source
            media="(min-width: 600px)"
            srcSet="/images/Oceanica/mockups/Oceanica-Desktop-3.jpg"
          />
          <img
            src="/images/Oceanica/mockups/Oceanica-Mobile-3.jpg"
            alt="A mockup of a website on an iPad"
          />
        </m.picture>
        <m.picture
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="PictureContainer"
        >
          <source
            media="(min-width: 600px)"
            srcSet="/images/Oceanica/mockups/Oceanica-Desktop-4.jpg"
          />
          <img
            src="/images/Oceanica/mockups/Oceanica-Mobile-4.jpg"
            alt="A mockup of a website on an iPhone"
          />
        </m.picture>
        <m.picture
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="PictureContainer"
        >
          <source
            media="(min-width: 600px)"
            srcSet="/images/Oceanica/mockups/Oceanica-Desktop-6.jpg"
          />
          <img
            src="/images/Oceanica/mockups/Oceanica-Mobile-6.jpg"
            alt="Different sections of a web page on four iPhone screens, laid side by side"
          />
        </m.picture>
      </m.section>
    </>
  );
};

const Oceanica = () => {
  useEffect(() => {
    document.title = "Oceanica | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <div className="Project">
          <OceanicaHero />
          <OceanicaLinks />
          <OceanicaAbout />
          <OceanicaMockups />
          <CTA />
        </div>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Oceanica;
