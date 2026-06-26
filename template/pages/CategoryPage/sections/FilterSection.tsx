import React from "react";
import { Filter, ChevronDown } from "lucide-react";

interface FilterSectionProps {
  diploma: string;
  setDiploma: (val: string) => void;
  studyMode: string;
  setStudyMode: (val: string) => void;
  duration: string;
  setDuration: (val: string) => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  diploma, setDiploma,
  studyMode, setStudyMode,
  duration, setDuration
}) => {
  return (
    <section className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-[#0B0B0B] mr-4">
            <Filter size={18} className="text-[#7AC943]" />
            <span className="text-sm font-bold uppercase tracking-widest">Filtrer par</span>
          </div>

          {/* Diploma Filter */}
          <div className="relative group">
            <select
              value={diploma}
              onChange={(e) => setDiploma(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 pr-10 text-sm font-bold text-[#0B0B0B] focus:outline-none focus:border-[#7AC943] transition-colors cursor-pointer"
            >
              <option value="All">Tous les diplômes</option>
              <option value="CAP">CAP</option>
              <option value="BT">BT</option>
              <option value="BTS">BTS</option>
              <option value="Licence">Licence</option>
              <option value="Master">Master</option>
              <option value="Baccalauréat">Baccalauréat</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>

          {/* Study Mode Filter */}
          <div className="relative group">
            <select
              value={studyMode}
              onChange={(e) => setStudyMode(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 pr-10 text-sm font-bold text-[#0B0B0B] focus:outline-none focus:border-[#7AC943] transition-colors cursor-pointer"
            >
              <option value="All">Tous les modes</option>
              <option value="Présentiel">Présentiel</option>
              <option value="Hybride">Hybride</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>

          {/* Duration Filter */}
          <div className="relative group">
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 pr-10 text-sm font-bold text-[#0B0B0B] focus:outline-none focus:border-[#7AC943] transition-colors cursor-pointer"
            >
              <option value="All">Toutes les durées</option>
              <option value="2 ans">2 ans</option>
              <option value="3 ans">3 ans</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>

          {(diploma !== "All" || studyMode !== "All" || duration !== "All") && (
            <button
              onClick={() => { setDiploma("All"); setStudyMode("All"); setDuration("All"); }}
              className="text-xs font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-widest"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
