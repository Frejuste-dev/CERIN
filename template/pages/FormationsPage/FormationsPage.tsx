import React, { useState, useEffect, useMemo } from "react";
import { HeroSection } from "./sections/HeroSection";
import { CatalogSection } from "./sections/CatalogSection";
import { CtaSection } from "./sections/CtaSection";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { ALL_PROGRAMS } from "./data/mock-formations";
import { CATEGORIES_METADATA } from "../CategoryPage/data/mock-category";
import { useDebounce } from "../../hooks/useDebounce";

export const FormationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDiplomas, setSelectedDiplomas] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    document.title = "Catalogue des Formations | Groupe CERI";
    
    // SEO Enhancement
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'Découvrez toutes les formations du Groupe CERI : BTS, Licence, Master en enseignement général et technique. Trouvez le programme qui vous correspond et inscrivez-vous dès maintenant.');

    window.scrollTo(0, 0);
  }, []);

  const handleDiplomaToggle = (diploma: string) => {
    setSelectedDiplomas(prev => 
      prev.includes(diploma) ? prev.filter(d => d !== diploma) : [...prev, diploma]
    );
  };

  const handleLevelToggle = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
  };

  const handleReset = () => {
    setActiveCategory("all");
    setSelectedDiplomas([]);
    setSelectedLevels([]);
    setSearchQuery("");
  };

  const filteredPrograms = useMemo(() => {
    let result = ALL_PROGRAMS;

    // Search filter
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.diploma.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter(p => p.category === activeCategory);
    }

    // Diploma filter
    if (selectedDiplomas.length > 0) {
      result = result.filter(p => selectedDiplomas.includes(p.diploma));
    }

    // Level filter
    if (selectedLevels.length > 0) {
      result = result.filter(p => selectedLevels.includes(p.level));
    }

    return result;
  }, [debouncedSearchQuery, activeCategory, selectedDiplomas, selectedLevels]);

  return (
    <main className="bg-white relative">
      <HeroSection 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
        onSearchClear={() => setSearchQuery("")} 
      />
      
      <CatalogSection 
        programs={filteredPrograms}
        categories={CATEGORIES_METADATA}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        selectedDiplomas={selectedDiplomas}
        onDiplomaToggle={handleDiplomaToggle}
        selectedLevels={selectedLevels}
        onLevelToggle={handleLevelToggle}
        onReset={handleReset}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchClear={() => setSearchQuery("")}
      />

      <CtaSection />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/22501010101?text=Bonjour, je souhaite avoir des informations sur vos formations."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
        aria-label="Contacter nous sur WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-2 -right-2 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-[#25D366] border-2 border-white"></span>
        </span>
      </motion.a>
    </main>
  );
};
