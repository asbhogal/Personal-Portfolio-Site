import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion as m } from "framer-motion";

import Footer from "../components/Footer";
import Header from "../components/Header";
/* import brandProjectCoverLink from "/images/ProjectCovers/iPhone B07.jpg";
 */ /* import liteLifeProjectCoverLink from "/images/ProjectCovers/LiteLife.jpg";
import oceanicaProjectCoverLink from "/images/ProjectCovers/Oceanica.jpg";
import cryptoverseProjectCoverLink from "/images/ProjectCovers/Cryptoverse.jpg"; */
/* import brandLogoBlack from "/images/logos/brand-logo-black.svg";*/
/* import oceanicaLogo from "/images/logos/Oceanica-Logo.svg";
import liteLifeLogo from "/images/logos/LiteLife-Logo.svg";
import cryptoverseLogo from "/images/logos/Cryptoverse-Logo.svg"; */
import ScrollToTop from "../components/ScrollToTop";

const Projects = () => {
  useEffect(() => {
    document.title = "Portfolio | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ProjectsTitle"
        >
          <m.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            Portfolio
          </m.h1>
        </m.section>

        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="Projects"
        >
          <div className="ProjectSectionBox">
            <Link
              to="brand"
              id="BrandProjectSectionLink"
              className="ProjectSectionLink"
            >
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Brand-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/Brand-PortfolioPage-Mobile.jpg"
                  alt="A series of iPhones face down, with one faced-up and a website on its screen"
                />
              </picture>
              {/* <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectImage"
                src={brandProjectCoverLink}
                alt="A series of iPhones face down, with one faced-up and a website on its screen"
              /> */}
              {/* <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                <img className="ProjectLogo" src={brandLogoBlack} />
                <span>
                  Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack |
                  Vercel
                </span>
              </div> */}
            </Link>
            <div className="ProjectBoxContent">
              <h3 className="ProjectBoxContentTitle">Brand</h3>
              <p className="ProjectBoxContentText">
                A conceptualised page created from a series of responsive
                wireframes in Figma. Built using React, SASS and Webpack.
              </p>
              <div className="ProjectBoxContentListContainer">
                <ul className="ProjectBoxContentList">
                  <li>Figma</li>
                  <li>Wireframing</li>
                  <li>UI Prototyping</li>
                  <li>Auto Layout</li>
                  <li>Components</li>
                </ul>
                <ul className="ProjectBoxContentList">
                  <li>React</li>
                  <li>Babel</li>
                  <li>SASS</li>
                  <li>PostCSS</li>
                  <li>Webpack</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="ProjectBoxLinks">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className="ProjectSectionBox">
            <Link
              to="brand"
              id="BrandProjectSectionLink"
              className="ProjectSectionLink"
            >
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Oceanica-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/Oceanica-PortfolioPage-Mobile.jpg"
                  alt="A MacBook next to a pool showing a website"
                />
              </picture>
              {/* <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectImage"
                src={brandProjectCoverLink}
                alt="A series of iPhones face down, with one faced-up and a website on the screen"
              /> */}
              {/* <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                <img className="ProjectLogo" src={brandLogoBlack} />
                <span>
                  Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack |
                  Vercel
                </span>
              </div> */}
            </Link>
            <div className="ProjectBoxContent">
              <h3 className="ProjectBoxContentTitle">Oceanica</h3>
              <p className="ProjectBoxContentText">
                A conceptualised page created from a series of responsive
                wireframes in Figma. Built using React, SASS and Webpack.
              </p>
              <div className="ProjectBoxContentListContainer">
                <ul className="ProjectBoxContentList">
                  <li>Figma</li>
                  <li>Wireframing</li>
                  <li>UI Prototyping</li>
                  <li>Auto Layout</li>
                  <li>Components</li>
                  <li>Masking</li>
                </ul>
                <ul className="ProjectBoxContentList">
                  <li>React</li>
                  <li>Babel</li>
                  <li>SASS</li>
                  <li>PostCSS</li>
                  <li>Webpack</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="ProjectBoxLinks">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className="ProjectSectionBox">
            <Link
              to="brand"
              id="BrandProjectSectionLink"
              className="ProjectSectionLink"
            >
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/LiteLife-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/LiteLife-PortfolioPage-Mobile.jpg"
                  alt="A Samsung phone showing a product from an e-commerce site"
                />
              </picture>
              {/* <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectImage"
                src={brandProjectCoverLink}
                alt="A series of iPhones face down, with one faced-up and a website on the screen"
              /> */}
              {/* <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                <img className="ProjectLogo" src={brandLogoBlack} />
                <span>
                  Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack |
                  Vercel
                </span>
              </div> */}
            </Link>
            <div className="ProjectBoxContent">
              <h3 className="ProjectBoxContentTitle">Lite Life</h3>
              <p className="ProjectBoxContentText">
                A fully-functioning, Single Page e-commerce application which
                sells a range of minimalist, high-end products. Built using
                React with Stripe, Material UI for styling and Webpack.
              </p>
              <div className="ProjectBoxContentListContainer">
                <ul className="ProjectBoxContentList">
                  <li>React</li>
                  <li>React Hook Form</li>
                  <li>React Router</li>
                  <li>React Hook Form</li>
                  <li>Commerce.js (Headless CMS)</li>
                  <li>RESTful APIs</li>
                </ul>
                <ul className="ProjectBoxContentList">
                  <li>SPA</li>
                  <li>Stripe</li>
                  <li>Material UI</li>
                  <li>Webpack</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="ProjectBoxLinks">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className="ProjectSectionBox">
            <Link
              to="brand"
              id="BrandProjectSectionLink"
              className="ProjectSectionLink"
            >
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Cryptoverse-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/Cryptoverse-PortfolioPage-Mobile.jpg"
                  alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
                />
              </picture>
              {/* <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectImage"
                src={brandProjectCoverLink}
                alt="A series of iPhones face down, with one faced-up and a website on the screen"
              /> */}
              {/* <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                <img className="ProjectLogo" src={brandLogoBlack} />
                <span>
                  Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack |
                  Vercel
                </span>
              </div> */}
            </Link>
            <div className="ProjectBoxContent">
              <h3 className="ProjectBoxContentTitle">Cryptoverse</h3>
              <p className="ProjectBoxContentText">
                A single page application which returns a range of
                crypto-related data, including currently top-trending
                currencies, market value, exchange rates and news. Built using
                Next.js with Redux RTK Query to handle multiple API calls
              </p>
              <div className="ProjectBoxContentListContainer">
                <ul className="ProjectBoxContentList">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>RTK Query</li>
                  <li>RESTful APIs</li>
                </ul>
                <ul className="ProjectBoxContentList">
                  <li>State Management</li>
                  <li>SASS</li>
                  <li>Webpack</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="ProjectBoxLinks">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          <div className="ProjectSectionBox">
            <Link
              to="brand"
              id="BrandProjectSectionLink"
              className="ProjectSectionLink"
            >
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Calculator-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/Calculator-PortfolioPage-Mobile.jpg"
                  alt="Two iPhones standing upright on a surface showing two different themes of a calculator app"
                />
              </picture>
              {/* <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectImage"
                src={brandProjectCoverLink}
                alt="A series of iPhones face down, with one faced-up and a website on the screen"
              /> */}
              {/* <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                <img className="ProjectLogo" src={brandLogoBlack} />
                <span>
                  Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack |
                  Vercel
                </span>
              </div> */}
            </Link>
            <div className="ProjectBoxContent">
              <h3 className="ProjectBoxContentTitle">Calculator</h3>
              <p className="ProjectBoxContentText">
                A completely redesigned Calculator app from an initial brief,
                including three modern themes
              </p>
              <div className="ProjectBoxContentListContainer">
                <ul className="ProjectBoxContentList">
                  <li>React</li>
                  <li>useReducer</li>
                  <li>Custom Hooks</li>
                  <li>Chakra UI</li>
                  <li>Test Driven Development</li>
                </ul>
                <ul className="ProjectBoxContentList">
                  <li>React Testing Library</li>
                  <li>Jest</li>
                  <li>Vite</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="ProjectBoxLinks">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/community/file/1190467806509137896/"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>

          {/* <Link
            to="litelife"
            id="LiteLifeProjectSectionLink"
            className="ProjectSectionLink"
          >
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectImage"
              src={liteLifeProjectCoverLink}
              alt="An iPhone with a website screen on, next to some Airpods and a keyboard"
            />
            <div id="LiteLifeProjectLinkOverlay" className="ProjectLinkOverlay">
              <img className="ProjectLogo" src={liteLifeLogo} />
              <span>
                React | JS | Babel | Material UI | Commerce.js | APIs | Stripe |
                Webpack | Vercel
              </span>
            </div>
          </Link>
          <Link
            to="oceanica"
            id="OceanicaProjectSectionLink"
            className="ProjectSectionLink"
          >
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectImage"
              src={oceanicaProjectCoverLink}
              alt="A laptop with a website on the screen, next to a pool on a concrete surface"
            />
            <div id="OceanicaProjectLinkOverlay" className="ProjectLinkOverlay">
              <img className="ProjectLogo" src={oceanicaLogo} />
              <span>Figma | Auto Layouts | Components | UI Prototyping</span>
              <span>
                React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel
              </span>
            </div>
          </Link>
          <Link
            to="cryptoverse"
            id="CryptoverseProjectSectionLink"
            className="ProjectSectionLink"
          >
            <m.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectImage"
              src={cryptoverseProjectCoverLink}
              alt="A Macbook with an application open on the screen, against a dark blue background"
            />
            <div
              id="CryptoverseProjectLinkOverlay"
              className="ProjectLinkOverlay"
            >
              <img className="ProjectLogo" src={cryptoverseLogo} />
              <span>Next | React | Redux | JS | SASS | Webpack | Vercel</span>
            </div>
          </Link> */}
        </m.section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Projects;
