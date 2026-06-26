import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, BookOpen, Briefcase } from "lucide-react";

export const WhyCeriSection: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: "Diplômes reconnus",
      description: "Toutes nos formations sont agréées par l'État et reconnues sur le marché de l'emploi.",
    },
    {
      icon: Users,
      title: "Enseignants experts",
      description: "Un corps professoral composé de professionnels en activité et d'académiciens chevronnés.",
    },
    {
      icon: BookOpen,
      title: "Pédagogie active",
      description: "Apprentissage par la pratique avec des projets réels et des études de cas concrètes.",
    },
    {
      icon: Briefcase,
      title: "Immersion pro",
      description: "Stages obligatoires et partenariats avec les leaders de l'industrie ivoirienne.",
    },
    {
      icon: CheckCircle2,
      title: "Réussite garantie",
      description: "Un accompagnement personnalisé pour assurer l'obtention de votre diplôme.",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-[#0B0B0B] mb-4"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Pourquoi choisir le Groupe CERI ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Nous formons les leaders de demain en alliant rigueur académique et expertise pratique.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F0FAF0] text-[#7AC943] flex items-center justify-center mb-6 group-hover:bg-[#7AC943] group-hover:text-white transition-colors">
                <reason.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#0B0B0B] mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {reason.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
