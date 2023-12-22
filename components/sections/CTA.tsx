"use client";

import FadeIn from "@/utils/animations";

export default function CTA() {
  return (
    <FadeIn as="section" className="CTA">
      <FadeIn as="p">Available for agency and freelance work</FadeIn>
      <FadeIn as="div">
        <FadeIn
          as="a"
          className="CTAAgencyButton"
          href="mailto:careers@amansinghbhogal.com"
          aria-label="for agencies"
        >
          For Agencies
        </FadeIn>
        <FadeIn
          as="a"
          className="CTAClientButton"
          href="mailto:business@amansinghbhogal.com"
          aria-label="for clients"
        >
          For Clients
        </FadeIn>
      </FadeIn>
    </FadeIn>
  );
}
