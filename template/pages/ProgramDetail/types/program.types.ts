export type ProgramCategory = "enseignement-general" | "enseignement-technique" | "enseignement-superieur";

export interface Subject {
  name: string;
  credits: number;
  hours: number;
}

export interface Semester {
  number: number;
  subjects: Subject[];
}

export interface AcademicYear {
  year: number;
  semesters: Semester[];
}

export interface CareerPath {
  title: string;
  description: string;
  salaryRange: string;
  employabilityLevel: "Élevé" | "Très Élevé" | "Moyen";
  industries: string[];
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface RelatedProgram {
  title: string;
  slug: string;
  category: ProgramCategory;
  diploma: string;
  image: string;
}

export interface TuitionFee {
  registration: string;
  tuition: string;
  installmentPlan: string;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  category: ProgramCategory;
  programCode: string;
  diploma: string;
  level: string;
  duration: string;
  studyMode: string;
  campus: string;
  description: string;
  objectives: string[];
  learningOutcomes: string[];
  curriculum: AcademicYear[];
  careerProspects: CareerPath[];
  admissionRequirements: string[];
  requiredDocuments: string[];
  tuition: TuitionFee;
  paymentOptions: string[];
  employmentRate: string;
  availableSeats: number;
  applicationDeadline: string;
  internshipIncluded: boolean;
  companiesPartners: string[];
  relatedPrograms: RelatedProgram[];
  testimonials: Testimonial[];
  faq: FAQEntry[];
  brochurePdf: string;
  heroImage: string;
  seoTitle: string;
  seoDescription: string;
  publishedAt: string;
}
