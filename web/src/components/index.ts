// React component re-exports (for use as Astro islands with client:* directives)
export { EnhancedHero } from "./EnhancedHero";
export { TrustStatsSection } from "./TrustStatsSection";
export { TestimonialCard, type TestimonialCardData } from "./TestimonialCard";
export { TestimonialCarousel } from "./TestimonialCarousel";
export { 
  ProgramCardEnhanced, 
  ProgramCardsGrid,
  type ProgramCardEnhancedProps,
  type ProgramCardsGridProps 
} from "./ProgramCardEnhanced";
export { News } from "./News";
export { QuickNav } from "./QuickNav";
export { Partners } from "./Partners";
export { ProgramCards } from "./ProgramCards";
export { 
  ProgressIndicator, 
  type ProgressIndicatorProps,
  type ProgressStep 
} from "./ProgressIndicator";
export { AccessibleFormField, type AccessibleFormFieldProps, type InputType } from "./AccessibleFormField";
export { ContactForm } from "./ContactForm";
export { ContactFAQ } from "./ContactFAQ";
export { AdmissionForm } from "./AdmissionForm";
export { AdmissionsFAQ } from "./AdmissionsFAQ";
export { NewsSection } from "./NewsSection";

// NOTE: Astro components (FinalCtaBanner.astro, PageHero.astro, Header.astro, Footer.astro)
// cannot be re-exported from .ts files. Import them directly in .astro pages.
