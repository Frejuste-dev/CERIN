import React from "react";
import { Program } from "../types/program.types";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StickyMobileCTAProps {
  program: Program;
  isVisible: boolean;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ program, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 xl:hidden p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#7AC943]">{program.programCode}</p>
              <p className="text-sm font-bold text-[#0B0B0B] truncate max-w-[150px]">{program.title}</p>
            </div>
            <div className="flex-grow flex gap-3">
              <button className="flex-1 py-3 bg-[#7AC943] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2">
                Postuler <ArrowRight size={16} />
              </button>
              <button className="px-4 py-3 bg-[#F4D000] text-[#0B0B0B] font-bold rounded-xl text-sm">
                Brochure
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
