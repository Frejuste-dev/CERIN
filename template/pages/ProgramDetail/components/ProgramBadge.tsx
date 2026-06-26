import React from "react";

interface ProgramBadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
}

export const ProgramBadge: React.FC<ProgramBadgeProps> = ({ label, variant = "primary" }) => {
  const styles = {
    primary: { background: "#7AC943", color: "white" },
    secondary: { background: "#F4D000", color: "#0B0B0B" }, // Black on yellow for WCAG
    outline: { background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)" },
  };

  return (
    <span 
      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
      style={styles[variant]}
    >
      {label}
    </span>
  );
};
