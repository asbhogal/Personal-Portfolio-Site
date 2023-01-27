import cellIcon from "../assets/images/icons/Vector-Cell.svg";
import emailIcon from "../assets/images/icons/Vector-Email.svg";
import figmaIcon from "../assets/images/icons/Vector-Figma.svg";
import GitHubIcon from "../assets/images/icons/Vector-GitHub.svg";
import LinkedInIcon from "../assets/images/icons/Vector-LinkedIn.svg";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="SocialIcons">
                <a href="tel:+447517990390" target="_blank"><img src={ cellIcon }></img></a>
                <a href="mailto:business@amansinghbhogal.com" target="_blank"><img src={ emailIcon }></img></a>
                <a href="https://www.figma.com/@amansinghbhogal" target="blank"><img src={ figmaIcon }></img></a>
                <a href="https://github.com/asbhogal" target="_blank"><img src={ GitHubIcon }></img></a>
                <a href="https://www.linkedin.com/in/amansinghbhogal/" target="_blank"><img src={ LinkedInIcon }></img></a>
            </div>
        </footer>
    )
}

export default Footer;