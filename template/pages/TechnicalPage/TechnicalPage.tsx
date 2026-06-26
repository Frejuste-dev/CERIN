import { useEffect } from "react";
import { PageHero } from "../../components/shared/PageHero";
import { 
  FinalCtaBanner, 
  TrustStatsSection, 
  TestimonialCarousel 
} from "../../components";
import { CareerGrid } from "./sections/CareerGrid";

export function TechnicalPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <PageHero
        title="Enseignement Technique & Professionnel"
        subtitle="Apprenez un métier et entrez dans la vie active avec des compétences reconnues par les professionnels."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Technique & Professionnel" }]}
        accent="var(--color-accent)"
      />

      <TrustStatsSection />

      <CareerGrid />

      <TestimonialCarousel />
      <FinalCtaBanner />
    </main>
  );
}
