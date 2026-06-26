import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { SearchBar } from "../components/SearchBar";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  searchQuery, 
  onSearchChange, 
  onSearchClear 
}) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#F5F6F8]">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7AC943]/5 -skew-x-12 transform translate-x-1/4" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-[#7AC943] transition-colors">Accueil</Link>
            <ChevronRight size={12} />
            <span className="text-[#0B0B0B]">Formations</span>
          </nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B0B0B] mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Toutes nos formations
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Découvrez l'excellence académique du Groupe CERI. Du collège aux masters spécialisés, 
            nous vous accompagnons vers la réussite professionnelle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <SearchBar 
              value={searchQuery} 
              onChange={onSearchChange} 
              onClear={onSearchClear} 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
