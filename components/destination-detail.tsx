"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import type { Destination } from "@/lib/destinations";
import { ScrollReveal } from "@/components/scroll-reveal";

const ease = [0.22, 1, 0.36, 1];

export function DestinationDetail({ dest }: { dest: Destination }) {
  function openChat() {
    const chatBtn = document.querySelector(
      '[aria-label="Ouvrir le chat Chronos"]',
    ) as HTMLButtonElement | null;
    if (chatBtn) chatBtn.click();
  }

  return (
    <article className="pt-20">
      {/* Hero image */}
      <div className="relative h-[55vh] min-h-[360px] w-full md:h-[65vh]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={dest.image || "/placeholder.svg"}
        >
          <source src={dest.video} type="video/mp4" />
        </video>
        <Image
          src={dest.image || "/placeholder.svg"}
          alt={`Panorama de ${dest.title} durant ${dest.era}`}
          fill
          className="object-cover opacity-0"
          priority
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" aria-hidden="true" />

        {/* Content over hero */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:pb-14">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Link
                href="/destinations"
                className="mb-5 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Retour aux destinations
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="rounded-sm bg-primary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                {dest.era}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                {dest.title}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                {dest.era}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {dest.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg"
            >
              {dest.tagline}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        {/* Description */}
        <ScrollReveal>
          <section className="mb-16" aria-labelledby="dest-about">
            <h2 id="dest-about" className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              A propos de cette destination
            </h2>
            <div className="mt-3 h-px w-12 bg-primary/40" aria-hidden="true" />
            <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
              {dest.description}
            </p>
          </section>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Activities */}
          <ScrollReveal delay={0.1}>
            <motion.section
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="h-full rounded-xl border border-border/60 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(196,166,71,0.06)]"
              aria-labelledby="dest-activities"
            >
              <h3 id="dest-activities" className="font-serif text-xl font-bold text-foreground">
                Activites Incluses
              </h3>
              <div className="mt-2 h-px w-8 bg-primary/30" aria-hidden="true" />
              <ul className="mt-6 flex flex-col gap-4" role="list">
                {dest.activities.map((activity, i) => (
                  <li
                    key={`activity-${i}`}
                    className="flex items-start gap-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary" aria-hidden="true">
                      {i + 1}
                    </span>
                    {activity}
                  </li>
                ))}
              </ul>
            </motion.section>
          </ScrollReveal>

          {/* Tips */}
          <ScrollReveal delay={0.2}>
            <motion.section
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="h-full rounded-xl border border-border/60 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(196,166,71,0.06)]"
              aria-labelledby="dest-tips"
            >
              <h3 id="dest-tips" className="font-serif text-xl font-bold text-foreground">
                Conseils du Guide
              </h3>
              <div className="mt-2 h-px w-8 bg-primary/30" aria-hidden="true" />
              <ul className="mt-6 flex flex-col gap-4" role="list">
                {dest.tips.map((tip, i) => (
                  <li
                    key={`tip-${i}`}
                    className="flex items-start gap-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.section>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.15}>
          <div className="mt-16 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-primary/[0.02] to-transparent p-10 text-center md:p-14">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {"Pret pour l'aventure ?"}
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Nos agents temporels sont disponibles 24h/24 pour preparer votre
              voyage.
            </p>
            <motion.button
              type="button"
              onClick={openChat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-md bg-primary px-10 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,71,0.35)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] transition-transform duration-700 group-hover:translate-x-[200%]" />
              <MessageCircle className="relative h-4 w-4" aria-hidden="true" />
              <span className="relative">{"Parler a l'agent"}</span>
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}
