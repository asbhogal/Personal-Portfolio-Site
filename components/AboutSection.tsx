"use client";

import FadeIn from "@/utils/animations";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { AboutType } from "@/utils/types";

export default function AboutSection() {
  const { data, error } = useSWR<AboutType>("/api/about", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  return (
    <FadeIn as="section" className="AboutSection">
      <FadeIn as="div" className="AboutContent">
        <FadeIn as="p" className="AboutText">
          {data.about.summary}
        </FadeIn>
        <FadeIn as="p" className="AboutText">
          {data.about.summary2}
        </FadeIn>
        <FadeIn as="div" className="AboutExperience">
          <FadeIn as="h3">Professional Experience</FadeIn>
          <FadeIn as="div" className="ExperienceContainer">
            {data.about.experience.map((experiences) => (
              <FadeIn
                as="div"
                className="ExperienceSection"
                key={experiences.id}
              >
                <FadeIn as="span" className="ExperienceTitle">
                  {experiences.position}
                </FadeIn>
                <FadeIn as="span" className="ExperienceDate">
                  {experiences.dates}
                </FadeIn>
                <FadeIn as="span" className="ExperienceInfo">
                  <FadeIn as="ul">
                    {experiences.duties.map((duty) => (
                      <FadeIn as="li" key={duty}>
                        {duty}
                      </FadeIn>
                    ))}
                  </FadeIn>
                </FadeIn>
                <FadeIn as="div" className="ExperienceSkills">
                  {experiences.stacks.map((stack) => (
                    <FadeIn as="span" key={stack}>
                      {stack}
                    </FadeIn>
                  ))}
                </FadeIn>
                <FadeIn
                  as="a"
                  target="_blank"
                  rel="noreferrer noopener"
                  href={experiences.link.href}
                  className="WorkLinks"
                  aria-label="work"
                >
                  work
                </FadeIn>
              </FadeIn>
            ))}
          </FadeIn>
        </FadeIn>
      </FadeIn>
    </FadeIn>
  );
}
