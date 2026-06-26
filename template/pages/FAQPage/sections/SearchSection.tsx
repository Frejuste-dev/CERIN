import React from "react";
import { FAQSearchBar } from "../components/FAQSearchBar";
import { motion } from "framer-motion";

interface SearchSectionProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  resultCount: number;
  isSearching: boolean;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  value,
  onChange,
  onClear,
  resultCount,
  isSearching
}) => {
  return (
    <section className="relative z-20 -mt-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FAQSearchBar value={value} onChange={onChange} onClear={onClear} />
        </motion.div>
        
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-center"
          >
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {resultCount} résultat{resultCount > 1 ? "s" : ""} trouvé{resultCount > 1 ? "s" : ""} pour "{value}"
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
