import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { CategoryBreadcrumb } from "../components/CategoryBreadcrumb";
import { CategoryBadge } from "../components/CategoryBadge";
import { ProgramCategory } from "../types/category.types";

interface HeroSectionProps {
  category: ProgramCategory;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ category }) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#F5F6F8]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7AC943]/5 -skew-x-12 transform translate-x-1/4 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CategoryBreadcrumb categoryName={category.name} />
              <CategoryBadge text="Inscriptions Ouvertes" />
              
              <h1 
                className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0B0B0B] mt-8 mb-6 leading-[1.1]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {category.heroTitle}
              </h1>

              <p 
                className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {category.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#admission"
                  className="flex items-center justify-center gap-2 px-10 py-5 bg-[#7AC943] text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-xl shadow-[#7AC943]/20 hover:bg-[#8BD852] transition-all transform hover:scale-[1.02]"
                >
                  Je m'inscris
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#brochure"
                  className="flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#0B0B0B] font-black text-sm uppercase tracking-widest rounded-2xl border border-gray-100 shadow-sm hover:bg-gray-50 transition-all"
                >
                  Télécharger la brochure
                  <Download size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-[#7AC943] rounded-[3rem] rotate-6 transform scale-95" />
              <img 
                src={category.heroImage}
                alt={category.name}
                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl"
               onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 hidden md:block">
                <p className="text-[10px] font-black text-[#7AC943] uppercase tracking-widest mb-1">Taux de réussite</p>
                <p className="text-3xl font-black text-[#0B0B0B]">{category.employmentRate.split(' ')[0]}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
