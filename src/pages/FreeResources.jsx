import Header from "../components/Header";
import Footer from "../components/Footer";
import "../scss/index.scss";

import brandBoardCover from "/images/brand-board-template-cover.jpg";
import responsiveWireframesCover from "/images/responsive-wireframes-cover.jpg";

import { useEffect } from "react";
import { motion as m } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const FreeResources = () => {
  useEffect(() => {
    document.title = "Free Resources | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />
      <main className="MainContainer">
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="FreeResourcesCover"
        >
          <m.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="PageHeaderTitle"
          >
            free resources
          </m.h1>
        </m.section>

        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="FreeResourcesSection"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ResourcesCard"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ResourcesSnapshot"
            >
              <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ImageSnapshot"
                src={responsiveWireframesCover}
                alt="A close up screenshot of some website templates"
              />
            </m.div>
            <m.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ResponsiveWireframesHeading2 ResourcesTitle"
            >
              Responsive Wireframes
            </m.h2>
            <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              A set of responsive wireframes for a typical company home page to
              demonstrate Figma&apos;s auto layout capabilities across five
              common screen breakpoints (1440px+, 1440px, 1024px, 744px, 375px).
              Please note that these are for demonstrative purposes and
              user-centred research should always be carried out prior.
            </m.p>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ResourceLinks"
            >
              <m.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ResourceDownload"
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/community/file/1189223658475172983"
              >
                download
              </m.a>
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ResourcesCard"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ResourcesSnapshot"
            >
              <m.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ImageSnapshot"
                src={brandBoardCover}
                alt="A close up of a brand board template screenshot"
              />
            </m.div>
            <m.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="BrandBoardHeading2 ResourcesTitle"
            >
              Brand Board Template
            </m.h2>
            <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              A brand board template to help with company brand strategies,
              complete with a logo and alt logo section, nude color palette
              example, mood board section, brand concept section and typography
              set example. Please note these are for demonstrative purposes and
              user-centred research should always be carried out prior.
            </m.p>
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="ResourceLinks"
            >
              <m.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ResourceDownload"
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/community/file/1192459698727174432"
              >
                download
              </m.a>
            </m.div>
          </m.div>
        </m.section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default FreeResources;
