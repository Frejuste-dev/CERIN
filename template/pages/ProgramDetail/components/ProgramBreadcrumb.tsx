import React from "react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface ProgramBreadcrumbProps {
  category: string;
  title: string;
}

export const ProgramBreadcrumb: React.FC<ProgramBreadcrumbProps> = ({ category, title }) => {
  const categoryLabels: Record<string, string> = {
    "enseignement-general": "Enseignement Général",
    "enseignement-technique": "Enseignement Technique",
    "enseignement-superieur": "Enseignement Supérieur",
  };

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
      <ChevronRight size={14} />
      <Link to={`/${category}`} className="hover:text-white transition-colors">
        {categoryLabels[category] || category}
      </Link>
      <ChevronRight size={14} />
      <span className="text-gray-200 font-medium truncate">{title}</span>
    </nav>
  );
};
