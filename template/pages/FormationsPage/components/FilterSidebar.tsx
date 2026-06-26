import React from "react";
import { Filter, X, Check } from "lucide-react";
import { ProgramCategory } from "../types/formations.types";

interface FilterSidebarProps {
  categories: { id: string; title: string; slug: string }[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
  selectedDiplomas: string[];
  onDiplomaToggle: (diploma: string) => void;
  selectedLevels: string[];
  onLevelToggle: (level: string) => void;
  onReset: () => void;
}

const DIPLOMAS = ["BTS", "Licence", "Master", "BT", "CAP", "Baccalauréat", "BEPC"];
const LEVELS = ["Bac", "Bac +2", "Bac +3", "3ème", "Lycée", "Collège", "Fin de cycle primaire"];

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  selectedDiplomas,
  onDiplomaToggle,
  selectedLevels,
  onLevelToggle,
  onReset
}) => {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Filter size={20} className="text-[#7AC943]" />
          <h2 className="text-lg font-black uppercase tracking-widest" style={{ fontFamily: "'Poppins', sans-serif" }}>Filtres</h2>
        </div>
        {(activeCategory !== "all" || selectedDiplomas.length > 0 || selectedLevels.length > 0) && (
          <button 
            onClick={onReset}
            className="text-[10px] font-bold text-red-500 uppercase tracking-widest hover:underline"
          >
            Réinitialiser
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Catégories</h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onCategoryChange("all")}
            className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeCategory === "all" 
              ? "bg-[#7AC943] text-white shadow-lg shadow-[#7AC943]/20" 
              : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            Toutes les formations
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.slug)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat.slug 
                ? "bg-[#7AC943] text-white shadow-lg shadow-[#7AC943]/20" 
                : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Diplomas */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Diplômes</h3>
        <div className="grid grid-cols-1 gap-2">
          {DIPLOMAS.map((diploma) => (
            <button
              key={diploma}
              onClick={() => onDiplomaToggle(diploma)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold border transition-all ${
                selectedDiplomas.includes(diploma)
                ? "bg-[#F0FAF0] border-[#7AC943] text-[#7AC943]"
                : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
              }`}
            >
              {diploma}
              {selectedDiplomas.includes(diploma) && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>

      {/* Levels */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Niveaux d'entrée</h3>
        <div className="grid grid-cols-1 gap-2">
          {LEVELS.map((level) => (
            <button
              key={level}
              onClick={() => onLevelToggle(level)}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold border transition-all ${
                selectedLevels.includes(level)
                ? "bg-[#FDF8E6] border-[#F4D000] text-[#0B0B0B]"
                : "bg-white border-gray-100 text-gray-600 hover:border-gray-200"
              }`}
            >
              {level}
              {selectedLevels.includes(level) && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
