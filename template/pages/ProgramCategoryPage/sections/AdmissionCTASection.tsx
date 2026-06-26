import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Sparkles, ArrowRight } from "lucide-react";

export const AdmissionCTASection: React.FC = () => {
  return (
    <section id="admission" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#7AC943] rounded-[4rem] p-8 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-[#7AC943]/30">
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B0B0B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="flex-1 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-[10px] font-black uppercase tracking-widest mb-8">
              <Sparkles size={14} />
              Session 2026-2027 Ouverte
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Rejoignez le <br /> Groupe CERI dès maintenant
            </h2>

            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              Ne manquez pas l'opportunité de vous former dans un environnement d'excellence. 
              Les admissions sont traitées par ordre d'arrivée.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl border border-white/10">
                <Calendar className="text-white mb-2" size={20} />
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Date Limite</p>
                <p className="text-sm font-bold text-white">30 Sept. 2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-3xl border border-white/10">
                <Users className="text-white mb-2" size={20} />
                <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Places</p>
                <p className="text-sm font-bold text-white">Limitées</p>
              </div>
            </div>

            <a
              href="/admissions"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0B0B0B] text-white font-black text-base uppercase tracking-widest rounded-3xl hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl shadow-black/20"
            >
              Candidater en ligne
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="flex-1 hidden lg:block relative z-10">
            <div className="relative">
              <img 
                src="https://source.unsplash.com/800x500/?education,university"
                alt="Admissions CERI"
                className="rounded-[3rem] shadow-2xl rotate-2"
               onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl animate-bounce">
                <p className="text-4xl font-black text-[#7AC943] leading-none">85%</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Places déjà réservées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
