import React from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface ArticleBreadcrumbProps {
  title: string;
}

export const ArticleBreadcrumb: React.FC<ArticleBreadcrumbProps> = ({ title }) => {
  return (
    <nav className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap">
      <Link to="/" className="text-gray-400 hover:text-[#7AC943] transition-colors">Accueil</Link>
      <ChevronRight size={10} className="text-gray-300 flex-shrink-0" />
      <Link to="/actualites" className="text-gray-400 hover:text-[#7AC943] transition-colors">Actualités</Link>
      <ChevronRight size={10} className="text-gray-300 flex-shrink-0" />
      <span className="text-[#7AC943] truncate">{title}</span>
    </nav>
  );
};
