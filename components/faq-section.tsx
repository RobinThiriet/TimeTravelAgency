"use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Quelle destination choisir pour une premiere experience ?",
    answer:
      "Pour une premiere immersion, Paris 1889 est la plus accessible: ambiance culturelle, niveau de risque faible, et parcours guide ideal pour debuter.",
  },
  {
    question: "Combien coute un voyage temporel ?",
    answer:
      "Nos forfaits commencent a 12 000 Cr pour 3 jours. Paris 1889: 12 000 Cr, Florence 1504: 13 500 Cr, Cretace -65M: 18 500 Cr. L'option premium ajoute 35%.",
  },
  {
    question: "Le voyage temporel est-il securise ?",
    answer:
      "Oui. Chaque client voyage avec equipement chrono-protecteur, protocole de rappel d'urgence et guide certifie. Les parcours sont verifies avant chaque depart.",
  },
  {
    question: "Puis-je personnaliser mon voyage ?",
    answer:
      "Oui. Vous pouvez utiliser le quiz de recommandation puis ajuster la destination, la duree et la date dans le formulaire de reservation.",
  },
  {
    question: "Comment reserver ?",
    answer:
      "Remplissez la section Reservation sur la page d'accueil. Une pre-validation est effectuee automatiquement, puis un conseiller vous confirme les details.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative border-t border-border/30 bg-card/30 py-24 md:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary md:text-sm">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              Questions Frequentes
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Reponses rapides pour guider vos voyageurs avant reservation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="rounded-xl border border-border/60 bg-background px-4 md:px-6">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold text-foreground md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
