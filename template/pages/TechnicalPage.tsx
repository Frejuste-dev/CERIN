import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Zap, Calculator, HardHat, FileText, Wrench, HeartPulse, TrendingUp, Briefcase } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";
import { 
  FinalCtaBanner, 
  TrustStatsSection, 
  TestimonialCarousel 
} from "../components";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

// Career grid
function CareerGrid() {
  const careers = [
    { icon: Zap, title: "Électricien", desc: "Installations électriques résidentielles et industrielles", tag: "Industrie", tagBg: G },
    { icon: Calculator, title: "Comptable", desc: "Gestion financière et comptabilité des entreprises", tag: "Tertiaire", tagBg: Y },
    { icon: HardHat, title: "Génie Civil", desc: "Travaux publics, bâtiment et construction", tag: "BTP", tagBg: G },
    { icon: FileText, title: "Secrétaire", desc: "Gestion administrative et assistanat de direction", tag: "Tertiaire", tagBg: Y },
    { icon: Wrench, title: "Mécanicien", desc: "Maintenance et réparation de véhicules et machines", tag: "Industrie", tagBg: G },
    { icon: HeartPulse, title: "Médico-Social", desc: "Aide à la personne et soins de proximité", tag: "Social", tagBg: "#0B0B0B" },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-3" style={{ background: "#FFF9CC", color: "#8A7000" }}>Métiers préparés</span>
          <h2 className="text-gray-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", fontWeight: 800 }}>
            Des formations orientées métier
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Chaque cursus est conçu avec les professionnels du secteur pour garantir une insertion rapide.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careers.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="group p-6 rounded-2xl border-2 border-transparent hover:border-yellow-300 hover:shadow-lg transition-all cursor-pointer" style={{ background: BG }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "white" }}>
                    <Icon size={22} style={{ color: G }} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: c.tagBg, color: c.tagBg === Y ? "#0B0B0B" : "white" }}>
                    {c.tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{c.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Fields
function Fields() {
  const industrial = [
    { code: "F2", name: "Génie Électronique", icon: Zap, desc: "Électronique, automatisme, télécommunications" },
    { code: "F3", name: "Électrotechnique", icon: Zap, desc: "Électricité industrielle, motorisation" },
    { code: "F4", name: "Génie Civil", icon: HardHat, desc: "Topographie, béton armé, dessin technique" },
  ];
  const admin = [
    { code: "G2", name: "Comptabilité", icon: Calculator, desc: "Comptabilité générale, gestion, fiscalité" },
    { code: "G3", name: "Secrétariat", icon: FileText, desc: "Organisation, bureautique, communication" },
    { code: "G4", name: "Action Sociale", icon: HeartPulse, desc: "Santé, social, service à la personne" },
  ];

  const FieldCard = ({ item }: { item: typeof industrial[0] }) => {
    const Icon = item.icon;
    return (
      <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F0FAF0" }}>
            <Icon size={18} style={{ color: G }} />
          </div>
          <span className="font-black text-xs px-2 py-1 rounded-lg" style={{ background: G, color: "white", fontFamily: "'Poppins', sans-serif" }}>
            Série {item.code}
          </span>
        </div>
        <p className="font-bold text-gray-800 text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.name}</p>
        <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
      </div>
    );
  };

  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 rounded-full" style={{ background: G }} />
              <div>
                <h2 className="font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem" }}>Filières Industrielles</h2>
                <p className="text-gray-500 text-sm">Mécanique, électrique, génie civil</p>
              </div>
            </div>
            <div className="grid gap-4">
              {industrial.map((i) => <FieldCard key={i.code} item={i} />)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 rounded-full" style={{ background: Y }} />
              <div>
                <h2 className="font-black text-gray-900" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.5rem" }}>Filières Tertiaires</h2>
                <p className="text-gray-500 text-sm">Gestion, secrétariat, action sociale</p>
              </div>
            </div>
            <div className="grid gap-4">
              {admin.map((i) => <FieldCard key={i.code} item={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnicalPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <PageHero
        title="Enseignement Technique & Professionnel"
        subtitle="Apprenez un métier et entrez dans la vie active avec des compétences reconnues par les professionnels."
        image="https://source.unsplash.com/1200x600/?university,campus,africa"
        breadcrumbs={[{ label: "Technique & Professionnel" }]}
        accent={Y}
      >
        <div className="flex flex-wrap gap-3 mt-8">
          {["CAP", "BT", "Bac Technologique", "Alternance"].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full text-sm font-semibold" style={{ background: Y, color: "#0B0B0B" }}>{tag}</span>
          ))}
        </div>
      </PageHero>

      {/* 1. Trust Stats (Standardized) */}
      <TrustStatsSection />

      {/* 2. Specific Content */}
      <CareerGrid />
      <Fields />

      {/* 3. Social Proof (Standardized) */}
      <TestimonialCarousel />

      {/* 4. Final Conversion (Standardized) */}
      <FinalCtaBanner />
    </main>
  );
}
