import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight, Home, HelpCircle } from "lucide-react";

interface HeroSectionProps {
  totalCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ totalCount }) => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#F5F6F8]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7AC943]/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#F4D000]/5 skew-x-12 transform -translate-x-1/4" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <Link to="/" className="hover:text-[#7AC943] transition-colors flex items-center gap-1">
              <Home size={12} />
              Accueil
            </Link>
            <ChevronRight size={10} />
            <span className="text-[#0B0B0B]">FAQ</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-[#7AC943] mb-8">
              <HelpCircle size={40} />
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B0B0B] mb-6 leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Questions Fréquentes
            </h1>

            <p 
              className="text-lg md:text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Trouvez rapidement les réponses à vos questions sur les admissions, 
              la scolarité, les diplômes et bien plus encore.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#7AC943] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7AC943]">
                {totalCount} réponses à vos questions
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
