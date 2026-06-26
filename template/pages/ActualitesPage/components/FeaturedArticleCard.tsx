import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { NewsArticle, NewsCategory } from "../types/news.types";

interface FeaturedArticleCardProps {
  article: NewsArticle;
}

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

export const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full rounded-[2.5rem] overflow-hidden bg-[#0B0B0B] text-white min-h-[500px] flex items-end group shadow-2xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 w-full lg:max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7AC943] text-white text-[10px] font-black uppercase tracking-widest mb-6">
          À la une • {article.category}
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {article.title}
        </h2>

        <p className="text-lg text-gray-200 mb-8 line-clamp-2 max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          {article.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-10">
          <div className="flex items-center gap-3">
            <img  src={article.author.avatar} alt={article.author.name} className="w-10 h-10 rounded-full border-2 border-white/20"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
            <div>
              <p className="text-sm font-bold text-white leading-none mb-1">{article.author.name}</p>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{article.author.role}</p>
            </div>
          </div>

          <div className="h-10 w-px bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <Calendar size={16} className="text-[#7AC943]" />
              {formatDate(article.publishedAt)}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-300">
              <Clock size={16} className="text-[#F4D000]" />
              {article.readingTime} min de lecture
            </div>
          </div>
        </div>

        <Link
          to={`/actualites/${article.slug}`}
          className="inline-flex items-center gap-3 px-10 py-5 bg-[#7AC943] hover:bg-white hover:text-[#0B0B0B] text-white font-black rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-[#7AC943]/20"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Lire l'article
          <ArrowRight size={20} />
        </Link>
      </div>
    </motion.div>
  );
};
