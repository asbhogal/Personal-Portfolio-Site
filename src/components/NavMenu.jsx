import { NavLink } from "react-router-dom";
import bgLogo from "../assets/images/logos/Personal Brand Logo-bg.png";
import { Link } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className="FullScreenNavMenuContainer">
            <img src={ bgLogo }></img>
            <nav className="ToggleBtn">X</nav>
            <section className="NavMenu">
                <ul className="NavMenuList">
                    <li><Link to='/about'>&#38;&#46;about</Link></li>
                    <li><Link to='/projects'>&#38;&#46;projects</Link></li>
                    <li><Link to='/logofolio'>&#38;&#46;logofolio</Link></li>
                    <li><Link to='/testimonials'>&#38;&#46;testimonials</Link></li>
                    <li><Link to='/connect'>&#38;&#46;connect</Link></li>
                    <li><Link to='/hire'>&#38;&#46;hire</Link></li>
                </ul>
            </section>
        </div>
    )
}

export default NavMenu;