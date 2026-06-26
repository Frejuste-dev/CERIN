import React from "react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FAQCategoryTabProps {
  label: string;
  iconName: string;
  isActive: boolean;
  onClick: () => void;
}

export const FAQCategoryTab: React.FC<FAQCategoryTabProps> = ({ 
  label, 
  iconName, 
  isActive, 
  onClick 
}) => {
  const Icon = (Icons as any)[iconName] as LucideIcon;

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all whitespace-nowrap outline-none focus:ring-2 focus:ring-[#7AC943] focus:ring-offset-2 ${
        isActive
          ? "bg-[#7AC943] text-white shadow-lg shadow-[#7AC943]/20 scale-105"
          : "bg-white text-[#0B0B0B] border border-gray-100 hover:bg-gray-50"
      }`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {Icon && <Icon size={18} />}
      {label}
    </button>
  );
};
