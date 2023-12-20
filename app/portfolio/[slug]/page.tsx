"use client";

import { ProjectType } from "@/utils/types";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) return <p>Error returning data</p>;
  if (!data) return <p>Data loading</p>;

  const projectData = data.projects.find(
    (project: ProjectType) => project.slug === params.slug
  );

  return <p>{projectData.summary}</p>;
}
