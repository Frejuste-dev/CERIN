export type NewsCategory =
  | 'Événement'
  | 'Réussite'
  | 'Actualité'
  | 'Partenariat'
  | 'Admission';

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  category: NewsCategory;
  excerpt: string;
  content: string;        // HTML string
  author: Author;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: number;    // in minutes
  isFeatured: boolean;
  publishedAt: string;    // ISO date string
  seoTitle: string;
  seoDescription: string;
}
