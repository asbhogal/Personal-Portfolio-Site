export async function getProjectData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/projects`);

  if (!res.ok) {
    throw new Error("Error fetching project data");
  }

  return res.json();
}

export async function getServicesData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/services`);

  if (!res.ok) {
    throw new Error("Error fetching services data");
  }

  return res.json();
}

function titleCase(str: string) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateProjectName(project: string) {
  return `${titleCase(project)} | Aman Singh Bhogal`;
}
