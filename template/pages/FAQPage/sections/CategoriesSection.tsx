import React from "react";
import { FAQCategoryTab } from "../components/FAQCategoryTab";
import { FAQCategoryMeta } from "../types/faq.types";
import { motion } from "framer-motion";

interface CategoriesSectionProps {
  categories: FAQCategoryMeta[];
  activeCategoryId: string;
  onCategoryChange: (id: string) => void;
  isHidden: boolean;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  activeCategoryId,
  onCategoryChange,
  isHidden
}) => {
  if (isHidden) return null;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto pb-6 gap-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <FAQCategoryTab
            label="Toutes les questions"
            iconName="LayoutGrid"
            isActive={activeCategoryId === "all"}
            onClick={() => onCategoryChange("all")}
          />
          {categories.map((cat) => (
            <FAQCategoryTab
              key={cat.id}
              label={cat.label}
              iconName={cat.icon}
              isActive={activeCategoryId === cat.id}
              onClick={() => onCategoryChange(cat.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
