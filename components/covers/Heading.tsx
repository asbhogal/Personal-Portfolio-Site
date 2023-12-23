"use client";

import FadeIn from "@/utils/animations";

export default function Heading() {
  return (
    <FadeIn as="section" className="HomePageSection">
      <FadeIn as="h1" className="MainHomeTitle">
        Creating <span className="HeadlineAccent">bold</span>,
        <span className="HeadlineAccent"> elegant </span> &#38;
        <span className="HeadlineAccent"> humanistic </span>
        interfaces
        <br />
        <span className="HeadlineYear">- est. 2020-</span>
      </FadeIn>
    </FadeIn>
  );
}
