import { useEffect } from "react";

import "../scss/index.scss";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
/* import brandScreen from "/images/Home/BrandScreen.jpg";
import liteLifeScreen from "/images/Home/LiteLifeScreen.jpg";
import oceanicaScreen from "/images/Home/OceanicaScreen.jpg";
import cryptoverseScreen from "/images/Home/CryptoverseScreen.jpg"; */
import CSSWinnerBadge from "/images/star-white2.png";
import FrontendMentorBadge from "/images/FrontendMentorBadge.png";
import CTA from "../components/CTA";
import SkillLozenge from "../components/SkillLozenge";
import CodeIcon from "../components/CodeIcon";
import Arrow from "../components/Arrow";
import PaintIcon from "../components/PaintIcon";
import RulerIcon from "../components/RulerIcon";
import SpeedIcon from "../components/SpeedIcon";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  useEffect(() => {
    document.title =
      "Aman Singh Bhogal | Award-Winning Creative Front End Developer";
  });

  return (
    <>
      <Navbar />
      <main className="MainContainer">
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="HomePageSection"
        >
          <m.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="MainHomeTitle"
          >
            Creating <span className="HeadlineAccent">bold</span>,
            <span className="HeadlineAccent"> elegant </span> &#38;
            <span className="HeadlineAccent"> humanistic </span>
            interfaces
            <br />
            <span className="HeadlineYear">- est. 2020-</span>
          </m.h1>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="AwardsSection"
          >
            <m.a
              target="_blank"
              aria-label="Visit the CSSWinner portfolio page"
              rel="noopener noreferrer"
              href="https://www.csswinner.com/details/personal-portfolio/17436"
            >
              <img
                className="CSSWinnerBadge"
                src={CSSWinnerBadge}
                alt="CSSWinner Logo"
              />
            </m.a>
            <m.a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the Frontend Mentor LinkedIn post"
              href="https://www.linkedin.com/posts/frontend-mentor_using-our-challenges-as-a-guide-but-adding-activity-7092496519299219456-5B_C?utm_source=share&utm_medium=member_desktop"
            >
              <img
                className="FrontendMentorBadge"
                src={FrontendMentorBadge}
                alt="Frontend Mentor logo with the words 'As Featured By' above it"
              />
            </m.a>
          </m.div>
        </m.section>

        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="SkillsOffered"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="SkillBox"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="SkillBoxTopRow"
            >
              <p>Logos & Branding</p>
              <PaintIcon />
            </m.div>
            <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Developing strong, consistent and recognisable branding which
              evokes emotions through visualisations and mood boards.
            </m.p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="SkillBox"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="SkillBoxTopRow"
            >
              <p>Web Design</p>
              <RulerIcon />
            </m.div>
            <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Designing high fidelity, responsive and interactive mockups from
              sketches/wireframes and existing branding using Figma and Adobe CC
            </m.p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="SkillBox"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="SkillBoxTopRow"
            >
              <p>Web Development</p>
              <CodeIcon />
            </m.div>
            <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Developing modern, front-end applications and websites from
              scratch or existing mockups using React, Next.js, SASS and Webpack
            </m.p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="SkillBox"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="SkillBoxTopRow"
            >
              <p>Site Optimisation</p>
              <SpeedIcon />
            </m.div>
            <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Optimising React and WordPress website builds across performance,
              accessibility, SEO and stability
            </m.p>
          </m.div>
        </m.section>

        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectScreens"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="HomePageSectionBar"
          >
            <h2>Selected Work</h2>
            <Link to="portfolio" className="AllProjectsLink">
              <Arrow size={40} />
            </Link>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectsContainer"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBox"
            >
              <Link className="ProjectLink" to="/portfolio/brand">
                <SkillLozenge />
                <picture className="PictureContainer">
                  <source
                    media="(min-width: 600px)"
                    srcSet="/images/Home/Brand-HomePage-Desktop.jpg"
                  />
                  <img
                    src="/images/Home/Brand-HomePage-Mobile.jpg"
                    alt="An iPhone resting on a concrete surface at an angle, with a website on the screen"
                  />
                </picture>
                {/* <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={brandScreen}
              alt="An iPhone resting on a concrete surface at an angle, with a website on the screen"
            /> */}
                {/* <div className="LinkOverlay">
              <Arrow />
            </div> */}
              </Link>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectTitle HomePageProjectTitle"
              >
                <h3>Brand</h3>
                <Link to="projects/brand" className="HomePageProjectLinks">
                  <Arrow size={30} />
                </Link>
              </m.div>
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBox"
            >
              <Link className="ProjectLink" to="/portfolio/litelife">
                <SkillLozenge />
                <picture className="PictureContainer">
                  <source
                    media="(min-width: 600px)"
                    srcSet="/images/Home/LiteLife-HomePage-Desktop.jpg"
                  />
                  <img
                    src="/images/Home/LiteLife-HomePage-Mobile.jpg"
                    alt="A close up of an iPhone and Airpods with a website open on the screen"
                  />
                </picture>
                {/* <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src={liteLifeScreen}
              alt="A close up of an iPhone and Airpods with a website open on the screen"
            />
            <div className="LinkOverlay">
              <Arrow />
            </div> */}
              </Link>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectTitle HomePageProjectTitle"
              >
                <h3>Lite Life</h3>
                <Link to="projects/litelife" className="HomePageProjectLinks">
                  <Arrow size={30} />
                </Link>
              </m.div>
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBox"
            >
              <Link className="ProjectLink" to="/portfolio/oceanica">
                <SkillLozenge />
                <picture className="PictureContainer">
                  <source
                    media="(min-width: 600px)"
                    srcSet="/images/Home/Oceanica-HomePage-Desktop.jpg"
                  />
                  <img
                    src="/images/Home/Oceanica-HomePage-Mobile.jpg"
                    alt="A Macbook with a website open on the screen, resting on a concrete surface next to a pool"
                  />
                </picture>
              </Link>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectTitle HomePageProjectTitle"
              >
                <h3>Oceanica</h3>
                <Link to="projects/oceanica" className="HomePageProjectLinks">
                  <Arrow size={30} />
                </Link>
              </m.div>
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBox"
            >
              <Link className="ProjectLink" to="/portfolio/cryptoverse">
                <SkillLozenge />
                <picture className="PictureContainer">
                  <source
                    media="(min-width: 600px)"
                    srcSet="/images/Home/Cryptoverse-HomePage-Desktop.jpg"
                  />
                  <img
                    src="/images/Home/Cryptoverse-HomePage-Mobile.jpg"
                    alt="An iMac with a Crypo-related application on the screen, against a black backdrop"
                  />
                </picture>
              </Link>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectTitle HomePageProjectTitle"
              >
                <h3>Cryptoverse</h3>
                <Link
                  to="projects/cryptoverse"
                  className="HomePageProjectLinks"
                >
                  <Arrow size={30} />
                </Link>
              </m.div>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBox"
            >
              <Link className="ProjectLink" to="/portfolio/calculator">
                <SkillLozenge />
                <picture className="PictureContainer">
                  <source
                    media="(min-width: 600px)"
                    srcSet="/images/Home/Calculator-HomePage-Desktop.jpg"
                  />
                  <img
                    src="/images/Home/Calculator-HomePage-Mobile.jpg"
                    alt="A Macbook with a website open on the screen, resting on a concrete surface next to a pool"
                  />
                </picture>
              </Link>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectTitle HomePageProjectTitle"
              >
                <h3>Calculator</h3>
                <Link to="projects/calculator" className="HomePageProjectLinks">
                  <Arrow size={30} />
                </Link>
              </m.div>
            </m.div>

            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBox"
            >
              <Link className="ProjectLink" to="/portfolio/ledimanche">
                <SkillLozenge />
                <picture className="PictureContainer">
                  <source
                    media="(min-width: 600px)"
                    srcSet="/images/Home/LeDimanche-HomePage-Desktop.jpg"
                  />
                  <img
                    src="/images/Home/LeDimanche-HomePage-Mobile.jpg"
                    alt="A Macbook with a website open on the screen, resting on a concrete surface next to a pool"
                  />
                </picture>
              </Link>

              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectTitle HomePageProjectTitle"
              >
                <h3>Le Dimanche</h3>
                <Link to="projects/ledimanche" className="HomePageProjectLinks">
                  <Arrow size={30} />
                </Link>
              </m.div>
            </m.div>
          </m.div>
        </m.section>

        <CTA />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Home;
