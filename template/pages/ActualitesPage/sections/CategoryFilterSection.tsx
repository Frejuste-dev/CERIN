import React from "react";
import { CategoryFilter } from "../components/CategoryFilter";

interface CategoryFilterSectionProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilterSection: React.FC<CategoryFilterSectionProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-gray-100">
          <h2 className="text-2xl font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Explorer par catégorie
          </h2>
          <CategoryFilter activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
        </div>
      </div>
    </section>
  );
};
