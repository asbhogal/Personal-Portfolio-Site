export type MenuType = {
  id: number;
  name: string;
  href: string;
};

export type ServicesType = {
  id: number;
  skill: string;
  description: string;
  icon: React.ReactNode;
};

export type TestimonialsType = {
  id: number;
  img: string;
  imgAlt: string;
  description: string;
  name: string;
  title: string;
};

export type ProjectType = {
  id: number;
  project: string;
  link: string;
  imageDesktop: string;
  imageMobile: string;
  imgAlt: string;
  summary: string;
  stacks: string[][];
  skills: string[];
  code: string;
  site: string;
  more: string;
  details: {
    hero: {
      desktop: string;
      mobile: string;
      alt: string;
    };
    links: {
      templates?: string;
      code: string;
      site: string;
    };
    type: string;
    date: string;
    description: string;
    design?: string[][];
    typeface: {
      font: string;
      type: string;
      weights: string[];
    };
    branding?: {
      images?: string[];
      logos?: string[];
      components?: string;
      palette?: string;
    };
    templates?: {
      img?: string;
      alt?: string;
    };
    mockups: [
      {
        desktop: string;
        mobile: string;
        alt: string;
      }
    ];
  };
};
