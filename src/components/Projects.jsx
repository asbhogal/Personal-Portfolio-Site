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
import { fadeIn } from "../../utils/motion";

const Projects = ({}) => {

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
            <Header />
            <section className="ProjectsTitle">
                <h1>Projects</h1>
            </section>
            <section className="Projects">
                    <Link to="brand" id="BrandProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ brandProjectCoverLink } />
                        <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ brandLogoBlack } />
                            <span>Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="litelife" id="LiteLifeProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ liteLifeProjectCoverLink } />
                        <div id="LiteLifeProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ liteLifeLogo } />
                            <span>React | JS | Babel | Material UI | Commerce.js | APIs | Stripe | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="oceanica" id="OceanicaProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ oceanicaProjectCoverLink } />
                        <div id="OceanicaProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ oceanicaLogo } />
                            <span>Figma | Auto Layouts | Components | UI Prototyping</span>
                            <span>React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="cryptoverse" id="CryptoverseProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ cryptoverseProjectCoverLink } />
                        <div id="CryptoverseProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ cryptoverseLogo } />
                            <span>Next | React | Redux | JS | SASS | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
            </section>
            <Footer />

            { showButton && (
                <button onClick={ scrollToTop } className="ScrollToTop">
                    &#8593;
                </button>
            ) }

        </>
    )
};

export default Projects;