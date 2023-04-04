import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

import Footer from "./Footer";
import Header from "./Header";
import brandProjectCoverLink from "../assets/images/ProjectCovers/iPhone B07.jpg";
import liteLifeProjectCoverLink from "../assets/images/ProjectCovers/LiteLife.jpg";
import oceanicaProjectCoverLink from "../assets/images/ProjectCovers/Oceanica.jpg";
import kryptoProjectCoverLink from "../assets/images/ProjectCovers/Krypto.jpg";
import metaverseMadnessProjectCoverLink from "../assets/images/ProjectCovers/MetaverseMadness.jpg";
import cryptoverseProjectCoverLink from "../assets/images/ProjectCovers/Cryptoverse.jpg";

import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import oceanicaLogo from "../assets/images/logos/Oceanica-Logo.svg";
import liteLifeLogo from "../assets/images/logos/LiteLife-Logo.svg";
import kryptoLogo from "../assets/images/logos/Krypto-Logo.svg";
import metaversusLogo from "../assets/images/logos/Metaversus-Logo.svg";
import cryptoverseLogo from "../assets/images/logos/Cryptoverse-Logo.svg";
import { TbChevronUpRight } from "react-icons/tb";
import { fadeIn } from "../../utils/motion";

const Projects = ({}) => {

    const MotionLink = m(Link)

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
            <div className="Projects">
                    <MotionLink transition={{ ease: 'easeOut', delay: 10 }} to="brand" id="BrandProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ brandProjectCoverLink } />
                        <div id="BrandProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ brandLogoBlack } />
                            <span>Figma | React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </MotionLink>
                    <Link to="projects/litelife" id="LiteLifeProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ liteLifeProjectCoverLink } />
                        <div id="LiteLifeProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ liteLifeLogo } />
                            <span>React | JS | Babel | Material UI | Commerce.js | APIs | Stripe | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="projects/oceanica" id="OceanicaProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ oceanicaProjectCoverLink } />
                        <div id="OceanicaProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ oceanicaLogo } />
                            <span>Figma | Auto Layouts | Components | UI Prototyping</span>
                            <span>React | JS | Babel | SASS/SCSS | PostCSS | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="projects/krypto" id="KryptoProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ kryptoProjectCoverLink } />
                        <div id="KryptoProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ kryptoLogo } />
                            <span>Figma | React | JS | Babel | SASS/SCSS | PostCSS | Vite | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="projects/metaverse-madness" id="MetaverseMadnessProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ metaverseMadnessProjectCoverLink } />
                        <div id="MetaverseProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ metaversusLogo } />
                            <span>Next | React | JS | Babel | Tailwind CSS | Framer Motion | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
                    <Link to="projects/cryptoverse" id="CryptoverseProjectSectionLink" className="ProjectSectionLink">
                        <img className="ProjectImage" src={ cryptoverseProjectCoverLink } />
                        <div id="CryptoverseProjectLinkOverlay" className="ProjectLinkOverlay">
                            <img className="ProjectLogo" src={ cryptoverseLogo } />
                            <span>Next | React | Redux | JS | SASS | Webpack | Vercel</span>
{/*                             <button className="ProjectVisitButton">Visit</button>
 */}                        </div>
                    </Link>
            </div>
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