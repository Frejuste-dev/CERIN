import React, { useState } from "react";
import { Program } from "../types/program.types";
import { Award } from "lucide-react";
import { CurriculumAccordion } from "../components/CurriculumAccordion";

interface CurriculumSectionProps {
  program: Program;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ program }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [openSemester, setOpenSemester] = useState<number | null>(1);

  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Programme d'études
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Un cursus complet équilibrant théorie, pratique et immersion professionnelle pour devenir un expert.
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-gray-100">
            {program.curriculum.map((year) => (
              <button
                key={year.year}
                onClick={() => {
                  setActiveTab(year.year);
                  setOpenSemester(year.semesters[0].number);
                }}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === year.year 
                  ? "bg-[#7AC943] text-white shadow-lg shadow-[#7AC943]/20" 
                  : "text-gray-500 hover:text-[#7AC943]"
                }`}
              >
                Année {year.year}
              </button>
            ))}
          </div>
        </div>

        {/* Semesters Accordion */}
        <div className="space-y-4">
          {program.curriculum.find(y => y.year === activeTab)?.semesters.map((semester) => (
            <CurriculumAccordion
              key={semester.number}
              semester={semester}
              isOpen={openSemester === semester.number}
              onToggle={() => setOpenSemester(openSemester === semester.number ? null : semester.number)}
            />
          ))}
        </div>

        <div className="mt-12 p-8 rounded-[2rem] bg-[#0B0B0B] text-white flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7AC943] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/10 text-[#F4D000] flex items-center justify-center">
              <Award size={32} />
            </div>
            <div>
              <p className="text-xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>Diplôme d'État</p>
              <p className="text-sm text-gray-400">Reconnu par le MESRS de Côte d'Ivoire</p>
            </div>
          </div>
          
          <button className="relative z-10 px-8 py-4 bg-[#7AC943] hover:bg-[#68ab39] text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-[#7AC943]/20">
            Télécharger le syllabus complet (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};
