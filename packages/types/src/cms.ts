export interface Program {
  id: number;
  title: string;
  slug: string;
  category: 'GENERAL' | 'TECHNIQUE' | 'SUPERIEUR';
  level: string;
  duration: string;
  description: string;
  objectives?: string;
  curriculum?: string;
  career_opportunities?: string;
  admission_requirements?: string;
  tuition?: string;
  image?: any;
  featured: boolean;
  published_at: string;
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  og_image?: any;
  created_at: string;
  updated_at: string;
}

export interface News {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: 'Admission' | 'Réussite' | 'Partenariat' | 'Événement' | 'Institutionnel';
  image?: any;
  featured: boolean;
  published_at: string;
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  og_image?: any;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: number;
  title: string;
  slug: string;
  description: string;
  start_date: string;
  end_date?: string;
  location?: string;
  image?: any;
  seo_title?: string;
  seo_description?: string;
  canonical_url?: string;
  og_image?: any;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: any;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Gallery {
  id: number;
  title: string;
  image: any;
  category: 'campus' | 'evenements' | 'sports' | 'culture' | 'formation' | 'autre';
  year: number;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sort?: string;
  filters?: Record<string, any>;
  populate?: string | string[];
}
