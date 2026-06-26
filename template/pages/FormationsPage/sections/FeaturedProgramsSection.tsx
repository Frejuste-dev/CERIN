import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/formations.types";
import { ProgramCard } from "../components/ProgramCard";

interface FeaturedProgramsSectionProps {
  programs: Program[];
}

export const FeaturedProgramsSection: React.FC<FeaturedProgramsSectionProps> = ({ programs }) => {
  return (
    <section className="py-24 bg-[#F8FBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Formations à la une
            </h2>
            <p className="text-gray-500 max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Nos programmes les plus demandés pour cette rentrée académique.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};
