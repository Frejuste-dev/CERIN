import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/program.types";
import { CreditCard, ShieldCheck, HelpCircle, Zap } from "lucide-react";

interface TuitionSectionProps {
  program: Program;
}

export const TuitionSection: React.FC<TuitionSectionProps> = ({ program }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Scolarité et Financement
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Une structure tarifaire transparente et des solutions de paiement adaptées à votre budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Registration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Inscription</h3>
            <p className="text-sm text-gray-500 mb-6">Frais initiaux pour la réservation de votre place et l'accès aux services.</p>
            <div className="mt-auto">
              <p className="text-4xl font-black text-[#0B0B0B]">{program.tuition.registration.split(" ")[0]}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">FCFA Unique</p>
            </div>
          </motion.div>

          {/* Card 2: Tuition (Main) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl border-4 border-[#7AC943] bg-white shadow-2xl flex flex-col items-center text-center relative scale-105 z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#7AC943] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
              Recommandé
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[#F0FAF0] text-[#7AC943] flex items-center justify-center mb-6">
              <CreditCard size={32} />
            </div>
            <h3 className="text-2xl font-black mb-2">Scolarité Annuelle</h3>
            <p className="text-sm text-gray-500 mb-6">Coût total de la formation pour une année académique complète.</p>
            <div className="mt-auto">
              <p className="text-5xl font-black text-[#0B0B0B]">{program.tuition.tuition.split(" ")[0]}</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">FCFA / AN</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 w-full text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Aucun frais caché</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Support pédagogique inclus</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Installments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl border border-gray-100 bg-[#FDF8E6] flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-white text-[#F4D000] flex items-center justify-center mb-6 shadow-sm">
              <HelpCircle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-2">Paiement Échelonné</h3>
            <p className="text-sm text-gray-600 mb-6">Facilités de paiement pour étaler votre investissement sur plusieurs mois.</p>
            <div className="mt-auto">
              <p className="text-xl font-black text-[#0B0B0B]">Jusqu'à 6 mois</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Sans frais d'intérêt</p>
            </div>
            <div className="mt-8 bg-white/50 p-4 rounded-xl w-full text-xs font-medium text-[#0B0B0B]/70">
              Simulation : ~142.000 FCFA / mois après inscription
            </div>
          </motion.div>

        </div>

        <div className="mt-16 p-8 rounded-[2rem] bg-[#F5F6F8] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7AC943] shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-lg font-bold text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>Transparence Totale</p>
              <p className="text-sm text-gray-500">Le Groupe CERI s'engage à ne facturer aucun frais supplémentaire imprévu durant l'année.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Moyens de paiement :</span>
            <div className="flex gap-2">
              {["OM", "MTN", "VISA"].map(m => (
                <div key={m} className="px-3 py-1 bg-white rounded-md text-[10px] font-black border border-gray-200">{m}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
