"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import FadeIn from "@/utils/animations";
import { FooterLinksType } from "@/utils/types";

const FooterLinks: FooterLinksType[] = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/amansinghbhogal",
    ariaLabel: "LinkedIn page",
    icon: <FaLinkedinIn aria-hidden="true" focusable="false" />,
  },
  {
    id: 2,
    href: "https://www.github.com/asbhogal",
    ariaLabel: "GitHub page",
    icon: <BsGithub aria-hidden="true" focusable="false" />,
  },
  {
    id: 3,
    href: "https://www.figma.com/@amansinghbhogal",
    ariaLabel: "Figma profile",
    icon: <FiFigma aria-hidden="true" focusable="false" />,
  },
];

export default function Footer() {
  return (
    <FadeIn as="footer" className="Footer">
      <FadeIn as="div" className="Copyright">
        <FadeIn as="p">©Aman Singh Bhogal 2023</FadeIn>
      </FadeIn>
      <WebsiteCarbonBadge url="www.amansinghbhogal.com" />
      <FadeIn as="div" className="SocialIcons">
        {FooterLinks.map((link) => (
          <FadeIn
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            key={link.id}
            href={link.href}
            aria-label={`${link.ariaLabel} (opens in new tab)`}
          >
            {link.icon}
            <span className="sr-only">{link.ariaLabel}</span>
          </FadeIn>
        ))}
      </FadeIn>
    </FadeIn>
  );
}
