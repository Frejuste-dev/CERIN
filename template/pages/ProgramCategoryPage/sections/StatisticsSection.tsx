import React from "react";
import { BookOpen, Users, TrendingUp, Building2 } from "lucide-react";
import { StatisticCard } from "../components/StatisticCard";
import { ProgramCategory } from "../types/category.types";

interface StatisticsSectionProps {
  category: ProgramCategory;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({ category }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatisticCard
            label="Programmes"
            value={category.programCount}
            icon={<BookOpen size={24} />}
            delay={0.1}
          />
          <StatisticCard
            label="Étudiants"
            value={category.studentCount}
            suffix="+"
            icon={<Users size={24} />}
            delay={0.2}
          />
          <StatisticCard
            label={category.slug === 'enseignement-general' ? 'Réussite' : 'Insertion'}
            value={category.employmentRate.split(' ')[0]}
            icon={<TrendingUp size={24} />}
            delay={0.3}
          />
          <StatisticCard
            label="Entreprises Partenaires"
            value={category.partnerCompanies}
            icon={<Building2 size={24} />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
