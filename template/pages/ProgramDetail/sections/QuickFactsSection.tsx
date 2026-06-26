import React from "react";
import { motion } from "framer-motion";
import { Program } from "../types/program.types";
import { GraduationCap, Clock, BookOpen, CreditCard, Calendar } from "lucide-react";
import { QuickFactCard } from "../components/QuickFactCard";

interface QuickFactsSectionProps {
  program: Program;
}

export const QuickFactsSection: React.FC<QuickFactsSectionProps> = ({ program }) => {
  const facts = [
    { icon: GraduationCap, label: "Diplôme", value: program.diploma },
    { icon: Clock, label: "Durée", value: program.duration },
    { icon: BookOpen, label: "Niveau", value: program.level },
    { icon: CreditCard, label: "Scolarité", value: program.tuition.tuition.split(" /")[0] },
    { icon: Calendar, label: "Rentrée", value: "Octobre 2026" },
  ];

  return (
    <section className="py-12 bg-white relative z-20 -mt-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <QuickFactCard {...fact} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
