import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Semester } from "../types/program.types";
import { ChevronDown, Award, Clock } from "lucide-react";

interface CurriculumAccordionProps {
  semester: Semester;
  isOpen: boolean;
  onToggle: () => void;
}

export const CurriculumAccordion: React.FC<CurriculumAccordionProps> = ({ semester, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-4">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F0FAF0] text-[#7AC943] flex items-center justify-center font-black">
            S{semester.number}
          </div>
          <h3 className="text-lg font-bold text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Semestre {semester.number}
          </h3>
        </div>
        <ChevronDown 
          size={20} 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-8 border-t border-gray-50 pt-6">
              <div className="grid gap-4">
                {semester.subjects.map((subject, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-gray-50 group hover:bg-[#F0FAF0] transition-colors gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7AC943]" />
                      <span className="text-sm font-semibold text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {subject.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <Award size={14} className="text-[#7AC943]" />
                        <span>{subject.credits} Crédits</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <Clock size={14} className="text-[#F4D000]" />
                        <span>{subject.hours}h</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
