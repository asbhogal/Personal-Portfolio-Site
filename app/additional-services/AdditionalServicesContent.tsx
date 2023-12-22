"use client";

import FadeIn from "@/utils/animations";
import { AdditionalServicesType } from "@/utils/types";

export default function AdditionalServicesContent({
  servicesData,
}: {
  servicesData: AdditionalServicesType[];
}) {
  console.log(servicesData);
  return (
    <FadeIn as="section" className="AdditionalServicesSection">
      <FadeIn as="div" className="AdditionalServicesContent">
        {servicesData.map((service) => (
          <FadeIn as="div" key={service.id}>
            <FadeIn as="h2">{service.service}</FadeIn>
            <FadeIn as="ul">
              {service.list.map((list) => (
                <FadeIn as="li" key={list}>
                  {list}
                </FadeIn>
              ))}
            </FadeIn>
          </FadeIn>
        ))}
      </FadeIn>
      <FadeIn as="h3">Please enquire for further information and prices</FadeIn>
    </FadeIn>
  );
}
