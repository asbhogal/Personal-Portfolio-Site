import mainLogo from "../assets/images/logos/Personal Brand Logo (Latest)-Transparent-Bg.svg"

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="HamburgerMenu">
                <span className="NavbarLine"></span>
                <span className="NavbarLine"></span>
                <span className="NavbarLine"></span>
            </div>
            <div className="MainLogo">
                <img src={ mainLogo }></img>
            </div>
            <div className="HireCTAButton"></div>
        </nav>
    )
}

export default Navbar;