import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const services = [
    {
      id: 1,
      service: "WordPress Design",
      list: [
        "Elementor Pro",
        "Astra Pro",
        "Gutenberg",
        "Custom Theme Changes",
        "Additional CSS",
      ],
    },
    {
      id: 2,
      service: "WordPress Development",
      list: [
        "WooCommerce",
        "Child Themes",
        "Site Optimization",
        "Core File Changes",
        "Staging & Development Environments",
      ],
    },
    {
      id: 3,
      service: "Web Hosting, Security & Optimisation",
      list: [
        "DNS Records & Domain Management",
        "Site Migration",
        "Security Headers",
        "SSL & TLS",
        "Hotlink Protection",
      ],
    },
  ];
  return NextResponse.json({ services }, { status: 200 });
}
