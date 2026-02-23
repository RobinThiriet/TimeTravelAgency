"use client";

import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/destinations";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <motion.div whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}>
      <Link
        href={`/destinations/${destination.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_12px_48px_rgba(196,166,71,0.10)]"
        aria-label={`Explorer ${destination.title} - ${destination.tagline}`}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={`Paysage de ${destination.title} - ${destination.era}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            loading="lazy"
          />
          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/10" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" aria-hidden="true" />

          {/* Era badge */}
          <div className="absolute bottom-4 left-5">
            <span className="rounded-sm bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
              {destination.era}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            {destination.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
            {destination.tagline}
          </p>

          {/* Link indicator */}
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <span>Explorer</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
