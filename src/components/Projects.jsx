import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

import Footer from "./Footer";
import Header from "./Header";
import brandProjectCoverLink from "../assets/images/ProjectCovers/iPhone B07.jpg";
import liteLifeProjectCoverLink from "../assets/images/ProjectCovers/LiteLife.jpg";
import oceanicaProjectCoverLink from "../assets/images/ProjectCovers/Oceanica.jpg";
import cryptoverseProjectCoverLink from "../assets/images/ProjectCovers/Cryptoverse.jpg";
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import oceanicaLogo from "../assets/images/logos/Oceanica-Logo.svg";
import liteLifeLogo from "../assets/images/logos/LiteLife-Logo.svg";
import cryptoverseLogo from "../assets/images/logos/Cryptoverse-Logo.svg";

const Projects = ({}) => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        document.title = 'Projects | Aman Singh Bhogal';

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
            <Header />
            
            <m.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="ProjectsTitle">
                <m.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Projects</m.h1>
            </m.section>

            <m.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="Projects">
                    <Link to="brand" id="BrandProjectSectionLink" className="ProjectSectionLink">
                        <m.img 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            className="ProjectImage" 
                            src={ brandProjectCoverLink } 
                            alt="A series of iPhones face down, with one faced-up and a website on the screen"
                            />
                        <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ brandLogoBlack } />
                            <span>Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel</span>
                      </div>
                    </Link>
                    <Link to="litelife" id="LiteLifeProjectSectionLink" className="ProjectSectionLink">
                        <m.img 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            className="ProjectImage" 
                            src={ liteLifeProjectCoverLink } 
                            alt="An iPhone with a website screen on, next to some Airpods and a keyboard"
                            />
                        <div id="LiteLifeProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ liteLifeLogo } />
                            <span>React | JS | Babel | Material UI | Commerce.js | APIs | Stripe | Webpack | Vercel</span>
                      </div>
                    </Link>
                    <Link to="oceanica" id="OceanicaProjectSectionLink" className="ProjectSectionLink">
                        <m.img 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            className="ProjectImage" 
                            src={ oceanicaProjectCoverLink } 
                            alt="A laptop with a website on the screen, next to a pool on a concrete surface"
                            />
                        <div id="OceanicaProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ oceanicaLogo } />
                            <span>Figma | Auto Layouts | Components | UI Prototyping</span>
                            <span>React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel</span>
                        </div>
                    </Link>
                    <Link to="cryptoverse" id="CryptoverseProjectSectionLink" className="ProjectSectionLink">
                        <m.img 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }} 
                            className="ProjectImage" 
                            src={ cryptoverseProjectCoverLink } 
                            alt="A Macbook with an application open on the screen, against a dark blue background"
                            />
                        <div id="CryptoverseProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ cryptoverseLogo } />
                            <span>Next | React | Redux | JS | SASS | Webpack | Vercel</span>
                        </div>
                    </Link>
            </m.section>
            
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
};

export default Projects;