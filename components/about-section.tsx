"use client";

import { Shield, Clock, Compass } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal } from "@/components/scroll-reveal";

const features = [
  {
    icon: Clock,
    title: "Precision Temporelle",
    description:
      "Notre technologie de saut quantique vous depose a la seconde pres dans l'epoque choisie, avec une marge d'erreur de 0.003%.",
    stat: "0.003%",
    statLabel: "Marge d'erreur",
  },
  {
    icon: Shield,
    title: "Securite Absolue",
    description:
      "Chaque voyageur est equipe d'un bouclier chrono-protecteur et d'un dispositif de retour immediat en cas d'urgence.",
    stat: "99.8%",
    statLabel: "Taux de securite",
  },
  {
    icon: Compass,
    title: "Guides Experts",
    description:
      "Nos guides temporels certifies connaissent chaque epoque dans les moindres details et parlent les langues d'epoque.",
    stat: "12K+",
    statLabel: "Voyageurs guides",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-t border-border/30 bg-card py-28 md:py-36"
      aria-labelledby="about-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(196,166,71,0.03)_0%,_transparent_60%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mb-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
              Pourquoi Nous Choisir
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              <span className="text-balance">Le Voyage Temporel, Reinvente</span>
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Depuis 2147, nous avons transporte plus de 12 000 voyageurs a
              travers les epoques avec un taux de satisfaction de 99.8%.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.15}>
              <motion.article
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative flex h-full flex-col rounded-xl border border-border/60 bg-background p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(196,166,71,0.08)]"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-primary/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(196,166,71,0.15)]">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>

                  {/* Stat highlight */}
                  <div className="mt-6 border-t border-border/40 pt-5">
                    <span className="font-serif text-2xl font-bold text-primary">{feature.stat}</span>
                    <span className="ml-2 text-xs uppercase tracking-wider text-muted-foreground">
                      {feature.statLabel}
                    </span>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
