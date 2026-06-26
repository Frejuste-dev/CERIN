import React, { useState, useEffect, useMemo } from "react";
import { HeroSection } from "./sections/HeroSection";
import { FeaturedArticleSection } from "./sections/FeaturedArticleSection";
import { CategoryFilterSection } from "./sections/CategoryFilterSection";
import { ArticlesGridSection } from "./sections/ArticlesGridSection";
import { CtaSection } from "./sections/CtaSection";

import { MOCK_NEWS } from "./data/mock-news";
import { NewsCategory } from "./types/news.types";

export const ActualitesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");

  useEffect(() => {
    document.title = "Actualités | Groupe CERI";
    window.scrollTo(0, 0);
  }, []);

  const featuredArticle = useMemo(() => {
    return MOCK_NEWS.find(a => a.isFeatured) || MOCK_NEWS[0];
  }, []);

  const filteredArticles = useMemo(() => {
    // If "Toutes", we show everything EXCEPT the featured one (which has its own section)
    if (activeCategory === "Toutes") {
      return MOCK_NEWS.filter(a => a.id !== featuredArticle.id);
    }
    
    // If a specific category is selected, we show ALL articles from that category 
    // (including the featured one if it matches, or we can keep it excluded, 
    // but usually filters show everything for that category)
    return MOCK_NEWS.filter(a => a.category === activeCategory);
  }, [activeCategory, featuredArticle.id]);

  return (
    <main className="bg-white">
      {/* SECTION 1 — HERO */}
      <HeroSection />
      
      {/* SECTION 2 — FEATURED ARTICLE (Only shown on "Toutes") */}
      {activeCategory === "Toutes" && (
        <FeaturedArticleSection article={featuredArticle} />
      )}

      {/* SECTION 3 — CATEGORY FILTER */}
      <CategoryFilterSection 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* SECTION 4 — ARTICLES GRID */}
      <ArticlesGridSection articles={filteredArticles} />

      {/* SECTION 5 — CTA */}
      <CtaSection />
    </main>
  );
};
