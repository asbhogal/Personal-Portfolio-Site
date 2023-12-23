/* import { Link } from "react-router-dom";
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
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="brand" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Brand-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/Brand-PortfolioPage-Mobile.jpg"
                  alt="A series of iPhones face down, with one faced-up and a website on its screen"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Brand
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                A conceptualised page created from a series of responsive
                wireframes in Figma. Built using React, SASS and Webpack.
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Figma
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Wireframing
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    UI Prototyping
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Auto Layout
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Components
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Babel
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    SASS
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    PostCSS
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Webpack
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/React-Brand-Responsive-Web-Page"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://brand-responsive-web-page.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/brand"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="oceanica" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Oceanica-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/Oceanica-PortfolioPage-Mobile.jpg"
                  alt="A MacBook next to a pool showing a website"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Oceanica
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                A conceptualised page created from a series of responsive
                wireframes in Figma. Built using React, SASS and Webpack.
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Figma
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Logo Creation
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Wireframing
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    UI Prototyping
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Auto Layout
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Components
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Masking
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Babel
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    SASS
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    PostCSS
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Webpack
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/React-Oceanica-Responsive-Web-Page"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://oceanica.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/oceanica"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="litelife" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/LiteLife-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/LiteLife-PortfolioPage-Mobile.jpg"
                  alt="An iPhone with an e-commerce site on the screen, next to some Airpods and a keyboard"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Lite Life
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                A fully-functioning, Single Page e-commerce application which
                sells a range of minimalist, high-end products. Built using
                React with Stripe, Material UI for styling and Webpack.
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React Hook Form
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React Router
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    DOMPurify
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Commerce.js (Headless CMS)
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    RESTful APIs
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    SPA
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Stripe
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Material UI
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Webpack
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/React-Tech-Commerce.Js-Site"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://litelife.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/litelife"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="cryptoverse" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Cryptoverse-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/Cryptoverse-PortfolioPage-Mobile.jpg"
                  alt="A Cryptocurrency application on an iPhone screen, lying next to a laptop keyboard"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Cryptoverse
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                A single page application which returns a range of
                crypto-related data, including currently top-trending
                currencies, market value, exchange rates and news. Built using
                Next.js with Redux RTK Query to handle multiple API calls
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Next.js
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Redux
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    RTK Query
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    RESTful APIs
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    State Management
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    SASS
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Webpack
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/Next.js-Cryptocurrency-App"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  target="_blank"
                  rel="noreferrer"
                  href="https://next-js-cryptocurrency-app.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/cryptoverse"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="calculator" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/Calculator-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/Calculator-PortfolioPage-Mobile.jpg"
                  alt="Two iPhones standing upright on a surface showing two different themes of a calculator app"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Calculator
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                A completely redesigned Calculator app from an initial Frontend
                Mentor brief, including three modern themes and the ability to
                view the previous operands.
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    useReducer
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Custom Hooks
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Chakra UI
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Test Driven Development
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React Testing Library
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Jest
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vite
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/React-Calculator"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://react-calculator-asbhogal.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/calculator"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="ledimanche" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/LeDimanche-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/LeDimanche-PortfolioPage-Mobile.jpg"
                  alt="A screenshot of a luxury shopping site on a Macbook"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Le Dimanche
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                An exclusive e-commerce store providing a gateway to a world of
                opulent indulgence designed to enhance customer weekend retreats
                by combining luxury with leisure. Built using TypeScript with
                React, custom hooks and context, local storage, chakra UI and
                Vite.
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    TypeScript
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    useReducer
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Custom Hooks
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Chakra UI
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Local Storage API
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    ES Lint
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vite
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/TypeScript-Shopping-Cart"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://typescript-ecommerce-shop.vercel.app/shop"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/ledimanche"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ProjectSectionBox"
          >
            <Link to="fyrremagazine" className="ProjectSectionLink">
              <picture className="PictureContainer">
                <m.source
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  media="(min-width: 600px)"
                  srcSet="/images/Portfolio/FyrreMagazine-PortfolioPage-Desktop.jpg"
                />
                <m.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  src="/images/Portfolio/FyrreMagazine-PortfolioPage-Mobile.jpg"
                  alt="An iPhone standing upright on an elevated concrete platform with showing a magazine site on the display. The title 'Art & Life' is seen in bold uppercase on the screen"
                />
              </picture>
            </Link>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ProjectBoxContent"
            >
              <m.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentTitle"
              >
                Fyrre Magazine
              </m.h3>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentText"
              >
                A bold, striking SPA arts and life-focused magazine website
                developed from Figma designs using Next.js, TypeScript React
                Server Components, Shadcn, Tailwind CSS, GSAP and E2E testing
                with Playwright.
              </m.p>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxContentListContainer"
              >
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Next.js
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React Server Components
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    TypeScript
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    SPA
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Shadcn
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Tailwind CSS
                  </m.li>
                </m.ul>
                <m.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="ProjectBoxContentList"
                >
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    React Suspense
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    GSAP
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    E2E Testing
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Playwright
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Git
                  </m.li>
                  <m.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    Vercel
                  </m.li>
                </m.ul>
              </m.div>
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectBoxLinks"
              >
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/asbhogal/Fyrre-Magazine"
                  className="ProjectButton"
                >
                  CODE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://fyrremagazine.vercel.app/"
                  className="ProjectButton"
                >
                  SITE
                </m.a>
                <m.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  target="_blank"
                  rel="noreferrer"
                  href="/portfolio/fyrremagazine"
                  className="ProjectButton"
                >
                  VIEW MORE
                </m.a>
              </m.div>
            </m.div>
          </m.div>
        </m.section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Projects;
 */
