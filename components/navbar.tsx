"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/40 bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Navigation principale">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="TimeTravel Agency - Accueil">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/20">
            <Clock className="h-4 w-4 text-primary transition-transform duration-500 group-hover:rotate-[360deg]" aria-hidden="true" />
          </div>
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            TimeTravel
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="relative text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Accueil
          </Link>
          <Link
            href="/destinations"
            className="relative text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Destinations
          </Link>
          <Link
            href="/#quiz"
            className="relative text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Quiz
          </Link>
          <Link
            href="/#faq"
            className="relative text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            FAQ
          </Link>
          <Link
            href="/#reservation"
            className="group relative overflow-hidden rounded-md border border-primary bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-[0_0_24px_rgba(196,166,71,0.3)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] transition-transform duration-700 group-hover:translate-x-[200%]" />
            <span className="relative">Reserver</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/40 text-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary md:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden border-t border-border/30 bg-background/98 backdrop-blur-xl md:hidden"
            role="navigation"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm tracking-wide text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
              >
                Accueil
              </Link>
              <Link
                href="/destinations"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm tracking-wide text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
              >
                Destinations
              </Link>
              <Link
                href="/#quiz"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm tracking-wide text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
              >
                Quiz
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm tracking-wide text-muted-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                href="/#reservation"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-md border border-primary bg-primary px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary-foreground"
              >
                Reserver
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
