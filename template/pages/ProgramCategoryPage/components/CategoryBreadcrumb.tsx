import React from "react";
import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

interface CategoryBreadcrumbProps {
  categoryName: string;
}

export const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({ categoryName }) => {
  return (
    <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap py-2">
      <Link to="/" className="hover:text-[#7AC943] transition-colors flex items-center gap-1">
        <Home size={12} />
        Accueil
      </Link>
      <ChevronRight size={10} />
      <Link to="/formations" className="hover:text-[#7AC943] transition-colors">
        Formations
      </Link>
      <ChevronRight size={10} />
      <span className="text-[#0B0B0B]">{categoryName}</span>
    </nav>
  );
};
