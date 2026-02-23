import type { Metadata } from "next";
import { destinations } from "@/lib/destinations";
import { DestinationsGrid } from "@/components/destinations-grid";

export const metadata: Metadata = {
  title: "Destinations | TimeTravel Agency",
  description:
    "Explorez nos destinations temporelles : Paris 1889, le Cretace, Florence 1504.",
};

export default function DestinationsPage() {
  return <DestinationsGrid destinations={destinations} />;
}
