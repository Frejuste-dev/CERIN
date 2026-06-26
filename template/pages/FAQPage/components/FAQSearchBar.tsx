import React from "react";
import { Search, X } from "lucide-react";

interface FAQSearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const FAQSearchBar: React.FC<FAQSearchBarProps> = ({ value, onChange, onClear }) => {
  return (
    <div className="relative group w-full max-w-2xl mx-auto">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#7AC943] transition-colors">
        <Search size={22} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Rechercher une question (ex: inscription, bourse, BTS...)"
        className="w-full pl-16 pr-14 py-5 bg-white rounded-2xl border-2 border-gray-100 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/5 outline-none transition-all font-medium placeholder:text-gray-300 shadow-sm group-hover:shadow-md"
        style={{ fontFamily: "'Inter', sans-serif" }}
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all outline-none focus:ring-2 focus:ring-red-500"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};
