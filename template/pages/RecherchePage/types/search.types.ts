export type SearchResultType =
  | 'formation'
  | 'actualite'
  | 'faq';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  image?: string;
  url: string;
  relevanceScore: number;
}

export interface SearchState {
  query: string;
  activeType: SearchResultType | 'all';
  results: SearchResult[];
  totalCount: number;
  isSearching: boolean;
}
