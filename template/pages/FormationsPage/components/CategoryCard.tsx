import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { GraduationCap, Settings, Award, ArrowRight } from "lucide-react";
import { CategoryMetadata } from "../types/formations.types";

interface CategoryCardProps {
  category: CategoryMetadata;
  index: number;
}

const iconMap: Record<string, any> = {
  GraduationCap: GraduationCap,
  Settings: Settings,
  Award: Award,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  const Icon = iconMap[category.icon] || GraduationCap;
  const isYellow = category.slug === "enseignement-technique";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-[2.5rem] p-8 h-full transition-all hover:shadow-2xl ${
        isYellow ? "bg-[#F4D000] text-[#0B0B0B]" : "bg-white text-[#0B0B0B] border border-gray-100"
      }`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
          isYellow ? "bg-[#0B0B0B]/10" : "bg-[#F0FAF0] text-[#7AC943]"
        }`}>
          <Icon size={32} />
        </div>

        <h3 className="text-2xl font-black mb-4 leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {category.title}
        </h3>

        <p className={`text-sm mb-8 flex-grow leading-relaxed ${
          isYellow ? "text-[#0B0B0B]/80" : "text-gray-500"
        }`} style={{ fontFamily: "'Inter', sans-serif" }}>
          {category.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60">Programmes</span>
            <span className="text-xl font-black">{category.programCount}</span>
          </div>
          <Link
            to={`/formations/${category.slug}`}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isYellow ? "bg-[#0B0B0B] text-white" : "bg-[#7AC943] text-white"
            } group-hover:translate-x-2`}
          >
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-20 ${
        isYellow ? "bg-white" : "bg-[#7AC943]"
      }`} />
    </motion.div>
  );
};
