import navLogo from "../assets/images/logos/Website Nav Icon.svg";
import { useState } from "react";

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
                    } }></div>
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