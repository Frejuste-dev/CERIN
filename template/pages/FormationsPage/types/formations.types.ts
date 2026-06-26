export type ProgramCategory = 
  | "enseignement-general" 
  | "enseignement-technique" 
  | "enseignement-superieur";

export interface Program {
  id: string;
  title: string;
  slug: string;
  category: ProgramCategory;
  diploma: string;
  level: string;
  duration: string;
  studyMode: string;
  employmentRate: string;
  image: string;
  shortDescription: string;
  spotsRemaining: number;
  brochureUrl: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface CategoryMetadata {
  id: string;
  slug: ProgramCategory;
  title: string;
  description: string;
  icon: string;
  programCount: number;
  heroImage: string;
}

export interface FilterState {
  search: string;
  category: string;
  diploma: string[];
  level: string[];
}
