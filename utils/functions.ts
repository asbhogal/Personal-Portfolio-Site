export async function getAboutData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/about`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Error fetching about data");
  }

  return res.json();
}

export async function getFooterData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/footer`);

  if (!res.ok) {
    throw new Error("Error fetching footer data");
  }

  return res.json();
}

export async function getOffersData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/offers`);

  if (!res.ok) {
    throw new Error("Error fetching offers data");
  }

  return res.json();
}

export async function getResourcesData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/resources`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Error fetching resources data");
  }

  return res.json();
}

export async function getProjectData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/projects`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Error fetching project data");
  }

  return res.json();
}

export async function getServicesData() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/services`, {
    next: { revalidate: 60 },
  });

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
