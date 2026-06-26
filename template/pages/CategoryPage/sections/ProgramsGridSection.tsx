import React from "react";
import { AnimatePresence } from "framer-motion";
import { Program } from "../../FormationsPage/types/formations.types";
import { ProgramFilterCard } from "../components/ProgramFilterCard";

interface ProgramsGridSectionProps {
  programs: Program[];
}

export const ProgramsGridSection: React.FC<ProgramsGridSectionProps> = ({ programs }) => {
  return (
    <section className="py-20 bg-gray-50 min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            {programs.length} programme{programs.length > 1 ? 's' : ''} trouvé{programs.length > 1 ? 's' : ''}
          </p>
        </div>

        {programs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {programs.map((program) => (
                <ProgramFilterCard key={program.id} program={program} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
            <p className="text-xl font-bold text-gray-400">
              Aucun programme ne correspond à vos filtres
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-8 py-3 bg-[#7AC943] text-white font-bold rounded-xl shadow-lg shadow-[#7AC943]/20"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
