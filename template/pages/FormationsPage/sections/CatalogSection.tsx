import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProgramCard } from "../components/ProgramCard";
import { Program } from "../types/formations.types";
import { SearchBar } from "../components/SearchBar";
import { X, Search } from "lucide-react";

interface CatalogSectionProps {
  programs: Program[];
  categories: { id: string; title: string; slug: string }[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
  selectedDiplomas: string[];
  onDiplomaToggle: (diploma: string) => void;
  selectedLevels: string[];
  onLevelToggle: (level: string) => void;
  onReset: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  programs,
  categories,
  activeCategory,
  onCategoryChange,
  selectedDiplomas,
  onDiplomaToggle,
  selectedLevels,
  onLevelToggle,
  onReset,
  searchQuery,
  onSearchChange,
  onSearchClear
}) => {
  const hasActiveFilters = activeCategory !== "all" || selectedDiplomas.length > 0 || selectedLevels.length > 0 || searchQuery.trim() !== "";

  return (
    <section className="py-24 bg-white" id="catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-32">
              <FilterSidebar 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={onCategoryChange}
                selectedDiplomas={selectedDiplomas}
                onDiplomaToggle={onDiplomaToggle}
                selectedLevels={selectedLevels}
                onLevelToggle={onLevelToggle}
                onReset={onReset}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            {/* Mobile Filters & Search */}
            <div className="lg:hidden mb-12 space-y-6">
              <SearchBar 
                value={searchQuery} 
                onChange={onSearchChange} 
                onClear={onSearchClear} 
              />
              <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
                <button
                  onClick={onReset}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold border ${
                    !hasActiveFilters ? "bg-gray-100 border-transparent text-gray-400" : "bg-red-50 border-red-100 text-red-500"
                  }`}
                >
                  Réinitialiser
                </button>
                {/* Simplified mobile category toggle */}
                <button
                  onClick={() => onCategoryChange("all")}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                    activeCategory === "all" ? "bg-[#7AC943] border-[#7AC943] text-white" : "bg-white border-gray-200 text-gray-600"
                  }`}
                >
                  Toutes
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.slug)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      activeCategory === cat.slug ? "bg-[#7AC943] border-[#7AC943] text-white" : "bg-white border-gray-200 text-gray-600"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
              <div>
                <h2 className="text-2xl font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {programs.length} formation{programs.length > 1 ? 's' : ''} disponible{programs.length > 1 ? 's' : ''}
                </h2>
                {hasActiveFilters && (
                  <p className="text-sm text-gray-500 mt-1">Filtres actifs appliqués</p>
                )}
              </div>

              {/* Active Filter Chips */}
              <div className="flex flex-wrap gap-2">
                {activeCategory !== "all" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#7AC943]/10 text-[#7AC943] text-[10px] font-black uppercase tracking-widest rounded-full">
                    {activeCategory.replace("-", " ")}
                    <button onClick={() => onCategoryChange("all")}><X size={10} /></button>
                  </span>
                )}
                {selectedDiplomas.map(d => (
                  <span key={d} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#F4D000]/10 text-[#F4D000] text-[10px] font-black uppercase tracking-widest rounded-full">
                    {d}
                    <button onClick={() => onDiplomaToggle(d)}><X size={10} /></button>
                  </span>
                ))}
                {selectedLevels.map(l => (
                  <span key={l} className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#0B0B0B]/10 text-[#0B0B0B] text-[10px] font-black uppercase tracking-widest rounded-full">
                    {l}
                    <button onClick={() => onLevelToggle(l)}><X size={10} /></button>
                  </span>
                ))}
                {searchQuery.trim() !== "" && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-full">
                    "{searchQuery}"
                    <button onClick={onSearchClear}><X size={10} /></button>
                  </span>
                )}
              </div>
            </div>

            {/* Program Grid */}
            {programs.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {programs.map((program) => (
                    <motion.div
                      key={program.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProgramCard program={program} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-6">
                  <Search size={32} className="text-gray-200" />
                </div>
                <p className="text-xl font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Aucun résultat trouvé
                </p>
                <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
                  Essayez d'ajuster vos filtres ou votre recherche pour trouver ce que vous cherchez.
                </p>
                <button
                  onClick={onReset}
                  className="mt-8 px-8 py-4 bg-[#7AC943] text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-lg shadow-[#7AC943]/20"
                >
                  Tout voir
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
