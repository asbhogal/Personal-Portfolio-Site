"use client";

import FadeIn from "@/utils/animations";

export default function AboutCover() {
  return (
    <FadeIn as="section" className="AboutCover">
      <FadeIn as="h1" className="PageHeaderTitle">
        About
      </FadeIn>
    </FadeIn>
  );
}
