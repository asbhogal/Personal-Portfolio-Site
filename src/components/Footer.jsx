import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="SocialIcons">
            <a href="mailto:business@amansinghbhogal.com" aria-label="Contact Aman by email">
                <MdAlternateEmail />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/amansinghbhogal" aria-label="Visit Aman's LinkedIn page">
                <FaLinkedinIn />
            </a>
            <a target="_blank" href="https://www.github.com/asbhogal" aria-label="Visit Aman's GitHub page">
                <BsGithub />
            </a>
            <a target="_blank" href="https://www.instagram.com/amanuiux" aria-label="Visit Aman's Instagram page">
                <BsInstagram />
            </a>
            <a target="_blank" href="https://www.figma.com/@amansinghbhogal" aria-label="Visit Aman's Figma profile">
                <FiFigma />
            </a> 
            </div>
        </footer>
    )
}

export default Footer;

{/* <a href="tel:+447517990390" target="_blank"><img src={ cellIcon }></img></a>
<a href="mailto:business@amansinghbhogal.com" target="_blank"><img src={ emailIcon }></img></a>
<a href="https://www.figma.com/@amansinghbhogal" target="blank"><img src={ figmaIcon }></img></a>
<a href="https://github.com/asbhogal" target="_blank"><img src={ GitHubIcon }></img></a>
<a href="https://www.linkedin.com/in/amansinghbhogal/" target="_blank"><img src={ LinkedInIcon }></img></a> */}