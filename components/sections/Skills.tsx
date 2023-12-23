"use client";

import CodeIcon from "@/components/icons/CodeIcon";
import PaintIcon from "@/components/icons/PaintIcon";
import RulerIcon from "@/components/icons/RulerIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";
import { IconName, ServicesType } from "@/utils/types";
import FadeIn from "@/utils/animations";

const iconComponents: Record<IconName, React.ComponentType> = {
  CodeIcon,
  PaintIcon,
  RulerIcon,
  SpeedIcon,
};

export default function Services({
  offersData,
}: {
  offersData: ServicesType[];
}) {
  return (
    <FadeIn as="section" className="SkillsOffered">
      {offersData.map((service) => {
        const Icon = iconComponents[service.icon as IconName];
        return (
          <FadeIn as="div" key={service.id} className="SkillBox">
            <FadeIn as="div" className="SkillBoxTopRow">
              <p>{service.skill}</p>
              {Icon && <Icon />}
            </FadeIn>
            <FadeIn as="p">{service.description}</FadeIn>
          </FadeIn>
        );
      })}
    </FadeIn>
  );
}
