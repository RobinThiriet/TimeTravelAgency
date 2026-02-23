"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

type DestinationSlug = "paris-1889" | "cretace-65m" | "florence-1504";

interface Option {
  label: string;
  scores: Record<DestinationSlug, number>;
}

interface Question {
  title: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    title: "Quel type d'experience recherchez-vous ?",
    options: [
      {
        label: "Culturelle et artistique",
        scores: { "paris-1889": 2, "cretace-65m": 0, "florence-1504": 3 },
      },
      {
        label: "Aventure et nature",
        scores: { "paris-1889": 0, "cretace-65m": 3, "florence-1504": 0 },
      },
      {
        label: "Elegance et raffinement",
        scores: { "paris-1889": 3, "cretace-65m": 0, "florence-1504": 2 },
      },
    ],
  },
  {
    title: "Votre periode preferee ?",
    options: [
      {
        label: "Histoire moderne (XIXe-XXe siecle)",
        scores: { "paris-1889": 3, "cretace-65m": 0, "florence-1504": 1 },
      },
      {
        label: "Temps anciens et origines",
        scores: { "paris-1889": 0, "cretace-65m": 3, "florence-1504": 0 },
      },
      {
        label: "Renaissance et classicisme",
        scores: { "paris-1889": 1, "cretace-65m": 0, "florence-1504": 3 },
      },
    ],
  },
  {
    title: "Vous preferez :",
    options: [
      {
        label: "L'effervescence urbaine",
        scores: { "paris-1889": 3, "cretace-65m": 0, "florence-1504": 1 },
      },
      {
        label: "La nature sauvage",
        scores: { "paris-1889": 0, "cretace-65m": 3, "florence-1504": 0 },
      },
      {
        label: "L'art et l'architecture",
        scores: { "paris-1889": 1, "cretace-65m": 0, "florence-1504": 3 },
      },
    ],
  },
  {
    title: "Votre activite ideale :",
    options: [
      {
        label: "Visiter des monuments",
        scores: { "paris-1889": 3, "cretace-65m": 0, "florence-1504": 1 },
      },
      {
        label: "Observer la faune",
        scores: { "paris-1889": 0, "cretace-65m": 3, "florence-1504": 0 },
      },
      {
        label: "Explorer des musees",
        scores: { "paris-1889": 1, "cretace-65m": 0, "florence-1504": 3 },
      },
    ],
  },
];

const RECOMMENDATIONS: Record<
  DestinationSlug,
  { title: string; text: string; link: string }
> = {
  "paris-1889": {
    title: "Paris 1889",
    text: "Vous aimez l'elegance, l'effervescence et les grands evenements historiques. Paris 1889 est votre meilleure porte d'entree.",
    link: "/destinations/paris-1889",
  },
  "cretace-65m": {
    title: "Cretace -65M",
    text: "Votre profil est aventureux: vous recherchez des sensations fortes et des paysages bruts. Le Cretace est fait pour vous.",
    link: "/destinations/cretace-65m",
  },
  "florence-1504": {
    title: "Florence 1504",
    text: "Vous privilegiez l'art, la finesse et l'architecture. Florence 1504 vous offrira une immersion Renaissance exceptionnelle.",
    link: "/destinations/florence-1504",
  },
};

export function TravelQuiz() {
  const [answers, setAnswers] = useState<number[]>(
    Array.from({ length: QUESTIONS.length }, () => 0),
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const recommendation = useMemo(() => {
    const totals: Record<DestinationSlug, number> = {
      "paris-1889": 0,
      "cretace-65m": 0,
      "florence-1504": 0,
    };

    answers.forEach((optionIndex, questionIndex) => {
      const option = QUESTIONS[questionIndex].options[optionIndex];
      (Object.keys(option.scores) as DestinationSlug[]).forEach((slug) => {
        totals[slug] += option.scores[slug];
      });
    });

    const best = (Object.entries(totals) as Array<[DestinationSlug, number]>).sort(
      (a, b) => b[1] - a[1],
    )[0][0];
    return RECOMMENDATIONS[best];
  }, [answers]);

  function handleAnswer(questionIndex: number, optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[questionIndex] = optionIndex;
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section
      id="quiz"
      className="relative border-t border-border/30 bg-card/40 py-24 md:py-32"
      aria-labelledby="quiz-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
              Personnalisation
            </p>
            <h2
              id="quiz-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Quiz Destination Ideale
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Repondez a 4 questions pour obtenir une recommandation rapide et
              personnalisee.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border/60 bg-background p-6 md:p-8"
          >
            <div className="space-y-8">
              {QUESTIONS.map((question, questionIndex) => (
                <fieldset key={question.title}>
                  <legend className="text-sm font-semibold text-foreground md:text-base">
                    {questionIndex + 1}. {question.title}
                  </legend>
                  <div className="mt-3 grid gap-2">
                    {question.options.map((option, optionIndex) => (
                      <label
                        key={option.label}
                        className="flex cursor-pointer items-center gap-3 rounded-lg border border-border/50 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        <input
                          type="radio"
                          name={`question-${questionIndex}`}
                          checked={answers[questionIndex] === optionIndex}
                          onChange={() => handleAnswer(questionIndex, optionIndex)}
                          className="h-4 w-4 accent-[hsl(var(--primary))]"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>

            <button
              type="submit"
              className="mt-8 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[0_0_28px_rgba(196,166,71,0.30)]"
            >
              Voir ma recommandation
            </button>

            {isSubmitted && (
              <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
                <p className="text-sm text-muted-foreground">Destination recommandee:</p>
                <p className="mt-1 font-serif text-2xl font-bold text-foreground">
                  {recommendation.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {recommendation.text}
                </p>
                <Link
                  href={recommendation.link}
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Explorer cette destination
                </Link>
              </div>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
