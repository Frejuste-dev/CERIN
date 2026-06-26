import React from "react";
import { CareerPath } from "../types/program.types";
import { Briefcase, TrendingUp, Building2, Wallet } from "lucide-react";

interface CareerCardProps {
  career: CareerPath;
}

export const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  const getEmployabilityColor = (level: string) => {
    switch (level) {
      case "Très Élevé": return "bg-green-100 text-green-700";
      case "Élevé": return "bg-blue-100 text-blue-700";
      case "Moyen": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-[#F0FAF0] text-[#7AC943] flex items-center justify-center group-hover:bg-[#7AC943] group-hover:text-white transition-colors">
          <Briefcase size={28} />
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getEmployabilityColor(career.employabilityLevel)}`}>
          Employabilité: {career.employabilityLevel}
        </span>
      </div>

      <h3 className="text-xl font-black text-[#0B0B0B] mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {career.title}
      </h3>
      
      <p className="text-sm text-gray-500 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
        {career.description}
      </p>

      <div className="space-y-4 pt-6 border-t border-gray-50">
        <div className="flex items-center gap-3">
          <Wallet size={18} className="text-[#F4D000]" />
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Salaire Moyen</p>
            <p className="text-sm font-bold text-[#0B0B0B]">{career.salaryRange}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Building2 size={18} className="text-[#F4D000]" />
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Secteurs</p>
            <p className="text-sm font-medium text-gray-600 truncate max-w-[200px]">
              {career.industries.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
