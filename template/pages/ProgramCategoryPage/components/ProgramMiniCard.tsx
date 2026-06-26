import React from "react";
import { Program } from "../../../FormationsPage/types/formations.types";
import { Link } from "react-router";
import { ArrowRight, Clock, Award } from "lucide-react";

interface ProgramMiniCardProps {
  program: Program;
}

export const ProgramMiniCard: React.FC<ProgramMiniCardProps> = ({ program }) => {
  return (
    <div className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-[#7AC943]/10 text-[#7AC943] text-[10px] font-black uppercase tracking-widest rounded-full">
          {program.diploma}
        </span>
        {program.isPopular && (
          <span className="px-3 py-1 bg-[#F4D000]/10 text-[#F4D000] text-[10px] font-black uppercase tracking-widest rounded-full">
            Populaire
          </span>
        )}
      </div>

      <h3 className="text-lg font-black text-[#0B0B0B] mb-3 leading-tight group-hover:text-[#7AC943] transition-colors line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {program.title}
      </h3>

      <p className="text-xs text-gray-500 mb-6 line-clamp-2 flex-grow">
        {program.shortDescription}
      </p>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <Clock size={12} className="text-[#F4D000]" />
          {program.duration}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <Award size={12} className="text-[#7AC943]" />
          {program.level}
        </div>
      </div>

      <Link
        to={`/formations/${program.category}/${program.slug}`}
        className="flex items-center justify-center gap-2 py-4 bg-[#0B0B0B] text-white text-xs font-black uppercase tracking-widest rounded-2xl group-hover:bg-[#7AC943] transition-all"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Voir le programme
        <ArrowRight size={14} />
      </Link>
    </div>
  );
};
