"use client";

import { useMemo, useState } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";

const BASE_PRICES: Record<string, number> = {
  "paris-1889": 12000,
  "cretace-65m": 18500,
  "florence-1504": 13500,
};

const DESTINATION_LABELS: Record<string, string> = {
  "paris-1889": "Paris 1889",
  "cretace-65m": "Cretace -65M",
  "florence-1504": "Florence 1504",
};

const DURATIONS = [3, 5, 7];

function getMinDate(): string {
  return new Date().toISOString().split("T")[0];
}

export function ReservationSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("paris-1889");
  const [startDate, setStartDate] = useState(getMinDate());
  const [duration, setDuration] = useState(3);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const estimatedPrice = useMemo(() => {
    const base = BASE_PRICES[destination] ?? 12000;
    const multiplier = duration / 3;
    return Math.round(base * multiplier);
  }, [destination, duration]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Veuillez remplir le nom et l'email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }

    const today = new Date(getMinDate());
    const chosenDate = new Date(startDate);
    if (chosenDate < today) {
      setError("La date de depart doit etre aujourd'hui ou plus tard.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <section
      id="reservation"
      className="relative border-t border-border/30 py-24 md:py-32"
      aria-labelledby="reservation-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_500px_at_80%_20%,_rgba(196,166,71,0.05)_0%,_transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
              Reservation
            </p>
            <h2
              id="reservation-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Planifiez Votre Voyage Temporel
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Formulaire de reservation avec validation automatique et estimation
              de tarif en credits temporels.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-xl border border-border/60 bg-card p-6 md:grid-cols-2 md:p-8"
          >
            <div className="md:col-span-2">
              <label htmlFor="name" className="mb-2 block text-sm text-foreground">
                Nom complet
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                placeholder="Ex: Camille Dupont"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="email" className="mb-2 block text-sm text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                placeholder="Ex: camille@timemail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="destination" className="mb-2 block text-sm text-foreground">
                Destination
              </label>
              <select
                id="destination"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
              >
                <option value="paris-1889">Paris 1889</option>
                <option value="cretace-65m">Cretace -65M</option>
                <option value="florence-1504">Florence 1504</option>
              </select>
            </div>

            <div>
              <label htmlFor="start-date" className="mb-2 block text-sm text-foreground">
                Date de depart
              </label>
              <input
                id="start-date"
                type="date"
                min={getMinDate()}
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="duration" className="mb-2 block text-sm text-foreground">
                Duree du voyage
              </label>
              <select
                id="duration"
                value={duration}
                onChange={(event) => setDuration(Number(event.target.value))}
                className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
              >
                {DURATIONS.map((value) => (
                  <option key={value} value={value}>
                    {value} jours
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground">
              Estimation: <strong>{estimatedPrice.toLocaleString("fr-FR")} Cr</strong>{" "}
              pour {duration} jours a destination de{" "}
              <strong>{DESTINATION_LABELS[destination]}</strong>.
            </div>

            {error && (
              <p className="md:col-span-2 text-sm text-red-300" role="alert">
                {error}
              </p>
            )}

            {submitted && (
              <p className="md:col-span-2 text-sm text-emerald-300" role="status">
                Reservation pre-validee. Un conseiller vous contactera sous 24h.
              </p>
            )}

            <button
              type="submit"
              className="md:col-span-2 mt-1 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_28px_rgba(196,166,71,0.30)]"
            >
              Valider ma reservation
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
