import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/formations.types";
import { ProgramCard } from "../components/ProgramCard";

interface SearchSectionProps {
  results: Program[];
  query: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ results, query }) => {
  return (
    <section className="py-24 bg-white min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {results.length} formation{results.length > 1 ? 's' : ''} trouvée{results.length > 1 ? 's' : ''} pour "{query}"
          </h2>
        </div>

        {results.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
            <p className="text-xl font-bold text-gray-400">
              Aucune formation ne correspond à votre recherche
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Essayez avec d'autres mots-clés comme "BTS", "Informatique" ou "Bac".
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
