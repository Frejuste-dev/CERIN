import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/program.types";
import { CareerCard } from "../components/CareerCard";

interface CareerSectionProps {
  program: Program;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ program }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Débouchés professionnels
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Nos diplômés sont hautement recherchés par les entreprises leaders en Côte d'Ivoire et dans la sous-région.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {program.careerProspects.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <CareerCard career={career} />
            </motion.div>
          ))}
        </div>

        {/* Career Stats Footer */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-[#0B0B0B] p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7AC943] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
            <div className="relative z-10">
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">Taux d'insertion</p>
              <p className="text-5xl font-black text-[#7AC943] mb-2">{program.employmentRate}</p>
              <p className="text-sm text-gray-300 font-medium">Recrutés moins de 6 mois après le diplôme</p>
            </div>
          </div>
          <div className="bg-[#7AC943] p-10 rounded-[2.5rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />
            <div className="relative z-10">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-4">Partenaires</p>
              <p className="text-5xl font-black text-white mb-2">120+</p>
              <p className="text-sm text-white/80 font-medium">Entreprises partenaires actives</p>
            </div>
          </div>
          <div className="bg-[#F4D000] p-10 rounded-[2.5rem] text-[#0B0B0B] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
            <div className="relative z-10">
              <p className="text-[#0B0B0B]/60 text-[10px] font-bold uppercase tracking-widest mb-4">Réseau Alumnis</p>
              <p className="text-5xl font-black text-[#0B0B0B] mb-2">5k+</p>
              <p className="text-sm text-[#0B0B0B]/80 font-medium">Diplômés en activité dans le monde</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
