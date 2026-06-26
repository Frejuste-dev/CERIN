import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router";
import { HeroSection } from "./sections/HeroSection";
import { FilterSection } from "./sections/FilterSection";
import { ProgramsGridSection } from "./sections/ProgramsGridSection";
import { CtaSection } from "./sections/CtaSection";

import { CATEGORIES_METADATA } from "./data/mock-category";
import { ALL_PROGRAMS } from "../FormationsPage/data/mock-formations";
import { ProgramCategory } from "../FormationsPage/types/formations.types";

export const CategoryPage: React.FC = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  
  const [diploma, setDiploma] = useState("All");
  const [studyMode, setStudyMode] = useState("All");
  const [duration, setDuration] = useState("All");

  const category = useMemo(() => {
    return CATEGORIES_METADATA.find(cat => cat.slug === categorySlug);
  }, [categorySlug]);

  useEffect(() => {
    if (category) {
      document.title = `${category.title} | Groupe CERI`;
      window.scrollTo(0, 0);
    }
  }, [category]);

  const filteredPrograms = useMemo(() => {
    if (!category) return [];
    
    return ALL_PROGRAMS.filter(p => {
      const matchCategory = p.category === categorySlug;
      const matchDiploma = diploma === "All" || p.diploma === diploma;
      const matchStudyMode = studyMode === "All" || p.studyMode === studyMode;
      const matchDuration = duration === "All" || p.duration === duration;
      
      return matchCategory && matchDiploma && matchStudyMode && matchDuration;
    });
  }, [category, categorySlug, diploma, studyMode, duration]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#0B0B0B] mb-4">Catégorie non trouvée</h1>
          <p className="text-gray-500 mb-8">La catégorie que vous recherchez n'existe pas.</p>
          <Link to="/formations" className="px-8 py-4 bg-[#7AC943] text-white font-bold rounded-xl shadow-lg">
            Voir toutes les formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <HeroSection category={category} />
      
      <FilterSection 
        diploma={diploma} setDiploma={setDiploma}
        studyMode={studyMode} setStudyMode={setStudyMode}
        duration={duration} setDuration={setDuration}
      />

      <ProgramsGridSection programs={filteredPrograms} />

      <CtaSection />
    </main>
  );
};
