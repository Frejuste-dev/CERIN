import { useEffect } from "react";
import {
  EnhancedHero,
  TrustStatsSection,
  TestimonialCarousel,
  FinalCtaBanner,
  QuickNav,
  News,
} from "../../components";
import { ProgramShowcase } from "./sections/ProgramShowcase";

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <EnhancedHero />
      <TrustStatsSection />
      <TestimonialCarousel />
      <ProgramShowcase />
      <QuickNav />
      <News />
      <FinalCtaBanner />
    </main>
  );
}
