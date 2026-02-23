import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { FeaturedDestinations } from "@/components/featured-destinations";
import { TravelQuiz } from "@/components/travel-quiz";
import { ReservationSection } from "@/components/reservation-section";
import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedDestinations />
      <TravelQuiz />
      <FAQSection />
      <ReservationSection />
    </>
  );
}
