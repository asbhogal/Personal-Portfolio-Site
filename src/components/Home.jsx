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
import liteLifeWhiteLogo from "../assets/images/logos/LiteLife-Logo-White.svg";
import brandScreen from "../assets/images/Home/BrandScreen.jpg";
import liteLifeScreen from "../assets/images/Home/LiteLifeScreen.jpg";
import oceanicaScreen from "../assets/images/Home/OceanicaScreen.jpg";
import cryptoverseScreen from "../assets/images/Home/CryptoverseScreen.jpg";
import CTA from "./CTA";
import SkillLozenge from "./SkillLozenge";
import CodeIcon from "./CodeIcon";
import Arrow from "./Arrow";
import PaintIcon from "./PaintIcon";
import RulerIcon from "./RulerIcon";
import SpeedIcon from "./SpeedIcon";

const Home = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        document.title = 'Aman Singh Bhogal | Front End Developer & UI Engineer';
        
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

            <m.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="HomePageSection">
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
                    <img src={ liteLifeWhiteLogo } />
                </div>
            </m.section>

            <m.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="SkillsOffered">
                <div className="SkillBox">
                    <div className="SkillBoxTopRow">
                        <p>Logos & Branding</p>
                        <PaintIcon />
                    </div>
                    <p>Developing strong, consistent and recognisable branding which evokes emotions.</p>
                </div>
                <div className="SkillBox">
                <div className="SkillBoxTopRow">
                        <p>Web Design</p>
                        <RulerIcon />
                    </div>
                    <p>Designing high fidelity, responsive mockups from sketches/wireframes and existing branding, with prototyping</p>
                </div>
                <div className="SkillBox">
                    <div className="SkillBoxTopRow">
                        <p>Web Development</p>
                        <CodeIcon />
                    </div>
                    <p>Developing modern, front-end applications and websites from scratch or existing templates using React, Next.js, SASS and Webpack</p>
                </div>
                <div className="SkillBox">
                    <div className="SkillBoxTopRow">
                        <p>Site Optimisation</p>
                        <SpeedIcon />
                    </div>
                    <p>Optimising website builds across performance, accessibility, SEO and stability</p>
                </div>
            </m.section>

            <m.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="ProjectScreens">
                <div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="HomePageSectionBar">
                    <h2>Selected Work</h2>
                    <Link to="projects" className="AllProjectsLink">
                        <Arrow />
                    </Link>
                </div>
                <Link
                    className="ProjectLink" to="/projects/brand">
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
            </m.section>

            <CTA />
            
            <Footer />

            { showButton && (
                <m.button 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </m.button>
            ) }

        </>
    )
}

export default Home;