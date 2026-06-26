import { Monitor, BarChart2, Wifi, TrendingUp, HardHat, Globe, Award, LucideIcon } from "lucide-react";

export const getIcon = (title: string): LucideIcon => {
  const t = title.toLowerCase();
  if (t.includes("info")) return Monitor;
  if (t.includes("compta") || t.includes("gestion") || t.includes("finance")) return BarChart2;
  if (t.includes("telecom")) return Wifi;
  if (t.includes("marketing") || t.includes("projet")) return TrendingUp;
  if (t.includes("civil") || t.includes("industrie")) return HardHat;
  if (t.includes("communication")) return Globe;
  return Award;
};
