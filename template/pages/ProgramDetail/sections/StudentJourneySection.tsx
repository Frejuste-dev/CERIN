import React from "react";
import { motion } from "framer-motion";
import { UserPlus, BookOpen, Briefcase, GraduationCap, TrendingUp, ChevronRight } from "lucide-react";

export const StudentJourneySection: React.FC = () => {
  const steps = [
    { icon: UserPlus, title: "Admission", desc: "Pré-inscription et validation du dossier." },
    { icon: BookOpen, title: "Formation", desc: "Apprentissage théorique et travaux pratiques." },
    { icon: Briefcase, title: "Stage", desc: "Immersion professionnelle en entreprise." },
    { icon: GraduationCap, title: "Diplôme", desc: "Validation finale et remise du diplôme." },
    { icon: TrendingUp, title: "Emploi", desc: "Accompagnement et insertion professionnelle." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Votre parcours vers la réussite
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Un accompagnement complet de votre inscription jusqu'à votre premier emploi.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Track */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 hidden md:block -translate-y-1/2" />
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center mb-6 relative group transition-transform hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-[#7AC943] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <step.icon size={24} className="text-[#7AC943] group-hover:text-white transition-colors relative z-10" />
                  
                  {index < steps.length - 1 && (
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
                      <ChevronRight size={16} className="text-gray-300" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-[#0B0B0B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
