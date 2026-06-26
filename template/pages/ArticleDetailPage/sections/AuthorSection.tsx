import React from "react";
import { motion } from "framer-motion";
import { Author } from "../types/article.types";

interface AuthorSectionProps {
  author: Author;
}

export const AuthorSection: React.FC<AuthorSectionProps> = ({ author }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8"
        >
          <img  
            src={author.avatar} 
            alt={author.name} 
            className="w-24 h-24 rounded-full border-4 border-[#7AC943]/10" 
           onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
          <div className="text-center md:text-left">
            <p className="text-[10px] font-black text-[#7AC943] uppercase tracking-[0.2em] mb-2">À propos de l'auteur</p>
            <h3 className="text-2xl font-black text-[#0B0B0B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {author.name}
            </h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
              {author.role} au Groupe CERI
            </p>
            <p className="text-gray-500 leading-relaxed text-sm italic" style={{ fontFamily: "'Inter', sans-serif" }}>
              Expert passionné par l'éducation et l'innovation technologique en Afrique. Jean-Marc œuvre au quotidien pour l'épanouissement académique des étudiants du CERI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
