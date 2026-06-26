import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Download, 
  MessageCircle,
  TrendingUp,
  Award
} from "lucide-react";
import { Program } from "../types/formations.types";

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  const isLowSpots = program.spotsRemaining <= 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Image & Badges */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {program.isNew && (
            <span className="px-3 py-1 bg-[#7AC943] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              Nouveau
            </span>
          )}
          {program.isPopular && (
            <span className="px-3 py-1 bg-[#F4D000] text-[#0B0B0B] text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              Populaire
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-bold text-[#0B0B0B] uppercase tracking-widest">
            {program.diploma}
          </span>
          <div className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg ${
            isLowSpots ? "bg-red-500 text-white animate-pulse" : "bg-[#7AC943] text-white"
          }`}>
            {program.spotsRemaining} places
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7AC943]" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            {program.category.replace("-", " ")}
          </span>
        </div>

        <h3 className="text-xl font-black text-[#0B0B0B] mb-4 leading-tight group-hover:text-[#7AC943] transition-colors line-clamp-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <Link to={`/formations/${program.category}/${program.slug}`}>
            {program.title}
          </Link>
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          {program.shortDescription}
        </p>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Clock size={14} className="text-[#F4D000]" />
            {program.duration}
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Award size={14} className="text-[#7AC943]" />
            {program.level}
          </div>
        </div>

        {/* Actions Stack */}
        <div className="mt-auto space-y-3">
          <Link
            to={`/formations/${program.category}/${program.slug}`}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#0B0B0B] text-white font-black text-sm rounded-2xl hover:bg-[#7AC943] transition-all transform hover:scale-[1.02] shadow-xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Détails du programme
            <ArrowRight size={18} />
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={program.brochureUrl}
              className="flex items-center justify-center gap-2 py-3 bg-gray-50 text-[#0B0B0B] font-bold text-[11px] rounded-xl hover:bg-gray-100 transition-colors uppercase tracking-widest"
            >
              <Download size={14} />
              Brochure
            </a>
            <a
              href={`https://wa.me/22501010101?text=Bonjour, je souhaite en savoir plus sur le programme ${program.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#25D366]/10 text-[#25D366] font-bold text-[11px] rounded-xl hover:bg-[#25D366] hover:text-white transition-all uppercase tracking-widest"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
