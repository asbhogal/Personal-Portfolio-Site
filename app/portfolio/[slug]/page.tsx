import { ProjectType } from "@/utils/types";
import ProjectContent from "./ProjectContent";
import { unstable_getImgProps as getImgProps } from "next/image";
import { Metadata } from "next";
import { generateProjectName, getProjectData } from "@/utils/functions";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getProjectData();
  const projectData: ProjectType = data.projects.find(
    (project: ProjectType) => project.slug === params.slug
  );

  return {
    title: generateProjectName(projectData.project),
    description: projectData.summary,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProjectData();

  const projectData: ProjectType = data.projects.find(
    (project: ProjectType) => project.slug === params.slug
  );

  const common = {
    alt: projectData.details.hero.alt,
    height: 1440,
    width: 2560,
  };

  const {
    props: { srcSet: desktop },
  } = getImgProps({
    ...common,
    src: projectData.details.hero.desktop,
  });

  const {
    props: { src: mobile, ...rest },
  } = getImgProps({ ...common, src: projectData.details.hero.mobile });

  return (
    <ProjectContent
      projectData={projectData}
      mobile={mobile}
      desktop={desktop}
    />
  );
}
