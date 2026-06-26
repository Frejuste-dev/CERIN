import React from "react";
import { motion } from "framer-motion";

interface StatisticCardProps {
  label: string;
  value: string | number;
  suffix?: string;
  icon: React.ReactNode;
  delay?: number;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ 
  label, 
  value, 
  suffix = "", 
  icon,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#7AC943]/10 flex items-center justify-center text-[#7AC943] group-hover:bg-[#7AC943] group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-tight">
          {label}
        </span>
      </div>
      <div className="text-3xl font-black text-[#0B0B0B]" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {value}{suffix}
      </div>
    </motion.div>
  );
};
