import React from "react";
import { Program } from "../../../FormationsPage/types/formations.types";
import { ProgramMiniCard } from "../components/ProgramMiniCard";
import { motion } from "framer-motion";

interface ProgramsGridSectionProps {
  programs: Program[];
}

export const ProgramsGridSection: React.FC<ProgramsGridSectionProps> = ({ programs }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#0B0B0B] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Nos Programmes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Découvrez les formations spécialisées de cette catégorie, conçues pour répondre aux exigences du marché actuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProgramMiniCard program={program} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
