export type FAQCategory =
  | 'Admissions'
  | 'Scolarité'
  | 'Formations'
  | 'Paiements'
  | 'Vie étudiante'
  | 'Diplômes';

export interface FAQItem {
  id: number;
  question: string;
  answer: string; // HTML string for rich formatting
  category: FAQCategory;
  isPopular: boolean;
  order: number;
}

export interface FAQCategoryMeta {
  id: string;
  label: FAQCategory;
  icon: string; // Lucide icon name
  description: string;
  color: string; // Tailwind class
}
