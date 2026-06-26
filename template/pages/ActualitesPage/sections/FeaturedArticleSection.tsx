import React from "react";
import { FeaturedArticleCard } from "../components/FeaturedArticleCard";
import { NewsArticle } from "../types/news.types";

interface FeaturedArticleSectionProps {
  article: NewsArticle;
}

export const FeaturedArticleSection: React.FC<FeaturedArticleSectionProps> = ({ article }) => {
  return (
    <section className="py-12 -mt-20 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedArticleCard article={article} />
      </div>
    </section>
  );
};
