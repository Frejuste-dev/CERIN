import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface FloatingAdmissionCTAProps {
  isVisible: boolean;
}

export const FloatingAdmissionCTA: React.FC<FloatingAdmissionCTAProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-lg"
        >
          <div className="bg-[#0B0B0B] text-white p-4 rounded-3xl shadow-2xl border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7AC943] flex items-center justify-center">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-black uppercase tracking-widest text-[#7AC943]">Admissions 2026</p>
                <p className="text-[10px] text-gray-400 font-medium">Inscrivez-vous avant le 30 Septembre</p>
              </div>
            </div>
            
            <a
              href="#admission"
              className="flex items-center gap-2 px-6 py-3 bg-[#7AC943] text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-[#8BD852] transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Je m'inscris
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
