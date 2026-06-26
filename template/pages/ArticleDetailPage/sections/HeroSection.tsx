import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { NewsArticle, NewsCategory } from "../types/article.types";
import { ArticleBreadcrumb } from "../components/ArticleBreadcrumb";
import { ShareButtons } from "../components/ShareButtons";

interface HeroSectionProps {
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

export const HeroSection: React.FC<HeroSectionProps> = ({ article }) => {
  return (
    <section className="relative pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ArticleBreadcrumb title={article.title} />

        <div className="mb-8">
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${getCategoryStyles(article.category)}`}>
            {article.category}
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0B0B0B] mb-8 leading-[1.1]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {article.title}
        </motion.h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <img  src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-full border-2 border-[#7AC943]/20"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
            <div>
              <p className="text-sm font-bold text-[#0B0B0B] leading-none mb-1">{article.author.name}</p>
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{article.author.role}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Calendar size={16} className="text-[#7AC943]" />
              {formatDate(article.publishedAt)}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <Clock size={16} className="text-[#F4D000]" />
              {article.readingTime} min de lecture
            </div>
            <div className="h-6 w-px bg-gray-100 hidden md:block" />
            <ShareButtons url={window.location.href} title={article.title} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-[21/9]"
        >
          <img  src={article.image} alt={article.imageAlt} className="w-full h-full object-cover"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        </motion.div>
      </div>
    </section>
  );
};
