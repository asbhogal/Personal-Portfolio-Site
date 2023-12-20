"use client";

import { unstable_getImgProps as getImgProps } from "next/image";
import FadeIn from "@/utils/animations";
import { fetcher } from "@/utils/fetcher";
import Link from "next/link";
import useSWR from "swr";
import Arrow from "./Arrow";
import SkillLozenge from "./SkillLozenge";
import { ProjectType } from "@/utils/types";

export default function Projects() {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <FadeIn as="section" className="ProjectScreens">
      <FadeIn as="div" className="HomePageSectionBar">
        <FadeIn as="h2">Selected Work</FadeIn>
        <Link
          href="/portfolio"
          className="AllProjectsLink"
          aria-label="Portfolio"
        >
          <Arrow size={40} />
        </Link>
      </FadeIn>
      <FadeIn as="div" className="ProjectsContainer">
        {data.projects.map((project: ProjectType) => {
          const common = {
            alt: data.projects.imgAlt,
            width: 500,
            height: 900,
          };

          const {
            props: { srcSet: desktop },
          } = getImgProps({
            ...common,
            src: project.imageDesktop,
          });

          const {
            props: { src: mobile, ...rest },
          } = getImgProps({
            ...common,
            src: project.imageMobile,
          });

          return (
            <FadeIn as="div" className="ProjectBox" key={project.id}>
              <Link
                href={`/portfolio/${project.link}`}
                className="ProjectLink"
                aria-label={project.project}
              >
                <SkillLozenge skills={project.skills} />
                <picture className="PictureContainer">
                  <source media="(min-width: 600px)" srcSet={desktop} />
                  <img src={mobile} alt={project.imgAlt} />
                </picture>
              </Link>

              <FadeIn as="div" className="ProjectTitle HomePageProjectTitle">
                <FadeIn as="h3">{project.project}</FadeIn>
                <Link
                  href={`/portfolio/${project.link}`}
                  className="HomePageProjectLinks"
                  aria-label={project.project}
                >
                  <Arrow size={30} />
                  <span className="sr-only">{project.project}</span>
                </Link>
              </FadeIn>
            </FadeIn>
          );
        })}
      </FadeIn>
    </FadeIn>
  );
}
