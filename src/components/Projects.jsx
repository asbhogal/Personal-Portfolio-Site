import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

import Footer from "./Footer";
import Header from "./Header";
import brandProjectCoverLink from "../assets/images/ProjectCovers/iPhone B07.png";
import liteLifeProjectCoverLink from "../assets/images/ProjectCovers/LiteLife.png";
import oceanicaProjectCoverLink from "../assets/images/ProjectCovers/Oceanica.png";
import kryptoProjectCoverLink from "../assets/images/ProjectCovers/Krypto.png";
import kmcLogo from "../assets/images/logos/KMC_Birmingham_Logo.svg";
import brandLogoBlack from "../assets/images/logos/brand-logo-black.svg";
import brandLogoWhite from "../assets/images/logos/brand-logo-white.svg";
import brandIconBlack from "../assets/images/logos/brand-icon-black.svg";
import brandIconWhite from "../assets/images/logos/brand-icon-white.svg";
import oceanicaLogo from "../assets/images/logos/Oceanica-Logo.svg";
import oceanicaIcon from "../assets/images/logos/Oceanica-Icon.svg";
import liteLifeLogo from "../assets/images/logos/LiteLife-Logo.svg";
import kryptoLogo from "../assets/images/logos/Krypto-Logo.svg";
import { TbChevronUpRight } from "react-icons/tb";

const Projects = () => {

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
            <m.div 
                initial={ { opacity: 0 } } 
                animate={ { opacity: 1 } } 
                className="Projects">
                <div className="Row">
                    <Link to="projects/brand" id="BrandProjectSectionLink" className="ProjectSectionLink">
                        <img src={ brandProjectCoverLink } />
                        <div className="ProjectLinkOverlay">
                            <h3>Test</h3>
                        </div>
                    </Link>
                    <Link to="projects/litelife" id="LiteLifeProjectSectionLink" className="ProjectSectionLink">
                        <img src={ liteLifeProjectCoverLink } />
                    </Link>
                </div>
                <div className="Row">
                    <Link to="projects/oceanica" id="OceanicaProjectSectionLink" className="ProjectSectionLink">
                        <img src={ oceanicaProjectCoverLink } />
                    </Link>
                    <Link to="projects/krypto" id="KryptoProjectSectionLink" className="ProjectSectionLink">
                        <img src={ kryptoProjectCoverLink } />
                    </Link>
                </div>
            </m.div>
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