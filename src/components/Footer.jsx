import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";

import { motion as m } from "framer-motion";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

const Footer = () => {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="Footer"
    >
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="Copyright"
      >
        <p>©Aman Singh Bhogal - 2023</p>
      </m.div>
      <WebsiteCarbonBadge url="www.amansinghbhogal.com" />
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="SocialIcons"
      >
        <m.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          target="_blank"
          href="https://www.linkedin.com/in/amansinghbhogal"
          aria-label="Visit Aman's LinkedIn page"
        >
          <FaLinkedinIn />
        </m.a>
        <m.a
          target="_blank"
          href="https://www.github.com/asbhogal"
          aria-label="Visit Aman's GitHub page"
        >
          <BsGithub />
        </m.a>
        <m.a
          target="_blank"
          href="https://www.figma.com/@amansinghbhogal"
          aria-label="Visit Aman's Figma profile"
        >
          <FiFigma />
        </m.a>
      </m.div>
    </m.footer>
  );
};

export default Footer;
