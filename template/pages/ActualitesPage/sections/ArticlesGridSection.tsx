import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArticleCard } from "../components/ArticleCard";
import { NewsArticle } from "../types/news.types";

interface ArticlesGridSectionProps {
  articles: NewsArticle[];
}

export const ArticlesGridSection: React.FC<ArticlesGridSectionProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-white min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-100">
            <p className="text-xl font-bold text-gray-400">Aucun article trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
};
