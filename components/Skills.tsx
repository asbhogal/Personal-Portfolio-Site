import { motion as m } from "framer-motion";

import CodeIcon from "../components/CodeIcon";
import PaintIcon from "../components/PaintIcon";
import RulerIcon from "../components/RulerIcon";
import SpeedIcon from "../components/SpeedIcon";

const services: ServicesType[] = [
  {
    id: 1,
    skill: "Logos & Branding",
    description:
      "Developing strong, consistent and recognisable branding which evokes emotions through visualisations and mood boards.",
    icon: <PaintIcon />,
  },
  {
    id: 2,
    skill: "Web Design",
    description:
      "Designing high fidelity, responsive and interactive mockups from sketches/wireframes and existing branding using Figma and Adobe CC",
    icon: <RulerIcon />,
  },
  {
    id: 3,
    skill: "Web Development",
    description:
      "Developing modern, front-end applications and websites from scratch or existing mockups using React, Next.js & TypeScript.",
    icon: <CodeIcon />,
  },
  {
    id: 4,
    skill: "Site Optimisation",
    description:
      "Optimising React and WordPress website builds across performance, accessibility, SEO and stability.",
    icon: <SpeedIcon />,
  },
];

type ServicesType = {
  id: number;
  skill: string;
  description: string;
  icon: React.ReactNode;
};

export default function Services() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="SkillsOffered"
    >
      {services.map((service) => (
        <m.div
          key={service.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="SkillBox"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="SkillBoxTopRow"
          >
            <p>{service.skill}</p>
            {service.icon}
          </m.div>
          <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            {service.description}
          </m.p>
        </m.div>
      ))}
    </m.section>
  );
}
