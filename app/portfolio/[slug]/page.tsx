import { ProjectType } from "@/utils/types";
import ProjectContent from "./ProjectContent";
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

  return <ProjectContent projectData={projectData} />;
}
