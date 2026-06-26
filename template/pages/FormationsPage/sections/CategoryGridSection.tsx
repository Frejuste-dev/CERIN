import React from "react";
import { CategoryMetadata } from "../types/formations.types";
import { CategoryCard } from "../components/CategoryCard";

interface CategoryGridSectionProps {
  categories: CategoryMetadata[];
}

export const CategoryGridSection: React.FC<CategoryGridSectionProps> = ({ categories }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Explorez par filière
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Choisissez le parcours qui correspond à vos ambitions parmi nos trois pôles d'enseignement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <CategoryCard key={cat.id} category={cat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
