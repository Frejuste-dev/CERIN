import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, Building2, Briefcase } from "lucide-react";

const trustStats = [
  { 
    icon: Users, 
    value: 5000, 
    suffix: "+", 
    label: "Étudiants formés", 
    desc: "Depuis 1998" 
  },
  { 
    icon: TrendingUp, 
    value: 92, 
    suffix: "%", 
    label: "Taux de réussite", 
    desc: "Aux examens nationaux" 
  },
  { 
    icon: Briefcase, 
    value: 89, 
    suffix: "%", 
    label: "Taux d'emploi", 
    desc: "À 6 mois du diplôme" 
  },
  { 
    icon: Building2, 
    value: 50, 
    suffix: "+", 
    label: "Partenaires entreprises", 
    desc: "Pour stages & alternance" 
  },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return count;
}

function TrustStatCard({ stat }: { stat: typeof trustStats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 1800, visible);
  const Icon = stat.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className="relative text-center p-8 rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-lg"
      style={{ 
        background: "white", 
        border: "1px solid #E5E7EB"
      }}
      role="region"
      aria-label={`${stat.label}: ${stat.value}${stat.suffix}`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        style={{ background: "rgba(46,168,42,0.05)" }} 
      />
      
      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ background: "#F0FAF0" }}
        >
          <Icon size={28} style={{ color: "#2EA82A" }} aria-hidden="true" />
        </div>

        <div 
          className="text-gray-900 mb-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, lineHeight: 1 }}
          aria-label={`${count}${stat.suffix}`}
        >
          {count}{stat.suffix}
        </div>

        <div className="text-gray-700 font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {stat.label}
        </div>

        <div className="text-gray-500 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          {stat.desc}
        </div>
      </div>
    </div>
  );
}

interface TrustStatsSectionProps {
  variant?: "default" | "premium";
}

export function TrustStatsSection({ variant = "default" }: TrustStatsSectionProps) {
  const isPremium = variant === "premium";

  return (
    <section 
      className={`py-16 md:py-24 ${isPremium ? "bg-[#F5F6F8]" : "bg-white"}`}
      aria-labelledby="trust-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ 
              background: isPremium ? "white" : "#F0FAF0", 
              color: "#2EA82A", 
              border: "1px solid #D1E8D1" 
            }}
          >
            CERIN en chiffres
          </div>
          <h2 
            id="trust-section-title"
            className="text-gray-900 mb-4"
            style={{ 
              fontFamily: "'Poppins', sans-serif", 
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", 
              fontWeight: 800 // Premium uses heavier weight
            }}
          >
            {isPremium ? "Excellence Académique & Professionnelle" : "Des résultats qui font la différence"}
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {isPremium 
              ? "Rejoignez une institution qui place la réussite et l'insertion de ses étudiants au cœur de son modèle pédagogique."
              : "Notre engagement envers la réussite de chaque étudiant se reflète dans ces chiffres."
            }
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStats.map((stat) => (
            <TrustStatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Trust message */}
        <div 
          className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl text-center"
          style={{ background: isPremium ? "white" : "#F0FAF0", border: isPremium ? "1px solid #E5E7EB" : "none" }}
          role="complementary"
          aria-label="Trust and credibility message"
        >
          <p 
            className="text-gray-700 text-lg font-medium max-w-3xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Le Groupe CERIN est accrédité par le Ministère de l'Enseignement Supérieur. Vos données sont sécurisées avec un chiffrement SSL 256-bit.
          </p>
        </div>
      </div>
    </section>
  );
}
