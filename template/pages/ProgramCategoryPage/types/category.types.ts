import { Program } from "../../FormationsPage/types/formations.types";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  position: string;
  company: string;
}

export interface ProgramCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  programCount: number;
  studentCount: number;
  employmentRate: string;
  partnerCompanies: number;
  faq: FAQItem[];
  featuredPrograms: string[]; // IDs of programs
  testimonials: Testimonial[];
}
