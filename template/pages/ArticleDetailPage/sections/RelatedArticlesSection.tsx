import React from "react";
import { motion } from "framer-motion";
import { NewsArticle } from "../types/article.types";
import { ArticleCard } from "../../ActualitesPage/components/ArticleCard";

interface RelatedArticlesSectionProps {
  articles: NewsArticle[];
}

export const RelatedArticlesSection: React.FC<RelatedArticlesSectionProps> = ({ articles }) => {
  if (articles.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Articles similaires
          </h2>
          <div className="h-1 flex-grow mx-8 bg-gray-50 rounded-full hidden md:block" />
        </div>

        {/* Desktop Grid / Mobile Scroll */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {articles.map((article) => (
            <div key={article.id} className="min-w-[300px] md:min-w-0">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
