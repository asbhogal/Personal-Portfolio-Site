import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";

import { motion as m } from "framer-motion";
import ScrollToTop from "./ScrollToTop";

const AdditionalServices = () => {
  useEffect(() => {
    document.title = "Additional Services | Aman Singh Bhogal";
  });

  return (
    <>
      <Header />

      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="AdditionalServicesCover"
      >
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="PageHeaderTitle"
        >
          additional services
        </m.h1>
      </m.section>

      <m.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="AdditionalServicesSection"
      >
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="AdditionalServicesContent"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="WordPressDesignSection"
          >
            <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              WordPress Design
            </m.h2>
            <m.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="WordPressDesignList"
            >
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Elementor Pro
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Astra Pro
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Gutenberg
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Custom Theme Changes
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Additional CSS
              </m.li>
            </m.ul>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="WordPressDevelopmentSection"
          >
            <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              WordPress Development
            </m.h2>
            <m.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="WordPressDesignList"
            >
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                WooCommerce
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Child Themes
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Site Optimisation
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Core File Changes
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Staging & Development Environments
              </m.li>
            </m.ul>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="WebHostingManagementSection"
          >
            <m.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              Web Hosting, Security & Optimisation
            </m.h2>
            <m.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="WebHostingList"
            >
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WebHostingListItem"
              >
                DNS Records & Domain Management
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Site Migration
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Security Headers
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                SSL & TLS
              </m.li>
              <m.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="WordPressDesignListItem"
              >
                Hotlink Protection
              </m.li>
            </m.ul>
          </m.div>
        </m.div>
        <m.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          Please enquire for further information and prices
        </m.h3>
      </m.section>

      <Footer />

      <ScrollToTop />
    </>
  );
};

export default AdditionalServices;
