import { useState, useEffect } from "react";

import "../scss/index.scss";
import Navbar from "./Header";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
import brandLogo from "../assets/images/logos/brand-logo-white.svg";
import cryptoverseLogo from "../assets/images/logos/Cryptoverse-Logo.svg";
import oceanicaLogo from "../assets/images/logos/Oceanica-Logo.svg";
import metaversusLogo from "../assets/images/logos/Metaversus-Logo.svg";
import kryptoLogo from "../assets/images/logos/Krypto-Logo.svg";
import liteLifeLogo from "../assets/images/logos/LiteLife-Logo.svg";
import brandScreen from "../assets/images/Home/BrandScreen.jpg";
import liteLifeScreen from "../assets/images/Home/LiteLifeScreen.jpg";
import oceanicaScreen from "../assets/images/Home/OceanicaScreen.jpg";
import cryptoverseScreen from "../assets/images/Home/CryptoverseScreen.jpg";
import metaverseScreen from "../assets/images/Home/MetaverseScreen.png";
import CTA from "./CTA";
import SkillLozenge from "./SkillLozenge";
import CodeIcon from "./CodeIcon";
import Arrow from "./Arrow";

const Home = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behaviour: "smooth"
        });
    };

    return (
        <>
            <Navbar />
            <section className="HomePageSection">
                <h1 className="MainHomeTitle">
                    Creating <span className="HeadlineAccent">bold</span>, 
                    <span className="HeadlineAccent"> elegant </span> &#38;
                    <span className="HeadlineAccent"> humanistic </span>
                    interfaces 
                    <br /> 
                    <span className="HeadlineYear">- est. 2020-</span>
                </h1>
                <div className="HomePageProjectLogos">
                    <img src={ brandLogo } />
                    <img src={ oceanicaLogo } />
                    <img src={ cryptoverseLogo } />
                    <img src={ metaversusLogo } />
                    <img src={ liteLifeLogo } />
                </div>
            </section>

            <section className="SkillsOffered">
                <div className="SkillBox">
                    <div className="SkillBoxTopRow">
                        <p>Logo & Branding</p>
                        <CodeIcon />
                    </div>
                    <p>Abstract insofar truth moral pinnacle. Ubermensch inexpedient war dead play gains derive dead horror victorious love war. Zarathustra law.</p>
                </div>
                <div className="SkillBox">
                <div className="SkillBoxTopRow">
                        <p>Web Design</p>
                        <CodeIcon />
                    </div>
                    <p>Abstract insofar truth moral pinnacle. Ubermensch inexpedient war dead play gains derive dead horror victorious love war. Zarathustra law.</p>
                </div>
                <div className="SkillBox">
                    <div className="SkillBoxTopRow">
                        <p>Web Development</p>
                        <CodeIcon />
                    </div>
                    <p>Abstract insofar truth moral pinnacle. Ubermensch inexpedient war dead play gains derive dead horror victorious love war. Zarathustra law.</p>
                </div>
                <div className="SkillBox">
                    <div className="SkillBoxTopRow">
                        <p>Site Optimisation</p>
                        <CodeIcon />
                    </div>
                    <p>Abstract insofar truth moral pinnacle. Ubermensch inexpedient war dead play gains derive dead horror victorious love war. Zarathustra law.</p>
                </div>
            </section>

            <section className="ProjectScreens">
                <div className="HomePageSectionBar">
                    <h2>Selected Work</h2>
                    <Arrow />
                </div>
                <Link className="ProjectLink" to="/projects/brand">
                    <SkillLozenge />
                    <img src={ brandScreen } />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>
                <Link className="ProjectLink" to="/projects/litelife">
                    <SkillLozenge />
                    <img src={ liteLifeScreen } />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>
                <Link className="ProjectLink" to="/projects/oceanica">
                    <SkillLozenge />
                    <img src={ oceanicaScreen } />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>
                <Link className="ProjectLink" to="/projects/cryptoverse">
                    <SkillLozenge />
                    <img src={ cryptoverseScreen } />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>
            </section>

            <CTA />
            
            <Footer />

            { showButton && (
                <button onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </button>
            ) }

        </>
    )
}

export default Home;