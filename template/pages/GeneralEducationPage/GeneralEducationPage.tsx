import { useEffect } from "react";
import { PageHero } from "../../components/shared/PageHero";
import { 
  FinalCtaBanner, 
  TrustStatsSection, 
  TestimonialCarousel 
} from "../../components";
import { Pathway } from "./sections/Pathway";
import { CollegeSection, LyceeSection } from "./sections/EducationSections";

export function GeneralEducationPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <PageHero
        title="Enseignement Général"
        subtitle="Du collège au lycée, nous préparons chaque élève vers le baccalauréat et au-delà."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Enseignement Général" }]}
        accent="var(--color-primary)"
      />
      
      <TrustStatsSection />
      <Pathway />
      <CollegeSection />
      <LyceeSection />
      <TestimonialCarousel />
      <FinalCtaBanner />
    </main>
  );
}
