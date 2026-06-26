import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "../../../hooks/useDebounce";
import { SearchResult, SearchResultType, SearchState } from "../types/search.types";
import { ALL_PROGRAMS } from "../../FormationsPage/data/mock-formations";
import { MOCK_NEWS } from "../../ActualitesPage/data/mock-news";
import { MOCK_FAQ } from "../../FAQPage/data/mock-faq";

function computeScore(item: { title: string; category: string; excerpt: string }, query: string): number {
  const q = query.toLowerCase();
  let score = 0;
  if (item.title.toLowerCase().includes(q)) score += 3;
  if (item.category.toLowerCase().includes(q)) score += 2;
  if (item.excerpt.toLowerCase().includes(q)) score += 1;
  return score;
}

export function useUnifiedSearch(): SearchState {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const activeType = (searchParams.get("type") as SearchResultType | "all") || "all";
  
  const debouncedQuery = useDebounce(query, 300);
  const [isSearching, setIsSearching] = useState(false);

  const results = useMemo(() => {
    if (!debouncedQuery) return [];
    setIsSearching(true);

    const allItems: SearchResult[] = [
      ...ALL_PROGRAMS.map(p => ({
        id: p.id,
        type: "formation" as SearchResultType,
        title: p.title,
        excerpt: p.shortDescription,
        slug: p.slug,
        category: p.category,
        url: `/formations/${p.category}/${p.slug}`,
        relevanceScore: 0
      })),
      ...MOCK_NEWS.map(n => ({
        id: n.id.toString(),
        type: "actualite" as SearchResultType,
        title: n.title,
        excerpt: n.excerpt,
        slug: n.slug,
        category: n.category,
        url: `/actualites/${n.slug}`,
        relevanceScore: 0
      })),
      ...MOCK_FAQ.map(f => ({
        id: f.id.toString(),
        type: "faq" as SearchResultType,
        title: f.question,
        excerpt: f.answer.replace(/<[^>]+>/g, ''), // Strip HTML
        slug: f.id.toString(),
        category: f.category,
        url: `/faq#${f.category.toLowerCase()}`,
        relevanceScore: 0
      }))
    ];

    const filtered = allItems
      .map(item => ({ ...item, relevanceScore: computeScore(item, debouncedQuery) }))
      .filter(item => item.relevanceScore > 0);

    const sorted = filtered.sort((a, b) => b.relevanceScore - a.relevanceScore);

    const typed = activeType === "all" ? sorted : sorted.filter(item => item.type === activeType);
    
    setIsSearching(false);
    return typed;
  }, [debouncedQuery, activeType]);

  return {
    query,
    activeType,
    results,
    totalCount: results.length,
    isSearching
  };
}
