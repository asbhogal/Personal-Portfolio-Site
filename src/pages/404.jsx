/* import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const errorPage = () => {
  return (
    <>
      <Header />
      <main className="MainContainer">
        <m.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="ErrorPage"
        >
          <h1 className="PageHeaderTitle">404</h1>
          <div className="ErrorPageContainer">
            <h2>The Page you&apos;re looking for does not exist</h2>
            <p>Click below to return home</p>
            <Link to="/" className="ReturnHomeButton">
              home
            </Link>
          </div>
        </m.section>
      </main>
      <Footer />
    </>
  );
};

export default errorPage;
 */
