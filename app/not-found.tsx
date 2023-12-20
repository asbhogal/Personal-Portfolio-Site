import type { Metadata } from "next";
import Error from "@/components/Error";

export const metadata: Metadata = {
  title: "Error 404 | Aman Singh Bhogal",
  description: "Error 404. The page you're looking for does not exist.",
};

export default function NotFound() {
  return <Error />;
}
