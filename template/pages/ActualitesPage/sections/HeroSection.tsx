import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#F0FAF0] to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7AC943]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4D000]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest">
          <Link to="/" className="text-gray-400 hover:text-[#7AC943] transition-colors">Accueil</Link>
          <ChevronRight size={12} className="text-gray-300" />
          <span className="text-[#7AC943]">Actualités</span>
        </nav>

        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-[#0B0B0B] mb-6 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Actualités du <span className="text-[#7AC943]">Groupe CERI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Restez informé des derniers événements, des réussites de nos étudiants et des actualités institutionnelles de notre groupe.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
