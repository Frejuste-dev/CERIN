import { useEffect } from "react";
import { PageHero } from "../../components/shared/PageHero";
import { 
  FinalCtaBanner, 
  TrustStatsSection, 
  TestimonialCarousel 
} from "../../components";
import { ProgramSelector } from "./sections/ProgramSelector";

export function HigherEducationPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <PageHero
        title="Enseignement Supérieur"
        subtitle="Construisez votre avenir professionnel avec des diplômes reconnus — BTS, Licence, Master."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Enseignement Supérieur" }]}
        accent="var(--color-primary)"
      />

      <TrustStatsSection />

      <ProgramSelector />

      <TestimonialCarousel />
      <FinalCtaBanner />
    </main>
  );
}
