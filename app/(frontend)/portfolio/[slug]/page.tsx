import { ProjectType } from '@/utils/types';
import { Metadata } from 'next';
import { generateProjectName, getProjectData } from '@/utils/functions';
import { ProjectPage } from '@/components/sections';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getProjectData();
  const projectData: ProjectType = data.projects.find(
    (project: ProjectType) => project.slug === params.slug,
  );

  return {
    description: projectData.summary,
    title: generateProjectName(projectData.project),
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getProjectData();

  const projectData: ProjectType = data.projects.find(
    (project: ProjectType) => project.slug === params.slug,
  );

  return <ProjectPage projectData={projectData} />;
}
