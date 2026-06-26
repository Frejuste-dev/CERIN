import React from "react";
import { MessageCircle, HelpCircle, ArrowRight } from "lucide-react";

interface WhatsAppCTASectionProps {
  categoryName: string;
}

export const WhatsAppCTASection: React.FC<WhatsAppCTASectionProps> = ({ categoryName }) => {
  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-12 md:p-16 border border-gray-100 flex flex-col md:flex-row items-center gap-12 shadow-sm">
          <div className="w-24 h-24 rounded-[2rem] bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
            <HelpCircle size={48} />
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Besoin d'aide pour choisir votre programme ?
            </h2>
            <p className="text-gray-500 text-lg">
              Nos conseillers académiques sont là pour vous guider vers le parcours le plus adapté à votre profil et vos ambitions.
            </p>
          </div>

          <a
            href={`https://wa.me/22501010101?text=Bonjour, j'aimerais en savoir plus sur les formations en ${categoryName}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl shadow-[#25D366]/20 whitespace-nowrap"
          >
            <MessageCircle size={24} />
            Parler à un conseiller
          </a>
        </div>
      </div>
    </section>
  );
};
