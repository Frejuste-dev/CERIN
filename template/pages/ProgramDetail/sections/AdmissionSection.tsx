import React from "react";
import { Program } from "../types/program.types";
import { AdmissionChecklist } from "../components/AdmissionChecklist";
import { Clock, PieChart, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface AdmissionSectionProps {
  program: Program;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ program }) => {
  return (
    <section id="admission" className="py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Processus d'admission
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Rejoignez le Groupe CERI en suivant ces étapes simples pour valider votre inscription.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F0FAF0] text-[#7AC943] flex items-center justify-center mb-6">
              <PieChart size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B0B0B] mb-2">Taux d'acceptation</h3>
            <p className="text-3xl font-black text-[#7AC943] mb-2">24%</p>
            <p className="text-sm text-gray-500 italic">Sélection rigoureuse basée sur le mérite et la motivation.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FFFBEB] text-[#F4D000] flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B0B0B] mb-2">Temps de réponse</h3>
            <p className="text-3xl font-black text-[#F4D000] mb-2">48h</p>
            <p className="text-sm text-gray-500 italic">Délai moyen de traitement de votre dossier après dépôt complet.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-[2rem] border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-lg font-bold text-[#0B0B0B] mb-2">Dépôt Dossier</h3>
            <p className="text-3xl font-black text-blue-500 mb-2">100% En ligne</p>
            <p className="text-sm text-gray-500 italic">Possibilité de soumettre vos documents directement via notre portail.</p>
          </motion.div>
        </div>

        <AdmissionChecklist 
          requirements={program.admissionRequirements}
          documents={program.requiredDocuments}
        />

        <div className="mt-16 text-center">
          <button className="px-12 py-5 bg-[#0B0B0B] text-white font-black rounded-2xl hover:scale-105 transition-transform shadow-xl">
            Commencer ma pré-inscription
          </button>
          <p className="mt-4 text-xs text-gray-400 font-medium uppercase tracking-widest">
            Date limite : {program.applicationDeadline}
          </p>
        </div>
      </div>
    </section>
  );
};
