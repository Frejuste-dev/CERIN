import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/program.types";
import { CheckCircle2 } from "lucide-react";

interface OverviewSectionProps {
  program: Program;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ program }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-extrabold text-[#0B0B0B] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Présentation du programme
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p>{program.description}</p>
              <h3 className="text-xl font-bold text-[#0B0B0B] mt-8 mb-4">Objectifs de la formation</h3>
              <ul className="space-y-3">
                {program.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#7AC943]" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Learning Outcomes Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#0B0B0B] text-white p-10 rounded-[2rem] shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7AC943] opacity-10 blur-3xl" />
            
            <h3 className="text-2xl font-bold mb-8 relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ce que vous saurez faire
            </h3>
            
            <div className="space-y-6 relative z-10">
              {program.learningOutcomes.map((outcome, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-[#7AC943]" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-3xl font-black text-[#7AC943]">100%</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Compétences Pro</p>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#F4D000]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
