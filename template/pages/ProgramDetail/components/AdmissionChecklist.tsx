import React from "react";
import { CheckCircle2, FileText, Info } from "lucide-react";

interface AdmissionChecklistProps {
  requirements: string[];
  documents: string[];
}

export const AdmissionChecklist: React.FC<AdmissionChecklistProps> = ({ requirements, documents }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#F0FAF0] text-[#7AC943]">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Conditions d'admission
          </h3>
        </div>
        <ul className="space-y-4">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#7AC943]/10 text-[#7AC943] flex items-center justify-center">
                <CheckCircle2 size={12} />
              </div>
              <span className="text-sm text-gray-600 font-medium leading-relaxed">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#FFFBEB] text-[#F4D000]">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Dossier à fournir
          </h3>
        </div>
        <ul className="space-y-4">
          {documents.map((doc, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#F4D000]/10 text-[#F4D000] flex items-center justify-center">
                <FileText size={12} />
              </div>
              <span className="text-sm text-gray-600 font-medium leading-relaxed">{doc}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 p-4 bg-blue-50 rounded-xl flex gap-3">
          <Info size={18} className="text-blue-500 flex-shrink-0" />
          <p className="text-[11px] text-blue-700 leading-relaxed italic">
            Tous les documents doivent être des originaux ou des copies certifiées conformes datant de moins de 3 mois.
          </p>
        </div>
      </div>
    </div>
  );
};
