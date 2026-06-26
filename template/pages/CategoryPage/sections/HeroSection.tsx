import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight, GraduationCap, Settings, Award } from "lucide-react";
import { CategoryMetadata } from "../../FormationsPage/types/formations.types";

interface HeroSectionProps {
  category: CategoryMetadata;
}

const iconMap: Record<string, any> = {
  GraduationCap: GraduationCap,
  Settings: Settings,
  Award: Award,
};

export const HeroSection: React.FC<HeroSectionProps> = ({ category }) => {
  const Icon = iconMap[category.icon] || GraduationCap;

  return (
    <section className="relative pt-32 pb-24 overflow-hidden text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img  
          src={category.heroImage} 
          alt={category.title}
          className="w-full h-full object-cover"
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest text-white/60">
          <Link to="/" className="hover:text-[#7AC943] transition-colors">Accueil</Link>
          <ChevronRight size={12} />
          <Link to="/formations" className="hover:text-[#7AC943] transition-colors">Formations</Link>
          <ChevronRight size={12} />
          <span className="text-white">{category.title}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-2xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#7AC943] flex items-center justify-center mb-6 shadow-lg shadow-[#7AC943]/20">
            <Icon size={32} />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {category.title}
          </h1>

          <p className="text-lg text-white/80 mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            {category.description}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#7AC943]">{category.programCount}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Programmes disponibles</span>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-3xl font-black text-[#F4D000]">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Reconnu par l'État</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
