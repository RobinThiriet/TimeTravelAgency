import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/destinations";
import { DestinationDetail } from "@/components/destination-detail";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) return { title: "Destination introuvable" };
  return {
    title: `${dest.title} | TimeTravel Agency`,
    description: dest.tagline,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = destinations.find((d) => d.slug === slug);
  if (!dest) notFound();

  return <DestinationDetail dest={dest} />;
}
