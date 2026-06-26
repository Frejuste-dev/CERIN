import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Clock, Star, ArrowRight } from "lucide-react";
import { Program } from "../../FormationsPage/types/formations.types";

interface ProgramFilterCardProps {
  program: Program;
}

export const ProgramFilterCard: React.FC<ProgramFilterCardProps> = ({ program }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#7AC943] text-white rounded-full text-[10px] font-black uppercase tracking-widest">
            {program.diploma}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-[#0B0B0B] mb-4 group-hover:text-[#7AC943] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {program.title}
        </h3>

        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock size={14} />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7AC943]">
              <Star size={14} fill="currentColor" />
              <span>{program.employmentRate}</span>
            </div>
          </div>

          <Link
            to={`/formations/${program.category}/${program.slug}`}
            className="flex items-center gap-2 text-sm font-black text-[#0B0B0B] hover:text-[#7AC943] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Voir <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
