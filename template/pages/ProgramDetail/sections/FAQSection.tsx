import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Program } from "../types/program.types";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  program: Program;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ program }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-gray-50 text-gray-500 border border-gray-100">
            <HelpCircle size={16} /> FAQ
          </div>
          <h2 className="text-3xl font-extrabold text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Questions fréquentes
          </h2>
          <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
            Tout ce que vous devez savoir sur le {program.programCode} au Groupe CERI.
          </p>
        </div>

        <div className="space-y-4">
          {program.faq.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all ${
                openIndex === index ? "border-[#7AC943] bg-[#F0FAF0]/30 shadow-sm" : "border-gray-100 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <span className={`font-bold transition-colors ${openIndex === index ? "text-[#0B0B0B]" : "text-gray-600 group-hover:text-[#0B0B0B]"}`}>
                  {item.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? "bg-[#7AC943] text-white" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Vous avez d'autres questions ? <a href="/contact" className="text-[#7AC943] font-bold underline underline-offset-4 decoration-2">Contactez notre équipe</a>
          </p>
        </div>
      </div>
    </section>
  );
};
