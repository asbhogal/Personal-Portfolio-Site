import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
            <Link to="brand" className="ProjectSectionLink">
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
            <Link to="oceanica" className="ProjectSectionLink">
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
            <Link to="litelife" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/LiteLife-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/LiteLife-PortfolioPage-Mobile.jpg"
                  alt="An iPhone with an e-commerce site on the screen, next to some Airpods and a keyboard"
                />
              </picture>
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
            <Link to="cryptoverse" className="ProjectSectionLink">
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
                  href="https://github.com/asbhogal/Next.js-Cryptocurrency-App"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://next-js-cryptocurrency-app.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/cryptoverse"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
          <div className="ProjectSectionBox">
            <Link to="calculator" className="ProjectSectionLink">
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
                  href="https://github.com/asbhogal/React-Calculator"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-calculator-asbhogal.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/calculator"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
          <div className="ProjectSectionBox">
            <Link to="ledimanche" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <source
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/LeDimanche-PortfolioPage-Desktop.jpg"
                />
                <img
                  src="/images/Portfolio/LeDimanche-PortfolioPage-Mobile.jpg"
                  alt="A screenshot of a luxury shopping site on a Macbook"
                />
              </picture>
            </Link>
            <div className="ProjectBoxContent">
              <h3 className="ProjectBoxContentTitle">Le Dimanche</h3>
              <p className="ProjectBoxContentText">
                An e-commerce application which sells a range of high-end luxury
                products, ranging from toiletries to electronics
              </p>
              <div className="ProjectBoxContentListContainer">
                <ul className="ProjectBoxContentList">
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>useReducer</li>
                  <li>Custom Hooks</li>
                  <li>Chakra UI</li>
                </ul>
                <ul className="ProjectBoxContentList">
                  <li>ES Lint</li>
                  <li>Vite</li>
                  <li>Git</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="ProjectBoxLinks">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/TypeScript-Shopping-Cart"
                  className="ProjectButton"
                >
                  CODE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://typescript-ecommerce-shop.vercel.app/shop"
                  className="ProjectButton"
                >
                  SITE
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/ledimanche"
                  className="ProjectButton"
                >
                  VIEW MORE
                </a>
              </div>
            </div>
          </div>
        </m.section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Projects;
