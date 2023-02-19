import { MdAlternateEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

import { motion as m } from "framer-motion"

const Footer = () => {
    return (
        <m.footer 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            className="Footer">
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
        </m.footer>
    )
}

export default Footer;