import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/program.types";
import { ProgramBreadcrumb } from "../components/ProgramBreadcrumb";
import { ProgramBadge } from "../components/ProgramBadge";
import { Calendar, MapPin, Clock, Users, GraduationCap, Download, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  program: Program;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ program }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#0B0B0B] text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img  
          src={program.heroImage} 
          alt={program.title}
          className="w-full h-full object-cover opacity-55"
         onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ProgramBreadcrumb category={program.category} title={program.title} />
            
            <div className="flex flex-wrap gap-2 mb-4">
              <ProgramBadge label={program.category.replace("-", " ")} variant="outline" />
              <ProgramBadge label={program.diploma} variant="secondary" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {program.title}
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              {program.description}
            </p>

            {/* Quick Metadata */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10"><Clock size={18} className="text-[#7AC943]" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Durée</p>
                  <p className="text-sm font-semibold">{program.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10"><MapPin size={18} className="text-[#7AC943]" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Campus</p>
                  <p className="text-sm font-semibold">{program.campus}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10"><GraduationCap size={18} className="text-[#7AC943]" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Niveau</p>
                  <p className="text-sm font-semibold">{program.level}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/10"><Users size={18} className="text-[#7AC943]" /></div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Places</p>
                  <p className="text-sm font-semibold">{program.availableSeats} disponibles</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#admission" 
                className="px-8 py-4 bg-[#7AC943] hover:bg-[#68ab39] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#7AC943]/20"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Je m'inscris
              </a>
              <button 
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Demander infos
              </button>
              <a 
                href={program.brochurePdf}
                className="px-8 py-4 bg-[#F4D000] hover:bg-[#d9b900] text-[#0B0B0B] font-bold rounded-xl transition-all flex items-center gap-2"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <Download size={18} />
                Brochure
              </a>
            </div>
          </motion.div>

          {/* Right Content: Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
              <img  
                src="https://source.unsplash.com/800x500/?education,university" 
                alt="Étudiant CERI"
                className="w-full h-auto"
               onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
            </div>

            {/* Floating Stats Cards */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -left-12 top-1/4 bg-white p-5 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F0FAF0] flex items-center justify-center">
                  <CheckCircle2 className="text-[#7AC943]" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-black text-[#0B0B0B] leading-none">{program.employmentRate}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Insertion</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -right-8 bottom-1/4 bg-[#7AC943] p-5 rounded-2xl shadow-xl z-20 text-white"
            >
              <p className="text-sm font-bold leading-tight">Diplôme reconnu<br/>par l'État</p>
              <div className="mt-2 h-1 w-8 bg-white/40 rounded-full" />
            </motion.div>

            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute left-1/4 -bottom-6 bg-[#F4D000] p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
            >
              <Calendar size={20} className="text-[#0B0B0B]" />
              <div className="text-[#0B0B0B]">
                <p className="text-[9px] font-bold uppercase opacity-60 leading-none">Prochaine rentrée</p>
                <p className="text-sm font-black">Octobre 2026</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
