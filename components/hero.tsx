"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero - Agence de voyages temporels"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/paris.mp4" type="video/mp4" />
      </video>

      {/* Animated gradient background */}
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-background/90 via-[#1a1510]/80 to-background/92" />

      {/* Particle-like radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,_rgba(196,166,71,0.10)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_30%_70%,_rgba(196,166,71,0.04)_0%,_transparent_100%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(196,166,71,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(196,166,71,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Decorative corner accents */}
      <div className="absolute top-24 left-8 h-24 w-px bg-gradient-to-b from-primary/30 to-transparent md:left-16" aria-hidden="true" />
      <div className="absolute top-24 left-8 h-px w-24 bg-gradient-to-r from-primary/30 to-transparent md:left-16" aria-hidden="true" />
      <div className="absolute bottom-24 right-8 h-24 w-px bg-gradient-to-t from-primary/30 to-transparent md:right-16" aria-hidden="true" />
      <div className="absolute bottom-24 right-8 h-px w-24 bg-gradient-to-l from-primary/30 to-transparent md:right-16" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm"
        >
          Agence de Voyages Temporels
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-balance">
            Explorez le Temps,{" "}
            <span className="bg-gradient-to-r from-primary via-[#e8d48b] to-primary bg-clip-text text-transparent">
              Vivez l&apos;Histoire
            </span>
          </span>
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          aria-hidden="true"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl"
        >
          De la Belle Epoque parisienne aux terres du Cretace, en passant par la
          Renaissance florentine. Choisissez votre epoque, nous ouvrons le
          passage.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/destinations"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-primary px-10 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(196,166,71,0.35)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] transition-transform duration-700 group-hover:translate-x-[200%]" />
            <span className="relative">Voir les Destinations</span>
          </Link>
          <Link
            href="/#reservation"
            className="rounded-md border border-border/60 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
          >
            Reserver
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground/60" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
