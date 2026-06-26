import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { NewsArticle, NewsCategory } from "../types/news.types";

interface ArticleCardProps {
  article: NewsArticle;
}

const getCategoryStyles = (category: NewsCategory) => {
  switch (category) {
    case 'Événement': return "bg-[#7AC943] text-white";
    case 'Réussite': return "bg-[#F4D000] text-[#0B0B0B]";
    case 'Actualité': return "bg-gray-500 text-white";
    case 'Partenariat': return "bg-blue-500 text-white";
    case 'Admission': return "bg-orange-500 text-white";
    default: return "bg-gray-200 text-gray-700";
  }
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={article.image}
          alt={article.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${getCategoryStyles(article.category)}`}>
          {article.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} className="text-[#7AC943]" />
            {formatDate(article.publishedAt)}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#F4D000]" />
            {article.readingTime} min
          </div>
        </div>

        <h3 className="text-xl font-black text-[#0B0B0B] mb-3 leading-tight group-hover:text-[#7AC943] transition-colors line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <Link to={`/actualites/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          {article.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img  src={article.author.avatar} alt={article.author.name} className="w-8 h-8 rounded-full border border-gray-100"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
            <span className="text-xs font-bold text-[#0B0B0B]">{article.author.name}</span>
          </div>
          <Link
            to={`/actualites/${article.slug}`}
            className="text-[#7AC943] hover:text-[#0B0B0B] transition-colors flex items-center gap-1 text-sm font-bold"
          >
            Lire <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
