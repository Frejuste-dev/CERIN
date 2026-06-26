import { Zap, Calculator, HardHat, FileText, Wrench, HeartPulse, LucideIcon } from "lucide-react";

export const getIcon = (title: string): LucideIcon => {
  const t = title.toLowerCase();
  if (t.includes("électr")) return Zap;
  if (t.includes("compt")) return Calculator;
  if (t.includes("génie") || t.includes("bât")) return HardHat;
  if (t.includes("secrét")) return FileText;
  if (t.includes("mécan")) return Wrench;
  if (t.includes("social") || t.includes("médic")) return HeartPulse;
  return Zap;
};
