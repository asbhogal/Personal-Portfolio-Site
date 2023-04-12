import { useState, useEffect } from "react";

import "../scss/index.scss";
import Navbar from "./Header";
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";
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
                <m.h1 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="MainHomeTitle">
                    Creating <span className="HeadlineAccent">bold</span>, 
                    <span className="HeadlineAccent"> elegant </span> &#38;
                    <span className="HeadlineAccent"> humanistic </span>
                    interfaces 
                    <br /> 
                    <span className="HeadlineYear">- est. 2020-</span>
                </m.h1>
            </m.section>

            <m.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="SkillsOffered">
                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="SkillBox">
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="SkillBoxTopRow">
                        <p>Logos & Branding</p>
                        <PaintIcon />
                    </m.div>
                    <m.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>Developing strong, consistent and recognisable branding which evokes emotions through visualisations and mood boards.</m.p>
                </m.div>
                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    className="SkillBox">
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        className="SkillBoxTopRow">
                        <p>Web Design</p>
                        <RulerIcon />
                    </m.div>
                    <m.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>Designing high fidelity, responsive and interactive mockups from sketches/wireframes and existing branding using Figma and Adobe CC</m.p>
                </m.div>
                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    className="SkillBox">
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        className="SkillBoxTopRow">
                        <p>Web Development</p>
                        <CodeIcon />
                    </m.div>
                    <m.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>Developing modern, front-end applications and websites from scratch or existing mockups using React, Next.js, SASS and Webpack</m.p>
                </m.div>
                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} 
                    className="SkillBox">
                    <m.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        className="SkillBoxTopRow">
                        <p>Site Optimisation</p>
                        <SpeedIcon />
                    </m.div>
                    <m.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}>Optimising React and WordPress website builds across performance, accessibility, SEO and stability</m.p>
                </m.div>
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
                        <Arrow size={ 40 } />
                    </Link>
                </div>

                <Link
                    className="ProjectLink" to="/projects/brand">
                    <SkillLozenge />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }} 
                        src={ brandScreen } 
                        alt="An iPhone resting on a concrete surface at an angle, with a website on the screen" />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>

                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectTitle">
                    <h3>Brand</h3>
                    <Link to="projects/brand" className="HomePageProjectLinks">
                        <Arrow size={ 30 } />
                    </Link>
                </m.div>

                <Link className="ProjectLink" to="/projects/litelife">
                    <SkillLozenge />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        src={ liteLifeScreen } 
                        alt="A close up of an iPhone and Airpods with a website open on the screen"
                        />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>

                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectTitle">
                    <h3>Lite Life</h3>
                    <Link to="projects/litelife" className="HomePageProjectLinks">
                        <Arrow size={ 30 } />
                    </Link>
                </m.div>

                <Link className="ProjectLink" to="/projects/oceanica">
                    <SkillLozenge />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        src={ oceanicaScreen } 
                        alt="A Macbook with a website open on the screen, resting on a concrete surface next to a pool"
                        />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>

                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectTitle">
                    <h3>Oceanica</h3>
                    <Link to="projects/oceanica" className="HomePageProjectLinks">
                        <Arrow size={ 30 } />
                    </Link>
                </m.div>

                <Link className="ProjectLink" to="/projects/cryptoverse">
                    <SkillLozenge />
                    <m.img 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        src={ cryptoverseScreen } 
                        alt="A Macbook with an application open on the screen, with a dark blue background"
                        />
                    <div className="LinkOverlay">
                        <Arrow />
                    </div>
                </Link>

                <m.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="ProjectTitle">
                    <h3>Cryptoverse</h3>
                    <Link to="projects/cryptoverse" className="HomePageProjectLinks">
                        <Arrow size={ 30 } />
                    </Link>
                </m.div>

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