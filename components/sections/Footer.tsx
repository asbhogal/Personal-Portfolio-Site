"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import FadeIn from "@/utils/animations";
import { FooterIconName, FooterLinksType } from "@/utils/types";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";

const footerIconComponents: Record<FooterIconName, React.ComponentType> = {
  FaLinkedinIn,
  BsGithub,
  FiFigma,
};

export default function Footer() {
  const { data, error } = useSWR("/api/footer", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <FadeIn as="footer" className="Footer">
      <FadeIn as="div" className="Copyright">
        <FadeIn as="p">©Aman Singh Bhogal 2023</FadeIn>
      </FadeIn>
      <WebsiteCarbonBadge url="www.amansinghbhogal.com" />
      <FadeIn as="div" className="SocialIcons">
        {data.footerLinks.map((link: FooterLinksType) => {
          const Icon = footerIconComponents[link.icon as FooterIconName];
          return (
            <FadeIn
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
              href={link.href}
              aria-label={`${link.ariaLabel} (opens in new tab)`}
            >
              {Icon && <Icon aria-hidden="true" />}
              <span className="sr-only">{link.ariaLabel}</span>
            </FadeIn>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
}
