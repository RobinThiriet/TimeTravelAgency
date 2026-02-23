"use client";

import { motion } from "motion/react";
import type { Destination } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";
import { ScrollReveal } from "@/components/scroll-reveal";

export function DestinationsGrid({
  destinations,
}: {
  destinations: Destination[];
}) {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
            Nos Destinations
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            <span className="text-balance">Ou Voulez-Vous Aller ?</span>
          </h1>
          <div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            aria-hidden="true"
          />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Trois epoques extraordinaires vous attendent. Choisissez votre
            aventure et preparez-vous a vivre l&apos;histoire comme jamais.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.slug} delay={i * 0.15}>
              <DestinationCard destination={dest} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
