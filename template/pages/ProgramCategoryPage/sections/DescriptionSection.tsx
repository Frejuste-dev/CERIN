import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ProgramCategory } from "../types/category.types";

interface DescriptionSectionProps {
  category: ProgramCategory;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ category }) => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-100 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#7AC943]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Pourquoi nous choisir ?</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] mb-8 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Une approche pédagogique centrée sur votre réussite
            </h2>

            <p className="text-gray-500 mb-10 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              {category.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Diplômes reconnus par l'État",
                "Corps professoral expert",
                "Infrastructures modernes",
                "Suivi personnalisé",
                "Insertion professionnelle assistée",
                "Cadre d'étude stimulant"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943]">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-bold text-[#0B0B0B]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="bg-[#0B0B0B] p-12 rounded-[3rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7AC943]/20 blur-3xl" />
              <h3 className="text-2xl font-black mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Perspectives d'avenir</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Choisir l'excellence du Groupe CERI, c'est s'ouvrir les portes d'une carrière brillante. 
                Que vous visiez les grandes écoles d'ingénieurs, l'expertise technique ou les postes de direction.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-[#7AC943] font-black">01.</span>
                  <div>
                    <p className="font-bold">Poursuite d'études</p>
                    <p className="text-xs text-gray-500">Accès facilité aux meilleures universités nationales et internationales.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#7AC943] font-black">02.</span>
                  <div>
                    <p className="font-bold">Réseau Alumni</p>
                    <p className="text-xs text-gray-500">Intégrez une communauté de plus de 10 000 anciens élèves.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
