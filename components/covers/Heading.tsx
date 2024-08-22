"use client";

import FadeIn from "@/utils/animations";
import Image from "next/image";

interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  return (
    <FadeIn as="section" className="HomePageSection">
      <Image
        src="/images/Home/PageTitle.svg"
        alt=""
        width={2560}
        height={600}
        priority
      />
      <FadeIn as="h1" className="sr-only">
        {title}
      </FadeIn>
    </FadeIn>
  );
}
