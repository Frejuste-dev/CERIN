import React from "react";
import { LucideIcon } from "lucide-react";

interface QuickFactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const QuickFactCard: React.FC<QuickFactCardProps> = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-[#F0FAF0] text-[#7AC943] flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </p>
      <p className="text-lg font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {value}
      </p>
    </div>
  );
};
