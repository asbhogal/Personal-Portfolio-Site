import { ReactNode } from "react";

export type AboutType = {
  about: {
    summary: string;
    summary2: string;
    experience: {
      id: number;
      position: string;
      dates: string;
      duties: string[];
      stacks: string[];
      link: {
        href: string;
      };
    }[];
  };
};

export type AdditionalServicesType = {
  id: number;
  service: string;
  list: string[];
};

export type IconName = "CodeIcon" | "PaintIcon" | "RulerIcon" | "SpeedIcon";

export type FadeInProps = {
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  src?: string;
  alt?: string;
  "aria-label"?: string;
};

export type FooterLinksType = {
  id: number;
  href: string;
  ariaLabel: string;
  icon: string;
};

export type MenuType = Array<{
  id: number;
  name: string;
  href: string;
}>;

export type ServicesType = {
  id: number;
  skill: string;
  description: string;
  icon: string;
};

export type TestimonialsType = {
  id: number;
  img: string;
  imgAlt: string;
  description: string;
  name: string;
  title: string;
};

export type ResourcesType = {
  id: number;
  resource: string;
  description: string;
  images: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  link: string;
};

export type ProjectType = {
  id: number;
  project: string;
  slug: string;
  imageDesktop: string;
  imageMobile: string;
  imgAlt: string;
  summary: string;
  stacks: string[][];
  skills: string[];
  code: string;
  site: string;
  more: string;
  portfolioImg: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  details: {
    hero: {
      desktop: string;
      mobile: string;
      alt: string;
    };
    links: {
      templates?: string;
      challenge?: string;
      code: string;
      site: string;
    };
    type: string;
    date: string;
    discipline: string[];
    description: string;
    list?: string[];
    design?: string[][];
    typeface: {
      id: string;
      font: string;
      type: string;
      weights: string[];
      fontWeights: number[];
    };
    branding?: {
      backgroundColor?: string;
      images?: { img: string; alt: string }[];
      logos?: { img: string; alt: string }[];
      components?: { img: string; alt: string }[];
      palette?: { img: string; alt: string };
    };
    templates?: {
      img?: string;
      alt?: string;
    };
    prototypes?: {
      img?: string;
      alt?: string;
    };
    mockups: { desktop: string; mobile: string; alt: string }[];
  };
};
