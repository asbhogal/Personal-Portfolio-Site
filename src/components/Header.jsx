import navLogo from "../assets/images/logos/Portfolio-Logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion"

const Header = (props) => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <header
            id={ props.HeaderPosition }
            className="Header">
        <nav className="Nav">
            <div className="NavContainer">
                <div className="NavBar">
                    <div className="MainLogo">
                        <Link className="HomePageLogoLink" to='/' aria-label="Return to the home page">
                            <img src={ navLogo } width="45px" height="45px" alt="The initials A S B in elegant font, all connected to one another, in pale black"></img>
                        </Link>
                    </div>
                    <div className="MenuToggle" onClick={ () => setNavOpen(!navOpen) }>
                        <div className={ navOpen ? "HamburgerContainer HamburgerContainerOpen" : "HamburgerContainer" }>
                            <span className={ navOpen ? "LineTop Spin" : "LineTop" }></span>
                            <span className={ navOpen ? "LineBottom Spin" : "LineBottom" }></span>
                        </div>
                    </div>
                    <a className="HireCTAHeader" href="mailto:business@amansinghbhogal.com">Hire</a>
                </div>
                <div 
                    className="NavOverlay" 
                    style={ { 
                        opacity: navOpen ? "1" : "0",
                        visibility: navOpen ? "visible" : "hidden"
                    } }>
                        <ul className="NavLinks">
                            <li className="NavItems">
                                <Link to="/">
                                    home
                                </Link>
                                <div className="NavItemWrapper"></div>
                            </li>
                            <li className="NavItems">
                                <Link to="/about">
                                    about
                                </Link>
                                {/* <div className="NavItemWrapper"></div> */}
                            </li>
                            <li className="NavItems">
                                <Link to="/projects">
                                    projects
                                </Link>
                                {/* <div className="NavItemWrapper"></div> */}
                            </li>
                            <li className="NavItems">
                                <Link to="/AmanSinghBhogal-Brand-Manifesto.pdf" target="_blank">
                                    brand manifesto
                                </Link>
                                {/* <div className="NavItemWrapper"></div> */}
                            </li>
                            <li className="NavItems">
                                <Link to="/testimonials">
                                    testimonials
                                </Link>
                                {/* <div className="NavItemWrapper"></div> */}
                            </li>
                            <li className="NavItems">
                                <Link to="/additionalservices">
                                    additional services
                                </Link>
                                {/* <div className="NavItemWrapper"></div> */}
                            </li>
                            <li className="NavItems">
                                <Link to="/freeresources">
                                    free resources
                                </Link>
                                {/* <div className="NavItemWrapper"></div> */}
                            </li>
                        </ul>
                    </div>
            </div>       
        </nav>
    </header>       
    )
};

export default Header;

/* const   [HamburgerClass, setHamburgerClass] = useState("HamburgerBar Unclicked"),
            [MenuClass, setMenuClass] = useState("FullScreenNavMenuContainer Hidden"),
            [isMenuClicked, setIsMenuClicked] = useState(false);

    const   updateMenu = () => {
        if(!isMenuClicked) {
            setHamburgerClass("HamburgerBar Clicked")
            setMenuClass("FullScreenNavMenuContainer Visible")
        }
        else {
            setHamburgerClass("HamburgerBar Unclicked")
            setMenuClass("FullScreenNavMenuContainer Hidden")
        }
    } */

/*     <div className="HireCTAButton">
                    <a href="mailto:business@amansinghbhogal.com">Hire</a>
                </div> */