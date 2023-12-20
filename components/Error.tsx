"use client";

import FadeIn from "@/utils/animations";

export default function Error() {
  return (
    <FadeIn as="section" className="ErrorPage">
      <FadeIn as="h1" className="PageHeaderTitle">
        404
      </FadeIn>
      <FadeIn as="div" className="ErrorPageContainer">
        <FadeIn as="h2">The page you&apos;re looking for does not exist</FadeIn>
        <FadeIn as="p">Click below to return home</FadeIn>
        <FadeIn as="a" href="/" className="ReturnHomeButton">
          Home
        </FadeIn>
      </FadeIn>
    </FadeIn>
  );
}
