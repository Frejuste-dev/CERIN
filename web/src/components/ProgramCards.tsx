import { useState } from "react";
import { ArrowRight, BookOpen, Wrench, GraduationCap } from "lucide-react";

const programs = [
  {
    id: "general",
    icon: BookOpen,
    title: "Enseignement Général",
    subtitle: "Collège & Lycée",
    description:
      "Un parcours académique solide du collège au baccalauréat, préparant les élèves aux études supérieures avec un encadrement personnalisé.",
    levels: ["6ème – 3ème", "Seconde – Terminale", "Baccalauréat"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #0F2010, #2EA82A)",
    tag: "Dès la 6ème",
    href: "#general",
  },
  {
    id: "technique",
    icon: Wrench,
    title: "Enseignement Technique & Professionnel",
    subtitle: "Bac Pro & Diplômes Techniques",
    description:
      "Des formations pratiques et professionnalisantes pour intégrer rapidement le marché du travail ou poursuivre en BTS/Licence Pro.",
    levels: ["CAP / BEP", "Bac Professionnel", "Mention Complémentaire"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #1A3A00, #4CAF28)",
    tag: "Alternance possible",
    href: "#technique",
  },
  {
    id: "superieur",
    icon: GraduationCap,
    title: "Enseignement Supérieur",
    subtitle: "BTS · Licence · Master",
    description:
      "Des cursus de l'enseignement supérieur reconnus par l'État, en formation initiale ou en alternance, pour des carrières à haute valeur ajoutée.",
    levels: ["BTS (Bac+2)", "Bachelor (Bac+3)", "Master (Bac+5)"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, #0F2010, #1E6A1A)",
    tag: "Diplômes reconnus",
    href: "#superieur",
  },
];

export function ProgramCards() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="programmes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: "#F0FAF0", color: "#2EA82A" }}>
            Nos filières
          </div>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700 }}>
            Trois voies d'excellence
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
             Quel que soit votre projet de vie, le Groupe CERIN vous propose un parcours adapté à vos ambitions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog) => {
            const Icon = prog.icon;
            const isHov = hovered === prog.id;
            return (
              <div
                key={prog.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  boxShadow: isHov ? "0 24px 48px rgba(46,168,42,0.25)" : "0 4px 20px rgba(0,0,0,0.08)",
                  transform: isHov ? "translateY(-8px)" : "translateY(0)",
                }}
                onMouseEnter={() => setHovered(prog.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   onError={(e) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80';
    e.currentTarget.onerror = null;
  }} />
                  <div className="absolute inset-0" style={{ background: prog.gradient, opacity: 0.75 }} />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "#F5C800", color: "#0F2010" }}>
                    {prog.tag}
                  </div>
                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#2EA82A" }}>
                    {prog.subtitle}
                  </p>
                  <h3 className="text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.15rem", fontWeight: 700 }}>
                    {prog.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {prog.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {prog.levels.map((lvl) => (
                      <span key={lvl} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "#F0FAF0", color: "#1A5A1A" }}>
                        {lvl}
                      </span>
                    ))}
                  </div>

                  <a
                    href={prog.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: "#2EA82A", fontFamily: "'Poppins', sans-serif" }}
                  >
                    Explorer cette filière
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
