"use client";

import { Clock } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Footer() {
  return (
    <footer
      className="relative border-t border-border/30 bg-background"
      role="contentinfo"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-12 md:grid-cols-3">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="font-serif text-lg font-bold tracking-tight text-foreground">
                  TimeTravel Agency
                </span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Votre passerelle vers les epoques les plus fascinantes de
                l&apos;histoire. Voyagez en toute securite depuis 2147.
              </p>
            </div>

            {/* Destinations */}
            <nav aria-label="Destinations">
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Destinations
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <Link
                    href="/destinations/paris-1889"
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    Paris 1889
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/cretace-65m"
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    Cretace -65M
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/florence-1504"
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    Florence 1504
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#quiz"
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    Quiz personnalise
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Contact
              </h4>
              <address className="mt-5 flex flex-col gap-3 not-italic">
                <p className="text-sm text-muted-foreground">
                  support@timetravel.agency
                </p>
                <p className="text-sm text-muted-foreground">
                  +33 (0)1 88 88 2147
                </p>
                <p className="text-sm text-muted-foreground">
                  42 Rue du Futur, Paris 2147
                </p>
              </address>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-14 border-t border-border/30 pt-8 text-center">
          <p className="text-xs text-muted-foreground/70">
            &copy; 2147 TimeTravel Agency. Tous droits reserves a travers le
            temps.
          </p>
        </div>
      </div>
    </footer>
  );
}
