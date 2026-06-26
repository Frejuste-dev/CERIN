import React from "react";
import { NewsCategory } from "../types/news.types";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories: (NewsCategory | "Toutes")[] = [
  "Toutes",
  "Événement",
  "Réussite",
  "Actualité",
  "Partenariat",
  "Admission",
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-3 rounded-full text-sm font-black transition-all duration-200 border-2 ${
            activeCategory === cat
              ? "bg-[#7AC943] border-[#7AC943] text-white shadow-lg shadow-[#7AC943]/20"
              : "bg-white border-gray-100 text-[#0B0B0B] hover:border-[#7AC943] hover:text-[#7AC943]"
          }`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
