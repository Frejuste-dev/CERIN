import { useEffect, useRef, useState } from "react";
import { Users, TrendingUp, Building2, Star } from "lucide-react";

const stats = [
  { icon: Users, value: 4500, suffix: "+", label: "Étudiants inscrits", desc: "sur tous les campus" },
  { icon: TrendingUp, value: 92, suffix: "%", label: "Taux de réussite", desc: "aux examens nationaux" },
  { icon: Building2, value: 120, suffix: "+", label: "Partenaires entreprises", desc: "pour l'alternance & stages" },
  { icon: Star, value: 25, suffix: " ans", label: "D'expérience", desc: "au service de l'éducation" },
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

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 1800, visible);
  const Icon = stat.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative text-center p-8 rounded-2xl overflow-hidden group" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ background: "rgba(245,200,0,0.08)" }} />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(245,200,0,0.2)" }}>
          <Icon size={26} style={{ color: "#F5C800" }} />
        </div>
        <div className="text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1 }}>
          {count}{stat.suffix}
        </div>
        <div className="text-green-100 font-semibold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{stat.label}</div>
        <div className="text-green-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.desc}</div>
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(135deg, #0F2010 0%, #1A3A1A 50%, #2EA82A 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: "rgba(245,200,0,0.15)", color: "#F5C800", border: "1px solid rgba(245,200,0,0.3)" }}>
            CERI en chiffres
          </div>
          <h2 className="text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700 }}>
            Une institution qui fait ses preuves
          </h2>
          <p className="text-green-200 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Des résultats concrets qui témoignent de notre engagement pour la réussite de chaque étudiant.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
