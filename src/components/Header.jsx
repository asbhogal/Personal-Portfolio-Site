import navLogo from "../assets/images/logos/Website Nav Icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="Nav">
            <div className="NavContainer">
                <div className="NavBar">
                    <div className="MainLogo">
                        <img src={ navLogo }></img>
                    </div>
                    <div className="MenuToggle" onClick={ () => setNavOpen(!navOpen) }>
                        <div className={ navOpen ? "HamburgerContainer HamburgerContainerOpen" : "HamburgerContainer" }>
                            <span className={ navOpen ? "LineTop Spin" : "LineTop" }></span>
                            <span className={ navOpen ? "LineBottom Spin" : "LineBottom" }></span>
                        </div>
                    </div>
                </div>
                <div 
                    className="NavOverlay" 
                    style={ { 
                        top: navOpen ? "0" : "-100%",
                        transitionDelay: navOpen ? "0s" : "0s"
                    } }>
                        <ul className="NavLinks">
                            <li className="NavItems">
                                <Link to="./home">&#38;&#46;home</Link>
                                <div className="NavItemWrapper"></div>
                            </li>
                            <li className="NavItems">
                                <Link to="./about">&#38;&#46;about</Link>
                                <div className="NavItemWrapper"></div>
                            </li>
                            <li className="NavItems">
                                <Link to="./projects">&#38;&#46;projects</Link>
                                <div className="NavItemWrapper"></div>
                            </li>
                            <li className="NavItems">
                                <Link to="./additionalservices">&#38;&#46;additional services</Link>
                                <div className="NavItemWrapper"></div>
                            </li>
                        </ul>
                        <div className="NavScreenFooter">
                            <div className="SocialLinkNames">
                                <ul className="NavFooterSocialLinks">
                                    <li>
                                        <a href="mailto:business@amansinghbhogal.com">Email</a>
                                    </li>
                                    <li>
                                        <a href="www.linkedin.com/in/amansinghbhogal">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="www.github.com/asbhogal">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="www.figma.com/@amansinghbhogal">Figma</a>
                                    </li>
                                    <li>
                                        <a href="www.instagram.com/amanuiux">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>       
        </nav>
            
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