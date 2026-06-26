import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Monitor, BarChart2, Wifi, TrendingUp, HardHat, Globe, Briefcase, GraduationCap, Star } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { 
  FinalCtaBanner, 
  TrustStatsSection, 
  TestimonialCarousel 
} from "../components";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

const programs = {
  BTS: [
    { icon: Monitor, code: "BTS INFO", title: "Informatique & Réseaux", desc: "Développement, administration réseau, cybersécurité", dur: "2 ans", spots: 30, slug: "bts-informatique" },
    { icon: BarChart2, code: "BTS COMPTA", title: "Comptabilité & Gestion", desc: "Comptabilité, fiscalité, contrôle de gestion", dur: "2 ans", spots: 35, slug: "bts-comptabilite" },
    { icon: Wifi, code: "BTS TELECOM", title: "Télécommunications", desc: "Réseaux, systèmes embarqués, IoT", dur: "2 ans", spots: 25, slug: "bts-telecom" },
    { icon: TrendingUp, code: "BTS MARKETING", title: "Marketing & Vente", desc: "Stratégie commerciale, digital, CRM", dur: "2 ans", spots: 40, slug: "bts-marketing" },
    { icon: HardHat, code: "BTS GC", title: "Génie Civil & Construction", desc: "BTP, métrés, suivi de chantier", dur: "2 ans", spots: 20, slug: "bts-genie-civil" },
  ],
  Licence: [
    { icon: Monitor, code: "BACH INFO", title: "Bachelor Informatique", desc: "Full-stack, data science, IA appliquée", dur: "3 ans", spots: 25, slug: "bachelor-informatique" },
    { icon: BarChart2, code: "BACH GESTION", title: "Bachelor Gestion", desc: "Management, finance, entrepreneuriat", dur: "3 ans", spots: 30, slug: "bachelor-gestion" },
    { icon: Globe, code: "BACH COM", title: "Bachelor Communication", desc: "Marketing digital, RP, brand management", dur: "3 ans", spots: 25, slug: "bachelor-communication" },
    { icon: HardHat, code: "BACH INDUS", title: "Bachelor Génie Industriel", desc: "Production, qualité, maintenance", dur: "3 ans", spots: 20, slug: "bachelor-genie-industriel" },
  ],
  Master: [
    { icon: TrendingUp, code: "MST PROJET", title: "Master Gestion de Projet", desc: "PMO, Agile, leadership, innovation", dur: "2 ans", spots: 15, slug: "master-gestion-projet" },
    { icon: Monitor, code: "MST DSI", title: "Master Systèmes d'Information", desc: "Architecture SI, cybersécurité, cloud", dur: "2 ans", spots: 12, slug: "master-si" },
    { icon: BarChart2, code: "MST FINANCE", title: "Master Finance & Contrôle", desc: "Finance d'entreprise, audit, risk management", dur: "2 ans", spots: 15, slug: "master-finance" },
  ],
};

// Program selector
function ProgramSelector() {
  const [tab, setTab] = useState<"BTS" | "Licence" | "Master">("BTS");
  const tabs: Array<"BTS" | "Licence" | "Master"> = ["BTS", "Licence", "Master"];
  const labels: Record<string, string> = { BTS: "BTS — Bac+2", Licence: "Licence / Bachelor — Bac+3", Master: "Master — Bac+5" };
  const accentColors: Record<string, string> = { BTS: G, Licence: Y, Master: "#0B0B0B" };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "#F0FAF0", color: G }}>Programmes</span>
          <h2 className="text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800 }}>
            Choisissez votre niveau
          </h2>
        </div>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-2xl p-1.5" style={{ background: BG }}>
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={tab === t ? { background: accentColors[t], color: t === "Licence" ? "#0B0B0B" : "white", boxShadow: "0 4px 12px rgba(0,0,0,0.12)" } : { color: "#6B7280" }}
              >
                {labels[t]}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <Link to={`/formations/enseignement-superieur/${p.slug}`} key={p.code} className="bg-white rounded-2xl p-6 border-2 border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = acc)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "transparent")}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: acc === Y ? "#FFF8CC" : "#F0FAF0" }}>
                      <Icon size={22} style={{ color: acc === "#0B0B0B" ? G : acc }} />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: acc, color: acc === Y ? "#0B0B0B" : "white" }}>
                      {p.code}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{p.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
                    <span>⏱ {p.dur}</span>
                    <span>{p.spots} places</span>
                  </div>
                </Link>
        </div>
      </div>
    </section>
  );
}

export function HigherEducationPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <PageHero
        title="Enseignement Supérieur"
        subtitle="Construisez votre avenir professionnel avec des diplômes reconnus — BTS, Licence, Master."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Enseignement Supérieur" }]}
        accent={G}
      >
        <div className="flex flex-wrap gap-3 mt-8">
          {[{ l: "BTS", bg: G }, { l: "Licence / Bachelor", bg: Y }, { l: "Master", bg: "white" }].map(({ l, bg }) => (
            <span key={l} className="px-5 py-2 rounded-full text-sm font-semibold" style={{ background: bg, color: bg === Y ? "#0B0B0B" : bg === "white" ? "#0B0B0B" : "white" }}>{l}</span>
          ))}
        </div>
      </PageHero>

      {/* 1. Trust Stats (Standardized) */}
      <TrustStatsSection />

      {/* 2. Program Selection */}
      <ProgramSelector />

      {/* 3. Social Proof (Standardized) */}
      <TestimonialCarousel />

      {/* 4. Final Conversion (Standardized) */}
      <FinalCtaBanner />
    </main>
  );
}
