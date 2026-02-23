"use client";

import { destinations } from "@/lib/destinations";
import { DestinationCard } from "@/components/destination-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import Link from "next/link";

export function FeaturedDestinations() {
  return (
    <section className="relative py-28 md:py-36" aria-labelledby="featured-heading">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,_rgba(196,166,71,0.04)_0%,_transparent_60%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
              Destinations Populaires
            </p>
            <h2
              id="featured-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              <span className="text-balance">Choisissez Votre Epoque</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.slug} delay={i * 0.15}>
              <DestinationCard destination={dest} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 text-center">
            <Link
              href="/destinations"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,71,0.35)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] transition-transform duration-700 group-hover:translate-x-[200%]" />
              <span className="relative">Toutes les Destinations</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
