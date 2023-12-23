"use client";

import FadeIn from "@/utils/animations";

export default function SkillLozenge({ skills }: { skills: string[] }) {
  return (
    <FadeIn as="div" className="SkillLozenges">
      {skills.map((skill) => (
        <FadeIn as="span" className="SkillLozenge" key={skill}>
          {skill}
        </FadeIn>
      ))}
    </FadeIn>
  );
}
