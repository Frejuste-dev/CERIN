import React from "react";
import { Program } from "../types/program.types";
import { ArrowRight, Download } from "lucide-react";

interface FloatingDesktopCTAProps {
  program: Program;
}

export const FloatingDesktopCTA: React.FC<FloatingDesktopCTAProps> = ({ program }) => {
  return (
    <div className="hidden xl:block sticky top-32 h-fit w-80 shrink-0">
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-2xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7AC943] opacity-5 blur-[40px]" />
        
        <div className="relative z-10">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7AC943] mb-2">Session 2026-2027</p>
          <h3 className="text-xl font-black text-[#0B0B0B] mb-6 leading-tight">Prêt à lancer votre carrière ?</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400 font-medium">Frais d'inscription</span>
              <span className="text-[#0B0B0B] font-bold">{program.tuition.registration}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400 font-medium">Places restantes</span>
              <span className="text-red-500 font-bold">{program.availableSeats} disponibles</span>
            </div>
            <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
              <div className="h-full bg-[#7AC943] w-3/4" />
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 bg-[#7AC943] hover:bg-[#68ab39] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#7AC943]/20 flex items-center justify-center gap-2">
              Postuler en ligne
              <ArrowRight size={18} />
            </button>
            <a 
              href={program.brochurePdf}
              className="w-full py-4 bg-white hover:bg-gray-50 text-[#0B0B0B] font-bold rounded-xl transition-all border-2 border-gray-50 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Télécharger PDF
            </a>
          </div>

          <p className="mt-6 text-[10px] text-center text-gray-400 font-medium leading-relaxed">
            ✓ Accréditation d'État<br/>
            ✓ Réponse sous 48h garantie
          </p>
        </div>
      </div>
    </div>
  );
};
