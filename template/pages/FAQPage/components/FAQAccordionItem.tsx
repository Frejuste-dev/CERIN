import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isPopular?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  categoryLabel?: string;
}

export const FAQAccordionItem: React.FC<FAQAccordionItemProps> = ({
  question,
  answer,
  isPopular,
  isOpen,
  onToggle,
  categoryLabel
}) => {
  return (
    <div 
      className={`group border rounded-3xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? "border-[#7AC943] bg-white shadow-xl shadow-[#7AC943]/5" 
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 p-6 md:p-8 text-left outline-none focus:ring-2 focus:ring-[#7AC943] focus:ring-inset"
        aria-expanded={isOpen}
      >
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            {categoryLabel && (
              <span className="text-[10px] font-black uppercase tracking-widest text-[#7AC943] bg-[#7AC943]/10 px-2 py-0.5 rounded-full">
                {categoryLabel}
              </span>
            )}
            {isPopular && (
              <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#0B0B0B] bg-[#F4D000] px-2 py-0.5 rounded-full shadow-sm">
                <Sparkles size={10} />
                Populaire
              </span>
            )}
          </div>
          <h3 className={`text-lg md:text-xl font-black leading-tight transition-colors ${
            isOpen ? "text-[#7AC943]" : "text-[#0B0B0B]"
          }`} style={{ fontFamily: "'Poppins', sans-serif" }}>
            {question}
          </h3>
        </div>
        <div className={`mt-1 transition-transform duration-500 ${isOpen ? "rotate-180 text-[#7AC943]" : "text-gray-300"}`}>
          <ChevronDown size={24} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 md:px-8 pb-8 pt-0 flex gap-6">
              <div className="w-1.5 shrink-0 bg-[#7AC943] rounded-full" />
              <div 
                className="text-gray-500 leading-relaxed text-base md:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
