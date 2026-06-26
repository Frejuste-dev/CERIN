import React from "react";

interface CategoryBadgeProps {
  text: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7AC943]/10 border border-[#7AC943]/20 rounded-full">
      <div className="w-2 h-2 rounded-full bg-[#7AC943] animate-pulse" />
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7AC943]">
        {text}
      </span>
    </div>
  );
};
