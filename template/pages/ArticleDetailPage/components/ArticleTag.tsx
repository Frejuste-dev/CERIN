import React from "react";

interface ArticleTagProps {
  label: string;
}

export const ArticleTag: React.FC<ArticleTagProps> = ({ label }) => {
  return (
    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded-md uppercase tracking-widest border border-gray-200">
      {label}
    </span>
  );
};
