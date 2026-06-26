import React from "react";
import { Quote } from "lucide-react";
import { Testimonial } from "../types/category.types";
import { motion } from "framer-motion";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-24 bg-[#0B0B0B] text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7AC943] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Histoires de Réussite
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez comment nos anciens élèves ont transformé leur parcours au sein du Groupe CERI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-[3rem] border border-white/10 relative"
            >
              <Quote size={40} className="text-[#7AC943] mb-8 opacity-50" />
              <p className="text-xl md:text-2xl font-medium mb-12 italic leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-6">
                <img 
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all"
                 onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
                <div>
                  <p className="text-lg font-black text-[#7AC943]">{t.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{t.position} @ {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
