"use client";

import FadeIn from "@/utils/animations";
import { ProjectType } from "@/utils/types";
import { motion as m } from "framer-motion";

const SkillLozenge = ({ skills }: { skills: string[] }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="SkillLozenges"
    >
      {skills.map((skill) => (
        <FadeIn as="span" className="SkillLozenge" key={skill}>
          {skill}
        </FadeIn>
      ))}
    </m.div>
  );
};

export default SkillLozenge;
