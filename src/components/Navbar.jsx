import mainLogo from "../assets/images/logos/Personal Brand Logo (Latest)-Transparent-Bg.svg"
import { useState } from "react";

const Navbar = () => {

    const   [HamburgerClass, setHamburgerClass] = useState("HamburgerBar Unclicked"),
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
    }

    return (
        <nav className="Navbar">
            <div className="HamburgerMenu">
                <span className={ HamburgerClass } onClick={ updateMenu }></span>
                <span className={ HamburgerClass } onClick={ updateMenu }></span>
                <span className={ HamburgerClass } onClick={ updateMenu }></span>
            </div>
            <div className={ MenuClass }></div>
            <div className="MainLogo">
                <img src={ mainLogo }></img>
            </div>
            <div className="HireCTAButton"></div>
        </nav>
    )
}

export default Navbar;