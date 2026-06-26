import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/program.types";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router";

interface RelatedProgramsSectionProps {
  program: Program;
}

export const RelatedProgramsSection: React.FC<RelatedProgramsSectionProps> = ({ program }) => {
  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Formations similaires
            </h2>
            <p className="text-gray-500 max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Explorez d'autres opportunités académiques au sein du Groupe CERI pour affiner votre choix.
            </p>
          </div>
          <Link 
            to={`/${program.category}`}
            className="flex items-center gap-2 text-[#7AC943] font-bold hover:gap-3 transition-all"
          >
            Voir tout le catalogue <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {program.relatedPrograms.map((rel, index) => (
            <motion.div
              key={rel.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img  
                  src={rel.image} 
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-[#0B0B0B]">
                  {rel.diploma}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-[#0B0B0B] mb-4 group-hover:text-[#7AC943] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {rel.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>2 ans</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-200" />
                  <span>Baccalauréat</span>
                </div>
                <Link 
                  to={`/formations/${rel.category}/${rel.slug}`}
                  className="w-full py-4 rounded-xl border-2 border-gray-100 text-[#0B0B0B] font-bold text-sm flex items-center justify-center gap-2 group-hover:border-[#7AC943] group-hover:bg-[#7AC943] group-hover:text-white transition-all"
                >
                  Découvrir le programme
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
